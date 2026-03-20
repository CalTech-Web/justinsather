import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "It's Boba Time Review: Los Angeles' Beloved Local Chain | Justin Sather",
  description: "An honest review of It's Boba Time, the beloved LA-based boba chain. Full menu breakdown, best drinks, locations, and what to order. Paid out of pocket, no sponsorships.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "It's Boba Time: The Complete Review of LA's Favorite Boba Chain",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Person",
    "name": "Justin Sather",
    "url": "https://justinsather.com/about-me/"
  },
  "itemReviewed": {
    "@type": "FoodEstablishment",
    "name": "It's Boba Time",
    "servesCuisine": "Bubble Tea",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Justin Sather, Los Angeles",
    "url": "https://justinsather.com"
  },
  "datePublished": "2026-01-15",
  "url": "https://justinsather.com/its-boba-time-review-los-angeles/"
};

export default function ItsBobaTImeReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 pt-12 pb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/best-boba-los-angeles/" className="text-[#2B6CB0] text-sm hover:text-[#215387] transition-colors">
              &larr; Back to Best Boba LA
            </Link>
          </div>
          <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Shop Review
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4 leading-tight">
            It&apos;s Boba Time: The Complete Review of LA&apos;s Favorite Boba Chain
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/assets/team/justin-sather-avatar.jpg" alt="Justin Sather" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1A202C]">Justin Sather</p>
              <p className="text-xs text-[#718096]">Multiple visits, paid out of pocket &bull; Updated Q1 2026</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm mb-6">
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Multiple LA Locations</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Milk Tea</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/its_boba_time_exterior.png"
            alt="It's Boba Time exterior Los Angeles"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Quick facts */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-[#EDF2F7] rounded-xl p-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Locations", value: "20+ across LA County" },
            { label: "Hours", value: "Varies by location" },
            { label: "Price Range", value: "$" },
            { label: "Best For", value: "Everyday boba, groups, variety" },
          ].map((fact) => (
            <div key={fact.label}>
              <p className="text-xs font-semibold text-[#718096] uppercase tracking-wide mb-1">{fact.label}</p>
              <p className="text-sm text-[#1A202C] font-medium">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Review content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main review */}
          <div className="lg:col-span-2 space-y-6 text-[#4A5568] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1A202C]">The Verdict</h2>
            <p>
              It&apos;s Boba Time is the backbone of boba culture in Los Angeles. Not flashy. Not the trendiest shop in the city. But reliable, affordable, and genuinely good. With 20+ locations spread across LA County, it&apos;s usually the closest option when the craving hits.
            </p>
            <p>
              I&apos;ve visited multiple locations over the past year. The quality is consistent, which is harder to pull off at scale than most people realize. A chain with this many outposts could easily let standards slip. It&apos;s Boba Time mostly doesn&apos;t.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Menu</h2>
            <p>
              The menu is big. That&apos;s both a feature and a flaw. You get classic milk teas, fruit teas, slushes, smoothies, and a rotating lineup of seasonal specials. The depth gives you options for every mood, but it can be overwhelming on a first visit.
            </p>
            <p>
              Stick to the classics until you know what you like. The Thai milk tea is one of the best in LA at this price point. The taro milk tea is sweet and consistent. For fruit teas, the passion fruit green tea is the right call on a hot day.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/its_boba_time_drink.png"
                alt="It's Boba Time signature drinks Los Angeles"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">What to Order</h2>
            <p>
              The Thai milk tea is the standout. It comes with a generous pour, creamy texture from the condensed milk blend, and the tapioca pearls are well-cooked at most locations. Order it at 75% sweet and you get the full flavor without the sugar headache.
            </p>
            <p>
              The taro milk tea is a close second. The color is legitimately purple and the flavor is genuine, not the artificial powder that a lot of shops use. Taro lovers will not be disappointed.
            </p>
            <p>
              Avoid the blended drinks if you are particular about texture. They can be inconsistent depending on the location and time of day.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Locations Across LA</h2>
            <p>
              With 20+ locations throughout Los Angeles County, It&apos;s Boba Time is one of the most accessible boba chains in the city. You&apos;ll find them in neighborhoods ranging from Koreatown and East LA to the San Gabriel Valley and the South Bay. Most locations are in strip malls with easy parking, which matters in LA more than people admit.
            </p>
            <p>
              The Vermont Avenue location near USC is the busiest I&apos;ve visited. The Burbank and Huntington Park locations are calmer and the service is noticeably faster. If you have a choice, pick a less central location for a better experience.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Value for Money</h2>
            <p>
              This is where It&apos;s Boba Time genuinely wins. At roughly $5 to $7 per drink for a full-size cup, it is one of the most affordable boba options in Los Angeles. You are getting a real drink, not a compromise.
            </p>
            <p>
              Compare that to some of the trendier imports charging $8 to $10 for the same volume and quality. It&apos;s Boba Time is not trying to be premium. It is trying to be good and accessible. That is a different goal, and they hit it.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>20+ locations across LA County</li>
                  <li>Most affordable boba in the city</li>
                  <li>Consistent quality across locations</li>
                  <li>Huge menu with options for everyone</li>
                  <li>Easy parking at most locations</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Menu is overwhelming for first-timers</li>
                  <li>Blended drinks are inconsistent</li>
                  <li>Busier locations have longer waits</li>
                  <li>Not the most exciting atmosphere</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              It&apos;s Boba Time is the reliable everyday boba shop that Los Angeles needed. Not the most exciting place on this list. But when you want a solid drink at a fair price without driving across town, it delivers. The Thai milk tea alone is worth the stop.
            </p>
            <p>
              Four out of five. A very good local chain that punches above its price point.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order at 75% sweet for the Thai milk tea. The default is very sweet.</li>
                <li>Avoid peak lunch and evening hours at the Vermont Ave location. The line can stretch 20 minutes.</li>
                <li>Ask for less ice if you want a stronger flavor. The default ice level dilutes the drink over time.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Quick Rating</h3>
              <div className="space-y-2">
                {[
                  { label: "Drink Quality", score: 8 },
                  { label: "Pearl Freshness", score: 7 },
                  { label: "Value", score: 10 },
                  { label: "Atmosphere", score: 6 },
                  { label: "Service", score: 8 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#4A5568]">{item.label}</span>
                      <span className="font-bold text-[#2B6CB0]">{item.score}/10</span>
                    </div>
                    <div className="h-1.5 bg-[#EDF2F7] rounded-full overflow-hidden">
                      <div className="h-full bg-[#2B6CB0] rounded-full" style={{ width: `${item.score * 10}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#2B6CB0] text-white rounded-xl p-5">
              <h3 className="font-bold mb-1 text-sm">Overall Score</h3>
              <p className="text-5xl font-bold">4/5</p>
              <p className="text-blue-100 text-xs mt-1">Best affordable boba chain in LA</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Locations:</span> 20+ across LA County</p>
                <p><span className="font-semibold">Price:</span> $5 to $7 per drink</p>
                <p><span className="font-semibold">Parking:</span> Usually available at most locations</p>
                <p><span className="font-semibold">Best location:</span> Burbank or Huntington Park</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More LA Boba Guides</h3>
              <div className="space-y-2">
                <Link href="/best-boba-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Boba in Los Angeles (25+ shops) &rarr;
                </Link>
                <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Koreatown Boba Guide (30+ shops) &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-[#1A202C] mb-1">Explore Every Boba Shop in LA</h2>
            <p className="text-[#4A5568] text-sm">25+ shops ranked and reviewed across Los Angeles.</p>
          </div>
          <Link
            href="/best-boba-los-angeles/"
            className="bg-[#2B6CB0] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#215387] transition-colors flex-shrink-0"
          >
            Best Boba LA Guide
          </Link>
        </div>
      </section>
    </>
  );
}
