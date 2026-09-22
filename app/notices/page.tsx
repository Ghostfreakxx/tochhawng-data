import Term from "../components/Term";

const boards = [
  {
    name: "Mizoram Public Service Commission (MPSC)",
    url: "https://mpsc.mizoram.gov.in",
    description:
      "Recruits for Mizoram Civil Service (MCS) and other gazetted posts, lecturers, engineers, and Group A/B government positions, usually through a written exam and interview.",
  },
  {
    name: "Department of Personnel & Administrative Reforms (DP&AR)",
    url: "https://dpar.mizoram.gov.in",
    description:
      "Sets recruitment rules across departments and runs direct-recruitment exams for non-gazetted staff — Assistant, UDC, LDC, and similar posts in the Secretariat and subordinate services.",
  },
  {
    name: "Mizoram Police",
    url: "https://police.mizoram.gov.in/notifications/",
    description:
      "Publishes its own notices for Constable, Sub-Inspector, and other police department recruitment directly on this page.",
  },
  {
    name: "Staff Selection Commission, North Eastern Region (SSC NER)",
    url: "https://sscnr.nic.in",
    description:
      "The Government of India's regional recruitment body covering Mizoram and the rest of the Northeast — for central government (non-railway, non-defence) posts like CGL, CHSL, and MTS.",
  },
  {
    name: "e-District Mizoram",
    url: "https://edistrict.mizoram.gov.in",
    description:
      "Where you register as a jobseeker with your local Employment Exchange, and access other citizen services online.",
  },
];

export default function NoticesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <a href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Recruitment &amp; Government Job Notices
        </h1>

        <p className="text-gray-400 mb-6">
          A direct, verified directory of where the Government of Mizoram
          and Government of India publish recruitment notices — so you can
          check the source yourself rather than relying on unofficial job
          sites.
        </p>

        <div className="bg-zinc-950 border border-green-900/60 rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-semibold text-green-400 mb-2">
            Why isn&apos;t this a list of current openings?
          </h2>

          <p className="text-gray-400 leading-7">
            Job notices open and close on their own schedule — often within
            a few weeks — and this site isn&apos;t connected to a live feed
            from any of these departments, so a fixed list here would go
            out of date fast and could send you toward a deadline
            that&apos;s already passed. Instead, below are the exact
            official pages where each body posts its own notices, kept
            current by the department itself. Bookmark the ones relevant to
            you and check back, or look for an &quot;RSS&quot; / email
            alert option on the site if it offers one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {boards.map((b) => (
            <div
              key={b.name}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <h2 className="text-xl font-semibold text-white">
                {b.name}
              </h2>

              <p className="text-gray-500 mt-2 text-sm leading-6">
                {b.description}
              </p>

              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-green-400 text-sm hover:text-green-300 underline"
              >
                Visit official site →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            A Quick Guide for First-Time Applicants
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>1. Read the full notice (usually a PDF) before applying — not just the headline.</p>
            <p>2. Check the eligibility (age, qualification, domicile) carefully; ineligible applications are rejected.</p>
            <p>3. Keep scanned copies of your HSLC/HSSLC/degree certificates, ID proof, and photo ready in advance.</p>
            <p>4. Apply only through the official site linked on the notice — never pay anyone to &quot;guarantee&quot; a government job.</p>
            <p>5. Note the last date and apply well before it; most portals don&apos;t accept late applications.</p>
            <p>6. Save or print your submitted application and any confirmation number.</p>
          </div>

          <Term label="Why does this matter?">
            Fraudulent job offers and fake &quot;agents&quot; who promise
            government jobs for a fee are a real risk in every state.
            Genuine recruitment in Mizoram is free to apply for and goes
            only through the official sites listed above.
          </Term>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Sources: official websites of the Mizoram Public Service
          Commission, Department of Personnel &amp; Administrative Reforms
          (Government of Mizoram), Mizoram Police, Staff Selection
          Commission — North Eastern Region (Government of India), and
          e-District Mizoram. Always confirm vacancy numbers, eligibility,
          and deadlines on the official notice itself.
        </p>
      </div>
    </main>
  );
}
