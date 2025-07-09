'use client';
import React, { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div className="max-w-2xl w-full items-center md:items-start">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-[#3E3F7D] inline-block">
        Reach Out to Us
      </h2>
      <form className="mt-4 flex flex-col gap-4" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          className="border border-[#3E3F7D] px-4 py-2 rounded-sm focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className="border border-[#3E3F7D] px-4 py-2 rounded-sm focus:outline-none"
        />
        <textarea
          placeholder="Message"
          name="message"
          rows={5}
          required
          className="border border-[#3E3F7D] px-4 py-2 rounded-sm focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="mt-2 py-2 px-8 bg-[#3E3F7D] text-white rounded-md mx-auto hover:bg-[#2c2d5c] duration-300 shadow-md"
        >
          Submit now
        </button>
        <p className="mt-2 text-center text-[#3E3F7D]">{result}</p>
      </form>
    </div>
  );
}
