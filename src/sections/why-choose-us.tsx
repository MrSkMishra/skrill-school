"use client";
import React, { ReactNode } from "react";
import { Section, SectionContentWrapper } from "@/components/custom/section";
import Heading from "@/components/custom/heading";
import AnimateHeight from "@/components/custom/animate-height";
import { Icons } from "@/components/custom/icons";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <Section>
      <Heading className="lg:mt-[-50px]">Why Choose US?</Heading>
      <SectionContentWrapper>
        <div className="grid gap-5 child:basis-1/4 grid-cols-5 lg:grid-cols-3 md:grid-cols-2 items-center min-h-[18rem]">
          <CourseCard
            icon={<Icons.unlock className="size-16" />}
            title="Unlock Career Opportunities"
            description="Learning coding opens doors to high-demand tech jobs, enhancing your employability in a competitive market."
          />
          <CourseCard
            icon={<Icons.computer className="size-16" />}
            title="Gain Practical Experience"
            description="Our live classes include internships, allowing you to apply your skills in real-world scenarios, making you job-ready."
          />
          <CourseCard
            icon={<Icons.money className="size-16" />}
            title="Boost Your Earning Potential"
            description="Coding enhances critical thinking and problem-solving abilities, essential skills that employers highly value."
          />
          <CourseCard
            icon={<Icons.brain className="size-16" />}
            title="Develop Problem-Solving Skills"
            description="Learning coding opens doors to high-demand tech jobs, enhancing your employability in a competitive market."
          />
          <CourseCard
            icon={<Icons.people className="size-16" />}
            title="Join a Thriving Community"
            description="Connect with industry professionals and peers, expanding your network and support system as you advance in your career."
          />
        </div>
      </SectionContentWrapper>
    </Section>
  );
}

type CourseCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};
function CourseCard({ icon, title, description }: CourseCardProps) {
  return (
    <AnimateHeight>
      <div className="bg-tertiary rounded-lg group text-primary flex flex-col items-center p-4 h-full">
        {icon}
        <h3 className="mt-4 mb-2.5 font-semibold text-center">{title}</h3>
        <div className="hidden group-hover:block text-center">
          {description}
        </div>
      </div>
    </AnimateHeight>
  );
}
