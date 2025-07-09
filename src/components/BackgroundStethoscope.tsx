import Image from "next/image";

export default function BackgroundStethoscope() {
  return (
    <div className="absolute top-0 right-0 h-full w-auto z-0 hidden md:block pointer-events-none">
      <Image
        src="/stethoscope.svg"
        alt="Stethoscope"
        width={490}
        height={1531}
        className="object-contain h-full"
        style={{ minHeight: "100%" }}
      />
    </div>
  );
}
