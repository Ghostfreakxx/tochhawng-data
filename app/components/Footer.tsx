import Link from "next/link";
import { lastUpdated, sections } from "../data/sections";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-800">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-lg font-bold text-white">
            Tochhawng <span className="text-green-400">Data</span>
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            An independent public-interest project. This is not an official
            Government of Mizoram website. Figures are compiled from budget
            documents, government releases, official portals and news reports.
            Check the linked source before citing a number.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Last updated {lastUpdated}
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="text-zinc-400 transition hover:text-green-400"
            >
              {section.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
