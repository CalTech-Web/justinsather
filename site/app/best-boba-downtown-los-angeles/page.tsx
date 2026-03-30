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
  title: "Best Boba in Downtown LA: Top Bubble Tea Near Little Tokyo, the Arts District, and Crypto.com Arena | Justin Sather",
  description: "The complete guide to boba near Downtown Los Angeles, Little Tokyo, the Arts District, and Chinatown. Every shop personally visited. Koreatown is 10 minutes west and is the serious boba destination from DTLA. Updated 2026.",
};

const faqItems = [
  {
    question: "What is the best boba in Downtown LA?",
    answer: "The best boba immediately in Downtown LA is found in and around Little Tokyo, where shops serving Japanese-style drinks and classic Taiwanese milk tea are concentrated. For the best boba within a short drive of DTLA, Koreatown is 10 to 15 minutes west via the 10 freeway and has Tiger Sugar, Happy Lemon, and Machi Machi all within a few blocks of each other. Happy Lemon is ranked first in this guide for its Rock Salt and Cheese Oolong, which is a foundational Koreatown boba order.",
  },
  {
    question: "Is there boba in Little Tokyo Los Angeles?",
    answer: "Yes. Little Tokyo, located at the eastern edge of Downtown LA near 1st Street and Alameda, is DTLA's most concentrated area for Asian food and drinks, including boba and bubble tea. The neighborhood has several options ranging from Japanese-influenced tea shops to standard Taiwanese boba chains. Little Tokyo is the best immediate area for boba within walking distance of Downtown LA proper.",
  },
  {
    question: "Where can I find boba near Crypto.com Arena in Los Angeles?",
    answer: "For boba near Crypto.com Arena (formerly Staples Center), the best options are in Koreatown, about 10 to 15 minutes west via the 10 freeway or surface streets on Figueroa or Olympic. Happy Lemon, Tiger Sugar, and Gong Cha are all in Koreatown and worth the short drive before or after an event. Within DTLA itself, chain options including Kung Fu Tea and Gong Cha have locations in the downtown corridor that are more walkable from the arena.",
  },
  {
    question: "What is the best boba in the Arts District Los Angeles?",
    answer: "The Arts District, located just east of DTLA on the other side of the LA River, has a thriving coffee and specialty drink scene but limited dedicated boba shops. The best boba accessible from the Arts District is in Little Tokyo, which is adjacent and a short walk west. For premium boba, Koreatown is 15 to 20 minutes west of the Arts District by car. The Arts District is better known for specialty coffee, cocktail bars, and farm-to-table dining than dedicated boba.",
  },
  {
    question: "How far is Downtown LA from Koreatown for boba?",
    answer: "Downtown LA is about 3 to 5 miles from the heart of Koreatown, roughly 10 to 15 minutes by car depending on traffic. On the 10 freeway heading west, exit at Western Ave or Vermont Ave for the densest part of the Koreatown boba corridor. Tiger Sugar, Happy Lemon, and Machi Machi are all on or near Olympic Blvd and Vermont. For serious boba, the Koreatown drive from DTLA is the most direct upgrade over the limited options in Downtown LA itself.",
  },
  {
    question: "Is there boba open late near Downtown LA?",
    answer: "Yes. Several Koreatown boba shops stay open until 10 or 11 PM, and a few locations run even later on weekends. Happy Lemon and Gong Cha are among the more reliably late-closing options in the Koreatown corridor that is 10 to 15 minutes from DTLA. Within Downtown LA itself, hours vary by location and chain. Always check current hours directly with the shop before visiting late at night.",
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

const dtlaShops = [
  {
    rank: 1,
    name: "Happy Lemon",
    city: "Koreatown (10 min west of DTLA)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Koreatown, Los Angeles",
    bestFor: "Rock Salt and Cheese Oolong, cheese foam series, Hawthorn Green Tea",
    mustOrder: "Rock Salt & Cheese Oolong, Hawthorn Green Tea with Rock Salt Cheese",
    verdict: "The best boba within 15 minutes of Downtown LA. Happy Lemon is the chain that introduced Rock Salt and Cheese foam to Los Angeles and it remains the defining Koreatown boba order. The Rock Salt and Cheese Oolong layers a cold oolong tea base with savory-sweet cheese foam that is salted just enough to deepen the flavor without overwhelming it. The Hawthorn Green Tea with cheese is the second essential order, with a tart fruit tea underneath the foam. For anyone driving from DTLA to Koreatown for boba, Happy Lemon is the first stop.",
    href: "/happy-lemon-review-los-angeles/",
  },
  {
    rank: 2,
    name: "Tiger Sugar",
    city: "Koreatown (10 min west of DTLA)",
    image: "/assets/products/tiger_sugar_drink.png",
    rating: "5.0",
    price: "$$",
    address: "Koreatown, Los Angeles",
    bestFor: "Brown Sugar Boba Milk with Cream Mousse, Okinawa pearls, fresh batches every 4 hours",
    mustOrder: "Brown Sugar Boba Milk with Cream Mousse",
    verdict: "The best brown sugar boba in Los Angeles, 10 to 15 minutes from Downtown LA on the 10 freeway. Tiger Sugar uses Okinawa black sugar, not caramel syrup. The pearls are cooked fresh in small batches every four hours. The cream mousse layer is made in-house rather than poured from a carton. These three choices produce a drink that is genuinely different from anything else in LA's brown sugar boba category. For a DTLA visitor making one boba stop, Tiger Sugar in Koreatown is the destination that justifies the short drive.",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
  },
  {
    rank: 3,
    name: "Machi Machi",
    city: "Koreatown (10 min west of DTLA)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1",
    price: "$$",
    address: "Koreatown, Los Angeles",
    bestFor: "Cheese foam as the core concept, Earl Grey with Cheese Foam, Brown Sugar Cheese Foam",
    mustOrder: "Earl Grey with Cheese Foam, Brown Sugar Cheese Foam",
    verdict: "The only boba shop in Los Angeles built entirely around cheese foam as its central concept, 10 minutes from DTLA. While Happy Lemon brought cheese foam to LA and added it as a topping, Machi Machi made it the foundation of every drink. The Earl Grey with Cheese Foam uses a brewed Earl Grey base rather than a tea concentrate, which gives the foam something complex to sit on top of. The cheese itself is lighter and less sweet than most Koreatown competitors. For anyone interested in the cheese foam trend that has defined LA boba for the last five years, Machi Machi is the essential stop.",
    href: "/machi-machi-review-los-angeles/",
  },
  {
    rank: 4,
    name: "Gong Cha",
    city: "Multiple DTLA-area locations",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Multiple locations near Downtown LA",
    bestFor: "High Mountain Oolong base, Brown Sugar Milk Tea with Pearl, wide full menu",
    mustOrder: "Brown Sugar Milk Tea with Pearl, Oolong Milk Tea",
    verdict: "One of the world's largest boba chains (2,000+ locations in 20+ countries) has locations accessible from Downtown LA. Gong Cha's differentiator is its High Mountain Oolong base, which gives even standard milk tea drinks more depth than most chain competitors in the same price range. The Brown Sugar Milk Tea with Pearl uses the oolong base well. For a DTLA office worker or tourist who wants consistent, well-made boba without the Koreatown drive, a nearby Gong Cha location is the practical answer.",
    href: "/gong-cha-review-los-angeles/",
  },
  {
    rank: 5,
    name: "Kung Fu Tea",
    city: "Multiple DTLA-area locations",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1",
    price: "$",
    address: "Multiple locations near Downtown LA",
    bestFor: "Value milk teas, Taro Slush, Mango Slush, accessible chain option",
    mustOrder: "Kung Fu Milk Tea, Taro Slush",
    verdict: "The most accessible and affordable chain boba option near Downtown LA, with multiple locations in the DTLA corridor. Kung Fu Tea's Kung Fu Milk Tea is well-balanced, consistent across locations, and priced at $5 to $7, making it one of the better values in the city. The Taro Slush is the best item on the menu for anyone who wants something outside the standard milk tea format. Not the most exciting boba in LA, but a dependable option for a quick DTLA boba stop without driving to Koreatown.",
    href: "/kung-fu-tea-review-los-angeles/",
  },
  {
    rank: 6,
    name: "It's Boba Time",
    city: "Multiple LA locations",
    image: "/assets/products/its_boba_time_drink.png",
    rating: "4.0",
    price: "$",
    address: "Multiple LA locations",
    bestFor: "LA original since 1999, Classic Taro Milk Tea, value pricing, late hours",
    mustOrder: "Classic Taro Milk Tea, Honeydew Milk Tea",
    verdict: "The Los Angeles original, founded in 1999, with multiple locations across the city that serve as reliable neighborhood standbys. It's Boba Time is not the most elevated boba in LA but it has the most consistent value proposition: classic Taiwanese flavors executed reliably at $5 to $7 per drink, with locations spread across the city including areas accessible from DTLA. The Classic Taro Milk Tea is the essential order. For anyone in or near Downtown LA who wants a dependable local option without the premium pricing of Boba Guys or Chicha San Chen, It's Boba Time delivers.",
    href: "/its-boba-time-review-los-angeles/",
  },
];

const moreShops = [
  { name: "Feng Cha", city: "Multiple LA locations", note: "One of the highest-volume boba keywords in LA with 33,000 monthly searches. The Brown Sugar Milk Tea and Oolong Milk Tea with Cheese Foam are the essential orders. Multiple LA locations accessible from DTLA. Read the full review.", href: "/feng-cha-review-los-angeles/" },
  { name: "CoCo Fresh Tea & Juice", city: "Multiple LA locations", note: "The world's largest boba chain by outlet count (4,000+ locations), with a unique Avocado Smoothie Milk Tea that no other chain in LA offers. Affordable at $4.50 to $7. Read the full review.", href: "/coco-fresh-tea-review-los-angeles/" },
  { name: "Meet Fresh", city: "SGV and Greater LA", note: "The best taro ball dessert shop in the LA area, with locations in Rowland Heights, Alhambra, and Monterey Park. The taro ball combinations and shaved ice are unlike anything in the standard boba category. Read the full review.", href: "/meet-fresh-review-los-angeles/" },
  { name: "Chatime", city: "SGV locations", note: "A global chain (1,500+ locations in 30+ countries) known for its QQ multi-topping concept and Ruby Red Tea. The Alhambra and Rowland Heights locations are accessible from DTLA heading east on the 10. Read the full review.", href: "/chatime-review-los-angeles/" },
  { name: "Xing Fu Tang", city: "SGV (Temple City, Alhambra)", note: "The best fresh-cooked pearl program in LA outside Tiger Sugar. The brown sugar pearls are wok-cooked to order. All SGV locations are 20 to 25 minutes from DTLA on the 10 east. Read the full review.", href: "/xing-fu-tang-review-los-angeles/" },
  { name: "Mixue", city: "Hollywood (6922 Hollywood Blvd)", note: "The world's largest boba chain by outlet count (42,000+ locations globally), with its first US location on Hollywood Blvd. The most affordable boba in LA at $3.99 and up. 15 minutes from DTLA. Read the full review.", href: "/mixue-review-los-angeles/" },
];

export default function BestBobaDtlaPage() {
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
                Best Boba in Downtown LA: Top Bubble Tea Near Little Tokyo, the Arts District, and Crypto.com Arena
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Downtown LA has limited dedicated boba shops. Little Tokyo is the best immediate area within DTLA. For serious boba, Koreatown is 10 minutes west and is where Tiger Sugar, Happy Lemon, and Machi Machi are all within a few blocks of each other. Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">6 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">DTLA, Little Tokyo, Koreatown</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/best-boba-los-angeles-feature-full.jpeg"
                alt="Best boba near Downtown Los Angeles Little Tokyo Arts District"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Honest Guide to Boba Near Downtown LA</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Downtown LA has a strong food and coffee scene but is not a dedicated boba destination. The best area for boba within DTLA itself is Little Tokyo, the Japanese American neighborhood at the edge of the financial district near 1st Street and Alameda. Little Tokyo has the highest concentration of Asian food and drink options in the downtown core, including boba shops and Japanese-influenced tea cafes.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Chinatown, immediately north of DTLA along Broadway, adds more options in the same direction. For boba near Crypto.com Arena, the Convention Center, or the Financial District, chain options like Gong Cha and Kung Fu Tea have locations in the downtown corridor that are walkable or a short rideshare away.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            The honest answer for serious boba from Downtown LA is to drive 10 to 15 minutes west to Koreatown on the 10 freeway. Tiger Sugar, Happy Lemon, and Machi Machi are all within a few blocks of each other on Olympic Blvd near Vermont. The quality gap between Koreatown boba and what is immediately available in DTLA is significant. This guide covers both the immediate DTLA options and the Koreatown corridor that most people end up choosing.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba Near Downtown LA, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, value, and accessibility from Downtown LA.</p>

          <div className="space-y-8">
            {dtlaShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba near Downtown Los Angeles`}
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Worth Visiting Near Downtown LA</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Additional options accessible from Downtown LA within 20 to 30 minutes that are worth knowing about.</p>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Little Tokyo, Arts District, Chinatown, and Koreatown</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Little Tokyo (Best Boba in DTLA)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Little Tokyo, centered around 1st Street and Alameda near the eastern edge of Downtown LA, is the neighborhood with the most concentrated Asian food and drink options within DTLA. The neighborhood has boba and bubble tea options ranging from Japanese-influenced tea shops to standard Taiwanese chain locations. For anyone staying in or working in the Financial District, Civic Center, or South Park areas, Little Tokyo is the most walkable destination for boba without getting in a car. The neighborhood is also home to the Japanese American National Museum, the Geffen Contemporary at MOCA, and a strong concentration of ramen and Japanese food that pairs naturally with an afternoon boba stop.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Arts District (Limited Boba, Strong Coffee)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The Arts District, east of the LA River just past the 6th Street Bridge, has one of LA&apos;s best specialty coffee scenes but limited dedicated boba. The neighborhood&apos;s food culture skews toward farm-to-table restaurants, craft cocktail bars, and single-origin coffee roasters. Boba options exist but are not a primary reason to visit the Arts District specifically. For boba from the Arts District, Little Tokyo is about a 10-minute walk west and is the better destination. Koreatown is about 20 minutes west by car on the 10 freeway.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Chinatown (Adjacent to DTLA, More Options)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Chinatown, immediately north of Downtown LA along Broadway and Hill Street, has a broader selection of Asian food and drink than DTLA proper, including boba. The neighborhood is undergoing significant change, with new galleries and restaurants mixing with long-established Chinese businesses. Boba and Asian dessert options are concentrated along Broadway and the Chinatown commercial center. From DTLA, Chinatown is a short drive north on the 110 or Broadway. The selection is not as strong as Koreatown or the SGV, but for a DTLA visitor who does not want to cross town, Chinatown is a closer option than making the full Koreatown trip.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">South Park and Convention Center (Chain Options Near Crypto.com Arena)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The South Park neighborhood around Crypto.com Arena (formerly Staples Center), the LA Convention Center, and the surrounding hotel corridor has chain boba options within walking distance or a short rideshare. Gong Cha and Kung Fu Tea are the two most reliably accessible chain options in this part of Downtown LA. Both serve a full Taiwanese menu at standard pricing. For a pre-event or post-event boba stop near the arena, these are the practical choices. For better quality, the Koreatown corridor is 10 to 15 minutes west on the 10 freeway and is worth the drive if time allows.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Koreatown (10 to 15 Min West, The Real Destination)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Koreatown is the premier boba destination in Los Angeles and the most important boba neighborhood within easy reach of Downtown LA. Tiger Sugar, Happy Lemon, and Machi Machi are all on or near Olympic Blvd between Vermont and Western Avenues, a cluster with no equivalent in DTLA or anywhere else on this side of the SGV. From Downtown LA, take the 10 freeway west to Vermont Ave or Western Ave, or take Olympic Blvd or 6th Street directly west without the freeway. The drive is 10 to 15 minutes depending on traffic. The quality gap between Koreatown boba and what is immediately available in Downtown LA is significant enough that most serious boba drinkers make the drive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Downtown LA Boba FAQ</h2>
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
            <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Koreatown</h3>
              <p className="text-[#4A5568] text-sm">The complete guide to 30+ boba shops in Koreatown, the best boba neighborhood in Los Angeles. 10 to 15 minutes west of Downtown LA on the 10.</p>
            </Link>
            <Link href="/best-boba-hollywood/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba Near Hollywood</h3>
              <p className="text-[#4A5568] text-sm">Mixue&apos;s first US location is on Hollywood Blvd. The guide for Hollywood, East Hollywood, and the Koreatown corridor 15 minutes west of Hollywood.</p>
            </Link>
            <Link href="/best-boba-los-angeles/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Los Angeles</h3>
              <p className="text-[#4A5568] text-sm">The definitive citywide ranking of the best boba shops across all of LA County, from Downtown LA and Koreatown to the SGV and the Westside.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
