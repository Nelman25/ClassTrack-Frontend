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
    <aside className="w-full max-w-[15rem] h-[50rem] pt-24 sidebar relative">
      <nav>
        <ul>
          <Link to="/dashboard">
            <li className="flex items-center gap-2 text-slate-700 text-lg w-full px-4 py-4 group hover:bg-indigoBlue hover:text-white">
              <MdSpaceDashboard className="group-hover:text-white text-royalIndigo" />
              Dashboard
            </li>
          </Link>
          <SidebarTab path="masterlist" active={active}>
            <SiGoogleclassroom
              className={`text-royalIndigo group-hover:text-white ${
                active === "masterlist" && "text-white "
              }`}
            />{" "}
            Masterlist
          </SidebarTab>
          <SidebarTab path="grading-sheet" active={active}>
            <TbEdit
              className={`text-royalIndigo group-hover:text-white ${
                active === "grading-sheet" && "text-white"
              }`}
            />
            Grading sheet
          </SidebarTab>
          <SidebarTab path="attendance-sheet" active={active}>
            <FiEdit3
              className={`text-royalIndigo group-hover:text-white ${
                active === "attendance-sheet" && "text-white"
              }`}
            />
            Attendance sheet
          </SidebarTab>
        </ul>
      </nav>
      <button className="flex w-full items-center justify-center gap-2 font-medium absolute bottom-0 text-lg text-slate-800  group hover:text-blue-400">
        <CiLogout className="text-xl group-hover:text-blue-400" /> Logout
      </button>
    </aside>
  );
}
