import { Outlet } from "react-router-dom";
import SidebarComponent from "./SidebarComponent";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar for Desktop */}
      <SidebarComponent />
      {/* Main Content */}
      <div className="w-full sm:w-[calc(100%-16rem)] bg-backgroundaccent ml-auto  min-h-screen">
        {/* Header with Menu Toggle for Mobile */}
        <header className="h-[5rem] flex items-center justify-between gap-8 bg-background text-foreground">
          <div className="ml-8">
            <h2>Welcome back, Olivia</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your current sales summary and activity.
            </p>
          </div>
          {/* Right Side - Search Box */}
          <div className="relative w-full max-w-xs mr-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-xl border border-gray-300 bg-backgroundaccent px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
        </header>

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
