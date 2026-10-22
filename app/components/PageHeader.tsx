import Link from "next/link";
import { lastUpdated } from "../data/sections";

type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="pt-10 pb-8">
      <nav aria-label="Breadcrumb" className="text-sm text-subtle">
        <Link href="/" className="transition hover:text-accent">
          Overview
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink-2">{title}</span>
      </nav>

      <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>

      <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
        {description}
      </p>

      <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
        <span className="size-1.5 rounded-full bg-accent-solid" aria-hidden />
        Updated {lastUpdated}
      </p>
    </header>
  );
}
