import Sidebar from "../components/home/Sidebar";
import BottomNav from "../components/home/BottomNav";
import Header from "../components/home/Header";
import SearchBar from "../components/home/SearchBar";
import PromoCard from "../components/home/PromoCard";
import CategoryList from "../components/home/CategoryList";
import CourseCard from "../components/home/CourseCard";
import SectionHeader from "../components/home/SectionHeader";

export default function HomeScreen() {
  return (
    <div className="block md:flex">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="md:bg-gray-100 p-5">
          <SearchBar />
          <PromoCard />

          <section className="mb-6">
            <SectionHeader title="Categories" />
            <CategoryList />
          </section>

          <section className="mb-6">
            <SectionHeader title="Recommend Course" />
            <div className="flex gap-5 overflow-x-auto">
              <CourseCard title="Albert Flores" author="natealex" price="$56" />
              <CourseCard title="Albert Flores" author="natealex" price="$56" />
            </div>
          </section>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}