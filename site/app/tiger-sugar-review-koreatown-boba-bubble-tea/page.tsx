import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiger Sugar Review: Menu, Prices & Hours in Koreatown LA | Justin Sather",
  description: "Tiger Sugar Koreatown review with full menu, prices, and hours. Is it the best brown sugar boba in Los Angeles? Justin Sather visited in person and gives the honest verdict.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Tiger Sugar, Koreatown: The Best Brown Sugar Boba in Los Angeles?",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
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
    "name": "Tiger Sugar",
    "servesCuisine": "Bubble Tea",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3470 W 6th St",
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
  "url": "https://justinsather.com/tiger-sugar-review-koreatown-boba-bubble-tea/"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is on the Tiger Sugar menu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Tiger Sugar menu centers on its signature Brown Sugar Boba Milk with Cream Mousse. Other drinks include Brown Sugar Boba Milk (without foam), Brown Sugar Milk Tea with Cream Mousse, Coconut Milk with Cream Mousse, and rotating seasonal specials. Prices range from $6 to $8."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Tiger Sugar cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tiger Sugar drinks in Los Angeles range from $6 to $8. The signature Brown Sugar Boba Milk with Cream Mousse is $7.50. This puts it at a mid-range price point compared to other Koreatown boba shops."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Tiger Sugar in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tiger Sugar is located at 3470 W 6th St, Los Angeles, CA 90020, in the heart of Koreatown. The nearest parking is the Target parking structure approximately two blocks west on Vermont Avenue."
      }
    },
    {
      "@type": "Question",
      "name": "What are Tiger Sugar's hours in Koreatown?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tiger Sugar Koreatown is open daily from 11am to 10pm. The slowest time is weekday mornings before noon. Expect lines on Friday and Saturday evenings."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tiger Sugar worth it in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Tiger Sugar is the best brown sugar boba in Koreatown and one of the best in all of Los Angeles. The fresh-cooked pearls, house-made brown sugar syrup, and table-side torching make it a must-visit. The $7.50 price is fair for the quality."
      }
    },
    {
      "@type": "Question",
      "name": "How does Tiger Sugar compare to other boba shops near me in Koreatown?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tiger Sugar has a narrower menu than most Koreatown boba shops, but no other shop in the area matches its brown sugar boba. For a wider menu with cheese foam and fruit tea options, Feng Cha and Happy Lemon are nearby. Tiger Sugar wins on the brown sugar category by a wide margin."
      }
    }
  ]
};

