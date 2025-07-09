import About from "./About";
import JoinNetwork from "./JoinNetwork";
import ContactForm from "./ContactForm";
import BackgroundStethoscope from "./BackgroundStethoscope";

export default function LandingSections() {
  return (
    <section className="relative overflow-hidden bg-white text-[#3E3F7D]">
      {/* Background SVG Decoration */}
      <BackgroundStethoscope />

      <div className="relative z-10 px-6 md:px-40 py-20 space-y-32">
        <About />
        <JoinNetwork />
        <ContactForm />
      </div>
    </section>
  );
}
