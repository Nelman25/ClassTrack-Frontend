import { SiGoogleclassroom } from "react-icons/si";
import { TbEdit } from "react-icons/tb";
import { FiEdit3 } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarTab from "./SidebarTab";

export default function Sidebar() {
  const [active, setActive] = useState("masterlist");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("grading-sheet")) setActive("grading-sheet");
    else if (path.includes("attendance-sheet")) setActive("attendance-sheet");
    else if (path.includes("masterlist")) setActive("masterlist");
  }, [location]);

  return (
    <aside className="w-full h-screen max-w-[16rem] flex flex-col justify-between py-6 px-4 bg-royalIndigo/95 sidebar">
      <div className="flex flex-col">
        <div className="flex items-center mb-12">
          <div className="p-1 bg-yellow-500/70 mr-3 rounded-xl shadow">
            <img
              src="/src/assets/NU_shield.png"
              alt="NU logo"
              className="size-12"
            />
          </div>
          <div>
            <span className="text-blue-400/90 text-2xl font-bold">Class</span>
            <span className="text-yellow-400/90 text-2xl font-bold">Track</span>
          </div>
        </div>
        <nav>
          <ul>
            <Link to="/dashboard">
              <li className="flex items-center gap-2 text-white text-base w-full px-4 py-2 group hover:bg-indigoBlue hover:text-white rounded-xl">
                <div className="p-3 bg-white/20 rounded-xl">
                  <MdSpaceDashboard className="group-hover:text-white text-white" />
                </div>
                <span>Dashboard</span>
              </li>
            </Link>
            <SidebarTab path="masterlist" active={active}>
              <div className="p-3 bg-white/20 rounded-xl">
                <SiGoogleclassroom
                  className={`text-white group-hover:text-white ${
                    active === "masterlist" && "text-white "
                  }`}
                />
              </div>
              <span>Masterlist</span>
            </SidebarTab>
            <SidebarTab path="grading-sheet" active={active}>
              <div className="p-3 bg-white/20 rounded-xl">
                <TbEdit
                  className={`text-white group-hover:text-white ${
                    active === "grading-sheet" && "text-white"
                  }`}
                />
              </div>

              <span>Grading sheet</span>
            </SidebarTab>
            <SidebarTab path="attendance-sheet" active={active}>
              <div className="p-3 bg-white/20 rounded-xl">
                <FiEdit3
                  className={`text-white group-hover:text-white ${
                    active === "attendance-sheet" && "text-white"
                  }`}
                />
              </div>

              <span>Attendance sheet</span>
            </SidebarTab>
          </ul>
        </nav>
      </div>
      <button className="flex w-full pl-16 items-center gap-2 text-white text-lg group hover:text-yellow-400">
        <CiLogout className="text-2xl group-hover:text-yellow-400" />
        <span>Logout</span>
      </button>
    </aside>
  );
}
