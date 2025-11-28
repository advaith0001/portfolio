"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname(); // Helps detect active page

  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        
        <h1 className="font-semibold text-xl text-gray-900">
          Thakku N A
        </h1>

        <div className="flex gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group transition ${
                  isActive ? "text-blue-600" : "text-gray-800"
                }`}
              >
                {link.label}

                {/* underline (purple on hover, blue if active) */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] transition-all duration-300
                    ${isActive ? "w-full bg-blue-600" : "w-0 bg-[#9333EA] group-hover:w-full"}
                  `}
                ></span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
