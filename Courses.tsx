import { Link, useLocation } from "react-router";
import { Home, BookOpen, Bell, User } from "lucide-react";

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/courses", icon: BookOpen, label: "Courses" },
    { path: "/notifications", icon: Bell, label: "Notifications" },
    { path: "/profile", icon: User, label: "Profile" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 safe-area-bottom">
      <div className="max-w-md mx-auto flex items-center justify-around px-4 pt-2 pb-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center gap-1 relative"
            >
              {isActive && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-b-full" />
              )}
              <Icon
                className={`w-7 h-7 transition-colors ${
                  isActive ? "text-primary" : "text-gray-400 dark:text-gray-500"
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-xs transition-colors ${
                isActive ? "text-primary" : "text-gray-400 dark:text-gray-500"
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}