import Heading from "@/components/custom/heading";
import { Section, SectionContentWrapper } from "@/components/custom/section";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <Section>
      <SectionContentWrapper className="flex flex-col items-center">
        <Heading className="text-5xl leading-[1.3]">
          Don&apos;t Just Consume Technology
          <br />
          Create It! Enroll Now!
        </Heading>
        <Button size="xl" className="px-10 text-lg">Enroll now</Button>
      </SectionContentWrapper>
    </Section>
  );
}
