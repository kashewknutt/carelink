import Image from "next/image";

export default function JoinNetwork() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-12 items-center text-center md:text-start md:items-start">
      {/* Left Column */}
      <div className="max-w-lg px-6 md:px-0">
        <h2 className="text-xl md:text-3xl font-semibold mb-4 border-b-2 border-[#3E3F7D] inline-block">
          Join the Curalink Network Today
        </h2>
        <p className="text-sm font-light text-justify md:text-start leading-relaxed text-[#4F4F8C]">
          Sign up on our partner app, set your schedule, and start receiving bookings as a nurse,
          caregiver, or physiotherapist. Manage visits and deliver care—all from one easy platform.
          Enjoy flexibility and fulfill your purpose.
        </p>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-center gap-4">
        <p className="font-light text-[#3E3F7D]">Download our partner app</p>
        <div className="flex gap-4">
          <Image src="/google-play.svg" alt="Google Play" width={160} height={55} />
          <Image src="/app-store.svg" alt="App Store" width={140} height={42} />
        </div>
      </div>
    </div>
  );
}
