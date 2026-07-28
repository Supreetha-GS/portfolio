export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center">

      <span className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-500">
        Scroll
      </span>

      <div className="flex h-12 w-7 justify-center rounded-full border-2 border-slate-600 p-1">

        <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400"></div>

      </div>

    </div>
  );
}