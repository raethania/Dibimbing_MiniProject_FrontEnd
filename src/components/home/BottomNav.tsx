import { NAV_ITEMS } from "./Sidebar";

export default function BottomNav() {
  return (
    <div className="flex justify-between fixed bottom-0 left-0 right-0 bg-white py-5 px-7 border-t-gray-200 border-t md:hidden">
      {NAV_ITEMS.map((item) => (
        <div key={item.name} className="cursor-pointer">{item.logo}</div>
      ))}
    </div>
  );
}