import { useState } from "react";
import AdminPanel from '../Components/AdminPanel/AdminPanel'

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-full flex flex-col flex-1">
        <main className="p-6">
          <AdminPanel/>
        </main>
      </div>
    </div>
  );
}
export default DashboardPage