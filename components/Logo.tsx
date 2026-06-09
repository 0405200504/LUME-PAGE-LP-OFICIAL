import Image from "next/image";

type LogoProps = {
  className?: string;
  /** cor do texto/desenho */
  tone?: "bordo" | "offwhite";
};

export default function Logo({ className = "", tone = "bordo" }: LogoProps) {
  // O usuário disponibilizou apenas uma logo no momento
  const src = "/logo.png";
  
  return (
    <Image
      src={src}
      alt="Lume Logo"
      width={1000}
      height={1000}
      className={`object-contain ${className}`}
      priority
    />
  );
}
