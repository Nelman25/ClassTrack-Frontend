import { VscLoading } from "react-icons/vsc";

export default function Loading({ className }) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
    >
      <VscLoading className="animate-spin text-[10rem] text-slate-200" />
    </div>
  );
}
