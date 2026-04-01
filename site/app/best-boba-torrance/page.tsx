import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const STAR_PATH =
  "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 1 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z";

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
  title: "Best Boba in Torrance: Top Bubble Tea in the South Bay Near Del Amo, Redondo Beach, and Gardena | Justin Sather",
  description: "The complete guide to boba in Torrance, CA. Mochinut and 85 Degrees are the local anchors. It's Boba Time is 5 minutes north in Gardena. Long Beach is 20 minutes east. Every shop personally visited, zero sponsorships. Updated 2026.",
};

const faqItems = [
  {
    question: "What is the best boba in Torrance?",
    answer: "The best boba in Torrance is Mochinut, which has a location in the city and offers both mochi donuts and brown sugar milk tea. For a more traditional boba menu, It's Boba Time in Gardena at 1605 W Redondo Beach Blvd is about 5 to 10 minutes north and is the most reliable everyday option in the South Bay corridor. For premium boba, Boba Guys at the 2nd and PCH shopping center in Long Beach is about 20 minutes east on Pacific Coast Hwy and the best shop within a short drive of Torrance.",
  },
  {
    question: "Is there boba near Del Amo Fashion Center in Torrance?",
    answer: "Yes. The Del Amo Fashion Center area on Hawthorne Blvd in Torrance has limited dedicated boba directly in the mall, but the surrounding shopping corridor has options. Mochinut has a Torrance location in the broader Del Amo and South Bay area. For the best boba near Del Amo, It's Boba Time in Gardena on W Redondo Beach Blvd is about 5 to 10 minutes north of the mall and is the most accessible dedicated boba shop in the immediate area.",
  },
  {
    question: "How far is Torrance from Koreatown for boba?",
    answer: "Torrance is about 20 to 22 miles from the heart of Koreatown, roughly 35 to 45 minutes by car depending on traffic. The most direct route is the 110 freeway north to the 10 freeway east, then exit at Vermont Ave or Western Ave for the Koreatown boba corridor. Tiger Sugar, Happy Lemon, and Machi Machi are all on or near Olympic Blvd between Vermont and Western. The drive from Torrance is longer than from Long Beach or the SGV, but Koreatown has the best boba in Los Angeles and is worth a planned trip.",
  },
  {
    question: "Is there boba near Redondo Beach or Manhattan Beach?",
    answer: "Redondo Beach and Manhattan Beach have limited dedicated boba. The best nearby option is It's Boba Time in Gardena, about 10 to 15 minutes from the Redondo Beach pier and the Manhattan Beach area. For better boba, Torrance or Long Beach are the nearest South Bay destinations with more chain and specialty options. The South Bay beach cities are primarily coffee and surf culture rather than boba culture, so for serious boba, a short drive inland is necessary.",
  },
  {
    question: "What boba shops are in the South Bay near Torrance?",
    answer: "The South Bay boba scene is anchored by Mochinut in Torrance and It's Boba Time in Gardena. Ding Tea has locations in Hawthorne and other South Bay cities accessible from Torrance. Boba Guys at the 2nd and PCH shopping center in Long Beach is the best premium boba within 20 minutes. For a broader selection, the San Gabriel Valley is 35 to 40 minutes east via the 105 freeway and has the densest concentration of high-quality boba shops in Southern California.",
  },
  {
    question: "How far is Long Beach from Torrance for boba?",
    answer: "Long Beach is about 10 to 15 miles east of Torrance, roughly 20 to 25 minutes via Pacific Coast Hwy or the 405 freeway. Boba Guys at the 2nd and PCH shopping center is the best boba shop in Long Beach and the best premium option within a short drive of Torrance. Sunright Tea Studio on Ximeno Ave in Long Beach is the best single-origin tea option. Both are worth the 20-minute drive east when the goal is a quality boba stop.",
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

const torranceShops = [
  {
    rank: 1,
    name: "Mochinut",
    city: "Torrance",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3",
    price: "$$",
    address: "Torrance, CA",
    bestFor: "Ube and matcha mochi donuts, brown sugar milk tea boba, unique concept",
    mustOrder: "Brown Sugar Milk Tea with Boba, Ube Mochi Donut",
    verdict: "The best and most distinctive boba destination in Torrance. Mochinut is a Korean-American concept that pairs mochi donuts with a full boba menu, giving the shop a dual identity that no other spot in the South Bay replicates. The Brown Sugar Milk Tea with boba is the essential order: well-balanced, not overly sweet, with fresh pearls. The ube and matcha mochi donuts are the flagship food item and the reason first-time visitors come. A Torrance location makes this the first stop for any South Bay boba outing.",
    href: "/mochinut-review-los-angeles/",
  },
  {
    rank: 2,
    name: "85 Degrees Bakery",
    city: "Torrance (multiple South Bay locations)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$",
    address: "Torrance, CA",
    bestFor: "Sea salt coffee, tiger bread, milk bun, Taiwanese bakery and drinks",
    mustOrder: "Sea Salt Coffee, Tiger Bread, Milk Bun",
    verdict: "The second essential Torrance stop, with multiple South Bay locations. 85 Degrees is a Taiwanese bakery chain with 1,000+ locations globally and a Torrance-area presence that makes it one of the most accessible spots in the South Bay for boba and specialty drinks. The Sea Salt Coffee is the flagship order: cold espresso base with salted cream foam, less sweet than most boba options and more complex. The Tiger Bread and Milk Bun are the best food items, baked fresh daily. For anyone in Torrance who wants a drink and a pastry rather than a full boba shop experience, 85 Degrees is the answer.",
    href: "/85-degrees-bakery-review-los-angeles/",
  },
  {
    rank: 3,
    name: "It's Boba Time",
    city: "Gardena (5 to 10 min north via PCH)",
    image: "/assets/products/its_boba_time_drink.png",
    rating: "4.1",
    price: "$",
    address: "1605 W Redondo Beach Blvd, Gardena, CA",
    bestFor: "LA original since 1999, Thai Milk Tea, value pricing, South Bay convenience",
    mustOrder: "Thai Milk Tea, Classic Taro Milk Tea",
    verdict: "The best everyday boba option within a short drive of Torrance. It's Boba Time is the Los Angeles original, founded in 1999, and the Gardena location on W Redondo Beach Blvd is the dedicated South Bay anchor for anyone in Torrance, Redondo Beach, or the broader South Bay corridor. The Thai Milk Tea is the essential order at 75% sweetness with tapioca pearls. The drive from central Torrance is 5 to 10 minutes via Pacific Coast Hwy north. Value pricing at $5 to $7 per drink makes it the most practical everyday boba stop in the area.",
    href: "/its-boba-time-gardena/",
  },
  {
    rank: 4,
    name: "Boba Guys",
    city: "Long Beach (2nd and PCH, 20 min east)",
    image: "/assets/products/boba_guys_drinks.png",
    rating: "4.5",
    price: "$$",
    address: "2nd and Pacific Coast Hwy, Long Beach, CA",
    bestFor: "Organic ingredients, Strawberry Matcha, Earl Grey Milk Tea, premium South Bay option",
    mustOrder: "Strawberry Matcha Milk Tea, Earl Grey Milk Tea",
    verdict: "The best premium boba within a short drive of Torrance. Boba Guys at the 2nd and PCH shopping center in Long Beach is about 20 minutes east on Pacific Coast Hwy and is worth the drive for a serious boba outing. The Earl Grey Milk Tea uses Assam tea steeped to order, and the Strawberry Matcha uses ceremonial-grade matcha from Japan. Both drinks justify the $8 to $10 price point. The Belmont Shore location is walkable from 2nd Street with coffee shops, restaurants, and the beach nearby. Take PCH east out of Torrance and Boba Guys is in the 2nd and PCH shopping center on the right.",
    href: "/boba-guys-review-los-angeles/",
  },
  {
    rank: 5,
    name: "Gong Cha",
    city: "Multiple South Bay and LA locations",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Multiple locations near Torrance",
    bestFor: "High Mountain Oolong base, Brown Sugar Milk Tea with Pearl, consistent global chain",
    mustOrder: "Brown Sugar Milk Tea with Pearl, Oolong Milk Tea",
    verdict: "The most widely accessible chain boba option near Torrance, with locations reachable via the South Bay and broader LA corridor. Gong Cha's differentiator is its High Mountain Oolong base, which gives standard milk tea drinks more depth than most chain competitors at the same price. The Brown Sugar Milk Tea with Pearl is the most ordered item. For a Torrance resident who wants consistent, well-made chain boba without driving to Long Beach or the SGV, a nearby Gong Cha is the practical answer at $6 to $8 per drink.",
    href: "/gong-cha-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Tiger Sugar",
    city: "Koreatown (35 to 40 min north via 110)",
    image: "/assets/products/tiger_sugar_drink.png",
    rating: "5.0",
    price: "$$",
    address: "Koreatown, Los Angeles",
    bestFor: "Brown Sugar Boba Milk with Cream Mousse, Okinawa pearls, best brown sugar boba in LA",
    mustOrder: "Brown Sugar Boba Milk with Cream Mousse",
    verdict: "The best brown sugar boba in Los Angeles and the destination that justifies the 35 to 40 minute drive north from Torrance. Tiger Sugar uses Okinawa black sugar rather than caramel syrup, cooks pearls in small batches every four hours, and makes the cream mousse in-house. The result is a drink with no equivalent in Torrance or anywhere in the South Bay. Take the 110 freeway north toward downtown LA, then the 10 freeway east to Vermont Ave or Western Ave for Koreatown. For a special boba outing from Torrance, Tiger Sugar is the destination worth planning around.",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
  },
];

const moreShops = [
  { name: "Meet Fresh", city: "Alhambra / Rowland Heights (35 to 40 min east via 105 to 60)", note: "Taiwanese dessert chain with taro ball combinations, shaved ice, and grass jelly. A different category from boba but worth knowing about if you are heading to the SGV. Read the full review.", href: "/meet-fresh-review-los-angeles/" },
  { name: "CoCo Fresh Tea & Juice", city: "Multiple LA locations", note: "The world's largest boba chain by outlet count (4,000+ locations, 40+ countries), with the Avocado Smoothie Milk Tea as a unique menu item no other chain in LA offers. Value pricing at $4.50 to $7. Read the full review.", href: "/coco-fresh-tea-review-los-angeles/" },
  { name: "Kung Fu Tea", city: "Multiple LA locations", note: "Affordable and accessible chain with Kung Fu Milk Tea and Taro Slush as the essential orders. Priced at $5 to $7 per drink. A dependable option when a quick stop is what the situation calls for. Read the full review.", href: "/kung-fu-tea-review-los-angeles/" },
  { name: "Tastea", city: "Alhambra / West Covina (30 to 35 min east)", note: "Creative specialty drinks and value pricing. The Rose Matcha Milk Tea is the standout. Worth knowing about if you are heading east toward the SGV corridor. Read the full review.", href: "/tastea-review-los-angeles/" },
  { name: "Feng Cha", city: "Multiple LA locations", note: "Brown Sugar Milk Tea and Oolong Milk Tea with Cheese Foam are the essential orders. Feng Cha has 33,000 monthly searches, one of the highest-volume boba keywords in LA. Read the full review.", href: "/feng-cha-review-los-angeles/" },
  { name: "Happy Lemon", city: "SGV Alhambra / Arcadia (35 to 40 min east)", note: "The chain that introduced cheese foam to Los Angeles. Rock Salt and Cheese Oolong is still the defining Koreatown-style boba order. SGV locations are accessible from Torrance via the 105 to the 110 to the 10. Read the full review.", href: "/happy-lemon-review-los-angeles/" },
];

export default function BestBobaTorrancePage() {
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
                Best Boba in Torrance: Top Bubble Tea in the South Bay Near Del Amo, Redondo Beach, and Gardena
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Torrance has Mochinut and 85 Degrees as local anchors. For everyday boba, It&apos;s Boba Time in Gardena is 5 minutes north. For premium boba, Boba Guys in Long Beach is 20 minutes east. Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">6 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Torrance, Gardena, Long Beach</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/best-boba-los-angeles-feature-full.jpeg"
                alt="Best boba in Torrance South Bay near Del Amo Fashion Center and Redondo Beach"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Honest Guide to Boba in Torrance</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Torrance is one of the largest cities in the South Bay, with 150,000 residents, a major commercial hub at Del Amo Fashion Center, and one of the largest Japanese-American communities in Southern California. The city has strong dining in the Old Town Torrance corridor on Sartori Ave and the broader Hawthorne Blvd and PCH shopping areas. Dedicated boba is present but limited compared to Koreatown or the San Gabriel Valley.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            The best boba actually in Torrance is Mochinut, a Korean-American concept with both mochi donuts and a boba menu that no other South Bay shop replicates. For a more traditional everyday boba stop, It&apos;s Boba Time in Gardena at 1605 W Redondo Beach Blvd is 5 to 10 minutes north via PCH and serves the South Bay corridor well.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            For serious boba, two directions open up from Torrance. East on PCH leads to Long Beach in about 20 minutes, where Boba Guys at the 2nd and PCH shopping center is the best premium boba in the South Bay. North on the 110 freeway leads to downtown LA and Koreatown in about 35 to 40 minutes, where Tiger Sugar, Happy Lemon, and Machi Machi represent the best boba in Los Angeles.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba Near Torrance, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, value, and accessibility from Torrance.</p>

          <div className="space-y-8">
            {torranceShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba near Torrance South Bay Los Angeles`}
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Worth Visiting Near Torrance</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Additional options accessible from Torrance within 20 to 40 minutes that are worth knowing about.</p>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Old Town Torrance, Del Amo, Gardena, Long Beach, and Koreatown</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Old Town Torrance and Carson Street</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Old Town Torrance, centered around Sartori Ave and El Prado Ave, is the historic heart of the city and has independent restaurants and cafes. The area does not have a dedicated boba corridor, but Mochinut and other Torrance area shops serve the Old Town residential base. For anyone in Old Town Torrance, the nearest dedicated boba is in the broader Torrance commercial area or a short drive north to Gardena on PCH.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Del Amo Fashion Center and Hawthorne Blvd</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Del Amo Fashion Center is one of the largest malls in the United States and the main commercial anchor of Torrance. The Hawthorne Blvd corridor around Del Amo has chain restaurants and food court options, but dedicated boba is limited. The broader shopping area around the mall has the most foot traffic in Torrance and is the most likely place to find chain boba options including Gong Cha and CoCo Fresh Tea. For anything better than a food court drink, Mochinut is the Torrance destination.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Torrance and Gardena Border (W Redondo Beach Blvd / PCH Corridor)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The Torrance-Gardena border area along W Redondo Beach Blvd and the PCH corridor is the best boba access point for most Torrance residents. It&apos;s Boba Time in Gardena at 1605 W Redondo Beach Blvd is 5 to 10 minutes from the heart of Torrance and is the most practical everyday boba stop in the immediate area. The shopping center on W Redondo Beach Blvd also has restaurants and other food options. This is the South Bay boba corridor for Torrance, Redondo Beach, and Gardena residents.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">South Bay Beach Cities (Redondo Beach, Manhattan Beach, Hermosa Beach)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The South Bay beach cities immediately south and west of Torrance, including Redondo Beach, Manhattan Beach, and Hermosa Beach, have very limited dedicated boba. These cities are primarily coffee, surf, and health food culture rather than boba culture. For residents of these cities, Torrance is the nearest boba destination. For serious boba, the drive north to Gardena or east to Long Beach is the practical answer.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Long Beach via Pacific Coast Hwy (The South Bay Premium Option, 20 Min East)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Pacific Coast Hwy heading east out of Torrance leads to Long Beach in about 20 minutes. Boba Guys at the 2nd and PCH shopping center is the best premium boba in the South Bay and worth the drive for a planned boba stop. Sunright Tea Studio on Ximeno Ave in Long Beach is the best single-origin tea option in the area. Both shops are in the Belmont Shore and East Long Beach area, which also has walkable dining and the beach nearby.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Koreatown via the 110 Freeway (The Best Boba in LA, 35 to 40 Min North)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Koreatown is the premier boba destination in Los Angeles and is about 35 to 40 minutes from Torrance via the 110 freeway north to downtown LA, then the 10 freeway east to Vermont Ave or Western Ave. The Koreatown boba corridor on Olympic Blvd between Vermont and Western has Tiger Sugar, Happy Lemon, and Machi Machi, a concentration with no equivalent anywhere in the South Bay. The drive from Torrance is longer than from most LA neighborhoods, but for a special boba outing, Koreatown is worth the trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Torrance Boba FAQ</h2>
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
            <Link href="/best-boba-long-beach/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Long Beach</h3>
              <p className="text-[#4A5568] text-sm">Boba Guys at 2nd and PCH is the best premium boba in the South Bay, 20 minutes east of Torrance. The complete Long Beach guide with 4 ranked shops.</p>
            </Link>
            <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Koreatown</h3>
              <p className="text-[#4A5568] text-sm">The best boba neighborhood in Los Angeles, 35 to 40 minutes north via the 110. Tiger Sugar, Happy Lemon, and Machi Machi in one corridor.</p>
            </Link>
            <Link href="/best-boba-los-angeles/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Los Angeles</h3>
              <p className="text-[#4A5568] text-sm">The definitive citywide ranking of the best boba shops across all of LA County. 25+ shops ranked and reviewed.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
