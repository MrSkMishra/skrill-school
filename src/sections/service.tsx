import Image from "next/image";

import Heading from "@/components/custom/heading";
import { Icons } from "@/components/custom/icons";
import { Section, SectionContentWrapper } from "@/components/custom/section";
import { ReactElement } from "react";
import { cn } from "@/lib/utils";
export default function Service() {
  return (
    <Section id="services">
      <Heading>We provide experience</Heading>
      <SectionContentWrapper>
        <div className="relative grid grid-cols-4 gap-20 lg:grid-cols-2 lg:gap-16 sm:grid-cols-1">
          <Image
            src="/girl-standing.svg"
            width={160}
            height={160}
            className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-8 sm:hidden"
            alt="girl-standing"
          />
          <ServiceCard
            icon={<Icons.hat className="size-16" />}
            title="Internship"
            description={
              <>
                Gain real-world experience and{" "}
                <span className="text-primary font-medium">
                  connect with top companies.
                </span>
              </>
            }
          />
          <ServiceCard
            icon={<Icons.bag className="size-12" />}
            title="Placement"
            description={
              <>
                Get placed in your dream company and get{" "}
                <span className="text-primary font-medium">
                  financially secured in just 6 months{" "}
                </span>
              </>
            }
          />
          <ServiceCard
            icon={<Icons.doubt className="size-12" />}
            title="Doubt session"
            description={
              <>
                Personalized support to{" "}
                <span className="text-primary font-medium">
                  clarify your queries anytime{" "}
                </span>
                with one to one session.
              </>
            }
          />
          <ServiceCard
            icon={<Icons.people className="size-16" />}
            title="Skilled Mentors"
            description={
              <>
                Learn from industry experts with hands-on experience of more
                than <span className="text-primary font-medium">5+ years</span>
              </>
            }
          />
        </div>
      </SectionContentWrapper>
    </Section>
  );
}

type ServiceCardProps = {
  className?: string;
  icon: ReactElement;
  title: string;
  description: ReactElement;
};
function ServiceCard({
  className,
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-b from-primary/10 to-secondary rounded-lg group flex flex-col  p-6 h-full",
        className,
      )}
    >
      <h3 className="mt-4 mb-4 font-semibold text-3xl">{title}</h3>
      <div className="flex items-center space-x-4">
        <div className="basis-[70%] flex items-center justify-center">
          <p>{description}</p>
        </div>
        {icon}
      </div>
    </div>
  );
}
