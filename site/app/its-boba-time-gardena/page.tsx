import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "It's Boba Time Gardena: Menu, Hours & Honest Review | Justin Sather",
  description: "The complete guide to It's Boba Time in Gardena. Menu, prices, location on Artesia Blvd, parking, and what to order. Honest review paid out of pocket.",
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "It's Boba Time Gardena Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.1",
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
    "name": "It's Boba Time Gardena",
    "servesCuisine": "Bubble Tea",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1605 W Redondo Beach Blvd",
      "addressLocality": "Gardena",
      "addressRegion": "CA",
      "postalCode": "90247",
      "addressCountry": "US"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Justin Sather, Los Angeles",
    "url": "https://justinsather.com"
  },
  "datePublished": "2026-03-24",
  "url": "https://justinsather.com/its-boba-time-gardena/"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is there an It's Boba Time in Gardena?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. It's Boba Time has a location in Gardena on W Redondo Beach Blvd. It serves the full It's Boba Time menu including milk teas, fruit teas, and blended drinks with boba toppings."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best boba in Gardena?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's Boba Time on W Redondo Beach Blvd is one of the best boba options in Gardena. The Thai milk tea is the top order. The location is less crowded than the chain's Koreatown or East LA outposts, so service is reliably fast."
      }
    },
    {
      "@type": "Question",
      "name": "What should I order at It's Boba Time Gardena?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Order the Thai milk tea at 75% sweet with tapioca pearls. It is the best drink at this location. The taro milk tea and honey milk tea are strong alternatives. Avoid the blended drinks on busy weekends when consistency can dip."
      }
    },
    {
      "@type": "Question",
      "name": "What are the hours for It's Boba Time in Gardena?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's Boba Time Gardena is generally open 11am to 10pm daily. Hours can shift slightly on holidays and weekends. Check Google Maps for the most current hours before your visit."
      }
    },
    {
      "@type": "Question",
      "name": "How much does boba cost at It's Boba Time Gardena?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drinks at It's Boba Time Gardena range from about $5 to $7. It is one of the most affordable boba options in the South Bay area. Toppings like boba pearls and aloe vera are a small extra charge."
      }
    },
    {
      "@type": "Question",
      "name": "Is there parking at It's Boba Time Gardena?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Gardena location has a shared shopping center parking lot that is generally easy to use. Parking is rarely a problem at this location compared to higher-traffic LA spots."
      }
    }
  ]
};

