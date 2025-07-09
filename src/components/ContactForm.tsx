export default function ContactForm() {
  return (
    <div className="max-w-2xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-[#3E3F7D] inline-block">
        Reach Out to Us
      </h2>
      <form className="mt-4 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border border-[#3E3F7D] px-4 py-2 rounded-sm focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-[#3E3F7D] px-4 py-2 rounded-sm focus:outline-none"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="border border-[#3E3F7D] px-4 py-2 rounded-sm focus:outline-none"
        ></textarea>
      </form>
    </div>
  );
}
