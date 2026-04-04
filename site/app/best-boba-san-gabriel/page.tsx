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
  title: "Best Boba in San Gabriel: Complete Guide to Chicha San Chen and the SGV's Best Block | Justin Sather",
  description: "The complete guide to boba in San Gabriel, CA. Chicha San Chen (World Tea Championship winner, 5/5), Sunright Tea Studio, 85 Degrees Bakery, and more. San Gabriel Square is the best boba block in the SGV. All shops personally visited, zero sponsorships.",
};

const faqItems = [
  {
    question: "What is the best boba in San Gabriel?",
    answer: "Chicha San Chen is the best boba in San Gabriel by a significant margin and one of the best boba shops in all of Los Angeles. The shop earned a World Tea Championship award and sources its tea leaves from specific growing regions, including Four Seasons Tea from Mingjian Township and Wuyi Mountain Oolong. The Four Seasons Tea is the essential order, a floral and aromatic oolong with a complexity that standard milk teas cannot match. Sunright Tea Studio in neighboring Rosemead is the second-best option, using Sun Moon Lake black tea sourced directly from Sun Moon Lake in Taiwan.",
  },
  {
    question: "Where is San Gabriel Square and why is it important for boba?",
    answer: "San Gabriel Square, also known as Focus Plaza, is located at 140 W Valley Blvd in San Gabriel, CA 91776. It is one of the premier Asian food and retail destinations in Los Angeles County, with dozens of restaurants, specialty food shops, and boba cafes concentrated in a single walkable complex. San Gabriel Square is considered the commercial heart of the San Gabriel boba scene and the anchor of the Valley Blvd food corridor between Alhambra and Temple City. Chicha San Chen is located in the San Gabriel area, and San Gabriel Square is the logical starting point for any San Gabriel boba visit.",
  },
  {
    question: "How does San Gabriel boba compare to Koreatown boba?",
    answer: "San Gabriel and Koreatown represent two distinct regional boba traditions. San Gabriel and the broader SGV are rooted in Taiwanese and Cantonese boba culture, with an emphasis on high-quality tea bases, traditional preparations, and shops that source specific tea varietals like Four Seasons oolong or Sun Moon Lake black tea. Koreatown boba tends toward Korean-influenced flavors, brown sugar drinks, and cheese foam innovations. San Gabriel has Chicha San Chen, the most technically accomplished boba shop in LA for pure tea quality. Koreatown has Tiger Sugar, the best brown sugar boba in LA. Both are worth visiting and serve different purposes on a boba tour.",
  },
  {
    question: "Is San Gabriel worth visiting just for boba?",
    answer: "Yes, primarily because Chicha San Chen is there. Chicha San Chen is a World Tea Championship-winning shop that sources championship-grade tea leaves from specific growing regions in Taiwan and China. The Four Seasons Tea and Wuyi Mountain Oolong are drinks that exist nowhere else in Los Angeles at this quality level. San Gabriel also has San Gabriel Square, one of the best Asian food destinations in LA County, which makes a boba visit easy to combine with dim sum, Sichuan cuisine, or Taiwanese food. A Chicha San Chen visit combined with a Sunright Tea Studio stop in adjacent Rosemead makes for the best pure tea-focused boba afternoon in the entire SGV.",
  },
  {
    question: "What should I order at Chicha San Chen in San Gabriel?",
    answer: "The Four Seasons Tea is the essential order at Chicha San Chen. It uses Four Seasons oolong from Mingjian Township, Taiwan, brewed in the Taiwanese gong fu style and served with a light sweetener that enhances the tea without masking the floral complexity. The Wuyi Mountain Oolong is the second essential order, a roasted oolong from the Fujian Province with a mineral depth that is completely different from the Four Seasons. Both drinks are available with or without toppings. The tapioca pearls at Chicha San Chen are made fresh and cooked to the precise chewiness that distinguishes hand-crafted pearls from the machine-produced variety. Order without too much sweetener to let the tea quality come through.",
  },
  {
    question: "How far is San Gabriel from Alhambra and Monterey Park?",
    answer: "San Gabriel borders Alhambra directly to the east and Monterey Park to the northwest, with both cities accessible via Valley Blvd in under 10 minutes. Alhambra is 5 to 10 minutes west of central San Gabriel via Valley Blvd. Monterey Park is 5 to 10 minutes northwest via San Gabriel Blvd or Garfield Ave. Temple City, where Xing Fu Tang is located, is 10 to 15 minutes east via Valley Blvd. Rosemead, where Sunright Tea Studio has a location, borders San Gabriel to the south. The entire SGV boba cluster centered on San Gabriel, Alhambra, Monterey Park, and Temple City can be covered in a single afternoon trip from Downtown LA via the 10 freeway.",
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

const sanGabrielShops = [
  {
    rank: 1,
    name: "Chicha San Chen",
    city: "San Gabriel",
    image: "/assets/products/chicha_san_chen_drink.png",
    rating: "5.0",
    price: "$$$",
    address: "San Gabriel, CA",
    bestFor: "World Tea Championship tea, Four Seasons oolong, Wuyi Mountain Oolong, championship-grade sourcing",
    mustOrder: "Four Seasons Tea, Wuyi Mountain Oolong",
    verdict: "The best boba in San Gabriel and one of the best in all of Los Angeles. Chicha San Chen earned a World Tea Championship award and sources its tea from specific championship-grade growing regions: Four Seasons oolong from Mingjian Township, Taiwan and Wuyi Mountain Oolong from Fujian Province, China. The Four Seasons Tea is the essential order, a floral and aromatic oolong brewed to extract the layered complexity that distinguishes premium tea from commodity powder. The fresh-cooked tapioca pearls are among the best in the SGV. Prices at $8 to $11. This is the shop that makes San Gabriel worth a dedicated boba trip from anywhere in Los Angeles.",
    href: "/chicha-san-chen-san-gabriel-review/",
  },
  {
    rank: 2,
    name: "Sunright Tea Studio",
    city: "Rosemead / Pasadena (adjacent to San Gabriel)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.6",
    price: "$$",
    address: "Rosemead / Pasadena, CA",
    bestFor: "Sun Moon Lake black tea, Alishan oolong, single-origin Taiwanese tea sourcing, best everyday specialty tea",
    mustOrder: "Sun Moon Lake Milk Tea, Alishan Oolong Milk Tea",
    verdict: "The best specialty tea boba shop in the SGV outside of Chicha San Chen. Sunright Tea Studio is built around Sun Moon Lake black tea sourced directly from Sun Moon Lake in Nantou County, Taiwan, the most prestigious black tea growing region in the country. The Sun Moon Lake Milk Tea is the defining drink, a robust and malty black tea with a natural sweetness that eliminates the need for added sugar. The Alishan Oolong, sourced from the Alishan mountain range in Taiwan, is the second essential order. Rosemead borders San Gabriel directly to the south, making Sunright a natural second stop on any San Gabriel boba outing. Prices at $7 to $10.",
    href: "/sunright-tea-studio-review-los-angeles/",
  },
  {
    rank: 3,
    name: "85 Degrees Bakery",
    city: "Arcadia / SGV (15 min east)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$",
    address: "Arcadia / SGV, CA",
    bestFor: "Sea salt coffee, tiger bread, milk buns, Taiwanese bread, egg tart, pastry and boba combo",
    mustOrder: "Sea Salt Coffee, Tiger Bread, Milk Bun",
    verdict: "The best Taiwanese bakery chain in Los Angeles and the essential companion stop to any SGV boba tour. 85 Degrees is built around its sea salt coffee, a cold brew layered with sea salt cream that has become one of the defining drinks of the SGV food scene. The tiger bread and milk buns are baked fresh throughout the day and are unlike anything at Western bakeries. The egg tart is the best in LA outside of dedicated Hong Kong bakeries. At $3 to $6 per item, 85 Degrees is the most affordable quality stop on an SGV boba day. Multiple Arcadia locations are 10 to 15 minutes east of central San Gabriel via Valley Blvd. Worth combining with a Chicha San Chen visit as an afternoon bakery and boba double.",
    href: "/85-degrees-bakery-review-los-angeles/",
  },
  {
    rank: 4,
    name: "Gong Cha",
    city: "Multiple SGV and San Gabriel area locations",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1",
    price: "$$",
    address: "San Gabriel area, CA",
    bestFor: "High Mountain Oolong base, Brown Sugar Milk Tea with Pearl, reliable chain quality across all SGV locations",
    mustOrder: "Brown Sugar Milk Tea with Pearl, Milk Foam Oolong Tea",
    verdict: "The most reliable chain option in the San Gabriel area. Gong Cha uses High Mountain Oolong as its standard tea base, which has a more complex, less bitter flavor than the generic black teas used by most value chains. The Brown Sugar Milk Tea with Pearl is the bestseller and executes consistently across every location. The Milk Foam Oolong is the best introduction to the High Mountain Oolong difference. Multiple SGV locations make it easy to find near San Gabriel Square or Valley Blvd. Prices at $6.50 to $9. When Chicha San Chen is at capacity or you need a quick stop, Gong Cha is the right call in the San Gabriel area.",
    href: "/gong-cha-review-los-angeles/",
  },
  {
    rank: 5,
    name: "CoCo Fresh Tea & Juice",
    city: "Alhambra / Multiple SGV locations (5 to 10 min west)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1",
    price: "$",
    address: "Alhambra / SGV, CA",
    bestFor: "Avocado Smoothie Milk Tea, passion fruit green tea, value pricing at $4.50 to $7, world's largest boba chain",
    mustOrder: "Avocado Smoothie Milk Tea, Passion Fruit Green Tea with Aloe",
    verdict: "The world's largest boba chain by outlet count, with multiple locations accessible from San Gabriel via the Alhambra and Monterey Park corridors. CoCo Fresh Tea is built on freshly brewed tea bases, consistent preparation, and the Avocado Smoothie Milk Tea, a unique drink that no other major chain offers. Prices at $4.50 to $7 make it the best value option in the SGV. The Passion Fruit Green Tea with Aloe is the best fruit tea on the menu. CoCo is the right choice when you want a reliable, affordable everyday drink before or after a Chicha San Chen visit, or when you are exploring the Valley Blvd corridor between San Gabriel and Alhambra.",
    href: "/coco-fresh-tea-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Happy Lemon",
    city: "Alhambra / Arcadia (5 to 10 min west or east)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Alhambra / Arcadia, CA",
    bestFor: "Rock Salt and Cheese Oolong, cheese foam originator, Roasted Milk Tea, Hawthorn Green Tea",
    mustOrder: "Rock Salt and Cheese Oolong, Roasted Milk Tea with Rock Salt",
    verdict: "The chain that introduced cheese foam to Los Angeles and one of the most historically important boba shops in the SGV. Happy Lemon's signature is the Rock Salt and Cheese series, a savory-sweet cream foam layered over a strong oolong base. The Alhambra location is 5 to 10 minutes west of central San Gabriel and the Arcadia locations are similarly accessible east via Valley Blvd. For SGV visitors who want to compare Koreatown-style cheese foam innovations with San Gabriel's premium tea traditions in a single afternoon, Happy Lemon is the natural pairing with Chicha San Chen. Prices at $6.50 to $9.50.",
    href: "/happy-lemon-review-los-angeles/",
  },
];

const moreShops = [
  { name: "Xing Fu Tang", city: "Temple City (10 to 15 min east via Valley Blvd)", note: "Fresh wok-cooked pearls in small batches, Tiger Milk Tea, Brown Sugar Milk. The best tapioca pearls in the SGV and the essential stop on a Temple City addition to a San Gabriel boba day.", href: "/xing-fu-tang-review-los-angeles/" },
  { name: "The Alley", city: "Arcadia (15 min east via Valley Blvd)", note: "Deerioca crystal tapioca made from cassava, lighter and chewier than standard pearls. Roasted Oolong Milk Tea with Deerioca is the most distinctive drink in Arcadia.", href: "/the-alley-boba-review-los-angeles/" },
  { name: "Meet Fresh", city: "Monterey Park (5 to 10 min northwest)", note: "Taiwanese taro ball desserts, grass jelly, Q Tofu. The best Taiwanese dessert hybrid stop adjacent to San Gabriel, worth combining with a Chicha San Chen visit.", href: "/meet-fresh-review-los-angeles/" },
  { name: "Moge Tee", city: "Rowland Heights / SGV (20 to 25 min east via 60)", note: "Yunnan Pu-erh tea base, earthy and aged unlike any other boba shop in LA. The Dirty Pu-erh is the essential order for anyone who wants something completely different from standard SGV oolongs.", href: "/moge-tee-review-los-angeles/" },
  { name: "Half and Half Tea Express", city: "Rowland Heights (20 to 25 min east via 60)", note: "Cold-brew tea technique, Top 1 Milk Tea, Sea Salt Cheese Tea. The first stop on the Colima Rd corridor for visitors heading east from San Gabriel toward Little Taipei.", href: "/half-and-half-tea-express-review-los-angeles/" },
  { name: "Tiger Sugar", city: "Koreatown (20 to 25 min west via 10 freeway)", note: "The best brown sugar boba in Los Angeles. Fresh pearls every 4 hours, theatrical torching, 5/5. The logical westward extension of any San Gabriel boba tour to contrast SGV tea traditions with Koreatown brown sugar culture.", href: "/tiger-sugar-review-koreatown-boba-bubble-tea/" },
];

export default function BestBobaSanGabrielPage() {
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
                Best Boba in San Gabriel: Complete Guide to Chicha San Chen and the SGV&apos;s Best Block
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                San Gabriel is home to Chicha San Chen, the World Tea Championship-winning boba shop and the highest-rated shop in the entire SGV. San Gabriel Square on Valley Blvd is the best single block for boba and Asian food in Los Angeles County. Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">6 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Valley Blvd, San Gabriel Square, Mission District</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/products/chicha_san_chen_drink.png"
                alt="Best boba in San Gabriel California SGV bubble tea Chicha San Chen"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Honest Guide to Boba in San Gabriel</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            San Gabriel is where the best boba in the San Gabriel Valley is made. Chicha San Chen, a World Tea Championship-winning shop that sources championship-grade tea leaves from specific growing regions in Taiwan and China, anchors the city&apos;s boba scene. The Four Seasons oolong from Mingjian Township and the Wuyi Mountain Oolong from Fujian Province are the best teas available anywhere in Los Angeles, at any price.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            San Gabriel Square, also known as Focus Plaza, at 140 W Valley Blvd is the commercial heart of the San Gabriel boba scene and one of the most important Asian food destinations in LA County. The surrounding Valley Blvd corridor connects San Gabriel directly to Alhambra 5 to 10 minutes west, Monterey Park 5 to 10 minutes northwest, and Temple City 10 to 15 minutes east. A single afternoon starting in San Gabriel can cover the best boba in the entire central SGV corridor.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            San Gabriel is 15 to 20 minutes east of Downtown LA via the 10 freeway, making it more accessible from central LA than most SGV destinations. Rosemead, where Sunright Tea Studio has a location, borders San Gabriel directly to the south. Together, Chicha San Chen and Sunright represent the highest concentration of specialty tea-focused boba in Los Angeles within a 10-minute radius of each other.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba in San Gabriel, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, distinctiveness, and value along the Valley Blvd, San Gabriel Blvd, and Las Tunas Dr corridors.</p>

          <div className="space-y-8">
            {sanGabrielShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba San Gabriel SGV California`}
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Worth Visiting Near San Gabriel</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Additional shops within 10 to 25 minutes of San Gabriel that are worth knowing about for a full SGV boba outing.</p>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Valley Blvd, San Gabriel Square, and the SGV Grid</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Valley Boulevard and San Gabriel Square (The Center of SGV Boba)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Valley Boulevard running east-west through San Gabriel is the commercial spine of the central SGV and the best single street for boba and Asian food in Los Angeles County. San Gabriel Square, also known as Focus Plaza, at 140 W Valley Blvd is the anchor shopping center, with dozens of Asian restaurants, bakeries, and boba cafes within a single walkable complex. Chicha San Chen is in the San Gabriel area on this corridor. The Valley Blvd corridor connects directly west to Alhambra (5 to 10 min) and east to Temple City and Arcadia (10 to 15 min), making it the axis of the entire central SGV boba network.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">San Gabriel Blvd and Las Tunas Drive (The Main Street Grid)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                San Gabriel Blvd running north-south is the main spine of the city and the access road from the 10 freeway to the north. Las Tunas Drive in the northern part of San Gabriel is a secondary commercial corridor with additional food and boba options. The intersection of San Gabriel Blvd and Valley Blvd is the geographic center of the city and the best starting point for first-time visitors. From here, San Gabriel Square is a few blocks west on Valley Blvd and the 10 freeway is a few minutes south on San Gabriel Blvd.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Rosemead (Adjacent South, 5 to 10 Min)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Rosemead borders San Gabriel directly to the south and shares the same Asian food corridor character. Sunright Tea Studio has a Rosemead location that is the natural second stop after Chicha San Chen on a San Gabriel boba visit. Rosemead is accessible from San Gabriel via Garfield Ave or San Gabriel Blvd heading south. The combination of Chicha San Chen in San Gabriel and Sunright Tea Studio in Rosemead gives tea-focused boba visitors the two best specialty tea shops in the entire SGV within a 10-minute radius of each other.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Alhambra and Monterey Park (5 to 10 Min West and Northwest)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Alhambra borders San Gabriel directly to the west and is the most accessible SGV boba destination from Downtown LA via the 10 freeway. Xing Fu Tang, Happy Lemon, Meet Fresh, and LaTea are all in Alhambra and accessible from San Gabriel in under 10 minutes via Valley Blvd. Monterey Park borders San Gabriel to the northwest via San Gabriel Blvd, with Meet Fresh, Happy Lemon, and 85 Degrees Bakery all within reach. An Alhambra-to-San Gabriel boba tour following Valley Blvd covers the core of the western SGV boba corridor in a single afternoon.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Temple City and Arcadia (10 to 15 Min East)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Temple City borders San Gabriel to the east and is where Xing Fu Tang has its primary SGV location. Temple City to San Gabriel via Valley Blvd is 10 to 15 minutes, making a Chicha San Chen plus Xing Fu Tang double the two best individual shop visits in the entire SGV in a single afternoon. Arcadia, just north of Temple City via Baldwin Ave, has The Alley (Deerioca crystal tapioca), 85 Degrees Bakery (sea salt coffee, tiger bread), and Happy Lemon. A full San Gabriel-to-Temple City-to-Arcadia tour covers the best boba across three adjacent SGV cities in under two hours.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Downtown LA and Koreatown via the 10 Freeway (15 to 25 Min West)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                San Gabriel is 15 to 20 minutes east of Downtown LA via the 10 freeway, making it more accessible from central LA than most SGV destinations. The 10 freeway eastbound from DTLA leads directly to the San Gabriel Blvd and Del Mar Ave exits in the heart of the city. Koreatown, where Tiger Sugar and the rest of the Koreatown boba scene are located, is 20 to 25 minutes west of San Gabriel via the 10 freeway. A San Gabriel boba afternoon can be extended westward to Koreatown for a direct comparison between the SGV&apos;s premium tea traditions and Koreatown&apos;s brown sugar and cheese foam innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">San Gabriel Boba FAQ</h2>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">More SGV Boba Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/best-boba-alhambra/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Alhambra</h3>
              <p className="text-[#4A5568] text-sm">Adjacent to San Gabriel to the west. Xing Fu Tang, Happy Lemon, Meet Fresh, and LaTea on the Valley Blvd corridor. The historic birthplace of LA boba culture, 5 to 10 minutes from San Gabriel.</p>
            </Link>
            <Link href="/best-boba-monterey-park/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Monterey Park</h3>
              <p className="text-[#4A5568] text-sm">Adjacent to San Gabriel to the northwest. Meet Fresh, Happy Lemon, 85 Degrees Bakery. First US city with an Asian-American majority, 5 to 10 minutes from San Gabriel.</p>
            </Link>
            <Link href="/best-boba-arcadia/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Arcadia</h3>
              <p className="text-[#4A5568] text-sm">The eastern SGV anchor: The Alley (Deerioca crystal tapioca), 85 Degrees Bakery, and the Temple City-to-Arcadia boba loop. 15 to 20 minutes north of San Gabriel via Baldwin Ave.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
