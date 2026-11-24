export type Source = {
  label: string;
  url?: string;
};

type SourcesProps = {
  sources: Source[];
  /** Date the figures on the page were last checked, e.g. "November 2026". */
  updated?: string;
};

export default function Sources({ sources, updated }: SourcesProps) {
  return (
    <div className="mt-10 border-t border-zinc-800 pt-6 text-sm text-gray-500">
      <p className="font-semibold text-gray-400 mb-2">
        Sources{updated ? ` (figures checked ${updated})` : ""}
      </p>
      <ul className="space-y-1 list-disc pl-5">
        {sources.map((s) => (
          <li key={s.label}>
            {s.url ? (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 underline underline-offset-2"
              >
                {s.label}
              </a>
            ) : (
              s.label
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
