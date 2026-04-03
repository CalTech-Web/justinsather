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
  title: "Best Boba in Monterey Park: Complete Guide to the SGV's Premier Boba City | Justin Sather",
  description: "The complete guide to boba in Monterey Park, CA. Meet Fresh, Happy Lemon, 85 Degrees Bakery, CoCo Fresh Tea, and Chicha San Chen are all within minutes. The heart of the SGV boba scene. All shops personally visited, zero sponsorships.",
};

const faqItems = [
  {
    question: "What is the best boba in Monterey Park?",
    answer: "Chicha San Chen in neighboring San Gabriel (5 minutes east of central Monterey Park) is the best boba accessible from Monterey Park, and is widely considered the best boba in the entire San Gabriel Valley. Their Four Seasons Tea and Wuyi Mountain Oolong won the World Tea Championship, and every drink is made with ceremony-grade sourced teas. For boba within Monterey Park proper, Meet Fresh is the essential stop for authentic Taiwanese desserts and taro ball drinks that no other city in LA serves at this level. Happy Lemon's cheese foam series and 85 Degrees Bakery's sea salt coffee complete the must-visit list.",
  },
  {
    question: "Why is Monterey Park important for Asian food culture in Los Angeles?",
    answer: "Monterey Park holds a unique place in American history as one of the first cities in the continental United States where Asian Americans became the majority population, a milestone reached in the early 1980s. The Taiwanese and Cantonese communities that built Monterey Park established an authentic food culture that became the foundation of the broader San Gabriel Valley dining scene. Garvey Avenue running through Monterey Park is one of the original Asian food corridors in Southern California, predating the current boba and restaurant boom by decades. The city's combination of Taiwanese and Cantonese influences gives its food scene a different character than Rowland Heights, which skews more specifically Taiwanese.",
  },
  {
    question: "Where is the main boba corridor in Monterey Park?",
    answer: "Garvey Avenue running east-west through central Monterey Park is the main boba and food corridor, with the highest concentration of shops between Atlantic Blvd on the west and Garfield Ave on the east. The Atlantic Blvd corridor at the western edge of Monterey Park connects directly to Alhambra and has shops from both cities within walking distance. Lincoln Avenue running north-south through the center of the city is the secondary commercial spine. For the densest concentration of options, the Garvey Ave and Atlantic Blvd intersection is the best starting point for a Monterey Park boba visit.",
  },
  {
    question: "Is Monterey Park worth visiting for boba?",
    answer: "Yes, particularly because Monterey Park sits at the center of the SGV boba network and is one of the closest SGV boba destinations from Downtown LA. Meet Fresh in Monterey Park is one of the few places in all of Los Angeles where you can get authentic Taiwanese taro ball desserts made fresh. The proximity to San Gabriel (5 minutes east, home to Chicha San Chen) and Alhambra (5 to 10 minutes west, home to Xing Fu Tang and Happy Lemon) makes Monterey Park the ideal hub for a full SGV boba day. For visitors who have never been to the SGV, Monterey Park is the most accessible entry point that still delivers an authentic experience.",
  },
  {
    question: "How does Monterey Park boba compare to Koreatown?",
    answer: "Monterey Park and Koreatown target completely different boba styles. Koreatown excels at brown sugar boba (Tiger Sugar), cheese foam innovations (Happy Lemon, Machi Machi), and high-concept Korean-influenced boba experiences. Monterey Park and the broader SGV specialize in traditional Taiwanese preparations, premium single-origin teas, and authentic Taiwanese desserts like taro balls and grass jelly. The Monterey Park to Koreatown drive via the 10 freeway takes 20 to 25 minutes, making a combined visit genuinely practical. For the best boba day in Los Angeles, start in Monterey Park or Alhambra, work east through the SGV, and return west to Koreatown for the brown sugar boba experience.",
  },
  {
    question: "What is the best boba near the 10 freeway in Monterey Park?",
    answer: "Monterey Park is directly accessible from the 10 freeway via the Atlantic Blvd exit, which puts you into the main Garvey Ave corridor within minutes. Meet Fresh and CoCo Fresh Tea have locations within a short drive of the Atlantic Blvd exit. For drivers heading east on the 10, Monterey Park is the first major SGV boba stop with access to Meet Fresh, Happy Lemon, and 85 Degrees Bakery. Alhambra (Xing Fu Tang, Happy Lemon) is the next stop heading slightly southwest, and San Gabriel (Chicha San Chen) is 5 minutes east of Monterey Park via Valley Blvd. The 10 freeway makes Monterey Park the natural hub for a SGV boba day from Downtown LA or the Westside.",
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

const montereyParkShops = [
  {
    rank: 1,
    name: "Meet Fresh",
    city: "Monterey Park / Alhambra / Rowland Heights",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$",
    address: "Monterey Park, CA",
    bestFor: "Taro ball combos, grass jelly, Q Tofu, shaved ice, authentic Taiwanese desserts with drinks",
    mustOrder: "Taro Ball Combo with Grass Jelly, Fresh Taro and Sweet Potato with Shaved Ice",
    verdict: "The essential Monterey Park stop for anyone who wants something beyond a standard milk tea. Meet Fresh is built around taro balls, grass jelly, shaved ice, and Q Tofu, the traditional Taiwanese dessert formats that chain boba shops do not offer. The Taro Ball Combo with Grass Jelly is the essential order, with fresh taro and sweet potato balls served warm or cold in a mild sweetened broth. This is the authentic Taiwanese dessert experience that only exists in the SGV at this quality level in Los Angeles. Prices at $6 to $9 make it the best value stop in the Monterey Park boba corridor.",
    href: "/meet-fresh-review-los-angeles/",
  },
  {
    rank: 2,
    name: "Happy Lemon",
    city: "Monterey Park / Alhambra / Arcadia / Koreatown",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Monterey Park, CA",
    bestFor: "Rock Salt and Cheese Oolong, cheese foam originator, Roasted Milk Tea, Hawthorn Green Tea",
    mustOrder: "Rock Salt and Cheese Oolong, Roasted Milk Tea with Rock Salt Cream",
    verdict: "The chain that introduced cheese foam to Los Angeles and one of the most historically important boba shops in LA County. Happy Lemon's signature innovation is the Rock Salt and Cheese series, a savory-sweet cream foam made from cream cheese, salt, and heavy cream layered over a strong oolong base. The Monterey Park location puts the city's signature shop within easy reach of the Garvey Ave corridor. The Roasted Milk Tea with Rock Salt Cream is the other essential order. Prices at $6.50 to $9.50.",
    href: "/happy-lemon-review-los-angeles/",
  },
  {
    rank: 3,
    name: "85 Degrees Bakery",
    city: "Monterey Park / Arcadia / Alhambra / Rowland Heights",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3",
    price: "$",
    address: "Monterey Park, CA",
    bestFor: "Sea salt coffee, Taiwanese bread, boba accompaniment, best value pastry stop in the SGV",
    mustOrder: "Sea Salt Coffee, Tiger Bread, Cranberry Biscuit",
    verdict: "The best companion stop on a Monterey Park boba tour. 85 Degrees is a Taiwanese bakery chain that has built its reputation on sea salt coffee, fresh bread baked daily, and a menu that pairs naturally with a boba crawl. The sea salt coffee is one of the most underrated drinks in the entire SGV and costs significantly less than a specialty milk tea. The Monterey Park location serves the same Taiwanese-American community that built the SGV food scene. The best strategy is to stop at 85 Degrees for a savory pastry and sea salt coffee between boba shops to reset your palate. Prices at $4 to $8.",
    href: "/85-degrees-bakery-review-los-angeles/",
  },
  {
    rank: 4,
    name: "CoCo Fresh Tea & Juice",
    city: "Monterey Park / Multiple SGV locations",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.0",
    price: "$",
    address: "Monterey Park, CA",
    bestFor: "Avocado Smoothie Milk Tea, passion fruit green tea, value pricing at $4.50 to $7, reliable everyday option",
    mustOrder: "Avocado Smoothie Milk Tea, Passion Fruit Green Tea with Aloe",
    verdict: "The world's largest boba chain by outlet count, and the most accessible everyday value option in Monterey Park. CoCo Fresh Tea is the chain that built its reputation on freshly brewed tea bases and consistent preparation across 4,000+ locations worldwide. The Avocado Smoothie Milk Tea is the unique item no other major chain offers and worth ordering at least once. Multiple locations in the Monterey Park and Alhambra corridor ensure there is almost always one nearby. Prices at $4.50 to $7 make CoCo the cheapest quality boba option in the area.",
    href: "/coco-fresh-tea-review-los-angeles/",
  },
  {
    rank: 5,
    name: "Gong Cha",
    city: "Multiple SGV and Monterey Park-area locations",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1",
    price: "$$",
    address: "Monterey Park area, CA",
    bestFor: "High Mountain Oolong base, Brown Sugar Milk Tea with Pearl, reliable chain quality across all locations",
    mustOrder: "Brown Sugar Milk Tea with Pearl, Milk Foam Oolong Tea",
    verdict: "The most reliable chain option in the Monterey Park corridor. Gong Cha differentiates from other large chains by using High Mountain Oolong as its standard tea base, which has a more complex flavor than the generic black teas most value chains use. The Brown Sugar Milk Tea with Pearl is the bestseller and a consistent execution at every location. The Milk Foam Oolong is the best introduction to the High Mountain Oolong difference. Prices at $6.50 to $9. When you need a reliable, accessible option in the Monterey Park area, Gong Cha is the dependable call.",
    href: "/gong-cha-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Chicha San Chen",
    city: "San Gabriel (5 min east of Monterey Park)",
    image: "/assets/products/chicha_san_chen_drink.png",
    rating: "5.0",
    price: "$$$",
    address: "San Gabriel, CA (5 min from Monterey Park via Valley Blvd)",
    bestFor: "Four Seasons Tea, Wuyi Mountain Oolong, World Tea Championship winner, ceremony-grade teas",
    mustOrder: "Four Seasons Tea, Wuyi Mountain Oolong Milk Tea",
    verdict: "The best boba shop in the San Gabriel Valley and one of the top boba shops in all of Los Angeles. Chicha San Chen is technically in San Gabriel, not Monterey Park, but at 5 minutes east via Valley Blvd it is a mandatory extension of any Monterey Park boba visit. The shop sources ceremony-grade teas directly from Taiwan and has won the World Tea Championship, a distinction no other boba shop in Los Angeles holds. The Four Seasons Tea is the essential order, a blend of four oolong varieties that changes with the tea harvest. Prices at $7 to $12 reflect the sourcing quality. This is not a chain and not a casual stop. It is the reason serious boba drinkers make the drive to the SGV.",
    href: "/chicha-san-chen-san-gabriel-review/",
  },
];

const moreShops = [
  { name: "Xing Fu Tang", city: "Temple City / Alhambra (10 to 15 min west)", note: "Fresh wok-cooked pearls made in small batches, Tiger Milk Tea, Brown Sugar Milk. The best tapioca texture in the SGV, genuinely different from pre-cooked pearls at chain shops.", href: "/xing-fu-tang-review-los-angeles/" },
  { name: "LaTea", city: "Alhambra / Rowland Heights (10 to 20 min west and east)", note: "Brewed black tea base rather than powder or concentrate, Winter Melon Tea as the standout item. Best traditional Taiwanese milk tea value in the SGV, all drinks under $7.50.", href: "/latea-review-los-angeles/" },
  { name: "Moge Tee", city: "Rowland Heights / SGV (20 to 25 min east via 60)", note: "Yunnan Pu-erh tea base, earthy and aged depth unlike any other boba shop in LA. The Dirty Pu-erh is the essential order for anyone who wants something completely different from standard milk teas.", href: "/moge-tee-review-los-angeles/" },
  { name: "The Alley", city: "Arcadia (15 to 20 min east via Valley Blvd)", note: "Deerioca crystal tapioca made from cassava, lighter and chewier than standard pearls. Roasted Oolong Milk Tea with Deerioca is the most distinctive drink in the Arcadia-area SGV.", href: "/the-alley-boba-review-los-angeles/" },
  { name: "Half and Half Tea Express", city: "Rowland Heights (25 min east via 60)", note: "Cold-brew technique eliminates bitterness. Top 1 Milk Tea is the best everyday milk tea value in the SGV. The anchor stop on the Colima Rd corridor.", href: "/half-and-half-tea-express-review-los-angeles/" },
  { name: "Tiger Sugar", city: "Koreatown (20 to 25 min west via 10)", note: "The best brown sugar boba in Los Angeles. Fresh pearls every 4 hours, theatrical torching, 5/5. Worth the drive west for anyone doing a cross-LA boba day.", href: "/tiger-sugar-review-koreatown-boba-bubble-tea/" },
];

export default function BestBobaMontereyParkPage() {
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
                Best Boba in Monterey Park: Complete Guide to the SGV&apos;s Premier Boba City
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Monterey Park is the heart of the San Gabriel Valley boba scene. Meet Fresh, Happy Lemon, 85 Degrees Bakery, and CoCo Fresh Tea are all here, with Chicha San Chen just 5 minutes east in San Gabriel. Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">6 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Garvey Ave, Atlantic Blvd, Lincoln Ave</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/boba_koreatown_guide.png"
                alt="Best boba in Monterey Park SGV California bubble tea"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Honest Guide to Boba in Monterey Park</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Monterey Park holds a unique place in American history. In the early 1980s, it became one of the first cities in the continental United States where Asian Americans reached majority population status. The Taiwanese and Cantonese communities that built Monterey Park established an authentic food culture that became the foundation of the broader San Gabriel Valley dining scene. Garvey Avenue, the main east-west commercial corridor through the city, is one of the original Asian food streets in Southern California.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            For boba, the essential Monterey Park stops are Meet Fresh (the best authentic Taiwanese dessert experience in the city), Happy Lemon (Rock Salt and Cheese Oolong, the cheese foam innovator), 85 Degrees Bakery (sea salt coffee, fresh bread, the best value companion stop), and CoCo Fresh Tea (reliable value chain with Avocado Smoothie Milk Tea). For the best boba in the broader area, Chicha San Chen in neighboring San Gabriel is 5 minutes east on Valley Blvd and is the World Tea Championship-winning shop that is considered the best boba in the entire SGV.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            Monterey Park is accessible from Downtown LA in 15 to 20 minutes via the 10 freeway, making it the most accessible full SGV boba experience from central Los Angeles. Alhambra is adjacent to the west, San Gabriel is adjacent to the east, and the 60 freeway connects south toward Rowland Heights. Anyone planning a serious SGV boba day will pass through or start in Monterey Park.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba in Monterey Park, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, distinctiveness, and value along the Garvey Ave, Atlantic Blvd, and Lincoln Ave corridors.</p>

          <div className="space-y-8">
            {montereyParkShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba Monterey Park SGV California`}
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Worth Visiting Near Monterey Park</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Additional shops within 10 to 25 minutes of Monterey Park worth knowing about for a full SGV boba outing.</p>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Garvey Ave, Atlantic Blvd, Lincoln Ave, and Beyond</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Garvey Avenue Corridor (The Main Commercial Strip)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Garvey Avenue running east-west through central Monterey Park is the city&apos;s primary commercial and food corridor. Most of the city&apos;s boba and restaurant options are concentrated along or just off Garvey Ave. This corridor connects directly to Alhambra to the west and San Gabriel to the east, making it the central axis of the western SGV boba network. A boba tour starting on Garvey Ave in Monterey Park and working east on Valley Blvd covers the core of the SGV boba corridor in a single route.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Atlantic Boulevard and Garfield Avenue (Western Edge, Border with Alhambra)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Atlantic Blvd at the western edge of Monterey Park marks the border with Alhambra and is the most accessible part of the city from the 10 freeway. The Atlantic Blvd exit from the 10 puts you into the Monterey Park and Alhambra commercial corridor within minutes. Happy Lemon, CoCo Fresh Tea, and similar shops have locations accessible from the Atlantic Blvd corridor, with the Alhambra and Monterey Park shops being functionally interchangeable for most visitors. Atlantic Blvd also connects north toward the 60 freeway and Rosemead.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Lincoln Avenue (North-South Spine)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Lincoln Avenue runs north-south through central Monterey Park and is the secondary commercial corridor after Garvey Ave. The Lincoln Ave and Garvey Ave intersection is one of the busiest commercial nodes in the city and a convenient meeting point for a Monterey Park boba visit. Meet Fresh and 85 Degrees Bakery are accessible from the Lincoln Ave corridor. Lincoln Ave also connects north toward the 60 freeway and Rosemead, and south toward Montebello and the 60 freeway heading east toward Rowland Heights.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">San Gabriel and Temple City (5 to 15 Min East)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                San Gabriel borders Monterey Park directly to the east and is where Chicha San Chen, the World Tea Championship-winning boba shop, is located. At 5 minutes east via Valley Blvd, Chicha San Chen is the single most important boba extension from a Monterey Park visit. Temple City, 10 to 15 minutes further east, is where Xing Fu Tang has its primary SGV location with fresh wok-cooked pearls. A Monterey Park to San Gabriel to Temple City boba route covers the three most acclaimed shops in the western SGV in under 90 minutes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Alhambra (5 to 10 Min West)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Alhambra borders Monterey Park to the west and the distinction between the two cities is largely geographic rather than culinary. Xing Fu Tang in Alhambra (fresh wok-cooked pearls), Happy Lemon (the Alhambra location is the same chain as the Monterey Park one), and LaTea (traditional Taiwanese milk tea, best value) are all within 5 to 10 minutes west of central Monterey Park. For visitors who want to combine Alhambra and Monterey Park in one outing, the combined boba options from both cities represent the best accessible introduction to SGV boba from Downtown LA.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Koreatown and Downtown LA via the 10 Freeway (15 to 25 Min West)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Monterey Park&apos;s position near the 10 freeway makes it the bridge between the SGV and Koreatown. Tiger Sugar in Koreatown is 20 to 25 minutes west of Monterey Park via the 10 freeway. Downtown LA is 15 to 20 minutes west. For visitors coming from Downtown LA or Koreatown who want to explore the SGV, Monterey Park is the logical first stop heading east. The 10 freeway also connects Monterey Park to the Westside in 35 to 45 minutes, making it more accessible from Santa Monica and Culver City than most people expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Monterey Park Boba FAQ</h2>
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
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in the San Gabriel Valley</h3>
              <p className="text-[#4A5568] text-sm">The complete SGV guide covering Monterey Park, Alhambra, Rowland Heights, Temple City, Pasadena, and beyond. 15+ shops personally reviewed.</p>
            </Link>
            <Link href="/best-boba-alhambra/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Alhambra</h3>
              <p className="text-[#4A5568] text-sm">Adjacent to Monterey Park to the west. Xing Fu Tang, Happy Lemon, Meet Fresh, and LaTea. The historic birthplace of LA boba culture, 5 to 10 minutes from Monterey Park.</p>
            </Link>
            <Link href="/best-boba-rowland-heights/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Rowland Heights</h3>
              <p className="text-[#4A5568] text-sm">Little Taipei&apos;s boba corridor. Half and Half Tea Express, The Alley, LaTea, and Moge Tee on the Colima Rd strip. 20 to 25 minutes east via the 60 freeway.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
