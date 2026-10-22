import Link from "next/link";
import { sections } from "./data/sections";

export default function NotFound() {
  return (
    <section className="py-24">
      <p className="text-sm font-medium text-accent">404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        The link may be old or mistyped. Try one of the dashboards below.
      </p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {sections.map((section) => (
          <li key={section.href}>
            <Link
              href={section.href}
              className="inline-block rounded-full border border-line-strong px-4 py-2 text-sm text-ink-2 transition hover:border-accent hover:text-ink"
            >
              {section.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
