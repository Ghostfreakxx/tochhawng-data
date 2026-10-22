"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "../data/sections";

const links = [{ shortName: "Overview", href: "/" }, ...sections];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/85 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-4">
          <Link href="/" className="text-lg font-bold tracking-tight text-white">
            Tochhawng <span className="text-green-400">Data</span>
          </Link>
          <p className="hidden text-sm text-zinc-500 sm:block">
            Mizoram through numbers
          </p>
        </div>

        <nav
          aria-label="Dashboards"
          className="-mx-4 flex gap-1 overflow-x-auto px-4 [scrollbar-width:none] sm:-mx-6 sm:px-6"
        >
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap border-b-2 px-3 py-2.5 text-sm transition ${
                  active
                    ? "border-green-400 text-white"
                    : "border-transparent text-zinc-400 hover:text-white"
                }`}
              >
                {link.shortName}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
