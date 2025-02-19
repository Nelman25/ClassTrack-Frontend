import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <div className="w-full h-full max-w-[1920px]">
      <Header />
      <main className="flex">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
}
