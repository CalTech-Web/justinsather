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
  title: "Best Boba in Santa Monica: Top Bubble Tea Near the Pier and Third Street Promenade | Justin Sather",
  description: "The complete guide to boba near Santa Monica, the Pier, and Third Street Promenade. Includes Sawtelle, Westwood, and the best Westside options. Every shop personally visited. Updated 2026.",
};

const faqItems = [
  {
    question: "What is the best boba near Santa Monica Pier?",
    answer: "The best boba closest to Santa Monica Pier is Yi Fang Taiwan Fruit Tea in the Sawtelle area, about 10 minutes east along Olympic Blvd. Santa Monica itself has limited dedicated boba shops. For the best premium boba experience accessible from Santa Monica, the Sawtelle corridor and Westwood Village are the two strongest nearby destinations, with shops like Yi Fang, Gong Cha, and Milksha all within 15 minutes.",
  },
  {
    question: "Is there boba on Third Street Promenade in Santa Monica?",
    answer: "Third Street Promenade has limited dedicated boba options. Chain options including Kung Fu Tea can be found in the broader Santa Monica area. For quality boba near Third Street Promenade, the Sawtelle area on Olympic Blvd is 10 minutes east and has significantly better options including Yi Fang Taiwan Fruit Tea. Westwood Village, 15 minutes northeast via Wilshire Blvd, adds Milksha and Sharetea.",
  },
  {
    question: "What are the best boba shops near Santa Monica Beach?",
    answer: "The best boba shops accessible from Santa Monica Beach are Yi Fang Taiwan Fruit Tea in Sawtelle (10 min east), Gong Cha with a West LA location near UCLA (15 min northeast), Milksha Westwood (first US location of Taiwan's largest fresh milk brand, 15 min northeast), and Sharetea Westwood (15 min northeast). For the widest selection of premium boba, Koreatown is 30 minutes east and has over 30 shops.",
  },
  {
    question: "How far is Santa Monica from Koreatown for boba?",
    answer: "Santa Monica is about 12 to 15 miles from Koreatown, roughly 25 to 35 minutes by car depending on traffic. Koreatown is the premier boba destination in Los Angeles, with Tiger Sugar, Happy Lemon, Machi Machi, Feng Cha, and Somi Somi all within a few blocks of each other. For serious boba, the drive from Santa Monica to Koreatown is worth it. The Sawtelle and Westwood options are better for a quick stop without committing to the full drive.",
  },
  {
    question: "What is the best boba in the Sawtelle area near Santa Monica?",
    answer: "Yi Fang Taiwan Fruit Tea on Sawtelle Blvd is the best boba in the Sawtelle area. The Pineapple Green Tea and Taiwan Lemon Green Tea are made with real fruit, not syrup, which is rare at this price point. The Sawtelle corridor also has a strong Japanese food scene, making it a natural stop to pair with boba. Yi Fang is the best fruit tea in West LA.",
  },
  {
    question: "What boba is open late near Santa Monica?",
    answer: "Just Boba Tea House in Westwood Village at 952 Gayley Ave is open until midnight on weekends, making it the best late-night boba option in the area. Sharetea Westwood also has extended evening hours. Both are about 15 minutes from Santa Monica on Wilshire Blvd. For late-night boba closer to the beach, chain options including Kung Fu Tea have locations in the Santa Monica area with extended hours.",
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

const santaMonicaShops = [
  {
    rank: 1,
    name: "Yi Fang Taiwan Fruit Tea",
    city: "Sawtelle (West LA, 10 min east)",
    image: "/assets/products/yifang_drink.png",
    rating: "4.5",
    price: "$$",
    address: "Sawtelle Blvd, West LA",
    bestFor: "Real fruit tea, Pineapple Green Tea, Taiwan Lemon Green Tea, no syrup policy",
    mustOrder: "Pineapple Green Tea, Taiwan Lemon Green Tea",
    verdict: "The best boba closest to Santa Monica, a 10-minute drive east into the Sawtelle corridor. Yi Fang uses real fruit, not syrup concentrate, which is the defining difference from every chain option in the Santa Monica area itself. The Pineapple Green Tea is made with fresh pineapple and brewed green tea. The Taiwan Lemon Green Tea uses real lemon squeezed per order. The Sawtelle Blvd location sits in the middle of one of the best dining corridors on the Westside, making it a natural anchor for a Sawtelle afternoon. The best fruit tea in West LA.",
    href: "/yi-fang-taiwan-fruit-tea-review-los-angeles/",
  },
  {
    rank: 2,
    name: "Milksha Westwood",
    city: "Westwood Village (15 min northeast)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.6",
    price: "$$$",
    address: "1009 Broxton Ave, Westwood",
    bestFor: "Fresh milk, no powder, Taiwan-sourced ingredients, Campus Crush exclusive",
    mustOrder: "Tiger Milk Tea, Earl Grey Latte with Honey Pearl, Campus Crush",
    verdict: "The best boba in the Westwood to Santa Monica corridor for ingredient quality. Milksha opened its first US location at 1009 Broxton Ave in fall 2025. Every drink is made with real fresh milk and zero powder, which is genuinely rare even among quality boba shops in LA. The Tiger Milk Tea shows what brown sugar boba can be when made with real milk instead of non-dairy creamer. The Campus Crush, exclusive to this Westwood location, is the best reason to make the 15-minute drive from Santa Monica. The most thoughtfully made boba on the Westside.",
    href: "/milksha-westwood-review/",
  },
  {
    rank: 3,
    name: "Sharetea Westwood",
    city: "Westwood Village (15 min northeast)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "1036 Westwood Blvd, Westwood",
    bestFor: "Full menu, Three Mates, Mango Green Tea, reliable Westwood staple",
    mustOrder: "Three Mates, Handcrafted Milk Tea, Mango Green Tea",
    verdict: "The most established boba shop in Westwood Village and the most accessible option from Santa Monica for a full menu at standard pricing. Sharetea's Three Mates (a brewed tea blend of Assam, oolong, and green tea) is its strongest offering and better than most chain milk teas in this price range. The Mango Green Tea is the best fruit tea on the menu. For UCLA students or Santa Monica visitors making a Westwood stop, Sharetea is the dependable choice with consistent quality and no surprises.",
    href: "/sharetea-westwood-review/",
  },
  {
    rank: 4,
    name: "Gong Cha",
    city: "West LA near UCLA (15 min northeast)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "West LA, near UCLA",
    bestFor: "High Mountain Oolong base, Brown Sugar Milk Tea with Pearl, wide menu",
    mustOrder: "Brown Sugar Milk Tea with Pearl, Oolong Milk Tea",
    verdict: "One of the world's most recognized boba brands (2,000+ locations in 20+ countries) has a West LA location accessible from Santa Monica. Gong Cha's differentiator is its High Mountain Oolong base, which gives even standard milk tea drinks a more complex flavor profile than most chain competitors. The Brown Sugar Milk Tea with Pearl uses the oolong base well. For someone in Santa Monica who wants a reliable, globally consistent boba shop without the drive to the SGV, the West LA Gong Cha is the answer.",
    href: "/gong-cha-review-los-angeles/",
  },
  {
    rank: 5,
    name: "Boba Guys",
    city: "Los Angeles (Rideback Ranch, 20 min east)",
    image: "/assets/products/boba_guys_exterior.png",
    rating: "4.5",
    price: "$$$",
    address: "Rideback Ranch, Los Angeles",
    bestFor: "Premium ingredients, hormone-free milk, organic cane sugar, Strawberry Matcha",
    mustOrder: "Strawberry Matcha, Earl Grey Milk Tea, Horchata",
    verdict: "The most premium chain-level boba in Los Angeles, about 20 minutes east of Santa Monica. Boba Guys uses hormone-free milk, organic cane sugar, and house-made syrups for every drink, which puts it in a different category from standard chain boba. The Strawberry Matcha is the most distinctive drink on the menu: Straus creamery milk, house-made strawberry syrup, and ceremonial grade matcha layered into a drink that is entirely unlike what any other chain in LA offers. For someone in Santa Monica willing to make the drive for a genuinely different boba experience, Boba Guys is the destination.",
    href: "/boba-guys-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Kung Fu Tea",
    city: "Multiple LA locations",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1",
    price: "$",
    address: "Multiple LA locations",
    bestFor: "Value milk teas, Taro Slush, Mango Slush, accessible chain option",
    mustOrder: "Kung Fu Milk Tea, Taro Slush",
    verdict: "The most accessible chain-level boba for Santa Monica residents who want a local option without the drive to Sawtelle or Westwood. Kung Fu Tea has multiple LA locations with reliable quality and pricing in the $5 to $7 range. The Kung Fu Milk Tea is the straightforward order: well-balanced, not too sweet, consistent across locations. The Taro Slush is the best item on the menu if you want something outside the standard milk tea format. Not the most exciting boba in LA, but a dependable option for a Santa Monica neighborhood stop.",
    href: "/kung-fu-tea-review-los-angeles/",
  },
];

const moreShops = [
  { name: "CoCo Fresh Tea & Juice", city: "Multiple LA locations", note: "The world's largest boba chain by outlet count, with West LA locations. The Avocado Smoothie Milk Tea is a unique item no other chain offers. Affordable at $4.50 to $7. Read the full review.", href: "/coco-fresh-tea-review-los-angeles/" },
  { name: "It's Boba Time", city: "Multiple LA locations", note: "An LA-founded chain with multiple locations across the city. Second most affordable on the list at $5.25 to $6.25. A reliable option when the drive to Sawtelle is not worth it. Read the full review.", href: "/its-boba-time-review-los-angeles/" },
  { name: "Tiger Sugar", city: "Koreatown (30 min east)", note: "The best brown sugar boba in Los Angeles. Okinawa black sugar pearls cooked fresh every four hours. For serious boba from Santa Monica, this is the destination that justifies the drive. Read the full review.", href: "/tiger-sugar-review-koreatown-boba-bubble-tea/" },
  { name: "Happy Lemon", city: "Koreatown (30 min east)", note: "The shop that introduced Rock Salt and Cheese foam to Los Angeles. One of the defining Koreatown boba stops. Worth the drive from Santa Monica as part of a Koreatown afternoon. Read the full review.", href: "/happy-lemon-review-los-angeles/" },
  { name: "Teaspoon", city: "Multiple LA locations", note: "A Bay Area import with LA locations. The Brown Sugar Boba Milk and Jasmine Milk Tea are solid orders. Reliable chain quality for Westside boba. Read the full review.", href: "/teaspoon-boba-review-los-angeles/" },
  { name: "Wanderlust Creamery", city: "Atwater Village (25 min east)", note: "Not boba, but the best specialty ice cream shop in Los Angeles. Travel-inspired flavors using real ingredients: ube, Thai tea, champurrado. Worth a dedicated visit for ice cream lovers. Read the full review.", href: "/wanderlust-creamery-review-los-angeles/" },
];

export default function BestBobaStMonicaPage() {
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
                Best Boba in Santa Monica: Top Bubble Tea Near the Pier and Third Street Promenade
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Santa Monica itself has limited dedicated boba shops. The Sawtelle corridor 10 minutes east and Westwood Village 15 minutes northeast are the best nearby destinations. Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">6 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Santa Monica, Sawtelle, Westwood</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/best-boba-los-angeles-feature-full.jpeg"
                alt="Best boba near Santa Monica Pier and Third Street Promenade Los Angeles"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Honest Guide to Boba Near Santa Monica</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Santa Monica has one of the best food scenes in Los Angeles but is not a dedicated boba destination. The beach city has chain options spread across the area, but nothing comparable to the concentration found in Koreatown, the SGV, or even Westwood Village.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            The honest answer for boba near Santa Monica is to drive 10 minutes east to Sawtelle Blvd in West LA. The Sawtelle corridor, also known as Sawtelle Japantown or Little Osaka, has Yi Fang Taiwan Fruit Tea as its standout boba option. Westwood Village, 15 minutes northeast along Wilshire Blvd, adds Milksha (Taiwan&apos;s largest fresh milk brand, first US location) and Sharetea.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            For a full boba destination experience from Santa Monica, Koreatown is 30 minutes east and has Tiger Sugar, Happy Lemon, and Machi Machi all within a few blocks of each other. The guide below covers everything worth visiting within 20 to 30 minutes of Santa Monica.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba Near Santa Monica, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, value, and accessibility from Santa Monica.</p>

          <div className="space-y-8">
            {santaMonicaShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba near Santa Monica Los Angeles`}
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
                        Full Review →
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Worth Visiting Near Santa Monica</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Additional options accessible from Santa Monica within 30 minutes that are worth knowing about.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moreShops.map((shop) => (
              <div key={shop.name} className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-bold text-[#1A202C] text-sm mb-1">{shop.name}</h3>
                <p className="text-[#718096] text-xs mb-2">{shop.city}</p>
                <p className="text-[#4A5568] text-xs leading-relaxed">{shop.note}</p>
                {shop.href && (
                  <Link href={shop.href} className="text-[#2B6CB0] text-xs font-semibold mt-2 inline-block hover:underline">
                    Full Review →
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Santa Monica, Sawtelle, Westwood, and Koreatown</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Santa Monica (Beach and Third Street Promenade)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Santa Monica itself has chain boba options scattered through the city. Third Street Promenade and the beach areas have the highest foot traffic and the most accessible options for visitors near the pier. Kung Fu Tea and CoCo Fresh Tea are the most reliably accessible chains in the Santa Monica area, offering consistent quality at $5 to $7 per drink. For visitors spending a day at the Santa Monica Pier or shopping on Third Street Promenade, these are the practical on-location choices.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Sawtelle (10 min east on Olympic Blvd)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Sawtelle Blvd in West LA, also known as Sawtelle Japantown or Little Osaka, is the best boba destination within 10 minutes of Santa Monica. Yi Fang Taiwan Fruit Tea is the standout, serving real fruit teas made with fresh pineapple, lemon, and seasonal fruit rather than syrups. The Sawtelle corridor is also one of the best Japanese restaurant concentrations in LA, making it a natural combination for boba after dinner. From Santa Monica, take Olympic Blvd east or Pico Blvd east to reach Sawtelle in about 10 minutes without freeway.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Westwood Village (15 min northeast)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Westwood Village, 15 minutes northeast via Wilshire Blvd, is the best boba neighborhood accessible from Santa Monica without committing to the full Koreatown drive. Milksha at 1009 Broxton Ave is the neighborhood&apos;s standout: Taiwan&apos;s largest fresh milk brand, its first US location, with a no-powder policy that produces noticeably better drinks than most Westside alternatives. Sharetea at 1036 Westwood Blvd covers the standard milk tea menu with consistent quality. Junbi Matcha and Tea at 10967 Weyburn Ave is the best option for matcha on the Westside. All three are within walking distance of each other in the Westwood Village commercial core.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">West LA and Culver City (10 to 20 min east)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                West LA has Gong Cha near UCLA and Yi Fang on Sawtelle as its two best boba options. Culver City, adjacent and trending as a dining destination, has Boba Guys at Rideback Ranch as the premium option. Both areas are well within reach of Santa Monica without freeway driving. The boba scene in West LA and Culver City is better than Santa Monica itself, but still secondary to what Koreatown and the SGV offer.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Koreatown (30 min east)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Koreatown is the premier boba destination in Los Angeles, 30 minutes east of Santa Monica on the 10 freeway. Tiger Sugar, Happy Lemon, Machi Machi, Feng Cha, and Somi Somi are all within a few blocks of each other on and around Olympic Blvd. The concentration of quality shops in Koreatown has no equivalent on the Westside. For serious boba, the drive from Santa Monica is worth planning around. The Olympic Blvd and Western Ave intersection is the center of gravity for the best boba in this part of LA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Santa Monica Boba FAQ</h2>
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
            <Link href="/best-boba-westwood/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Westwood</h3>
              <p className="text-[#4A5568] text-sm">The complete guide to boba near UCLA, including Milksha (first US location), Sharetea, Junbi Matcha, and more. 15 minutes from Santa Monica.</p>
            </Link>
            <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Koreatown</h3>
              <p className="text-[#4A5568] text-sm">The complete guide to 30+ boba shops in Koreatown, the best boba neighborhood in Los Angeles. 30 minutes east of Santa Monica on the 10.</p>
            </Link>
            <Link href="/best-boba-los-angeles/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Los Angeles</h3>
              <p className="text-[#4A5568] text-sm">The definitive citywide ranking of the best boba shops across all of LA County, from Santa Monica and the Westside to Koreatown and the SGV.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
