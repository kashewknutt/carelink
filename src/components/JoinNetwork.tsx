import Image from "next/image";

export default function JoinNetwork() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-12 items-start">
      {/* Left Column */}
      <div className="max-w-lg">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-[#3E3F7D] inline-block">
          Join the Carelink Network Today
        </h2>
        <p className="text-sm font-light leading-relaxed text-[#4F4F8C]">
          Sign up on our partner app, set your schedule, and start receiving bookings as a nurse,
          caregiver, or physiotherapist. Manage visits and deliver care—all from one easy platform.
          Enjoy flexibility and fulfill your purpose.
        </p>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-start gap-4">
        <p className="font-medium text-[#3E3F7D]">Download our partner app</p>
        <div className="flex gap-4">
          <Image src="/google-play.svg" alt="Google Play" width={150} height={50} />
          <Image src="/app-store.svg" alt="App Store" width={140} height={42} />
        </div>
      </div>
    </div>
  );
}
