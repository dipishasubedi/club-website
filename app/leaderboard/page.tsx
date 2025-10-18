"use client";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Leaderboard() {
  const leaderboard = [
    { name: "Suhani Garg", amount: 0 },
    { name: "Arya Reddy", amount: 650 },
    { name: "Minati Divakar", amount: 0 },
    { name: "Ramini Paruchuri", amount: 0 },
    { name: "Yash Chavali", amount: 0 },
    { name: "Dipisha Subedi", amount: 0 },
    { name: "Meerub Rana", amount: 0 },
    { name: "Pal Sh", amount: 0 },
  ];

  const topThree = leaderboard.slice(0, 3);

  return (
    <main
      className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#0b0017] via-[#1a0030] to-[#0b0017] text-white overflow-hidden"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <section
        className="relative w-full h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: "url('backgroundPic.jpeg')" }}
      >
        {" "}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#0b0017] to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white tracking-wide text-center">
            Fundraiser Leaderboard
          </h1>
        </div>
      </section>

      <section className="mb-4 w-screen mx-auto px-20 mt-10 flex flex-col items-start text-left">
        <h2 className="text-3xl font-extrabold text-purple-200 mb-2">
          Raise funds. Raise hope.
        </h2>
        <p className="text-purple-200 text-lg leading-relaxed max-w-2xl mb-3 relative z-10">
          Cancer affects thousands of children every year — but together, we can
          help change that. Our fundraising efforts directly support the
          incredible work at{" "}
          <a
            href="https://www.childrensnational.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-purple-300 underline hover:text-purple-200 transition cursor-pointer relative z-20"
            style={{ pointerEvents: "auto" }}
          >
            Children’s National Hospital
          </a>
          , where researchers and doctors are advancing treatments and providing
          care for young patients in need. We encourage everyone to support
          these efforts, whether it's by donating or spreading the word to
          friends and family. Your involvement helps bring hope to children and
          families fighting pediatric cancer.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSewj3fgkkDhUJNRXnC1cxJ-AFX5VVoqkLISnuO-J5XdKMG_zw/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group bg-purple-950/60 rounded-2xl px-6 py-3 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(192,132,252,0.6)] active:opacity-80 flex flex-col items-center justify-center"
        >
          <span className="text-purple-200 font-semibold text-md tracking-wide text-center">
            Report Your Donations Here
          </span>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-purple-400/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
        </a>
      </section>

      <section className="w-full bg-purple-400/10 backdrop-blur-md py-8 px-20 border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-3xl font-extrabold text-purple-100 mb-2">
            Our Top TJHSST Supporters
          </h2>
          <p className="text-purple-100 text-lg leading-relaxed max-w-2xl mb-4">
            The fundraiser hasn’t started yet, but soon our generous supporters
            will help bring hope and care to children at Children’s National
            Hospital. Stay tuned and be ready to make a difference!
          </p>

          <div className="flex justify-center flex-wrap gap-10">
            {[1, 2, 3].map((_, idx) => {
              const scales = ["scale-95", "scale-105", "scale-95"];
              const glow = [
                "shadow-[0_0_25px_rgba(192,132,252,0.2)]",
                "shadow-[0_0_35px_rgba(192,132,252,0.3)]",
                "shadow-[0_0_25px_rgba(192,132,252,0.2)]",
              ];

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col items-center text-center p-6 rounded-2xl bg-purple-950/30 backdrop-blur-md border border-purple-900/40 ${scales[idx]} ${glow[idx]} transition-transform animate-pulse`}
                >
                  <Sparkles className="absolute top-3 right-3 text-purple-300/40 w-4 h-4" />
                  <div className="w-24 h-24 rounded-full bg-purple-900/40 border border-purple-400/30 flex items-center justify-center text-3xl font-semibold text-white mb-4">
                    ?
                  </div>
                  <p className="text-lg font-semibold text-purple-100 mb-1">
                    TBD
                  </p>
                  <p className="text-purple-300 text-sm">$0</p>
                  <div className="absolute -bottom-3 w-20 h-1 bg-gradient-to-r from-purple-400/20 via-purple-200/40 to-purple-400/20 rounded-full blur-sm"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-[90%] max-w-7xl mx-auto bg-purple-950/30 rounded-2xl shadow-xl p-8 mt-8 mb-8 backdrop-blur-md border border-purple-900/40">
        <h2 className="text-2xl font-semibold text-purple-200 mb-1 text-center">
          All Supporters
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-purple-300 border-b border-purple-800/50">
              <th className="py-3 px-4 font-semibold">Rank</th>
              <th className="py-3 px-4 font-semibold">Name</th>
              <th className="py-3 px-4 font-semibold text-right">
                Amount Raised
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(8)].map((_, idx) => (
              <tr
                key={idx}
                className="transition-all duration-200 hover:bg-purple-900/30"
              >
                <td className="py-3 px-4 text-purple-300">{idx + 1}</td>
                <td className="py-3 px-4">TBD</td>
                <td className="py-3 px-4 text-right text-purple-200">$0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <style jsx>{`
        main::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
              circle at 25% 25%,
              rgba(179, 136, 255, 0.08),
              transparent 40%
            ),
            radial-gradient(
              circle at 75% 75%,
              rgba(179, 136, 255, 0.06),
              transparent 40%
            );
          background-size: 200% 200%;
          animation: pulse 12s ease-in-out infinite alternate;
          z-index: 0;
        }

        @keyframes pulse {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </main>
  );
}
