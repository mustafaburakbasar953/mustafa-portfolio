const links = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },

  {
    name: "Contact",
    href: "#contact",
  },

  {
  name: "Certifications",
  href: "#certifications",
  },
  
];

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="relative text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}