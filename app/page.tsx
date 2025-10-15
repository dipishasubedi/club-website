"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-gray-800 font-[var(--font-poppins)]">
      {/* 🖼 Hero Section */}
      <section
        className="relative w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('backgroundPic.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-5xl font-extrabold text-white text-center">
          <Typewriter
            words={[
              "Spreading Knowledge",
              "Raising Awareness",
              "Empowering Hope",
              "TJHSST Cancer Research Society",
            ]}
            loop={1}
            cursor={false}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={500}
          />
        </h1>
      </section>

      {/* 💜 Layer 1 — Our Purpose & Mission */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-10 py-8 bg-gradient-to-br from-purple-200 via-purple-100 to-purple-300 px-10 lg:px-32 rounded-3xl shadow-md font-[var(--font-poppins)]">
        {/* Text Section */}
        <div className="flex-1 text-left">
          <h2 className="text-4xl text-purple-900 mb-2 tracking-tight font-extralight">
            Our Purpose
          </h2>
          <p className="max-w-2xl text-purple-900 text-lg leading-6.5 font-light tracking-tight">
            Welcome to TJ Cancer Research Society! Our purpose is to spark
            curiosity, compassion, and action in the fight against cancer.
            During our meetings (Friday 8B in room 53), we explore the science
            behind cancer research, treatment, and prevention in a way that’s
            engaging and meaningful. By connecting knowledge with community
            impact, we aim to inspire a generation of thoughtful advocates who
            bring hope and innovation to the world.
          </p>
        </div>

        {/* Video Section */}
        <div className="flex-1 w-full flex justify-center mt-6 lg:mt-10 translate-x-4 lg:translate-x-14">
          <video
            className="rounded-2xl shadow-lg w-full max-w-md"
            src="/videos/cancer-awareness.mp4" // place your file in /public/videos/
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      {/* 🤍 Layer 2 — What We Do */}
      {/* 🤍 Layer 2 — What We Do */}
      {/* 🤍 Layer 2 — What We Do */}
      {/* 🤍 Layer 2 — What We Do */}
      <section className="flex flex-col items-center justify-center text-center py-4 bg-white text-purple-900 px-6 overflow-hidden">
        <h2 className="text-4xl font-bold font-stretch-90% ">What We Do</h2>

        {/* Horizontal cell row */}
        <div className="flex justify-center gap-6 overflow-x-auto px-2 py-1">
          {/* Cell 1 */}
          {/* Cell 1 */}
          <div className="relative w-[20rem] h-[20rem] flex-shrink-0">
            <img
              src="/cell.png"
              alt="Lectures Cell"
              className="absolute inset-0 w-full h-full object-contain opacity-90 hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-start items-center pb-4 pt-38 px-2 text-center">
              <h3 className="text-3xl font-bold text-purple-900 drop-shadow-md">
                Lectures
              </h3>
              <p className="text-sm text-purple-900/80 font-bold">
                We host weekly lectures to learn about cancer research and
                biology in an engaging way.
              </p>
            </div>
          </div>

          {/* Cell 2 */}
          <div className="relative w-[20rem] h-[20rem] flex-shrink-0 flex items-center justify-center">
            <img
              src="/cell.png"
              alt="Outreach Cell"
              className="absolute inset-0 w-full h-full object-contain opacity-90 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col justify-start items-center pb-4 pt-38 px-2 text-center">
              <h3 className="text-3xl font-bold text-purple-900 drop-shadow-md">
                Outreach
              </h3>
              <p className="text-sm text-purple-900/80 font-bold">
                We organize awareness campaigns and activities to educate the
                community.
              </p>
            </div>
          </div>

          {/* Cell 3 */}
          <div className="relative w-[20rem] h-[20rem] flex-shrink-0 flex items-center justify-center">
            <img
              src="/cell.png"
              alt="Fundraising Cell"
              className="absolute inset-0 w-full h-full object-contain opacity-90 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col justify-start items-center pb-4 pt-38 px-2 text-center">
              <h3 className="text-3xl font-bold text-purple-900 drop-shadow-md">
                Fundraising
              </h3>
              <p className="text-sm text-purple-900/80 font-bold">
                We run fundraisers to support cancer research initiatives and
                events.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