export default function ItsBobatimeGardenaPage() {
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
            It&apos;s Boba Time Gardena: The South Bay&apos;s Most Reliable Boba Stop
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
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4.1/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Gardena, CA</span>
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
            alt="It's Boba Time Gardena exterior on W Redondo Beach Blvd"
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
            { label: "Address", value: "1605 W Redondo Beach Blvd, Gardena" },
            { label: "Hours", value: "~11am to 10pm daily" },
            { label: "Price Range", value: "$5 to $7 per drink" },
            { label: "Parking", value: "Shopping center lot" },
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

            <h2 className="text-2xl font-bold text-[#1A202C]">Why the Gardena Location Works</h2>
            <p>
              Gardena is not the first place people think of when they plan a boba run in LA County. That is exactly why the It&apos;s Boba Time location here is worth knowing about. It serves the full chain menu, the wait times are short, and the parking situation is about as easy as you will find anywhere in the county.
            </p>
            <p>
              I have visited this location three times. The drinks come out consistent and the staff works quickly. If you are coming from the South Bay, Torrance, or Inglewood, this is the closest strong boba option in the area without fighting traffic into Koreatown or driving out to the SGV.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What to Order</h2>
            <p>
              The Thai milk tea is the right call here, same as at any It&apos;s Boba Time location. Order at 75% sweet, full ice, with tapioca pearls. The condensed milk base gives it a richness that sets the chain apart from watered-down competitors. The pearls at this location are cooked well, chewy without going rubbery.
            </p>
            <p>
              Taro milk tea is the second-best option. The purple color is genuine and the flavor is earthy and slightly sweet, not the artificial candy version you get at lower-quality shops. If you are visiting in summer, the passion fruit green tea is an underrated pick on this menu.
            </p>
            <p>
              The honey milk tea is a reliable order if you are new to the chain. It is the most approachable drink on the menu, smooth and not too sweet at 75%, and the default introduction to what It&apos;s Boba Time does well.
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
                    { drink: "Thai Milk Tea", price: "$5.75", notes: "Best on the menu. 75% sweet with pearls." },
                    { drink: "Taro Milk Tea", price: "$5.75", notes: "Genuine taro, good color and flavor." },
                    { drink: "Honey Milk Tea", price: "$5.50", notes: "Most approachable, great for first-timers." },
                    { drink: "Passion Fruit Green Tea", price: "$5.25", notes: "Best fruit tea option, light and refreshing." },
                    { drink: "Brown Sugar Milk Tea", price: "$6.25", notes: "Good but faces strong competition nearby." },
                    { drink: "Matcha Latte", price: "$6.00", notes: "Decent, not the reason to visit." },
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
                alt="It's Boba Time Thai milk tea and taro drink Gardena"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Gardena Location Experience</h2>
            <p>
              Gardena does not have a boba scene. There is no block with four competing shops, no line that wraps around the building on a Saturday afternoon. What it has is a straightforward It&apos;s Boba Time that operates efficiently and serves a neighborhood where options are limited.
            </p>
            <p>
              The interior is standard for the chain. Functional seating, a full menu board, the same customization options you get anywhere. Nothing is Instagram-worthy and nothing needs to be. If you want atmosphere, head to Koreatown. If you want a good drink fast without the crowd, this is the call.
            </p>
            <p>
              The South Bay has enough It&apos;s Boba Time regulars that this location stays busy during afternoon and evening peaks, but the wait has never exceeded ten minutes on any of my visits. That number doubles or triples at the Vermont Ave and Western Ave central LA locations during the same hours.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Parking and Getting There</h2>
            <p>
              The Gardena location sits in a shopping center off W Redondo Beach Blvd. The lot is shared and has plenty of spaces. I have never had trouble parking here. The lot clears out faster than strip malls in denser parts of the city because the foot traffic volume is lower.
            </p>
            <p>
              From the 405, exit Redondo Beach Blvd and head east. From downtown LA, the 110 south to Redondo Beach Blvd is the fastest route. The drive from Koreatown takes about 20 to 25 minutes in normal traffic. From Torrance, you are looking at 10 minutes or less.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares to Other South Bay Options</h2>
            <p>
              The South Bay is not flush with boba options at the quality level of the SGV or Koreatown. It&apos;s Boba Time Gardena fills the gap well. It is more accessible and more consistent than smaller independent shops in the area, and the price point is hard to beat anywhere in LA County.
            </p>
            <p>
              If you are willing to drive, the Koreatown boba scene and the SGV shops are meaningfully better. Chicha San Chen in San Gabriel, Sunright Tea Studio in Pasadena, and Happy Lemon in Alhambra all operate at a higher tier. But for a South Bay resident who wants a solid drink without the commute, the Gardena location earns its spot.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Best boba option in the Gardena area</li>
                  <li>Easy shopping center parking</li>
                  <li>Short wait times, no big crowds</li>
                  <li>Affordable at $5 to $7 per drink</li>
                  <li>Full It&apos;s Boba Time menu available</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>No standout atmosphere or decor</li>
                  <li>Blended drinks can be inconsistent</li>
                  <li>SGV and Koreatown options are better</li>
                  <li>Limited boba competition nearby keeps quality bar lower</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              It&apos;s Boba Time Gardena is the right choice for South Bay residents who want a consistent, affordable boba without driving 30 minutes north. The Thai milk tea is the best drink in the immediate area at this price. The parking is easy, the service is fast, and the drinks deliver what the chain is known for.
            </p>
            <p>
              Four point one out of five. Scored slightly below the Burbank location because the surrounding boba context is weaker, which means fewer cross-shopping comparisons and a slightly lower baseline expectation from the staff. The drinks are still good. Come for the Thai milk tea, leave satisfied.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order Thai milk tea at 75% sweet with full ice. The standard sweetness level is too high for most people.</li>
                <li>Come between 2pm and 5pm for the shortest wait. The afternoon lull is shorter here than at busier LA locations.</li>
                <li>Ask for aloe vera as a topping if you want something lighter than tapioca pearls. It pairs well with the fruit teas.</li>
                <li>The parking lot fills fastest on weekend evenings. Arrive before 6pm if the lot concerns you.</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-[#1A202C] mt-10">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: "Is there an It's Boba Time in Gardena?",
                  a: "Yes. It's Boba Time has a location in Gardena on W Redondo Beach Blvd. It serves the full chain menu including milk teas, fruit teas, and blended drinks with customizable toppings and sweetness levels."
                },
                {
                  q: "What is the best boba in Gardena?",
                  a: "It's Boba Time on W Redondo Beach Blvd is the best boba option in Gardena. The Thai milk tea is the standout drink. Service is fast and the wait is shorter than at the chain's central LA locations."
                },
                {
                  q: "What should I order at It's Boba Time Gardena?",
                  a: "Order the Thai milk tea at 75% sweet with tapioca pearls. It is the most consistent drink at this location. Taro milk tea and honey milk tea are reliable alternatives. Skip the blended drinks on busy days."
                },
                {
                  q: "What are the hours for It's Boba Time in Gardena?",
                  a: "It's Boba Time Gardena is generally open 11am to 10pm daily. Hours may shift slightly on holidays. Check Google Maps for the most current information before visiting."
                },
                {
                  q: "How much does boba cost at It's Boba Time Gardena?",
                  a: "Drinks range from about $5 to $7 for a full-size cup. It is one of the most affordable boba options in the South Bay. Toppings like boba pearls and aloe vera are a small add-on."
                },
                {
                  q: "Is there parking at It's Boba Time Gardena?",
                  a: "Yes. The Gardena location is in a shopping center with a shared parking lot that is generally easy to use. Parking is rarely a problem compared to busier Koreatown or East LA locations."
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
                  { label: "Atmosphere", score: 5 },
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
              <p className="text-5xl font-bold">4.1/5</p>
              <p className="text-blue-100 text-xs mt-1">Best boba in the South Bay</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Address:</span> 1605 W Redondo Beach Blvd, Gardena CA 90247</p>
                <p><span className="font-semibold">Hours:</span> ~11am to 10pm daily</p>
                <p><span className="font-semibold">Price:</span> $5 to $7 per drink</p>
                <p><span className="font-semibold">Parking:</span> Shopping center lot, easy</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More Boba Reviews</h3>
              <div className="space-y-2">
                <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  It&apos;s Boba Time Full LA Review &rarr;
                </Link>
                <Link href="/its-boba-time-burbank/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  It&apos;s Boba Time Burbank &rarr;
                </Link>
                <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Boba Guys Review &rarr;
                </Link>
                <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Chicha San Chen San Gabriel &rarr;
                </Link>
                <Link href="/best-boba-inglewood/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Boba Near Inglewood (SoFi, Kia Forum, LAX) &rarr;
                </Link>
                <Link href="/best-boba-torrance/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Boba in Torrance (South Bay Guide) &rarr;
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
