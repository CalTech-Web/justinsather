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
  title: "Best Boba in Hollywood: Top Bubble Tea Near Hollywood Blvd and the Walk of Fame | Justin Sather",
  description: "The complete guide to boba near Hollywood Blvd, the Walk of Fame, and East Hollywood. Includes Mixue's first US location (6922 Hollywood Blvd). Every shop personally visited. Updated 2026.",
};

const faqItems = [
  {
    question: "What is the best boba near Hollywood Blvd?",
    answer: "Mixue at 6922 Hollywood Blvd is the best boba directly on Hollywood Blvd. It is the world's largest boba chain's first US location, with drinks starting at $3.99. For premium boba, Koreatown is 15 minutes west and has Tiger Sugar, Happy Lemon, and Machi Machi, which are among the best in all of Los Angeles.",
  },
  {
    question: "Is there boba on the Hollywood Walk of Fame?",
    answer: "Yes. Mixue opened its first US location at 6922 Hollywood Blvd in December 2025, directly on the Hollywood Walk of Fame across from the TCL Chinese Theatre. It is the most affordable boba on the list, with drinks starting at $3.99. Mashti Malone is also within walking distance on Hollywood Blvd for Persian ice cream.",
  },
  {
    question: "What is the cheapest boba near Hollywood?",
    answer: "Mixue at 6922 Hollywood Blvd is the cheapest boba near Hollywood, with drinks starting at $3.99. Most drinks range from $3.99 to $5.99. It is the most affordable boba shop reviewed anywhere in Los Angeles. It's Boba Time is the next most affordable, with drinks ranging from $5.25 to $6.25 at multiple LA locations.",
  },
  {
    question: "How far is Hollywood from Koreatown for boba?",
    answer: "Hollywood is about 3 to 5 miles from Koreatown, roughly 10 to 15 minutes by car depending on traffic. Koreatown is the premier boba neighborhood closest to Hollywood, with Tiger Sugar, Happy Lemon, Feng Cha, and Machi Machi all within a few blocks of each other. For tourist visitors in Hollywood, Koreatown makes an excellent detour for serious boba.",
  },
  {
    question: "What should tourists order for boba near Hollywood?",
    answer: "Start with Mixue at 6922 Hollywood Blvd for the global novelty and the price. The Lemon Tea and Pearl Milk Tea are the best first orders. For a dessert stop, Mashti Malone on Hollywood Blvd is a 40-plus year LA institution for Persian ice cream with saffron and rosewater flavors. For the best boba experience, make the 15-minute drive to Koreatown and go to Tiger Sugar.",
  },
  {
    question: "What bubble tea is near East Hollywood?",
    answer: "East Hollywood sits between Hollywood and Koreatown. The Little Armenia area on Santa Monica Blvd has some casual boba options. For the best bubble tea accessible from East Hollywood, Koreatown is the logical choice, roughly 10 minutes west. Tiger Sugar, Happy Lemon, and Machi Machi are all in Koreatown and represent the best boba within easy reach of East Hollywood.",
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

const hollywoodShops = [
  {
    rank: 1,
    name: "Mixue",
    city: "6922 Hollywood Blvd (Hollywood)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "3.9",
    price: "$",
    address: "6922 Hollywood Blvd, Hollywood",
    bestFor: "The most affordable boba in LA, Snow King soft serve, global chain novelty",
    mustOrder: "Lemon Tea, Pearl Milk Tea, Snow King Soft Serve",
    verdict: "The world's largest boba chain (42,000+ locations globally, surpassing McDonald's in many markets) opened its first US location here in December 2025. At $3.99 to $5.99 per drink, it is the cheapest boba you will find anywhere in Los Angeles. The Lemon Tea is the global signature and the best first order. The Snow King soft serve at under $2 is worth adding. Not the most refined boba in LA, but the price, the Hollywood Blvd location, and the novelty of the world's biggest chain landing here make it a legitimate stop.",
    href: "/mixue-review-los-angeles/",
  },
  {
    rank: 2,
    name: "Mashti Malone",
    city: "Hollywood Blvd (Hollywood)",
    image: "/assets/products/mashti_malone_product.png",
    rating: "4.7",
    price: "$$",
    address: "Hollywood Blvd, Hollywood",
    bestFor: "Persian ice cream, saffron bastani, rosewater, faloodeh",
    mustOrder: "Saffron Bastani, Rose and Pistachio, Faloodeh",
    verdict: "Not boba, but the best specialty dessert on Hollywood Blvd by a wide margin. Mashti Malone has been making Persian ice cream at this Hollywood location for over 40 years. The saffron bastani is the most distinctive dessert you will find in Hollywood: saffron and rose water in a creamy base with pistachios, served in a paper cup or cone. The faloodeh (Persian rose water sorbet with vermicelli noodles) is unlike anything else in LA. A genuine institution and one of the most underrated stops on Hollywood Blvd.",
    href: "/mashti-malone-review-los-angeles/",
  },
  {
    rank: 3,
    name: "Tiger Sugar",
    city: "Koreatown (15 min west)",
    image: "/assets/products/tiger_sugar_drink.png",
    rating: "5",
    price: "$$",
    address: "Olympic Blvd, Koreatown",
    bestFor: "Brown sugar boba, fresh-cooked pearls, ceremonial torching presentation",
    mustOrder: "Brown Sugar Boba Milk with Cream Mousse",
    verdict: "The best boba within 15 minutes of Hollywood, and the best brown sugar boba in Los Angeles. Tiger Sugar uses Okinawa black sugar pearls cooked fresh every four hours and torches the brown sugar syrup tableside. The closest thing to a mandatory stop for anyone who wants to understand why LA's boba scene is different from everywhere else. The Koreatown location on Olympic Blvd is the most consistent in all of LA. Make the 15-minute drive.",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
  },
  {
    rank: 4,
    name: "Machi Machi",
    city: "Koreatown (15 min west)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1",
    price: "$$",
    address: "Koreatown",
    bestFor: "Cheese foam tea, Earl Grey with Cheese Foam, Brown Sugar Cheese Foam",
    mustOrder: "Earl Grey with Cheese Foam, Brown Sugar Cheese Foam Series",
    verdict: "The only shop in Los Angeles that built its entire identity around cheese foam. Machi Machi is the reason to go to Koreatown if you have been to Tiger Sugar before and want something different. The Earl Grey with Cheese Foam is the best version of this format in LA: a strongly brewed base cut by the lightly salted cream cheese foam on top. One of the most distinctive boba experiences near Hollywood, 15 minutes west in Koreatown.",
    href: "/machi-machi-review-los-angeles/",
  },
  {
    rank: 5,
    name: "Happy Lemon",
    city: "Koreatown (15 min west)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Koreatown",
    bestFor: "Rock salt and cheese series, roasted oolong, QQ Cocoa",
    mustOrder: "Rock Salt and Cheese Oolong, QQ Cocoa",
    verdict: "Happy Lemon introduced Rock Salt and Cheese foam to Los Angeles and the Koreatown location is one of the best-run shops in the chain. The cheese foam is consistent, the roasted oolong base is properly brewed, and the QQ Cocoa (chocolate with multiple tapioca toppings) is one of the better value drinks in Koreatown. A reliable second stop after Tiger Sugar when doing the Koreatown boba run from Hollywood.",
    href: "/happy-lemon-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Somi Somi",
    city: "Koreatown (15 min west)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.5",
    price: "$$",
    address: "Koreatown",
    bestFor: "Fish-shaped waffle cones (ah-boong), Korean soft serve, injeolmi, ube, matcha",
    mustOrder: "Injeolmi Soft Serve in Ah-Boong, Ube Soft Serve",
    verdict: "One of the most photogenic dessert experiences in Koreatown. Somi Somi serves soft serve in fish-shaped waffle cones (ah-boong) made fresh for each order, filled with injeolmi (Korean rice cake powder), ube, matcha, or black sesame soft serve. For visitors coming from Hollywood who want a Korean dessert experience that goes beyond boba, Somi Somi is worth the 15-minute drive specifically. The fish-shaped cone is the kind of thing Hollywood tourists specifically seek out.",
    href: "/somi-somi-review-los-angeles/",
  },
  {
    rank: 7,
    name: "It's Boba Time",
    city: "Multiple LA locations",
    image: "/assets/products/its_boba_time_exterior.png",
    rating: "4",
    price: "$",
    address: "Multiple LA locations",
    bestFor: "Value milk teas, accessible pricing, LA-founded chain",
    mustOrder: "Classic Milk Tea, Brown Sugar Boba",
    verdict: "An LA-founded chain with multiple locations across the city and the second most affordable option on this list at $5.25 to $6.25 per drink. It's Boba Time is a good fallback when the drive to Koreatown is not in the plan. The milk tea program is reliable, pearls are fresh, and the service is quick. For Hollywood visitors who want boba without leaving the area, a nearby It's Boba Time location is the practical answer.",
    href: "/its-boba-time-review-los-angeles/",
  },
];

const moreShops = [
  { name: "Feng Cha", city: "Koreatown", note: "One of the best everyday boba shops in Koreatown. The brown sugar milk tea is a dependable order. One of the most-searched boba chains in Los Angeles. Read the full review.", href: "/feng-cha-review-los-angeles/" },
  { name: "Mochinut", city: "Koreatown and Torrance", note: "Korean-Taiwanese mochi donuts paired with a full boba program. The best combination dessert stop near Hollywood: one mochi donut and one boba in the same visit. Read the full review.", href: "/mochinut-review-los-angeles/" },
  { name: "Gong Cha", city: "Multiple LA locations", note: "One of the most recognized boba brands globally, with multiple LA locations. Solid milk tea program built on High Mountain Oolong. Read the full review.", href: "/gong-cha-review-los-angeles/" },
  { name: "Kung Fu Tea", city: "Multiple LA locations", note: "A reliable chain-level option across multiple LA locations. The Taro Slush is one of its better drinks. Good for casual boba without overthinking it. Read the full review.", href: "/kung-fu-tea-review-los-angeles/" },
  { name: "CoCo Fresh Tea", city: "Multiple LA locations", note: "The world's largest boba chain by outlet count, with an LA presence. The Avocado Smoothie Milk Tea is a unique item no other chain offers. Read the full review.", href: "/coco-fresh-tea-review-los-angeles/" },
  { name: "Boba Guys", city: "Rideback Ranch, Los Angeles", note: "Premium boba using hormone-free milk and organic cane sugar. The most elevated chain-level experience in LA. Worth the drive for a special visit. Read the full review.", href: "/boba-guys-review-los-angeles/" },
];

export default function BestBobaHollywoodPage() {
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
                Best Boba in Hollywood: Top Bubble Tea Near Hollywood Blvd and the Walk of Fame
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Hollywood Blvd now has Mixue, the world's largest boba chain's first US location. For the best premium boba, Koreatown is 15 minutes west. Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">7 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Hollywood, East Hollywood, Koreatown</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/boba_koreatown_guide.png"
                alt="Best boba near Hollywood Blvd and the Walk of Fame Los Angeles"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Honest Guide to Boba Near Hollywood</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Hollywood Blvd is not traditionally a boba destination. That changed in December 2025 when Mixue, the world's largest boba chain with over 42,000 locations globally, chose 6922 Hollywood Blvd as its first US location. Across from the TCL Chinese Theatre, it is now the most affordable boba in LA and the most globally significant chain opening this city has seen.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            For serious boba, Koreatown is the answer. It is 10 to 15 minutes west of Hollywood Blvd and has Tiger Sugar, Happy Lemon, Machi Machi, and Feng Cha all within a few blocks of each other on and around Olympic Blvd. The quality difference between Hollywood's chain options and the best Koreatown shops is significant.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            The guide below covers every shop worth visiting within 20 minutes of Hollywood, starting with the on-Blvd options and working west toward Koreatown where the best boba in this part of LA actually lives.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba Near Hollywood, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, value, and proximity to Hollywood Blvd.</p>

          <div className="space-y-8">
            {hollywoodShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba near Hollywood Los Angeles`}
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Worth Visiting Near Hollywood</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Additional options accessible from Hollywood within 20 minutes that are worth knowing about.</p>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Hollywood Blvd, East Hollywood, and Koreatown</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Hollywood Blvd</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Hollywood Blvd now has two noteworthy stops for dessert within walking distance of the Walk of Fame. Mixue at 6922 Hollywood Blvd is the world's largest boba chain's first US location, serving the most affordable boba in Los Angeles starting at $3.99. Mashti Malone is the neighborhood's other essential stop, a 40-plus year Persian ice cream institution with flavors like saffron bastani and faloodeh that you cannot find anywhere else on the Blvd. For visitors spending time at the TCL Chinese Theatre or the Hollywood Walk of Fame, both are worth a stop.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">East Hollywood and Little Armenia</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                East Hollywood, the stretch along Santa Monica Blvd between Hollywood and Koreatown, has some casual boba options and chain locations. The Little Armenia corridor is better known for its Armenian restaurants and bakeries than for boba. For quality bubble tea from East Hollywood, the 10-minute drive west to Koreatown is always the better choice.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Koreatown (15 min west)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Koreatown is the premier boba destination nearest to Hollywood. Tiger Sugar, Happy Lemon, Machi Machi, Feng Cha, and Somi Somi are all within a few blocks of each other on and around Olympic Blvd. The concentration of quality shops in Koreatown is unmatched anywhere else this close to Hollywood. From Hollywood Blvd, the drive is about 15 minutes on Fountain Ave or Hollywood Blvd heading west, and parking on and around Olympic Blvd is workable. For anyone who wants to understand why Los Angeles has one of the best boba scenes in North America, this 15-minute drive is the answer.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Los Feliz (adjacent)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Los Feliz borders Hollywood to the east and does not have a dedicated boba scene. The Vermont Ave and Hillhurst Ave corridors are excellent for restaurants and coffee but thin for bubble tea. From Los Feliz, Koreatown is 10 to 15 minutes west and covers everything the immediate neighborhood lacks for boba. Wanderlust Creamery in adjacent Atwater Village is the best specialty dessert option if you are staying on the Eastside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Hollywood Boba FAQ</h2>
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
              <p className="text-[#4A5568] text-sm">The complete guide to 30+ boba shops in Koreatown, the best boba neighborhood in Los Angeles and just 15 minutes west of Hollywood.</p>
            </Link>
            <Link href="/best-boba-west-hollywood/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in West Hollywood</h3>
              <p className="text-[#4A5568] text-sm">Where to find boba near WeHo, the Sunset Strip, and Melrose Ave. West Hollywood&apos;s own scene is limited; Koreatown is 10 to 15 min east. The complete guide.</p>
            </Link>
            <Link href="/best-boba-los-angeles/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Los Angeles</h3>
              <p className="text-[#4A5568] text-sm">The definitive citywide ranking of the best boba shops across all of LA County, from Hollywood to Koreatown, Westwood, and the SGV.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
