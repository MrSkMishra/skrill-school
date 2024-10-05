"use client";

import Link from "next/link";
import Heading from "@/components/custom/heading";
import { Section, SectionContentWrapper } from "@/components/custom/section";
import { Button, buttonVariants } from "@/components/ui/button";
import { useModal } from "@/context/modal";
import { useModal2 } from "@/context/modal2";

export default function Course() {
  const { setIsModalOpen, setModalHeading } = useModal();
  const { setIsModalOpenTwo, setModalHeadingTwo } = useModal2();

  function onClickHandler() {
    setModalHeading("Book your slot");
    setIsModalOpen(true);
  }
  function onClickHandler2() {
    setModalHeadingTwo("jsdkjhsadkjh");
    setIsModalOpenTwo(true);
  }
  return (
    <Section id="ourprograms" containerClassName="flex flex-col items-center">
      <Heading className="max-w-3xl">
        Become a <span className="text-secondary">software developer</span> and
        land your dream job.
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
              <h2>Front-end</h2>
              <h2>Product management</h2>
              <div className="flex items-center">
                <h2>Back-end</h2>
                <Link
                  href="course"
                  className={buttonVariants({
                    variant: "default",
                    className: "ml-auto",
                  })}
                >
                  Course detail
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 ml-auto lg:ml-0">
            <h2 className="text-4xl text-center font-semibold leading-[1.4]">Book a free <span className="text-[#E68369]">Trail Class</span></h2>
            <Button className="py-6 px-8" onClick={onClickHandler2}>
              Register
            </Button>
          </div>
        </div>
      </SectionContentWrapper>


      {/* modal2 */}
      <SectionContentWrapper>
        <div className="flex flex-col items-center gap-4 ml-auto lg:ml-0">
          <h2 className="text-4xl text-center font-semibold leading-[1.4]">
            Next session starts from <br />
            <span className="text-secondary">20 Aug 2024</span>
          </h2>
          <Button className="py-6 px-8" onClick={onClickHandler}>
            Book your slot
          </Button>
        </div>
      </SectionContentWrapper>
    </Section>
  );
}
