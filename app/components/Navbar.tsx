"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Our Team" },
    { href: "/leaderboard", label: "Fundraising Leaderboard" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0b0017]/95 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/CRS1.png"
            alt="TJ Cancer Research Society Logo"
            width={35}
            height={35}
            className="object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-200 font-semibold">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-colors duration-200 ${
                  isActive ? "text-white" : "hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-[3px] bg-purple-400 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0b0017]/95 backdrop-blur-md px-6 py-4 space-y-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-lg font-semibold transition-colors duration-200 ${
                  isActive ? "text-white" : "text-gray-200 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
