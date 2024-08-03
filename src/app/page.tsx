import Image from "next/image";
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
    <main>
      <Image
        src="/multi-polygon.png"
        width={768}
        height={921}
        alt="show-case"
        objectFit="cover"
        unoptimized
        className="absolute top-0 left-1/2 -translate-x-1/2 max-w-3xl opacity-30"
      />
      <Image
        src="/main-guy.png"
        width={900}
        height={921}
        alt="show-case"
        objectFit="cover"
        unoptimized
        className="absolute top-1/2 -translate-y-[40%] left-1/2 -translate-x-1/2 max-w-5xl md:max-w-3xl"
      />
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
