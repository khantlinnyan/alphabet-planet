export default function BookMetaChips({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  if (!items?.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it) => (
        <span
          key={`${it.label}-${it.value}`}
          className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-white/85"
        >
          <span className="text-white/70">{it.label}:</span>{" "}
          <span className="text-white">{it.value}</span>
        </span>
      ))}
    </div>
  );
}
