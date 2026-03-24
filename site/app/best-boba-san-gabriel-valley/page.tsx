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
  title: "Best Boba in the San Gabriel Valley: 15+ Top SGV Shops | Justin Sather",
  description: "The most complete guide to boba and bubble tea in the San Gabriel Valley. Rowland Heights, Monterey Park, Alhambra, Temple City, Pasadena, and beyond. All shops personally visited.",
};

const faqItems = [
  {
    question: "What is the best boba in the San Gabriel Valley?",
    answer: "Chicha San Chen in Monterey Park is the highest-rated boba shop in the SGV. For brown sugar boba specifically, Xing Fu Tang in Temple City and Alhambra is the top choice. For fresh fruit teas, Yi Fang Taiwan Fruit Tea is the best in the region.",
  },
  {
    question: "Which SGV city has the best boba?",
    answer: "Rowland Heights has the highest concentration of excellent boba shops in the SGV, with Half and Half Tea Express, Sunright Tea Studio, The Alley, Meet Fresh, and TP Tea all located there. Monterey Park is the best single city for premium and authentic Taiwanese-style boba.",
  },
  {
    question: "How is SGV boba different from boba in other LA neighborhoods?",
    answer: "The San Gabriel Valley has the highest concentration of authentic Taiwanese and Chinese-owned boba shops in Southern California. Most SGV shops use loose-leaf teas brewed fresh, not powder concentrates. The fruit tea quality in the SGV is unmatched elsewhere in LA because many shops source real fresh fruit rather than syrups.",
  },
  {
    question: "What is the best boba in Rowland Heights?",
    answer: "Half and Half Tea Express is the best boba in Rowland Heights for value and tea quality. Sunright Tea Studio is the best for single-origin specialty teas. The Alley is the best for unique crystal tapioca (Deerioca). All three are within a short drive of each other on Colima Road.",
  },
  {
    question: "What is the best boba in Monterey Park?",
    answer: "Chicha San Chen is the best boba in Monterey Park, serving award-winning single-origin teas in a refined setting. For everyday milk teas, Meet Fresh and Happy Lemon are both excellent nearby options.",
  },
  {
    question: "Is the San Gabriel Valley worth the drive for boba?",
    answer: "Yes. The SGV has more authentic Taiwanese and Chinese-style boba per square mile than anywhere else in California. The shops in Rowland Heights and Monterey Park are using tea quality and preparation methods that are simply not available in other LA neighborhoods.",
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

const sgvShops = [
  {
    rank: 1,
    name: "Chicha San Chen",
    city: "Monterey Park",
    image: "/assets/products/chicha_san_chen_drink.png",
    rating: "5",
    price: "$$$",
    address: "Monterey Park",
    bestFor: "Single-origin tea, Taiwanese high-tea experience",
    mustOrder: "Osmanthus Oolong Milk Tea, Four Seasons Tie Guan Yin",
    verdict: "The best boba experience in all of LA County. Three-time World Tea Championship winner from Taiwan. Tea is brewed to order from single-origin leaves, never powder. Worth every penny and every minute of the drive.",
    href: "/chicha-san-chen-san-gabriel-review/",
  },
  {
    rank: 2,
    name: "Xing Fu Tang",
    city: "Temple City / Alhambra",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.7",
    price: "$$",
    address: "Temple City, Alhambra",
    bestFor: "Brown sugar boba, fresh-cooked pearls",
    mustOrder: "Tiger Milk Tea",
    verdict: "The best brown sugar boba in the SGV. Pearls are cooked to order in a wok with Okinawa black sugar every two hours. The Tiger Milk Tea stands with Tiger Sugar Koreatown as one of the two best brown sugar drinks in all of LA.",
    href: "/xing-fu-tang-review-los-angeles/",
  },
  {
    rank: 3,
    name: "Sunright Tea Studio",
    city: "Pasadena / Rowland Heights",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.6",
    price: "$$",
    address: "Pasadena, Rowland Heights",
    bestFor: "Single-origin milk teas, specialty oolongs",
    mustOrder: "Sun Moon Lake Milk Tea, Alishan Oolong Latte",
    verdict: "The most technically precise boba shop in the SGV. Sun Moon Lake black tea and Alishan high-mountain oolong brewed fresh to order. Never powdered, never rushed. The Pasadena location is the better of the two.",
    href: "/sunright-tea-studio-review-los-angeles/",
  },
  {
    rank: 4,
    name: "Yi Fang Taiwan Fruit Tea",
    city: "San Gabriel Valley",
    image: "/assets/products/yifang_drink.png",
    rating: "4.5",
    price: "$",
    address: "Multiple SGV locations",
    bestFor: "Fresh fruit teas, Taiwanese milk teas",
    mustOrder: "Pineapple Green Tea, Taiwan Lemon Green Tea",
    verdict: "The best fresh fruit tea program in the SGV. Real pineapple, lemon, and seasonal fruit steeped with green tea, not syrup. The quality gap between Yi Fang and every other fruit tea chain in LA is significant.",
    href: "/yi-fang-taiwan-fruit-tea-review-los-angeles/",
  },
  {
    rank: 5,
    name: "TP Tea",
    city: "Diamond Bar / Hacienda Heights",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$",
    address: "Diamond Bar, Hacienda Heights",
    bestFor: "Value, loose-leaf Taiwanese teas",
    mustOrder: "Green Milk Tea, Pearl Milk Tea",
    verdict: "Backed by Ten Ren Tea Company (founded 1953), TP Tea uses loose-leaf Taiwanese teas that outperform every other chain at this price point. At $5 to $7 per drink, it is the best value boba in the entire SGV.",
    href: "/tp-tea-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Meet Fresh",
    city: "Rowland Heights / Alhambra / Monterey Park",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$",
    address: "Rowland Heights, Alhambra, Monterey Park",
    bestFor: "Taiwanese desserts, taro ball combinations",
    mustOrder: "Taro Ball Combination (warm), Grass Jelly with Sweet Potato",
    verdict: "Not strictly a boba shop, the most authentic Taiwanese dessert shop in LA. Taro balls, grass jelly, Q Tofu, and sweet soups made fresh daily. If you are in the SGV and skip Meet Fresh, you made a mistake.",
    href: "/meet-fresh-review-los-angeles/",
  },
  {
    rank: 7,
    name: "Moge Tee",
    city: "San Gabriel Valley (Multiple)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$$",
    address: "Multiple SGV locations",
    bestFor: "Yunnan Pu-erh teas, cheese foam series",
    mustOrder: "Dirty Pu-erh, Cheese Pu-erh Milk Tea",
    verdict: "The only boba chain in LA built around Yunnan Pu-erh tea. The earthy, fermented tea base is a completely different flavor profile from anything else in the SGV. The Dirty Pu-erh with cheese foam is one of the most distinctive drinks in all of LA.",
    href: "/moge-tee-review-los-angeles/",
  },
  {
    rank: 8,
    name: "The Alley",
    city: "Rowland Heights / Arcadia",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3",
    price: "$$",
    address: "Rowland Heights, Arcadia",
    bestFor: "Crystal Deerioca tapioca, roasted oolongs",
    mustOrder: "Roasted Oolong Milk Tea with Deerioca, Brown Sugar Deerioca Milk",
    verdict: "The Taiwanese chain that made crystal tapioca famous in LA. Deerioca is a genuinely different chewing experience than standard tapioca, and the roasted oolong base is one of the cleaner teas available from a chain this size.",
    href: "/the-alley-boba-review-los-angeles/",
  },
  {
    rank: 9,
    name: "85 Degrees Bakery",
    city: "Arcadia / Alhambra / Rowland Heights / Monterey Park",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$",
    address: "Arcadia, Alhambra, Rowland Heights, Monterey Park",
    bestFor: "Taiwanese bakery, sea salt coffee, fresh-baked bread",
    mustOrder: "Sea Salt Coffee, Tiger Bread, Egg Tart",
    verdict: "Technically a bakery, but the sea salt coffee is one of the most distinctive drinks in the SGV, and pairing it with fresh-baked bread creates the best sit-down experience in the area. The Arcadia location is the best in LA.",
    href: "/85-degrees-bakery-review-los-angeles/",
  },
  {
    rank: 10,
    name: "Tastea",
    city: "Alhambra / West Covina",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3",
    price: "$$",
    address: "Alhambra, West Covina",
    bestFor: "Specialty milk teas, rose and matcha drinks",
    mustOrder: "Rose Matcha Milk Tea, Strawberry Milk Tea",
    verdict: "The San Diego chain that earns its place in the SGV. The Rose Matcha Milk Tea is one of the most creative specialty drinks at any LA boba shop. Consistently good across visits, which puts it ahead of most chains at this price level.",
    href: "/tastea-review-los-angeles/",
  },
  {
    rank: 11,
    name: "Happy Lemon",
    city: "Alhambra / Monterey Park / Arcadia",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Alhambra, Monterey Park, Arcadia",
    bestFor: "Rock salt and cheese foam, oolong teas",
    mustOrder: "Rock Salt and Cheese Oolong, QQ Cocoa",
    verdict: "The chain that introduced Rock Salt and Cheese foam to Los Angeles. Essential for understanding the history of LA boba culture. The cheese foam on the Oolong base remains one of the better versions in the city.",
    href: "/happy-lemon-review-los-angeles/",
  },
];

const moreSGVShops = [
  { name: "Kung Fu Tea", city: "Multiple SGV locations", note: "Reliable, affordable milk teas. Good Taro Slush. Best for a quick fix near an SGV location." },
  { name: "Half and Half Tea Express", city: "Rowland Heights", note: "Cold-brew layered milk tea done right. The Top 1 Milk Tea is one of the cleanest milk teas in the SGV. Read the full review.", href: "/half-and-half-tea-express-review-los-angeles/" },
  { name: "Lollicup", city: "Multiple SGV locations", note: "The original LA boba chain, founded in Alhambra in 2000. Lower tier today but a historic stop for boba enthusiasts." },
  { name: "Ten Ren Tea", city: "Multiple SGV locations", note: "The original loose-leaf Taiwanese tea company that TP Tea is based on. Quieter than TP Tea but same high-quality sourcing." },
  { name: "Gong Cha", city: "Multiple SGV locations", note: "Korean-founded chain with a strong milk tea program. Reliable across all SGV locations." },
  { name: "Sharetea", city: "Multiple SGV locations", note: "Taiwanese chain with particularly good taro drinks. The Three Mates is a strong everyday order." },
  { name: "Wushiland Boba", city: "Multiple SGV locations", note: "Hong Kong-style milk tea specialist. Less well known than the big chains but consistently excellent tea quality." },
  { name: "Milksha", city: "Multiple SGV locations", note: "Premium Taiwanese chain that uses real fresh milk instead of powder. The taro milk tea is among the best in the SGV." },
  { name: "Ding Tea", city: "Arcadia", note: "Precision-brewed Taiwanese chain with excellent oolong and red tea bases. Underrated in the SGV because of low brand awareness." },
];

export default function BestBobaSGVPage() {
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
                Best Boba in the San Gabriel Valley: 15+ Top SGV Shops
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                The SGV is where LA boba gets serious. More authentic Taiwanese and Chinese tea shops per square mile than anywhere else in California. Every shop below has been personally visited by Justin Sather.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">15+ Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Rowland Heights, Monterey Park, Alhambra</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated Quarterly</span>
              </div>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/products/chicha_san_chen_drink.png"
                alt="Best boba in the San Gabriel Valley"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Author note */}
      <section className="bg-[#EDF2F7] py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/assets/team/justin-sather-avatar.jpg" alt="Justin Sather" fill className="object-cover" />
            </div>
            <p className="text-base text-[#4A5568] leading-relaxed">
              <span className="font-semibold text-[#1A202C]">Justin Sather</span> has personally visited every shop on this list. All drinks were purchased out of pocket. No sponsorships, no free products. Last updated: Q1 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Why the SGV */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Why the SGV Is LA&apos;s Best Boba Destination</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#EDF2F7] rounded-xl p-5">
            <p className="font-bold text-[#1A202C] mb-2">Authentic Taiwanese and Chinese shops</p>
            <p className="text-[#4A5568] text-sm">Most SGV boba shops are owned and operated by Taiwanese and Chinese immigrants who grew up drinking this tea. The result is preparation methods and flavor profiles that are genuinely different from what you find in other LA neighborhoods.</p>
          </div>
          <div className="bg-[#EDF2F7] rounded-xl p-5">
            <p className="font-bold text-[#1A202C] mb-2">Loose-leaf tea, not powder</p>
            <p className="text-[#4A5568] text-sm">Shops like Sunright Tea Studio, TP Tea, and Chicha San Chen brew from actual loose-leaf teas. The difference in flavor between a properly brewed single-origin oolong and a powder-based milk tea is enormous, and the SGV is where you find the real thing.</p>
          </div>
          <div className="bg-[#EDF2F7] rounded-xl p-5">
            <p className="font-bold text-[#1A202C] mb-2">Best value in LA</p>
            <p className="text-[#4A5568] text-sm">TP Tea charges $5 to $7 for drinks made with actual Ten Ren loose-leaf tea. Meet Fresh serves large Taiwanese dessert bowls under $11. The SGV offers better tea quality for less money than any other LA neighborhood.</p>
          </div>
        </div>
      </section>

      {/* Ranked list */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-8">Top 11 Boba and Tea Shops in the SGV</h2>
        <div className="space-y-6">
          {sgvShops.map((shop) => (
            <article key={shop.rank} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row">
                <div className="relative sm:w-48 h-44 sm:h-auto flex-shrink-0">
                  <Image
                    src={shop.image}
                    alt={`${shop.name} ${shop.city} boba review`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 bg-[#2B6CB0] text-white rounded-full flex items-center justify-center text-sm font-bold shadow">
                    {shop.rank}
                  </div>
                </div>
                <div className="p-5 flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="text-lg font-bold text-[#1A202C]">{shop.name}</h3>
                      <p className="text-sm text-[#718096]">{shop.city}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <StarRating rating={shop.rating} />
                      <p className="text-xs text-[#718096] mt-1">{shop.price}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#2B6CB0] font-semibold mb-2">Best for: {shop.bestFor}</p>
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-3">{shop.verdict}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#718096]">
                      <span className="font-semibold text-[#2D3748]">Must order:</span> {shop.mustOrder}
                    </span>
                    <Link href={shop.href} className="text-[#2B6CB0] text-xs font-semibold hover:text-[#215387] transition-colors flex-shrink-0 ml-2">
                      Full Review &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SGV by City */}
      <section className="bg-[#EDF2F7] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">SGV Boba by City</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                city: "Monterey Park",
                highlight: "Best for premium tea experiences",
                picks: "Chicha San Chen, Meet Fresh, Happy Lemon",
              },
              {
                city: "Rowland Heights",
                highlight: "Best concentration of shops per block",
                picks: "Half and Half Tea Express, Sunright Tea Studio, The Alley, Meet Fresh, TP Tea",
              },
              {
                city: "Temple City / Alhambra",
                highlight: "Best for brown sugar boba",
                picks: "Xing Fu Tang, 85 Degrees Bakery, Happy Lemon, Tastea",
              },
              {
                city: "Arcadia",
                highlight: "Best for chain variety",
                picks: "The Alley, 85 Degrees Bakery, Kung Fu Tea, Ding Tea",
              },
              {
                city: "Diamond Bar / Hacienda Heights",
                highlight: "Best for value boba",
                picks: "TP Tea, Kung Fu Tea, Sharetea",
              },
              {
                city: "Pasadena",
                highlight: "Best for specialty single-origin teas",
                picks: "Sunright Tea Studio, Happy Lemon, Kung Fu Tea",
              },
            ].map((item) => (
              <div key={item.city} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-[#1A202C] text-base mb-1">{item.city}</h3>
                <p className="text-xs text-[#2B6CB0] font-semibold mb-2">{item.highlight}</p>
                <p className="text-xs text-[#4A5568]">{item.picks}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Worth Visiting */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-6">More SGV Shops Worth Visiting</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {moreSGVShops.map((shop) => (
            <div key={shop.name} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A202C] text-sm mb-1">{shop.name}</h3>
              <p className="text-xs text-[#718096] mb-2">{shop.city}</p>
              <p className="text-xs text-[#4A5568] mb-2">{shop.note}</p>
              {(shop as { name: string; city: string; note: string; href?: string }).href && (
                <Link href={(shop as { name: string; city: string; note: string; href?: string }).href!} className="text-xs text-[#2B6CB0] font-semibold hover:text-[#215387] transition-colors">
                  Full Review &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#EDF2F7] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-base font-bold text-[#1A202C] mb-2">{item.question}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-6">More LA Boba Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6">
            <h3 className="text-lg font-bold text-[#1A202C] group-hover:text-[#2B6CB0] transition-colors mb-2">Best Boba in Koreatown &rarr;</h3>
            <p className="text-[#4A5568] text-sm">30+ shops reviewed in K-Town. The highest density of boba shops in any LA neighborhood, with everything from brown sugar specialists to classic milk tea chains.</p>
          </Link>
          <Link href="/best-boba-los-angeles/" className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6">
            <h3 className="text-lg font-bold text-[#1A202C] group-hover:text-[#2B6CB0] transition-colors mb-2">Best Boba in Los Angeles &rarr;</h3>
            <p className="text-[#4A5568] text-sm">The top 25+ boba shops across all of LA County, ranked and reviewed. Covers Koreatown, SGV, Silver Lake, Westwood, and beyond.</p>
          </Link>
        </div>
      </section>
    </>
  );
}
