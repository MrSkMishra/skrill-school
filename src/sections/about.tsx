import Image from "next/image";
import Heading from "@/components/custom/heading";
import { Section, SectionContentWrapper } from "@/components/custom/section";

export default function About() {
  return (
    <Section containerClassName="relative flex flex-col items-center">
      {/* <Image src="/childrens.png" fill alt="childrens-play" objectFit="cover" /> */}
      <Heading className="max-w-3xl text-5xl">Who we are?</Heading>
      <SectionContentWrapper className="w-full flex justify-center pt-0">
        <p className="text-2xl text-center max-w-4xl font-medium leading-[1.5] md:text-lg">
          At Skrill School, we are dedicated to empowering students in tier 2
          and 3 cities with high-quality tech education. Our mission is to equip
          you with the skills to launch a successful career in technology. We
          offer comprehensive full-stack training programs, featuring live
          sessions with industry experts and hands-on experience through
          real-world projects. Join us and take the first step towards a bright
          future in tech.
        </p>
      </SectionContentWrapper>
    </Section>
  );
}
