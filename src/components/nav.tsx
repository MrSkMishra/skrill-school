import Logo from "./logo";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Our Programs", href: "#ourprograms" },
  { name: "About Us", href: "#aboutus" },
  { name: "Services", href: "#services" },
  { name: "FAQ", href: "#faq" },
];

export default function Nav() {
  return (
    <nav className="container bg-white/30 rounded-full flex justify-between items-center h-[5rem] mt-6 px-4 relative z-50">
      <Logo />
      <ul className="flex items-center gap-8 md:hidden">
        {navLinks.map((link, idx) => (
          <li key={idx} className="font-semibold">
            <a href={link.href}>{link.name}</a>
            {/* <a href={link.name}>{link.name}</a> */}
          </li>
        ))}
      </ul>
      <Button variant="secondary" size="lg">
        Register
      </Button>
    </nav>
  );
}
