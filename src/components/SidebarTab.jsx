import { Link } from "react-router-dom";

export default function SidebarTab({ active, path, children }) {
  return (
    <Link to={`/${path}`}>
      <li
        className={`flex items-center gap-2 text-slate-700 text-lg w-full px-4 py-4 group hover:bg-indigoBlue hover:text-white ${
          active === path && "bg-indigoBlue text-white"
        }`}
      >
        {children}
      </li>
    </Link>
  );
}
