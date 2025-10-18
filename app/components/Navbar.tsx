"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Our Team" },

    { href: "/leaderboard", label: "Fundraising Leaderboard" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0b0017]/95 backdrop-blur-md text-white ">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/CRS1.png"
            alt="TJ Cancer Research Society Logo"
            width={35} // adjust as needed
            height={35} // adjust as needed
            className="object-contain"
          />
        </Link>

        <div className="flex space-x-8 text-gray-200  font-semibold">
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
                  <span className="absolute left-0 bottom-0 w-full h-[5px] bg-purple-400 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
