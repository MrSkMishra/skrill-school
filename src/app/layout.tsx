import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

import Nav from "@/components/nav";
import Footer from "@/components/footer";

const fontMain = localFont({
  src: "../assets/Inter-VariableFont_slnt,wght.ttf",
  variable: "--font-main",
});

const mainHeading = localFont({
  src: "../assets/RoadRage-Regular.ttf",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Skrill School",
  description:
    "Welcome to our training program, where dreams of becoming a software developer come true Become a software developer and land your dream job. Master software development and step into your dream career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontMain.variable} ${mainHeading.variable} antialiased scrollbar-hide scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
