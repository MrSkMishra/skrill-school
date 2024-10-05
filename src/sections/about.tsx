import React from "react";
import Image from "next/image";
import Heading from "@/components/custom/heading";
import { Section, SectionContentWrapper } from "@/components/custom/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  return (
    <Section
      id="aboutus"
      containerClassName="relative flex flex-col items-center"
    >
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
      <div className="grid grid-cols-2 text-primary gap-16 max-w-3xl md:grid-cols-1 md:px-3 md:mt-8">
        <PersonCard
          avatarSrc="/amit.png"
          name="Amit Verma"
          message=" Welcome to Skrill School! We are thrilled to have you on this coding journey. Our mission is to empower you with the skills and confidence to excel in the tech world. Together, let' s innovate and shape the future! "
          signature="Amit Verma "
        />
        <PersonCard
          avatarSrc="/pradeep.jpg"
          name="Ratti Pradeep"
          message="We’re excited to have you at Skrill School! Our passion for coding drives us to provide you with the best learning experience. Let’s unlock your potential and create amazing things together!"
          signature="Ratti Pradeep "
        />
      </div>
    </Section>
  );
}

interface PersonCardProps {
  avatarSrc: string;
  name: string;
  message: string;
  signature: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  avatarSrc,
  name,
  message,
  signature,
}) => {
  return (
    <div className="bg-white rounded-lg flex flex-col items-center p-4">
      <Avatar className="size-44 border-2">
        <AvatarImage src={avatarSrc} className="object-cover" />
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2 mt-8 h-full">
        <span>Dear Students,</span>
        <p>{message}</p>
        <div className="flex flex-col gap-1 mt-auto">
          <span>Warm regards,</span>
          <span>{signature}</span>
        </div>
      </div>
    </div>
  );
};
