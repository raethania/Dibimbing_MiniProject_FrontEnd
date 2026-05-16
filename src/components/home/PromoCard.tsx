export default function PromoCard() {
  return (
    <div className="px-5 py-6 bg-neutral-800 rounded-xl flex items-center gap-5 mb-6 md:h-70">
      <div className="flex-2 flex flex-col justify-start items-start gap-2 md:self-stretch md:gap-5 md:justify-center shrink-0">
        <div className="inline-flex items-center gap-1.5">
          <span className="text-white text-sm">Ongoing</span>
          <div className="w-1 h-1 bg-white rounded-full" />
          <span className="text-white text-sm">22/32</span>
        </div>
        <div className="pb-2 flex flex-col gap-3">
          <h5 className="text-white font-bold text-2xl">Basic UI/UX Designer</h5>
          <p className="text-white">Larasati Putri Maharani</p>
        </div>
        <a href="#" className="button-primary text-center text-white rounded-full px-4 py-1 text-sm font-semibold">
          Checkout
        </a>
      </div>
      <div className="min-w-20 min-h-20 bg-white flex-1" />
    </div>
  );
}