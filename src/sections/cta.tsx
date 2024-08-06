"use client";

import Heading from "@/components/custom/heading";
import { Section, SectionContentWrapper } from "@/components/custom/section";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/modal";

export default function Cta() {
  const { setModalHeading, setIsModalOpen } = useModal();

  function onClickHandler() {
    setModalHeading("Enroll now to skrill school");
    setIsModalOpen(true);
  }
  return (
    <Section>
      <SectionContentWrapper className="flex flex-col items-center">
        <Heading className="text-5xl leading-[1.3]">
          Don&apos;t Just Consume Technology
          <br />
          Create It! Enroll Now!
        </Heading>
        <Button size="xl" className="px-10 text-lg" onClick={onClickHandler}>
          Enroll now
        </Button>
      </SectionContentWrapper>
    </Section>
  );
}
