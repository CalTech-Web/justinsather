import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Justin Sather, Los Angeles - Your Honest Guide to Every Boba Shop",
  description: "LA-based boba enthusiast Justin Sather has personally visited 150+ bubble tea shops across Los Angeles County. Honest reviews, original photos, zero sponsorships.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Los Angeles Boba Guide
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1A202C] leading-tight mb-6">
                Your Honest Guide to Every Boba Shop in Los Angeles
              </h1>
              <p className="text-lg text-[#4A5568] leading-relaxed mb-8">
                I&apos;ve personally visited 150+ bubble tea shops across LA County, paid for every drink myself, and written honest reviews with original photos. No sponsorships, no partnerships, just the truth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/home-boba/"
                  className="bg-[#2B6CB0] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#215387] transition-colors"
                >
                  Explore the Boba Guide
                </Link>
                <Link
                  href="/best-boba-koreatown-complete-guide-to-30-shops/"
                  className="border border-[#2B6CB0] text-[#2B6CB0] font-semibold px-6 py-3 rounded-lg hover:bg-[#EDF2F7] transition-colors"
                >
                  Koreatown Guide
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square">
                <Image
                  src="/assets/gallery/best-boba-los-angeles-feature-full.jpeg"
                  alt="Los Angeles boba bubble tea guide by Justin Sather"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#2B6CB0] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "150+", label: "Shops Visited" },
              { value: "50+", label: "Detailed Reviews" },
              { value: "15+", label: "Neighborhoods" },
              { value: "$3,000+", label: "Spent on Boba" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-blue-100 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-8">Featured Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tiger Sugar */}
          <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow block h-80">
            <Image
              src="/assets/products/tiger_sugar_drink.png"
              alt="Tiger Sugar brown sugar boba Koreatown review"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute top-3 left-3 bg-[#2B6CB0] text-white text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">
              Shop Review
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                Tiger Sugar, Koreatown
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">
                Fresh pearls every 4 hours, theatrical torching, and the best brown sugar boba in Koreatown. Rated 5 out of 5.
              </p>
              <span className="text-white text-sm font-semibold group-hover:text-blue-200 transition-colors">
                Read the Review &rarr;
              </span>
            </div>
          </Link>

          {/* Koreatown Guide */}
          <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow block h-80">
            <Image
              src="/assets/gallery/boba_koreatown_guide.png"
              alt="Best boba in Koreatown Los Angeles complete guide"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute top-3 left-3 bg-[#2B6CB0] text-white text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">
              Neighborhood Guide
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                The Complete Koreatown Boba Guide
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">
                30+ shops documented across K-Town. Rankings, comparisons, and insider knowledge all in one place.
              </p>
              <span className="text-white text-sm font-semibold group-hover:text-blue-200 transition-colors">
                Read the Guide &rarr;
              </span>
            </div>
          </Link>

          {/* Best Boba LA */}
          <Link href="/best-boba-los-angeles/" className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow block h-80">
            <Image
              src="/assets/gallery/best-boba-los-angeles-feature-full.jpeg"
              alt="Best boba shops in Los Angeles County"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute top-3 left-3 bg-[#2B6CB0] text-white text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">
              Citywide Roundup
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                Best Boba in Los Angeles
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">
                25+ top shops across all of LA County. SGV, Koreatown, Silver Lake, and beyond.
              </p>
              <span className="text-white text-sm font-semibold group-hover:text-blue-200 transition-colors">
                See the List &rarr;
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#EDF2F7] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-[#2B6CB0]">
            <Image
              src="/assets/team/justin-sather-headshot-1024.jpg"
              alt="Justin Sather"
              fill
              className="object-cover"
            />
          </div>
          <blockquote className="text-xl sm:text-2xl font-medium text-[#2D3748] italic mb-6 leading-relaxed">
            &ldquo;I pay for every drink myself. No sponsorships, no partnerships, no free products. Just honest reviews from a guy who really, really loves boba.&rdquo;
          </blockquote>
          <cite className="text-[#2B6CB0] font-semibold not-italic">Justin Sather, Founder</cite>
          <p className="text-[#4A5568] text-sm mt-1">justinsather.com</p>
        </div>
      </section>

      {/* Why trust section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A202C]">Why Trust These Reviews?</h2>
          <p className="text-[#4A5568] mt-3 max-w-2xl mx-auto">
            Every review on this site is based on a real, in-person visit. Here is what sets this guide apart.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              ),
              title: "Every Shop Visited in Person",
              desc: "No aggregated reviews, no secondhand info. Justin visits every shop himself and documents the full experience.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
              ),
              title: "All Original Photos",
              desc: "Every image on this site was taken by Justin during his visits. No stock photos, no Google Images.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              ),
              title: "Zero Sponsorships",
              desc: "No free products, no paid partnerships. Every drink is purchased out of pocket, which keeps reviews honest.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              ),
              title: "Quarterly Updates",
              desc: "Shops are revisited every quarter to keep hours, prices, and menu info accurate and current.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>
              ),
              title: "Hyperlocal Coverage",
              desc: "Deep neighborhood-by-neighborhood coverage that no generic top-10 list can match.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              ),
              title: "Honest Negative Reviews",
              desc: "Mediocre shops get called out. Justin tells you when something is not worth your money.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#EDF2F7] flex items-center justify-center text-[#2B6CB0] mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-[#1A202C] mb-2">{item.title}</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#215387] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Favorite Boba Spot?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Start with Koreatown, the most thoroughly documented neighborhood in the guide, then explore the rest of LA.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/best-boba-koreatown-complete-guide-to-30-shops/"
              className="bg-white text-[#215387] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Koreatown Boba Guide
            </Link>
            <Link
              href="/best-boba-los-angeles/"
              className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#215387] transition-colors"
            >
              Best Boba in LA
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
