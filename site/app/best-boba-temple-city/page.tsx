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
  title: "Best Boba in Temple City: Xing Fu Tang, Half and Half, and Las Tunas Drive | Justin Sather",
  description: "The complete guide to boba in Temple City, CA. Xing Fu Tang (fresh wok-cooked pearls), Half and Half Tea Express (cold-brew technique), Machi Machi, and more. All shops personally visited, zero sponsorships.",
};

const faqItems = [
  {
    question: "What is the best boba in Temple City?",
    answer: "Xing Fu Tang is the best boba shop in Temple City and one of the best in the entire SGV. The shop cooks its tapioca pearls in small batches in a wok visible from the counter, a live process that produces pearls with a caramelized exterior and a yielding interior that pre-packaged pearls cannot replicate. The Tiger Milk Tea, with dark brown sugar syrup striped up the cup over fresh milk and topped with the wok-cooked pearls, is the definitive Temple City boba order. For a completely different style, Half and Half Tea Express on Las Tunas Drive brews its teas using a cold-brew technique that produces a smoother, less astringent cup than any standard hot-brewed chain in the area.",
  },
  {
    question: "Where is Xing Fu Tang in Temple City?",
    answer: "Xing Fu Tang's Temple City location is on Las Tunas Drive, the main commercial strip running east-west through Temple City. Las Tunas Drive connects directly to Arcadia to the east and El Monte to the west. The Temple City location is one of the most established Xing Fu Tang outposts in the SGV alongside the Alhambra location, and it typically has shorter waits than the Alhambra flagship during peak weekend hours. Street parking on Las Tunas and lot parking behind the strip malls are both available.",
  },
  {
    question: "How does Temple City boba compare to the rest of the SGV?",
    answer: "Temple City has a smaller total number of boba shops than Rowland Heights or Alhambra, but it punches above its weight in quality. Xing Fu Tang is one of the top three fresh-pearl shops in the entire SGV alongside Tiger Sugar and Chicha San Chen. Half and Half Tea Express adds a distinct cold-brew craft dimension. The combination of two high-quality shops in a short strip makes Temple City one of the most rewarding single-stop boba visits in the eastern SGV. Extending east to Arcadia (5 to 10 minutes via Las Tunas Dr) adds The Alley's Deerioca and 85 Degrees Bakery to make a full eastern SGV afternoon.",
  },
  {
    question: "What should I order at Xing Fu Tang Temple City?",
    answer: "The Tiger Milk Tea is the essential order at Xing Fu Tang. Dark brown sugar syrup is striped up the interior of the cup over fresh milk, and the wok-cooked tapioca pearls are added last. The caramelized exterior of the pearls gives them a slight bitterness that balances the sweetness of the sugar, and the soft interior delivers a texture that distinguishes Xing Fu Tang from every chain using pre-packaged pearls. The Brown Sugar Milk is the second best order for visitors who want the pearl focus without milk tea. Prices at $7 to $9. Order the milk tea on the warmer side to keep the brown sugar syrup flowing through the drink.",
  },
  {
    question: "Is there a good boba tour combining Temple City and Arcadia?",
    answer: "Yes, and it is one of the best single-afternoon boba itineraries in the eastern SGV. Start at Xing Fu Tang on Las Tunas Drive in Temple City for the Tiger Milk Tea with fresh wok-cooked pearls. Then walk or drive to Half and Half Tea Express for the Top 1 Milk Tea (cold-brew oolong base, smooth and clean). Then head east on Las Tunas Drive 5 to 10 minutes into Arcadia and stop at The Alley for the Roasted Oolong Milk Tea with Deerioca crystal tapioca, the most distinctive topping in the SGV. Finish at 85 Degrees Bakery for sea salt coffee and fresh Taiwanese bread. The entire route stays on Las Tunas Drive or the immediate Arcadia corridor and covers four of the most technically distinct boba experiences in eastern Los Angeles in under two hours.",
  },
  {
    question: "How far is Temple City from Arcadia and San Gabriel?",
    answer: "Temple City borders Arcadia directly to the east. The central Temple City commercial strip on Las Tunas Drive is 5 to 10 minutes from Westfield Santa Anita and the Arcadia boba shops via Las Tunas Dr east. San Gabriel is 15 to 20 minutes south of Temple City via Baldwin Ave or Rosemead Blvd south to Valley Blvd. Chicha San Chen in San Gabriel is the best extension from a Temple City visit for those willing to add 30 to 40 minutes round trip. The 10 freeway is accessible from Temple City via Valley Blvd, putting Downtown LA about 20 to 25 minutes west.",
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

const templeCityShops = [
  {
    rank: 1,
    name: "Xing Fu Tang",
    city: "Temple City",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.7",
    price: "$$",
    address: "Las Tunas Dr, Temple City, CA",
    bestFor: "Fresh wok-cooked pearls in small batches, Tiger Milk Tea, Brown Sugar Milk, best tapioca pearls in the eastern SGV",
    mustOrder: "Tiger Milk Tea, Brown Sugar Milk",
    verdict: "The best boba shop in Temple City and one of the highest-rated on the entire site. Xing Fu Tang cooks its tapioca pearls in small batches in a wok visible from the counter, a live process that produces pearls with a caramelized exterior and a soft, yielding interior that pre-packaged pearls cannot match. The Tiger Milk Tea is the essential order: dark brown sugar syrup striped up the cup over fresh milk, topped with the freshly cooked pearls. The Brown Sugar Milk is the second essential order for visitors who want the pearl experience without milk tea. The Temple City location on Las Tunas Drive is one of the most established in the SGV and typically has shorter waits than the Alhambra flagship on weekends. Prices at $7 to $9.",
    href: "/xing-fu-tang-review-los-angeles/",
  },
  {
    rank: 2,
    name: "Half and Half Tea Express",
    city: "Temple City",
    image: "/assets/products/half_and_half_tea_express_drink.png",
    rating: "4.3",
    price: "$$",
    address: "Las Tunas Dr, Temple City, CA",
    bestFor: "Cold-brew technique, Top 1 Milk Tea, Sea Salt Cheese Tea, Tiger Pearl, the most craft-focused everyday milk tea in Temple City",
    mustOrder: "Top 1 Milk Tea, Sea Salt Cheese Tea",
    verdict: "The best complement to Xing Fu Tang on the Las Tunas corridor and the most craft-focused everyday milk tea shop in Temple City. Half and Half Tea Express brews its teas using a cold-brew technique, steeping tea leaves in cold or room-temperature water for an extended period rather than using boiling water. The result is a smoother, less astringent cup that highlights the tea's natural flavors without the bitterness that hot-brewed chains produce. The Top 1 Milk Tea is the signature drink: a cold-brew oolong base with a clean, refined sweetness that shows what good everyday milk tea should taste like. The Sea Salt Cheese Tea is the best non-milk-tea order. Pairs naturally with a Xing Fu Tang visit on the same Las Tunas strip. Prices at $6.50 to $8.50.",
    href: "/half-and-half-tea-express-review-los-angeles/",
  },
  {
    rank: 3,
    name: "Machi Machi",
    city: "Temple City / Arcadia (SGV)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1",
    price: "$$",
    address: "Temple City / Arcadia, CA",
    bestFor: "Brown Sugar Milk Tea with Cheese Foam, Earl Grey Cheese Foam, Roasted Milk Tea, Taiwanese cheese foam specialist",
    mustOrder: "Brown Sugar Milk Tea with Cheese Foam, Earl Grey Milk Tea with Cheese Foam",
    verdict: "The best cheese foam specialist in the Temple City and Arcadia area, and the shop that introduced properly salted thick cheese foam to many SGV regulars. Machi Machi's Brown Sugar Milk Tea with Cheese Foam is the defining order: brown sugar syrup swirled through fresh milk with tapioca pearls, topped with a thick layer of salted cheese foam that stays on top rather than dissolving into the tea. The salt in the foam cuts through the sweetness of the brown sugar in a way that keeps the drink balanced. The Earl Grey Milk Tea with Cheese Foam is the more interesting order for returning visitors, with the floral bergamot base pairing exceptionally well with the savory foam. Prices at $7.50 to $9.50.",
    href: "/machi-machi-review-los-angeles/",
  },
  {
    rank: 4,
    name: "The Alley",
    city: "Arcadia (5 to 10 min east via Las Tunas Dr)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3",
    price: "$$",
    address: "Arcadia, CA",
    bestFor: "Deerioca crystal tapioca, Roasted Oolong Milk Tea, Brown Sugar Deerioca Milk, most distinctive topping in the eastern SGV",
    mustOrder: "Roasted Oolong Milk Tea with Deerioca, Brown Sugar Deerioca Milk",
    verdict: "The natural next stop east of Temple City and the shop with the most distinctive topping experience in the eastern SGV. The Alley is built around Deerioca, a proprietary crystal tapioca made from cassava that is lighter, more translucent, and springier than standard tapioca pearls. The Roasted Oolong Milk Tea with Deerioca is the essential order: a nutty, slightly smoky oolong base with the unique chewiness of crystal tapioca that does not exist elsewhere in the area. Driving Las Tunas Dr east from the Temple City Xing Fu Tang and Half and Half strip puts The Alley in Arcadia in 5 to 10 minutes. The combination of Temple City's fresh-cooked pearls and Arcadia's crystal tapioca makes this the most texturally varied short boba corridor in eastern Los Angeles. Prices at $7 to $9.",
    href: "/the-alley-boba-review-los-angeles/",
  },
  {
    rank: 5,
    name: "85 Degrees Bakery",
    city: "Arcadia (5 to 10 min east via Las Tunas Dr)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$",
    address: "Arcadia, CA",
    bestFor: "Sea salt coffee, tiger bread, milk buns, egg tart, best value Taiwanese bakery companion in the eastern SGV",
    mustOrder: "Sea Salt Coffee, Tiger Bread, Milk Bun",
    verdict: "The best reason to extend a Temple City boba visit east into Arcadia, and one of the most compelling non-boba stops in all of LA County for boba enthusiasts. 85 Degrees Bakery is the leading Taiwanese bakery chain in Los Angeles, built around its sea salt coffee, a cold brew layered with sea salt cream that has become one of the most recognized drinks in the SGV. The tiger bread is baked fresh throughout the day with a chewy interior and caramelized crust unlike anything at Western bakeries. At $3 to $6 per item, 85 Degrees is the best value stop in the Arcadia corridor. Pairing a 85 Degrees bread and coffee run with the Xing Fu Tang and Half and Half Tea Express visit in Temple City is the best afternoon food itinerary in the eastern SGV. Multiple Arcadia locations accessible from Las Tunas Dr east.",
    href: "/85-degrees-bakery-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Happy Lemon",
    city: "Arcadia / Alhambra (multiple SGV locations)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Arcadia / Alhambra, CA",
    bestFor: "Rock Salt and Cheese Oolong, cheese foam originator, Roasted Milk Tea, Hawthorn Green Tea",
    mustOrder: "Rock Salt and Cheese Oolong, Roasted Milk Tea with Rock Salt",
    verdict: "The chain that introduced cheese foam to Los Angeles and one of the most historically important boba brands in the SGV. Happy Lemon's Rock Salt and Cheese series, a savory-sweet cream foam layered over a strong oolong base, became the blueprint for cheese foam drinks across the SGV and beyond. The Arcadia locations are accessible in 5 to 10 minutes east from Temple City via Las Tunas Drive, making Happy Lemon a natural add-on to a Temple City stop. The Rock Salt and Cheese Oolong is the best introduction to cheese foam boba for first-time visitors. The Hawthorn Green Tea is the best fruit-adjacent order for those who find milk tea too rich. Prices at $6.50 to $9.50.",
    href: "/happy-lemon-review-los-angeles/",
  },
];

const moreShops = [
  { name: "Chicha San Chen", city: "San Gabriel (15 to 20 min south via Baldwin Ave to Valley Blvd)", note: "The highest-rated boba shop in the SGV and one of the best in Los Angeles. World Tea Championship winner, Four Seasons oolong, Wuyi Mountain Oolong. The essential destination for anyone willing to extend an eastern SGV trip 15 to 20 minutes south.", href: "/chicha-san-chen-san-gabriel-review/" },
  { name: "Ding Tea", city: "Arcadia (5 to 10 min east)", note: "Precision-brewed Taiwanese oolong and red tea bases. One of the original Taiwanese boba franchises from the 1990s wave of boba expansion. The Oolong Milk Tea is the cleanest expression of what good everyday boba tastes like without toppings or cheese foam.", href: "/ding-tea-review-los-angeles/" },
  { name: "Sunright Tea Studio", city: "Pasadena (20 to 25 min north via Baldwin Ave or Rosemead Blvd)", note: "Sun Moon Lake black tea sourced directly from Sun Moon Lake in Nantou County, Taiwan. Alishan Oolong Milk Tea. The best specialty single-origin tea option north of Temple City.", href: "/sunright-tea-studio-review-los-angeles/" },
  { name: "CoCo Fresh Tea", city: "Alhambra / SGV (15 to 20 min west)", note: "World's largest boba chain by outlet count. Avocado Smoothie Milk Tea is the unique differentiator. Best value everyday option in the SGV at $4.50 to $7 per drink.", href: "/coco-fresh-tea-review-los-angeles/" },
  { name: "Gong Cha", city: "Multiple SGV locations", note: "High Mountain Oolong base is the chain's consistent differentiator. Milk Foam series is the best value cheese foam option in the SGV. Multiple locations across the SGV corridor accessible from Temple City.", href: "/gong-cha-review-los-angeles/" },
  { name: "Tastea", city: "West Covina / SGV (20 min east or west)", note: "Rose Matcha Milk Tea and Strawberry Milk Tea. Southern California chain with West Covina and Alhambra locations accessible from Temple City. A reliable option when the more distinctive shops are at capacity.", href: "/tastea-review-los-angeles/" },
];

const neighborhoodAreas = [
  { area: "Las Tunas Drive (Central Temple City)", description: "The main commercial strip and the best boba corridor in Temple City. Xing Fu Tang and Half and Half Tea Express are both on or near Las Tunas Drive, making this the core of the Temple City boba scene. The strip is oriented east-west and connects directly to Arcadia's boba corridor to the east." },
  { area: "Rosemead Blvd / Live Oak Ave", description: "The northern and western edge of Temple City, connecting to El Monte to the south and Arcadia to the north via Live Oak Ave. Less boba-dense than Las Tunas but useful for accessing the city from the 10 freeway via Rosemead Blvd." },
  { area: "Arcadia (5 to 10 min east via Las Tunas Dr)", description: "The natural extension east from Temple City. The Alley's Deerioca crystal tapioca and 85 Degrees Bakery's sea salt coffee and Taiwanese bread are the two primary draws. Westfield Santa Anita and the Baldwin Ave corridor are 5 to 10 minutes east of the Temple City Las Tunas strip." },
  { area: "San Gabriel / Valley Blvd Corridor (15 to 20 min south)", description: "Home of Chicha San Chen, the highest-rated boba shop in the SGV and one of the best in LA. Accessible via Baldwin Ave south from Arcadia to Valley Blvd, or via Rosemead Blvd south from Temple City. San Gabriel Square on Valley Blvd is the best concentrated boba block in LA County." },
  { area: "Alhambra / Monterey Park (20 to 25 min west)", description: "The western SGV gateway cities. Xing Fu Tang, Happy Lemon, Meet Fresh, and LaTea are all within the Alhambra corridor. The 10 freeway from the Alhambra area connects to Downtown LA in 15 to 20 minutes, making Alhambra the most accessible SGV boba stop from the Westside." },
  { area: "Pasadena (20 to 25 min north via Baldwin Ave)", description: "Sunright Tea Studio in Old Town Pasadena is the best specialty tea option north of the Temple City and Arcadia corridor. Accessible via Baldwin Ave north through Arcadia to Colorado Blvd in Pasadena. The Rose Bowl and Old Town Pasadena are nearby landmarks for visitors combining a Pasadena trip with an eastern SGV boba loop." },
];

export default function BestBobaTempleCityPage() {
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
                Best Boba in Temple City: Xing Fu Tang, Half and Half, and the Las Tunas Drive Corridor
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Temple City is home to two of the most technically distinct boba shops in the eastern SGV: Xing Fu Tang (fresh wok-cooked pearls visible from the counter) and Half and Half Tea Express (cold-brew technique). Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">6 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Las Tunas Drive, SGV</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Best boba in Temple City California SGV bubble tea Xing Fu Tang Half and Half Tea Express"
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
            Temple City is a small city of about 36,000 residents in the eastern San Gabriel Valley, bordered by Arcadia to the east, El Monte to the south, and Rosemead to the west. Despite its size, Temple City punches well above its weight in boba quality. Las Tunas Drive, the main commercial strip running east-west through the city, holds two of the most technically accomplished boba shops in the eastern SGV.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Xing Fu Tang cooks its tapioca pearls in small batches in a wok visible from the counter, producing a fresh-cooked pearl with a caramelized exterior and yielding interior that chain boba shops using pre-packaged pearls cannot replicate. Half and Half Tea Express brews its teas using a cold-brew technique that produces a smoother, less astringent cup than any standard hot-brewed chain. Together, the two shops represent the most concentrated quality-per-shop ratio of any single commercial strip in the eastern SGV.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            Temple City is also the natural gateway to the Arcadia boba corridor to the east. Las Tunas Drive continues east into Arcadia, putting The Alley (Deerioca crystal tapioca) and 85 Degrees Bakery (sea salt coffee, Taiwanese bread) within 5 to 10 minutes of the Temple City stops. A combined Temple City and Arcadia afternoon covers four of the most technically distinct boba experiences in eastern Los Angeles.
          </p>
        </div>
      </section>

      {/* Ranked shops */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-8">Best Boba in Temple City, Ranked</h2>
        <div className="space-y-8">
          {templeCityShops.map((shop) => (
            <div key={shop.rank} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-48 h-44 md:h-auto flex-shrink-0">
                  <Image
                    src={shop.image}
                    alt={`${shop.name} boba Temple City SGV`}
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Temple City Boba by Area</h2>
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
        <h2 className="text-2xl font-bold text-[#1A202C] mb-6">More SGV Shops Worth Adding</h2>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Temple City Boba FAQ</h2>
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
            <Link href="/best-boba-arcadia/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Arcadia</h3>
              <p className="text-[#4A5568] text-sm">The Alley (Deerioca crystal tapioca) and 85 Degrees Bakery (sea salt coffee, Taiwanese bread), 5 to 10 minutes east of Temple City via Las Tunas Drive. The natural extension of any Temple City boba visit.</p>
            </Link>
            <Link href="/best-boba-san-gabriel/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in San Gabriel</h3>
              <p className="text-[#4A5568] text-sm">Home of Chicha San Chen, the World Tea Championship-winning boba shop and the highest-rated in the SGV. San Gabriel Square on Valley Blvd is the best single boba block in LA County. 15 to 20 minutes south of Temple City.</p>
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
