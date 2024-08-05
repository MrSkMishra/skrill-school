import Link from "next/link";
import Heading from "@/components/custom/heading";
import { Section, SectionContentWrapper } from "@/components/custom/section";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Course() {
  return (
    <Section id="ourprograms" containerClassName="flex flex-col items-center">
      <Heading className="max-w-3xl">
        Become a software developer and land your dream job.
      </Heading>
      <SectionContentWrapper className="w-full max-w-6xl">
        <div className="flex items-center lg:flex-col lg:gap-16">
          <div className="relative  h-full lg:mt-10">
            {/* Card 1   */}
            <div className="flex flex-col space-y-2 rounded-lg text-primary font-medium p-5 w-[400px] sm:w-[22rem] text-xl h-full absolute top-0 left-0 bg-[#E68369] -translate-y-[20%] -translate-x-[10%] -z-10" />
            <div className="flex flex-col space-y-2 rounded-lg text-primary font-medium p-5 w-[400px] sm:w-[22rem] text-xl h-full absolute top-0 left-0 bg-[#ECCEAE] -translate-y-[10%] -translate-x-[5%] -z-10" />
            <div className="flex flex-col space-y-2 bg-white rounded-lg text-primary font-medium p-5 w-[25rem] sm:w-[22rem] text-xl">
              <h2 className="font-semibold text-2xl mb-3">
                Explore the courses
              </h2>
              <h2>Full Stack</h2>
              <h2>Backend</h2>
              <div className="flex items-center">
                <h2>Backend</h2>
                <Link href="course" className={buttonVariants({ variant: "default", className: "ml-auto" })}>
                  Course detail
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 ml-auto lg:ml-0">
            <h2 className="text-4xl text-center font-semibold leading-[1.4]">
              Next session starts from <br />
              <span className="text-secondary">20 Aug 2024</span>
            </h2>
            <Button className="py-6 px-8">Book your slot</Button>
          </div>
        </div>
      </SectionContentWrapper>
    </Section>
  );
}
