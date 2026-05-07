import { Link } from "react-router";
import { ProgressBar } from "./ProgressBar";
import { BookOpen } from "lucide-react";
import type { Course } from "../data/mockData";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/course/${course.id}`}>
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">{course.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{course.instructor}</p>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium text-gray-900">{course.progress}%</span>
              </div>
              <ProgressBar progress={course.progress} />
              
              <div className="flex items-center justify-between text-sm pt-1">
                <span className="text-gray-500">
                  {course.modules.completed} dari {course.modules.total} modul
                </span>
                <span className="text-xs text-primary">{course.lastAccess}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
