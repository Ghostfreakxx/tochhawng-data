import Link from "next/link";
import { lastUpdated, sections } from "../data/sections";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-lg font-bold text-ink">
            Tochhawng <span className="text-accent">Data</span>
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
            An independent public-interest project. This is not an official
            Government of Mizoram website. Figures are compiled from budget
            documents, government releases, official portals and news reports.
            Check the linked source before citing a number.
          </p>
          <p className="mt-4 text-sm text-subtle">
            Last updated {lastUpdated}
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="text-muted transition hover:text-accent"
            >
              {section.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
