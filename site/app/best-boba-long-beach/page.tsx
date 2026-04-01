import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const STAR_PATH =
  "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z";

function StarIcon({ type }: { type: "full" | "half" | "empty" }) {
  if (type === "full") {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#2B6CB0">
        <path d={STAR_PATH} />
      </svg>
    );
  }
  if (type === "empty") {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#2B6CB0" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={STAR_PATH} />
      </svg>
    );
  }
  return (
    <div className="relative w-4 h-4">
      <svg viewBox="0 0 24 24" className="absolute inset-0 w-4 h-4" fill="none" stroke="#2B6CB0" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={STAR_PATH} />
      </svg>
      <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#2B6CB0">
          <path d={STAR_PATH} />
        </svg>
      </div>
    </div>
  );
}

function StarRating({ rating }: { rating: string }) {
  const value = parseFloat(rating);
  const full = Math.floor(value);
  const half = value % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} stars`}>
      {Array.from({ length: full }).map((_, i) => <StarIcon key={`f${i}`} type="full" />)}
      {half && <StarIcon key="h" type="half" />}
      {Array.from({ length: empty }).map((_, i) => <StarIcon key={`e${i}`} type="empty" />)}
    </div>
  );
}

export const metadata: Metadata = {
  title: "Best Boba in Long Beach: Top Bubble Tea Shops Ranked | Justin Sather",
  description: "The complete guide to boba and bubble tea in Long Beach, CA. Every shop personally visited by Justin Sather. Boba Guys, Sunright, Ding Tea, Tastea, and more. Updated 2026.",
};

const faqItems = [
  {
    question: "What is the best boba in Long Beach?",
    answer: "Boba Guys at the 2nd & PCH shopping center is the best boba shop in Long Beach. The premium ingredient sourcing, Earl Grey Milk Tea, and Horchata Milk Tea are among the best in Southern California. For single-origin teas, Sunright Tea Studio on Ximeno Ave is the best alternative.",
  },
  {
    question: "Where is boba in Long Beach CA?",
    answer: "Long Beach has a solid boba scene. Boba Guys is at 2nd & PCH (the 2nd Street and Pacific Coast Highway shopping center). Sunright Tea Studio is at 1827 Ximeno Ave. Ding Tea and Tastea both have Long Beach locations as well, and Gong Cha is on E. Pacific Coast Hwy.",
  },
  {
    question: "Is there good boba near Cal State Long Beach?",
    answer: "Yes. Sunright Tea Studio on Ximeno Ave is within a short drive of CSULB and is the best option near campus. Ding Tea on Clark Ave is also close. For a wider selection, the shops along 2nd Street and Pacific Coast Hwy are about 10 minutes from campus.",
  },
  {
    question: "What are the best bubble tea shops in Long Beach?",
    answer: "The top bubble tea shops in Long Beach are Boba Guys (2nd & PCH), Sunright Tea Studio (Ximeno Ave), Ding Tea (Clark Ave), and Tastea (Worsham Ave). For local independent options, Teatopia on Clark Ave and Cha For Tea on E. 7th Street are worth visiting.",
  },
  {
    question: "How much does boba cost in Long Beach?",
    answer: "Boba in Long Beach ranges from about $5 at Ding Tea and Tastea to $8 to $10 at Boba Guys. Sunright Tea Studio runs $7 to $9 for specialty drinks. Most shops let you customize sweetness and ice level, and adding toppings like tapioca or popping boba usually adds $0.75 to $1.",
  },
  {
    question: "Is Long Beach good for boba compared to LA?",
    answer: "Long Beach has a solid mid-tier boba scene anchored by Boba Guys and Sunright Tea Studio, both of which are as good as anything in central LA. For the deepest concentration of premium boba, Koreatown (45 min north) and the San Gabriel Valley (40 min northeast) are better overall destinations.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const longBeachShops = [
  {
    rank: 1,
    name: "Boba Guys",
    city: "Long Beach",
    address: "2nd & PCH Shopping Center",
    image: "/assets/products/boba_guys_drinks.png",
    rating: "4.5",
    price: "$$$",
    bestFor: "Premium sourced ingredients, Earl Grey, Horchata Milk Tea",
    mustOrder: "Earl Grey Milk Tea, Horchata Milk Tea",
    verdict: "The best boba shop in Long Beach and one of the best in all of Southern California. The 2nd & PCH location anchors the shopping center at 2nd Street and Pacific Coast Hwy with the same premium ingredient sourcing as every Boba Guys location. Straus Family Creamery milk, Assam black tea, and hand-shaken drinks made to order. The Earl Grey Milk Tea is essential. Expect to pay $8 to $10, and expect it to be worth it.",
    href: "/boba-guys-review-los-angeles/",
  },
  {
    rank: 2,
    name: "Sunright Tea Studio",
    city: "Long Beach",
    address: "1827 Ximeno Ave",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.6",
    price: "$$",
    bestFor: "Single-origin Taiwanese teas, Sun Moon Lake black tea",
    mustOrder: "Sun Moon Lake Milk Tea, Alishan Oolong Latte",
    verdict: "The best everyday boba in Long Beach. Sun Moon Lake black tea from Taiwan and Alishan high-mountain oolong are brewed fresh to order, never from powder. The Ximeno Ave location near East Long Beach is clean, consistent, and serious about tea quality. Better base teas than almost any chain operating in Long Beach.",
    href: "/sunright-tea-studio-review-los-angeles/",
  },
  {
    rank: 3,
    name: "Ding Tea",
    city: "Long Beach",
    address: "Clark Ave, Long Beach",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3",
    price: "$$",
    bestFor: "Precision-brewed Taiwanese tea, Red Tea with Tapioca",
    mustOrder: "Red Tea with Tapioca, Brown Sugar Milk Tea",
    verdict: "Ding Tea is a serious Taiwanese tea chain that uses precision brewing timers to ensure every batch is extracted correctly. The Red Tea with Tapioca is the essential order: a Taiwanese red tea with clarity and depth that most chain boba cannot replicate. The Long Beach location on Clark Ave holds up well compared to other LA-area shops. A good choice for tea-forward drinkers who want more than sweet milk.",
    href: "/ding-tea-review-los-angeles/",
  },
  {
    rank: 4,
    name: "Tastea",
    city: "Long Beach",
    address: "3860 Worsham Ave",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3",
    price: "$$",
    bestFor: "Rose Matcha Milk Tea, creative specialty drinks",
    mustOrder: "Rose Matcha Milk Tea, Strawberry Milk Tea",
    verdict: "Tastea is a Southern California-grown chain with a Long Beach location in the South Street Marketplace area. The Rose Matcha Milk Tea is one of the most creative specialty drinks at any Long Beach boba shop, and the Strawberry Milk Tea and Passion Fruit Green Tea are reliably good. Good value for the quality at $6 to $8 per drink.",
    href: "/tastea-review-los-angeles/",
  },
];

const moreLongBeachShops = [
  {
    name: "Gong Cha",
    city: "Long Beach",
    note: "Taiwanese-founded global chain at 6346 E. Pacific Coast Hwy. The world&apos;s most recognized boba brand delivers consistently. Brown Sugar Milk Tea and Oolong Milk Tea are the best orders. Full review available.",
    href: "/gong-cha-review-los-angeles/",
  },
  {
    name: "Cha For Tea",
    city: "Long Beach",
    note: "Located at 5720 E. 7th St. One of the longer-running boba shops in Long Beach. The Roasted Brown Sugar Boba Latte and Mango Green Tea are standout orders. A local favorite for years.",
    href: undefined,
  },
  {
    name: "Teatopia",
    city: "Long Beach",
    note: "An independent Long Beach boba concept on Clark Ave. Worth visiting for the local perspective. The menu focuses on classic milk teas and seasonal specials.",
    href: undefined,
  },
  {
    name: "It's Boba Time",
    city: "South Bay (Nearby)",
    note: "No Long Beach location, but It's Boba Time has South Bay spots in Artesia, Torrance, and San Pedro within 15 to 20 minutes. One of the best value boba chains in LA County.",
    href: "/its-boba-time-review-los-angeles/",
  },
  {
    name: "Happy Lemon",
    city: "Greater LA Area",
    note: "Known for introducing Rock Salt and Cheese foam to LA. The Alhambra and Arcadia locations are the closest options if you want the full Happy Lemon experience.",
    href: "/happy-lemon-review-los-angeles/",
  },
  {
    name: "Kung Fu Tea",
    city: "Harbor City (Nearby)",
    note: "The Harbor City location is the closest Kung Fu Tea to Long Beach, about 15 minutes north on the 110. The Kung Fu Milk Tea and Brown Sugar Boba are the reliable orders.",
    href: "/kung-fu-tea-review-los-angeles/",
  },
];

export default function BestBobaLongBeachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Neighborhood Guide
              </span>
              <h1 className="text-4xl font-bold text-[#1A202C] mb-4">
                Best Boba in Long Beach: Top Bubble Tea Shops, Ranked
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Long Beach has a strong mid-tier boba scene with a standout top end. Boba Guys at 2nd and PCH and Sunright Tea Studio on Ximeno Ave are as good as anything in the greater LA area. Every shop below has been personally visited by Justin Sather.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">4 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Long Beach, CA</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/boba_koreatown_guide.png"
                alt="Best boba in Long Beach California"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F7FAFC] py-10 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Long Beach Boba Scene</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Long Beach is LA County&apos;s second largest city, and its boba scene reflects that scale: a solid mix of premium chains and local independents spread across a city of 450,000 people. The 2nd Street and Pacific Coast Hwy corridor in Belmont Shore is the main boba destination, anchored by Boba Guys. East Long Beach, near CSULB, has Sunright Tea Studio and Ding Tea within a short radius.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Long Beach boba does not reach the density or quality ceiling of the San Gabriel Valley, which is about 40 minutes northeast. But within the city, Boba Guys and Sunright are genuinely excellent, and the local shop Cha For Tea has been a community staple for years.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            All ratings below reflect multiple personal visits. No sponsorships, no free products. Every drink paid for out of pocket.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba Shops in Long Beach, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Ranked by overall quality, tea sourcing, and consistency. Every shop personally visited.</p>

          <div className="space-y-8">
            {longBeachShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba Long Beach`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#2B6CB0] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {shop.rank}
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-[#1A202C]">{shop.name}</h3>
                        <p className="text-[#718096] text-sm">{shop.city} &middot; {shop.address}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 justify-end mb-1">
                          <StarRating rating={shop.rating} />
                          <span className="text-sm font-semibold text-[#2B6CB0] ml-1">{shop.rating}/5</span>
                        </div>
                        <span className="text-sm text-[#718096]">{shop.price}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                      <div>
                        <span className="font-semibold text-[#2D3748]">Best for: </span>
                        <span className="text-[#4A5568]">{shop.bestFor}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#2D3748]">Must order: </span>
                        <span className="text-[#4A5568]">{shop.mustOrder}</span>
                      </div>
                    </div>
                    <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{shop.verdict}</p>
                    {shop.href && (
                      <Link
                        href={shop.href}
                        className="inline-flex items-center gap-1 text-[#2B6CB0] text-sm font-semibold hover:underline"
                      >
                        Full Review →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Worth Visiting */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Boba Worth Knowing in and Near Long Beach</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Solid shops in Long Beach plus the best nearby South Bay options.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moreLongBeachShops.map((shop) => (
              <div key={shop.name} className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-bold text-[#1A202C] text-sm mb-1">{shop.name}</h3>
                <p className="text-[#718096] text-xs mb-2">{shop.city}</p>
                <p className="text-[#4A5568] text-xs leading-relaxed">{shop.note}</p>
                {shop.href && (
                  <Link href={shop.href} className="text-[#2B6CB0] text-xs font-semibold mt-2 inline-block hover:underline">
                    Full Review →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Breakdown */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Where to Go in Long Beach</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Belmont Shore and 2nd Street</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The 2nd Street and Pacific Coast Hwy area is the best boba destination in Long Beach. Boba Guys at the 2nd and PCH shopping center is the top shop in the city, with premium sourced ingredients and a drink quality that rivals any LA boba destination. The corridor is walkable and has plenty of dining options alongside the boba.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">East Long Beach and CSULB Area</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The stretch of East Long Beach near Cal State Long Beach has the best concentration of affordable boba in the city. Sunright Tea Studio on Ximeno Ave is the standout, with single-origin Taiwanese teas brewed fresh. Ding Tea on Clark Ave is nearby and offers a more traditional Taiwanese boba experience with precision-brewed red teas. Both are excellent for the student budget and the tea-focused drinker.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">South Street and the Douglas Park Area</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The Worsham Ave area near the Douglas Park commercial corridor has Tastea, which is a solid choice for creative specialty drinks and value pricing. The Rose Matcha Milk Tea is a standout for this part of Long Beach. Cha For Tea on E. 7th Street has been a local anchor for years and is worth visiting for context on the Long Beach boba scene.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">South Bay: The Best Nearby Option</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                If you are willing to drive 15 to 20 minutes north, the South Bay has It&apos;s Boba Time locations in Torrance, Artesia, and San Pedro that expand the value boba options significantly. Ding Tea also has a Hawthorne location for a second visit option. For the absolute best boba within 45 minutes of Long Beach, the San Gabriel Valley is the destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Long Beach Boba FAQ</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-[#1A202C] mb-2">{item.question}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides CTA */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">More LA Boba Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/best-boba-los-angeles/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Los Angeles</h3>
              <p className="text-[#4A5568] text-sm">The definitive citywide ranking of the best boba shops across all of LA County.</p>
            </Link>
            <Link href="/best-boba-san-gabriel-valley/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in the SGV</h3>
              <p className="text-[#4A5568] text-sm">The best boba region in Southern California, 40 minutes from Long Beach. Complete guide with 15+ shops.</p>
            </Link>
            <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Koreatown</h3>
              <p className="text-[#4A5568] text-sm">30+ shops covered in the most comprehensive Koreatown boba guide in Los Angeles.</p>
            </Link>
            <Link href="/best-boba-torrance/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Torrance</h3>
              <p className="text-[#4A5568] text-sm">The South Bay guide for boba near Del Amo Fashion Center and Redondo Beach. Mochinut and 85 Degrees are the local anchors, 20 minutes west of Long Beach.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
