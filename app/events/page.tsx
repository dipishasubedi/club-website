"use client";

export default function Events() {
  return (
    <main
      className="relative flex flex-col min-h-screen text-white"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <section
        className="relative w-full h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: "url('backgroundPic.jpeg')" }}
      >
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#0b0017] to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center">
            Events
          </h1>
        </div>
      </section>
    </main>
  );
}
