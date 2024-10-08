import { Mail, MapPin, Phone } from "lucide-react";

import Logo from "./logo";
import Link from "next/link";
import Image from "next/image";

export const companyLinks = [
  {
    name: "About",
    href: "#aboutus",
  },
  // {
  //   name: "Home",
  //   href: "/home",
  // },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Reviews",
    href: "#reviews",
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
    href: "#faq",
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
      <Image width={3} height={3}
        src="/footer-wave.svg"
        className="absolute  w-full bottom-0 translate-y-16 md:translate-y-0 md:top-0 md:hidden -z-10"
        alt="" />
      <div className="container flex justify-between md:flex-col px-4">
        <div className="flex flex-col md:w-full md:items-center">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 302 161"
              className="size-28"
            >
              <path
                fill="#5F67AA"
                d="M241.619 158.782l19.11-28.83c1.83-2.76-.15-6.44-3.46-6.44h-38.22c-3.31 0-5.29 3.68-3.46 6.44l19.11 28.83c1.64 2.48 5.28 2.48 6.92 0z"
              ></path>
              <path
                fill="#E68369"
                d="M32.96 49.51c-4.06 0-7.5 1.42-10.34 4.25s-4.25 6.28-4.25 10.34c0 4.81 2.19 8.47 6.58 10.97 1.94 1.09 7.62 3 17.06 5.74 8.07 2.41 13.97 5.31 17.7 8.71 5.57 5.05 8.35 12.159 8.35 21.309s-3.16 16.45-9.49 22.73c-6.28 6.28-13.83 9.42-22.66 9.42H8.93c-2.31 0-4.32-.85-6.02-2.55-1.7-1.7-2.55-3.71-2.55-6.02v-.43c0-2.31.85-4.32 2.55-6.02 1.7-1.7 3.71-2.55 6.02-2.55h27.68c4.01 0 7.46-1.42 10.34-4.25 2.83-2.83 4.25-6.28 4.25-10.34 0-4.72-2.19-8.4-6.58-11.04-2.08-1.23-7.79-3.3-17.13-6.23-8.07-2.64-13.95-5.64-17.63-8.99-5.57-5-8.35-11.82-8.35-20.46s3.14-16.45 9.42-22.73c6.28-6.28 13.85-9.42 22.73-9.42h19.05c2.36 0 4.39.85 6.09 2.55 1.65 1.65 2.48 3.66 2.48 6.02v.43c0 2.31-.83 4.32-2.48 6.02-1.7 1.7-3.73 2.55-6.09 2.55H32.96v-.01zM88.89.382c2.31 0 4.32.83 6.02 2.48 1.7 1.7 2.55 3.73 2.55 6.09v49.06h2.69c6.04 0 11.3-2.01 15.79-6.02 4.39-4.01 6.89-8.97 7.5-14.87.28-2.22 1.23-4.04 2.83-5.45 1.6-1.51 3.52-2.27 5.73-2.27h.21c2.5 0 4.6.94 6.3 2.83 1.51 1.65 2.27 3.56 2.27 5.73 0 .28-.02.59-.07.92-1.13 11.85-5.66 20.72-13.59 26.62 4.15 2.55 7.98 6.87 11.47 12.96 3.63 6.28 5.45 13.05 5.45 20.32v3.61c0 2.41-.85 4.41-2.55 6.02-1.7 1.7-3.71 2.55-6.02 2.55h-.21c-2.31 0-4.32-.85-6.02-2.55-1.7-1.6-2.55-3.61-2.55-6.02v-3.61c-.05-6.42-2.34-11.92-6.87-16.5-4.58-4.53-10.1-6.8-16.57-6.8h-5.81v26.9c0 2.41-.85 4.41-2.55 6.02-1.7 1.7-3.71 2.55-6.02 2.55h-.21c-2.31 0-4.32-.85-6.02-2.55-1.7-1.6-2.55-3.61-2.55-6.02V8.922c0-2.36.85-4.39 2.55-6.09 1.7-1.65 3.71-2.48 6.02-2.48h.21l.02.03zM191.34 29.398c2.36 0 4.39.85 6.09 2.55 1.65 1.7 2.48 3.73 2.48 6.09v.14c0 2.36-.83 4.37-2.48 6.02-1.7 1.7-3.73 2.55-6.09 2.55h-4.04c-3.87 0-7.15 1.35-9.84 4.04-2.64 2.69-3.99 5.97-4.04 9.84v41.77c0 2.41-.85 4.41-2.55 6.02-1.7 1.7-3.71 2.55-6.02 2.55h-.21c-2.31 0-4.32-.85-6.02-2.55-1.7-1.6-2.55-3.61-2.55-6.02v-41.77c.09-8.64 3.14-16 9.13-22.09 6.09-6.09 13.45-9.13 22.09-9.13h4.04l.01-.01z"
              ></path>
              <path
                fill="#5F67AA"
                d="M219.019 20.2c-2.74 0-5.07-.97-7.01-2.9-1.94-1.93-2.9-4.27-2.9-7.01s.97-5 2.9-6.94c1.94-1.94 4.27-2.9 7.01-2.9s5 .97 6.94 2.9c1.98 1.89 2.97 4.2 2.97 6.94s-.99 5.12-2.97 7.01c-1.94 1.94-4.25 2.9-6.94 2.9zm.07 9.2c2.41 0 4.41.85 6.02 2.55 1.7 1.7 2.55 3.73 2.55 6.09v64.359c0 2.41-.85 4.41-2.55 6.02-1.6 1.7-3.61 2.55-6.02 2.55h-.14c-2.36 0-4.39-.85-6.09-2.55-1.7-1.6-2.55-3.61-2.55-6.02v-64.36c0-2.36.85-4.39 2.55-6.09 1.7-1.7 3.73-2.55 6.09-2.55h.14zM256.12.379c2.31 0 4.32.83 6.02 2.48 1.7 1.7 2.55 3.73 2.55 6.09v93.46c0 2.41-.85 4.41-2.55 6.02-1.7 1.7-3.71 2.55-6.02 2.55h-.21c-2.31 0-4.32-.85-6.02-2.55-1.7-1.6-2.55-3.61-2.55-6.02V8.949c0-2.36.85-4.39 2.55-6.09 1.7-1.65 3.71-2.48 6.02-2.48h.21z"
              ></path>
              <path
                fill="#E68369"
                d="M293.292.379c2.31 0 4.32.83 6.02 2.48 1.7 1.7 2.55 3.73 2.55 6.09v93.46c0 2.41-.85 4.41-2.55 6.02-1.7 1.7-3.71 2.55-6.02 2.55h-.21c-2.31 0-4.32-.85-6.02-2.55-1.7-1.6-2.55-3.61-2.55-6.02V8.949c0-2.36.85-4.39 2.55-6.09 1.7-1.65 3.71-2.48 6.02-2.48h.21z"
              ></path>
              <path
                fill="#FF8B0D"
                d="M71.93 133.5c.332 0 .654.051.966.152.25.078.376.248.376.51v.029c0 .18-.073.323-.217.428a.507.507 0 01-.48.082 1.999 1.999 0 00-.645-.105c-.586 0-1.086.207-1.5.621-.41.414-.616.914-.616 1.5 0 .582.206 1.08.616 1.494.414.414.914.621 1.5.621.222 0 .437-.033.644-.1a.519.519 0 01.48.077c.145.105.218.25.218.433 0 .258-.126.428-.376.51a3.211 3.211 0 01-.966.146 3.082 3.082 0 01-2.262-.937 3.082 3.082 0 01-.938-2.262c0-.883.313-1.637.938-2.261a3.079 3.079 0 012.262-.938zm2.894-2.402c.145 0 .27.05.375.152a.518.518 0 01.158.381v2.39c.465-.347.99-.521 1.577-.521.73 0 1.355.26 1.875.779.52.52.779 1.147.779 1.881v3.205a.498.498 0 01-.158.375.498.498 0 01-.375.158h-.012a.517.517 0 01-.38-.158.498.498 0 01-.16-.375v-3.205c0-.433-.151-.805-.456-1.113a1.516 1.516 0 00-1.113-.463c-.438 0-.811.154-1.12.463-.304.308-.457.68-.457 1.113v3.205a.498.498 0 01-.158.375.51.51 0 01-.375.158h-.017a.51.51 0 01-.375-.158.499.499 0 01-.159-.375v-7.734c0-.149.053-.276.159-.381a.52.52 0 01.375-.152h.017zm10.46 4.119a2.025 2.025 0 00-1.495-.621c-.586 0-1.086.207-1.5.621-.41.414-.615.914-.615 1.5 0 .582.205 1.08.615 1.494.414.414.914.621 1.5.621s1.084-.207 1.494-.621c.414-.414.621-.912.621-1.494 0-.586-.207-1.086-.62-1.5zm-3.757-.779a3.079 3.079 0 012.262-.938c.883 0 1.637.312 2.262.938.625.624.937 1.378.937 2.261 0 .883-.312 1.637-.937 2.262a3.082 3.082 0 01-2.262.937 3.082 3.082 0 01-2.262-.937 3.082 3.082 0 01-.937-2.262c0-.883.312-1.637.937-2.261zm10.975.779a2.025 2.025 0 00-1.494-.621c-.586 0-1.086.207-1.5.621-.41.414-.615.914-.615 1.5 0 .582.205 1.08.615 1.494.414.414.914.621 1.5.621s1.084-.207 1.494-.621c.414-.414.621-.912.621-1.494 0-.586-.207-1.086-.621-1.5zm-3.756-.779a3.079 3.079 0 012.262-.938c.883 0 1.636.312 2.261.938.625.624.938 1.378.938 2.261 0 .883-.313 1.637-.938 2.262a3.082 3.082 0 01-2.261.937 3.082 3.082 0 01-2.262-.937 3.082 3.082 0 01-.937-2.262c0-.883.312-1.637.937-2.261zm7.242-3.34c.145 0 .27.05.375.152a.518.518 0 01.159.381v7.734a.498.498 0 01-.159.375.51.51 0 01-.375.158h-.017a.51.51 0 01-.375-.158.498.498 0 01-.159-.375v-7.734c0-.149.053-.276.159-.381a.52.52 0 01.375-.152h.017z"
              ></path>
            </svg>
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
                        <a href={item.href}>{item.name}</a>
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
                        <a href={item.href}>{item.name}</a>
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
                    2nd Floor, JSV Hyundai Building CP-53 Sitapur Road Yojna,
                    Near Engineering College Chauraha, Lucknow.
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium mb-2">Inquires</p>
                    <span>+91 82995 13060</span>
                    <a href="mailto:amitverma081@gmail.com">
                      amitverma081@gmail.com
                    </a>
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
          <span className="font-semibold">
            © 2024 skrillschool. All rights reserved
          </span>
          |
          <span>
            Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice
            and Responsible Disclosure
          </span>
        </p>
      </div>
    </footer>
  );
}
