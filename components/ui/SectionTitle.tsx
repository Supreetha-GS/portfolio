type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-14">

      <p className="mb-2 font-semibold uppercase tracking-[0.35em] text-blue-400">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold">
        {title}
      </h2>

    </div>
  );
}