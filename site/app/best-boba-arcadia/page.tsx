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
  title: "Best Boba in Arcadia: Complete Guide to The Alley, 85 Degrees, and SGV Gems | Justin Sather",
  description: "The complete guide to boba in Arcadia, CA. The Alley (Deerioca crystal tapioca), 85 Degrees Bakery (sea salt coffee), Happy Lemon, Xing Fu Tang, and more. All shops personally visited, zero sponsorships.",
};

const faqItems = [
  {
    question: "What is the best boba in Arcadia?",
    answer: "The Alley is the best boba shop in Arcadia. It is the only shop in the SGV built around Deerioca, a proprietary crystal tapioca made from cassava that is lighter and more translucent than standard tapioca pearls, with a distinct chewiness that is unique in LA. The Roasted Oolong Milk Tea with Deerioca is the essential order. For the best tea quality in the immediate Arcadia area, Ding Tea is the precision-brewed Taiwanese option on Baldwin Ave. For the broadest value, 85 Degrees Bakery pairs fresh-baked Taiwanese bread and sea salt coffee with a boba stop for one of the best afternoon food pairings in the SGV.",
  },
  {
    question: "Where is boba near Westfield Santa Anita in Arcadia?",
    answer: "Westfield Santa Anita is at 400 S Baldwin Ave in Arcadia. The closest boba options to the mall are along Baldwin Ave and the surrounding Arcadia commercial corridors. The Alley has an Arcadia location near the Baldwin Ave corridor. Ding Tea is also in the Arcadia area near the mall. For a wider range of options, Temple City is 5 to 10 minutes west of Westfield Santa Anita along Las Tunas Dr, where Xing Fu Tang and Half and Half Tea Express are both located. The SGV boba scene is dense enough that visitors to Westfield Santa Anita have several quality options within a 10-minute drive in any direction.",
  },
  {
    question: "How does Arcadia boba compare to the rest of the SGV?",
    answer: "Arcadia is in the middle tier of the SGV boba corridor: better than Pasadena for authentic Taiwanese options but not as dense as Rowland Heights or as landmark-heavy as San Gabriel (home of Chicha San Chen). Arcadia's advantage is the combination of The Alley (most distinctive tapioca in the SGV), 85 Degrees Bakery (best Taiwanese bakery in LA), and proximity to Temple City's Xing Fu Tang (best fresh-cooked pearls). The Baldwin Ave and Las Tunas Dr corridors form the eastern edge of the central SGV boba grid, connecting Arcadia to San Gabriel (south), Temple City (west), and Pasadena (north) in under 15 minutes.",
  },
  {
    question: "Is Arcadia worth visiting for boba?",
    answer: "Yes, specifically because of The Alley and 85 Degrees Bakery. The Alley is the only shop in the SGV serving Deerioca crystal tapioca, which is a completely different experience from standard pearls. 85 Degrees Bakery serves the best Taiwanese bread in LA alongside sea salt coffee, and pairing a 85 Degrees bread visit with a boba stop is one of the best afternoon itineraries in the SGV. Adding Xing Fu Tang in adjacent Temple City (5 to 10 min west) turns an Arcadia boba visit into the most concentrated quality-per-drive tour in the eastern SGV. Chicha San Chen in San Gabriel is 15 to 20 minutes south, making a full eastern SGV boba afternoon feasible in a single trip.",
  },
  {
    question: "What should I order at The Alley in Arcadia?",
    answer: "The Roasted Oolong Milk Tea with Deerioca is the essential order at The Alley. Deerioca is The Alley's proprietary crystal tapioca made from cassava rather than standard starch, giving it a translucent appearance and a light, springy chewiness that is distinct from any other topping in the SGV. The roasted oolong base has a nutty, slightly smoky depth that complements the Deerioca texture. The Brown Sugar Deerioca Milk is the second-best order, a simpler drink that lets the Deerioca texture be the star. Avoid adding too many toppings so the Deerioca can be the focus. Prices at $7 to $9.",
  },
  {
    question: "How far is Arcadia from San Gabriel and Temple City?",
    answer: "Arcadia borders Temple City directly to the west, with most Arcadia boba shops accessible from Temple City in 5 to 10 minutes via Las Tunas Dr or Live Oak Ave. San Gabriel is 10 to 15 minutes south of Arcadia via Baldwin Ave to Valley Blvd. Chicha San Chen in San Gabriel is 15 to 20 minutes from central Arcadia. Pasadena borders Arcadia to the north, with the Rose Bowl and Old Town Pasadena accessible in 10 to 15 minutes via Baldwin Ave north to Colorado Blvd. The combination of Arcadia, Temple City, and San Gabriel forms the best eastern SGV boba loop: The Alley and 85 Degrees in Arcadia, Xing Fu Tang and Half and Half Tea Express in Temple City, and Chicha San Chen in San Gabriel.",
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

const arcadiaShops = [
  {
    rank: 1,
    name: "The Alley",
    city: "Arcadia",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3",
    price: "$$",
    address: "Arcadia, CA",
    bestFor: "Deerioca crystal tapioca, Roasted Oolong Milk Tea, Brown Sugar Deerioca, most distinctive topping in the SGV",
    mustOrder: "Roasted Oolong Milk Tea with Deerioca, Brown Sugar Deerioca Milk",
    verdict: "The best boba shop in Arcadia and one of the most distinctive shops in the entire SGV. The Alley is built around Deerioca, a proprietary crystal tapioca made from cassava that is lighter, more translucent, and springier than standard tapioca pearls. The Roasted Oolong Milk Tea with Deerioca is the essential order: a nutty, smoky oolong base with the unique chewiness of crystal tapioca that exists nowhere else in Arcadia. The Brown Sugar Deerioca Milk is the second essential order for visitors who want to focus on the Deerioca texture without distraction. Prices at $7 to $9. The Arcadia location is the easiest to reach from Westfield Santa Anita and the Baldwin Ave corridor.",
    href: "/the-alley-boba-review-los-angeles/",
  },
  {
    rank: 2,
    name: "85 Degrees Bakery",
    city: "Arcadia",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$",
    address: "Arcadia, CA",
    bestFor: "Sea salt coffee, tiger bread, milk buns, egg tart, Taiwanese bread, best value pastry and coffee in the SGV",
    mustOrder: "Sea Salt Coffee, Tiger Bread, Milk Bun",
    verdict: "The best Taiwanese bakery chain in Los Angeles and the essential companion stop to any Arcadia boba outing. 85 Degrees is built around its sea salt coffee, a cold brew layered with sea salt cream that has become one of the most recognized drinks in the SGV. The tiger bread is baked fresh throughout the day and has a chewy interior and caramelized crust unlike anything at Western bakeries. The egg tart is the best in LA outside of dedicated Hong Kong bakeries. At $3 to $6 per item, 85 Degrees is the best value stop in Arcadia. Pair a 85 Degrees bread run with a The Alley boba stop for the best afternoon combination in the eastern SGV. Multiple Arcadia locations.",
    href: "/85-degrees-bakery-review-los-angeles/",
  },
  {
    rank: 3,
    name: "Happy Lemon",
    city: "Arcadia / Alhambra (multiple SGV locations)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Arcadia / Alhambra, CA",
    bestFor: "Rock Salt and Cheese Oolong, cheese foam originator, Roasted Milk Tea, Hawthorn Green Tea",
    mustOrder: "Rock Salt and Cheese Oolong, Roasted Milk Tea with Rock Salt",
    verdict: "The chain that introduced cheese foam to Los Angeles and one of the most historically important boba brands in the SGV. Happy Lemon's Rock Salt and Cheese series, a savory-sweet cream foam layered over a strong oolong base, became the blueprint for cheese foam drinks across Koreatown and the rest of LA. The Arcadia locations are among the busiest in the SGV, and the Rock Salt and Cheese Oolong is consistently the best introduction to cheese foam boba for first-time visitors. The Hawthorn Green Tea is the best fruit-adjacent order for those who find milk tea too rich. Prices at $6.50 to $9.50.",
    href: "/happy-lemon-review-los-angeles/",
  },
  {
    rank: 4,
    name: "Xing Fu Tang",
    city: "Temple City (5 to 10 min west via Las Tunas Dr)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.7",
    price: "$$",
    address: "Temple City, CA",
    bestFor: "Fresh wok-cooked pearls in small batches, Tiger Milk Tea, Brown Sugar Milk, best tapioca pearls in the eastern SGV",
    mustOrder: "Tiger Milk Tea, Brown Sugar Milk",
    verdict: "The best brown sugar boba option in the eastern SGV and one of the highest-rated shops on the site. Xing Fu Tang cooks its tapioca pearls in small batches in a wok visible from the counter, a theatrical process that produces pearls with a caramelized exterior and a soft, yielding interior that pre-packaged pearls cannot match. The Tiger Milk Tea is the essential order: dark brown sugar syrup striped up the cup over fresh milk, topped with the wok-cooked pearls. Temple City borders Arcadia to the west, and the Xing Fu Tang location is 5 to 10 minutes from central Arcadia via Las Tunas Dr. The natural first stop before or after a The Alley visit in Arcadia. Prices at $7 to $9.",
    href: "/xing-fu-tang-review-los-angeles/",
  },
  {
    rank: 5,
    name: "Half and Half Tea Express",
    city: "Temple City (10 min west)",
    image: "/assets/products/half_and_half_tea_express_drink.png",
    rating: "4.3",
    price: "$$",
    address: "Temple City, CA",
    bestFor: "Cold-brew technique, Top 1 Milk Tea, Sea Salt Cheese Tea, Tiger Pearl, the most craft-focused everyday milk tea in the eastern SGV",
    mustOrder: "Top 1 Milk Tea, Sea Salt Cheese Tea",
    verdict: "The most craft-focused everyday milk tea option accessible from Arcadia. Half and Half Tea Express brews its teas using a cold-brew technique that produces a smoother, less astringent flavor than standard hot-brewed teas, giving even simple milk teas a cleaner, more refined character. The Top 1 Milk Tea is the signature drink, an oolong-based milk tea with a smooth sweetness that highlights the cold-brew difference. The Sea Salt Cheese Tea is the best non-milk-tea order. Temple City is 10 minutes west of central Arcadia via Las Tunas Dr. Pairs well with a Xing Fu Tang visit in the same Temple City stop, leaving Arcadia for The Alley and 85 Degrees on the return east. Prices at $6.50 to $8.50.",
    href: "/half-and-half-tea-express-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Ding Tea",
    city: "Arcadia",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.0",
    price: "$",
    address: "Arcadia, CA",
    bestFor: "Precision-brewed Taiwanese tea, oolong and red tea bases, reliable everyday value in Arcadia",
    mustOrder: "Oolong Milk Tea, Red Tea Latte",
    verdict: "The most reliable precision-brewed Taiwanese chain option in Arcadia. Ding Tea is one of the original Taiwanese boba franchises from the 1990s wave of boba expansion, and the Arcadia location maintains the brand's commitment to properly brewed tea bases over powder concentrates. The oolong and red tea bases are both well-sourced, and the Oolong Milk Tea is the cleanest expression of what good everyday boba tastes like without cheese foam, brown sugar, or complex toppings. Underrated in the Arcadia area because it lacks the visual drama of The Alley or the brand recognition of Happy Lemon, but the tea quality is better than most SGV chains at this price point. Prices at $5 to $7.",
    href: "/ding-tea-review-los-angeles/",
  },
];

const moreShops = [
  { name: "Chicha San Chen", city: "San Gabriel (15 to 20 min south via Baldwin Ave to Valley Blvd)", note: "The highest-rated boba shop in the SGV and one of the best in Los Angeles. World Tea Championship winner, Four Seasons oolong, Wuyi Mountain Oolong. The essential boba destination for anyone willing to extend an Arcadia trip 15 minutes south.", href: "/chicha-san-chen-san-gabriel-review/" },
  { name: "Sunright Tea Studio", city: "Pasadena (15 min north via Baldwin Ave)", note: "Sun Moon Lake black tea sourced directly from Sun Moon Lake in Nantou County, Taiwan. Alishan Oolong Milk Tea. The best specialty tea option north of Arcadia, accessible via Baldwin Ave heading toward Old Town Pasadena.", href: "/sunright-tea-studio-review-los-angeles/" },
  { name: "Moge Tee", city: "Rowland Heights (20 to 25 min east via 210/60)", note: "Yunnan Pu-erh tea base, completely unique in the SGV. The Dirty Pu-erh and Cheese Pu-erh Milk Tea are unlike anything else in the region. Worth adding to a Rowland Heights extension from Arcadia via the 210.", href: "/moge-tee-review-los-angeles/" },
  { name: "Tastea", city: "Alhambra / West Covina (10 to 20 min west or east)", note: "Rose Matcha Milk Tea and Strawberry Milk Tea. Alhambra location is 10 to 15 minutes west of Arcadia via Valley Blvd. A reliable option when the more distinctive shops are at capacity.", href: "/tastea-review-los-angeles/" },
  { name: "Chatime", city: "SGV locations including Arcadia area", note: "QQ multi-topping system is the chain's key differentiator, letting customers combine different textures in a single drink. Ruby Red Tea (hibiscus-based fruit tea) is the best non-milk-tea order.", href: "/chatime-review-los-angeles/" },
  { name: "CoCo Fresh Tea", city: "SGV locations (Alhambra area, 10 to 15 min west)", note: "World's largest boba chain by outlet count. Avocado Smoothie Milk Tea is the unique differentiator. Best value everyday option in the SGV at $4.50 to $7.", href: "/coco-fresh-tea-review-los-angeles/" },
];

export default function BestBobaArcadiaPage() {
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
                Best Boba in Arcadia: The Alley, 85 Degrees, and the Eastern SGV Grid
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Arcadia anchors the eastern edge of the SGV boba corridor, with The Alley serving the most distinctive crystal tapioca in Los Angeles and 85 Degrees Bakery offering the best Taiwanese bread and sea salt coffee in the region. Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">6 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Baldwin Ave, Las Tunas Dr, Westfield Santa Anita</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Best boba in Arcadia California SGV bubble tea The Alley 85 Degrees"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Honest Guide to Boba in Arcadia</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Arcadia is the eastern anchor of the central SGV boba corridor, bordered by Temple City to the west, San Gabriel to the south, and Pasadena to the north. The city&apos;s boba scene is defined by two distinct draws: The Alley, the only shop in the SGV built around Deerioca crystal tapioca, and 85 Degrees Bakery, the best Taiwanese bread and sea salt coffee operation in Los Angeles.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            The Baldwin Ave corridor running north-south is the commercial spine of Arcadia, connecting Westfield Santa Anita (one of the largest malls in the San Gabriel Valley) to the residential neighborhoods south of Live Oak Ave. Las Tunas Dr running east-west is the connection point to Temple City 5 to 10 minutes west, where Xing Fu Tang and Half and Half Tea Express are both located. Together, Arcadia and Temple City form the best eastern SGV boba pairing outside of Rowland Heights.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            For visitors approaching from Pasadena or the 210 freeway, Arcadia is the first serious boba destination heading south into the SGV. For visitors approaching from San Gabriel or Alhambra, it is the eastern terminus of the Valley Blvd corridor before the 605 freeway. Chicha San Chen in San Gabriel is 15 to 20 minutes south of Arcadia via Baldwin Ave, making a full eastern SGV boba loop feasible in a single afternoon.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba in Arcadia, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, distinctiveness, and value along the Baldwin Ave, Las Tunas Dr, and Live Oak Ave corridors.</p>

          <div className="space-y-8">
            {arcadiaShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba Arcadia SGV California`}
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Worth Visiting Near Arcadia</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Additional shops within 15 to 25 minutes of Arcadia that are worth knowing about for a complete eastern SGV boba outing.</p>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Baldwin Ave, Westfield Santa Anita, and the Eastern SGV Grid</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Baldwin Avenue Corridor (The Main Spine)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Baldwin Ave running north-south through Arcadia is the city&apos;s primary commercial corridor and the spine of the Arcadia boba scene. Westfield Santa Anita at 400 S Baldwin Ave is the major retail anchor, and the surrounding Baldwin Ave strip has a concentration of Asian restaurants, cafes, and boba shops that is typical of the SGV corridor. The Alley and Ding Tea are both in the Arcadia area accessible from Baldwin Ave. Baldwin Ave heading north from Westfield Santa Anita leads directly to Old Town Pasadena in 10 to 15 minutes, making it the main artery between Arcadia and Pasadena boba destinations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Las Tunas Drive and Live Oak Ave (The Temple City Connection)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Las Tunas Dr running east-west connects Arcadia directly to Temple City 5 to 10 minutes west. Temple City has Xing Fu Tang (the best fresh-cooked pearl boba in the eastern SGV) and Half and Half Tea Express (the best cold-brew technique milk tea in the area). This Las Tunas Dr corridor between Arcadia and Temple City is the eastern SGV boba pairing that most visitors do not discover: The Alley and 85 Degrees in Arcadia combined with Xing Fu Tang and Half and Half Tea Express in Temple City constitutes the best single-afternoon boba tour in the eastern SGV. The two cities are close enough to visit back-to-back without significant driving.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Westfield Santa Anita and Santa Anita Park (Arcadia Landmarks)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Westfield Santa Anita at 400 S Baldwin Ave is one of the largest shopping centers in the San Gabriel Valley and the most recognizable Arcadia landmark for visitors. The mall draws significant foot traffic that supports the surrounding boba and food scene along Baldwin Ave and the adjacent streets. Santa Anita Park, the historic horse racing track at 285 W Huntington Dr, is the other major Arcadia destination and brings large crowds on race days. Both venues are surrounded by the Baldwin Ave corridor commercial strip, where The Alley, 85 Degrees, and Ding Tea are accessible before or after a visit to either landmark.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">San Gabriel and Temple City (10 to 20 Min South and West)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                San Gabriel borders Arcadia to the southwest and is home to Chicha San Chen, the highest-rated boba shop in the entire SGV. The drive from central Arcadia to Chicha San Chen in San Gabriel is 15 to 20 minutes via Baldwin Ave south to Valley Blvd west. Adding Chicha San Chen to an Arcadia boba day is the highest-leverage extension possible: the contrast between The Alley&apos;s crystal tapioca focus in Arcadia and Chicha San Chen&apos;s championship-grade oolong in San Gabriel covers the full range of what premium SGV boba offers. Temple City borders Arcadia directly to the west, and the Xing Fu Tang and Half and Half Tea Express locations there are the natural first stops before arriving in Arcadia or the natural last stops leaving Arcadia heading west.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Pasadena (10 to 15 Min North via Baldwin Ave)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Pasadena borders Arcadia to the north, and Old Town Pasadena is accessible from Arcadia in 10 to 15 minutes via Baldwin Ave north to Colorado Blvd. Sunright Tea Studio has a Pasadena area location that is the best specialty tea option north of Arcadia. For visitors approaching from Pasadena heading into the SGV, Arcadia is the first major boba destination. The Arcadia-to-Pasadena boba pairing (The Alley and 85 Degrees in Arcadia, Sunright in Pasadena) covers the eastern SGV and the 210 freeway corridor without doubling back.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Rowland Heights and Diamond Bar via the 210 (20 to 30 Min East)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Rowland Heights, home to Half and Half Tea Express on Colima Rd (the most concentrated authentic boba corridor in the SGV), is 20 to 25 minutes east of Arcadia via the 210 freeway to the 60 freeway. Diamond Bar, where TP Tea&apos;s flagship SGV location is, is 25 to 30 minutes east via the 210. For visitors doing a full SGV boba tour, Arcadia to Rowland Heights via the 210 is the natural eastern extension, adding Moge Tee (Yunnan Pu-erh), The Alley Rowland Heights, and TP Tea to a day that started at The Alley and 85 Degrees in Arcadia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Arcadia Boba FAQ</h2>
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
            <Link href="/best-boba-san-gabriel/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in San Gabriel</h3>
              <p className="text-[#4A5568] text-sm">Home of Chicha San Chen, the World Tea Championship-winning boba shop and the highest-rated in the SGV. San Gabriel Square on Valley Blvd is the best single boba block in LA County. 15 to 20 minutes south of Arcadia.</p>
            </Link>
            <Link href="/best-boba-pasadena/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Pasadena</h3>
              <p className="text-[#4A5568] text-sm">Sunright Tea Studio, Chicha San Chen, and the best boba shops accessible from Old Town Pasadena and the 210 freeway corridor. 10 to 15 minutes north of Arcadia via Baldwin Ave.</p>
            </Link>
            <Link href="/best-boba-san-gabriel-valley/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in the San Gabriel Valley</h3>
              <p className="text-[#4A5568] text-sm">The complete SGV guide covering Arcadia, Rowland Heights, Monterey Park, Alhambra, Temple City, Pasadena, and beyond. 15+ shops personally reviewed.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
