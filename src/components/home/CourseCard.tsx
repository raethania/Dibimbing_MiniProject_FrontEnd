type Props = {
  title: string;
  author: string;
  price: string;
};

export default function CourseCard({ title, author, price }: Props) {
  return (
    <div className="min-w-64 max-w-80 flex-1 bg-white rounded-2xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.07)] flex flex-col overflow-hidden">
      <div className="w-full h-48 bg-red-600" />
      <div className="p-5 flex justify-between">
        <div>
          <div className="text-neutral-800 text-base font-semibold leading-6">{title}</div>
          <div className="text-zinc-500 text-xs leading-5">Created by {author}</div>
        </div>
        <div className="text-indigo-600 text-xl font-semibold self-center">{price}</div>
      </div>
    </div>
  );
}