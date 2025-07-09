import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-screen bg-black flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/hero_background.svg"
        alt="Hero Background"
        fill
        className="object-cover brightness-50"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 h-full w-4/5 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12">
        {/* Left: Text Content */}
        <div className="text-white mt-24 md:mt-0">
          <h1
            className="text-4xl md:text-6xl font-extralight leading-tight"
            style={{ letterSpacing: "0.05em" }}
          >
            Connecting You to <br />
            Expert Care, Anytime, <br />
            Anywhere
          </h1>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block h-48 w-px bg-white/30 mx-8" />

        {/* Right: Download Buttons */}
        <div className="mt-10 md:mt-0 text-white flex flex-col items-center gap-4">
          <p className="text-lg font-extralight">Download our app</p>
          <div className="flex gap-4">
            <Image src="/google-play.svg" alt="Google Play" width={140} height={42} />
            <Image src="/app-store.svg" alt="App Store" width={140} height={42} />
          </div>
        </div>
      </div>
    </section>
  );
}
