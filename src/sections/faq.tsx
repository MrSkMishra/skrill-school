import Heading from "@/components/custom/heading";
import { Section, SectionContentWrapper } from "@/components/custom/section";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icons } from "@/components/custom/icons";

const faqContent = [
  {
    value: "item-1",
    question: "What coding languages can I learn on this platform?",
    answer:
      "Our platform offers courses in a wide range of coding languages including Python, JavaScript, Java, C++, Ruby, Swift, HTML, CSS, and SQL. We also provide specialized courses in frameworks and libraries such as React, Angular, Django, and more.",
  },
  {
    value: "item-2",
    question: "Do I need any prior coding experience to get started?",
    answer:
      "No prior coding experience is necessary. We offer beginner courses that start from the basics and progressively build up to more advanced concepts. For experienced coders, we also have intermediate and advanced courses to further develop your skills.",
  },
  {
    value: "item-3",
    question: "How do I get help if I'm stuck on a coding problem?",
    answer:
      "Community forums where you can ask questions and get answers from peers and instructors. - Live chat support with experienced tutors available during specific hours. - Detailed documentation and step-by-step guides for each course module.",
  },
  {
    value: "item-4",
    question: "Can I get a certificate after completing a course?",
    answer:
      "Community forums where you can ask questions and get answers from peers and instructors. - Live chat support with experienced tutors available during specific hours. - Detailed documentation and step-by-step guides for each course module.",
  },
  {
    value: "item-5",
    question:
      "Are there any projects or hands-on activities included in the courses?",
    answer:
      "Absolutely! Our courses are designed to be interactive and include numerous projects, coding challenges, and hands-on activities. These practical exercises help you apply what you've learned and build a portfolio of projects that you can showcase to potential employers.",
  },
];

export default function Faq() {
  return (
    <Section id="faq" containerClassName="flex flex-col items-center rounded-lg bg-gradient-to-b from-primary/10 to-secondary">
      <Heading className="max-w-3xl pt-16">
        FAQ<span>s</span>
      </Heading>
      <SectionContentWrapper className="w-full max-w-6xl pt-0">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-5"
        >
          {faqContent.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="bg-primary"
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex justify-center mt-10">
          <div className="bg-white rounded-lg text-primary py-4 px-6 pr-16 shadow-2xl">
            <h3 className="font-semibold">For more queries contact us</h3>
            <div className="flex flex-col space-y-3 mt-3">
              <div className="flex space-x-2">
                <Icons.phone className="stroke-transparent fill-secondary" />
                <span>Phone number</span>
              </div>
              <div className="flex space-x-2">
                <Icons.mail className="stroke-white fill-secondary" />
                <span>mail to xxx</span>
              </div>
            </div>
          </div>
        </div>
      </SectionContentWrapper>
    </Section>
  );
}
