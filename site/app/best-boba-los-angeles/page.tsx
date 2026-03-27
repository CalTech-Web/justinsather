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
  title: "Best Boba in Los Angeles: 25+ Top Shops Across LA County | Justin Sather",
  description: "The most comprehensive guide to the best boba and bubble tea shops in Los Angeles. 25+ top shops across Koreatown, San Gabriel Valley, Silver Lake, and beyond. All personally visited.",
};

const faqItems = [
  {
    question: "What is the best boba shop in Los Angeles?",
    answer: "Tiger Sugar in Koreatown is the best brown sugar boba in Los Angeles. For the widest variety of high-quality drinks, Boba Guys is the top pick, using organic teas and house-made milk. Both have been personally visited and reviewed.",
  },
  {
    question: "Which neighborhood in LA has the best boba?",
    answer: "Koreatown has the highest concentration of excellent boba shops, with 30+ reviewed locations in a small area. The San Gabriel Valley, particularly Rowland Heights and Monterey Park, is unmatched for Taiwanese-style milk teas and premium fruit teas.",
  },
  {
    question: "How much does boba cost in Los Angeles?",
    answer: "Most boba shops in LA charge between $7 and $11 per drink. Budget-friendly spots like It's Boba Time typically run $5 to $7. Premium shops like Boba Guys and Chicha San Chen run $9 to $13 per drink.",
  },
  {
    question: "What is the best bubble tea in Los Angeles?",
    answer: "The best bubble tea in Los Angeles depends on what you are looking for. For brown sugar boba milk, Tiger Sugar is number one. For fruit teas, Yi Fang Taiwan Fruit Tea in the SGV uses real fresh fruit. For Vietnamese-style boba, 7 Leaves Cafe is the top pick.",
  },
  {
    question: "Are there boba shops open late in Los Angeles?",
    answer: "Yes. It's Boba Time locations in Silver Lake are among the latest-closing boba shops in LA. Most Koreatown boba shops stay open until 10 or 11 PM. Always check current hours directly with the shop before visiting.",
  },
  {
    question: "What are the best boba shops near UCLA in Westwood?",
    answer: "Sharetea Westwood is the closest reviewed boba shop to UCLA. It is located in Westwood Village and serves a full Taiwanese tea menu including the Three Mates and handcrafted milk teas.",
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

const topShops = [
  {
    rank: 1,
    name: "Tiger Sugar",
    neighborhood: "Koreatown",
    image: "/assets/products/tiger_sugar_drink.png",
    rating: "5/5",
    price: "$$",
    mustOrder: "Brown Sugar Boba Milk with Cream Mousse",
    verdict: "The best brown sugar boba in LA. Fresh pearls every 4 hours, theatrical torching, and a drink that actually lives up to the hype. No competition in Koreatown.",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
  },
  {
    rank: 2,
    name: "Boba Guys",
    neighborhood: "Multiple Locations",
    image: "/assets/products/boba_guys_drinks.png",
    rating: "4.5/5",
    price: "$$",
    mustOrder: "Strawberry Matcha Latte",
    verdict: "The gold standard for specialty boba in LA. Organic teas, house-made milk, and fresh taro. More expensive than most, but worth every cent.",
    href: "/boba-guys-review-los-angeles/",
  },
  {
    rank: 3,
    name: "Chicha San Chen",
    neighborhood: "Monterey Park",
    image: "/assets/products/chicha_san_chen_drink.png",
    rating: "4.5/5",
    price: "$$$",
    mustOrder: "Osmanthus Oolong Milk Tea",
    verdict: "The most elevated boba experience in LA County. Taiwanese high-tea vibes with genuinely exceptional single-origin tea. Worth the drive to the SGV.",
    href: "/chicha-san-chen-san-gabriel-review/",
  },
  {
    rank: 4,
    name: "Yi Fang Taiwan Fruit Tea",
    neighborhood: "San Gabriel Valley",
    image: "/assets/products/yifang_drink.png",
    rating: "4/5",
    price: "$",
    mustOrder: "Pineapple Green Tea",
    verdict: "Consistently excellent Taiwanese fruit teas and milk teas at very fair prices. The SGV location is the best in LA.",
    href: "/yi-fang-taiwan-fruit-tea-review-los-angeles/",
  },
  {
    rank: 5,
    name: "Half and Half Tea Express",
    neighborhood: "Rowland Heights",
    image: "/assets/products/half_and_half_tea_express_drink.png",
    rating: "4/5",
    price: "$",
    mustOrder: "Supreme Milk Tea",
    verdict: "A SGV institution. No frills, incredible tea quality, and the most affordable premium boba you will find anywhere in LA.",
    href: "/half-and-half-tea-express-review-los-angeles/",
  },
  {
    rank: 6,
    name: "It's Boba Time",
    neighborhood: "Silver Lake",
    image: "/assets/products/its_boba_time_drink.png",
    rating: "4/5",
    price: "$",
    mustOrder: "Classic Taro Milk Tea",
    verdict: "LA original since 1999. Classic flavors done well, great value, and always reliable. The Silver Lake location is the best of the bunch.",
    href: "/its-boba-time-review-los-angeles/",
  },
  {
    rank: 7,
    name: "LaTea",
    neighborhood: "Koreatown",
    image: "/assets/products/latea_drink.png",
    rating: "4/5",
    price: "$$",
    mustOrder: "Matcha Latte with Tapioca",
    verdict: "One of the best matcha programs in Koreatown. The milk tea base is exceptional and the tapioca is always perfectly cooked.",
    href: "/latea-review-los-angeles/",
  },
  {
    rank: 8,
    name: "7 Leaves Cafe",
    neighborhood: "Multiple Locations",
    image: "/assets/products/7_leaves_cafe_drink.png",
    rating: "4/5",
    price: "$$",
    mustOrder: "Vietnamese Coffee with Boba",
    verdict: "Vietnamese-American cafe doing creative things with boba. The Vietnamese coffee drink is unique and excellent. Seasonal drinks are consistently good.",
    href: "/7-leaves-cafe-review-los-angeles/",
  },
  {
    rank: 9,
    name: "Teaspoon",
    neighborhood: "Multiple Locations",
    image: "/assets/products/teaspoon_exterior.png",
    rating: "3.5/5",
    price: "$$",
    mustOrder: "Honey Green Milk Tea",
    verdict: "Solid mid-tier boba. Nothing exceptional but consistently good quality. Good option if you are near one of their locations and need a reliable fix.",
    href: "/teaspoon-boba-review-los-angeles/",
  },
  {
    rank: 10,
    name: "Sunright Tea Studio",
    neighborhood: "Pasadena / Rowland Heights",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.6/5",
    price: "$$",
    mustOrder: "Sun Moon Lake Milk Tea",
    verdict: "The best single-origin tea program in the SGV. Sun Moon Lake black tea and Alishan oolong brewed fresh, never powder. Worth the drive to Pasadena.",
    href: "/sunright-tea-studio-review-los-angeles/",
  },
  {
    rank: 11,
    name: "Happy Lemon",
    neighborhood: "Koreatown + SGV",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2/5",
    price: "$$",
    mustOrder: "Rock Salt & Cheese Oolong",
    verdict: "The chain that brought Rock Salt and Cheese foam to LA. Essential for understanding the city's boba history. The Oolong base with cheese foam is the definitive order.",
    href: "/happy-lemon-review-los-angeles/",
  },
  {
    rank: 12,
    name: "Kung Fu Tea",
    neighborhood: "Multiple LA Locations",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1/5",
    price: "$$",
    mustOrder: "Kung Fu Milk Tea",
    verdict: "The most accessible boba chain in LA. Reliable across all locations, affordable pricing, and a genuinely well-made house milk tea. The Taro Slush is one of the better versions in the city.",
    href: "/kung-fu-tea-review-los-angeles/",
  },
  {
    rank: 13,
    name: "Meet Fresh",
    neighborhood: "SGV (Rowland Heights, Alhambra, Monterey Park)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4/5",
    price: "$",
    mustOrder: "Taro Ball Combination (warm)",
    verdict: "Not a boba shop, the best Taiwanese dessert shop in LA. Taro balls, grass jelly, and sweet soups done authentically and priced under $11 for a full bowl. Essential SGV stop.",
    href: "/meet-fresh-review-los-angeles/",
  },
  {
    rank: 14,
    name: "Xing Fu Tang",
    neighborhood: "Temple City, Alhambra (San Gabriel Valley)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.7/5",
    price: "$$",
    mustOrder: "Tiger Milk Tea",
    verdict: "The best fresh-pearl brown sugar boba in the SGV. Pearls cooked every two hours in a wok with Okinawa black sugar. The Tiger Milk Tea is one of the top two brown sugar boba drinks in all of LA County.",
    href: "/xing-fu-tang-review-los-angeles/",
  },
  {
    rank: 15,
    name: "TP Tea",
    neighborhood: "Diamond Bar, Hacienda Heights (San Gabriel Valley)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4/5",
    price: "$",
    mustOrder: "Green Milk Tea, Pearl Milk Tea",
    verdict: "The most underrated boba chain in LA. Backed by Ten Ren Tea Company (est. 1953), TP Tea uses loose-leaf Taiwanese teas that outclass every other chain in its price range. Best value boba in the SGV at $5 to $7 per drink.",
    href: "/tp-tea-review-los-angeles/",
  },
  {
    rank: 16,
    name: "The Alley",
    neighborhood: "Koreatown, Arcadia, Rowland Heights",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3/5",
    price: "$$",
    mustOrder: "Roasted Oolong with Deerioca",
    verdict: "The Taiwanese chain that made crystal tapioca famous. Deerioca is a genuinely unique topping and the roasted oolong base is one of the better teas available from a chain this size in LA.",
    href: "/the-alley-boba-review-los-angeles/",
  },
  {
    rank: 17,
    name: "Tastea",
    neighborhood: "Alhambra, West Covina, SGV",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3/5",
    price: "$$",
    mustOrder: "Rose Matcha Milk Tea, Strawberry Milk Tea",
    verdict: "The San Diego chain that earns its hype in LA. Tastea is the most consistently good mid-tier chain in the city, with a Rose Matcha Milk Tea that is one of the most interesting specialty drinks at any LA boba shop.",
    href: "/tastea-review-los-angeles/",
  },
  {
    rank: 18,
    name: "Moge Tee",
    neighborhood: "San Gabriel Valley (Multiple Locations)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.4/5",
    price: "$$",
    mustOrder: "Dirty Pu-erh, Cheese Pu-erh Milk Tea",
    verdict: "The only LA chain built around Yunnan Pu-erh tea. The Dirty Pu-erh with cheese foam is one of the most distinctive boba drinks in the city. If you have not had Pu-erh-based boba, start here.",
    href: "/moge-tee-review-los-angeles/",
  },
  {
    rank: 19,
    name: "Ding Tea",
    neighborhood: "Hawthorne, Arcadia (Multiple LA Locations)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3/5",
    price: "$$",
    mustOrder: "Red Tea with Tapioca, Oolong Milk Tea with Cheese Foam",
    verdict: "The precision-brewed Taiwanese chain that rewards customers who care about the tea itself. The oolong and red tea bases are cleaner and more consistent than most LA chains at this price. Low brand awareness keeps it underrated.",
    href: "/ding-tea-review-los-angeles/",
  },
  {
    rank: 20,
    name: "Gong Cha",
    neighborhood: "Koreatown, SGV, Westwood, Long Beach",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2/5",
    price: "$$",
    mustOrder: "Brown Sugar Milk Tea with Pearl, Oolong Milk Tea",
    verdict: "The world's most recognized bubble tea chain delivers in LA. Better tea quality than comparable global chains, the best customization system in the category, and the egg pudding topping alone makes it worth ordering over the standard pearl. A reliable 4.2 out of 5.",
    href: "/gong-cha-review-los-angeles/",
  },
  {
    rank: 21,
    name: "LaTea",
    neighborhood: "Rowland Heights, Alhambra, Koreatown area",
    image: "/assets/products/latea_drink.png",
    rating: "4.3/5",
    price: "$",
    mustOrder: "Classic Milk Tea, Taro Milk Tea, Winter Melon Tea",
    verdict: "The best traditional Taiwanese milk tea at a value price in the SGV. LaTea brews its black tea base fresh rather than using powder, cooks tapioca pearls in-house, and offers the Winter Melon Tea that most chains have dropped from their menus. The most authentic classic milk tea experience in LA under $7.",
    href: "/latea-review-los-angeles/",
  },
  {
    rank: 22,
    name: "CoCo Fresh Tea & Juice",
    neighborhood: "Alhambra, Rowland Heights, Monterey Park, Koreatown",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1/5",
    price: "$",
    mustOrder: "Avocado Smoothie Milk Tea, Pearl Milk Tea, Taro Milk Tea",
    verdict: "The world's largest boba chain, and the best value option among major international chains in LA. The Avocado Smoothie Milk Tea is genuinely distinctive, QQ pearls are consistently well-cooked, and drinks run $1 to $2 cheaper than Gong Cha or Happy Lemon. The right call for daily boba on a budget.",
    href: "/coco-fresh-tea-review-los-angeles/",
  },
  {
    rank: 23,
    name: "Chatime",
    neighborhood: "SGV (Alhambra, Rowland Heights, Arcadia), Torrance",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2/5",
    price: "$$",
    mustOrder: "QQ Milk Tea, Ruby Red Tea, Wintermelon Milk Tea",
    verdict: "One of the world's largest bubble tea chains, built around the QQ multi-topping concept. The QQ Milk Tea combines pearls, pudding, and grass jelly in a single cup and delivers more texture variety than any single-topping chain order. The Ruby Red Tea is one of the best fruit teas at the chain level in the SGV.",
    href: "/chatime-review-los-angeles/",
  },
];

export default function BestBobaLAPage() {
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
                Citywide Roundup
              </span>
              <h1 className="text-4xl font-bold text-[#1A202C] mb-4">
                Best Boba in Los Angeles: 25+ Top Shops Across LA County
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Every shop on this list has been visited personally by Justin Sather. All drinks were purchased out of pocket. No sponsorships, no paid placements.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">25+ Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">All Neighborhoods</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated Quarterly</span>
              </div>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Best boba shops in Los Angeles County"
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
              <span className="font-semibold text-[#1A202C]">Justin Sather</span> has personally visited every shop on this list. Rankings are based on drink quality, consistency, value, and overall experience. Last updated: Q1 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Ranked list */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-8">The Top 10</h2>
        <div className="space-y-6">
          {topShops.map((shop) => (
            <article key={shop.rank} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row">
                <div className="relative sm:w-48 h-44 sm:h-auto flex-shrink-0">
                  <Image
                    src={shop.image}
                    alt={`${shop.name} boba review`}
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
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: shop.verdict }} />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#718096]">
                      <span className="font-semibold text-[#2D3748]">Must order:</span> {shop.mustOrder}
                    </span>
                    {shop.href !== "/best-boba-los-angeles/" && (
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
      </section>

      {/* Honorable mentions */}
      <section className="bg-[#EDF2F7] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">More Worth Visiting</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Ten Ren Tea", area: "San Gabriel Valley", note: "Old-school Taiwanese chain with excellent oolongs." },
              { name: "TP Tea", area: "Multiple Locations", note: "Taiwanese brand known for fresh loose-leaf teas." },
              { name: "Class 302", area: "Koreatown", note: "Vintage Taiwanese classroom theme, good pearl milk tea. One of K-Town's more atmospheric spots." },
              { name: "Sharetea", area: "Multiple Locations", note: "Taiwanese chain with a strong taro game." },
              { name: "Sunright Tea Studio", area: "San Gabriel Valley", note: "Minimalist, specialty-grade tea. Worth a special trip." },
              { name: "Wushiland Boba", area: "Multiple Locations", note: "Hong Kong-style milk tea specialist. Less known than the big chains but consistently excellent." },
              { name: "Tbaar", area: "Multiple Locations", note: "Minimalist Taiwanese chain with clean tea execution and no-frills ordering." },
              { name: "Milksha", area: "Westwood Village (First US Location)", note: "Taiwan's no-powder boba brand opened its first US store at 1009 Broxton Ave, Westwood in fall 2025. Fresh taro milk and Campus Crush exclusive. Full review available.", href: "/milksha-westwood-review/" },
              { name: "Somi Somi", area: "Koreatown", note: "Fish-shaped waffle cones with soft serve and tapioca. A K-Town institution." },
              { name: "The Alley", area: "Multiple Locations", note: "Known for Deerioca pearls. More Instagram than substance, but the milk tea base is solid." },
              { name: "Lollicup", area: "Multiple Locations", note: "LA-born chain with a huge following. Solid pearl milk tea and good value for the price." },
              { name: "Machi Machi", area: "Multiple Locations", note: "One of the better cheese foam programs in LA. Properly salted and thick." },
              { name: "KOI Thé", area: "Multiple Locations", note: "French-influenced chain. The Paris Latte is better than expected." },
              { name: "Meet Fresh", area: "Multiple Locations", note: "Taiwanese dessert shop with interesting grass jelly and taro ball combination drinks." },
            ].map((shop) => (
              <div key={shop.name} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-[#1A202C] text-sm mb-1">{shop.name}</h3>
                <p className="text-xs text-[#718096] mb-2">{shop.area}</p>
                <p className="text-xs text-[#4A5568] mb-2">{shop.note}</p>
                {"href" in shop && shop.href && (
                  <Link href={shop.href} className="text-[#2B6CB0] text-xs font-semibold hover:text-[#215387] transition-colors">
                    Full Review &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-base font-bold text-[#1A202C] mb-2">{item.question}</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-6 text-center">Want the Deepest Dive?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 text-center block">
            <h3 className="text-lg font-bold text-[#1A202C] group-hover:text-[#2B6CB0] transition-colors mb-2">Best Boba in Koreatown &rarr;</h3>
            <p className="text-[#4A5568] text-sm">30+ shops reviewed in K-Town. The highest density of boba shops in any LA neighborhood, all in one guide.</p>
          </Link>
          <Link href="/best-boba-san-gabriel-valley/" className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 text-center block">
            <h3 className="text-lg font-bold text-[#1A202C] group-hover:text-[#2B6CB0] transition-colors mb-2">Best Boba in the San Gabriel Valley &rarr;</h3>
            <p className="text-[#4A5568] text-sm">The complete SGV guide covering Rowland Heights, Monterey Park, Alhambra, Temple City, Pasadena, and more.</p>
          </Link>
          <Link href="/best-boba-silver-lake/" className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 text-center block">
            <h3 className="text-lg font-bold text-[#1A202C] group-hover:text-[#2B6CB0] transition-colors mb-2">Best Boba Near Silver Lake &rarr;</h3>
            <p className="text-[#4A5568] text-sm">The guide for Silver Lake, Los Feliz, Echo Park, and Atwater Village, including the Koreatown corridor 15 minutes west.</p>
          </Link>
          <Link href="/best-boba-long-beach/" className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 text-center block">
            <h3 className="text-lg font-bold text-[#1A202C] group-hover:text-[#2B6CB0] transition-colors mb-2">Best Boba in Long Beach &rarr;</h3>
            <p className="text-[#4A5568] text-sm">The complete Long Beach guide covering Boba Guys at 2nd and PCH, Sunright Tea Studio, Ding Tea, Tastea, and more.</p>
          </Link>
          <Link href="/best-boba-westwood/" className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 text-center block">
            <h3 className="text-lg font-bold text-[#1A202C] group-hover:text-[#2B6CB0] transition-colors mb-2">Best Boba in Westwood (Near UCLA) &rarr;</h3>
            <p className="text-[#4A5568] text-sm">The complete Westwood Village guide covering Sharetea, Junbi Matcha, Just Boba Tea House, and Le Phant. Best boba near UCLA.</p>
          </Link>
        </div>
      </section>
    </>
  );
}
