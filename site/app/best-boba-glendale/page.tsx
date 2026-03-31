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
  title: "Best Boba in Glendale: Top Bubble Tea Near the Americana at Brand and Glendale Galleria | Justin Sather",
  description: "The complete guide to boba in Glendale, CA. Glendale has chain options near the Americana and Galleria. For the best boba nearby, Sunright Tea Studio is 15 minutes east in Pasadena and Koreatown is 20 to 25 minutes south. Every shop personally visited, zero sponsorships. Updated 2026.",
};

const faqItems = [
  {
    question: "What is the best boba in Glendale?",
    answer: "Glendale has chain boba options at the Americana at Brand and along Brand Blvd, including Gong Cha and CoCo Fresh Tea. For the best boba within a short drive of Glendale, Sunright Tea Studio in Pasadena is about 15 minutes east via the 134 freeway. For the full Koreatown boba experience, Tiger Sugar, Happy Lemon, and Machi Machi are about 20 to 25 minutes south via the 2 freeway or Glendale Blvd to the 5.",
  },
  {
    question: "Is there boba near the Americana at Brand in Glendale?",
    answer: "Yes. The Americana at Brand shopping center has boba chain options along Brand Blvd and in the surrounding Glendale corridor. Gong Cha and CoCo Fresh Tea have locations accessible from the Americana. For premium boba beyond what the Americana area offers immediately, the 134 freeway east to Pasadena (15 minutes) or the 2 south to Koreatown (20 to 25 minutes) provide the highest quality options in the region.",
  },
  {
    question: "Is there boba near the Glendale Galleria?",
    answer: "The Glendale Galleria is located on Brand Blvd, the main commercial corridor in Glendale, and chain boba options are available along Brand Blvd and in the surrounding blocks. Gong Cha is the most recognized chain option near the Galleria. For a boba destination worth a dedicated trip from the Galleria, Sunright Tea Studio in Pasadena (15 min east via 134) or Tiger Sugar in Koreatown (25 min south via 2 freeway) are the best options in the region.",
  },
  {
    question: "How far is Glendale from Koreatown for boba?",
    answer: "Glendale is about 12 to 15 miles from Koreatown, roughly 20 to 30 minutes by car depending on traffic. The most direct route is the 2 freeway south to the 5 west, or surface streets down Glendale Blvd and Vermont Ave to Olympic Blvd. Tiger Sugar, Happy Lemon, and Machi Machi are all on or near Olympic Blvd between Vermont and Western. The Koreatown boba scene is significantly more developed than what is immediately available in Glendale, and the drive is shorter than from Burbank or the Valley.",
  },
  {
    question: "What boba is open late in Glendale?",
    answer: "Late-night boba options in Glendale are limited compared to Koreatown or the SGV. For later hours, Koreatown is 20 to 25 minutes south via the 2 freeway, and several shops including Happy Lemon and Gong Cha stay open until 10 or 11 PM on weekdays and later on weekends. Always confirm current hours directly with the shop before a late-night visit.",
  },
  {
    question: "Is Glendale close to the San Gabriel Valley for boba?",
    answer: "Glendale is at the western edge of the San Gabriel Valley corridor. Pasadena is about 15 minutes east via the 134 freeway, and Sunright Tea Studio in Pasadena is the best boba shop in that direct corridor. Further east, Alhambra, San Gabriel, and Rowland Heights are 25 to 35 minutes via the 134 to the 210 to the 10 freeway. The SGV has the highest density of premium boba shops in the LA region, and the 134 freeway from Glendale is the most direct route into that corridor.",
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

const glendaleShops = [
  {
    rank: 1,
    name: "Sunright Tea Studio",
    city: "Pasadena (15 min east via 134)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.6",
    price: "$$",
    address: "Pasadena, CA",
    bestFor: "Sun Moon Lake black tea sourcing, Alishan oolong, tea-forward preparation",
    mustOrder: "Sun Moon Lake Black Tea, Alishan High Mountain Oolong",
    verdict: "The best boba within a short drive east of Glendale, and the most direct route from Glendale into the Pasadena boba corridor via the 134 freeway. Sunright is built around Sun Moon Lake black tea from Taiwan, one of the most prized single-origin teas in the world, used as the base for most drinks rather than the generic fannings most chains rely on. The Alishan High Mountain Oolong is the second essential order: clear, clean, and complex. For Glendale residents who want genuinely elevated boba without driving to Koreatown, Pasadena via the 134 is the answer.",
    href: "/sunright-tea-studio-review-los-angeles/",
  },
  {
    rank: 2,
    name: "Chicha San Chen",
    city: "San Gabriel (25 min east via 134 to 210 to 10)",
    image: "/assets/products/chicha_san_chen_drink.png",
    rating: "5.0",
    price: "$$",
    address: "San Gabriel, CA",
    bestFor: "World Tea Championship credentials, Four Seasons Tea, Wuyi Mountain Oolong",
    mustOrder: "Four Seasons Tea, Wuyi Mountain Oolong",
    verdict: "The most decorated boba brand in Los Angeles, with World Tea Championship credentials and a tea-sourcing program built around high-altitude Taiwanese and Chinese oolongs. Chicha San Chen's Four Seasons Tea is the defining order: four oolongs blended together for complexity, served with or without milk. The shop is in San Gabriel, about 25 to 30 minutes east of Glendale via the 134 to the 210 to the 10 freeway. Worth the drive when the occasion calls for the best rather than the most convenient.",
    href: "/chicha-san-chen-san-gabriel-review/",
  },
  {
    rank: 3,
    name: "Happy Lemon",
    city: "SGV Alhambra / Arcadia (25 min east via 134 to 210)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Alhambra / Arcadia / Monterey Park, CA",
    bestFor: "Rock Salt and Cheese Oolong, cheese foam series, Hawthorn Green Tea",
    mustOrder: "Rock Salt & Cheese Oolong, Hawthorn Green Tea with Rock Salt Cheese",
    verdict: "The chain that introduced cheese foam to Los Angeles, with SGV locations reachable from Glendale in 25 to 30 minutes via the 134 to the 210 freeway. Happy Lemon's Rock Salt and Cheese Oolong is still the defining cheese foam boba order in LA: cold oolong tea base with savory-sweet cheese foam balanced by salt. For Glendale residents who want the Koreatown boba experience with a shorter drive, the SGV Happy Lemon locations via the 134 east are a practical route that avoids the 2 freeway south entirely.",
    href: "/happy-lemon-review-los-angeles/",
  },
  {
    rank: 4,
    name: "Gong Cha",
    city: "Multiple LA locations accessible from Glendale",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Multiple locations near Glendale",
    bestFor: "High Mountain Oolong base, Brown Sugar Milk Tea with Pearl, consistent global chain",
    mustOrder: "Brown Sugar Milk Tea with Pearl, Oolong Milk Tea",
    verdict: "One of the world's largest boba chains (2,000+ locations in 20+ countries) with locations accessible from Glendale along the Brand Blvd corridor and in the broader LA network. Gong Cha's differentiator is its High Mountain Oolong base, which gives even standard milk tea drinks more complexity than most competitors at the same price point. The Brown Sugar Milk Tea with Pearl is the most ordered drink. For a Glendale resident or visitor who wants reliable, consistent boba without driving to Pasadena or Koreatown, a nearby Gong Cha is the practical choice.",
    href: "/gong-cha-review-los-angeles/",
  },
  {
    rank: 5,
    name: "It's Boba Time",
    city: "Burbank (10 min west via San Fernando Rd)",
    image: "/assets/products/its_boba_time_drink.png",
    rating: "4.2",
    price: "$",
    address: "3107 W Magnolia Blvd, Burbank, CA",
    bestFor: "LA original since 1999, Classic Taro Milk Tea, value pricing",
    mustOrder: "Classic Taro Milk Tea, Honeydew Milk Tea",
    verdict: "The Los Angeles original boba chain, founded in 1999, with a Burbank location on Magnolia Blvd that is about 10 minutes west of Glendale via San Fernando Rd or the 5 freeway. Not the most elevated boba in the region, but It's Boba Time is the most dependable value option: consistent pearls, a reliable taro base, and pricing under $7 for most drinks. The Classic Taro Milk Tea is the essential order. For Glendale residents who want a quick, reliable boba stop without driving to Pasadena or Koreatown, the Burbank location is the practical nearest anchor.",
    href: "/its-boba-time-burbank/",
  },
  {
    rank: 6,
    name: "Tiger Sugar",
    city: "Koreatown (20 to 25 min south via 2 freeway)",
    image: "/assets/products/tiger_sugar_drink.png",
    rating: "5.0",
    price: "$$",
    address: "Koreatown, Los Angeles",
    bestFor: "Brown Sugar Boba Milk with Cream Mousse, Okinawa pearls, best brown sugar boba in LA",
    mustOrder: "Brown Sugar Boba Milk with Cream Mousse",
    verdict: "The best brown sugar boba in Los Angeles and worth the 20 to 25 minute drive from Glendale when the occasion calls for it. Tiger Sugar uses Okinawa black sugar rather than caramel syrup, cooks pearls fresh in small batches every four hours, and makes the cream mousse in-house. These three decisions produce a drink with no equivalent in Glendale or anywhere close to it. Take the 2 freeway south to the 5, then surface streets to Koreatown. Glendale is closer to Koreatown than Burbank is, which makes Tiger Sugar a more practical destination from here than from the Valley.",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
  },
];

const moreShops = [
  { name: "Kung Fu Tea", city: "Multiple LA locations", note: "One of the most accessible affordable chain boba options in the LA corridor. The Kung Fu Milk Tea is well-balanced and priced at $5 to $7. Read the full review.", href: "/kung-fu-tea-review-los-angeles/" },
  { name: "CoCo Fresh Tea & Juice", city: "Multiple LA locations", note: "The world's largest boba chain by outlet count (4,000+ locations, 40+ countries), with the unique Avocado Smoothie Milk Tea. Affordable at $4.50 to $7. Read the full review.", href: "/coco-fresh-tea-review-los-angeles/" },
  { name: "Moge Tee", city: "SGV (25 to 30 min east)", note: "The only boba chain in LA built around Yunnan Pu-erh tea as its base, giving drinks an earthy, complex profile no other chain replicates. The Dirty Pu-erh is the essential order. Read the full review.", href: "/moge-tee-review-los-angeles/" },
  { name: "Milksha", city: "Westwood (35 to 40 min south)", note: "Taiwan's largest fresh milk boba brand with its first US location at 1009 Broxton Ave, Westwood Village. No powder, real taro from Dajia Taiwan, Westwood-exclusive Campus Crush drink. Read the full review.", href: "/milksha-westwood-review/" },
  { name: "Boba Guys", city: "West LA / Rideback Ranch (35 to 40 min south)", note: "Premium organic-ingredient boba. Strawberry Matcha, Earl Grey, and Horchata are the standout drinks. The highest ingredient quality of any chain in LA. Read the full review.", href: "/boba-guys-review-los-angeles/" },
  { name: "Feng Cha", city: "Multiple LA locations", note: "Brown Sugar Milk Tea and Oolong Milk Tea with Cheese Foam are the essential orders. One of the highest-volume boba search keywords in LA. Read the full review.", href: "/feng-cha-review-los-angeles/" },
];

export default function BestBobaGlendalePage() {
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
                Best Boba in Glendale: Bubble Tea Near the Americana at Brand, Glendale Galleria, and Beyond
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Glendale has chain boba options near the Americana and Galleria. For the best boba in the region, Sunright Tea Studio is 15 minutes east in Pasadena, and Koreatown is 20 to 25 minutes south. Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">6 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Glendale, Pasadena, Koreatown</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/best-boba-los-angeles-feature-full.jpeg"
                alt="Best boba in Glendale near Americana at Brand Glendale Galleria bubble tea"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Honest Guide to Boba in Glendale</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Glendale is one of the largest cities in LA County, home to 200,000 residents and one of the largest Armenian-American communities in the United States. The Americana at Brand and Glendale Galleria on Brand Blvd are two of the region&apos;s busiest shopping destinations, drawing visitors from across the San Fernando Valley, the Eastside, and Burbank. The dining scene on Brand Blvd and in the surrounding blocks is strong, with a mix of Armenian restaurants, cafes, and chain dining options.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Dedicated boba, however, is limited in Glendale itself compared to the SGV or Koreatown. Chain options are available near the Americana and Galleria, including Gong Cha and CoCo Fresh Tea along the Brand Blvd corridor. For anything beyond reliable chain boba, the 134 freeway east opens up the Pasadena and SGV corridor quickly: Sunright Tea Studio in Pasadena is about 15 minutes away, and the broader San Gabriel Valley boba scene with Chicha San Chen, Happy Lemon, and Moge Tee is 20 to 30 minutes east.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            Glendale&apos;s proximity to Koreatown is also a meaningful advantage. The 2 freeway south connects Glendale to the Koreatown boba corridor in about 20 to 25 minutes, making Tiger Sugar, Happy Lemon, and Machi Machi more accessible from Glendale than from Burbank or the Valley. For any Glendale resident who wants the full Koreatown experience, the drive is shorter here than from most of the neighborhoods in this guide network.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba Near Glendale, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, value, and accessibility from Glendale.</p>

          <div className="space-y-8">
            {glendaleShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba near Glendale Los Angeles`}
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Worth Visiting Near Glendale</h2>
          <p className="text-[#4A5568] mb-8 text-sm">Additional shops worth the drive from Glendale when the occasion calls for it.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moreShops.map((shop) => (
              <div key={shop.name} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-[#1A202C] text-sm mb-1">{shop.name}</h3>
                <p className="text-xs text-[#718096] mb-2">{shop.city}</p>
                <p className="text-xs text-[#4A5568] mb-2">{shop.note}</p>
                {shop.href && (
                  <Link href={shop.href} className="text-[#2B6CB0] text-xs font-semibold hover:text-[#215387] transition-colors">
                    Full Review &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood breakdown */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area Near Glendale</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Glendale (Brand Blvd / Americana / Galleria)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Brand Blvd is Glendale&apos;s main commercial corridor and the location of both the Americana at Brand and the Glendale Galleria. Chain boba options including Gong Cha and CoCo Fresh Tea are available along this corridor. The Armenian-American character of much of Glendale means strong cafe culture overall, but dedicated boba shops are fewer here than in the SGV or Koreatown. The chain options on Brand Blvd are reliable for a quick stop but not worth a dedicated trip from outside Glendale.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Burbank (10 min west via San Fernando Rd or 5 freeway)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Burbank is the closest city to Glendale with a dedicated boba anchor in It&apos;s Boba Time on Magnolia Blvd. The Magnolia Blvd corridor is Burbank&apos;s Media District restaurant row, and the It&apos;s Boba Time location is the most accessible boba stop in the immediate Glendale-Burbank corridor. About 10 minutes west of Glendale via San Fernando Rd or the 5 freeway south. Read the <Link href="/best-boba-burbank/" className="text-[#2B6CB0] font-semibold hover:underline">Best Boba Burbank guide</Link> for the full breakdown.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Pasadena and the 134 East Corridor (15 to 20 min)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The 134 freeway east from Glendale connects directly to Pasadena and is the fastest route into the SGV boba corridor. Sunright Tea Studio in Pasadena is the best boba shop in this direct corridor, about 15 minutes from downtown Glendale. The 134 east then connects to the 210, which runs through Arcadia, Temple City, and further into the SGV. Read the <Link href="/best-boba-pasadena/" className="text-[#2B6CB0] font-semibold hover:underline">Best Boba Pasadena guide</Link> for the full Pasadena and eastern 134 breakdown.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">San Gabriel Valley (20 to 35 min east via 134 to 210 to 10)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The full San Gabriel Valley boba scene is 20 to 35 minutes east of Glendale via the 134 to the 210 to the 10 freeway. This is the highest density of premium boba shops in the entire LA region, with Chicha San Chen, Happy Lemon, Moge Tee, Xing Fu Tang, and Sunright all within a compact area. For any serious boba trip from Glendale, the SGV is the destination. Read the <Link href="/best-boba-san-gabriel-valley/" className="text-[#2B6CB0] font-semibold hover:underline">Best Boba SGV guide</Link> for the complete breakdown of Rowland Heights, Monterey Park, Alhambra, and Arcadia.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Koreatown (20 to 25 min south via 2 freeway)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Koreatown is 20 to 25 minutes south of Glendale via the 2 freeway south to the 5, making it more accessible from Glendale than from Burbank or the San Fernando Valley. Tiger Sugar, Happy Lemon, Machi Machi, and Tiger Sugar are all on or near Olympic Blvd between Vermont and Western Ave. For the full Koreatown boba experience, read the <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="text-[#2B6CB0] font-semibold hover:underline">Best Boba Koreatown guide</Link> covering 30+ shops in K-Town.
              </p>
            </div>
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
      <section className="bg-[#F7FAFC] border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6 text-center">Explore More Neighborhood Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Link href="/best-boba-burbank/" className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 text-center block">
              <h3 className="text-lg font-bold text-[#1A202C] group-hover:text-[#2B6CB0] transition-colors mb-2">Best Boba in Burbank &rarr;</h3>
              <p className="text-[#4A5568] text-sm">The guide for Warner Bros, Disney Studios, and the Burbank Media District. It&apos;s Boba Time on Magnolia Blvd is the local anchor, 10 minutes west of Glendale.</p>
            </Link>
            <Link href="/best-boba-san-gabriel-valley/" className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 text-center block">
              <h3 className="text-lg font-bold text-[#1A202C] group-hover:text-[#2B6CB0] transition-colors mb-2">Best Boba in the SGV &rarr;</h3>
              <p className="text-[#4A5568] text-sm">The complete SGV guide covering Rowland Heights, Monterey Park, Alhambra, Arcadia, and more. 20 to 35 minutes east of Glendale via the 134 and 210.</p>
            </Link>
            <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 text-center block">
              <h3 className="text-lg font-bold text-[#1A202C] group-hover:text-[#2B6CB0] transition-colors mb-2">Best Boba in Koreatown &rarr;</h3>
              <p className="text-[#4A5568] text-sm">30+ shops reviewed in K-Town. Tiger Sugar, Happy Lemon, and Machi Machi are 20 to 25 minutes south of Glendale via the 2 freeway.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
