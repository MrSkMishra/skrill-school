import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/context/modal";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const fontMain = localFont({
  src: "../assets/Helvetica.ttf",
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
        <ModalProvider>
          <Nav />
          {children}
          <Footer />
          <Toaster />
        </ModalProvider>
      </body>
    </html>
  );
}
