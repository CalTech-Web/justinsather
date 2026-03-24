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
  title: "Best Boba in Pasadena: Top Bubble Tea Shops in Pasadena and the East SGV | Justin Sather",
  description: "The complete guide to boba and bubble tea in Pasadena, Arcadia, San Gabriel, and Temple City. Every shop personally visited by Justin Sather. Updated 2026.",
};

const faqItems = [
  {
    question: "What is the best boba in Pasadena?",
    answer: "Sunright Tea Studio on S. Lake Ave is the best boba shop in Pasadena proper. It uses single-origin Sun Moon Lake black tea and Alishan oolong brewed fresh to order. For brown sugar boba near Pasadena, Xing Fu Tang in Temple City is the best in the area.",
  },
  {
    question: "Where is boba in Pasadena?",
    answer: "Sunright Tea Studio (S. Lake Ave, Pasadena) is the top option in the city. Nearby in Arcadia, you will find The Alley, Happy Lemon, and 85 Degrees Bakery. Chicha San Chen in San Gabriel is about 10 minutes from Old Town Pasadena and worth the drive.",
  },
  {
    question: "Is Arcadia or Pasadena better for boba?",
    answer: "Arcadia has more shops per block because of its dense SGV commercial corridors, but Pasadena has Sunright Tea Studio, which is the highest-quality individual shop in the area. For variety and density, Arcadia wins. For a single best drink, Pasadena wins.",
  },
  {
    question: "What is the best bubble tea near Pasadena?",
    answer: "Chicha San Chen in San Gabriel is the best overall boba near Pasadena. It is a World Tea Championship-winning chain from Taiwan that uses single-origin teas brewed to order. The 10-minute drive from Old Town Pasadena is worth it.",
  },
  {
    question: "What boba chains are in Pasadena?",
    answer: "Pasadena has Sunright Tea Studio (S. Lake Ave) as the premium option. The surrounding area, within 10 minutes, includes The Alley, Happy Lemon, and 85 Degrees Bakery in Arcadia, plus Chicha San Chen and Xing Fu Tang in San Gabriel and Temple City.",
  },
  {
    question: "Is boba in Pasadena expensive?",
    answer: "Prices in Pasadena range from $5 at TP Tea and Yi Fang to $8 to $10 at Chicha San Chen and Sunright Tea Studio. The premium shops are worth the price, but the value tier in Arcadia and Temple City is exceptional for the quality.",
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

const pasadenaShops = [
  {
    rank: 1,
    name: "Sunright Tea Studio",
    city: "Pasadena",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.6",
    price: "$$",
    address: "S. Lake Ave, Pasadena",
    bestFor: "Single-origin oolongs, precision-brewed milk teas",
    mustOrder: "Sun Moon Lake Milk Tea, Alishan Oolong Latte",
    verdict: "The best boba shop in Pasadena proper. Sun Moon Lake black tea from Taiwan and Alishan high-mountain oolong are brewed fresh to order, never from powder. The Pasadena location on S. Lake Ave is one of the cleaner shops in all of LA, with consistent quality across every visit.",
    href: "/sunright-tea-studio-review-los-angeles/",
  },
  {
    rank: 2,
    name: "Chicha San Chen",
    city: "San Gabriel",
    image: "/assets/products/chicha_san_chen_drink.png",
    rating: "5",
    price: "$$$",
    address: "San Gabriel (10 min from Old Town Pasadena)",
    bestFor: "Award-winning single-origin teas, elevated boba experience",
    mustOrder: "Osmanthus Oolong Milk Tea, Four Seasons Tie Guan Yin",
    verdict: "The best boba within 15 minutes of Pasadena, and one of the best in all of Los Angeles. Three-time World Tea Championship winner from Taiwan. The tea is brewed to order from single-origin leaves, never powder. The 10-minute drive from Old Town Pasadena is worth making every time.",
    href: "/chicha-san-chen-san-gabriel-review/",
  },
  {
    rank: 3,
    name: "Xing Fu Tang",
    city: "Temple City",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.7",
    price: "$$",
    address: "Temple City (15 min from Pasadena)",
    bestFor: "Brown sugar boba, fresh wok-cooked pearls",
    mustOrder: "Tiger Milk Tea",
    verdict: "The best brown sugar boba near Pasadena. Pearls are cooked in a wok with Okinawa black sugar every two hours. The Tiger Milk Tea is one of the two best brown sugar drinks in all of LA, standing alongside Tiger Sugar Koreatown. The Temple City location is never as crowded as the Alhambra outpost.",
    href: "/xing-fu-tang-review-los-angeles/",
  },
  {
    rank: 4,
    name: "The Alley",
    city: "Arcadia",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3",
    price: "$$",
    address: "Arcadia (10 min from Pasadena)",
    bestFor: "Crystal Deerioca tapioca, roasted oolongs",
    mustOrder: "Roasted Oolong Milk Tea with Deerioca, Brown Sugar Deerioca Milk",
    verdict: "The Arcadia location is one of the best-run Alley shops in LA. Deerioca crystal tapioca is a genuinely different experience from standard pearls, and the roasted oolong base is one of the cleaner teas at any chain this size. A good choice whenever Sunright or Chicha San Chen is too far.",
    href: "/the-alley-boba-review-los-angeles/",
  },
  {
    rank: 5,
    name: "85 Degrees Bakery",
    city: "Arcadia",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$",
    address: "Baldwin Ave, Arcadia",
    bestFor: "Sea salt coffee, Taiwanese bakery, fresh-baked bread",
    mustOrder: "Sea Salt Coffee, Tiger Bread, Egg Tart",
    verdict: "Not a boba shop, but the sea salt coffee is one of the most distinctive drinks near Pasadena, and pairing it with fresh-baked bread makes it the best sit-down experience in Arcadia. The Arcadia location on Baldwin Ave is the best 85 Degrees in all of LA County.",
    href: "/85-degrees-bakery-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Happy Lemon",
    city: "Arcadia",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Arcadia",
    bestFor: "Rock salt and cheese foam, oolong tea bases",
    mustOrder: "Rock Salt and Cheese Oolong, QQ Cocoa",
    verdict: "Happy Lemon introduced Rock Salt and Cheese foam to Los Angeles and the Arcadia location holds up well. Essential for anyone who has not tried the cheese foam format. Good everyday option when you want something reliable near the Arcadia shopping corridor.",
    href: "/happy-lemon-review-los-angeles/",
  },
  {
    rank: 7,
    name: "Half and Half Tea Express",
    city: "Temple City",
    image: "/assets/products/half_and_half_tea_express_drink.png",
    rating: "4.3",
    price: "$$",
    address: "Temple City",
    bestFor: "Cold-brew layered milk tea, sea salt cheese foam",
    mustOrder: "Top 1 Milk Tea, Sea Salt Cheese Tea",
    verdict: "One of the most underrated boba shops near Pasadena. The cold-brew layered milk tea program produces a clarity and smoothness that hot-brew chains cannot match. The Temple City location on Las Tunas Dr is easy to get to and consistently fresh.",
    href: "/half-and-half-tea-express-review-los-angeles/",
  },
  {
    rank: 8,
    name: "Yi Fang Taiwan Fruit Tea",
    city: "San Gabriel Valley",
    image: "/assets/products/yifang_drink.png",
    rating: "4.5",
    price: "$",
    address: "Multiple SGV locations",
    bestFor: "Fresh fruit teas, value Taiwanese milk teas",
    mustOrder: "Pineapple Green Tea, Taiwan Lemon Green Tea",
    verdict: "The best fresh fruit tea program near Pasadena. Real pineapple and lemon steeped with green tea, not syrup. At under $7 per drink, the quality gap between Yi Fang and every other fruit tea chain in the area is significant. The SGV locations are worth prioritizing over the Fairfax shop if you are in the east side.",
    href: "/yi-fang-taiwan-fruit-tea-review-los-angeles/",
  },
];

const morePasadenaShops = [
  { name: "TP Tea", city: "Diamond Bar / Hacienda Heights", note: "Backed by Ten Ren Tea Company (1953). Loose-leaf Taiwanese teas at $5 to $7, the best value boba per dollar in the east SGV. Read the full review.", href: "/tp-tea-review-los-angeles/" },
  { name: "Meet Fresh", city: "Alhambra / Monterey Park", note: "The most authentic Taiwanese dessert shop near Pasadena. Taro ball combinations and grass jelly made fresh daily. Read the full review.", href: "/meet-fresh-review-los-angeles/" },
  { name: "Moge Tee", city: "Multiple SGV locations", note: "The only boba chain in LA built around Yunnan Pu-erh tea. A completely different flavor profile from any other shop near Pasadena." },
  { name: "Kung Fu Tea", city: "Multiple SGV locations", note: "Reliable, affordable chain-level milk teas. Good Taro Slush. Best for a quick fix without overthinking it." },
  { name: "Tastea", city: "Alhambra", note: "The Rose Matcha Milk Tea is one of the more creative specialty drinks in the SGV. A solid choice in Alhambra when the top shops are too far." },
  { name: "Gong Cha", city: "Multiple SGV locations", note: "Korean-founded chain with a consistently good milk tea program. Reliable across all Pasadena-area locations." },
];

export default function BestBobaPasadenaPage() {
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
                Best Boba in Pasadena: Top Shops in Pasadena, Arcadia, and the East SGV
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Pasadena sits at the edge of the San Gabriel Valley boba corridor. Sunright Tea Studio is inside the city. Within 15 minutes, you reach Chicha San Chen, Xing Fu Tang, The Alley, and 85 Degrees. Every shop below has been personally visited by Justin Sather.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">8 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Pasadena, Arcadia, Temple City</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/boba_koreatown_guide.png"
                alt="Best boba in Pasadena and the east San Gabriel Valley"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Why Pasadena Has Some of the Best Boba in LA</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Pasadena is the western gateway to the San Gabriel Valley, which means it benefits from the same density of authentic Taiwanese and Chinese-owned boba shops that makes the SGV the best boba region in all of Southern California. Sunright Tea Studio has a location directly in the city on S. Lake Ave, and within a 10 to 15-minute drive you can reach Chicha San Chen, The Alley, 85 Degrees, Xing Fu Tang, and more.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            The quality in this corridor, from Pasadena through Arcadia and into San Gabriel and Temple City, is well above what you will find in most other LA neighborhoods. Most shops here use loose-leaf Taiwanese teas rather than powder, source real fruit for their fruit teas, and take preparation more seriously than the chain shops in West LA or the Valley.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            All ratings below are based on multiple personal visits. No sponsorships, no free products. If a shop is mediocre, it shows up in the rank.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba Shops Near Pasadena, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, tea sourcing, and consistency.</p>

          <div className="space-y-8">
            {pasadenaShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba near Pasadena`}
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
                        <p className="text-[#718096] text-sm">{shop.city}</p>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Boba Worth Visiting Near Pasadena</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Solid shops that did not make the top 8 but are worth knowing about.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {morePasadenaShops.map((shop) => (
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Pasadena, Arcadia, and San Gabriel</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Pasadena</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Sunright Tea Studio on S. Lake Ave is the anchor of Pasadena boba. The shop uses single-origin teas from Taiwan and never shortcuts with powder. Old Town Pasadena has some chain options but none match the quality of Sunright for serious tea drinkers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Arcadia</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Arcadia has the highest density of good boba near Pasadena. The Baldwin Ave and Duarte Rd corridors have The Alley, Happy Lemon, 85 Degrees, and several chains. The Alley Arcadia location is one of the best-run shops in the brand. 85 Degrees on Baldwin Ave is the best overall sit-down experience in the area.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">San Gabriel and Temple City</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The 10 to 15-minute drive from Pasadena into San Gabriel and Temple City unlocks Chicha San Chen (the best boba near Pasadena overall), Xing Fu Tang (the best brown sugar boba in the east SGV), and Half and Half Tea Express (the best cold-brew milk tea program in the area). If you are serious about boba quality, these shops justify the extra driving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Pasadena Boba FAQ</h2>
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
            <Link href="/best-boba-san-gabriel-valley/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in the SGV</h3>
              <p className="text-[#4A5568] text-sm">Complete San Gabriel Valley guide with 15+ ranked shops across Rowland Heights, Monterey Park, and Alhambra.</p>
            </Link>
            <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Koreatown</h3>
              <p className="text-[#4A5568] text-sm">30+ shops covered in the most comprehensive Koreatown boba guide in Los Angeles.</p>
            </Link>
            <Link href="/best-boba-los-angeles/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Los Angeles</h3>
              <p className="text-[#4A5568] text-sm">The definitive citywide ranking of the 15+ best boba shops across all of LA County.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
