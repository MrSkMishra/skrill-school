import Image from "next/image";

import Heading from "@/components/custom/heading";
import { Icons } from "@/components/custom/icons";
import { Section, SectionContentWrapper } from "@/components/custom/section";
import { ReactElement } from "react";
export default function Service() {
  return (
    <Section>
      <Heading>We provide experience</Heading>
      <SectionContentWrapper>
        <div className="relative grid grid-cols-4 gap-16 lg:grid-cols-2 lg:gap-6 sm:grid-cols-1">
          <Image
            src="/girl-standing.svg"
            width={200}
            height={200}
            className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-16 sm:hidden"
            alt="girl-standing"
          />
          <ServiceCard
            icon={<Icons.unlock className="size-16" />}
            title="Placement"
            description="Get placed in your dream company and get financially secured in just 6 months"
          />
          <ServiceCard
            icon={<Icons.unlock className="size-16" />}
            title="Internship"
            description="Gain real-world experience and connect with top companies."
          />
          <ServiceCard
            icon={<Icons.unlock className="size-16" />}
            title="Internship"
            description="Gain real-world experience and connect with top companies."
          />
          <ServiceCard
            icon={<Icons.unlock className="size-16" />}
            title="Internship"
            description="Gain real-world experience and connect with top companies."
          />
        </div>
      </SectionContentWrapper>
    </Section>
  );
}

type ServiceCardProps = {
  icon: ReactElement;
  title: string;
  description: string;
};
function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-gradient-to-b from-primary/10 to-secondary rounded-lg group flex flex-col  p-6 h-full">
      <h3 className="mt-4 mb-4 font-semibold text-3xl">{title}</h3>
      <div className="flex items-center">
        <div className="basis-[70%] flex items-center justify-center">{description}</div>
        {icon}
      </div>
    </div>
  );
}
