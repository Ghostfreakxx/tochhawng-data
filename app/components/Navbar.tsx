const links = [
  { name: "Home", href: "/" },
  { name: "Budget", href: "/budget" },
  { name: "Health", href: "/health" },
  { name: "Education", href: "/education" },
  { name: "Population", href: "/population" },
  { name: "Elections", href: "/elections" },
  { name: "Crime", href: "/crime" },
  { name: "Roads", href: "/roads" },
];

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-black/80 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <a href="/" className="text-xl font-bold text-white">
          Tochhawng Data
        </a>

        <div className="flex flex-wrap gap-4 text-sm">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-green-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}