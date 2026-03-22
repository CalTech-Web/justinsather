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
  title: "Best Desserts in Los Angeles: Boba, Ice Cream, and More | Justin Sather",
  description: "The most complete guide to the best desserts in Los Angeles. Boba, artisan ice cream, Persian ice cream, and more, all personally visited and reviewed by Justin Sather.",
};

const faqItems = [
  {
    question: "What are the best desserts in Los Angeles?",
    answer: "Los Angeles has an exceptional dessert scene spanning boba, artisan ice cream, Persian frozen treats, and Taiwanese fruit teas. The top picks are Tiger Sugar for brown sugar boba, Wanderlust Creamery for creative ice cream, Mashti Malone for Persian ice cream, and Chicha San Chen for premium milk tea. All have been personally visited and reviewed.",
  },
  {
    question: "Where can I find the best ice cream in Los Angeles?",
    answer: "Wanderlust Creamery in Atwater Village is the top pick for artisan ice cream in LA, with travel-inspired flavors using real ingredients like ube, Thai tea, and champurrado. Fosselman's in Alhambra has been serving LA since 1929 and is the SGV institution for classic scoops. Mashti Malone on Hollywood Boulevard is the city's best Persian ice cream.",
  },
  {
    question: "What neighborhoods in LA have the best desserts?",
    answer: "Koreatown has the highest concentration of excellent boba shops with 30+ reviewed locations in a small area. The San Gabriel Valley, especially Alhambra and Monterey Park, is home to LA's best Taiwanese milk teas and old-school ice cream. Atwater Village and Hollywood both have standout artisan ice cream destinations.",
  },
  {
    question: "How much do desserts cost in Los Angeles?",
    answer: "Boba in LA typically runs $7 to $11 per drink. Budget-friendly spots like It's Boba Time are $5 to $7. Artisan ice cream at Wanderlust Creamery is around $6 to $10 per scoop. Fosselman's and Mashti Malone are generally $5 to $9 per serving, making them among the better values in the LA dessert scene.",
  },
  {
    question: "What is the best boba in Los Angeles?",
    answer: "Tiger Sugar in Koreatown is the best brown sugar boba in LA. For the widest variety of high-quality drinks, Boba Guys uses organic teas and house-made milk. Chicha San Chen in the San Gabriel Valley offers the most elevated tea experience in LA County. All have been personally visited.",
  },
  {
    question: "Are there unique or unusual desserts in Los Angeles?",
    answer: "Yes. Mashti Malone serves authentic Persian ice cream flavors like saffron bastani and faloodeh, not found anywhere else in LA. Wanderlust Creamery rotates seasonal travel-inspired flavors like Ube Malted Crunch and Champurrado. The SGV is also home to Chicha San Chen, which uses World Tea Championship-winning oolongs as its base.",
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

const bobaShops = [
  {
    rank: 1,
    name: "Tiger Sugar",
    neighborhood: "Koreatown",
    image: "/assets/products/tiger_sugar_drink.png",
    rating: "5",
    price: "$$",
    mustOrder: "Brown Sugar Boba Milk with Cream Mousse",
    verdict: "The best brown sugar boba in LA. Fresh pearls every 4 hours, theatrical torching, and a drink that delivers every single time. Nothing else in Koreatown comes close.",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
  },
  {
    rank: 2,
    name: "Chicha San Chen",
    neighborhood: "San Gabriel Valley",
    image: "/assets/products/chicha_san_chen_drink.png",
    rating: "5",
    price: "$$$",
    mustOrder: "Four Seasons Tea",
    verdict: "World Tea Championship credentials backed up in the cup. The most elevated milk tea experience in LA County. Worth the drive to Monterey Park every time.",
    href: "/chicha-san-chen-san-gabriel-review/",
  },
  {
    rank: 3,
    name: "Boba Guys",
    neighborhood: "Multiple Locations",
    image: "/assets/products/boba_guys_drinks.png",
    rating: "4.5",
    price: "$$",
    mustOrder: "Strawberry Matcha Latte",
    verdict: "Organic teas, house-made milk, fresh taro. More expensive than most but the quality gap is obvious. The gold standard for specialty boba in LA.",
    href: "/boba-guys-review-los-angeles/",
  },
  {
    rank: 4,
    name: "7 Leaves Cafe",
    neighborhood: "Multiple Locations",
    image: "/assets/products/7_leaves_cafe_drink.png",
    rating: "4.5",
    price: "$$",
    mustOrder: "Vietnamese Coffee with Boba",
    verdict: "Vietnamese-American cafe doing something genuinely different with boba. The Vietnamese coffee drink is unique, the secret menu delivers, and the seasonal offerings are consistently good.",
    href: "/7-leaves-cafe-review-los-angeles/",
  },
  {
    rank: 5,
    name: "Yi Fang Taiwan Fruit Tea",
    neighborhood: "San Gabriel Valley",
    image: "/assets/products/yifang_drink.png",
    rating: "4",
    price: "$",
    mustOrder: "Pineapple Green Tea",
    verdict: "Real fresh fruit, not syrup. The difference is immediately obvious. Consistently excellent Taiwanese fruit teas at very fair prices.",
    href: "/yi-fang-taiwan-fruit-tea-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Feng Cha",
    neighborhood: "Multiple Locations",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4",
    price: "$$",
    mustOrder: "Oolong Milk Tea with Cheese Foam",
    verdict: "One of the better cheese foam programs in LA. The oolong base is strong and the cheese foam is properly thick, not watery. A reliable stop across all their locations.",
    href: "/feng-cha-review-los-angeles/",
  },
  {
    rank: 7,
    name: "It's Boba Time",
    neighborhood: "Silver Lake",
    image: "/assets/products/its_boba_time_drink.png",
    rating: "4",
    price: "$",
    mustOrder: "Classic Taro Milk Tea",
    verdict: "LA original since 1999. Classic flavors done well, great value, and the Silver Lake location is one of the later-closing boba spots in the city.",
    href: "/its-boba-time-review-los-angeles/",
  },
  {
    rank: 8,
    name: "Sharetea Westwood",
    neighborhood: "Westwood",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    mustOrder: "Three Mates",
    verdict: "The closest quality boba to UCLA. The Three Mates is a reliable order and the handcrafted milk teas are better than most Taiwanese chain options in LA.",
    href: "/sharetea-westwood-review/",
  },
];

const bakeryShops = [
  {
    rank: 1,
    name: "85 Degrees Bakery Cafe",
    neighborhood: "San Gabriel Valley, Multiple Locations",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4",
    price: "$",
    mustOrder: "Sea Salt Coffee, Tiger Bread",
    verdict: "The best value food experience in the SGV. Sea salt coffee is one of LA's most underrated drinks, the tiger bread is unlike anything else, and the egg tarts are among the best in any LA bakery. Opens early and sells out of the best items by afternoon.",
    href: "/85-degrees-bakery-review-los-angeles/",
  },
];

const iceCreamShops = [
  {
    rank: 1,
    name: "Wanderlust Creamery",
    neighborhood: "Atwater Village",
    image: "/assets/products/wanderlust_creamery_product.png",
    rating: "5",
    price: "$$",
    mustOrder: "Ube Malted Crunch",
    verdict: "The most creative ice cream in Los Angeles. Travel-inspired flavors using real ingredients, ube, Thai tea, champurrado, not extract. The rotating seasonal menu means there is always a reason to come back.",
    href: "/wanderlust-creamery-review-los-angeles/",
  },
  {
    rank: 2,
    name: "Mashti Malone's",
    neighborhood: "Hollywood",
    image: "/assets/products/mashti_malone_product.png",
    rating: "4.7",
    price: "$$",
    mustOrder: "Saffron Bastani",
    verdict: "Forty-plus years on Hollywood Boulevard and the Persian ice cream is still the best in the city. The saffron bastani and faloodeh are unlike anything else in LA. A genuine institution.",
    href: "/mashti-malone-review-los-angeles/",
  },
  {
    rank: 3,
    name: "Fosselman's Ice Cream",
    neighborhood: "Alhambra",
    image: "/assets/products/fosselmans_interior.png",
    rating: "4.5",
    price: "$",
    mustOrder: "Ube Ice Cream",
    verdict: "LA's oldest ice cream shop, open since 1929. The SGV institution for classic American-style scoops with Filipino-inspired flavors like ube and macapuno. The kind of old-school ice cream parlor that barely exists anymore.",
    href: null,
  },
  {
    rank: 4,
    name: "Ginger's Divine Ice Creams",
    neighborhood: "Mar Vista",
    image: "/assets/products/gingers_divine_product.png",
    rating: "4.3",
    price: "$$",
    mustOrder: "Salted Caramel",
    verdict: "Small-batch artisan ice cream with a rotating menu of creative flavors. The Mar Vista location draws a loyal local crowd. Less touristy than Wanderlust but comparable quality in the best flavors.",
    href: null,
  },
  {
    rank: 5,
    name: "Mochinut",
    neighborhood: "Koreatown, Multiple Locations",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3",
    price: "$$",
    mustOrder: "Ube Mochi Donut",
    verdict: "The most original dessert concept operating at scale in LA right now. Mochi donuts with a Korean-influenced flavor system, ube, matcha, black sesame, taro, plus a legitimate boba program. The Koreatown location is the essential stop.",
    href: "/mochinut-review-los-angeles/",
  },
];

export default function BestDessertsLAPage() {
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
                Citywide Guide
              </span>
              <h1 className="text-4xl font-bold text-[#1A202C] mb-4">
                Best Desserts in Los Angeles: Boba, Ice Cream, and More
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Every spot on this list has been visited personally by Justin Sather. No sponsorships, no paid placements. Covering boba, artisan ice cream, Persian frozen treats, and the dessert experiences that make LA worth exploring.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">All Neighborhoods</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Personally Visited</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated Quarterly</span>
              </div>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Best desserts in Los Angeles"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Author note */}
      <section className="bg-[#EDF2F7] py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/assets/team/justin-sather-avatar.jpg" alt="Justin Sather" fill className="object-cover" />
            </div>
            <p className="text-base text-[#4A5568] leading-relaxed">
              <span className="font-semibold text-[#1A202C]">Justin Sather</span> has personally visited every spot on this list, paid for every order out of pocket, and written all reviews with zero sponsorships. Rankings reflect honest assessments of quality, value, and consistency. Last updated: Q1 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Boba Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">Best Boba in Los Angeles</h2>
          <p className="text-[#4A5568]">
            Boba is the anchor of the LA dessert scene. The city has everything from classic Taiwanese milk tea chains to elevated single-origin tea programs. These are the top picks across all neighborhoods, with full reviews available for each.
          </p>
        </div>
        <div className="space-y-6">
          {bobaShops.map((shop) => (
            <article key={shop.name} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row">
                <div className="relative sm:w-48 h-44 sm:h-auto flex-shrink-0">
                  <Image
                    src={shop.image}
                    alt={`${shop.name} review Los Angeles`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 bg-[#2B6CB0] text-white rounded-full flex items-center justify-center text-sm font-bold shadow">
                    {shop.rank}
                  </div>
                </div>
                <div className="p-5 flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-[#1A202C]">{shop.name}</h3>
                      <p className="text-sm text-[#718096]">{shop.neighborhood}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <StarRating rating={shop.rating} />
                      <p className="text-xs text-[#718096] mt-1">{shop.price}</p>
                    </div>
                  </div>
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-3">{shop.verdict}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#718096]">
                      <span className="font-semibold text-[#2D3748]">Must order:</span> {shop.mustOrder}
                    </span>
                    <Link href={shop.href} className="text-[#2B6CB0] text-xs font-semibold hover:text-[#215387] transition-colors flex-shrink-0 ml-2">
                      Full Review &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/best-boba-los-angeles/"
            className="inline-block bg-[#2B6CB0] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#215387] transition-colors"
          >
            See All 25+ Boba Shops
          </Link>
        </div>
      </section>

      {/* Ice Cream Section */}
      <section className="bg-[#EDF2F7] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#1A202C] mb-2">Best Ice Cream in Los Angeles</h2>
            <p className="text-[#4A5568]">
              LA has one of the most interesting ice cream scenes in the country, ranging from a 95-year-old SGV parlor to small-batch artisan shops rotating globally inspired flavors. These are the spots worth going out of your way for.
            </p>
          </div>
          <div className="space-y-6">
            {iceCreamShops.map((shop) => (
              <article key={shop.name} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-48 h-44 sm:h-auto flex-shrink-0">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} Los Angeles`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 bg-[#2B6CB0] text-white rounded-full flex items-center justify-center text-sm font-bold shadow">
                      {shop.rank}
                    </div>
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-[#1A202C]">{shop.name}</h3>
                        <p className="text-sm text-[#718096]">{shop.neighborhood}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <StarRating rating={shop.rating} />
                        <p className="text-xs text-[#718096] mt-1">{shop.price}</p>
                      </div>
                    </div>
                    <p className="text-[#4A5568] text-sm leading-relaxed mb-3">{shop.verdict}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#718096]">
                        <span className="font-semibold text-[#2D3748]">Must order:</span> {shop.mustOrder}
                      </span>
                      {shop.href && (
                        <Link href={shop.href} className="text-[#2B6CB0] text-xs font-semibold hover:text-[#215387] transition-colors flex-shrink-0 ml-2">
                          Full Review &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bakery Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">Best Taiwanese Bakeries in Los Angeles</h2>
          <p className="text-[#4A5568]">
            The SGV has a Taiwanese bakery culture that most of LA has not discovered yet. These spots serve freshly baked bread, pastries, and drinks that pair perfectly with a boba run.
          </p>
        </div>
        <div className="space-y-6">
          {bakeryShops.map((shop) => (
            <article key={shop.name} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row">
                <div className="relative sm:w-48 h-44 sm:h-auto flex-shrink-0">
                  <Image
                    src={shop.image}
                    alt={`${shop.name} review Los Angeles`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 bg-[#2B6CB0] text-white rounded-full flex items-center justify-center text-sm font-bold shadow">
                    {shop.rank}
                  </div>
                </div>
                <div className="p-5 flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-[#1A202C]">{shop.name}</h3>
                      <p className="text-sm text-[#718096]">{shop.neighborhood}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <StarRating rating={shop.rating} />
                      <p className="text-xs text-[#718096] mt-1">{shop.price}</p>
                    </div>
                  </div>
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-3">{shop.verdict}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#718096]">
                      <span className="font-semibold text-[#2D3748]">Must order:</span> {shop.mustOrder}
                    </span>
                    <Link href={shop.href} className="text-[#2B6CB0] text-xs font-semibold hover:text-[#215387] transition-colors flex-shrink-0 ml-2">
                      Full Review &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Context section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Why LA Has One of the Best Dessert Scenes in the US</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Los Angeles has a dessert scene that is genuinely difficult to match anywhere else in the country. The combination of a massive Taiwanese and East Asian immigrant community in the San Gabriel Valley, a thriving food culture across every neighborhood, and a climate that supports year-round frozen treat consumption creates conditions for an unusually deep and varied scene.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            The boba side alone spans everything from 1999-era LA originals like It&apos;s Boba Time to World Tea Championship-certified Taiwanese chains like Chicha San Chen operating their only Southern California location in Monterey Park. The ice cream side includes a 95-year-old SGV institution (Fosselman&apos;s), a Persian ice cream specialist that has been on Hollywood Boulevard for over 40 years (Mashti Malone&apos;s), and small-batch artisan creameries doing globally inspired flavors (Wanderlust Creamery).
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            The best strategy for exploring LA desserts is to treat each neighborhood as its own universe. Koreatown for boba, the SGV for both premium milk tea and old-school ice cream, Hollywood for Persian treats, and Atwater Village for creative artisan ice cream. The full neighborhood-by-neighborhood breakdown is covered in the{" "}
            <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="text-[#2B6CB0] hover:text-[#215387] font-medium">
              Koreatown boba guide
            </Link>{" "}
            and the{" "}
            <Link href="/best-boba-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387] font-medium">
              citywide boba roundup
            </Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#EDF2F7] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-base font-bold text-[#1A202C] mb-2">{item.question}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-3">Want the Full Boba Deep Dive?</h2>
        <p className="text-[#4A5568] mb-6 max-w-xl mx-auto">
          The Koreatown boba guide covers 30+ shops in a single neighborhood with full individual reviews, rankings, and insider tips.
        </p>
        <Link
          href="/best-boba-koreatown-complete-guide-to-30-shops/"
          className="bg-[#2B6CB0] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#215387] transition-colors inline-block"
        >
          Read the Koreatown Guide
        </Link>
      </section>
    </>
  );
}
