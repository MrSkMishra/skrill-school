import Heading from "@/components/custom/heading";
import { Section, SectionContentWrapper } from "@/components/custom/section";
import { Button } from "@/components/ui/button";

const freeCourseCharacteristics = [
  "3-6 months Duration",
  "Typically larger batches, often resulting in less personal assistance",
  "Job support is often limited to the end of the course",
];

const SkrillCourseCharacteristics = [
  "6 month Duration",
  "Each batch consists of only 25 students, ensuring personalized assistance",
  "Live Doubt Sessions with Mentors",
  "Provides continuous job support from the beginning of the course until successful placement",
];

export default function Pricing() {
  return (
    <Section containerClassName="flex flex-col items-center">
      <Heading className="max-w-3xl">These specification at just</Heading>
      <SectionContentWrapper className="w-full max-w-6xl">
        <div className="flex justify-center gap-24 lg:flex-col lg:items-center">

          <div className="bg-white text-primary rounded-lg flex flex-col items-center p-8 pb-0 space-y-6 max-w-sm min-h-[600px]">
            <h1 className="text-4xl font-bold">Others</h1>
            <p className="text-5xl py-16 font-bold">₹3,00,000</p>
            <ul className="flex flex-col  space-y-3 list-disc px-4">
              {freeCourseCharacteristics.map((item, idx) => (
                <li key={idx} className="font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary rounded-lg flex flex-col items-center p-8 pb-0 space-y-6 max-w-sm min-h-[600px] shadow-2xl shadow-secondary">
            <h1 className="text-4xl font-bold">Skrill School</h1>
            <div className="flex flex-col space-y-4 py-6">
              <p className="relative text-5xl font-bold opacity-65 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-full before:h-[0.2rem] before:bg-white">
                ₹45,000
              </p>
              <p className="text-5xl font-bold text-primary">₹30,000</p>
            </div>
            <ul className="flex flex-col  space-y-3 list-disc px-4">
              {SkrillCourseCharacteristics.map((item, idx) => (
                <li key={idx} className="font-medium">
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" size="lg" className="">Enroll now</Button>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Button className="px-10 py-8">Request a call back</Button>
        </div>
      </SectionContentWrapper>
    </Section>
  );
}
