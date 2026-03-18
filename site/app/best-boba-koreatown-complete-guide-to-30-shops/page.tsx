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
    name: "Cha for Tea",
    image: "/assets/gallery/boba_koreatown_1.jpg",
    rating: "4/5",
    price: "$$",
    address: "3680 Wilshire Blvd, Los Angeles",
    hours: "Mon-Sun 10am-10pm",
    bestFor: "Classic Taiwanese milk teas",
    mustOrder: "Classic Milk Tea with Pearl",
    verdict: "Solid, consistent Taiwanese-style boba. Nothing flashy but everything is done well. Great option when you want a reliable drink.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 4,
    name: "Gong Cha Koreatown",
    image: "/assets/gallery/boba_koreatown_2.jpg",
    rating: "3.5/5",
    price: "$",
    address: "3500 W 6th St, Los Angeles",
    hours: "Mon-Sun 11am-10pm",
    bestFor: "Value, quick service",
    mustOrder: "Milk Foam Green Tea",
    verdict: "The most reliable mid-tier boba chain in K-Town. Good for a quick drink at a fair price. Not the most exciting but never disappoints.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 5,
    name: "Boba Bear",
    image: "/assets/gallery/boba_koreatown_3.jpg",
    rating: "3.5/5",
    price: "$",
    address: "K-Town area",
    hours: "Mon-Sun 12pm-9pm",
    bestFor: "Creative flavors",
    mustOrder: "Seasonal special",
    verdict: "Creative seasonal drinks at good prices. The rotating menu means there&apos;s always something new to try. Staff is friendly and helpful.",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    featured: false,
  },
  {
    rank: 6,
    name: "Tea Lab",
    image: "/assets/gallery/boba_koreatown_4.jpg",
    rating: "3/5",
    price: "$$",
    address: "K-Town area",
    hours: "Mon-Sun 11am-9pm",
    bestFor: "Specialty drinks",
    mustOrder: "House special milk tea",
    verdict: "Interesting concept but execution is inconsistent. On a good day it&apos;s excellent, on a bad day it&apos;s average. Worth a try but do not make a special trip.",
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
            Koreatown is the most densely packed boba neighborhood in Los Angeles. Within a few square miles, you can find everything from classic Taiwanese milk teas to cutting-edge Korean-style drinks with creative toppings and fresh, house-made ingredients. This guide covers 30+ shops across K-Town, ranked and reviewed honestly. No shops were given advance notice of Justin&apos;s visits. No free drinks were accepted. Every rating reflects a real paid experience.
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
              { icon: "🅿️", title: "Parking", tip: "Street parking is extremely limited on 6th Street. Use the Target or Koreatown Galleria parking structure and walk." },
              { icon: "⏰", title: "Best Time to Go", tip: "Weekday afternoons 2pm to 5pm have the shortest lines. Weekend evenings are packed at the popular spots." },
              { icon: "💡", title: "Pro Tip", tip: "Many K-Town shops offer loyalty cards. If you plan to visit multiple times, ask when you order and start collecting." },
            ].map((tip) => (
              <div key={tip.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="text-2xl mb-2">{tip.icon}</div>
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
