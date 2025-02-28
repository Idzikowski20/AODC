import { useState } from "react";
import  SidePanel  from "../Components/Side Panel/SidePanel";
import  AdminPanel  from '../Components/AdminPanel/AdminPanel'
// import { ThemeProvider } from "./context/ThemeContext";
import Header2 from "../Components/Header/Header2";
// import { BlogStats } from "./components/BlogStats";
// import { BlogPostsTable } from "./components/BlogPostsTable";

const DashboardPage = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col flex-1">
          <main className="p-6">
            <AdminPanel/>
            {/* <BlogStats />
            <BlogPostsTable /> */}
          </main>
        </div>
      </div>
    </>
  );
}
export default DashboardPage