import { Outlet } from "react-router";
import { BottomNav } from "./BottomNav";

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Container */}
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 min-h-screen shadow-xl">
        <Outlet />
        <BottomNav />
      </div>
    </div>
  );
}
