import Link from "next/link";
import type { Metadata } from "next";
import JobBoard from "./JobBoard";
import { jobs, officialJobSites } from "../data/jobs";

export const metadata: Metadata = {
  title: "Mizoram Government Jobs | Tochhawng Data",
  description:
    "Open government job vacancies in Mizoram, with last dates and links to official recruitment portals.",
};

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-4">Mizoram Jobs Portal</h1>

        <p className="text-gray-400 mb-10 max-w-3xl">
          Government job vacancies in Mizoram, sorted by closing date. Listings
          close automatically after their last date. Always read the official
          notification before applying.
        </p>

        <JobBoard jobs={jobs} />

        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-4">Official Recruitment Sites</h2>
          <p className="text-gray-400 mb-6">
            New notices appear here first. Check them regularly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {officialJobSites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 hover:border-green-700 transition"
              >
                <h3 className="font-semibold text-lg">{site.name}</h3>
                <p className="text-gray-500 text-sm mt-2">{site.description}</p>
                <p className="text-green-400 text-sm mt-3">
                  {site.url.replace(/^https?:\/\//, "")} →
                </p>
              </a>
            ))}
          </div>
        </section>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-gray-400 text-sm leading-6">
          <p className="font-semibold text-gray-300 mb-2">Stay safe</p>
          Government recruitment never asks for payment to secure a job. Fees
          are paid only through the official application portal. Be careful of
          messages promising jobs in exchange for money.
        </div>
      </div>
    </main>
  );
}
