export default function Header() {
  return (
    <header className="flex justify-between p-5 md:border-b md:border-gray-200">
      <div>
        <p>Welcome Back-!</p>
        <h4>Albert Fores</h4>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-neutral-200 rounded-full" />
      </div>
    </header>
  );
}