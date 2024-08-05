import { Mail, MapPin, Phone } from "lucide-react";

import Logo from "./logo";
import Link from "next/link";

export const companyLinks = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "Pricing",
    href: "/explore",
  },
  {
    name: "Demo",
    href: "/demo",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

export const supportLinks = [
  {
    name: "Blog",
    href: "/terms-conditions",
  },
  {
    name: "Help center",
    href: "/privacy",
  },
  {
    name: "FAQ's",
    href: "/faqs",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Updates",
    href: "/updates",
  },
];

export const resourcesLinks = [
  {
    name: "Community",
    href: "/community",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Terms of service",
    href: "/terms",
  },
];

export default function Footer() {
  return (
    <footer className="relative font-main bg-secondary-500 pb-0 pt-24">
      <img
        src="/footer-wave.svg"
        className="absolute  w-full bottom-0 translate-y-16 md:translate-y-0 md:top-0 md:hidden -z-10"
      />
      <div className="container flex justify-between md:flex-col">
        <div className="flex flex-col md:w-full md:items-center">
          <Link href="/">
            <Logo className="w-32" />
          </Link>
        </div>
        <div className="flex justify-end pl-10 md:mt-10 md:justify-center md:pl-0">
          <div className="flex flex-1 gap-10">
            <div className="flex gap-16 md:flex-col">
              <div className="flex-1">
                <h4 className="font-semibold">Navigation</h4>
                <ul className="mt-6 flex flex-col gap-y-3 text-sm text-neutral-6">
                  {companyLinks.map((item, idx) => {
                    return (
                      <li key={idx}>
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex-1">
                <h4 className="font-semibold">Support Us</h4>
                <ul className="mt-6 flex flex-col gap-y-3 text-sm text-neutral-6">
                  {supportLinks.map((item, idx) => {
                    return (
                      <li key={idx}>
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Resources</h4>
                <ul className="mt-6 flex flex-col gap-y-3 text-sm text-neutral-6">
                  {resourcesLinks.map((item, idx) => {
                    return (
                      <li key={idx}>
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex-1">
                <h4 className="font-semibold">Address</h4>
                <div className="mt-6 flex flex-col gap-y-3 text-sm text-neutral-6">
                  <div className="mb-2 flex items-center">
                    101 Marlow Street. #12-05 Clife Parkview. Singapore 059020.
                    View on Maps
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium mb-2">Inquires</p>
                    <span>+91 9116768791</span>
                    <span>hello@Newsify.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-10 h-[1px] w-full max-w-[90rem] bg-white/50" />
      <div className="container text-center text-sm text-neutral-6 sm:text-xs">
        <p className="flex justify-center gap-4">
          <span className="font-semibold">© 2023 Newsify. All rights reserved</span>|
          <span>
            Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice
            and Responsible Disclosure
          </span>
        </p>
      </div>
    </footer>
  );
}
