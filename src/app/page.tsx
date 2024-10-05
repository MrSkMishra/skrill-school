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
import SeminarSticky2 from "@/components/seminar-sticky2";
import { ModalProviderTwo } from '@/context/modal2'; // ModalProviderTwo ko import karein

export default function Home() {
  return (
    <ModalProviderTwo>
      <main className="overflow-x-hidden">
        <SeminarSticky />
        <SeminarSticky2 />
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
    </ModalProviderTwo>
  );
}
