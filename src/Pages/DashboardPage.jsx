import { useState } from "react";
import  SidePanel  from "../Components/Side Panel/SidePanel";
import  AdminPanel  from '../Components/AdminPanel/AdminPanel'
// import { ThemeProvider } from "./context/ThemeContext";
import Header2 from "../Components/Header/Header2";
import Footer2 from "../Components/Footer/Footer2";
// import { BlogStats } from "./components/BlogStats";
// import { BlogPostsTable } from "./components/BlogPostsTable";

const DashboardPage = () => {
  return (
    <>
    <Header2/>
    <SidePanel/>
      <div className="flex h-screen">
        <div className="w-full flex flex-col flex-1">
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