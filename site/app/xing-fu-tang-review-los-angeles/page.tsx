import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xing Fu Tang Review: Tiger Milk Tea in Los Angeles | Justin Sather",
  description: "Xing Fu Tang review: the Taiwanese brown sugar boba chain famous for tiger milk tea arrives in LA. Honest review from personal visits, paid out of pocket. Menu breakdown, what to order, and how it compares.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Xing Fu Tang Review: Tiger Milk Tea in Los Angeles",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.7",
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
    "name": "Xing Fu Tang",
    "servesCuisine": "Bubble Tea",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Temple City",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Justin Sather, Los Angeles",
    "url": "https://justinsather.com"
  },
  "datePublished": "2026-03-21",
  "url": "https://justinsather.com/xing-fu-tang-review-los-angeles/"
};

export default function XingFuTangReviewPage() {
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
            Xing Fu Tang Review: The Taiwanese Tiger Milk Tea That Lives Up to the Hype in LA
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
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4.7/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Temple City, SGV</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Taiwanese Chain</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_scene_lifestyle.png"
            alt="Xing Fu Tang tiger milk tea Los Angeles"
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
            { label: "Location", value: "Temple City, Alhambra, SGV" },
            { label: "Hours", value: "Daily 11am to 10pm (varies)" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Tiger Milk Tea, brown sugar boba, fresh-cooked pearls" },
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
              Xing Fu Tang is the real thing. The Taiwanese boba brand that built its reputation on handcrafted brown sugar pearls and theatrical tiger stripe presentation has brought that same quality to the San Gabriel Valley, and it holds up. This is one of the best brown sugar boba experiences in Los Angeles County, full stop.
            </p>
            <p>
              If you have been ordering brown sugar boba at other LA chains and wondering what the fuss is about, Xing Fu Tang answers that question. The difference is in the pearls: freshly cooked in small batches, caramelized to order, and served warm against chilled milk. The experience at most chains does not compare.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes Xing Fu Tang Different</h2>
            <p>
              The chain was founded in Taiwan in 2018 and quickly became known for one thing above all else: brown sugar pearls cooked fresh in a wok every two hours. The pearls are made from Taiwanese tapioca starch and caramelized with Okinawa black sugar, then tumbled in the hot wok until each one is deeply coated and slightly sticky. The result is a pearl that is genuinely different from the mass-produced tapioca you find at most chains.
            </p>
            <p>
              When the pearls are poured into the cup, they create the signature tiger stripe pattern that has made the drink instantly recognizable. It is a visual hook, but it is also a function of the process: the caramelized sugar streaks up the side of the cup as the pearls shift. What you are looking at is evidence of fresh preparation, not a styling trick.
            </p>
            <p>
              This is the key distinction between Xing Fu Tang and most of its competition. The brown sugar boba at chains like{" "}
              <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Kung Fu Tea
              </Link>{" "}
              or{" "}
              <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Happy Lemon
              </Link>{" "}
              uses pre-made pearls and brown sugar syrup. Xing Fu Tang cooks everything in-house, in small batches, with a timer running. That operational discipline shows in the cup.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Xing Fu Tang Menu: What to Order</h2>
            <p>
              The <strong>Tiger Sugar Milk Tea</strong> is the signature and where to start. Fresh brown sugar pearls, warm from the wok, served in cold milk over ice. The pearls have a depth that starchy, syrup-soaked versions cannot match. The milk is lightly sweetened and clean, letting the brown sugar do the work. This drink alone justifies the trip from anywhere in LA County.
            </p>
            <p>
              Note the comparison to{" "}
              <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tiger Sugar in Koreatown
              </Link>
              , which uses a similar fresh-pearl model. Both are excellent. Xing Fu Tang edges ahead on pearl texture in most visits; Tiger Sugar wins on atmosphere and accessibility. If you are deciding between the two, go to whichever is closer, then visit the other.
            </p>
            <p>
              The <strong>Brown Sugar Milk</strong> (no tea) is worth ordering if you want the pearl experience without any bitterness. The lack of a tea base makes the brown sugar and milk the entire story. It is a richer, more dessert-like drink than the milk tea version. Order this one if you are new to the brand.
            </p>
            <p>
              The <strong>Taro Milk Tea with Fresh Pearls</strong> is the strongest non-brown sugar option. The taro flavor is natural and lightly sweet, and the fresh pearls add a dimension that powder-based taro drinks at other shops cannot replicate. This is the drink to order if you want something other than brown sugar but still want to experience what makes Xing Fu Tang different.
            </p>
            <p>
              The <strong>Matcha Milk Tea</strong> is competent but not a standout. The matcha is ceremonial-grade by Taiwanese chain standards, which means it is better than most LA options, but it is not the reason to visit Xing Fu Tang. Order it only if brown sugar or taro are not your preference.
            </p>
            <p>
              Skip the <strong>fruit teas</strong>. They are fine but they do not showcase what Xing Fu Tang does better than anyone else. The brand&apos;s entire competitive advantage is in its cooked pearl program. Fruit teas route around that advantage entirely.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Xing Fu Tang brown sugar boba Los Angeles SGV"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">LA Locations: San Gabriel Valley</h2>
            <p>
              Xing Fu Tang operates in the San Gabriel Valley, which is the most boba-dense corridor in all of Los Angeles County. The Temple City and Alhambra locations are the most established in the area. Both are easy to reach from the 10 freeway and have parking nearby.
            </p>
            <p>
              The SGV placement is strategically smart for a brand competing at the premium end of the boba market. The SGV has the highest concentration of Taiwanese and Hong Kong boba drinkers in LA who know what a properly cooked pearl tastes like. Xing Fu Tang has to earn those customers on merit, and it does.
            </p>
            <p>
              Wait times are worth knowing about. The pearl cooking process means that peak hours (weekend afternoons, 2pm to 5pm) can produce waits of 15 to 20 minutes. This is not a line complaint, it is a quality signal. The pearls are not pre-made. Plan accordingly and you will not be frustrated.
            </p>
            <p>
              Seating is minimal at the SGV locations. This is a drink-and-walk shop. Order ahead if the app is available, or build in the wait time on your first visit so it does not catch you off guard.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Xing Fu Tang sits at the premium end of the LA boba market. Drinks run $7 to $10, which puts it in the same range as{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>{" "}
              and{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>
              . For what you are getting, the price is justified. The fresh-cooked pearl program is labor-intensive. You are paying for that labor and the quality difference it produces.
            </p>
            <p>
              If price is the primary concern, Xing Fu Tang is not the everyday chain. It is the shop you bring someone to when you want to show them what excellent boba actually tastes like.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares</h2>
            <p>
              In the brown sugar boba category, Xing Fu Tang and Tiger Sugar Koreatown are the two best options in LA. Both use fresh pearls and brown sugar with real depth. Tiger Sugar is more accessible geographically; Xing Fu Tang is easier to reach from the SGV. The quality gap between them is small enough that your choice should come down to location.
            </p>
            <p>
              Against Chicha San Chen, the comparison shifts. Chicha San Chen&apos;s strength is single-origin oolong and competition-grade tea. Xing Fu Tang&apos;s strength is the brown sugar pearl program. They are the best shops in LA at completely different things. Visit both.
            </p>
            <p>
              Against the everyday chains (Kung Fu Tea, Feng Cha, Happy Lemon), Xing Fu Tang is in a different tier for brown sugar drinks. The gap is large enough to justify the premium and the trip out to the SGV.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Fresh-cooked brown sugar pearls every two hours, genuinely different from pre-made alternatives</li>
                  <li>Tiger Milk Tea is one of the best brown sugar boba drinks in LA County</li>
                  <li>Okinawa black sugar gives a complexity that generic syrup cannot match</li>
                  <li>Strong taro and matcha options beyond the signature</li>
                  <li>SGV location puts it within reach of the most boba-literate customer base in LA</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Wait times during peak hours (15 to 20 minutes on busy weekends)</li>
                  <li>Limited seating, this is a to-go operation</li>
                  <li>Premium pricing puts it above everyday boba budget for most</li>
                  <li>SGV-only location means a dedicated trip from most of LA</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Xing Fu Tang earns its reputation. The Tiger Milk Tea is one of the few boba drinks in Los Angeles that genuinely delivers on the promise of brown sugar boba. The fresh pearl program is not a marketing claim, it is a process you can taste.
            </p>
            <p>
              A 4.7 out of 5 reflects a shop that does its signature thing better than almost anyone else in the city. The only reasons it is not a 5 are the wait times during peak hours and the fact that the menu beyond brown sugar and taro is not particularly special.
            </p>
            <p>
              If you have not been, make the trip to the SGV. Order the Tiger Milk Tea. Drink it before the pearls cool down. That is the experience Xing Fu Tang was built around, and it holds up.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Drink the Tiger Milk Tea within 10 minutes of receiving it. The warm pearls cool fast, and the temperature contrast is most pronounced when the pearls are still warm from the wok.</li>
                <li>Ask when the next pearl batch comes out if you arrive near a cook window. Fresh-from-the-wok pearls are noticeably better than pearls that have been sitting for 90 minutes.</li>
                <li>Weekday mornings and early afternoons have the shortest waits. Weekend afternoons from 1pm to 5pm are peak and can mean a 20-minute wait.</li>
                <li>The Brown Sugar Milk (no tea) is a better entry point for first-timers than the milk tea. The flavor is more direct and the brown sugar caramel is easier to appreciate without a tea base underneath it.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Quick Rating</h3>
              <div className="space-y-2">
                {[
                  { label: "Pearl Quality", score: 10 },
                  { label: "Tea Quality", score: 8 },
                  { label: "Menu Range", score: 7 },
                  { label: "Value", score: 7 },
                  { label: "Experience", score: 9 },
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
              <p className="text-5xl font-bold">4.7/5</p>
              <p className="text-blue-100 text-xs mt-1">Best fresh-pearl boba in SGV</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Area:</span> Temple City, Alhambra, SGV</p>
                <p><span className="font-semibold">Origin:</span> Taiwan (founded 2018)</p>
                <p><span className="font-semibold">Price:</span> $7 to $10 per drink</p>
                <p><span className="font-semibold">Best drink:</span> Tiger Milk Tea</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More LA Boba Reviews</h3>
              <div className="space-y-2">
                <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Tiger Sugar Koreatown Review &rarr;
                </Link>
                <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Chicha San Chen SGV Review &rarr;
                </Link>
                <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Boba Guys Review &rarr;
                </Link>
                <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Sunright Tea Studio Review &rarr;
                </Link>
                <Link href="/best-boba-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Boba in LA (25+ shops) &rarr;
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
