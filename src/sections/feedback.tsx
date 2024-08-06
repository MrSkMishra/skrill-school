import Heading from "@/components/custom/heading";
import { Icons } from "@/components/custom/icons";
import { Section, SectionContentWrapper } from "@/components/custom/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    avatarSrc: "/aditya.png",
    name: "Aditya- Frontend Developer",
    desc: "Placed at Bfog",
    testimonial:
      "I enrolled in Skrill School and it transformed my understanding of programming. The instructors are knowledgeable and patient, making complex topics easy to grasp.",
  },
  {
    avatarSrc: "/nikhil.png",
    name: "Nikhil Gupta- Frontend Developer",
    desc: "Placed at Bfog",
    testimonial:
      "Skrill School has made learning to code an enjoyable experience. The interactive lessons and supportive community have helped me develop skills that I never thought I could.” ",
  },
  {
    avatarSrc: "/sakshi.png",
    name: "Sakshi Gupta- UI/UX designer",
    desc: "Placed at Kaliper Technologies",
    testimonial:
      "As a complete beginner, I was nervous about UX. However, Skrill School's structured curriculum and engaging teachers eased my fears. I've already designed  my first app, and I'm excited to learn more!",
  },
];

export default function Feedback() {
  return (
    <Section id="reviews" className="relative">
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
        <Icons.arrow className="size-64 absolute top-0 left-1/2 -translate-x-[100%] lg:hidden" />
        <div className="flex flex-col gap-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              avatarSrc={testimonial.avatarSrc}
              name={testimonial.name}
              desc={testimonial.desc}
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
  desc: string;
  testimonial: string;
}
function TestimonialCard({
  avatarSrc,
  name,
  desc,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="relative flex md:flex-col items-center gap-5 before:absolute before:w-[0.3rem] md:before:hidden before:h-full before:bg-white/10 before:rounded-full before:-translate-x-6 md:before:-translate-x-2 even:before:bg-secondary even:-translate-x-[10%] lg:even:translate-x-0 group">
      <Icons.quote className="fill-white size-7 absolute top-0 right-0 -translate-y-5 group-even:fill-secondary" />
      <Avatar className="size-28 border-2 md:self-start">
        <AvatarImage src={avatarSrc} className="object-cover" />
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-sm font-semibold text-secondary">{desc}</span>
        <p className="text-base text-white/50 mt-2">{testimonial}</p>
      </div>
    </div>
  );
}
