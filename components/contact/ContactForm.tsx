"use client";

import { useState } from "react";

export default function ContactForm() {
  const [purpose, setPurpose] = useState("");
  return (
    <section className="pb-28">
      <div className="mx-auto grid max-w-6xl gap-12 rounded-[36px] bg-white p-10 shadow-sm md:grid-cols-2">

        {/* Left Side */}

        <div>

          <p
            className="uppercase tracking-[0.3em] text-sm text-[#B36A5E]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            LET'S BEGIN THE CONVERSATION
          </p>

          <h2
            className="mt-4 text-4xl text-[#3E5140]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            You're in the right place.
          </h2>

          <p className="mt-6 leading-8 text-[#667164]">
            Whether you're ready to begin therapy, would like to schedule a
            discovery call, or simply have a question, I'd love to hear from
            you.
          </p>

          <div className="mt-12 space-y-8">

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF4EF] text-[#3E5140] font-semibold">
                1
              </div>

              <div>
                <h4 className="font-semibold text-[#3E5140]">
                  Tell me a little about yourself
                </h4>

                <p className="mt-1 text-[#667164]">
                  Complete the form with whatever you're comfortable sharing.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF4EF] text-[#3E5140] font-semibold">
                2
              </div>

              <div>
                <h4 className="font-semibold text-[#3E5140]">
                  I'll review your request
                </h4>

                <p className="mt-1 text-[#667164]">
                  Every message is personally read with care.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF4EF] text-[#3E5140] font-semibold">
                3
              </div>

              <div>
                <h4 className="font-semibold text-[#3E5140]">
                  We'll decide the next step together
                </h4>

                <p className="mt-1 text-[#667164]">
                  Whether that's a therapy session, a discovery call, or simply
                  answering your questions.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Form */}

        <form
          action="https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID"
          method="POST"
          className="space-y-5"
        >

          <input
            required
            name="name"
            placeholder="Full Name"
            className="w-full rounded-2xl border border-[#E5DED6] p-4 outline-none transition focus:border-[#B36A5E]"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full rounded-2xl border border-[#E5DED6] p-4 outline-none transition focus:border-[#B36A5E]"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full rounded-2xl border border-[#E5DED6] p-4 outline-none transition focus:border-[#B36A5E]"
          />

<select
  name="purpose"
  value={purpose}
  onChange={(e) => setPurpose(e.target.value)}
  className="w-full rounded-2xl border border-[#E5DED6] p-4 outline-none transition focus:border-[#B36A5E]"
>
  <option value="">How can I support you today?</option>
  <option value="therapy">I'd like to begin therapy</option>
  <option value="call">I'd like to schedule a discovery call</option>
  <option value="question">I have a general question</option>
  <option value="unsure">I'm not sure where to begin</option>
</select>

          {/* Show ONLY for Therapy */}

{purpose === "therapy" && (
  <>
    <select
      name="therapy"
      className="w-full rounded-2xl border border-[#E5DED6] p-4 outline-none transition focus:border-[#B36A5E]"
    >
      <option>Preferred Therapy</option>
      <option>Art Therapy</option>
      <option>Movement Therapy</option>
      <option>Acceptance & Commitment Therapy (ACT)</option>
      <option>Not Sure Yet</option>
    </select>

    <div className="grid gap-4 md:grid-cols-2">

      <input
        type="date"
        name="date"
        className="rounded-2xl border border-[#E5DED6] p-4 outline-none transition focus:border-[#B36A5E]"
      />

      <input
        type="time"
        name="time"
        className="rounded-2xl border border-[#E5DED6] p-4 outline-none transition focus:border-[#B36A5E]"
      />

    </div>
  </>
)}

{/* Show ONLY for Discovery Call */}

{purpose === "call" && (
  <div className="grid gap-4 md:grid-cols-2">

    <input
      type="date"
      name="date"
      className="rounded-2xl border border-[#E5DED6] p-4 outline-none transition focus:border-[#B36A5E]"
    />

    <input
      type="time"
      name="time"
      className="rounded-2xl border border-[#E5DED6] p-4 outline-none transition focus:border-[#B36A5E]"
    />

  </div>
)}
          <textarea
            rows={5}
            name="message"
            placeholder="Tell me a little about what brings you here..."
            className="w-full rounded-2xl border border-[#E5DED6] p-4 outline-none transition focus:border-[#B36A5E]"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-[#3E5140] px-8 py-4 text-white transition duration-300 hover:bg-[#556B56]"
          >
            Send Request
          </button>

        </form>

      </div>
    </section>
  );
}