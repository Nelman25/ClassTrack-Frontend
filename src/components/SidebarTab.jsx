import { Link } from "react-router-dom";

export default function SidebarTab({ active, path, children }) {
  return (
    <Link to={`/${path}`}>
      <li
        className={`flex items-center gap-2 text-white text-base w-full px-4 py-2 group hover:bg-white/10 hover:text-white rounded-xl my-6 transition ${
          active === path && "bg-white/10 text-white"
        }`}
      >
        {children}
      </li>
    </Link>
  );
}
