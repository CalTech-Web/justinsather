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
  title: "Best Boba in West Hollywood: Where to Find Bubble Tea Near WeHo and the Sunset Strip | Justin Sather",
  description: "The complete guide to boba in West Hollywood, CA. Koreatown (10 to 15 min east) and Sawtelle (15 min west) are the best nearby options. Tiger Sugar, Happy Lemon, Feng Cha, Yi Fang, and more. All personally visited, zero sponsorships.",
};

const faqItems = [
  {
    question: "What is the best boba near West Hollywood?",
    answer: "The best boba near West Hollywood is in Koreatown, 10 to 15 minutes east via Santa Monica Blvd or Fountain Ave. Tiger Sugar (brown sugar milk tea, wok-cooked pearls), Happy Lemon (Rock Salt and Cheese Oolong, cheese foam originator), and Machi Machi (the only LA shop built entirely around cheese foam) are all in Koreatown and represent the best boba in Los Angeles within a short drive of WeHo. For a different direction, Yi Fang Taiwan Fruit Tea in Sawtelle is 15 minutes west via Santa Monica Blvd and makes real-fruit teas unlike any chain in WeHo. West Hollywood's own commercial corridors, Sunset Strip, Santa Monica Blvd, and Melrose Ave, are dominated by bars, restaurants, and boutiques rather than boba shops.",
  },
  {
    question: "Is there boba on the Sunset Strip?",
    answer: "There is no dedicated boba shop on the Sunset Strip itself. The Sunset Strip (Sunset Blvd between Laurel Canyon and Doheny) is dominated by nightlife venues, hotels, and celebrity-chef restaurants. The closest boba to the Sunset Strip is in the Santa Monica Blvd and Fairfax corridor of West Hollywood, where a few chain options are accessible, and Koreatown (15 to 20 minutes east via Sunset or Santa Monica Blvd) is the nearest quality boba destination.",
  },
  {
    question: "Is there boba on Melrose Ave?",
    answer: "Dedicated boba shops on Melrose Ave are limited. The Melrose corridor in West Hollywood and Hollywood is primarily boutique retail, vintage clothing, and restaurants. The closest quality boba is in Koreatown, 10 to 15 minutes east of the Melrose Ave shopping corridor via Santa Monica Blvd or surface streets. Yi Fang Taiwan Fruit Tea in the Sawtelle area is 15 minutes west along Santa Monica Blvd and is the best option if you are heading west from WeHo.",
  },
  {
    question: "How far is West Hollywood from Koreatown?",
    answer: "West Hollywood is 10 to 15 minutes east of Koreatown by car, depending on traffic and route. The most direct route is Santa Monica Blvd east, which runs directly from WeHo through East Hollywood into Koreatown. Fountain Ave is often faster during peak traffic. The 10 freeway is also accessible from West Hollywood via La Brea south, putting the Koreatown exit roughly 10 minutes away. Tiger Sugar, Happy Lemon, Machi Machi, and Feng Cha are all in Koreatown and represent the best boba in Los Angeles for WeHo residents.",
  },
  {
    question: "What is the best boba for WeHo nightlife?",
    answer: "The most practical late-night boba option for West Hollywood is Koreatown, where several shops along the boba corridor stay open until 11 PM or midnight on weekends. Tiger Sugar and Happy Lemon in Koreatown are the best stops before or after a night on the Sunset Strip or Santa Monica Blvd. It's Boba Time has late-night-friendly hours at its Hollywood and broader LA locations, making it a reliable option for a post-dinner or pre-show boba stop. West Hollywood itself has very limited dedicated boba after 9 PM.",
  },
  {
    question: "What is the best cheap boba near West Hollywood?",
    answer: "The most affordable boba accessible from West Hollywood is CoCo Fresh Tea, which has SGV and Hollywood-area locations with drinks starting around $4.50, and It's Boba Time, which prices most drinks at $5 to $6. In Koreatown, Feng Cha offers Brown Sugar Milk Tea and Oolong Milk Tea with Cheese Foam at competitive prices compared to Tiger Sugar and Happy Lemon. Kung Fu Tea has multiple accessible LA locations and is consistently the most affordable chain within the broader West Hollywood area, with most drinks under $7.",
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

const wehoShops = [
  {
    rank: 1,
    name: "Tiger Sugar",
    city: "Koreatown (10 to 15 min east via Santa Monica Blvd)",
    image: "/assets/products/tiger_sugar_drink.png",
    rating: "5.0",
    price: "$$",
    address: "Koreatown, Los Angeles, CA",
    bestFor: "Brown sugar milk tea, wok-cooked pearls torched to order, definitive WeHo-area brown sugar boba",
    mustOrder: "Brown Sugar Boba Milk Tea, Brown Sugar Boba Milk",
    verdict: "The best single boba stop accessible from West Hollywood and the most distinctive cup of brown sugar milk tea in Los Angeles. Tiger Sugar's tapioca pearls are cooked in small batches and torched to order with a culinary torch, caramelizing a thin layer of brown sugar syrup on the outside of each pearl. The result is a pearl with a slightly crispy exterior, a yielding interior, and a caramelized complexity that no pre-packaged pearl can replicate. The brown sugar stripes layered up the cup before the pearl and milk is added have become one of the most recognizable drinks in LA. 10 to 15 minutes east of West Hollywood via Santa Monica Blvd east into Koreatown. Prices at $7 to $9.",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
  },
  {
    rank: 2,
    name: "Happy Lemon",
    city: "Koreatown (10 to 15 min east)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Koreatown, Los Angeles, CA",
    bestFor: "Rock Salt and Cheese Oolong, cheese foam originator, Roasted Milk Tea, Hawthorn Green Tea",
    mustOrder: "Rock Salt and Cheese Oolong, Roasted Milk Tea with Rock Salt",
    verdict: "The chain that introduced cheese foam to Los Angeles and one of the most historically important boba brands in the region. Happy Lemon's Rock Salt and Cheese series, a savory-sweet cream foam layered over a strong oolong base, became the blueprint that every other cheese foam shop in Los Angeles has followed. The Rock Salt and Cheese Oolong is the best introduction to cheese foam boba for anyone who has not tried it. The Hawthorn Green Tea is the best fruit-adjacent order for those who find milk tea too rich. Multiple Koreatown locations are 10 to 15 minutes east of West Hollywood via Santa Monica Blvd. Prices at $6.50 to $9.50.",
    href: "/happy-lemon-review-los-angeles/",
  },
  {
    rank: 3,
    name: "Feng Cha",
    city: "Koreatown / multiple LA locations (10 to 20 min east)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3",
    price: "$$",
    address: "Koreatown and multiple LA locations",
    bestFor: "Brown Sugar Milk Tea, Oolong Milk Tea with Cheese Foam, Strawberry Milk Tea, wide selection with broad location coverage",
    mustOrder: "Brown Sugar Milk Tea, Oolong Milk Tea with Cheese Foam",
    verdict: "One of the most reliable boba chains in the greater West Hollywood area, with Koreatown and Hollywood-area locations accessible within 10 to 20 minutes east of WeHo. Feng Cha's Brown Sugar Milk Tea is the best accessible brown sugar option short of Tiger Sugar, with a well-balanced sweetness and properly chewy pearls at a lower price. The Oolong Milk Tea with Cheese Foam layers a clean oolong base with a slightly salty cream foam that demonstrates what good cheese foam should taste like without Happy Lemon's intensity. The most affordable cheese foam option accessible from WeHo. Prices at $6 to $8.",
    href: "/feng-cha-review-los-angeles/",
  },
  {
    rank: 4,
    name: "Machi Machi",
    city: "Koreatown (10 to 15 min east)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1",
    price: "$$",
    address: "Koreatown, Los Angeles, CA",
    bestFor: "Cheese foam as the entire brand identity, Brown Sugar Milk Tea with Cheese Foam, Earl Grey Cheese Foam, most distinctive cheese foam experience near West Hollywood",
    mustOrder: "Brown Sugar Milk Tea with Cheese Foam, Earl Grey Milk Tea with Cheese Foam",
    verdict: "The only boba shop in Los Angeles built entirely around cheese foam, and the most distinctive experience available from West Hollywood. Machi Machi's cheese foam is thicker, saltier, and more prominent than the foam at Happy Lemon or Feng Cha. The Brown Sugar Milk Tea with Cheese Foam is the essential order: the salted foam cuts through the sweetness of the brown sugar in a way that keeps the drink balanced through the last sip. The Earl Grey with Cheese Foam is the more interesting order for returning visitors. Located in Koreatown, 10 to 15 minutes east of West Hollywood via Santa Monica Blvd or Fountain Ave. Prices at $7.50 to $9.50.",
    href: "/machi-machi-review-los-angeles/",
  },
  {
    rank: 5,
    name: "Yi Fang Taiwan Fruit Tea",
    city: "Sawtelle / Fairfax (15 min west via Santa Monica Blvd)",
    image: "/assets/products/yifang_drink.png",
    rating: "4.5",
    price: "$$",
    address: "Fairfax District / Sawtelle, Los Angeles, CA",
    bestFor: "Real fresh fruit rather than syrup, Pineapple Green Tea, Taiwan Lemon Green Tea, the most different option from Koreatown",
    mustOrder: "Pineapple Green Tea, Taiwan Lemon Green Tea",
    verdict: "The best option from West Hollywood if you are heading west on Santa Monica Blvd rather than east toward Koreatown. Yi Fang is one of the few boba brands in Los Angeles that uses real fresh fruit rather than syrup or powder in its fruit teas. The Pineapple Green Tea, made with fresh pineapple chunks pressed into the tea, has a natural tartness that no syrup-based fruit tea can match. The Taiwan Lemon Green Tea is the best everyday order for visitors who prefer a lighter, more refreshing cup without milk. Located on the Fairfax corridor, approximately 15 minutes west of WeHo via Santa Monica Blvd. Prices at $6 to $8.",
    href: "/yi-fang-taiwan-fruit-tea-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Gong Cha",
    city: "West LA / multiple LA locations (10 to 20 min)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Multiple West LA and LA locations",
    bestFor: "High Mountain Oolong base differentiator, Brown Sugar Pearl Milk Tea, Oolong Milk Tea, reliable chain closest to WeHo",
    mustOrder: "Brown Sugar Pearl Milk Tea, Oolong Milk Tea",
    verdict: "The most accessible quality boba chain with locations closest to West Hollywood, with West LA and Hollywood-area outposts within 10 to 20 minutes. Gong Cha uses High Mountain Oolong as its base tea, which delivers a more complex, floral flavor than the commodity oolong blends used by most chains. The Brown Sugar Pearl Milk Tea is the best order for visitors who want a WeHo-accessible brown sugar boba without driving to Koreatown. The Milk Foam series is the best value cheese foam option in the area. Prices at $5.50 to $8.50.",
    href: "/gong-cha-review-los-angeles/",
  },
];

const moreShops = [
  { name: "Kung Fu Tea", city: "Multiple LA locations (15 to 25 min)", note: "One of the world's largest boba chains with multiple LA locations accessible from West Hollywood. Kung Fu Milk Tea, Brown Sugar Boba, Taro Slush. Most affordable chain option near WeHo at $5 to $7 per drink.", href: "/kung-fu-tea-review-los-angeles/" },
  { name: "It's Boba Time", city: "Hollywood and multiple LA locations (15 to 20 min east)", note: "LA's original homegrown boba chain since 1999. Brown Sugar Boba Milk Tea, Taro Milk Tea, Matcha Latte. Hollywood location is the most accessible from WeHo. Most drinks under $6.25, the most affordable boba near the Sunset Strip corridor.", href: "/its-boba-time-review-los-angeles/" },
  { name: "Boba Guys", city: "Multiple LA locations (20 to 25 min)", note: "Premium ingredients philosophy. Straus Family Creamery milk, house-made syrups, no corn syrup. Strawberry Matcha, Earl Grey Milk Tea, Horchata Milk Tea. The most premium boba experience accessible from WeHo at $7 to $9.", href: "/boba-guys-review-los-angeles/" },
  { name: "Milksha", city: "Westwood Village (20 to 25 min west via Santa Monica Blvd)", note: "Taiwan's largest fresh milk boba brand, first US location at 1009 Broxton Ave, Westwood Village. No powder, real taro from Dajia Taiwan, Westwood-exclusive Campus Crush drink. Accessible from WeHo via Santa Monica Blvd west toward Westwood.", href: "/milksha-westwood-review/" },
  { name: "Sharetea", city: "Westwood Village (20 to 25 min west via Santa Monica Blvd)", note: "Three Mates signature milk tea, Green Milk Tea, Mango Green Tea. Westwood Village location near UCLA. Accessible from WeHo via Santa Monica Blvd west. Reliable everyday chain option for the westbound WeHo visitor.", href: "/sharetea-westwood-review/" },
  { name: "CoCo Fresh Tea", city: "Hollywood / SGV (20 to 30 min)", note: "World's largest boba chain by outlet count (4,000+ locations). Avocado Smoothie Milk Tea is the unique differentiator. Value pricing from $4.50 to $7, the most affordable everyday option accessible from WeHo.", href: "/coco-fresh-tea-review-los-angeles/" },
];

const neighborhoodAreas = [
  { area: "Sunset Strip (Sunset Blvd, WeHo)", description: "The Sunset Strip has no dedicated boba shops. The corridor is dominated by rock-and-roll history venues, luxury hotels, celebrity-chef restaurants, and nightlife. The closest boba from the Strip is a 10 to 15 minute drive east to Koreatown via Sunset Blvd east or Santa Monica Blvd east." },
  { area: "Santa Monica Blvd and Melrose Ave (WeHo core)", description: "The main WeHo commercial corridors have a handful of chain boba options embedded within shopping strips, but no dedicated boba-first shops with the quality of Koreatown or Sawtelle. The Santa Monica Blvd corridor is your fastest route east to Koreatown (10 to 15 min) or west to Sawtelle and Yi Fang (15 min)." },
  { area: "Koreatown (10 to 15 min east via Santa Monica Blvd or Fountain Ave)", description: "The best boba accessible from West Hollywood. Tiger Sugar, Happy Lemon, Machi Machi, and Feng Cha are all within the Koreatown boba corridor. Santa Monica Blvd east from WeHo runs directly into Koreatown. Fountain Ave is often faster during peak traffic. The Koreatown boba scene is the best in Los Angeles, and from WeHo the drive is short enough to make a dedicated boba trip practical any day of the week." },
  { area: "Hollywood (10 to 20 min east via Fountain Ave or Santa Monica Blvd)", description: "Hollywood's boba scene includes Mixue (6922 Hollywood Blvd, most affordable in LA at $3.99) and Mashti Malone's Persian ice cream (Hollywood Blvd, adjacent destination). Hollywood sits between West Hollywood and Koreatown and is accessible in 10 to 20 minutes east from WeHo." },
  { area: "Sawtelle / Fairfax District (15 min west via Santa Monica Blvd)", description: "If heading west from West Hollywood, the Sawtelle and Fairfax corridor holds Yi Fang Taiwan Fruit Tea, which uses real fresh fruit rather than syrup. Santa Monica Blvd west from WeHo reaches the Fairfax location in approximately 15 minutes, making it the best westbound boba destination from WeHo." },
  { area: "Westwood Village (20 to 25 min west via Santa Monica Blvd)", description: "Milksha and Sharetea Westwood are accessible from WeHo via Santa Monica Blvd west continuing toward Westwood. Milksha (first US location, no-powder fresh milk, Westwood-exclusive Campus Crush drink) is the most distinctive option in the westbound direction." },
];

export default function BestBobaWestHollywoodPage() {
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
                Best Boba in West Hollywood: Where to Find Bubble Tea Near WeHo and the Sunset Strip
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                West Hollywood&apos;s own boba scene is limited. The real destination is Koreatown, 10 to 15 minutes east, where Tiger Sugar, Happy Lemon, and Machi Machi represent the best boba in Los Angeles. Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">6 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">WeHo, Sunset Strip, Melrose</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Best boba in West Hollywood California bubble tea WeHo Sunset Strip"
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
          <p className="text-[#4A5568] leading-relaxed mb-4">
            West Hollywood is one of the most visited neighborhoods in Los Angeles, drawing millions of annual visitors to the Sunset Strip, Melrose Ave boutiques, and Santa Monica Blvd nightlife. But boba is not WeHo&apos;s strong suit. The Sunset Strip and WeHo commercial corridors are built around bars, restaurants, and boutiques, not bubble tea.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            The good news is that the best boba in Los Angeles is very close. Koreatown, 10 to 15 minutes east via Santa Monica Blvd or Fountain Ave, is home to Tiger Sugar, Happy Lemon, Machi Machi, and Feng Cha. That corridor is among the best boba concentrations in the United States. For WeHo residents and visitors, the short drive east is the answer.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            If you are heading west from WeHo, Yi Fang Taiwan Fruit Tea in the Sawtelle and Fairfax area is 15 minutes via Santa Monica Blvd west and makes real-fruit teas unlike any chain shop in Los Angeles. The Westwood Village cluster, Milksha and Sharetea, is 20 to 25 minutes further west for a full Westside afternoon.
          </p>
        </div>
      </section>

      {/* Ranked shops */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-8">Best Boba Near West Hollywood, Ranked</h2>
        <div className="space-y-8">
          {wehoShops.map((shop) => (
            <div key={shop.rank} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-48 h-44 md:h-auto flex-shrink-0">
                  <Image
                    src={shop.image}
                    alt={`${shop.name} boba West Hollywood WeHo Los Angeles`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#2B6CB0] text-white text-xs font-bold px-2 py-1 rounded-full">
                    #{shop.rank}
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-[#1A202C]">{shop.name}</h3>
                      <p className="text-[#718096] text-sm">{shop.city}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <StarRating rating={shop.rating} />
                      <span className="text-sm font-semibold text-[#2D3748]">{shop.rating}/5</span>
                      <span className="text-sm text-[#718096]">{shop.price}</span>
                    </div>
                  </div>
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-3">{shop.verdict}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-[#718096] mb-3">
                    <span><span className="font-semibold text-[#2D3748]">Best for:</span> {shop.bestFor}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-[#718096] mb-4">
                    <span><span className="font-semibold text-[#2D3748]">Must order:</span> {shop.mustOrder}</span>
                  </div>
                  <Link
                    href={shop.href}
                    className="inline-block bg-[#2B6CB0] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#215387] transition-colors"
                  >
                    Full Review &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Neighborhood breakdown */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">West Hollywood Boba by Area</h2>
          <div className="space-y-5">
            {neighborhoodAreas.map((item) => (
              <div key={item.area} className="bg-white border border-gray-100 rounded-xl p-5">
                <h3 className="font-bold text-[#1A202C] mb-2">{item.area}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More worth visiting */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-6">More Shops Worth the Drive</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {moreShops.map((shop) => (
            <div key={shop.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] text-sm mb-1">{shop.name}</h3>
              <p className="text-xs text-[#718096] mb-2">{shop.city}</p>
              <p className="text-xs text-[#4A5568] mb-3 leading-relaxed">{shop.note}</p>
              <Link href={shop.href} className="text-xs text-[#2B6CB0] font-semibold hover:text-[#215387] transition-colors">
                Full Review &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">West Hollywood Boba FAQ</h2>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">More Los Angeles Boba Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Koreatown</h3>
              <p className="text-[#4A5568] text-sm">The complete guide to 30+ boba shops in Koreatown, the best boba neighborhood in Los Angeles and 10 to 15 minutes east of West Hollywood. Tiger Sugar, Happy Lemon, Machi Machi, and more.</p>
            </Link>
            <Link href="/best-boba-hollywood/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Hollywood</h3>
              <p className="text-[#4A5568] text-sm">Mixue Hollywood (most affordable boba in LA at $3.99, right on Hollywood Blvd), Mashti Malone&apos;s Persian ice cream, and the full Hollywood boba guide. 10 to 20 minutes east of WeHo.</p>
            </Link>
            <Link href="/best-boba-los-angeles/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Los Angeles</h3>
              <p className="text-[#4A5568] text-sm">The complete ranked list of the best boba shops across all of LA County. 25+ shops covering every neighborhood from Koreatown and the SGV to Westwood, Hollywood, and the South Bay.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
