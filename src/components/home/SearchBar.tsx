import { IoIosSearch } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";

export default function SearchBar() {
  return (
    <div className="flex gap-10 mb-6">
      <div className="flex p-3 bg-white rounded-full items-center gap-2 flex-1">
        <IoIosSearch size={20} color="#4a5565" />
        <input type="text" placeholder="Search any course" className="w-full outline-none" />
      </div>
      <div className="p-3 bg-gray-100 rounded-full">
        <VscSettings size={20} color="#4a5565" />
      </div>
    </div>
  );
}