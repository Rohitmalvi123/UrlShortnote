import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>

      <div className="p-10 text-center bg-gray-800 mt-10x x">
        Made by 👨‍💻 Sahil Patil
      </div>
    </div>
  );
}

export default AppLayout;
