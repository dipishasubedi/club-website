import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Mail, Facebook, Instagram } from "lucide-react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TJ Cancer Research Society",
  description:
    "Passionate student community exploring breakthroughs in cancer research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-[var(--font-poppins)] antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>

        {/* 🌙 Footer Section */}
        <footer className="bg-[#0b0017] text-white py-10 px-6">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            {/* Message above icons */}
            <h2 className="text-xl font-semibold text-purple-200 mb-6">
              If you have any questions, feel free to reach out! We'd love to
              hear from you.
            </h2>

            {/* Contact Icons */}
            {/* Contact Icons */}
            <div className="flex justify-center gap-6 mb-8 flex-wrap">
              {/* Gmail */}
              <a
                href="mailto:info@tjcrs.org"
                className="bg-purple-950/60 rounded-2xl w-24 h-24 shadow-md transition-all duration-200 transform hover:scale-101 hover:shadow-[0_0_15px_rgba(192,132,252,0.5)] active:opacity-70 flex flex-col items-center justify-center"
              >
                <Mail className="text-purple-300 w-10 h-10 mb-1" />
                <p className="text-xs text-gray-300">Email Us</p>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/groups/1547792798726083/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-950/60 rounded-2xl w-24 h-24 shadow-md transition-all duration-200 transform hover:scale-101 hover:shadow-[0_0_15px_rgba(192,132,252,0.5)] active:opacity-70 flex flex-col items-center justify-center"
              >
                <Facebook className="text-purple-300 w-10 h-10 mb-1" />
                <p className="text-xs text-gray-300">Facebook</p>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/tjhsst_crs/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-950/60 rounded-2xl w-24 h-24 shadow-md transition-all duration-200 transform hover:scale-101 hover:shadow-[0_0_15px_rgba(192,132,252,0.5)] active:opacity-70 flex flex-col items-center justify-center"
              >
                <Instagram className="text-purple-300 w-10 h-10 mb-1" />
                <p className="text-xs text-gray-300">Instagram</p>
              </a>
            </div>

            {/* Quote below icons */}
            <p className="text-purple-300 italic text-sm mb-4">
              "Somewhere, something incredible is waiting to be known." – Carl
              Sagan
            </p>

            {/* Footer Bottom Line */}
            <p className="text-gray-400 text-xs mt-4">
              &copy; {new Date().getFullYear()} TJ Cancer Research Society. All
              rights reserved. Made by Dipisha Subedi.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
