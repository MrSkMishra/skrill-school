import Logo from "./logo";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Our Programs", url: "/ourprograms" },
  { name: "About Us", url: "/aboutus" },
  { name: "Contact Us", url: "/contactus" },
  { name: "FAQ", url: "/faq" },
];

export default function Nav() {
  return (
    <nav className="container bg-white/30 rounded-full flex justify-between items-center h-[5rem] mt-6 px-4">
      <Logo />
      <ul className="flex items-center gap-8 md:hidden">
        {navLinks.map((link, idx) => (
          <li key={idx} className="font-semibold">
            <a href={link.name}>{link.name}</a>
          </li>
        ))}
      </ul>
      <Button className="bg-white/30" variant="secondary" size="lg">
        Register
      </Button>
    </nav>
  );
}
