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
  title: "Best Boba in Venice Beach: Top Bubble Tea Near the Boardwalk, Abbot Kinney, and Marina del Rey | Justin Sather",
  description: "The complete guide to boba near Venice Beach, CA. Venice has limited dedicated boba, but Sawtelle is 10 minutes east and Westwood is 20 minutes northeast. Every shop personally visited, zero sponsorships. Updated 2026.",
};

const faqItems = [
  {
    question: "Is there boba in Venice Beach?",
    answer: "Venice Beach itself has very limited dedicated boba. The Venice boardwalk, Abbot Kinney Blvd, and the Rose Ave corridor are primarily coffee shops, juice bars, and health food culture rather than boba culture. The best nearby boba is in Sawtelle, about 10 to 15 minutes east on Rose Ave or Venice Blvd, where Yi Fang Taiwan Fruit Tea uses real fruit instead of syrup. Westwood Village is 15 to 20 minutes northeast and has Milksha, the first US location of Taiwan's largest fresh milk boba brand, and Sharetea. For a visitor to the Venice boardwalk who wants boba, the honest answer is that a short drive east is necessary.",
  },
  {
    question: "What is the best boba near Venice Beach?",
    answer: "The best boba near Venice Beach is Yi Fang Taiwan Fruit Tea in Sawtelle, about 10 to 15 minutes east via Lincoln Blvd or Rose Ave. Yi Fang uses real fruit rather than flavored syrup, which makes the Pineapple Green Tea and Taiwan Lemon Green Tea genuinely different from standard chain boba. The second best option is Milksha in Westwood Village, about 15 to 20 minutes northeast, which uses fresh milk sourced from Taiwan and no powder, a standard no other Westside shop meets. For premium boba, Boba Guys is accessible from Venice via Lincoln Blvd north and is worth the 20-minute drive for a planned stop.",
  },
  {
    question: "Is there boba on Abbot Kinney Blvd in Venice?",
    answer: "Abbot Kinney Blvd is one of the most popular dining and shopping streets in Los Angeles but does not have a dedicated boba shop. The strip is dominated by independent coffee shops, wine bars, and farm-to-table restaurants that reflect the broader Venice aesthetic. For boba near Abbot Kinney, the closest quality option is Yi Fang Taiwan Fruit Tea in Sawtelle, about 10 to 15 minutes east. The lack of a dedicated boba shop on Abbot Kinney is consistent with Venice's food culture, which tends toward coffee, juice, and health-focused options rather than Asian tea chains.",
  },
  {
    question: "How far is Venice Beach from Koreatown for boba?",
    answer: "Venice Beach is about 13 to 15 miles from the heart of Koreatown, roughly 30 to 40 minutes by car depending on traffic. The most direct route is Lincoln Blvd north to the 10 freeway east, then exit at Vermont Ave or Western Ave. Tiger Sugar, Happy Lemon, Machi Machi, and Xing Fu Tang are all on or near the Koreatown boba corridor between Vermont and Western. The drive from Venice is manageable for a planned boba outing and Koreatown has the best boba concentration in Los Angeles, making it worth the trip for anyone who takes boba seriously.",
  },
  {
    question: "What boba is near Marina del Rey?",
    answer: "Marina del Rey, immediately south of Venice, has the same limited boba scene as Venice itself. The Marina is primarily restaurant row along Via Marina and the waterfront, with no dedicated boba shops in the immediate marina area. For boba near Marina del Rey, Sawtelle is about 15 minutes north on Lincoln Blvd, and Westwood is about 20 minutes northeast. The practical answer for Marina del Rey residents is the same as Venice residents: a short drive north or northeast is necessary for quality boba.",
  },
  {
    question: "What is the best boba near Playa Vista and Silicon Beach?",
    answer: "Playa Vista, sometimes called Silicon Beach for its concentration of tech offices including Google, YouTube, and Snap, is about 5 to 10 minutes from Venice and has some chain options in the Playa Vista Town Center area. For quality boba near Playa Vista, Yi Fang Taiwan Fruit Tea in Sawtelle is about 15 minutes north on Lincoln Blvd, Milksha in Westwood is about 20 minutes northeast, and Boba Guys is accessible in about 20 to 25 minutes via Lincoln north. The Culver City corridor east on Jefferson Blvd also has options. For tech workers in Playa Vista who want boba during a lunch break, Sawtelle is the most practical direction.",
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

const veniceShops = [
  {
    rank: 1,
    name: "Yi Fang Taiwan Fruit Tea",
    city: "Sawtelle (10 to 15 min east via Lincoln Blvd or Rose Ave)",
    image: "/assets/products/yifang_drink.png",
    rating: "4.5",
    price: "$$",
    address: "Sawtelle Blvd, Los Angeles, CA",
    bestFor: "Real fruit instead of syrup, Pineapple Green Tea, Taiwan Lemon Green Tea, genuine differentiation from chain boba",
    mustOrder: "Pineapple Green Tea, Taiwan Lemon Green Tea",
    verdict: "The best boba within a short drive of Venice Beach and the clear first choice for anyone heading east from the boardwalk or Abbot Kinney. Yi Fang uses fresh fruit rather than flavored syrup, which creates a category difference that most Westside boba chains cannot match. The Pineapple Green Tea uses whole pineapple chunks and is refreshing in a way that syrup-based fruit teas are not. The Taiwan Lemon Green Tea uses fresh lemon squeezed into a cold green tea base. For a Venice visitor or Westside resident who wants boba that justifies the drive, Yi Fang on Sawtelle is the destination. Take Lincoln Blvd east or Rose Ave east to Sawtelle Blvd.",
    href: "/yi-fang-taiwan-fruit-tea-review-los-angeles/",
  },
  {
    rank: 2,
    name: "Milksha",
    city: "Westwood Village (15 to 20 min northeast via Lincoln to Wilshire)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.6",
    price: "$$$",
    address: "1009 Broxton Ave, Westwood Village, Los Angeles, CA",
    bestFor: "Fresh milk from Taiwan, no powder, Campus Crush exclusive to this US location, real taro from Dajia",
    mustOrder: "Campus Crush (Westwood exclusive), Taro Milk Tea, Brown Sugar Milk Tea",
    verdict: "The best boba shop on the entire Westside and the destination that most justifies a drive from Venice. Milksha is Taiwan's largest fresh milk boba brand and the Westwood location at 1009 Broxton Ave is the first US location. The no-powder policy and fresh milk sourced from Taiwan create a texture and richness that standard milk tea chains do not achieve. The Campus Crush is a Westwood-exclusive drink, available only at this location worldwide, which gives Venice visitors a reason to make the specific trip. The Taro Milk Tea uses real taro from Dajia, Taiwan rather than the powder standard used everywhere else. Take Lincoln Blvd north to Wilshire Blvd east, then turn north on Westwood Blvd to Broxton Ave.",
    href: "/milksha-westwood-review/",
  },
  {
    rank: 3,
    name: "Sharetea",
    city: "Westwood Village (15 to 20 min northeast)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "1036 Westwood Blvd, Los Angeles, CA",
    bestFor: "Three Mates, reliable chain menu, consistent quality, accessible Westwood anchor",
    mustOrder: "Three Mates, Mango Green Tea",
    verdict: "The most reliable everyday boba option in Westwood Village and the fallback when Milksha has a line. Sharetea is a Taiwanese-founded chain with an international footprint and the Westwood location serves the UCLA student base well with consistent quality and a full menu. The Three Mates combines green tea, oolong, and black tea in a formula that is more complex than a standard milk tea and is the most distinctive item on the menu. Pricing is $6 to $9 per drink. For Venice residents who make regular Westwood trips, Sharetea is the everyday answer and Milksha is the special outing.",
    href: "/sharetea-westwood-review/",
  },
  {
    rank: 4,
    name: "Gong Cha",
    city: "West LA (15 to 20 min northeast via Lincoln Blvd north)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "West Los Angeles, CA",
    bestFor: "High Mountain Oolong base, Brown Sugar Milk Tea with Pearl, consistent global chain accessible from Venice",
    mustOrder: "Brown Sugar Milk Tea with Pearl, Oolong Milk Tea",
    verdict: "The most accessible chain boba option for Venice residents who want something closer than Sawtelle or Westwood. Gong Cha operates in the West LA corridor north of Venice and is reachable via Lincoln Blvd north in about 15 to 20 minutes. The differentiator is the High Mountain Oolong base, which gives standard milk tea drinks more depth and a roasted note that mass-market chains miss. The Brown Sugar Milk Tea with Pearl is the most ordered item and is well executed at $6 to $8. For a Venice resident who wants chain boba without driving to Sawtelle, a nearby Gong Cha is the practical answer.",
    href: "/gong-cha-review-los-angeles/",
  },
  {
    rank: 5,
    name: "Boba Guys",
    city: "West LA / Rideback Ranch (20 min northeast via Lincoln and Venice Blvd)",
    image: "/assets/products/boba_guys_drinks.png",
    rating: "4.5",
    price: "$$$",
    address: "West Los Angeles, CA",
    bestFor: "Organic Straus milk, Strawberry Matcha, Earl Grey Milk Tea, premium ingredients",
    mustOrder: "Strawberry Matcha Milk Tea, Earl Grey Milk Tea",
    verdict: "The best premium boba accessible from Venice and worth the 20-minute drive for a planned outing. Boba Guys uses organic Straus Family Creamery milk and sources ceremonial-grade matcha from Japan, which justifies the $8 to $10 price point. The Strawberry Matcha is the most distinctive item: ceremonial matcha, fresh-cut strawberry puree, and organic milk layered in a way that no chain boba replicates. The Earl Grey Milk Tea uses Assam tea steeped to order. Take Lincoln Blvd north to Venice Blvd east to reach the West LA area. For a Venice visitor who wants the best possible boba experience on the Westside, Boba Guys is the destination.",
    href: "/boba-guys-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Tiger Sugar",
    city: "Koreatown (30 to 40 min east via 10 freeway)",
    image: "/assets/products/tiger_sugar_drink.png",
    rating: "5.0",
    price: "$$",
    address: "Koreatown, Los Angeles",
    bestFor: "Brown Sugar Boba Milk with Cream Mousse, Okinawa black sugar, freshest pearls in LA",
    mustOrder: "Brown Sugar Boba Milk with Cream Mousse",
    verdict: "The best brown sugar boba in Los Angeles and the destination that justifies leaving Venice for a full boba outing. Tiger Sugar uses Okinawa black sugar rather than caramel syrup, cooks pearls in small batches every four hours, and makes the cream mousse in-house. The result is a drink with no equivalent on the Westside or anywhere in the South Bay. From Venice, take Lincoln Blvd north to the 10 freeway east, then exit at Vermont Ave or Western Ave for Koreatown. The drive is 30 to 40 minutes depending on traffic, but Tiger Sugar is worth planning around. For a Venice tourist visiting Los Angeles for a week, adding a Koreatown boba stop to the itinerary is the right call.",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
  },
];

const moreShops = [
  { name: "CoCo Fresh Tea & Juice", city: "Multiple LA locations", note: "The world's largest boba chain by outlet count (4,000+ locations, 40+ countries), with the Avocado Smoothie Milk Tea as a unique item no other chain in LA offers. Value pricing at $4.50 to $7. Read the full review.", href: "/coco-fresh-tea-review-los-angeles/" },
  { name: "Kung Fu Tea", city: "Multiple LA locations", note: "Affordable chain with Kung Fu Milk Tea and Taro Slush as the essential orders, priced at $5 to $7. A dependable option at multiple LA locations when a quick boba stop is the priority. Read the full review.", href: "/kung-fu-tea-review-los-angeles/" },
  { name: "It's Boba Time", city: "Multiple LA locations", note: "The LA original since 1999, with the Thai Milk Tea at 75% sweetness as the essential order. Value pricing at $5 to $7. Multiple Westside and South Bay locations accessible from Venice. Read the full review.", href: "/its-boba-time-review-los-angeles/" },
  { name: "Wanderlust Creamery", city: "Atwater Village (30 to 35 min northeast via 10 east)", note: "LA's most creative ice cream shop, with travel-inspired flavors using real ube, Thai tea, and champurrado. If the outing is headed toward Silver Lake or Atwater Village, Wanderlust is worth adding to the itinerary. Read the full review.", href: "/wanderlust-creamery-review-los-angeles/" },
  { name: "Happy Lemon", city: "SGV Alhambra / Arcadia (40 to 50 min east)", note: "The chain that introduced cheese foam to Los Angeles. Rock Salt and Cheese Oolong is still the defining Korean-style boba order. SGV locations are accessible from Venice via the 10 freeway east. Read the full review.", href: "/happy-lemon-review-los-angeles/" },
  { name: "Chicha San Chen", city: "San Gabriel (40 to 50 min east via 10 freeway)", note: "Multiple World Tea Championship winner. The Four Seasons Tea and Wuyi Mountain Oolong Milk Tea are in a different category from any Westside boba option. Worth knowing about for a full SGV boba day trip from Venice. Read the full review.", href: "/chicha-san-chen-san-gabriel-review/" },
];

export default function BestBobaVenicePage() {
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
                Best Boba in Venice Beach: Top Bubble Tea Near the Boardwalk, Abbot Kinney, and Marina del Rey
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Venice itself has very limited dedicated boba. Sawtelle is 10 minutes east (Yi Fang Taiwan Fruit Tea uses real fruit). Westwood is 15 to 20 minutes northeast (Milksha is the first US location of Taiwan&apos;s largest fresh milk brand). Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">6 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Venice, Sawtelle, Westwood</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/best-boba-los-angeles-feature-full.jpeg"
                alt="Best boba near Venice Beach Los Angeles near Abbot Kinney and Marina del Rey"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Honest Guide to Boba Near Venice</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Venice Beach is one of the most visited destinations in Los Angeles, with the boardwalk, Abbot Kinney Blvd, and the beach drawing millions of visitors and a large local residential base. The food and drink culture in Venice runs toward coffee shops, juice bars, and health food. Dedicated boba shops do not line the Venice boardwalk or Abbot Kinney the way they line Koreatown or the San Gabriel Valley.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            The best boba within a short drive of Venice is on Sawtelle Blvd, about 10 to 15 minutes east via Lincoln Blvd or Rose Ave. Yi Fang Taiwan Fruit Tea uses fresh fruit rather than flavored syrup, which is a genuine differentiator from every chain on the Westside. For premium boba, Westwood Village is 15 to 20 minutes northeast and has Milksha, the first US location of Taiwan&apos;s largest fresh milk boba brand, and Sharetea as the reliable everyday option.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            For a Venice visitor or resident who wants the best possible boba in Los Angeles, the 10 freeway east leads to Koreatown in 30 to 40 minutes. Tiger Sugar, Happy Lemon, Machi Machi, and Xing Fu Tang are all within a short distance of each other in the Koreatown boba corridor. The drive from Venice is longer than from Hollywood or Silver Lake, but Koreatown is the best boba neighborhood in Los Angeles and is worth the trip.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba Near Venice Beach, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, value, and accessibility from Venice Beach.</p>

          <div className="space-y-8">
            {veniceShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba near Venice Beach Los Angeles`}
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Worth Visiting Near Venice</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Additional options accessible from Venice within 20 to 50 minutes that are worth knowing about.</p>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Venice Boardwalk, Abbot Kinney, Sawtelle, Westwood, and Koreatown</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Venice Beach Boardwalk and Windward Ave</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The Venice boardwalk runs along the beach from Washington Blvd north to Venice Boulevard and is one of the most visited strips in Los Angeles. The boardwalk and Windward Ave area has food stalls, smoothie bars, and casual restaurants but no dedicated boba shop. The culture is outdoor, beach, and health-focused. For a visitor standing on the boardwalk who wants boba, the nearest quality option is a 10 to 15 minute drive east toward Sawtelle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Abbot Kinney Blvd</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Abbot Kinney Blvd, often called the coolest block in America, runs from Venice Blvd south to Washington Blvd and is lined with independent boutiques, upscale restaurants, wine bars, and specialty coffee shops. Despite the high foot traffic and food culture, there is no dedicated boba shop on Abbot Kinney. The street leans toward natural wine, cold brew, and farm-to-table rather than Asian tea chains. For boba near Abbot Kinney, the Sawtelle corridor east on Venice Blvd is the nearest quality destination.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Rose Avenue and Lincoln Blvd</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Rose Ave and the Lincoln Blvd corridor in North Venice and the Venice-Santa Monica border have coffee shops and neighborhood restaurants but limited boba. Lincoln Blvd heading north connects Venice to Santa Monica in about 5 to 10 minutes and to Westwood and West LA in 15 to 20 minutes. It is the most direct route north from Venice to Sawtelle or Westwood for boba. The Rose Ave heading east from Lincoln becomes a surface street toward Culver City and eventually the 10 freeway corridor.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Marina del Rey (5 Min South)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Marina del Rey, immediately south of Venice along Via Marina and the marina waterfront, is primarily upscale restaurants and the boating community. No dedicated boba shop operates in the immediate marina area. For Marina del Rey residents, Venice Blvd east connects to Sawtelle and Culver City in 15 to 20 minutes. Lincoln Blvd north leads to Westwood in 20 minutes. The boba situation in Marina del Rey is identical to Venice: a short drive is necessary for quality boba.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Playa Vista and Silicon Beach (5 to 10 Min East)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Playa Vista, which borders Venice to the east along Jefferson Blvd, has a Town Center with restaurants and some chain food options. The tech community at Google, YouTube, and Snap offices in Playa Vista creates lunch demand, and chain boba is accessible in the Town Center area. For quality boba from Playa Vista, Sawtelle is about 15 minutes north on Lincoln Blvd, Culver City is 5 to 10 minutes east on Jefferson Blvd, and the 10 freeway east from Lincoln leads toward Koreatown in 30 to 35 minutes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Sawtelle and Westside (The Best Nearby Boba, 10 to 20 Min East)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Sawtelle Blvd between Olympic Blvd and Santa Monica Blvd is the Westside&apos;s Japantown corridor and the best boba destination within a short drive of Venice. Yi Fang Taiwan Fruit Tea is the anchor shop for anyone who wants real-fruit boba rather than syrup. Westwood Village is 15 to 20 minutes northeast via Lincoln Blvd north to Wilshire Blvd east, where Milksha and Sharetea serve the UCLA student base. For Venice residents who make regular Westside boba runs, this 10 to 20 minute corridor east is the answer.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Koreatown via the 10 Freeway (The Best Boba in LA, 30 to 40 Min East)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Koreatown is the premier boba destination in Los Angeles and is about 30 to 40 minutes from Venice via the 10 freeway east, exiting at Vermont Ave or Western Ave. The Koreatown boba corridor on Olympic Blvd between Vermont and Western has Tiger Sugar, Happy Lemon, Machi Machi, and Xing Fu Tang in a density that the Westside cannot match. For a Venice visitor or resident who wants the best boba in Los Angeles, Koreatown is the destination and the 10 freeway makes it accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Venice Beach Boba FAQ</h2>
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
            <Link href="/best-boba-santa-monica/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba Near Santa Monica</h3>
              <p className="text-[#4A5568] text-sm">The complete guide for boba near the Santa Monica Pier and Third Street Promenade. Sawtelle, Westwood, and the best Westside options.</p>
            </Link>
            <Link href="/best-boba-culver-city/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Culver City</h3>
              <p className="text-[#4A5568] text-sm">The complete guide for boba near Sony Pictures and Amazon Studios. Yi Fang on Sawtelle is 10 minutes north. Koreatown is 20 minutes east via the 10 freeway.</p>
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
