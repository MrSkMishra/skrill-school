import Heading from "@/components/custom/heading";
import { Icons } from "@/components/custom/icons";
import { Section, SectionContentWrapper } from "@/components/custom/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    avatarSrc: "https://mighty.tools/mockmind-api/content/human/7.jpg",
    name: "Ashley Cooper",
    testimonial:
      "Teamollo delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch.",
  },
  {
    avatarSrc: "https://mighty.tools/mockmind-api/content/human/68.jpg",
    name: "Ashley Cooper",
    testimonial:
      "Teamollo delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch.",
  },
  {
    avatarSrc: "https://mighty.tools/mockmind-api/content/human/49.jpg",
    name: "Ashley Cooper",
    testimonial:
      "Teamollo delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch.",
  },
];

export default function Feedback() {
  return (
    <Section className="relative">
      <SectionContentWrapper className="flex items-center gap-52 lg:flex-col lg:gap-16">
        <div className="flex flex-col lg:items-center">
          <Heading className="text-left text-5xl lg:text-center">
            What Our <br />
            Customers Says?
          </Heading>
          <p className="lg:text-center lg:max-w-2xl">
            Our live coding classes have empowered countless students to achieve
            their programming goals. But don’t just take our word for it—here’s
            what our customers have to say:
          </p>
        </div>
        <Icons.arrow className="size-64 absolute top-0 left-1/2 -translate-x-[80%] lg:hidden" />
        <div className="flex flex-col gap-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              avatarSrc={testimonial.avatarSrc}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </SectionContentWrapper>
    </Section>
  );
}

interface TestimonialCardProps {
  avatarSrc: string;
  name: string;
  testimonial: string;
}
function TestimonialCard({
  avatarSrc,
  name,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="relative flex md:flex-col items-center gap-5 before:absolute before:w-[0.3rem] md:before:hidden before:h-full before:bg-white/10 before:rounded-full before:-translate-x-6 md:before:-translate-x-2 even:before:bg-secondary even:-translate-x-[10%] lg:even:translate-x-0 group">
      <Icons.quote className="fill-white size-7 absolute top-0 right-0 -translate-y-5 group-even:fill-secondary" />
      <Avatar className="size-24 border-2 md:self-start">
        <AvatarImage src={avatarSrc} />
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col space-y-3">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-base">{testimonial}</p>
      </div>
    </div>
  );
}
