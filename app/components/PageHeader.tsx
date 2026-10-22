import Link from "next/link";
import { lastUpdated } from "../data/sections";

type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="pt-10 pb-8">
      <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
        <Link href="/" className="transition hover:text-green-400">
          Overview
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-300">{title}</span>
      </nav>

      <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h1>

      <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
        {description}
      </p>

      <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
        <span className="size-1.5 rounded-full bg-green-400" aria-hidden />
        Updated {lastUpdated}
      </p>
    </header>
  );
}
