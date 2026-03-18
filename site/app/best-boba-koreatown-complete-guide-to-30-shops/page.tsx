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
  title: "Best Boba in Koreatown: Complete Guide to 30+ Shops | Justin Sather",
  description: "The most complete guide to boba and bubble tea in Koreatown, Los Angeles. 30+ shops reviewed personally. Rankings, insider tips, and honest takes. Updated quarterly.",
};

const ktShops = [
  {
    rank: 1,
    name: "Tiger Sugar",
    image: "/assets/products/tiger_sugar_drink.png",
    rating: "5/5",
    price: "$$",
    address: "3470 W 6th St, Los Angeles",
    hours: "Mon-Sun 11am-10pm",
    bestFor: "Brown sugar boba",
    mustOrder: "Brown Sugar Boba Milk with Cream Mousse",
    verdict: "The best brown sugar boba in Koreatown and arguably in all of LA. Pearls are made fresh every 4 hours. The theatrical torching of the drink is Instagram-worthy but the flavor is the real story.",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
    featured: true,
  },
  {
    rank: 2,
    name: "LaTea",
    image: "/assets/products/latea_drink.png",
    rating: "4/5",
    price: "$$",
    address: "Various K-Town locations",
    hours: "Mon-Sun 11am-9pm",
    bestFor: "Matcha, milk teas",
    mustOrder: "Matcha Latte with Tapioca",
    verdict: "Outstanding matcha program with perfectly cooked tapioca. One of the most consistent shops in K-Town.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 3,
    name: "Xing Fu Tang",
    image: "/assets/products/yifang_drink.png",
    rating: "4.5/5",
    price: "$$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-9:30pm",
    bestFor: "Handmade brown sugar tapioca",
    mustOrder: "Tiger Sugar Fresh Milk with Handmade Tapioca",
    verdict: "Direct competition to Tiger Sugar, and a serious one. The tapioca pearls are hand-pressed and noticeably chewier than machine-made pearls. The brown sugar caramelization is better than most. Worth going out of your way for.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 4,
    name: "Sunright Tea Studio",
    image: "/assets/gallery/boba_koreatown_1.jpg",
    rating: "4.5/5",
    price: "$$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-9pm",
    bestFor: "Single-origin teas, minimal additives",
    mustOrder: "Four Seasons Oolong Milk Tea",
    verdict: "One of the most underrated shops in Koreatown. The tea sourcing is genuinely serious, with single-origin oolongs you won't find at chain shops. If you actually care about the tea and not just the tapioca, start here.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 5,
    name: "Milksha",
    image: "/assets/products/chicha_san_chen_drink.png",
    rating: "4/5",
    price: "$$$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-9pm",
    bestFor: "Fresh milk teas, premium dairy",
    mustOrder: "Fresh Taro Milk with Pearl",
    verdict: "Premium Taiwanese chain built on fresh milk, not powder. The taro milk is made from actual taro, which gives it a texture and flavor depth the powder versions can't match. Pricier than most K-Town shops but the quality is real.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 6,
    name: "Moge Tee",
    image: "/assets/gallery/boba_koreatown_2.jpg",
    rating: "4/5",
    price: "$$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-10pm",
    bestFor: "Yunnan Pu-erh tea drinks",
    mustOrder: "Moge Black Sugar Latte",
    verdict: "Better than the average mid-tier chain. Uses Yunnan Pu-erh tea as a base, which gives the drinks a distinct earthy depth you won't find at most K-Town shops. The black sugar latte is legitimately good.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 7,
    name: "Cha for Tea",
    image: "/assets/gallery/boba_koreatown_3.jpg",
    rating: "4/5",
    price: "$$",
    address: "3680 Wilshire Blvd, Los Angeles",
    hours: "Mon-Sun 10am-10pm",
    bestFor: "Classic Taiwanese milk teas",
    mustOrder: "Classic Milk Tea with Pearl",
    verdict: "Solid, consistent Taiwanese-style boba. Nothing flashy but everything is done well. A reliable option when you want a straightforward drink.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 8,
    name: "Machi Machi",
    image: "/assets/gallery/boba_koreatown_4.jpg",
    rating: "4/5",
    price: "$$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-9pm",
    bestFor: "Cheese foam drinks, Taiwanese teas",
    mustOrder: "Brown Sugar Milk Tea with Cheese Foam",
    verdict: "One of the better cheese foam programs in K-Town. The foam is properly salted and thick, not the watery version you get at lesser shops. The brown sugar base works well with it.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 9,
    name: "Class 302",
    image: "/assets/products/boba_guys_drinks.png",
    rating: "4/5",
    price: "$$",
    address: "Multiple K-Town locations",
    hours: "Mon-Sun 11am-11pm",
    bestFor: "Nostalgic Taiwanese atmosphere, milk teas",
    mustOrder: "Pearl Milk Tea",
    verdict: "The vintage Taiwanese classroom theme gets old fast, but the tea is genuinely good. Pearl milk tea is properly made with quality tea leaves. One of the more atmospheric spots in K-Town.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 10,
    name: "Boba Guys",
    image: "/assets/products/boba_guys_exterior.png",
    rating: "4.5/5",
    price: "$$",
    address: "Koreatown",
    hours: "Mon-Sun 11am-9:30pm",
    bestFor: "Specialty milk teas, organic teas",
    mustOrder: "Strawberry Matcha Latte",
    verdict: "Organic teas, house-made milk, fresh taro. You pay more than you would at a mid-tier chain, but the quality jump is real. The K-Town location is one of their better spots.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 11,
    name: "Somi Somi",
    image: "/assets/products/its_boba_time_drink.png",
    rating: "4/5",
    price: "$$",
    address: "Olympic Blvd, Koreatown",
    hours: "Mon-Sun 12pm-10pm",
    bestFor: "Ah-boong fish-shaped ice cream, bubble drinks",
    mustOrder: "Ah-Boong with Tapioca",
    verdict: "Technically more ice cream than boba, but worth including. The fish-shaped waffle cone filled with soft serve and tapioca is a K-Town classic. Lines are long on weekends for a reason.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 12,
    name: "Gong Cha Koreatown",
    image: "/assets/gallery/boba_koreatown_1.jpg",
    rating: "3.5/5",
    price: "$",
    address: "3500 W 6th St, Los Angeles",
    hours: "Mon-Sun 11am-10pm",
    bestFor: "Value, quick service",
    mustOrder: "Milk Foam Green Tea",
    verdict: "The most reliable mid-tier chain in K-Town. Good for a quick drink at a fair price. Not the most exciting but never disappoints.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 13,
    name: "The Alley",
    image: "/assets/gallery/boba_koreatown_2.jpg",
    rating: "3.5/5",
    price: "$$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-10pm",
    bestFor: "Deerioca pearls, Korean aesthetic",
    mustOrder: "Brown Sugar Deerioca Milk Tea",
    verdict: "The chain that popularized Deerioca, tapioca shaped like deer silhouettes. More Instagram than substance, but the milk tea base is solid and the Deerioca has a pleasant bite.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 14,
    name: "Yi Fang Taiwan Fruit Tea",
    image: "/assets/products/yifang_exterior.png",
    rating: "4/5",
    price: "$",
    address: "Koreatown location",
    hours: "Mon-Sun 11am-9:30pm",
    bestFor: "Brown sugar milk, Taiwanese fruit teas",
    mustOrder: "Brown Sugar Boba Milk",
    verdict: "Yi Fang's Taiwanese fruit tea formula travels well. The K-Town location is consistently good, and the brown sugar milk is one of the best value options in the neighborhood. Less flashy than Tiger Sugar but considerably cheaper.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 15,
    name: "Happy Lemon",
    image: "/assets/gallery/boba_koreatown_3.jpg",
    rating: "3.5/5",
    price: "$$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-9pm",
    bestFor: "Rock salt cheese foam drinks",
    mustOrder: "Rock Salt Cheese Milk Tea",
    verdict: "Famous for the rock salt cheese foam, which is exactly what it sounds like. Salty, creamy foam over a sweet milk tea. Interesting once. After that, Koreatown has better options.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 16,
    name: "Kung Fu Tea",
    image: "/assets/gallery/boba_koreatown_4.jpg",
    rating: "3.5/5",
    price: "$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-10pm",
    bestFor: "Quick, reliable milk tea",
    mustOrder: "Kung Fu Milk Tea",
    verdict: "Reliable chain execution. Nothing innovative but the milk tea base is decent and you can count on it being open. Good for a quick fix when the premium shops have lines.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 17,
    name: "Coco Fresh Tea & Juice",
    image: "/assets/products/7_leaves_cafe_drink.png",
    rating: "3/5",
    price: "$",
    address: "Various K-Town locations",
    hours: "Mon-Sun 11am-10pm",
    bestFor: "Budget boba, large portions",
    mustOrder: "Passion Fruit Green Tea with Pearl",
    verdict: "The Taiwanese chain that built a global empire on consistency and value. Nothing exceptional here, but the fruit teas are fresh and the price is hard to beat at under $5 for a full-size drink.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 18,
    name: "ShareTea",
    image: "/assets/products/half_and_half_tea_express_drink.png",
    rating: "3.5/5",
    price: "$",
    address: "Multiple K-Town locations",
    hours: "Mon-Sun 11am-10pm",
    bestFor: "Taro drinks, light ice options",
    mustOrder: "Taro Milk Tea with Pearl",
    verdict: "ShareTea's taro game is consistently above average. The taro powder base has more depth than the standard version you get at cheaper shops. Good value, especially for the taro drinks.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 19,
    name: "Meet Fresh",
    image: "/assets/products/its_boba_time_exterior.png",
    rating: "3.5/5",
    price: "$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-11pm",
    bestFor: "Grass jelly desserts, taro ball drinks",
    mustOrder: "Taro Grass Jelly Milk Drink",
    verdict: "Taiwanese dessert shop that does boba alongside grass jelly and taro balls. The boba is secondary to the desserts, but the combination drinks are genuinely interesting. A different direction than most K-Town shops.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 20,
    name: "OneZo",
    image: "/assets/gallery/boba_koreatown_1.jpg",
    rating: "3.5/5",
    price: "$$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-10pm",
    bestFor: "Specialty tapioca varieties",
    mustOrder: "Mango Matcha with Tiger Tapioca",
    verdict: "Taiwanese chain specializing in different tapioca types: tiger, red bean, taro. The concept is more interesting than the execution, but the tiger tapioca has a pleasant chew and the mango matcha is a crowd-pleaser.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 21,
    name: "ChaTime",
    image: "/assets/gallery/boba_koreatown_2.jpg",
    rating: "3/5",
    price: "$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-9pm",
    bestFor: "Standard Taiwanese chain options",
    mustOrder: "Honey Milk Tea",
    verdict: "Global Taiwanese chain. The tapioca here is usually fresh and properly cooked, which puts it above some chains. Everything else is average. Reliable but forgettable.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 22,
    name: "KOI Thé",
    image: "/assets/gallery/boba_koreatown_3.jpg",
    rating: "3.5/5",
    price: "$$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-9pm",
    bestFor: "French-influenced tea drinks",
    mustOrder: "Paris Latte with Boba",
    verdict: "French-influenced boba chain that leans heavily on the aesthetic. The drinks are more refined than most chains and the shop design is genuinely nice. The Paris Latte is better than it has any right to be.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 23,
    name: "Ding Tea",
    image: "/assets/gallery/boba_koreatown_4.jpg",
    rating: "3/5",
    price: "$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-10pm",
    bestFor: "Classic Taiwanese staples, low prices",
    mustOrder: "Oolong Milk Tea with Pearl",
    verdict: "Mid-level Taiwanese chain. The oolong milk tea is the move here, made with properly brewed loose-leaf tea and a light milky base. Nothing in the menu will surprise you, but the execution is clean.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 24,
    name: "7 Leaves Cafe",
    image: "/assets/products/7_leaves_cafe_drink.png",
    rating: "4/5",
    price: "$$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-9pm",
    bestFor: "Vietnamese coffee with boba, creative drinks",
    mustOrder: "Vietnamese Coffee with Boba",
    verdict: "Vietnamese-American cafe doing creative things with boba. The Vietnamese coffee drink is unique and excellent. Seasonal drinks are consistently good and change often enough to warrant return visits.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 25,
    name: "Tapioca Express",
    image: "/assets/products/teaspoon_exterior.png",
    rating: "3/5",
    price: "$",
    address: "Koreatown area",
    hours: "Mon-Sat 11am-9pm",
    bestFor: "Old-school LA boba",
    mustOrder: "Classic Milk Tea",
    verdict: "One of the original LA boba chains. Launched before most of the current competition existed. The format is dated and the menu hasn't evolved much, but the milk tea is straightforward and the price is right.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 26,
    name: "Boba Bear",
    image: "/assets/gallery/boba_koreatown_1.jpg",
    rating: "3.5/5",
    price: "$",
    address: "Koreatown area",
    hours: "Mon-Sun 12pm-9pm",
    bestFor: "Creative flavors",
    mustOrder: "Seasonal special",
    verdict: "Creative seasonal drinks at good prices. The rotating menu means there's always something new to try. Staff is friendly and the wait is never long.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 27,
    name: "Whale Tea",
    image: "/assets/gallery/boba_koreatown_2.jpg",
    rating: "3.5/5",
    price: "$$",
    address: "Koreatown area",
    hours: "Mon-Sun 12pm-9pm",
    bestFor: "Seasonal drinks, creative flavors",
    mustOrder: "Oolong Latte with Boba",
    verdict: "Small chain with a rotating seasonal menu. Hit or miss depending on what they're running, but the core oolong latte is solid and the shop atmosphere is pleasant. Worth checking when new drinks drop.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 28,
    name: "Tea Lab",
    image: "/assets/gallery/boba_koreatown_3.jpg",
    rating: "3/5",
    price: "$$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-9pm",
    bestFor: "Specialty drinks",
    mustOrder: "House special milk tea",
    verdict: "Interesting concept but execution is inconsistent. On a good day it's excellent, on a bad day it's average. Worth a try but don't make a special trip.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 29,
    name: "GoodDay",
    image: "/assets/gallery/boba_koreatown_4.jpg",
    rating: "3/5",
    price: "$",
    address: "Koreatown area",
    hours: "Mon-Sun 11am-10pm",
    bestFor: "Budget friendly, everyday boba",
    mustOrder: "Classic Milk Tea",
    verdict: "Not a destination, but a solid everyday option. The classic milk tea is made fresh and the tapioca stays consistent throughout service hours. Good backup when your usual spot has a line.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 30,
    name: "Bobabam",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "3/5",
    price: "$",
    address: "Koreatown area",
    hours: "Mon-Fri 11am-9pm, Sat-Sun 11am-10pm",
    bestFor: "Value, quick service",
    mustOrder: "House Milk Tea",
    verdict: "No-frills local shop competing on price and speed. The house milk tea is made fresh and the tapioca is consistently cooked. Nothing special but solid for under $5.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
];

export default function KoreatownGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Neighborhood Guide
              </span>
              <h1 className="text-4xl font-bold text-[#1A202C] mb-4">
                Best Boba in Koreatown: A Complete Guide to 30+ Shops
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Koreatown has the highest concentration of boba shops in Los Angeles. Justin has visited every one of them. Here is everything you need to know.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">30+ Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">All Personally Visited</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Zero Sponsorships</span>
              </div>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/gallery/boba_koreatown_guide.png"
                alt="Koreatown boba guide Los Angeles"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Author byline */}
      <section className="bg-[#EDF2F7] py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/assets/team/justin-sather-avatar.jpg" alt="Justin Sather" fill className="object-cover" />
          </div>
          <p className="text-sm text-[#4A5568]">
            By <span className="font-semibold text-[#1A202C]">Justin Sather</span>, who has personally visited every shop in this guide. Updated Q1 2026.
          </p>
        </div>
      </section>

      {/* Guide intro */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#EDF2F7] rounded-xl p-6 mb-10">
          <h2 className="font-bold text-[#1A202C] mb-3">About This Guide</h2>
          <p className="text-[#4A5568] text-sm leading-relaxed">
            Koreatown is the most densely packed boba neighborhood in Los Angeles. Within a few square miles, you can find everything from classic Taiwanese milk teas to modern Korean-style drinks with creative toppings and fresh, house-made ingredients. This guide covers 30+ shops across K-Town, ranked and reviewed honestly. No shops were given advance notice of Justin&apos;s visits. No free drinks were accepted. Every rating reflects a real paid experience.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {[
            { src: "/assets/gallery/boba_koreatown_1.jpg", alt: "Koreatown boba scene" },
            { src: "/assets/gallery/boba_koreatown_2.jpg", alt: "Koreatown bubble tea" },
            { src: "/assets/gallery/boba_koreatown_3.jpg", alt: "K-Town boba shops" },
            { src: "/assets/gallery/boba_koreatown_4.jpg", alt: "Koreatown drinks" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-square rounded-lg overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Featured: Tiger Sugar */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-5">The Best of Koreatown</h2>
          <article className="bg-white rounded-xl border-2 border-[#2B6CB0] shadow-md overflow-hidden mb-4">
            <div className="flex flex-col md:flex-row">
              <div className="relative md:w-64 h-56 md:h-auto flex-shrink-0">
                <Image
                  src="/assets/products/tiger_sugar_drink.png"
                  alt="Tiger Sugar brown sugar boba Koreatown"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#2B6CB0] text-white text-xs font-bold px-2 py-1 rounded-full">
                  #1 Rated
                </div>
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-[#1A202C]">Tiger Sugar</h3>
                    <p className="text-sm text-[#718096]">3470 W 6th St, Los Angeles</p>
                  </div>
                  <StarRating rating="5/5" />
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
                  The best brown sugar boba in Koreatown and arguably in all of Los Angeles. Pearls are made fresh every 4 hours. The theatrical torching of the drink is Instagram-worthy, but the flavor is the real story. This is what brown sugar boba should taste like.
                </p>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="text-xs text-[#718096] space-x-3">
                    <span><span className="font-semibold">Must order:</span> Brown Sugar Boba Milk with Cream Mousse</span>
                    <span><span className="font-semibold">Price:</span> $$</span>
                  </div>
                  <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="bg-[#2B6CB0] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#215387] transition-colors">
                    Full Review
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* All shops */}
        <h2 className="text-2xl font-bold text-[#1A202C] mb-5">All Reviewed Shops</h2>
        <div className="space-y-4">
          {ktShops.filter(s => !s.featured).map((shop) => (
            <article key={shop.rank} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row">
                <div className="relative sm:w-40 h-40 sm:h-auto flex-shrink-0">
                  <Image src={shop.image} alt={`${shop.name} boba Koreatown`} fill className="object-cover" />
                  <div className="absolute top-2 left-2 w-7 h-7 bg-[#2B6CB0] text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {shop.rank}
                  </div>
                </div>
                <div className="p-4 flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-[#1A202C]">{shop.name}</h3>
                    <div className="flex-shrink-0 ml-2"><StarRating rating={shop.rating} /></div>
                  </div>
                  <p className="text-xs text-[#718096] mb-2">{shop.address} &bull; {shop.price} &bull; Best for: {shop.bestFor}</p>
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: shop.verdict }} />
                  <p className="text-xs text-[#718096]">
                    <span className="font-semibold text-[#2D3748]">Must order:</span> {shop.mustOrder}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Neighborhood tips */}
      <section className="bg-[#EDF2F7] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Koreatown Boba Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
                title: "Parking",
                tip: "Street parking is extremely limited on 6th Street. Use the Target or Koreatown Galleria parking structure and walk.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
                title: "Best Time to Go",
                tip: "Weekday afternoons 2pm to 5pm have the shortest lines. Weekend evenings are packed at the popular spots.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                ),
                title: "Pro Tip",
                tip: "Many K-Town shops offer loyalty cards. If you plan to visit multiple times, ask when you order and start collecting.",
              },
            ].map((tip) => (
              <div key={tip.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-[#EDF2F7] flex items-center justify-center text-[#2B6CB0] mb-3">
                  {tip.icon}
                </div>
                <h3 className="font-bold text-[#1A202C] mb-2 text-sm">{tip.title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-3">See the Full Tiger Sugar Review</h2>
        <p className="text-[#4A5568] mb-6 max-w-xl mx-auto">
          The number one shop in Koreatown deserves a full breakdown. Read the complete Tiger Sugar review with photos, ordering tips, and everything you need to know.
        </p>
        <Link
          href="/tiger-sugar-review-koreatown-boba-bubble-tea/"
          className="bg-[#2B6CB0] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#215387] transition-colors inline-block"
        >
          Tiger Sugar Full Review
        </Link>
      </section>
    </>
  );
}
