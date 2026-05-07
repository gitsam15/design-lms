import { useParams, useNavigate } from "react-router";
import { ArrowLeft, ChevronDown, ChevronUp, CheckCircle, Lock, PlayCircle, FileText, ClipboardList } from "lucide-react";
import { ProgressBar } from "../components/ProgressBar";
import { courses, courseWeeks } from "../data/mockData";
import { useState } from "react";

export function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [expandedWeeks, setExpandedWeeks] = useState<string[]>([]);
  
  const course = courses.find(c => c.id === courseId);
  const weeks = courseWeeks[courseId || ""] || [];

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Course not found</p>
      </div>
    );
  }

  const toggleWeek = (weekId: string) => {
    setExpandedWeeks(prev => 
      prev.includes(weekId) 
        ? prev.filter(id => id !== weekId)
        : [...prev, weekId]
    );
  };

  const getMaterialIcon = (type: string) => {
    switch (type) {
      case "video":
        return PlayCircle;
      case "pdf":
        return FileText;
      case "quiz":
      case "assignment":
        return ClipboardList;
      default:
        return FileText;
    }
  };

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white px-4 pt-6 pb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-4 text-white hover:opacity-80"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Kembali</span>
        </button>
        
        <h1 className="mb-1 text-white">{course.name}</h1>
        <p className="text-white/90 text-sm">{course.instructor}</p>
      </div>

      {/* Progress Section */}
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Progress Kursus</span>
            <span className="font-medium text-gray-900">{course.progress}%</span>
          </div>
          <ProgressBar progress={course.progress} className="mb-2" />
          <p className="text-sm text-gray-500">
            {course.modules.completed} dari {course.modules.total} modul selesai
          </p>
        </div>
      </div>

      {/* Continue Learning Button */}
      <div className="px-4 mt-4">
        <button className="w-full bg-primary text-white py-3 rounded-xl hover:bg-primary/90 transition-colors">
          Lanjutkan Belajar
        </button>
      </div>

      {/* Weeks List */}
      <div className="px-4 mt-6">
        <h3 className="mb-4">Modul Pembelajaran</h3>
        <div className="space-y-3">
          {weeks.map((week) => {
            const isExpanded = expandedWeeks.includes(week.id);
            const completedMaterials = week.materials.filter(m => m.completed).length;
            const totalMaterials = week.materials.length;
            
            return (
              <div
                key={week.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Week Header */}
                <button
                  onClick={() => week.isUnlocked && toggleWeek(week.id)}
                  disabled={!week.isUnlocked}
                  className={`w-full p-4 flex items-center justify-between ${
                    week.isUnlocked ? "hover:bg-gray-50" : "opacity-60 cursor-not-allowed"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {week.isUnlocked ? (
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        completedMaterials === totalMaterials 
                          ? "bg-green-100 text-green-600" 
                          : "bg-primary/10 text-primary"
                      }`}>
                        {completedMaterials === totalMaterials ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          <span className="font-semibold">{week.weekNumber}</span>
                        )}
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-gray-400" />
                      </div>
                    )}
                    <div className="text-left">
                      <h4 className="font-medium text-gray-900">Minggu {week.weekNumber}</h4>
                      <p className="text-sm text-gray-500">{week.title}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {completedMaterials}/{totalMaterials} materi selesai
                      </p>
                    </div>
                  </div>
                  {week.isUnlocked && (
                    isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )
                  )}
                </button>

                {/* Materials List */}
                {isExpanded && week.isUnlocked && (
                  <div className="border-t border-gray-100 bg-gray-50 px-4 py-2">
                    {week.materials.map((material) => {
                      const Icon = getMaterialIcon(material.type);
                      
                      return (
                        <button
                          key={material.id}
                          onClick={() => navigate(`/course/${courseId}/material/${material.id}`)}
                          className="w-full flex items-start gap-3 py-3 hover:bg-white rounded-lg px-2 transition-colors"
                        >
                          <div className={`flex-shrink-0 ${
                            material.completed ? "text-green-500" : "text-gray-400"
                          }`}>
                            {material.completed ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : (
                              <Icon className="w-5 h-5" />
                            )}
                          </div>
                          <div className="flex-1 text-left">
                            <p className={`text-sm ${
                              material.completed ? "text-gray-600" : "text-gray-900"
                            }`}>
                              {material.title}
                            </p>
                            {material.duration && (
                              <p className="text-xs text-gray-400 mt-1">{material.duration}</p>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}