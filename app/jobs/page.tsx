import Link from "next/link";
import type { Metadata } from "next";
import JobBoard from "./JobBoard";
import { jobs, officialJobSites, privateJobSites } from "../data/jobs";

export const metadata: Metadata = {
  title: "Mizoram Jobs Portal | Tochhawng Data",
  description:
    "Open government and private job vacancies in Mizoram, with last dates and links to official recruitment portals and job boards.",
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
          Government and private job vacancies for Mizoram, sorted by closing
          date. Listings close automatically after their last date; private
          postings without a deadline drop off after 30 days. Always read the
          official notification or employer listing before applying.
        </p>

        <JobBoard jobs={jobs} />

        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-4">Government Recruitment Sites</h2>
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

        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-4">Find Private Sector Jobs</h2>
          <p className="text-gray-400 mb-6">
            Private openings change daily. Search these for the latest jobs in
            Aizawl and across Mizoram.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {privateJobSites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 hover:border-sky-700 transition"
              >
                <h3 className="font-semibold text-lg">{site.name}</h3>
                <p className="text-gray-500 text-sm mt-2">{site.description}</p>
                <p className="text-sky-400 text-sm mt-3">
                  {new URL(site.url).hostname} →
                </p>
              </a>
            ))}
          </div>
        </section>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-gray-400 text-sm leading-6">
          <p className="font-semibold text-gray-300 mb-2">Stay safe</p>
          Government recruitment never asks for payment to secure a job. Fees
          are paid only through the official application portal. Genuine
          private employers don&apos;t charge for interviews or joining either.
          Be careful of messages promising jobs in exchange for money.
        </div>
      </div>
    </main>
  );
}
