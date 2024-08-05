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

import SeminarSticky from "@/components/seminar-sticky";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <SeminarSticky/>
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
