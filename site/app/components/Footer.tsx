import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A202C] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/">
              <Image
                src="/assets/logos/Justin-Sather-Logo.png"
                alt="Justin Sather Los Angeles"
                width={140}
                height={95}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
            </Link>
            <p className="text-[#718096] text-sm leading-relaxed">
              Your honest guide to every boba shop in Los Angeles. No sponsorships, no free drinks, just real reviews.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com/labobaguide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#718096] hover:text-white transition-colors text-sm"
              >
                @labobaguide
              </a>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#718096] mb-4">Top Reviews</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-sm text-[#A0AEC0] hover:text-white transition-colors">
                  Tiger Sugar Review
                </Link>
              </li>
              <li>
                <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="text-sm text-[#A0AEC0] hover:text-white transition-colors">
                  Best Boba Koreatown
                </Link>
              </li>
              <li>
                <Link href="/best-boba-los-angeles/" className="text-sm text-[#A0AEC0] hover:text-white transition-colors">
                  Best Boba Los Angeles
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#718096] mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/food-drink/" className="text-sm text-[#A0AEC0] hover:text-white transition-colors">
                  Food and Drink
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#718096] mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-me/" className="text-sm text-[#A0AEC0] hover:text-white transition-colors">
                  About Justin Sather
                </Link>
              </li>
              <li>
                <Link href="/why-los-angeles/" className="text-sm text-[#A0AEC0] hover:text-white transition-colors">
                  Why Los Angeles?
                </Link>
              </li>
              <li>
                <Link href="mailto:justin@justinsather.com" className="text-sm text-[#A0AEC0] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2D3748] mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#718096] text-sm">
            &copy; 2026 Justin Sather, Los Angeles. All rights reserved.
          </p>
          <a
            href="https://caltechweb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#718096] hover:text-white text-sm transition-colors"
          >
            Powered by Caltechweb
          </a>
        </div>
      </div>
    </footer>
  );
}
