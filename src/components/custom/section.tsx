import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionContentWrapperProps = {
  className?: string;
  children: ReactNode;
};

export function SectionContentWrapper({
  className,
  children,
}: SectionContentWrapperProps) {
  return <div className={cn("py-16 lg:py-8 md:p-4", className)}>{children}</div>;
}

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export function Section({
  id,
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-6", className)}>
      <div className={cn("container", containerClassName)}>{children}</div>
    </section>
  );
}
