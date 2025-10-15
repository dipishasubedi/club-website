"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-100 text-gray-800 pt-15">
      {/* 🖼 Hero Section */}
      <section
        className="relative w-full h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('backgroundPic.jpeg')",
        }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#0b0017] to-transparent"></div>

        {/* Text Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Typewriter text */}
          <h1 className="text-5xl font-extrabold text-white text-center">
            <Typewriter
              words={[
                "Spreading Knowledge",
                "Raising Awareness",
                "Empowering Hope",
                "TJHSST Cancer Research Society",
              ]}
              loop={1}
              cursor={false} // hide cursor after typing
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={500}
            />
          </h1>
        </div>
      </section>

      {/* 🌿 Content Section */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16 text-center">
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed mb-10 text-gray-700">
            We’re a passionate community dedicated to exploring breakthroughs in
            cancer biology, supporting research initiatives, and raising
            awareness through collaboration and outreach.
          </p>
          <a
            href="/about"
            className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-all"
          >
            Learn More
          </a>
        </div>

        {/* Mission Section */}
        <div className="mt-24 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to engage students in scientific research and inspire
            the next generation of innovators working toward cancer prevention,
            treatment, and awareness.
          </p>
        </div>
      </section>

      {/* Tailwind + CSS animation for "We Are" */}
      <style jsx>{`
        @keyframes dropPoof {
          0% {
            transform: translateY(-100px) scale(1);
            opacity: 1;
            filter: drop-shadow(0 0 0px white);
          }
          70% {
            transform: translateY(0px) scale(1.1);
            opacity: 1;
            filter: drop-shadow(0 0 15px #ffffff);
          }
          100% {
            transform: translateY(0px) scale(0);
            opacity: 0;
            filter: drop-shadow(0 0 20px #ffffff);
          }
        }

        .
      `}</style>
    </main>
  );
}
