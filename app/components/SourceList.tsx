import type { Source } from "../data/types";

export default function SourceList({ sources }: { sources: Source[] }) {
  return (
    <section className="mt-10 border-t border-zinc-800 pt-6">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
        Sources
      </h2>
      <ul className="mt-3 space-y-2 text-sm text-zinc-400">
        {sources.map((source) => (
          <li key={source.label}>
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-700 underline-offset-4 transition hover:text-green-400 hover:decoration-green-400"
              >
                {source.label}
              </a>
            ) : (
              source.label
            )}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs leading-5 text-zinc-600">
        Some figures come from press reports of official statements and may be
        revised. Confirm with the original department before citing them.
      </p>
    </section>
  );
}
