import Image from "next/image";

export default function CodDockLogo() {
  return (
    <Image
      src="/logo.png"
      alt="CodDock"
      width={150}
      height={90}
      priority
      quality={100}
      sizes="(max-width: 600px) 100px, 150px"
      style={{ width: "auto", height: 30 }}
      className="block h-10 w-auto"
    />
  );
}
