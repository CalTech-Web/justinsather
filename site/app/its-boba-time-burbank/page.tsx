import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "It's Boba Time Burbank: Menu, Hours & Honest Review | Justin Sather",
  description: "The complete guide to It's Boba Time in Burbank. Menu, prices, location on Magnolia Blvd, parking, and what to order. Honest review paid out of pocket.",
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "It's Boba Time Burbank Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.2",
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
    "name": "It's Boba Time Burbank",
    "servesCuisine": "Bubble Tea",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3107 W Magnolia Blvd",
      "addressLocality": "Burbank",
      "addressRegion": "CA",
      "postalCode": "91505",
      "addressCountry": "US"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Justin Sather, Los Angeles",
    "url": "https://justinsather.com"
  },
  "datePublished": "2026-03-23",
  "url": "https://justinsather.com/its-boba-time-burbank/"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is there an It's Boba Time in Burbank?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. It's Boba Time has a location on W Magnolia Blvd in Burbank, CA. It is one of the calmer, less crowded locations in the chain and is a solid choice for boba near downtown Burbank."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best boba in Burbank?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's Boba Time on Magnolia Blvd is one of the best boba options in Burbank. The Thai milk tea and taro milk tea are standouts. The location is less crowded than central LA spots, so service is faster and the experience is more relaxed."
      }
    },
    {
      "@type": "Question",
      "name": "What should I order at It's Boba Time Burbank?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Order the Thai milk tea at 75% sweet with tapioca pearls. It is the best drink on the menu and the most consistent. The taro milk tea and passion fruit green tea are strong seconds. Avoid blended drinks on busy days as they can be inconsistent."
      }
    },
    {
      "@type": "Question",
      "name": "What are the hours for It's Boba Time in Burbank?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's Boba Time Burbank is typically open 11am to 10pm daily, though hours can vary. Check Google Maps for current hours before visiting as they occasionally adjust for holidays and staffing."
      }
    },
    {
      "@type": "Question",
      "name": "How much does boba cost at It's Boba Time Burbank?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drinks at It's Boba Time Burbank range from about $5 to $7 for a full-size cup. It is one of the most affordable boba options in the Burbank area. Toppings like boba pearls and grass jelly are a small add-on."
      }
    },
    {
      "@type": "Question",
      "name": "Is there parking at It's Boba Time Burbank?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Magnolia Blvd location has strip mall parking that is easy to access and rarely full. Parking is one of the reasons this location is better than more central LA spots."
      }
    }
  ]
};

export default function ItsBobatimeBurbankPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 pt-12 pb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] text-sm hover:text-[#215387] transition-colors">
              &larr; It&apos;s Boba Time Full LA Review
            </Link>
          </div>
          <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Location Review
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4 leading-tight">
            It&apos;s Boba Time Burbank: The Best Boba Stop on Magnolia Blvd
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
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4.2/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Burbank, CA</span>
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
            alt="It's Boba Time Burbank exterior on Magnolia Blvd"
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
            { label: "Address", value: "3107 W Magnolia Blvd, Burbank" },
            { label: "Hours", value: "~11am to 10pm daily" },
            { label: "Price Range", value: "$5 to $7 per drink" },
            { label: "Parking", value: "Strip mall, easy access" },
          ].map((fact) => (
            <div key={fact.label}>
              <p className="text-xs font-semibold text-[#718096] uppercase tracking-wide mb-1">{fact.label}</p>
              <p className="text-sm text-[#1A202C] font-medium">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main review */}
          <div className="lg:col-span-2 space-y-6 text-[#4A5568] leading-relaxed">

            <h2 className="text-2xl font-bold text-[#1A202C]">Why the Burbank Location Stands Out</h2>
            <p>
              Out of the 20+ It&apos;s Boba Time locations across Los Angeles County, Burbank is the one I&apos;d actually recommend. The Magnolia Blvd location sits in a strip mall off a calmer stretch of the corridor, which means better parking, shorter lines, and faster service than the chain&apos;s busier outposts in Koreatown or East LA.
            </p>
            <p>
              I have visited this location four times. Each time, the drinks were consistent and the wait was under five minutes. At the Vermont Ave location near USC, I have waited 20 minutes for the same Thai milk tea. Same drink. Ten blocks to the left is the difference between a quick stop and a commitment.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What to Order</h2>
            <p>
              The Thai milk tea is the non-negotiable order here. Order it at 75% sweet, full ice, with tapioca pearls. The condensed milk ratio at the Burbank location is slightly more generous than what I have gotten at other outposts, and the pearls are consistently well-cooked. Chewy without being rubbery.
            </p>
            <p>
              The taro milk tea is a strong second choice. The color and flavor are genuine, not the pale lavender powder version that cuts corners. If you are visiting after a hot day in the valley, the passion fruit green tea with less ice hits differently.
            </p>
            <p>
              The Burbank location gets the classics right. Stay in that lane on your first visit. The blended drinks are fine but more variable depending on the day.
            </p>

            {/* Menu table */}
            <h2 className="text-2xl font-bold text-[#1A202C]">Menu Highlights and Prices</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-[#EDF2F7]">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-[#1A202C]">Drink</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1A202C]">Price</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1A202C]">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { drink: "Thai Milk Tea", price: "$5.75", notes: "Best on the menu. Order at 75% sweet." },
                    { drink: "Taro Milk Tea", price: "$5.75", notes: "Genuine taro flavor, good color." },
                    { drink: "Passion Fruit Green Tea", price: "$5.25", notes: "Best fruit tea option, refreshing." },
                    { drink: "Honey Milk Tea", price: "$5.50", notes: "Reliable classic, good for boba beginners." },
                    { drink: "Brown Sugar Milk Tea", price: "$6.25", notes: "Strong competition from Xing Fu Tang nearby." },
                    { drink: "Matcha Latte", price: "$6.00", notes: "Decent but not the reason to visit." },
                  ].map((row) => (
                    <tr key={row.drink} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-[#1A202C]">{row.drink}</td>
                      <td className="px-4 py-3 text-[#2B6CB0] font-semibold">{row.price}</td>
                      <td className="px-4 py-3 text-[#718096]">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/its_boba_time_drink.png"
                alt="It's Boba Time Thai milk tea and taro drink Burbank"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Burbank Location Experience</h2>
            <p>
              Burbank has a different energy than the rest of the LA boba circuit. It&apos;s not Koreatown, where you have 40 shops within a half mile. It&apos;s not the SGV, where the boba density reaches levels that feel absurd in the best way. Burbank is more like a normal city with a very good It&apos;s Boba Time.
            </p>
            <p>
              The inside of the Magnolia Blvd location is modest. Nothing Instagram-worthy. A few tables, standard seating, a menu board that feels slightly overwhelming the first time. But this is not a vibe shop. It is a drink shop. And the drinks are good.
            </p>
            <p>
              The staff has been consistently fast and accurate on my visits. Customizations land correctly. If you ask for 50% sweet and no ice, that is what comes out. That sounds basic, but it is genuinely not guaranteed everywhere in the city.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Parking and Getting There</h2>
            <p>
              Parking is the quiet advantage of this location. Magnolia Blvd has street parking and the strip mall has a dedicated lot. I have never circled once looking for a spot here. Compare that to the Vermont Ave location, where I have done three loops before giving up and parking four blocks away.
            </p>
            <p>
              The location is easy to access from the 5 or 134 freeway. If you are coming from the west side or Koreatown, factor in about 20 to 30 minutes depending on when you leave. It is worth the drive if you want a relaxed boba experience instead of a crowded one.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares to Other Burbank Options</h2>
            <p>
              Burbank does not have the boba density of the SGV or Koreatown. It&apos;s Boba Time is the most accessible and consistent option in the area. Boba Loca on the other side of town is a decent alternative, but the menu depth and drink quality lean toward It&apos;s Boba Time.
            </p>
            <p>
              If you are willing to drive 15 minutes east, the SGV boba scene is a different tier entirely. Chicha San Chen in San Gabriel, Sunright Tea Studio in Pasadena, and Xing Fu Tang in Temple City are all operating at a level above what you get in Burbank. But for a grab-and-go drink near downtown Burbank, this location is the right call.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Best boba option in Burbank</li>
                  <li>Easy parking, no lot stress</li>
                  <li>Fast service, short wait times</li>
                  <li>Affordable at $5 to $7 per drink</li>
                  <li>Thai milk tea is genuinely excellent</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>No Instagram-worthy atmosphere</li>
                  <li>Blended drinks are inconsistent</li>
                  <li>SGV options 15 min away are better overall</li>
                  <li>Menu size is overwhelming for new visitors</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              It&apos;s Boba Time Burbank is exactly what it needs to be: a reliable, affordable, well-run boba location with good parking and short waits. The Thai milk tea is the best you are getting in Burbank at this price. If you are already in the area, do not drive past it. If you are debating whether to make the trip specifically, the drinks are good but the SGV will reward you more for the drive.
            </p>
            <p>
              Four point two out of five. The Burbank location earns a slightly higher score than the chain average because of the consistently faster service and parking situation.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order Thai milk tea at 75% sweet and full ice. The standard sweet level is high.</li>
                <li>Come between 2pm and 5pm for the shortest wait. Lunch and evening rushes add 5 to 10 minutes.</li>
                <li>Ask for less ice if you plan to drink slowly. The default ice level dilutes the drink over 20 minutes.</li>
                <li>The strip mall lot fills during lunch but clears out fast. Do not let a full lot discourage you.</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-[#1A202C] mt-10">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: "Is there an It's Boba Time in Burbank?",
                  a: "Yes. It's Boba Time has a location on W Magnolia Blvd in Burbank, CA. It is one of the calmer, less crowded locations in the chain and a solid choice for boba near downtown Burbank."
                },
                {
                  q: "What is the best boba in Burbank?",
                  a: "It's Boba Time on Magnolia Blvd is the best boba option in Burbank. The Thai milk tea and taro milk tea are the standout drinks. The location is less crowded than central LA spots, so service is faster and the experience is more relaxed."
                },
                {
                  q: "What should I order at It's Boba Time Burbank?",
                  a: "Order the Thai milk tea at 75% sweet with tapioca pearls. It is the best drink on the menu and the most consistent across visits. The taro milk tea and passion fruit green tea are strong alternatives."
                },
                {
                  q: "What are the hours for It's Boba Time in Burbank?",
                  a: "It's Boba Time Burbank is typically open 11am to 10pm daily, though hours can vary. Check Google Maps for current hours before visiting."
                },
                {
                  q: "How much does boba cost at It's Boba Time Burbank?",
                  a: "Drinks range from about $5 to $7 for a full-size cup. It is one of the most affordable boba options in the Burbank area."
                },
                {
                  q: "Is there parking at It's Boba Time Burbank?",
                  a: "Yes. The Magnolia Blvd location has a strip mall parking lot that is easy to access. Parking is rarely a problem here, unlike busier central LA locations."
                }
              ].map((item) => (
                <div key={item.q} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-[#1A202C] mb-2">{item.q}</h3>
                  <p className="text-sm text-[#4A5568]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Quick Rating</h3>
              <div className="space-y-2">
                {[
                  { label: "Drink Quality", score: 8 },
                  { label: "Pearl Freshness", score: 8 },
                  { label: "Value", score: 10 },
                  { label: "Atmosphere", score: 6 },
                  { label: "Service Speed", score: 9 },
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
              <p className="text-5xl font-bold">4.2/5</p>
              <p className="text-blue-100 text-xs mt-1">Best boba in Burbank</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Address:</span> 3107 W Magnolia Blvd, Burbank CA 91505</p>
                <p><span className="font-semibold">Hours:</span> ~11am to 10pm daily</p>
                <p><span className="font-semibold">Price:</span> $5 to $7 per drink</p>
                <p><span className="font-semibold">Parking:</span> Strip mall lot, easy</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More Boba Reviews</h3>
              <div className="space-y-2">
                <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  It&apos;s Boba Time Full LA Review &rarr;
                </Link>
                <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Boba Guys Review &rarr;
                </Link>
                <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Chicha San Chen San Gabriel &rarr;
                </Link>
                <Link href="/xing-fu-tang-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Xing Fu Tang Review &rarr;
                </Link>
                <Link href="/best-boba-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Boba LA Guide (25+ shops) &rarr;
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
            <p className="text-[#4A5568] text-sm">25+ shops ranked and reviewed across Los Angeles County.</p>
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
