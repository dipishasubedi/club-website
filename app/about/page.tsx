"use client";
import { Heart } from "lucide-react";
export default function About() {
  const officers = [
    {
      name: "Suhani Garg",
      img: "/officers/alice.jpeg",
      link: "/officers/alice",
    },
    { name: "Arya Reddy", img: "/officers/bob.jpeg", link: "/officers/bob" },
    {
      name: "Minati Divakar",
      img: "/officers/charlie.jpeg",
      link: "/officers/charlie",
    },
    { name: "Pal Shs", img: "/officers/diana.jpeg", link: "/officers/diana" },
    {
      name: "Ramini Paruchuri",
      img: "/officers/ethan.jpeg",
      link: "/officers/ethan",
    },
    {
      name: "Yash Chavali",
      img: "/officers/fiona.jpeg",
      link: "/officers/fiona",
    },
    {
      name: "Dipisha Subedi",
      img: "/officers/george.jpeg",
      link: "/officers/george",
    },
    {
      name: "Meerub Rana",
      img: "/officers/hannah.jpeg",
      link: "/officers/hannah",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#0b0017] text-white pt-15">
      {/* 🖼 Hero Section */}
      <section
        className="relative w-full h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: "url('backgroundPic.jpeg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 "></div>

        {/* Bottom fade overlay */}
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#0b0017] to-transparent"></div>

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center">
            Our Team
          </h1>
        </div>
      </section>

      {/* 🌊 Floating Officer Cells Section */}
      <section className="relative flex flex-col justify-center items-center py-20 gap-20">
        {/* Top Row */}
        <div className="flex justify-center items-center gap-12">
          {officers.slice(0, 4).map((officer, idx) => (
            <a
              key={idx}
              href={officer.link}
              className={`relative w-60 h-60 rounded-full overflow-hidden shadow-xl flex items-center justify-center animate-floating`}
              style={{
                animationDuration: `${6 + idx * 0.5}s`,
                animationDelay: `${idx * 0.3}s`,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-purple-800/30 blur-xl animate-glow"></div>
              <img
                src={officer.img}
                alt={officer.name}
                className="relative w-full h-full object-cover rounded-full border-2 border-white/20"
              />
              <div className="absolute bottom-2 w-full text-center text-white font-semibold text-sm backdrop-blur-sm bg-white/10 rounded-md py-1 font-[var(--font-poppins)]">
                {officer.name}
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex justify-center items-center gap-12">
          {officers.slice(4, 8).map((officer, idx) => (
            <a
              key={idx}
              href={officer.link}
              className={`relative w-60 h-60 rounded-full overflow-hidden shadow-xl flex items-center justify-center animate-floating`}
              style={{
                animationDuration: `${6 + idx * 0.5}s`,
                animationDelay: `${idx * 0.3}s`,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-purple-800/30 blur-xl animate-glow"></div>
              <img
                src={officer.img}
                alt={officer.name}
                className="relative w-full h-full object-cover rounded-full border-2 border-white/20"
              />
              <div className="absolute bottom-2 w-full text-center text-white font-semibold text-sm backdrop-blur-sm bg-white/10 rounded-md py-1">
                {officer.name}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="w-full py-1 bg-purple-100 flex justify-center items-center gap-6">
        {Array.from({ length: 25 }).map((_, idx) => (
          <Heart
            key={idx}
            size={32}
            fill="#b388ff" // solid fill
            stroke="none" // remove outline
            className="animate-bounce-slow"
          />
        ))}
      </section>

      {/* Tailwind + CSS animations */}
      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 15px #9b59b6, 0 0 30px #6c5ce7;
          }
          50% {
            box-shadow: 0 0 30px #9b59b6, 0 0 60px #6c5ce7;
          }
        }

        .animate-floating {
          animation-name: floating;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .animate-glow {
          animation-name: glow;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
      `}</style>
    </main>
  );
}
