import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image
        src="/main-guy.png"
        width={900}
        height={921}
        alt="show-case"
        objectFit="cover"
        unoptimized
        className="absolute left-1/2 -translate-x-1/2 max-w-5xl md:max-w-3xl"
      />
      <div className="absolute bottom-0 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center pt-56 w-full">
        <div className="bg-white rounded-full flex items-center md:py-3 px-10 gap-16 md:flex-col md:gap-6 md:rounded-lg bg-primary/50 backdrop:blur-3xl">
          <h1 className="text-8xl text-secondary font-heading lg:text-7xl text-center">
            Kyu nhi lag rahi <span className="text-primary">JOB?</span>
          </h1>
          <Button size="xl" className="relative">
            Request a call back
          </Button>
        </div>
      </div>
    </div>
  );
}
