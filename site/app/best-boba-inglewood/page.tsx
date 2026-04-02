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
  title: "Best Boba Near Inglewood: Top Bubble Tea Near SoFi Stadium, Kia Forum, and LAX | Justin Sather",
  description: "The complete guide to boba near Inglewood, CA. It's Boba Time is 10 minutes north in Gardena. Tiger Sugar and Koreatown are 15 to 20 minutes northeast. Every shop personally visited, zero sponsorships. Updated 2026.",
};

const faqItems = [
  {
    question: "What is the best boba near SoFi Stadium in Inglewood?",
    answer: "The best boba near SoFi Stadium is It's Boba Time in Gardena, about 10 minutes north on W Redondo Beach Blvd. It's Boba Time is the Los Angeles original, founded in 1999, and the Gardena location is the nearest dedicated boba shop to the Hollywood Park entertainment complex. For premium boba before or after a game or concert at SoFi Stadium, Koreatown is about 15 to 20 minutes northeast on the 405 to the 110, where Tiger Sugar, Happy Lemon, and Machi Machi are concentrated on the Olympic Blvd corridor. Both are practical depending on how much time you have before the event.",
  },
  {
    question: "Is there boba near Kia Forum in Inglewood?",
    answer: "Yes. The closest boba to Kia Forum is It's Boba Time in Gardena at 1605 W Redondo Beach Blvd, about 10 minutes north. For a pre-show or post-show boba run from the Kia Forum area, this is the most practical dedicated boba shop within a short drive. Koreatown is 15 to 20 minutes northeast via the 405 north to the 110 north, and has the best concentrated boba scene in Los Angeles. Tiger Sugar on Olympic Blvd in Koreatown is worth planning around if the event schedule allows time for the round trip.",
  },
  {
    question: "What is the best boba near LAX airport?",
    answer: "The best boba near LAX is It's Boba Time in Gardena at 1605 W Redondo Beach Blvd, about 10 minutes from the airport via the 405 south or W Century Blvd. For travelers with a layover or time before a flight, this is the most accessible dedicated boba shop close to LAX. Koreatown is about 15 to 20 minutes northeast of the airport depending on traffic. For anyone flying in or out of LAX who wants more than a food court option, the Gardena stop or a quick run to Koreatown are both practical depending on available time.",
  },
  {
    question: "How far is Inglewood from Koreatown for boba?",
    answer: "Inglewood is about 8 to 10 miles from the Koreatown boba corridor, roughly 15 to 20 minutes by car depending on traffic. The most direct route is the 405 freeway north to the 110 north, then exit at Washington Blvd or Olympic Blvd for Koreatown. Tiger Sugar, Happy Lemon, and Machi Machi are all on or near Olympic Blvd between Vermont Ave and Western Ave. The drive from Inglewood is shorter than from the South Bay beach cities, making Koreatown one of the most accessible premium boba destinations from the Hollywood Park and Forum area.",
  },
  {
    question: "Is there boba in the Hollywood Park area near SoFi Stadium?",
    answer: "The Hollywood Park entertainment complex, which includes SoFi Stadium, Kia Forum, YouTube Theater, and the surrounding retail and dining development, does not have a dedicated boba shop inside the complex. The surrounding Inglewood area has limited dedicated boba. The nearest dedicated boba shop is It's Boba Time in Gardena, about 10 minutes north on W Redondo Beach Blvd. For events at SoFi or the Forum, plan to grab boba in Gardena before arriving or in Koreatown after, rather than looking for options inside the Hollywood Park complex itself.",
  },
  {
    question: "What is the closest boba to LAX from the terminals?",
    answer: "From the LAX terminals, the closest dedicated boba is It's Boba Time in Gardena at 1605 W Redondo Beach Blvd, about 10 minutes by rideshare or car via the 405 south to W Redondo Beach Blvd. The LAX central area and Century Blvd corridor are primarily airport hotels and car rental facilities with limited food options beyond chain fast food. For a genuine boba stop before or after a flight, Gardena is the practical answer. Take the 405 south from the 105 interchange or exit W Century Blvd east and then south on Crenshaw to the Gardena corridor.",
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

const inglewoodShops = [
  {
    rank: 1,
    name: "It's Boba Time",
    city: "Gardena (10 min north via W Redondo Beach Blvd)",
    image: "/assets/products/its_boba_time_drink.png",
    rating: "4.1",
    price: "$",
    address: "1605 W Redondo Beach Blvd, Gardena, CA",
    bestFor: "LA original since 1999, Thai Milk Tea, value pricing, nearest dedicated boba to SoFi and LAX",
    mustOrder: "Thai Milk Tea, Classic Taro Milk Tea",
    verdict: "The closest dedicated boba shop to Inglewood, SoFi Stadium, Kia Forum, and LAX. It's Boba Time is the Los Angeles original, founded in 1999, and the Gardena location on W Redondo Beach Blvd is the go-to South Bay boba anchor for everyone from Inglewood to Redondo Beach. The Thai Milk Tea at 75% sweetness with tapioca pearls is the essential order. Value pricing at $5 to $7 per drink makes it the most practical pre-game, pre-show, or pre-flight boba stop within 10 minutes of the Hollywood Park entertainment complex. Take W Century Blvd east to Crenshaw Blvd south, then west on W Redondo Beach Blvd.",
    href: "/its-boba-time-gardena/",
  },
  {
    rank: 2,
    name: "Tiger Sugar",
    city: "Koreatown (15 to 20 min northeast via 405/110)",
    image: "/assets/products/tiger_sugar_drink.png",
    rating: "5.0",
    price: "$$",
    address: "Koreatown, Los Angeles",
    bestFor: "Brown Sugar Boba Milk with Cream Mousse, Okinawa pearls, best brown sugar boba in LA",
    mustOrder: "Brown Sugar Boba Milk with Cream Mousse",
    verdict: "The best brown sugar boba in Los Angeles and worth the 15 to 20 minute drive northeast from Inglewood. Tiger Sugar uses Okinawa black sugar rather than caramel syrup, cooks pearls in small batches every four hours, and makes the cream mousse in-house. There is nothing comparable in Inglewood or the South Bay. From the Hollywood Park area, take the 405 north to the 110 north, exit at Adams Blvd and head east into Koreatown, or continue to Olympic Blvd. For a special boba outing before or after a game at SoFi or the Forum, Tiger Sugar is the destination worth building time around.",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
  },
  {
    rank: 3,
    name: "Happy Lemon",
    city: "Koreatown (15 to 20 min northeast via 405/110)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Koreatown, Los Angeles",
    bestFor: "Rock Salt and Cheese Oolong, cheese foam series, Koreatown boba staple",
    mustOrder: "Rock Salt and Cheese Oolong, Roasted Milk Tea",
    verdict: "The chain that brought cheese foam to Los Angeles and the essential Koreatown boba experience for anyone making the trip from Inglewood. Happy Lemon's Rock Salt and Cheese Oolong is the drink that defined the Koreatown boba corridor, with roasted oolong base and salted cream foam that balances bitterness and salt in a way no South Bay chain replicates. Multiple Koreatown locations along the Olympic Blvd corridor make it easy to combine with Tiger Sugar on the same visit. The drive from Inglewood via the 405 north to the 110 north is about 15 to 20 minutes.",
    href: "/happy-lemon-review-los-angeles/",
  },
  {
    rank: 4,
    name: "Machi Machi",
    city: "Koreatown (15 to 20 min northeast via 405/110)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1",
    price: "$$",
    address: "Koreatown, Los Angeles",
    bestFor: "Cheese foam tea, Earl Grey with Cheese Foam, the only LA shop built entirely around cheese foam",
    mustOrder: "Earl Grey with Cheese Foam, Brown Sugar Cheese Foam",
    verdict: "The only boba shop in Los Angeles built entirely around cheese foam, and the third essential stop on a Koreatown boba outing from Inglewood. Machi Machi's Earl Grey with Cheese Foam is the most distinctive drink in the neighborhood, pairing a properly steeped Earl Grey base with house-made salted cream foam in proportions you will not find at any chain. Located in Koreatown near the Olympic Blvd corridor, it combines naturally with Tiger Sugar and Happy Lemon for anyone making a dedicated boba trip from the Inglewood and Hollywood Park area.",
    href: "/machi-machi-review-los-angeles/",
  },
  {
    rank: 5,
    name: "Mochinut",
    city: "Torrance (10 to 15 min south via PCH)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3",
    price: "$$",
    address: "Torrance, CA",
    bestFor: "Ube and matcha mochi donuts, brown sugar milk tea, unique concept in the South Bay",
    mustOrder: "Brown Sugar Milk Tea with Boba, Ube Mochi Donut",
    verdict: "The best boba destination south of Inglewood, accessible via Pacific Coast Hwy or the 405 south to Torrance. Mochinut pairs mochi donuts with a full boba menu, giving it a dual identity no other South Bay shop replicates. The Brown Sugar Milk Tea with boba is the essential drink order: well-balanced, fresh pearls, not cloying. The ube and matcha mochi donuts are the reason first-time visitors come. For anyone in Inglewood heading south toward the South Bay beach cities, a stop at Mochinut in Torrance is worth building into the route.",
    href: "/mochinut-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Gong Cha",
    city: "Multiple LA locations accessible from Inglewood",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Multiple locations near Inglewood",
    bestFor: "High Mountain Oolong base, Brown Sugar Milk Tea with Pearl, consistent global chain",
    mustOrder: "Brown Sugar Milk Tea with Pearl, Oolong Milk Tea",
    verdict: "The most widely accessible chain boba option near Inglewood, with locations reachable via the broader LA corridor. Gong Cha's differentiator is its High Mountain Oolong base, which gives standard milk tea drinks more depth than most chain competitors at the same price. The Brown Sugar Milk Tea with Pearl is the most ordered item. For anyone near SoFi Stadium, Kia Forum, or LAX who wants consistent, well-made chain boba without committing to the Koreatown round trip, a nearby Gong Cha is the practical answer at $6 to $8 per drink.",
    href: "/gong-cha-review-los-angeles/",
  },
];

const moreShops = [
  { name: "It's Boba Time", city: "Multiple LA locations", note: "The main It's Boba Time guide covers the full chain history, complete menu, and all LA locations. Founded in Los Angeles in 1999, the original LA boba chain. Read the full review.", href: "/its-boba-time-review-los-angeles/" },
  { name: "Boba Guys", city: "Long Beach (2nd and PCH, 25 min southeast)", note: "The best premium boba in the South Bay. Organic Straus milk, ceremonial-grade matcha, Strawberry Matcha as the signature order. Worth the 25 minute drive east on PCH for a serious boba outing. Read the full review.", href: "/boba-guys-review-los-angeles/" },
  { name: "Kung Fu Tea", city: "Multiple LA locations", note: "Affordable and accessible chain with Kung Fu Milk Tea and Taro Slush as the essential orders. Priced at $5 to $7 per drink. A dependable option when a quick stop is what the situation calls for. Read the full review.", href: "/kung-fu-tea-review-los-angeles/" },
  { name: "CoCo Fresh Tea and Juice", city: "Multiple LA locations", note: "The world's largest boba chain by outlet count (4,000+ locations, 40+ countries). The Avocado Smoothie Milk Tea is a unique menu item no other chain in LA offers. Value pricing at $4.50 to $7. Read the full review.", href: "/coco-fresh-tea-review-los-angeles/" },
  { name: "Feng Cha", city: "Multiple LA locations", note: "Brown Sugar Milk Tea and Oolong Milk Tea with Cheese Foam are the essential orders. One of the highest-volume boba brand keywords in Los Angeles. Read the full review.", href: "/feng-cha-review-los-angeles/" },
  { name: "85 Degrees Bakery", city: "Torrance / Multiple South Bay locations", note: "Taiwanese bakery chain with sea salt coffee, tiger bread, and milk buns. Multiple Torrance and South Bay locations make it accessible from Inglewood heading south. Read the full review.", href: "/85-degrees-bakery-review-los-angeles/" },
];

export default function BestBobaInglewoodPage() {
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
                Best Boba Near Inglewood: Top Bubble Tea Near SoFi Stadium, Kia Forum, and LAX
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Inglewood itself has limited dedicated boba. It&apos;s Boba Time in Gardena is 10 minutes north on W Redondo Beach Blvd. Koreatown, with Tiger Sugar, Happy Lemon, and Machi Machi, is 15 to 20 minutes northeast via the 405 and 110. Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">6 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Inglewood, Gardena, Koreatown</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/best-boba-los-angeles-feature-full.jpeg"
                alt="Best boba near Inglewood SoFi Stadium Kia Forum and LAX Los Angeles"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Honest Guide to Boba Near Inglewood</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Inglewood is one of the most visited cities in Los Angeles County, home to SoFi Stadium, one of the largest stadiums in the United States with a capacity of 70,000, the Kia Forum, YouTube Theater, and the Hollywood Park entertainment complex. LAX is three to five minutes from the city center. Millions of event-goers, travelers, and residents pass through Inglewood every year. Dedicated boba, however, is limited within the city itself.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            The most practical boba stop near Inglewood is It&apos;s Boba Time in Gardena, about 10 minutes north on W Redondo Beach Blvd. It is the nearest dedicated boba shop to SoFi Stadium, the Kia Forum, and LAX. For everyday boba before a game or flight, this is the answer.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            For serious boba, Koreatown is 15 to 20 minutes northeast via the 405 north to the 110 north. The Olympic Blvd boba corridor in Koreatown has Tiger Sugar, Happy Lemon, and Machi Machi within a few blocks of each other, a concentration of quality with no equivalent anywhere in the South Bay. For anyone with time before an event or after a flight, the Koreatown detour is worth it.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba Near Inglewood, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, value, and accessibility from Inglewood, SoFi Stadium, Kia Forum, and LAX.</p>

          <div className="space-y-8">
            {inglewoodShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba near Inglewood SoFi Stadium Los Angeles`}
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Worth Visiting Near Inglewood</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Additional options accessible from Inglewood within 20 to 35 minutes that are worth knowing about.</p>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: SoFi Stadium, Kia Forum, LAX, Gardena, and Koreatown</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">SoFi Stadium and Hollywood Park Entertainment Complex</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                SoFi Stadium opened in 2020 and is the largest stadium in the United States by seating capacity. It hosts the LA Rams, LA Chargers, college football bowl games, concerts, and major events including Super Bowl LVI in 2022. The Hollywood Park complex surrounding SoFi also includes Kia Forum, YouTube Theater, a hotel, retail, and dining. Boba inside the Hollywood Park complex is limited. The nearest dedicated boba shop outside the complex is It&apos;s Boba Time in Gardena, about 10 minutes north on W Redondo Beach Blvd.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Kia Forum and YouTube Theater</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Kia Forum, formerly known as the Great Western Forum and the Forum, is a historic arena at 3900 W Manchester Blvd in Inglewood that hosts major concerts and events. YouTube Theater is the adjacent smaller venue. Both are part of the Hollywood Park entertainment district. For anyone attending an event at the Forum or YouTube Theater, the nearest boba stop before or after is It&apos;s Boba Time in Gardena, about 10 minutes north. The route is W Manchester Blvd east to Crenshaw Blvd north to W Redondo Beach Blvd west.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">LAX and the Airport Corridor</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Los Angeles International Airport is three to five minutes from central Inglewood and is one of the busiest airports in the world. The LAX terminal area and Century Blvd corridor are primarily airport hotels, car rental facilities, and chain fast food rather than independent restaurants or boba shops. For travelers with time before a flight or after landing, It&apos;s Boba Time in Gardena at 1605 W Redondo Beach Blvd is the nearest dedicated boba option at about 10 minutes from the terminals. From the 405 south, exit W Redondo Beach Blvd and head east. From W Century Blvd, head east to Crenshaw Blvd and then south.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Gardena (The Nearest Dedicated Boba, 10 Min North)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Gardena is the nearest city north of Inglewood and has the closest dedicated boba shop to the Hollywood Park entertainment complex and LAX. It&apos;s Boba Time at 1605 W Redondo Beach Blvd is on the border of Gardena and the South Bay commercial corridor and is the practical everyday boba answer for Inglewood residents and visitors. The route from SoFi Stadium is W Century Blvd east to Crenshaw Blvd north to W Redondo Beach Blvd west, or take the 405 south to the W Redondo Beach Blvd exit. Value pricing at $5 to $7 per drink makes it the right call before a game or flight.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Koreatown via the 405 and 110 (The Best Boba in LA, 15 to 20 Min Northeast)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Koreatown is the premier boba destination in Los Angeles and is about 15 to 20 minutes northeast of Inglewood via the 405 north to the 110 north. Exit at Adams Blvd or Olympic Blvd and head east into Koreatown. The Olympic Blvd corridor between Vermont Ave and Western Ave has Tiger Sugar, Happy Lemon, and Machi Machi within a few blocks of each other, a concentration of quality with no equivalent in the South Bay. From Inglewood, Koreatown is actually closer than it is from Torrance or Long Beach, making it an accessible destination for anyone attending a SoFi or Forum event who builds in time for a pre- or post-event boba run.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Torrance and the South Bay (Quality Options Heading South, 10 to 15 Min)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Torrance is about 10 to 15 minutes south of Inglewood via Pacific Coast Hwy or the 405 south. Mochinut in Torrance is the best boba destination south of Inglewood, with both mochi donuts and a full boba menu. 85 Degrees Bakery has multiple Torrance area locations and is worth combining with a Mochinut stop. For Inglewood residents who find themselves heading south toward the South Bay beach cities, Torrance is the boba destination worth building into the route before heading further south to Redondo Beach or Manhattan Beach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Inglewood Boba FAQ</h2>
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
            <Link href="/best-boba-torrance/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Torrance</h3>
              <p className="text-[#4A5568] text-sm">Mochinut and 85 Degrees are the local anchors. It&apos;s Boba Time Gardena is 5 minutes north. 10 to 15 minutes south of Inglewood via PCH or the 405.</p>
            </Link>
            <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Koreatown</h3>
              <p className="text-[#4A5568] text-sm">The best boba neighborhood in Los Angeles, 15 to 20 minutes northeast of Inglewood via the 405 and 110. Tiger Sugar, Happy Lemon, and Machi Machi.</p>
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
