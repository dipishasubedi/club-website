"use client";
import { Heart } from "lucide-react";

export default function About() {
  const officers = [
    { name: "Suhani Garg", img: "/officers/alice.jpeg" },
    { name: "Arya Reddy", img: "/officers/bob.jpeg", link: "/officers/bob" },
    { name: "Minati Divakar", img: "/officers/charlie.jpeg" },
    { name: "Pal Sh", img: "/officers/Pal.jpg", link: "/officers/diana" },
    { name: "Ramini Paruchuri", img: "/officers/Ramini.jpg" },
    { name: "Yash Chavali", img: "/officers/fiona.jpeg" },
    { name: "Dipisha Subedi", img: "/officers/george.jpeg" },
    { name: "Meerub Rana", img: "/officers/hannah.jpeg" },
  ];

  return (
    <main
      className="relative flex flex-col min-h-screen text-white"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      {/* Hero Section */}
      <section
        className="relative w-full h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: "url('backgroundPic.jpeg')" }}
      >
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#0b0017] to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center">
            Our Team
          </h1>
        </div>
      </section>

      {/* Officers Section */}
      <section
        className="relative flex flex-col justify-center items-center py-16 gap-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/constellation.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 relative z-10">
          {officers.map((officer, idx) => (
            <a
              key={idx}
              className="relative w-40 h-40 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-xl flex items-center justify-center animate-floating"
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
              <div className="absolute bottom-1 w-full text-center text-white font-semibold text-xs sm:text-sm backdrop-blur-sm bg-purple-800 rounded-md py-1">
                {officer.name}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Hearts Section */}
      <section className="w-full py-2 bg-purple-100 flex justify-start sm:justify-center items-center gap-3 overflow-x-auto px-4">
        {Array.from({ length: 25 }).map((_, idx) => (
          <Heart
            key={idx}
            size={24}
            fill="#b388ff"
            stroke="none"
            className="animate-bounce-slow flex-shrink-0"
          />
        ))}
      </section>

      {/* Animations */}
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
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
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
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
      `}</style>
    </main>
  );
}
