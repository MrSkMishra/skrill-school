import {
  Hero,
  Course,
  Service,
  WhyChooseUs,
  Pricing,
  Feedback,
  About,
  Faq,
  Cta,
} from "@/sections";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Course />
      <WhyChooseUs />
      <Service />
      <Pricing />
      <Feedback />
      <About />
      <Faq />
      <Cta />
    </main>
  );
}
