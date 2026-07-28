type Props = {
  name: string;
};

export default function TechBadge({ name }: Props) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white">
      {name}
    </span>
  );
}