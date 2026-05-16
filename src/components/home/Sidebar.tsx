import { MdDashboard } from "react-icons/md";
import { FaBook, FaUser, FaGraduationCap } from "react-icons/fa";
import type { ReactNode } from "react";

type NavItem = {
  name: string;
  logo: ReactNode;
};

const ICON_SIZE = 22;
const ICON_COLOR = "#99a1af";

export const NAV_ITEMS: NavItem[] = [
  { name: "Dashboard", logo: <MdDashboard color={ICON_COLOR} size={ICON_SIZE} /> },
  { name: "All Course", logo: <FaGraduationCap color={ICON_COLOR} size={ICON_SIZE} /> },
  { name: "My Learning", logo: <FaBook color={ICON_COLOR} size={ICON_SIZE} /> },
  { name: "Profile", logo: <FaUser color={ICON_COLOR} size={ICON_SIZE} /> },
];

export default function Sidebar() {
  return (
    <div className="md:flex hidden flex-col gap-5 w-80 p-5 md:border-r md:border-gray-200">
      <div>
        <h4 className="text-blue-950 mb-2">UpSkill</h4>
        <p>Momentum for Learners</p>
      </div>
      {NAV_ITEMS.map((item) => (
        <div key={item.name} className="flex gap-4 items-center py-4 px-2">
          {item.logo}
          {item.name}
        </div>
      ))}
    </div>
  );
}