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
  title: "Best Boba in Alhambra: Complete Guide to the SGV Gateway City | Justin Sather",
  description: "The complete guide to boba in Alhambra, CA. Xing Fu Tang, Happy Lemon, Meet Fresh, LaTea, and CoCo Fresh Tea are all within minutes of the 10 freeway. The original home of LA boba culture. All shops personally visited, zero sponsorships.",
};

const faqItems = [
  {
    question: "What is the best boba in Alhambra?",
    answer: "Xing Fu Tang is the best boba in Alhambra for quality and distinctiveness. Their fresh wok-cooked pearls are made in small batches and have a chewiness that pre-cooked pearls cannot match. The Tiger Milk Tea is the essential order. For cheese foam, Happy Lemon in Alhambra is the best option, as the chain that introduced Rock Salt and Cheese Oolong to Los Angeles. For traditional Taiwanese milk tea at the lowest price, LaTea uses a brewed black tea base and keeps prices under $7.",
  },
  {
    question: "Why is Alhambra important to the history of LA boba?",
    answer: "Alhambra is where the modern LA boba scene began. Lollicup, the original Los Angeles boba chain, was founded in Alhambra in 2000 and grew to become one of the largest boba chains in the United States, with operations in over 30 states. Alhambra was also one of the first SGV cities to develop a large Taiwanese and Chinese-American community in the 1980s and 1990s, establishing the cultural foundation that made the SGV boba corridor possible. Valley Boulevard running through Alhambra remains one of the oldest and most historically important Asian food corridors in Los Angeles County.",
  },
  {
    question: "Where is the boba corridor in Alhambra?",
    answer: "Valley Boulevard running east-west through Alhambra is the main boba and food corridor, with shops concentrated between Garfield Ave and Atlantic Blvd. The Mission Road and Main Street area near Old Town Alhambra has additional options. For the densest concentration of reviewed shops, the Atlantic Blvd and Valley Blvd intersection is the best starting point, with Monterey Park immediately to the north and San Gabriel immediately to the east. Xing Fu Tang, CoCo Fresh Tea, and Happy Lemon all have locations accessible within a short drive of this corridor.",
  },
  {
    question: "Is Alhambra worth visiting for boba?",
    answer: "Yes, especially for anyone coming from Downtown LA or the western San Gabriel Valley. Alhambra is 12 to 15 minutes east of Downtown LA via the 10 freeway, making it the most accessible SGV boba destination from central LA. Xing Fu Tang's fresh wok-cooked pearls are genuinely different from what you get at standard boba shops, and the combination of Xing Fu Tang, Happy Lemon, and Meet Fresh makes Alhambra a strong standalone boba destination. For serious boba exploration, Alhambra is the logical first stop before heading deeper into the SGV toward San Gabriel, Temple City, and Rowland Heights.",
  },
  {
    question: "What is the best boba near the 10 freeway in the SGV?",
    answer: "Alhambra has the best concentration of boba near the 10 freeway in the SGV. Xing Fu Tang and Happy Lemon are within a short drive of the 10 freeway exits at Garfield Ave or Atlantic Blvd. CoCo Fresh Tea has multiple Alhambra-area locations accessible from the same exits. For drivers heading east on the 10, Alhambra is the first high-quality boba stop before the deeper SGV. For drivers heading west toward downtown, Alhambra is the last SGV exit before boba options thin out significantly until Koreatown.",
  },
  {
    question: "How does Alhambra boba compare to Rowland Heights?",
    answer: "Alhambra and Rowland Heights have different strengths. Alhambra is more accessible from central LA via the 10 freeway and has a broader range of shop styles, from Xing Fu Tang's fresh-pearl specialists to Happy Lemon's cheese foam innovations. Rowland Heights has the highest density of traditional Taiwanese boba shops concentrated on the Colima Rd corridor, with Half and Half Tea Express, The Alley, LaTea, and Moge Tee all within a few blocks. For casual visitors from western LA, Alhambra is easier to reach. For Taiwanese boba purists, Rowland Heights has the edge. Both are significantly better than anything you will find in non-SGV neighborhoods.",
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

const alhambraShops = [
  {
    rank: 1,
    name: "Xing Fu Tang",
    city: "Alhambra / Temple City",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.7",
    price: "$$",
    address: "Alhambra / Temple City, CA",
    bestFor: "Fresh wok-cooked pearls, Tiger Milk Tea, Brown Sugar Milk, best tapioca in the SGV",
    mustOrder: "Tiger Milk Tea, Brown Sugar Milk, Taro Milk Tea",
    verdict: "The best boba in Alhambra and one of the best in all of Los Angeles. Xing Fu Tang's defining feature is wok-cooked fresh pearls made in small batches throughout the day, a technique that produces tapioca with a chewiness and caramel depth that pre-cooked pearls cannot replicate. The Tiger Milk Tea, a tea base with brown sugar fresh pearls, is the essential order. The Brown Sugar Milk is the simpler version for those who want to taste the pearls without any tea complexity. Prices at $7 to $10. If you visit one shop in Alhambra, make it Xing Fu Tang.",
    href: "/xing-fu-tang-review-los-angeles/",
  },
  {
    rank: 2,
    name: "Happy Lemon",
    city: "Alhambra / Arcadia / Koreatown",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Alhambra, CA",
    bestFor: "Rock Salt and Cheese Oolong, cheese foam originator, Roasted Milk Tea, Hawthorn Green Tea",
    mustOrder: "Rock Salt and Cheese Oolong, Roasted Milk Tea with Rock Salt",
    verdict: "The chain that introduced cheese foam to Los Angeles and one of the most important boba shops in LA history. Happy Lemon's signature innovation is the Rock Salt and Cheese series, a savory-sweet cream foam made from cream cheese, salt, and heavy cream layered over a strong oolong base. The combination of the salty foam with the bitter oolong changed how LA drinks boba. The Roasted Milk Tea with Rock Salt Cream is the other essential order. The Alhambra location is one of the most accessible for west-side visitors driving east on the 10 freeway. Prices at $6.50 to $9.50.",
    href: "/happy-lemon-review-los-angeles/",
  },
  {
    rank: 3,
    name: "Meet Fresh",
    city: "Alhambra / Rowland Heights / Monterey Park",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$",
    address: "Alhambra, CA",
    bestFor: "Taro ball combos, grass jelly, Q Tofu, shaved ice, Taiwanese desserts with drinks",
    mustOrder: "Taro Ball Combo with Grass Jelly, Fresh Taro and Sweet Potato with Shaved Ice",
    verdict: "The best Taiwanese dessert and boba hybrid stop in Alhambra. Meet Fresh is built around taro balls, grass jelly, shaved ice, and Q Tofu rather than standard milk teas. The Taro Ball Combo with Grass Jelly is the essential order, with fresh taro and sweet potato balls served warm or cold in a mild sweetened broth. This is the traditional Taiwanese dessert that chain boba shops do not offer. Prices at $6 to $9, making it the best value stop on an Alhambra boba tour. Worth visiting when you want something other than a milk tea.",
    href: "/meet-fresh-review-los-angeles/",
  },
  {
    rank: 4,
    name: "LaTea",
    city: "Alhambra / Rowland Heights",
    image: "/assets/products/latea_drink.png",
    rating: "4.3",
    price: "$",
    address: "Alhambra, CA",
    bestFor: "Brewed black tea base, Winter Melon Tea, traditional Taiwanese milk tea, value under $7",
    mustOrder: "Winter Melon Tea, Classic Milk Tea with Pearl",
    verdict: "The best traditional Taiwanese milk tea in Alhambra at the lowest price point. LaTea uses a brewed black tea base rather than powder or concentrate, which gives their milk teas a depth that most chain shops cannot match. The Winter Melon Tea is the standout item, sweet and floral in a way that is specific to authentic Taiwanese preparation. The Classic Milk Tea with Pearl is the everyday order at under $6. Prices run $5.50 to $7.50, the best value in the Alhambra boba corridor. If you find most LA boba too sweet or too powder-heavy, LaTea is the correction.",
    href: "/latea-review-los-angeles/",
  },
  {
    rank: 5,
    name: "CoCo Fresh Tea & Juice",
    city: "Alhambra / Multiple SGV locations",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.0",
    price: "$",
    address: "Alhambra, CA",
    bestFor: "Avocado Smoothie Milk Tea, passion fruit green tea, value pricing at $4.50 to $7, reliable everyday option",
    mustOrder: "Avocado Smoothie Milk Tea, Passion Fruit Green Tea with Aloe",
    verdict: "The world's largest boba chain by outlet count, and the best value everyday option in Alhambra. CoCo Fresh Tea is the chain that built its reputation on freshly brewed tea bases, consistent preparation, and a broad menu. The Avocado Smoothie Milk Tea is the unique item no other major chain offers and worth ordering at least once. The Passion Fruit Green Tea with Aloe is the best fruit tea on the menu. Prices at $4.50 to $7 make CoCo the cheapest quality boba in Alhambra. Multiple locations in the Alhambra and Monterey Park corridor ensure there is almost always one nearby.",
    href: "/coco-fresh-tea-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Gong Cha",
    city: "Multiple SGV and Alhambra-area locations",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1",
    price: "$$",
    address: "Alhambra area, CA",
    bestFor: "High Mountain Oolong base, Brown Sugar Milk Tea with Pearl, reliable chain quality across all locations",
    mustOrder: "Brown Sugar Milk Tea with Pearl, Milk Foam Oolong Tea",
    verdict: "The most reliable chain option in the Alhambra corridor. Gong Cha differentiates from other large chains by using High Mountain Oolong as its standard tea base, which has a more complex, less bitter flavor than the generic black teas used by most value chains. The Brown Sugar Milk Tea with Pearl is the bestseller and a consistent execution at every location. The Milk Foam Oolong is the best introduction to the High Mountain Oolong difference. Prices at $6.50 to $9. When Xing Fu Tang, Happy Lemon, and Meet Fresh are closed or you just need something reliable, Gong Cha is the call.",
    href: "/gong-cha-review-los-angeles/",
  },
];

const moreShops = [
  { name: "Chicha San Chen", city: "San Gabriel (5 to 10 min east via Valley Blvd)", note: "World Tea Championship credentials, Four Seasons Tea, Wuyi Mountain Oolong. The highest-rated boba shop in the entire SGV and the most important stop on any SGV boba tour.", href: "/chicha-san-chen-san-gabriel-review/" },
  { name: "Sunright Tea Studio", city: "Pasadena / Rosemead (15 min north)", note: "Sun Moon Lake black tea sourced directly from Taiwan, Alishan oolong, best single-origin specialty tea in the SGV. Worth the drive north on the 710 for serious tea enthusiasts.", href: "/sunright-tea-studio-review-los-angeles/" },
  { name: "The Alley", city: "Arcadia (15 min east via Valley Blvd)", note: "Deerioca crystal tapioca made from cassava, lighter and chewier than standard pearls. Roasted Oolong Milk Tea with Deerioca is the most distinctive drink in the SGV.", href: "/the-alley-boba-review-los-angeles/" },
  { name: "Half and Half Tea Express", city: "Rowland Heights (15 to 20 min east via 60)", note: "Cold-brew tea technique eliminates bitterness, Top 1 Milk Tea is the best everyday milk tea value in the SGV. The first stop on the Colima Rd corridor in Rowland Heights.", href: "/half-and-half-tea-express-review-los-angeles/" },
  { name: "Moge Tee", city: "Rowland Heights / SGV (15 to 20 min east via 60)", note: "Yunnan Pu-erh tea base, earthy and aged depth unlike any other boba shop in LA. The Dirty Pu-erh is the essential order for anyone who wants something completely different.", href: "/moge-tee-review-los-angeles/" },
  { name: "Tiger Sugar", city: "Koreatown (15 to 20 min west via 10)", note: "The best brown sugar boba in Los Angeles. Fresh pearls every 4 hours, theatrical torching, 5/5. Worth the drive west for anyone who has not tried it.", href: "/tiger-sugar-review-koreatown-boba-bubble-tea/" },
];

export default function BestBobaAlhambraPage() {
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
                Best Boba in Alhambra: Complete Guide to the SGV Gateway City
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Alhambra is where the modern LA boba scene started. Lollicup was founded here in 2000. Today, Xing Fu Tang, Happy Lemon, Meet Fresh, and LaTea make it the most accessible SGV boba destination from Downtown LA. Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">6 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Valley Blvd, Garfield Ave, Atlantic Blvd</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/boba_koreatown_guide.png"
                alt="Best boba in Alhambra SGV California bubble tea"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Honest Guide to Boba in Alhambra</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Alhambra has a legitimate claim to being the birthplace of modern LA boba culture. Lollicup, the first major boba chain in Los Angeles, was founded in Alhambra in 2000 and expanded across the country from here. The city sits at the western edge of the San Gabriel Valley, 12 to 15 minutes east of Downtown LA via the 10 freeway, making it the most accessible SGV boba destination from central Los Angeles.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Today the essential Alhambra boba stops are Xing Fu Tang (fresh wok-cooked pearls, Tiger Milk Tea), Happy Lemon (Rock Salt and Cheese Oolong, cheese foam originator), Meet Fresh (Taiwanese desserts, taro ball combos), and LaTea (brewed black tea base, best value). For premium boba, Chicha San Chen in neighboring San Gabriel is 5 to 10 minutes east and is the World Tea Championship-winning shop that is considered the best boba in the entire SGV.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            Alhambra is also the natural starting point for a full SGV boba tour heading east. From Alhambra, the 10 freeway corridor leads east to Temple City and Arcadia, the 60 freeway leads east to Rowland Heights, and Valley Boulevard runs east through San Gabriel and Monterey Park. Anyone doing a serious SGV boba day should start in Alhambra and work east.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba in Alhambra, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, distinctiveness, and value along the Valley Blvd, Garfield Ave, and Atlantic Blvd corridors.</p>

          <div className="space-y-8">
            {alhambraShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba Alhambra SGV California`}
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
                        Full Review &rarr;
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Worth Visiting Near Alhambra</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Additional shops within 5 to 20 minutes of Alhambra that are worth knowing about for a full SGV boba outing.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moreShops.map((shop) => (
              <div key={shop.name} className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-bold text-[#1A202C] text-sm mb-1">{shop.name}</h3>
                <p className="text-[#718096] text-xs mb-2">{shop.city}</p>
                <p className="text-[#4A5568] text-xs leading-relaxed">{shop.note}</p>
                {shop.href && (
                  <Link href={shop.href} className="text-[#2B6CB0] text-xs font-semibold mt-2 inline-block hover:underline">
                    Full Review &rarr;
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Valley Blvd, Garfield Ave, Atlantic Blvd, and Beyond</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Valley Boulevard Corridor (The Historic SGV Spine)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Valley Boulevard runs east-west through the heart of Alhambra and is the historic commercial spine of the western San Gabriel Valley. Most of Alhambra&apos;s boba and food options are concentrated along or just off Valley Blvd between Garfield Ave and Atlantic Blvd. This is also the road that connects Alhambra directly to San Gabriel (5 min east), Monterey Park (5 min north), and eventually Rowland Heights and the Colima Rd corridor further east. A boba tour following Valley Blvd east from Alhambra covers the core of the entire SGV boba network.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Garfield Avenue and Mission Road (Old Town Alhambra)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Garfield Ave running north-south through central Alhambra is one of the main access roads from the 10 freeway and the commercial spine of Old Town Alhambra. The Mission Road and Main Street corridor near the Alhambra Renaissance area has additional dining options. The 10 freeway Garfield Ave exit puts you directly into the Alhambra commercial district in under a minute, making this the easiest SGV boba entry point from Downtown LA and the Westside.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Atlantic Boulevard (Border with Monterey Park)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Atlantic Blvd at the eastern edge of Alhambra marks the border with Monterey Park. This corridor has concentrated dining and boba options from both cities, and the distinction between Alhambra and Monterey Park is largely geographic rather than culinary. Happy Lemon, CoCo Fresh Tea, and similar chain shops have locations accessible from the Atlantic Blvd corridor. Atlantic Blvd also connects north to the 10 freeway and south toward the 60 freeway, making it a convenient axis for reaching shops across both cities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">San Gabriel and Temple City (5 to 15 Min East)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                San Gabriel borders Alhambra directly to the east and is where Chicha San Chen, the World Tea Championship-winning boba shop, is located. At 5 to 10 minutes east of central Alhambra via Valley Blvd, Chicha San Chen is the natural first extension of an Alhambra boba tour. Temple City, 10 to 15 minutes further east, is where Xing Fu Tang has its primary SGV location. An Alhambra-to-San Gabriel-to-Temple City boba route covers three of the best individual shops in the entire SGV in under an hour.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Monterey Park and Arcadia (Adjacent North and East)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Monterey Park borders Alhambra to the north and shares the same commercial character, with additional boba options accessible from the Atlantic Blvd and Garvey Ave corridors. Happy Lemon has a Monterey Park location in addition to its Alhambra presence. The Alley in Arcadia, 15 minutes east via Valley Blvd, is the best boba in Arcadia and a natural extension of an Alhambra boba outing heading east. Arcadia also borders Temple City, where Xing Fu Tang is located, making the Valley Blvd corridor east the optimal route for visiting multiple top-tier SGV shops in one trip.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Koreatown and DTLA via the 10 Freeway (12 to 20 Min West)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Alhambra&apos;s position at the 10 freeway makes it the bridge between the SGV and Koreatown. Tiger Sugar in Koreatown is 12 to 20 minutes west of Alhambra depending on traffic, making a combined Alhambra-plus-Koreatown boba day genuinely practical. For visitors coming from Downtown LA or Koreatown who want to explore the SGV, Alhambra is the logical first stop heading east. The 10 freeway also connects Alhambra to the Westside in 30 to 45 minutes, making it accessible from neighborhoods that rarely venture into the SGV.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Alhambra Boba FAQ</h2>
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
            <Link href="/best-boba-monterey-park/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Monterey Park</h3>
              <p className="text-[#4A5568] text-sm">Adjacent to Alhambra to the east. Meet Fresh, Happy Lemon, 85 Degrees Bakery, and Chicha San Chen just 5 minutes further east in San Gabriel. 5 to 10 minutes from Alhambra.</p>
            </Link>
            <Link href="/best-boba-san-gabriel-valley/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in the San Gabriel Valley</h3>
              <p className="text-[#4A5568] text-sm">The complete SGV guide covering Alhambra, Monterey Park, Rowland Heights, Temple City, Pasadena, and beyond. 15+ shops personally reviewed.</p>
            </Link>
            <Link href="/best-boba-rowland-heights/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Rowland Heights</h3>
              <p className="text-[#4A5568] text-sm">Little Taipei&apos;s boba corridor. Half and Half Tea Express, The Alley, LaTea, and Moge Tee on the Colima Rd strip. 20 to 25 minutes east of Alhambra via the 60.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
