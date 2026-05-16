export default function CategoryList() {
  const categories = ["Design", "Business", "Tech", "Marketing"];

  return (
    <div className="flex gap-4 overflow-x-auto">
      {categories.map((cat) => (
        <div key={cat}>
          <div className="w-14 h-14 md:w-20 md:h-20 bg-red-300 rounded-xl shadow-sm flex justify-center items-center" />
          <p className="text-center">{cat}</p>
        </div>
      ))}
    </div>
  );
}