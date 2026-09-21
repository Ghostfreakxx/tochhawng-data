const terms = [
  {
    term: "Crore (Cr)",
    definition:
      "An Indian counting unit equal to 1,00,00,000 — ten million. ₹1 Crore = ₹1,00,00,000. Government budgets are written in crore because the amounts involved are otherwise hard to read.",
  },
  {
    term: "Lakh",
    definition:
      "An Indian counting unit equal to 1,00,000 — one hundred thousand. 100 lakh make 1 crore.",
  },
  {
    term: "Budget Estimate (BE)",
    definition:
      "The government's plan for how much it expects to earn and spend in the coming financial year, presented before that year begins.",
  },
  {
    term: "Revised Estimate (RE)",
    definition:
      "An updated version of the budget, showing what the government now actually expects to earn and spend by the end of the year, once the year is already underway.",
  },
  {
    term: "Fiscal Deficit",
    definition:
      "The gap between what the government spends and what it earns in a year (not counting money it borrows). The government borrows to cover this gap. A smaller fiscal deficit, as a share of the economy, generally means healthier state finances.",
  },
  {
    term: "Revenue Deficit / Revenue Surplus",
    definition:
      "The difference between the government's day-to-day income (like taxes) and its day-to-day spending (like salaries and pensions). A surplus means it earns more than it spends on running the government day to day; a deficit means the opposite.",
  },
  {
    term: "Revenue Expenditure",
    definition:
      "Money spent on the regular running of government — salaries, pensions, maintenance, subsidies. It keeps things running but does not create a new long-term asset.",
  },
  {
    term: "Capital Expenditure",
    definition:
      "Money spent on building things that last — roads, hospitals, schools, bridges — or on repaying loans. It creates or improves a long-term asset for the state.",
  },
  {
    term: "GSDP (Gross State Domestic Product)",
    definition:
      "The total value of all goods and services produced within Mizoram in a year. It is used to measure the size of the state's economy, and to judge whether the government's debt and deficit are at a manageable level.",
  },
  {
    term: "Central Tax Devolution",
    definition:
      "Mizoram's share of the taxes collected by the Union (Central) Government, passed on to the state as decided by the Finance Commission. It is usually the largest single source of the state's income.",
  },
  {
    term: "MGNREGS",
    definition:
      "Mahatma Gandhi National Rural Employment Guarantee Scheme — a central government programme that guarantees 100 days of paid work a year to rural households that ask for it.",
  },
  {
    term: "Census",
    definition:
      "The official count of India's population and households, normally carried out every 10 years by the Government of India.",
  },
  {
    term: "NCRB",
    definition:
      "National Crime Records Bureau — the central agency that collects and publishes crime statistics from states across India.",
  },
];

export default function GlossaryPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Glossary
        </h1>

        <p className="text-gray-400 mb-10">
          Plain-language explanations of the budget and data terms used
          across this site — written for readers who are new to government
          data, not just economists or officials. Tap a term to read its
          explanation.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 divide-y divide-zinc-800">
          {terms.map((t) => (
            <details key={t.term} className="py-4 first:pt-0 last:pb-0">
              <summary className="cursor-pointer text-lg font-semibold text-green-400">
                {t.term}
              </summary>

              <p className="text-gray-400 mt-2 leading-7">
                {t.definition}
              </p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Don&apos;t see a term you&apos;re looking for? These definitions
          are written to be easy to understand rather than legally precise —
          for the official definitions, see the Mizoram Finance
          Department&apos;s budget documents.
        </p>
      </div>
    </main>
  );
}
