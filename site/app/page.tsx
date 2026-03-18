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
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image
                src="/assets/products/tiger_sugar_drink.png"
                alt="Tiger Sugar brown sugar boba Koreatown review"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold text-[#2B6CB0] uppercase tracking-wide">Shop Review</span>
              <h3 className="text-lg font-bold text-[#1A202C] mt-1 mb-2">
                Tiger Sugar, Koreatown
              </h3>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
                Brown sugar boba done right. Fresh pearls every 4 hours, theatrical torching, and the best brown sugar boba in Koreatown. Rated 5 out of 5.
              </p>
              <Link
                href="/tiger-sugar-review-koreatown-boba-bubble-tea/"
                className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors"
              >
                Read the Review &rarr;
              </Link>
            </div>
          </article>

          {/* Koreatown Guide */}
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image
                src="/assets/gallery/boba_koreatown_guide.png"
                alt="Best boba in Koreatown Los Angeles complete guide"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold text-[#2B6CB0] uppercase tracking-wide">Neighborhood Guide</span>
              <h3 className="text-lg font-bold text-[#1A202C] mt-1 mb-2">
                The Complete Koreatown Boba Guide
              </h3>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
                30+ shops documented across K-Town. Rankings, comparisons, insider knowledge, and price comparisons all in one place.
              </p>
              <Link
                href="/best-boba-koreatown-complete-guide-to-30-shops/"
                className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors"
              >
                Read the Guide &rarr;
              </Link>
            </div>
          </article>

          {/* Best Boba LA */}
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image
                src="/assets/gallery/best-boba-los-angeles-feature-full.jpeg"
                alt="Best boba shops in Los Angeles County"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold text-[#2B6CB0] uppercase tracking-wide">Citywide Roundup</span>
              <h3 className="text-lg font-bold text-[#1A202C] mt-1 mb-2">
                Best Boba in Los Angeles
              </h3>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
                25+ top shops across all of LA County, organized by neighborhood. SGV, Koreatown, Silver Lake, and beyond.
              </p>
              <Link
                href="/best-boba-los-angeles/"
                className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors"
              >
                See the List &rarr;
              </Link>
            </div>
          </article>
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
              icon: "🧋",
              title: "Every Shop Visited in Person",
              desc: "No aggregated reviews, no secondhand info. Justin visits every shop himself and documents the full experience.",
            },
            {
              icon: "📷",
              title: "All Original Photos",
              desc: "Every image on this site was taken by Justin during his visits. No stock photos, no Google Images.",
            },
            {
              icon: "🚫",
              title: "Zero Sponsorships",
              desc: "No free products, no paid partnerships. Every drink is purchased out of pocket, which keeps reviews honest.",
            },
            {
              icon: "🔄",
              title: "Quarterly Updates",
              desc: "Shops are revisited every quarter to keep hours, prices, and menu info accurate and current.",
            },
            {
              icon: "📍",
              title: "Hyperlocal Coverage",
              desc: "Deep neighborhood-by-neighborhood coverage that no generic top-10 list can match.",
            },
            {
              icon: "💬",
              title: "Honest Negative Reviews",
              desc: "Mediocre shops get called out. Justin tells you when something is not worth your money.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="text-3xl mb-3">{item.icon}</div>
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
