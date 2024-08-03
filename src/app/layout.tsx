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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontMain.variable} ${mainHeading.variable} antialiased scrollbar-hide`}
    >
      <body className="overflow-x-hidden">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
