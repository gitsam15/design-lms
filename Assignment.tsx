import { Link } from "react-router";
import { Clock, CheckCircle, AlertCircle } from "lucide-react";
import type { Assignment } from "../data/mockData";

interface AssignmentCardProps {
  assignment: Assignment;
}

export function AssignmentCard({ assignment }: AssignmentCardProps) {
  const dueDate = new Date(assignment.dueDate);
  const today = new Date();
  const daysUntilDue = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  const statusConfig = {
    pending: {
      icon: Clock,
      color: "text-orange-500",
      bg: "bg-orange-50",
      text: "Belum Selesai"
    },
    submitted: {
      icon: CheckCircle,
      color: "text-green-500",
      bg: "bg-green-50",
      text: "Sudah Dikumpulkan"
    },
    late: {
      icon: AlertCircle,
      color: "text-red-500",
      bg: "bg-red-50",
      text: "Terlambat"
    }
  };

  const config = statusConfig[assignment.status];
  const Icon = config.icon;

  return (
    <Link to={`/assignment/${assignment.id}`}>
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-gray-900 mb-1 line-clamp-1">{assignment.title}</h4>
            <p className="text-sm text-gray-500">{assignment.courseName}</p>
          </div>
          <div className={`${config.bg} ${config.color} p-2 rounded-lg flex-shrink-0 ml-2`}>
            <Icon className="w-4 h-4" />
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-sm">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">
              {daysUntilDue > 0 ? `${daysUntilDue} hari lagi` : daysUntilDue === 0 ? 'Hari ini' : 'Terlambat'}
            </span>
          </div>
          <span className={`text-sm ${config.color}`}>{config.text}</span>
        </div>

        {assignment.progress !== undefined && assignment.status === 'pending' && (
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>Progress</span>
              <span>{assignment.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-primary h-1.5 rounded-full transition-all"
                style={{ width: `${assignment.progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
