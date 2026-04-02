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
  title: "Best Boba in Rowland Heights: Complete Guide to Little Taipei's Boba Scene | Justin Sather",
  description: "The complete guide to boba in Rowland Heights, CA. Half and Half Tea Express, The Alley, LaTea, and Moge Tee are all on the Colima Rd corridor. The highest density of authentic Taiwanese boba in LA County. All shops personally visited, zero sponsorships.",
};

const faqItems = [
  {
    question: "What is the best boba in Rowland Heights?",
    answer: "Half and Half Tea Express is the best boba in Rowland Heights for value and tea quality. Their cold-brew technique produces a smoother, less bitter base than most shops, and the Top 1 Milk Tea is the essential order. The Alley is the best for unique crystal tapioca, called Deerioca, which has a lighter texture than standard pearls. For traditional Taiwanese milk tea, LaTea on Colima Rd uses a brewed black tea base rather than powder, making it one of the most authentic everyday milk tea shops in the SGV.",
  },
  {
    question: "Why is Rowland Heights called Little Taipei?",
    answer: "Rowland Heights earned the nickname Little Taipei because of its high concentration of Taiwanese-owned businesses, restaurants, and residents, many of whom immigrated from Taiwan beginning in the 1980s and 1990s. The Colima Road and Gale Avenue corridors have strip malls that look and feel like commercial streets in Taipei, with Taiwanese tea shops, bakeries, night market stalls, and restaurants concentrated along these corridors. The boba culture specifically reflects this: most shops in Rowland Heights use Taiwanese preparation methods, loose-leaf teas, and authentic recipes rather than the powdered shortcuts common at non-SGV shops.",
  },
  {
    question: "Where is the boba corridor in Rowland Heights?",
    answer: "The main boba corridor in Rowland Heights is Colima Road between Nogales St and Fullerton Rd. Half and Half Tea Express, The Alley, and LaTea all have locations along or just off this stretch. The surrounding strip malls on Gale Ave and Fullerton Rd also have boba options. Diamond Bar Blvd heading south into Diamond Bar has TP Tea within 5 to 10 minutes. For the densest concentration of shops, plan a loop of Colima Rd from the 60 freeway exit east toward the 57 freeway.",
  },
  {
    question: "How does Rowland Heights boba compare to Koreatown boba?",
    answer: "Rowland Heights and Koreatown represent two different traditions. Rowland Heights boba is rooted in Taiwanese and Chinese tea culture, emphasizing tea quality, fresh fruit, and traditional preparations like cold-brew black tea, single-origin oolongs, and classic milk teas with fresh-cooked pearls. Koreatown boba is more innovation-focused, with brown sugar specialists, cheese foam drinks, and Korean-influenced flavors like black sesame and taro. Both are excellent but different. Rowland Heights is the destination for authenticity and tea quality. Koreatown is the destination for novelty and the best brown sugar boba in LA.",
  },
  {
    question: "Is Rowland Heights worth driving to for boba?",
    answer: "Yes, especially if you are coming from anywhere in the eastern LA basin or Inland Empire. Rowland Heights is at the intersection of the 60 and 57 freeways, making it easy to reach from Pasadena, the SGV, Orange County, or the Inland Empire. For anyone from west LA, Koreatown, or the South Bay, Rowland Heights is a 35 to 50 minute drive depending on traffic, and worth making as a planned boba outing. The density and quality of shops on Colima Rd is unmatched anywhere else in Los Angeles County outside the core SGV cities of Monterey Park and San Gabriel.",
  },
  {
    question: "What is the best boba near Diamond Bar?",
    answer: "TP Tea on the Diamond Bar Blvd corridor is the best everyday boba near Diamond Bar, with a direct connection to Ten Ren Tea Company and a menu that emphasizes loose-leaf teas. Rowland Heights is 5 to 10 minutes west of central Diamond Bar and offers far more options including Half and Half Tea Express, The Alley, LaTea, and Moge Tee. For premium boba, Chicha San Chen in San Gabriel is about 20 minutes west via the 60 freeway and is the highest-rated boba shop in the entire SGV.",
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

const rowlandHeightsShops = [
  {
    rank: 1,
    name: "Half and Half Tea Express",
    city: "Rowland Heights (Colima Rd corridor)",
    image: "/assets/products/half_and_half_tea_express_drink.png",
    rating: "4.3",
    price: "$$",
    address: "Rowland Heights, CA",
    bestFor: "Cold-brew tea technique, Top 1 Milk Tea, Sea Salt Cheese Tea, value in the SGV",
    mustOrder: "Top 1 Milk Tea, Sea Salt Cheese Tea, Tiger Pearl Milk Tea",
    verdict: "The best everyday boba in Rowland Heights. Half and Half Tea Express sets itself apart by cold-brewing its tea base, a technique that eliminates bitterness and produces a smoother, more nuanced milk tea than shops that steep with hot water. The Top 1 Milk Tea is the essential order: a well-balanced traditional milk tea that lets the cold-brew base shine. The Sea Salt Cheese Tea adds a savory cream foam layer that is lighter than Machi Machi or Happy Lemon and pairs better with oolong bases. Prices range from $6.50 to $8.50. The Colima Rd location is on the main boba corridor and is the first stop for anyone new to Rowland Heights boba.",
    href: "/half-and-half-tea-express-review-los-angeles/",
  },
  {
    rank: 2,
    name: "The Alley",
    city: "Rowland Heights / Arcadia",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3",
    price: "$$",
    address: "Rowland Heights / Arcadia, CA",
    bestFor: "Deerioca crystal tapioca, Roasted Oolong Milk Tea, Brown Sugar Deerioca Milk",
    mustOrder: "Roasted Oolong Milk Tea with Deerioca, Brown Sugar Deerioca Milk",
    verdict: "The best boba in Rowland Heights if you want something genuinely different from a standard milk tea. The Alley's signature ingredient is Deerioca, a crystal tapioca made from cassava that is lighter, chewier, and less starchy than traditional black pearls. Paired with the Roasted Oolong Milk Tea, which uses a deeply roasted oolong that has a toasted, almost nutty flavor, the result is one of the most distinctive drinks in the SGV. The Brown Sugar Deerioca Milk is the sweet version for first-time visitors. Priced at $6 to $8. Rowland Heights location is accessible from the Colima Rd corridor.",
    href: "/the-alley-boba-review-los-angeles/",
  },
  {
    rank: 3,
    name: "LaTea",
    city: "Rowland Heights / Alhambra",
    image: "/assets/products/latea_drink.png",
    rating: "4.3",
    price: "$",
    address: "Rowland Heights, CA",
    bestFor: "Brewed black tea base, Winter Melon Tea, traditional Taiwanese milk tea, value pricing under $7",
    mustOrder: "Winter Melon Tea, Classic Milk Tea with Pearl",
    verdict: "The best traditional Taiwanese milk tea in Rowland Heights at the lowest price point. LaTea uses a brewed black tea base rather than powder or concentrate, which gives their milk teas a depth and clarity that most chain shops cannot match. The Winter Melon Tea is the standout traditional item: sweet, floral, and refreshing in a way that is specific to authentic Taiwanese preparation. The Classic Milk Tea with Pearl is the everyday order at under $6. Prices run $5.50 to $7.50, making LaTea the best value on the Rowland Heights boba corridor. A must-try for anyone who finds most LA boba too sweet or too powder-heavy.",
    href: "/latea-review-los-angeles/",
  },
  {
    rank: 4,
    name: "Moge Tee",
    city: "Rowland Heights / SGV",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$$",
    address: "Rowland Heights / SGV, CA",
    bestFor: "Yunnan Pu-erh tea base, Dirty Pu-erh, Cheese Pu-erh Milk Tea, unique earthy tea profile",
    mustOrder: "Dirty Pu-erh, Cheese Pu-erh Milk Tea",
    verdict: "The most distinctive tea choice in Rowland Heights. Moge Tee builds its entire menu around Yunnan Pu-erh tea, an aged, fermented tea from Yunnan province with an earthy depth that is completely unlike the Taiwanese oolong or black tea bases used by every other shop in the corridor. The Dirty Pu-erh, which layers Pu-erh over cold milk with minimal sweetener, is the essential order for anyone who wants to taste what makes Moge Tee worth the visit. The Cheese Pu-erh Milk Tea is the entry point for first-time visitors who are uncertain about Pu-erh. Prices at $6 to $8. No other shop in Rowland Heights offers this tea.",
    href: "/moge-tee-review-los-angeles/",
  },
  {
    rank: 5,
    name: "Meet Fresh",
    city: "Rowland Heights / Alhambra",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$",
    address: "Rowland Heights, CA",
    bestFor: "Taro ball combos, grass jelly, shaved ice, Q Tofu, Taiwanese desserts with drinks",
    mustOrder: "Taro Ball Combo with Grass Jelly, Fresh Taro and Sweet Potato with Shaved Ice",
    verdict: "The best dessert and boba hybrid stop in Rowland Heights. Meet Fresh is a Taiwanese dessert chain rather than a pure boba shop, with a menu built around taro ball combinations, grass jelly, shaved ice, and Q Tofu. The drinks are secondary to the desserts, but the combination makes it a unique stop on any Rowland Heights boba tour. The Taro Ball Combo with Grass Jelly is the essential order: fresh taro and sweet potato balls served warm or cold in a mild sweetened broth. Prices at $6 to $9. Worth a stop when you want something other than a standard milk tea.",
    href: "/meet-fresh-review-los-angeles/",
  },
  {
    rank: 6,
    name: "TP Tea",
    city: "Diamond Bar (5 to 10 min south via Diamond Bar Blvd)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$",
    address: "Diamond Bar, CA",
    bestFor: "Ten Ren Tea Company pedigree, Green Milk Tea, Pearl Milk Tea, value pricing under $7",
    mustOrder: "Green Milk Tea, Pearl Milk Tea, Mango Green Tea",
    verdict: "The best value boba within 10 minutes of Rowland Heights. TP Tea is the boba chain of Ten Ren Tea Company, a 70-year-old Taiwanese tea company that supplies loose-leaf tea to shops across Asia and the US. The Green Milk Tea is the essential order and the best expression of what makes TP Tea worth knowing about: fresh-brewed green tea base that retains a slight astringency missing from powder-based shops. The Pearl Milk Tea is the most ordered item. Prices run $5 to $7, the best value in the Diamond Bar and Rowland Heights corridor. Take Diamond Bar Blvd south from Colima Rd for about 5 minutes.",
    href: "/tp-tea-review-los-angeles/",
  },
];

const moreShops = [
  { name: "Chicha San Chen", city: "San Gabriel (15 to 20 min west via 60)", note: "World Tea Championship credentials, Four Seasons Tea, Wuyi Mountain Oolong. The highest-rated boba shop in the entire SGV and worth the extra 15-minute drive west for a serious boba outing.", href: "/chicha-san-chen-san-gabriel-review/" },
  { name: "Sunright Tea Studio", city: "Pasadena / Rowland Heights area", note: "Sun Moon Lake black tea sourced directly from Taiwan, Alishan oolong, best single-origin specialty tea in the SGV. The Rowland Heights or Pasadena location is the closest for Rowland Heights residents.", href: "/sunright-tea-studio-review-los-angeles/" },
  { name: "Xing Fu Tang", city: "Temple City / Alhambra", note: "Wok-cooked fresh pearls and Tiger Milk Tea. The freshest tapioca in the SGV. Brown Sugar Milk is the essential order. Worth the 15 to 20 minute drive west on the 60.", href: "/xing-fu-tang-review-los-angeles/" },
  { name: "CoCo Fresh Tea & Juice", city: "Multiple SGV locations", note: "The world's largest boba chain by outlet count, with the Avocado Smoothie Milk Tea as a unique item no other LA chain offers. Value pricing at $4.50 to $7.", href: "/coco-fresh-tea-review-los-angeles/" },
  { name: "Gong Cha", city: "Multiple SGV and LA locations", note: "High Mountain Oolong base differentiator, Brown Sugar Milk Tea with Pearl. One of the world's largest boba chains with SGV locations accessible from Rowland Heights.", href: "/gong-cha-review-los-angeles/" },
  { name: "Happy Lemon", city: "Alhambra / Arcadia (15 to 20 min west)", note: "The chain that introduced cheese foam to Los Angeles. Rock Salt and Cheese Oolong is the foundational cheese foam order. Multiple SGV locations within 20 minutes of Rowland Heights.", href: "/happy-lemon-review-los-angeles/" },
];

export default function BestBobaRowlandHeightsPage() {
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
                Best Boba in Rowland Heights: Complete Guide to Little Taipei&apos;s Boba Scene
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Rowland Heights is called Little Taipei for a reason. The Colima Rd corridor has Half and Half Tea Express, The Alley, LaTea, and Moge Tee within a few blocks. This is the highest density of authentic Taiwanese boba in LA County. Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">6 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Colima Rd, Diamond Bar, SGV</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/boba_koreatown_guide.png"
                alt="Best boba in Rowland Heights Little Taipei SGV bubble tea"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Honest Guide to Boba in Rowland Heights</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Rowland Heights has the highest concentration of authentic Taiwanese boba shops in Los Angeles County outside the core SGV cities of Monterey Park and San Gabriel. The city earned the nickname Little Taipei through decades of Taiwanese immigration, and the Colima Road corridor reflects this directly: most boba shops here use brewed tea bases rather than powder, source high-quality loose-leaf teas, and maintain preparation standards that are rare at non-SGV shops.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            The essential Rowland Heights boba stops are Half and Half Tea Express (cold-brew technique, best everyday milk tea), The Alley (Deerioca crystal tapioca, most distinctive drink), LaTea (traditional Taiwanese preparation, best value), and Moge Tee (Yunnan Pu-erh base, most unique tea). All four are accessible from the Colima Rd and Gale Ave corridors, and a dedicated boba tour can cover all four in a single afternoon.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            For premium boba beyond what Rowland Heights offers directly, Chicha San Chen in San Gabriel is 15 to 20 minutes west via the 60 freeway and is the best boba shop in the entire SGV. Sunright Tea Studio on the Pasadena side offers the best single-origin specialty teas in the broader east SGV corridor.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba in Rowland Heights, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, authenticity, and value on the Colima Rd and SGV corridor.</p>

          <div className="space-y-8">
            {rowlandHeightsShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba Rowland Heights SGV Little Taipei`}
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Worth Visiting Near Rowland Heights</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Additional SGV shops within 15 to 25 minutes of Rowland Heights that are worth knowing about for a full SGV boba outing.</p>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Colima Rd, Gale Ave, Diamond Bar, and the Broader SGV</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Colima Road Corridor (The Heart of Rowland Heights Boba)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Colima Road between Nogales St and Fullerton Rd is the main boba corridor in Rowland Heights and one of the most concentrated boba strips in Los Angeles County. Half and Half Tea Express, The Alley, and LaTea all have locations accessible from this stretch. The strip malls along Colima Rd also have Taiwanese bakeries, noodle restaurants, and night market food stalls, making it a full destination rather than just a boba stop. Most shops are clustered in the shopping plazas on the south side of Colima Rd east of Nogales St.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Gale Avenue and Fullerton Road</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Gale Ave running north-south and Fullerton Rd at the eastern edge of Rowland Heights both have additional dining and boba options that extend the neighborhood&apos;s coverage. Moge Tee and other SGV shops are accessible from the Gale Ave corridor. The intersection of Gale Ave and Colima Rd is the geographic center of the Rowland Heights commercial district and the best starting point for a boba tour.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Diamond Bar Blvd and Brea Canyon (5 to 10 Min South)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Diamond Bar begins at the southern edge of Rowland Heights, accessible via Diamond Bar Blvd heading south from Colima Rd. TP Tea on Diamond Bar Blvd is the best value boba in this corridor, backed by Ten Ren Tea Company&apos;s 70-year Taiwanese tea pedigree. The Diamond Bar Blvd corridor also has Kung Fu Tea and other chain options accessible from the 57 freeway interchange. For Rowland Heights residents heading south, Diamond Bar adds TP Tea to the day&apos;s boba options without any significant detour.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Hacienda Heights and Industry (Adjacent East)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Hacienda Heights is directly east of Rowland Heights and shares the same residential character, with some boba and food options accessible from the Hacienda Blvd and Colima Rd extensions. The Puente Hills area near the 60 freeway interchange has limited boba but serves as a connecting point to the broader SGV corridor heading west toward Monterey Park. For dedicated boba in this area, Rowland Heights on Colima Rd is the better destination.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Monterey Park and San Gabriel (15 to 20 Min West via 60)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The 60 freeway west from Rowland Heights connects directly to the core SGV cities of Monterey Park and San Gabriel in about 15 to 20 minutes. Chicha San Chen in San Gabriel is the World Tea Championship-winning shop and the highest-rated boba destination in the entire SGV. Xing Fu Tang in Temple City has the freshest wok-cooked pearls in LA. For a full SGV boba outing from Rowland Heights, a westward loop on the 60 through Monterey Park, San Gabriel, and Temple City adds premium destinations that are not available in Rowland Heights itself.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Koreatown via the 60 and 10 Freeways (35 to 45 Min West)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Koreatown is the best boba neighborhood in Los Angeles and is 35 to 45 minutes from Rowland Heights via the 60 freeway west to the 10 freeway west, exiting at Vermont Ave or Western Ave. Tiger Sugar, Happy Lemon, and Machi Machi represent the best brown sugar boba, cheese foam boba, and novelty boba in LA. The Rowland Heights-to-Koreatown drive is longer than from central SGV cities but shorter than from the South Bay or the Valley. For a planned special trip, Koreatown is worth the drive, but for everyday boba, the Colima Rd corridor covers all the essential needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Rowland Heights Boba FAQ</h2>
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
              <p className="text-[#4A5568] text-sm">The complete SGV guide covering Rowland Heights, Monterey Park, Alhambra, Temple City, Pasadena, and Diamond Bar. 15+ shops personally reviewed.</p>
            </Link>
            <Link href="/best-boba-pasadena/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Pasadena</h3>
              <p className="text-[#4A5568] text-sm">Sunright Tea Studio, Chicha San Chen, Xing Fu Tang, and more. The best boba in Pasadena and the east SGV, 15 to 20 minutes west of Rowland Heights.</p>
            </Link>
            <Link href="/best-boba-los-angeles/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Los Angeles</h3>
              <p className="text-[#4A5568] text-sm">The top 25+ boba shops across all of LA County, ranked and reviewed. Covers Koreatown, SGV, Silver Lake, Westwood, and beyond.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
