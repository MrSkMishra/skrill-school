"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionContentWrapper } from "@/components/custom/section";
import Heading from "@/components/custom/heading";
import { Icons } from "@/components/custom/icons";

const data = [
  {
    title: "Module 1 : Basics",
    contents: [
      "Basics of Computer and Machine",
      "How Internet Works?",
      "Browsers",
    ],
  },
  {
    title: "Module 2 : HTML",
    contents: ["Semantic HTML", "SEO Guide", "Forms and Validations"],
  },
  {
    title: "Module 3 : CSS",
    contents: [
      "CSS Basics",
      "Animation",
      "Making Layouts",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    title: "Module 4 : Javascript 1",
    contents: [
      "Introduction to JavaScript",
      "Data Structures",
      "Developer Essentials",
      "Equality Comparison",
      "Getting Started",
      "Control Flow",
      "Events",
      "Functions",
      "Data Types ",
    ],
  },
  {
    title: "Module 5 : Javascript 2",
    contents: [
      "Function Borrowing",
      "Working with APIs",
      "This Keyword",
      "Advanced in JS",
      "Asynchronous JavaScript",
    ],
  },
  {
    title: "Module 6 : React",
    contents: [
      "Basics",
      "State Management",
      "Re-rendering",
      "Hooks",
      "GraphQL",
      "Routing",
      "Form Validations",
      "Styling",
    ],
  },
  {
    title: "Module 7 : React Advanced",
    contents: [
      "Overviews",
      "Testing",
      "Security",
      "More to Explore ",
      "Advanced Topics",
    ],
  },
];

export default function Page() {
  return (
    <Section className="min-h-screen">
      <SectionContentWrapper className="flex flex-col items-center">
        <Heading>Course Curriculum</Heading>
        <p>
          Expand your horizon by choosing from India’s best and most preferred
          online Creative courses.
        </p>
        <div className="mt-8 flex space-x-2">
          <span>{<Icons.download/>}</span>
          <span className="text-secondary font-medium">Download our course curriculum</span>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full mt-8 flex flex-col gap-4"
        >
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="text-primary text-center p-0"
            >
              <AccordionTrigger className="bg-white rounded-lg px-4 flex justify-center text-2xl font-normal">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="mt-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  {item.contents.map((content, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg p-4 text-left"
                    >
                      {content}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionContentWrapper>
    </Section>
  );
}
