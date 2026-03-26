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
  title: "Best Boba in Westwood: Top Bubble Tea Near UCLA, Ranked | Justin Sather",
  description: "The complete guide to boba and bubble tea in Westwood Village near UCLA. Milksha (first US location), Sharetea, Junbi Matcha, Just Boba Tea House, and more. Every shop personally visited by Justin Sather. Updated 2026.",
};

const faqItems = [
  {
    question: "What is the best boba near UCLA in Westwood?",
    answer: "Milksha Westwood at 1009 Broxton Ave is the best boba near UCLA for ingredient quality. It is Taiwan's largest fresh milk tea brand, opened its first US store in Westwood Village in fall 2025, and uses a no-powder policy that produces noticeably better drinks than other Westwood options. For the widest menu and most familiar format, Sharetea at 1036 Westwood Blvd is the best all-around choice. For matcha, Junbi Matcha and Tea at 10967 Weyburn Ave is the standout.",
  },
  {
    question: "Where can I get boba in Westwood Village?",
    answer: "Westwood Village has five dedicated boba and tea shops within walking distance of UCLA. Milksha is at 1009 Broxton Ave (first US location, no-powder fresh milk), Sharetea is at 1036 Westwood Blvd, Just Boba Tea House is at 952 Gayley Ave, Junbi Matcha and Tea is at 10967 Weyburn Ave, and Le Phant Milk Tea is at 10911 Lindbrook Dr. All five are within the Westwood Village commercial area.",
  },
  {
    question: "What are the best boba shops near UCLA?",
    answer: "The best boba shops near UCLA are Milksha Westwood (no-powder fresh milk, Taiwan-sourced ingredients, Campus Crush exclusive), Sharetea Westwood (full menu, classic milk teas), Junbi Matcha and Tea (matcha specialist with 15+ flavors), Just Boba Tea House (local Westwood favorite with late hours), and Le Phant Milk Tea. For premium boba beyond Westwood, Koreatown is about 20 minutes east and has the highest concentration of top-tier shops in LA.",
  },
  {
    question: "Is there boba open late near UCLA?",
    answer: "Yes. Just Boba Tea House at 952 Gayley Ave is open until 11 pm on weeknights and midnight on Friday and Saturday, making it the best late-night boba option near UCLA. Sharetea Westwood also has extended evening hours on most days.",
  },
  {
    question: "How much does boba cost in Westwood?",
    answer: "Boba in Westwood ranges from about $6 at Just Boba Tea House to $8 at Sharetea and Junbi for specialty drinks. Westwood pricing is slightly higher than the San Gabriel Valley due to Westside rent, but comparable to other West LA neighborhoods. Adding toppings typically costs $0.75 to $1 extra.",
  },
  {
    question: "Is Westwood good for boba compared to Koreatown?",
    answer: "Westwood has a solid neighborhood boba scene with four shops close to campus, which is better than most Westside neighborhoods. For sheer depth and quality, Koreatown about 20 minutes east has 30-plus shops including some of the best boba in all of Los Angeles. For the convenience of staying near UCLA, Westwood delivers well.",
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

const westwoodShops = [
  {
    rank: 1,
    name: "Milksha Westwood",
    city: "Westwood",
    address: "1009 Broxton Ave",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.6",
    price: "$$",
    bestFor: "Fresh Taro Milk, no-powder policy, Campus Crush exclusive, Taiwan-sourced ingredients",
    mustOrder: "Fresh Taro Milk, Earl Grey Latte with Honey Pearl, Campus Crush (Westwood-exclusive)",
    verdict: "The best boba near UCLA and the best ingredient quality on the Westside. Milksha is a Taiwanese chain with over 300 stores worldwide that opened its first US location at 1009 Broxton Ave in fall 2025. The brand&apos;s no-powder policy means every milk drink is made with real fresh dairy, not non-dairy creamer, which produces a flavor difference you can taste immediately. The Fresh Taro Milk uses taro from Dajia, Taiwan, steamed and hand-mashed in-store. The Campus Crush is a Westwood-exclusive limited drink you cannot get at any other Milksha in the world. Prices run $7 to $9.50.",
    href: "/milksha-westwood-review/",
  },
  {
    rank: 2,
    name: "Sharetea Westwood",
    city: "Westwood",
    address: "1036 Westwood Blvd",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    bestFor: "Classic milk teas, fruit teas, wide menu, UCLA convenience",
    mustOrder: "Three Mates Milk Tea, Mango Green Tea",
    verdict: "The most established boba chain in Westwood. Sharetea is a Taiwanese-founded chain with a proven menu of classic milk teas, handcrafted drinks, and fruit teas. The Westwood Blvd location serves the UCLA community with the full Sharetea menu and consistent quality. Three Mates is the signature drink, a blend of three teas with a clean, layered flavor profile. Mango Green Tea is the best fruit tea on the menu. Prices run $7 to $9. More affordable than Milksha and a better option when you want a wide menu or value pricing.",
    href: "/sharetea-westwood-review/",
  },
  {
    rank: 3,
    name: "Junbi Matcha & Tea",
    city: "Westwood",
    address: "10967 Weyburn Ave",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.5",
    price: "$$",
    bestFor: "Japanese-sourced matcha, 15+ matcha flavors, specialty lattes",
    mustOrder: "Matcha Latte, Yuzu Dragonfruit Matcha",
    verdict: "The best specialty tea concept in Westwood and one of the best matcha shops in LA. Junbi sources their matcha directly from farms across Japan and offers 15-plus flavors, from classic creamy matcha to yuzu dragonfruit and rosewater. If you want more than standard bubble tea, Junbi is the move. The Weyburn Ave location stays busy with UCLA students and Westwood locals who have discovered how much better sourced matcha tastes. Open daily from 11:30 am to 9 pm.",
    href: undefined,
  },
  {
    rank: 4,
    name: "Just Boba Tea House",
    city: "Westwood",
    address: "952 Gayley Ave",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$",
    bestFor: "Late-night boba, value pricing, fresh pearls, food menu",
    mustOrder: "Classic Boba Milk Tea, Sea Salt Foam Peach Tea",
    verdict: "The best late-night boba option near UCLA, open until 11 pm on weeknights and midnight on weekends. Just Boba Tea House opened in 2020 and has built a loyal UCLA following on the strength of fresh daily pearls, real milk (not powder), and a 59-drink menu that also includes food like popcorn chicken and taiyaki. The Classic Boba Milk Tea at $6.21 is the best value boba drink in Westwood Village, and the Sea Salt Foam Peach Tea is the most-ordered specialty. Locally owned and operated.",
    href: undefined,
  },
  {
    rank: 5,
    name: "Le Phant Milk Tea",
    city: "Westwood",
    address: "10911 Lindbrook Dr",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1",
    price: "$$",
    bestFor: "Milk teas, matcha, classic boba in Westwood Village",
    mustOrder: "Milk Tea, Brown Sugar Boba",
    verdict: "Le Phant rounds out the Westwood boba scene as a solid neighborhood option on Lindbrook Dr. The menu covers classic milk teas and matcha drinks with boba. Not as specialized as Junbi or as wide-ranging as Sharetea, but a reliable stop in the Westwood Village walkable area. Good for the standard milk tea order when the other shops have a line.",
    href: undefined,
  },
];

const moreWestwoodShops = [
  {
    name: "Gong Cha",
    city: "West LA / Westwood Area",
    note: "One of the world&apos;s largest boba chains with LA locations accessible from Westwood. The High Mountain Oolong base and Brown Sugar Milk Tea with Pearl are the best orders. Full review available.",
    href: "/gong-cha-review-los-angeles/",
  },
  {
    name: "Sharetea (Full Menu Review)",
    city: "Westwood Blvd",
    note: "Read the full Sharetea Westwood review for the complete menu breakdown, drink-by-drink analysis, and ordering tips. Includes the full menu with prices and Justin&apos;s top picks.",
    href: "/sharetea-westwood-review/",
  },
  {
    name: "Kung Fu Tea",
    city: "Greater Los Angeles",
    note: "Kung Fu Tea has LA area locations for when you want the Brown Sugar Boba or Kung Fu Milk Tea. Not in Westwood proper, but accessible from the Westside. Full review available.",
    href: "/kung-fu-tea-review-los-angeles/",
  },
  {
    name: "Boba Guys",
    city: "West LA (Rideback Ranch)",
    note: "Boba Guys at Rideback Ranch in Culver City is the closest premium boba shop to Westwood and one of the best in LA. Straus Family Creamery milk, hand-shaken drinks, and the Earl Grey Milk Tea are worth the 10-minute drive. Full review available.",
    href: "/boba-guys-review-los-angeles/",
  },
  {
    name: "It&apos;s Boba Time",
    city: "West LA (Multiple Locations)",
    note: "It&apos;s Boba Time has West LA area locations for the best boba value in Southern California. The original menu and $5 price point make it the go-to value chain. Full review available.",
    href: "/its-boba-time-review-los-angeles/",
  },
  {
    name: "Tiger Sugar",
    city: "Koreatown (20 min east)",
    note: "Tiger Sugar in Koreatown is worth the drive if you want the best brown sugar boba in LA. The theatrical torching, fresh pearls every 4 hours, and 5/5 rating make it the best single boba drink in the city. Full review available.",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
  },
];

export default function BestBobaWestwoodPage() {
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
                Best Boba in Westwood: Top Bubble Tea Near UCLA, Ranked
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Westwood Village has five dedicated boba shops within walking distance of UCLA. Milksha leads on ingredient quality as Taiwan&apos;s no-powder brand in its first US location, Sharetea covers the widest menu, and Just Boba Tea House stays open late when you need it. Every shop below has been personally visited by Justin Sather.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">5 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Westwood, Los Angeles</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/boba_koreatown_guide.png"
                alt="Best boba in Westwood near UCLA Los Angeles"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Westwood Boba Scene</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Westwood Village is a compact neighborhood with a lot of boba demand. UCLA draws 45,000 students who want quality boba within walking distance, and the village delivers better than most Westside neighborhoods. Four dedicated boba shops operate within a few blocks of campus, covering classic Taiwanese chain boba, a serious matcha specialist, a late-night local shop, and a neighborhood milk tea option.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            The ceiling for Westwood boba is lower than Koreatown or the San Gabriel Valley. You will not find the density of premium chains that exists 20 minutes east, and the pricing reflects the Westside rent. But for staying near campus, Westwood punches above its weight, and Junbi Matcha in particular is a destination-worthy concept in its own right.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            All ratings below reflect personal visits. No sponsorships, no free products. Every drink paid for out of pocket.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba Shops in Westwood, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Ranked by overall quality, drink consistency, and value for the area. Every shop personally visited.</p>

          <div className="space-y-8">
            {westwoodShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba Westwood UCLA`}
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Boba Worth Knowing Near Westwood</h2>
          <p className="text-[#4A5568] mb-6 text-sm">The full Sharetea review, nearby West LA chains, and the Koreatown premium destination 20 minutes east.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moreWestwoodShops.map((shop) => (
              <div key={shop.name} className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-bold text-[#1A202C] text-sm mb-1" dangerouslySetInnerHTML={{ __html: shop.name }} />
                <p className="text-[#718096] text-xs mb-2">{shop.city}</p>
                <p className="text-[#4A5568] text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: shop.note }} />
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Where to Go Near UCLA</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Westwood Village (On-Campus Walk)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The Westwood Blvd and Gayley Ave corridor is the core boba zone within walking distance of UCLA. Sharetea at 1036 Westwood Blvd is the reliable anchor for classic boba, and Just Boba Tea House at 952 Gayley Ave is the late-night option. Both are within a 5-minute walk from the main campus entrance. Junbi on Weyburn Ave and Le Phant on Lindbrook Dr fill out the block with specialty matcha and neighborhood milk tea.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Weyburn and Lindbrook (Westwood Village Core)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Weyburn Ave and Lindbrook Dr run through the heart of Westwood Village. Junbi Matcha and Tea at 10967 Weyburn Ave is the best specialty drink destination in the neighborhood, with Japanese-sourced matcha in 15-plus flavors. Le Phant Milk Tea at 10911 Lindbrook Dr is the quiet neighborhood option when other spots have a line.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">West LA and Century City (10 to 15 Minutes)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                A short drive from Westwood opens up the West LA boba options. Boba Guys at Rideback Ranch in Culver City is one of the best boba shops in all of LA, about 10 minutes from campus, and worth the trip for premium sourced ingredients. Kung Fu Tea and Gong Cha have West LA area locations for the chain boba options.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Koreatown: The Premium Destination (20 Minutes East)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                For the best boba in LA, Koreatown is 20 minutes east of Westwood on the 10 freeway. Tiger Sugar for brown sugar boba, Xing Fu Tang for fresh-cooked pearls, Gong Cha for Oolong Milk Tea, and 30-plus other shops make Koreatown the top boba destination in Southern California. The Westwood shops are excellent for staying on the Westside, but Koreatown is the answer when quality is the priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Westwood Boba FAQ</h2>
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
            <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Koreatown</h3>
              <p className="text-[#4A5568] text-sm">30-plus shops covered in the most comprehensive Koreatown boba guide in Los Angeles. 20 minutes from Westwood.</p>
            </Link>
            <Link href="/sharetea-westwood-review/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Sharetea Westwood: Full Review</h3>
              <p className="text-[#4A5568] text-sm">The complete menu breakdown, best drinks, and ordering tips for Sharetea at 1036 Westwood Blvd.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
