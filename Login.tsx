import { Search } from "lucide-react";
import { CourseCard } from "../components/CourseCard";
import { AssignmentCard } from "../components/AssignmentCard";
import { courses, assignments } from "../data/mockData";
import { useUser } from "../contexts/UserContext";

export function Home() {
  const { userData } = useUser();
  const upcomingAssignments = assignments.filter(a => a.status === 'pending');

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-primary text-white px-4 pt-6 pb-6 rounded-b-3xl">
        <p className="text-sm opacity-90 mb-1">Selamat datang,</p>
        <h1 className="text-2xl mb-4 text-white">{userData.name}</h1>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cari mata kuliah, materi, atau tugas"
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>
      </div>

      {/* Upcoming Assignments */}
      {upcomingAssignments.length > 0 && (
        <div className="px-4 mt-2">
          <div className="flex items-center justify-between mb-3">
            <h3>Tugas Mendatang</h3>
            <button className="text-sm text-primary">Lihat Semua</button>
          </div>
          <div className="space-y-6">
            {upcomingAssignments.map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </div>
      )}

      {/* Courses List */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h3>Mata Kuliah</h3>
          <button className="text-sm text-primary">Lihat Semua</button>
        </div>
        <div className="space-y-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}