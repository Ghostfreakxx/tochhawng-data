export default function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-3 text-ink-2 md:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-6">
          <span
            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-solid"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
