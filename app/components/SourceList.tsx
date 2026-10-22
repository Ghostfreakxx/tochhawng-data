import type { Source } from "../data/types";

export default function SourceList({ sources }: { sources: Source[] }) {
  return (
    <section className="mt-10 border-t border-line pt-6">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-subtle">
        Sources
      </h2>
      <ul className="mt-3 space-y-2 text-sm text-muted">
        {sources.map((source) => (
          <li key={source.label}>
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-line-strong underline-offset-4 transition hover:text-accent hover:decoration-accent"
              >
                {source.label}
              </a>
            ) : (
              source.label
            )}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs leading-5 text-subtle">
        Some figures come from press reports of official statements and may be
        revised. Confirm with the original department before citing them.
      </p>
    </section>
  );
}
