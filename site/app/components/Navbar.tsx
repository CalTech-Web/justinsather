"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logos/Justin-Sather-Logo.png"
              alt="Justin Sather Los Angeles"
              width={140}
              height={95}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-[#2D3748] hover:text-[#2B6CB0] transition-colors">
              Home
            </Link>
            <Link href="/home-boba/" className="text-sm font-medium text-[#2D3748] hover:text-[#2B6CB0] transition-colors">
              Boba Guide
            </Link>
            <Link href="/about-me/" className="text-sm font-medium text-[#2D3748] hover:text-[#2B6CB0] transition-colors">
              About Justin
            </Link>
            <Link href="/why-los-angeles/" className="text-sm font-medium text-[#2D3748] hover:text-[#2B6CB0] transition-colors">
              Why Los Angeles?
            </Link>
            <Link
              href="/contact/"
              className="bg-[#2B6CB0] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#215387] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#2D3748] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#2D3748] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#2D3748] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#090c10] text-white px-4 py-6 flex flex-col gap-4">
          <Link href="/" className="text-sm font-medium hover:text-[#2B6CB0]" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/home-boba/" className="text-sm font-medium hover:text-[#2B6CB0]" onClick={() => setMenuOpen(false)}>Boba Guide</Link>
          <Link href="/about-me/" className="text-sm font-medium hover:text-[#2B6CB0]" onClick={() => setMenuOpen(false)}>About Justin</Link>
          <Link href="/why-los-angeles/" className="text-sm font-medium hover:text-[#2B6CB0]" onClick={() => setMenuOpen(false)}>Why Los Angeles?</Link>
          <Link href="/contact/" className="text-sm font-medium hover:text-[#2B6CB0]" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