export default function TigerSugarReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 pt-12 pb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="text-[#2B6CB0] text-sm hover:text-[#215387] transition-colors">
              &larr; Back to Koreatown Guide
            </Link>
          </div>
          <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Shop Review
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4 leading-tight">
            Tiger Sugar, Koreatown: The Best Brown Sugar Boba in Los Angeles?
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/assets/team/justin-sather-avatar.jpg" alt="Justin Sather" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1A202C]">Justin Sather</p>
              <p className="text-xs text-[#718096]">Visited in person, paid out of pocket &bull; Updated Q1 2026</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm mb-6">
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">5/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Koreatown</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Brown Sugar Boba</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/tiger_sugar_drink.png"
            alt="Tiger Sugar brown sugar boba drink Koreatown Los Angeles"
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
            { label: "Address", value: "3470 W 6th St, Los Angeles, CA" },
            { label: "Hours", value: "Mon-Sun, 11am to 10pm" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Brown sugar boba, dates, photos" },
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
              Tiger Sugar is the best brown sugar boba shop in Koreatown. That&apos;s not a close call. If you are visiting K-Town and you want one drink, this is where you go.
            </p>
            <p>
              The signature drink is the Brown Sugar Boba Milk with Cream Mousse. It is a layered drink built from the bottom up: fresh tapioca pearls cooked with brown sugar syrup, cold milk, and a salted cream foam on top that gets torched table-side. The theatrical presentation is part of the appeal, but it also serves a functional purpose: the light charring on the foam adds a subtle caramelized note that balances the sweetness of the brown sugar below.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Pearls</h2>
            <p>
              The pearls are what separate Tiger Sugar from every imitator. They make fresh batches every 4 hours, which means the tapioca is always at the right texture: bouncy on the outside and soft inside, infused with brown sugar syrup that is genuinely house-made and not just a commercial syrup dumped over pre-packaged pearls.
            </p>
            <p>
              Most boba shops let their pearls sit. After a few hours, tapioca turns from bouncy to gummy. Tiger Sugar doesn&apos;t let that happen.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Atmosphere</h2>
            <p>
              The K-Town location has a clean, modern interior. The line forms outside during peak hours (Friday and Saturday evenings), but it moves quickly. Seating is limited so most people order and leave. Staff are efficient and friendly without being over-the-top.
            </p>
            <p>
              Parking is the main complaint in the area, not Tiger Sugar&apos;s fault but worth knowing: street parking on 6th Street is limited. Use the Target parking structure two blocks west and walk.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What to Order</h2>
            <p>
              Keep it simple. The Brown Sugar Boba Milk with Cream Mousse is the reason to come. Everything else on the menu is decent but unremarkable. The specialty drinks vary by season and some are better than others.
            </p>
            <p>
              If you hate sweet drinks, reduce the sugar level when you order. The default is very sweet, which is part of the experience, but a 50% sugar option gives you a more balanced drink.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Tiger Sugar Menu and Prices</h2>
            <p>
              The Tiger Sugar menu is intentionally short. This is a shop that does one thing and does it better than anyone else in Koreatown. Here is every item currently on the menu at the Los Angeles location:
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#EDF2F7] text-[#2D3748]">
                    <th className="text-left px-4 py-3 font-semibold">Drink</th>
                    <th className="text-left px-4 py-3 font-semibold">Price</th>
                    <th className="text-left px-4 py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { drink: "Brown Sugar Boba Milk with Cream Mousse", price: "$7.50", notes: "Signature. Table-side torching. Order this." },
                    { drink: "Brown Sugar Boba Milk", price: "$6.75", notes: "No foam, simpler version of the signature" },
                    { drink: "Brown Sugar Milk Tea with Cream Mousse", price: "$7.50", notes: "Tea base instead of plain milk, still great" },
                    { drink: "Coconut Milk with Cream Mousse", price: "$7.50", notes: "Lighter, tropical variation" },
                    { drink: "Seasonal Specials", price: "$7–$8", notes: "Vary by season, ask staff what is current" },
                  ].map((row) => (
                    <tr key={row.drink} className="text-[#4A5568]">
                      <td className="px-4 py-3 font-medium text-[#1A202C]">{row.drink}</td>
                      <td className="px-4 py-3 font-semibold text-[#2B6CB0]">{row.price}</td>
                      <td className="px-4 py-3">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Customization options at Tiger Sugar include sugar level (25%, 50%, 75%, 100%) and ice level (no ice, less ice, regular). The default sugar level is very sweet. I recommend 75% on your first visit.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Best brown sugar boba in Koreatown</li>
                  <li>Fresh pearls every 4 hours</li>
                  <li>Theatrical table-side torching</li>
                  <li>Fast service even during peak hours</li>
                  <li>Consistent quality across visits</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Limited seating</li>
                  <li>Long lines on weekends</li>
                  <li>Menu is narrow outside the signature drink</li>
                  <li>Parking is a challenge in the area</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Tiger Sugar is the real deal. The hype is earned. If you are building a boba bucket list for Koreatown, start here. Five out of five.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Come before noon on weekdays to skip the line entirely.</li>
                <li>The drink is designed to be enjoyed immediately. The cream foam deflates and the ice melts fast.</li>
                <li>Order 75% sugar for the best balance of brown sugar flavor and sweetness.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Quick Rating</h3>
              <div className="space-y-2">
                {[
                  { label: "Drink Quality", score: 10 },
                  { label: "Pearl Freshness", score: 10 },
                  { label: "Value", score: 8 },
                  { label: "Atmosphere", score: 8 },
                  { label: "Service", score: 9 },
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
              <p className="text-5xl font-bold">5/5</p>
              <p className="text-blue-100 text-xs mt-1">Best brown sugar boba in Koreatown</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Address:</span> 3470 W 6th St, Los Angeles</p>
                <p><span className="font-semibold">Hours:</span> Daily 11am to 10pm</p>
                <p><span className="font-semibold">Parking:</span> Use Target structure 2 blocks west</p>
                <p><span className="font-semibold">Best time:</span> Weekday mornings</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Compare Brown Sugar Boba</h3>
              <div className="space-y-2">
                <Link href="/xing-fu-tang-review-los-angeles/" className="text-[#2B6CB0] text-sm hover:text-[#215387] transition-colors block">
                  Xing Fu Tang Review &rarr;
                </Link>
                <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] text-sm hover:text-[#215387] transition-colors block">
                  Boba Guys Review &rarr;
                </Link>
                <Link href="/the-alley-boba-review-los-angeles/" className="text-[#2B6CB0] text-sm hover:text-[#215387] transition-colors block">
                  The Alley Review &rarr;
                </Link>
                <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block mt-3 pt-3 border-t border-gray-100">
                  Full Koreatown Guide (30+ shops) &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Tiger Sugar FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is on the Tiger Sugar menu?",
              a: "The Tiger Sugar menu centers on its signature Brown Sugar Boba Milk with Cream Mousse. Other drinks include Brown Sugar Boba Milk (without foam), Brown Sugar Milk Tea with Cream Mousse, Coconut Milk with Cream Mousse, and rotating seasonal specials. Prices range from $6 to $8.",
            },
            {
              q: "How much does Tiger Sugar cost?",
              a: "Tiger Sugar drinks in Los Angeles range from $6 to $8. The signature Brown Sugar Boba Milk with Cream Mousse is $7.50. This puts it at a mid-range price point compared to other Koreatown boba shops.",
            },
            {
              q: "Where is Tiger Sugar near me in Los Angeles?",
              a: "Tiger Sugar is located at 3470 W 6th St, Los Angeles, CA 90020, in Koreatown. The nearest parking is the Target parking structure approximately two blocks west on Vermont Avenue.",
            },
            {
              q: "What are Tiger Sugar's hours in Koreatown?",
              a: "Tiger Sugar Koreatown is open daily from 11am to 10pm. The slowest time is weekday mornings before noon. Expect lines on Friday and Saturday evenings.",
            },
            {
              q: "Is Tiger Sugar worth it in Los Angeles?",
              a: "Yes. Tiger Sugar is the best brown sugar boba in Koreatown and one of the best in all of Los Angeles. The fresh-cooked pearls, house-made brown sugar syrup, and table-side torching make it a must-visit. The $7.50 price is fair for the quality.",
            },
          ].map((item) => (
            <details key={item.q} className="bg-[#EDF2F7] rounded-xl p-5 group">
              <summary className="font-semibold text-[#1A202C] cursor-pointer list-none flex justify-between items-center">
                {item.q}
                <span className="text-[#2B6CB0] ml-3 flex-shrink-0">+</span>
              </summary>
              <p className="mt-3 text-[#4A5568] text-sm leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-[#1A202C] mb-1">Explore More Koreatown Boba</h2>
            <p className="text-[#4A5568] text-sm">30+ shops covered in the complete guide.</p>
          </div>
          <Link
            href="/best-boba-koreatown-complete-guide-to-30-shops/"
            className="bg-[#2B6CB0] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#215387] transition-colors flex-shrink-0"
          >
            Koreatown Guide
          </Link>
        </div>
      </section>
    </>
  );
}
