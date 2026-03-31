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
  title: "Best Boba in Culver City: Top Bubble Tea Near Sony Pictures, Amazon Studios, and the Westside | Justin Sather",
  description: "The complete guide to boba in Culver City, CA. Yi Fang on Sawtelle is 10 minutes north and the best nearby option. Milksha and Sharetea are 15 minutes north in Westwood. Koreatown is 20 minutes east. Every shop personally visited, zero sponsorships. Updated 2026.",
};

const faqItems = [
  {
    question: "What is the best boba in Culver City?",
    answer: "Culver City itself has limited dedicated boba. The best option nearby is Yi Fang Taiwan Fruit Tea on Sawtelle Blvd, about 10 minutes north of downtown Culver City. Yi Fang uses real fresh fruit rather than syrup, and the Pineapple Green Tea and Taiwan Lemon Green Tea are the essential orders. For premium milk tea, Milksha Westwood at 1009 Broxton Ave in Westwood Village is about 15 minutes north and is one of the best boba shops in LA. Koreatown, the best boba neighborhood in Los Angeles, is about 20 minutes east via the 10 freeway.",
  },
  {
    question: "Is there boba near Sony Pictures Studios in Culver City?",
    answer: "The closest boba to Sony Pictures Studios on Washington Blvd is the Sawtelle corridor, about 10 to 15 minutes north by car. Yi Fang Taiwan Fruit Tea on Sawtelle Blvd is the best and most convenient stop for anyone leaving the Sony lot. The Sawtelle Japantown corridor has strong food and drink density including Yi Fang and several other boba options. For a quick lunch or post-meeting stop near the studio, Sawtelle north via National Blvd is the most direct route.",
  },
  {
    question: "Where can I find boba near Amazon Studios in Culver City?",
    answer: "Amazon Studios is based in the former Culver Studios building at 9336 Washington Blvd, Culver City. The nearest dedicated boba is Yi Fang Taiwan Fruit Tea on Sawtelle Blvd, about 10 to 12 minutes north. Milksha and Sharetea in Westwood Village are about 15 to 20 minutes north and are the best options on the Westside for premium milk tea. For larger team outings, the Sawtelle corridor north of the 10 freeway has several boba and food options within a short drive of the Amazon campus.",
  },
  {
    question: "How far is Culver City from Koreatown for boba?",
    answer: "Culver City is about 8 to 10 miles from the heart of Koreatown, roughly 20 to 30 minutes by car via the 10 freeway east to Vermont Ave or Western Ave. This is one of the shorter drives among Westside neighborhoods. Tiger Sugar, Happy Lemon, and Machi Machi are all on or near Olympic Blvd between Vermont and Western. For Culver City residents, Koreatown is accessible enough to be a planned destination stop rather than requiring a special trip, especially compared to Burbank or the Valley where the drive is 30 to 40 minutes.",
  },
  {
    question: "What is the best boba near Sawtelle in Culver City?",
    answer: "Sawtelle Blvd, also known as the Sawtelle Japantown corridor, runs north-south between Olympic Blvd and Santa Monica Blvd in West LA, about 10 minutes north of downtown Culver City. Yi Fang Taiwan Fruit Tea on Sawtelle is the best boba in the corridor: the Pineapple Green Tea and Taiwan Lemon Green Tea use real chopped fruit blended into the drink, which is rare in LA. The Sawtelle corridor has high food density including ramen, izakaya, and other Japanese-influenced spots, making it the most convenient boba and dining destination for Culver City residents heading north.",
  },
  {
    question: "Is boba open late in Culver City?",
    answer: "Hours in the Culver City and Sawtelle area are more limited than in Koreatown. Yi Fang on Sawtelle typically closes by 9 or 10 PM. Milksha in Westwood is open later some evenings but check current hours before visiting. For late-night boba, Koreatown is 20 minutes east and several shops there, including Happy Lemon and Gong Cha, stay open until 10 or 11 PM on weekdays and later on weekends. Always confirm hours directly with the shop before a late-night visit.",
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

const culverCityShops = [
  {
    rank: 1,
    name: "Yi Fang Taiwan Fruit Tea",
    city: "Sawtelle (10 min north)",
    image: "/assets/products/yifang_drink.png",
    rating: "4.5",
    price: "$$",
    address: "Sawtelle Blvd, West LA (near Culver City)",
    bestFor: "Real fruit boba, Pineapple Green Tea, Taiwan Lemon Green Tea, no syrup",
    mustOrder: "Pineapple Green Tea, Taiwan Lemon Green Tea",
    verdict: "The best boba within a short drive north of Culver City and the first stop anyone on the Westside should make. Yi Fang's defining difference is real fruit: the Pineapple Green Tea uses fresh pineapple blended into the drink rather than syrup or concentrate, and the Taiwan Lemon Green Tea does the same with fresh lemon. This is not common in LA, where most shops use flavored powder or sugar syrup. The result is lighter, brighter, and less sweet than standard milk tea. For a post-work stop from the Sony or Amazon campus heading north toward Sawtelle, Yi Fang is the clear choice.",
    href: "/yi-fang-taiwan-fruit-tea-review-los-angeles/",
  },
  {
    rank: 2,
    name: "Milksha Westwood",
    city: "Westwood Village (15 min north)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.6",
    price: "$$$",
    address: "1009 Broxton Ave, Los Angeles, CA 90024",
    bestFor: "Fresh milk from Taiwan dairy farms, no powder, real taro from Dajia, Campus Crush exclusive",
    mustOrder: "Fresh Taro Milk Tea, Taro Smoothie, Campus Crush (Westwood-exclusive)",
    verdict: "Taiwan's largest fresh milk boba brand, and its first US location is 15 minutes north of Culver City in Westwood Village. The difference is the milk: Milksha sources from Taiwan dairy farms and uses no powder, no creamer, and no non-dairy substitutes. The result is a milk tea that tastes like actual milk, not a milk-adjacent beverage. The Fresh Taro Milk Tea uses real taro from Dajia, Taiwan, which has a purple color and earthy sweetness that powder taro cannot replicate. The Campus Crush is a Westwood-exclusive item only available at this location. At $7 to $9.50, it is the most expensive boba in this guide, but the ingredient quality justifies it.",
    href: "/milksha-westwood-review/",
  },
  {
    rank: 3,
    name: "Sharetea Westwood",
    city: "Westwood Village (15 min north)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "1036 Westwood Blvd, Los Angeles, CA 90024",
    bestFor: "Three Mates signature drink, classic handcrafted teas, reliable UCLA area anchor",
    mustOrder: "Three Mates, Handcrafted Milk Tea",
    verdict: "The reliable anchor of the Westwood boba corridor, about 15 minutes north of Culver City. Sharetea is a global chain (Taiwan-founded, 600+ locations) that manages consistency at scale without the quality compromises most chains make. The Three Mates, a blend of oolong, green, and black tea, is the house signature and worth ordering on a first visit. The Handcrafted Milk Tea is the standard by which most chains should be judged. For Culver City residents who want a consistent, well-made milk tea without making the full 20-minute drive to Koreatown, Sharetea in Westwood is the practical answer.",
    href: "/sharetea-westwood-review/",
  },
  {
    rank: 4,
    name: "Boba Guys",
    city: "West LA / multiple LA locations (15 to 20 min)",
    image: "/assets/products/boba_guys_drinks.png",
    rating: "4.5",
    price: "$$$",
    address: "Multiple LA locations",
    bestFor: "Organic ingredients, Strawberry Matcha, Earl Grey Milk Tea, premium chain",
    mustOrder: "Strawberry Matcha, Earl Grey Milk Tea, Horchata",
    verdict: "The premium organic-ingredient boba chain, with LA locations accessible from Culver City in about 15 to 20 minutes. Boba Guys' defining commitment is to high-quality ingredients: USDA-certified organic dairy, ceremonial-grade matcha, Straus Family Creamery cream, and housemade syrups. The Strawberry Matcha is one of the most distinctive drinks in the city, using ceremonial matcha and real strawberry rather than syrup. At $7 to $10 per drink, it is the most expensive boba chain in LA, but ingredient quality is the highest of any chain in the city. For Culver City residents willing to pay for that standard, Boba Guys is the premium choice on the Westside.",
    href: "/boba-guys-review-los-angeles/",
  },
  {
    rank: 5,
    name: "Gong Cha",
    city: "West LA / multiple locations near Culver City",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Multiple West LA locations",
    bestFor: "High Mountain Oolong base, Brown Sugar Milk Tea with Pearl, global chain consistency",
    mustOrder: "Brown Sugar Milk Tea with Pearl, Oolong Milk Tea",
    verdict: "One of the world's largest boba chains (2,000+ locations in 20+ countries) with West LA locations accessible from Culver City in 10 to 15 minutes. Gong Cha's differentiator is its High Mountain Oolong tea base, which gives standard milk teas more depth than most chains at the same price. The Brown Sugar Milk Tea with Pearl is the most ordered drink, and Gong Cha's consistency across locations is the best argument for it over smaller chains when a quick, reliable stop is what the situation calls for. For Culver City residents who do not want to drive to Sawtelle or Westwood, a nearby Gong Cha is the practical option.",
    href: "/gong-cha-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Tiger Sugar",
    city: "Koreatown (20 to 25 min east via 10 freeway)",
    image: "/assets/products/tiger_sugar_drink.png",
    rating: "5.0",
    price: "$$",
    address: "Koreatown, Los Angeles",
    bestFor: "Brown Sugar Boba Milk with Cream Mousse, Okinawa black sugar pearls, best brown sugar boba in LA",
    mustOrder: "Brown Sugar Boba Milk with Cream Mousse",
    verdict: "The best brown sugar boba in Los Angeles, and 20 to 25 minutes from Culver City via the 10 freeway east to Vermont Ave. Tiger Sugar uses Okinawa black sugar rather than caramel syrup, cooks pearls in small batches every four hours, and makes the cream mousse in-house. These three decisions produce a drink with no equivalent anywhere on the Westside. The Koreatown drive from Culver City is shorter than from Burbank or the Valley, making Tiger Sugar a more realistic destination stop for Culver City residents planning a dedicated boba outing. Take the 10 east to Vermont Ave and the Koreatown boba corridor is immediately accessible.",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
  },
];

const moreShops = [
  { name: "Kung Fu Tea", city: "Multiple LA locations near Culver City", note: "The most affordable and widely accessible chain boba option on the Westside, with multiple locations reachable from Culver City. Kung Fu Milk Tea and Taro Slush are the essential orders. Read the full review.", href: "/kung-fu-tea-review-los-angeles/" },
  { name: "It's Boba Time", city: "Multiple LA locations", note: "The Los Angeles original founded in 1999, with multiple LA locations accessible from Culver City. Classic Taro Milk Tea, value pricing under $7. Read the full review.", href: "/its-boba-time-review-los-angeles/" },
  { name: "CoCo Fresh Tea & Juice", city: "Multiple LA locations", note: "The world's largest boba chain by outlet count (4,000+ locations, 40+ countries). The unique Avocado Smoothie Milk Tea is available nowhere else in LA. Affordable at $4.50 to $7. Read the full review.", href: "/coco-fresh-tea-review-los-angeles/" },
  { name: "Wanderlust Creamery", city: "Atwater Village (25 to 30 min northeast)", note: "LA's most creative ice cream shop, with travel-inspired flavors like ube, Thai tea, and champurrado made with real ingredients. Best for an ice cream visit rather than boba, but the quality is exceptional. Read the full review.", href: "/wanderlust-creamery-review-los-angeles/" },
  { name: "Happy Lemon", city: "SGV / multiple LA locations (25 to 30 min east)", note: "The chain that introduced cheese foam to Los Angeles. Rock Salt and Cheese Oolong is the defining order. SGV locations are accessible from Culver City via the 10 freeway east. Read the full review.", href: "/happy-lemon-review-los-angeles/" },
  { name: "Chicha San Chen", city: "San Gabriel (30 to 40 min east via 10 freeway)", note: "World Tea Championship credentials and the best oolong-based boba in the SGV. Four Seasons Tea is the essential order. Worth the drive for a dedicated boba outing from Culver City. Read the full review.", href: "/chicha-san-chen-san-gabriel-review/" },
];

export default function BestBobaCulverCityPage() {
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
                Best Boba in Culver City: Top Bubble Tea Near Sony Pictures, Amazon Studios, and the Westside
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Culver City has limited dedicated boba. Yi Fang on Sawtelle is 10 minutes north and the best nearby option. Milksha and Sharetea are 15 minutes north in Westwood. Koreatown is 20 minutes east via the 10 freeway. Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">6 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Culver City, Sawtelle, Westwood, Koreatown</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/best-boba-los-angeles-feature-full.jpeg"
                alt="Best boba in Culver City near Sony Pictures Amazon Studios Westside Los Angeles"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Honest Guide to Boba in Culver City</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Culver City is one of the most important entertainment and technology hubs in Los Angeles. Sony Pictures Entertainment has been headquartered here since 1990. Amazon Studios, Apple TV+, and HBO&apos;s West Coast operations are all based along Washington Blvd and the surrounding Culver City corridor. The city has strong dining on Washington Blvd and in the Helms Design District. Dedicated boba, however, is limited compared to Koreatown or the SGV.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            The best boba near Culver City is Yi Fang Taiwan Fruit Tea on Sawtelle Blvd, about 10 minutes north on National Blvd. Yi Fang uses real fruit rather than syrup, which makes it one of the most distinctive boba shops on the Westside. The Sawtelle Japantown corridor, running north-south between Olympic Blvd and Santa Monica Blvd, has the highest concentration of boba and Asian food options on the Westside, making it the first stop for anyone heading north from Culver City.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            Westwood Village, 15 minutes north, adds Milksha and Sharetea to the options. For the full Koreatown experience, Tiger Sugar and Happy Lemon are about 20 to 25 minutes east via the 10 freeway. The Koreatown drive from Culver City is shorter than from Burbank or the Valley, making it a more practical destination stop for Westside residents who want the best boba in LA.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba Near Culver City, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, value, and accessibility from Culver City.</p>

          <div className="space-y-8">
            {culverCityShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba near Culver City Los Angeles`}
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Worth Visiting Near Culver City</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Additional options accessible from Culver City within 15 to 40 minutes that are worth knowing about.</p>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Washington Blvd, Sawtelle, Westwood, and Koreatown</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Downtown Culver City and Washington Blvd</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Washington Blvd is Culver City&apos;s main commercial corridor, running east-west through the heart of the city. It connects the Sony Pictures lot to the east with the Helms Design District and the residential neighborhoods west toward Culver Center. The corridor has excellent restaurants, coffee, and food options. Dedicated boba shops are not a primary feature of Washington Blvd itself, but the area is within a 10 to 15 minute drive of the Sawtelle and Westwood corridors where the best Westside boba is concentrated.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Sawtelle Blvd / Japantown Corridor (Best Nearby Boba, 10 Min North)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Sawtelle Blvd, the Japantown corridor of West LA, is the best boba destination accessible from Culver City and about 10 minutes north via National Blvd. Yi Fang Taiwan Fruit Tea is the standout shop, using real fresh fruit in a way that is genuinely rare in LA. The Sawtelle corridor runs from Olympic Blvd north to Santa Monica Blvd and has the highest concentration of Japanese and Taiwanese food on the Westside, including ramen, izakaya, Japanese grocery stores, and the cluster of boba and tea shops anchored by Yi Fang. For anyone leaving the Sony, Amazon, or Apple campus heading north, Sawtelle is the most practical and rewarding boba destination.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Westwood Village (15 Min North, Milksha and Sharetea)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Westwood Village, home to UCLA and 45,000+ students, is about 15 minutes north of Culver City via Sepulveda Blvd or National Blvd. Milksha at 1009 Broxton Ave is Taiwan&apos;s largest fresh milk boba brand, with its first US location in Westwood Village opened in fall 2025. Sharetea at 1036 Westwood Blvd is the reliable chain anchor. Both shops serve the UCLA student population and the surrounding Westwood residential neighborhood. Westwood is also where Culver City residents will find the highest concentration of food and drink options in a walkable village setting before making the longer drive to Koreatown or the SGV.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">West LA and the Pico Corridor (Chain Options, 10 to 15 Min)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The West LA corridor along Pico Blvd, National Blvd, and Olympic Blvd between Culver City and Westwood has chain boba options including Gong Cha and Kung Fu Tea locations. For a quick after-work stop without driving to Sawtelle or Westwood, the West LA chain options are the most convenient choice for Culver City workers or residents who need boba in under 15 minutes. Quality is chain-level, but Gong Cha&apos;s High Mountain Oolong base and Kung Fu Tea&apos;s consistent value pricing make them reliable options in this corridor.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Mar Vista, Palms, and West Adams (Nearby Neighborhoods)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The neighborhoods immediately surrounding Culver City, including Mar Vista to the west, Palms to the north, and West Adams to the east, share Culver City&apos;s limited boba scene. There are no significant dedicated boba destinations within these neighborhoods. The strategy for residents of all four areas is the same: head north to Sawtelle or Westwood for the best Westside boba, or take the 10 freeway east toward Koreatown for the best boba in Los Angeles.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Koreatown (The Best Boba in LA, 20 to 25 Min East)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Koreatown is the premier boba destination in Los Angeles and is closer to Culver City than to most Valley or South Bay neighborhoods. Take the 10 freeway east to Vermont Ave or Western Ave for the densest part of the Koreatown boba corridor. Tiger Sugar, Happy Lemon, and Machi Machi are all on or near Olympic Blvd between Vermont and Western, a 10-block concentration with no equivalent anywhere on the Westside. The 20 to 25 minute drive from Culver City is short enough to make Koreatown a realistic destination for a dedicated boba outing, especially when the Westside options have already been covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Culver City Boba FAQ</h2>
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
              <p className="text-[#4A5568] text-sm">The guide for boba near the Santa Monica Pier, Third Street Promenade, and the broader Westside. Includes Sawtelle, Westwood, and the best options west of Culver City.</p>
            </Link>
            <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Koreatown</h3>
              <p className="text-[#4A5568] text-sm">The complete guide to 30+ boba shops in Koreatown, 20 minutes east of Culver City via the 10 freeway. Tiger Sugar, Happy Lemon, and Machi Machi in one corridor.</p>
            </Link>
            <Link href="/best-boba-los-angeles/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Los Angeles</h3>
              <p className="text-[#4A5568] text-sm">The complete citywide ranking of 22+ boba shops across all of Los Angeles County, organized by neighborhood with full review links.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
