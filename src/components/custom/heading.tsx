import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type HeadingProps = {
  className?: string;
  children: ReactNode;
};

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h1 className={cn("mb-6 text-4xl capitalize md:text-3xl font-bold text-center", className)}>
      {children}
    </h1>
  );
}
