import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  className?: string;
};
export default function Logo({ className }: LogoProps) {
  return (
    <div className="relative">
      <Image
        src="/logo.png"
        alt="skrill-logo"
        className={className}
        priority
        width={100}
        height={100}
        quality={100}
        unoptimized
      />
      <Link href="/" className="absolute inset-0" />
    </div>
  );
}
