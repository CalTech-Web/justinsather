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
  title: "Best Boba in Burbank: Top Bubble Tea Near Warner Bros, Disney Studios, and the Media District | Justin Sather",
  description: "The complete guide to boba in Burbank, CA. It's Boba Time on Magnolia Blvd is the local anchor. For serious boba, the SGV is 20 minutes east and Koreatown is 30 minutes south. Every shop personally visited, zero sponsorships. Updated 2026.",
};

const faqItems = [
  {
    question: "What is the best boba in Burbank?",
    answer: "The best boba in Burbank itself is It's Boba Time on Magnolia Blvd, the Los Angeles original founded in 1999 with a dedicated Burbank location at 3107 W Magnolia Blvd. For the best boba within a reasonable drive of Burbank, Sunright Tea Studio in Pasadena is about 20 to 25 minutes east via the 134 freeway. For premium Koreatown-style boba, Tiger Sugar and Happy Lemon are about 30 to 35 minutes south via the 5 and 10 freeways.",
  },
  {
    question: "Is there boba near Warner Bros Studio in Burbank?",
    answer: "Yes. It's Boba Time on Magnolia Blvd is the closest boba shop to Warner Bros Studio in Burbank, about a 5 to 10 minute drive from the studio lot at 3400 W Riverside Dr. The Magnolia Blvd location is the primary commercial boba destination for the Burbank Media District. For anyone on a studio lot break or leaving Warner Bros or Disney after work, Magnolia Blvd is the most practical boba stop in Burbank.",
  },
  {
    question: "Where can I find boba near Hollywood Burbank Airport?",
    answer: "The closest boba to Hollywood Burbank Airport (Bob Hope Airport) is It's Boba Time on W Magnolia Blvd, about 5 to 10 minutes west of the terminal. Magnolia Blvd is Burbank's main commercial corridor and the It's Boba Time location is the most accessible option for pre-flight or post-arrival boba. For a longer stop before or after a flight, Glendale is 10 minutes east of the airport with additional chain boba options.",
  },
  {
    question: "How far is Burbank from Koreatown for boba?",
    answer: "Burbank is about 15 to 18 miles from the heart of Koreatown, roughly 30 to 40 minutes by car depending on traffic. The most direct route is the 5 freeway south to the 101, then west to Vermont or Western Ave, or take surface streets down Cahuenga and Western. Tiger Sugar, Happy Lemon, and Machi Machi are all on or near Olympic Blvd between Vermont and Western. The Koreatown drive from Burbank is longer than from Hollywood, but the quality gap between Koreatown boba and what is immediately available in Burbank makes the drive worthwhile for a special stop.",
  },
  {
    question: "What is the best boba near Burbank Town Center?",
    answer: "Burbank Town Center is located near San Fernando Blvd and Magnolia Blvd, and the It's Boba Time location on W Magnolia Blvd is the closest dedicated boba shop to the mall, about a 5 to 10 minute drive. The Magnolia Blvd corridor, also known as the Burbank Media District restaurant row, has the highest concentration of food and drink options in Burbank including the It's Boba Time location.",
  },
  {
    question: "Is boba open late in Burbank?",
    answer: "Hours in Burbank are more limited than in Koreatown or the SGV. It's Boba Time on Magnolia Blvd typically closes by 9 or 10 PM. For later hours, Koreatown is 30 to 35 minutes south and several shops there, including Happy Lemon and Gong Cha, stay open until 10 or 11 PM on weekdays and later on weekends. Always confirm current hours directly with the shop before a late-night visit.",
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

const burbankShops = [
  {
    rank: 1,
    name: "It's Boba Time Burbank",
    city: "Burbank (3107 W Magnolia Blvd)",
    image: "/assets/products/its_boba_time_drink.png",
    rating: "4.2",
    price: "$",
    address: "3107 W Magnolia Blvd, Burbank, CA",
    bestFor: "LA original since 1999, Classic Taro Milk Tea, value pricing, Magnolia Blvd location",
    mustOrder: "Classic Taro Milk Tea, Honeydew Milk Tea",
    verdict: "The best boba actually in Burbank. It's Boba Time is the Los Angeles original, founded in 1999, and the Magnolia Blvd location is the dedicated Burbank anchor for anyone in the Media District, near the studio lots, or looking for a reliable neighborhood boba stop. The Classic Taro Milk Tea is the essential order: smooth taro base, consistent pearls, and value pricing at under $7. Not the most elevated boba in LA, but the most convenient and reliable option within Burbank proper.",
    href: "/its-boba-time-burbank/",
  },
  {
    rank: 2,
    name: "Sunright Tea Studio",
    city: "Pasadena (20 min east via 134)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.6",
    price: "$$",
    address: "Pasadena, CA",
    bestFor: "Sun Moon Lake black tea sourcing, Alishan oolong, Pasadena location via 134",
    mustOrder: "Sun Moon Lake Black Tea, Alishan High Mountain Oolong",
    verdict: "The best boba within a short drive east of Burbank. Sunright Tea Studio is built around Sun Moon Lake black tea from Taiwan, one of the most prized single-origin tea sources in the world, and uses it as the base for most drinks rather than the generic fannings tea that most chains use. The Alishan High Mountain Oolong is the second essential order: clear, clean, and complex in a way that Koreatown-style cheese foam drinks are not. Take the 134 freeway east toward Pasadena and Sunright is the destination when the boba mood calls for something more tea-forward.",
    href: "/sunright-tea-studio-review-los-angeles/",
  },
  {
    rank: 3,
    name: "Happy Lemon",
    city: "SGV (25 min east via 134 to 210)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Alhambra / Arcadia / Monterey Park, CA",
    bestFor: "Rock Salt and Cheese Oolong, cheese foam series, Hawthorn Green Tea",
    mustOrder: "Rock Salt & Cheese Oolong, Hawthorn Green Tea with Rock Salt Cheese",
    verdict: "The chain that introduced cheese foam to Los Angeles, with SGV locations reachable from Burbank in 25 to 30 minutes via the 134 to the 210 freeway. Happy Lemon's Rock Salt and Cheese Oolong is still the defining Koreatown-style boba order: cold oolong tea base with savory-sweet cheese foam balanced by just enough salt. For Burbank residents who want the Koreatown boba experience without the full 35-minute drive south, the SGV Happy Lemon locations via the 134 east are a practical alternative route.",
    href: "/happy-lemon-review-los-angeles/",
  },
  {
    rank: 4,
    name: "Gong Cha",
    city: "Multiple LA locations accessible from Burbank",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Multiple locations near Burbank",
    bestFor: "High Mountain Oolong base, Brown Sugar Milk Tea with Pearl, consistent global chain",
    mustOrder: "Brown Sugar Milk Tea with Pearl, Oolong Milk Tea",
    verdict: "One of the world's largest boba chains (2,000+ locations in 20+ countries) with locations accessible from Burbank via Glendale and the broader LA corridor. Gong Cha's differentiator is its High Mountain Oolong base, which gives even standard milk tea drinks more depth than most chain competitors at the same price. The Brown Sugar Milk Tea with Pearl is the most ordered drink. For a Burbank worker who wants consistent, well-made boba at a chain location without driving to Pasadena or Koreatown, a nearby Gong Cha is the practical answer.",
    href: "/gong-cha-review-los-angeles/",
  },
  {
    rank: 5,
    name: "Kung Fu Tea",
    city: "Multiple LA locations accessible from Burbank",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1",
    price: "$",
    address: "Multiple LA locations",
    bestFor: "Value milk teas, Taro Slush, Mango Slush, accessible chain option",
    mustOrder: "Kung Fu Milk Tea, Taro Slush",
    verdict: "The most affordable and widely accessible chain boba option reachable from Burbank, with multiple locations across the LA corridor. Kung Fu Tea's Kung Fu Milk Tea is well-balanced, consistent across locations, and priced at $5 to $7, making it one of the better values in the city. The Taro Slush is the best item on the menu for anyone who wants something outside standard milk tea. Not the most exciting boba in LA, but a dependable option when a quick stop is what the situation calls for.",
    href: "/kung-fu-tea-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Tiger Sugar",
    city: "Koreatown (30 to 35 min south via 5 to 101 to 10)",
    image: "/assets/products/tiger_sugar_drink.png",
    rating: "5.0",
    price: "$$",
    address: "Koreatown, Los Angeles",
    bestFor: "Brown Sugar Boba Milk with Cream Mousse, Okinawa pearls, best brown sugar boba in LA",
    mustOrder: "Brown Sugar Boba Milk with Cream Mousse",
    verdict: "The best brown sugar boba in Los Angeles and worth the 30 to 35 minute drive from Burbank when the trip is planned. Tiger Sugar uses Okinawa black sugar rather than caramel syrup, cooks pearls in small batches every four hours, and makes the cream mousse in-house rather than from a carton. These three decisions produce a drink with no equivalent in Burbank or anywhere close to it. Take the 5 south to the 101 west to Western Ave or Vermont Ave for Koreatown. For a special boba outing from Burbank, Tiger Sugar is the destination that justifies the drive.",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
  },
];

const moreShops = [
  { name: "Chicha San Chen", city: "San Gabriel (25 to 30 min via 134 to 210 to 10)", note: "World Tea Championship credentials and the best oolong-based boba in the SGV. Four Seasons Tea and Wuyi Mountain Oolong are the essential orders. Read the full review.", href: "/chicha-san-chen-san-gabriel-review/" },
  { name: "Mixue", city: "Hollywood (15 to 20 min south via 5 or Cahuenga)", note: "The world's largest boba chain (42,000+ locations globally) with its first US location on Hollywood Blvd. Starting at $3.99, the most affordable boba in LA. Read the full review.", href: "/mixue-review-los-angeles/" },
  { name: "Milksha", city: "Westwood (35 to 40 min south)", note: "Taiwan's largest fresh milk boba brand with its first US location at 1009 Broxton Ave, Westwood Village. No powder, real taro from Dajia Taiwan, and a Westwood-exclusive Campus Crush drink. Read the full review.", href: "/milksha-westwood-review/" },
  { name: "CoCo Fresh Tea & Juice", city: "Multiple LA locations", note: "The world's largest boba chain by outlet count (4,000+ locations, 40+ countries), with the unique Avocado Smoothie Milk Tea that no other chain in LA offers. Affordable at $4.50 to $7. Read the full review.", href: "/coco-fresh-tea-review-los-angeles/" },
  { name: "Feng Cha", city: "Multiple LA locations", note: "Brown Sugar Milk Tea and Oolong Milk Tea with Cheese Foam are the essential orders. Feng Cha has 33,000 monthly searches, one of the highest-volume boba keywords in LA. Read the full review.", href: "/feng-cha-review-los-angeles/" },
  { name: "Boba Guys", city: "West LA / Rideback Ranch (35 to 40 min south)", note: "The premium organic-ingredient boba chain. Strawberry Matcha, Earl Grey, and Horchata are the standout drinks. Expensive at $7 to $10, but the ingredient quality is the highest of any chain in LA. Read the full review.", href: "/boba-guys-review-los-angeles/" },
];

export default function BestBobaBurbankPage() {
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
                Best Boba in Burbank: Top Bubble Tea Near Warner Bros, Disney Studios, and the Media District
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Burbank has limited dedicated boba. It&apos;s Boba Time on Magnolia Blvd is the local anchor. For serious boba, Sunright Tea Studio is 20 minutes east in Pasadena, and Koreatown is 30 to 35 minutes south. Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">6 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Burbank, Pasadena, Koreatown</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/best-boba-los-angeles-feature-full.jpeg"
                alt="Best boba in Burbank near Warner Bros Disney studios Media District"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Honest Guide to Boba in Burbank</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Burbank is one of the most important cities in the entertainment industry. Warner Bros. Studio, The Walt Disney Company, and a cluster of production companies, agencies, and post-production facilities make up the Burbank Media District. The city has excellent dining on Magnolia Blvd and in the San Fernando Blvd corridor. Dedicated boba, however, is limited compared to the SGV or Koreatown.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            The best boba actually in Burbank is It&apos;s Boba Time on W Magnolia Blvd, a Los Angeles original since 1999. It covers the neighborhood well for anyone in the Media District, near the studio lots, or looking for a reliable after-work stop. For anything beyond the classics, the 134 freeway east opens up the Pasadena and SGV corridor, where Sunright Tea Studio in Pasadena and the broader San Gabriel Valley boba scene are about 20 to 25 minutes away.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            For the full Koreatown experience, Tiger Sugar, Happy Lemon, and Machi Machi are about 30 to 35 minutes south on the 5 freeway to the 101 and 10. The drive is longer from Burbank than from Hollywood or Silver Lake, but the quality gap between Koreatown boba and what is immediately available in Burbank is significant enough that most serious boba drinkers plan a dedicated trip.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba Near Burbank, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, value, and accessibility from Burbank.</p>

          <div className="space-y-8">
            {burbankShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba near Burbank Los Angeles`}
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Worth Visiting Near Burbank</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Additional options accessible from Burbank within 20 to 40 minutes that are worth knowing about.</p>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Magnolia Blvd, the Media District, Pasadena, and Koreatown</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Magnolia Blvd (Best Boba in Burbank)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Magnolia Blvd is Burbank&apos;s main restaurant and retail corridor, running east-west through the heart of the city. It&apos;s Boba Time at 3107 W Magnolia Blvd is the best and most conveniently located boba shop in Burbank proper. The Magnolia Blvd corridor has strong concentration of independent restaurants, coffee shops, and food stops that serve the entertainment industry workforce during lunch and after-work hours. For anyone working in or visiting Burbank, Magnolia Blvd is the first boba destination to check.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Burbank Media District (Warner Bros, Disney, Studio Lots)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The Burbank Media District is the cluster of major studios, agencies, and post-production facilities centered around the Warner Bros. lot on Riverside Dr and Disney&apos;s campus on Buena Vista St. It&apos;s Boba Time on Magnolia Blvd is the closest accessible boba shop to both lots, about 5 to 10 minutes by car. For a quick between-meetings boba run during a studio visit or for production workers finishing a late shift, the Magnolia Blvd It&apos;s Boba Time is the practical choice. The surrounding area has plenty of coffee and fast casual options, but dedicated high-quality boba is not a primary feature of the Media District.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Toluca Lake and North Hollywood (15 Min South)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Toluca Lake, the upscale residential neighborhood just south of Burbank on the other side of the 134, and North Hollywood to the south both have small commercial corridors with food options but no significant dedicated boba scene. Riverside Dr through Toluca Lake has restaurants and cafes, but for boba, staying on Magnolia in Burbank or making the drive to Pasadena or Koreatown are both better strategies than looking for options in the Toluca Lake or North Hollywood area.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Glendale (10 Min East, More Chain Options)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Glendale, immediately east of Burbank, has a larger and more diverse dining scene than Burbank and more chain boba options including Gong Cha. The Glendale Galleria and the Brand Blvd commercial corridor are the main retail and food areas. For Burbank residents who want more chain variety than what Magnolia Blvd offers, Glendale is the closest expansion. Take Colorado St east out of Burbank into Glendale, or use the 134 freeway east to get there in about 10 minutes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Pasadena via the 134 (The SGV Boba Corridor, 20 to 25 Min)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                The 134 freeway east from Burbank leads directly to Pasadena and the edge of the San Gabriel Valley boba corridor. Sunright Tea Studio in Pasadena is about 20 to 25 minutes from Burbank and is the best boba in this direction, built around Sun Moon Lake black tea sourcing. Continuing east on the 210 from Pasadena reaches Arcadia and Temple City, where Chicha San Chen, Xing Fu Tang, Half and Half Tea Express, and other SGV anchors are concentrated. For anyone in Burbank making a dedicated boba trip, the 134 east to the SGV corridor is the best investment of drive time when Koreatown is too far south.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Koreatown (The Best Boba in LA, 30 to 35 Min South)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Koreatown is the premier boba destination in Los Angeles and is about 30 to 35 minutes from Burbank by car. Take the 5 south to the 101 west, then exit at Vermont Ave or Western Ave for the densest part of the Koreatown boba corridor. Tiger Sugar, Happy Lemon, and Machi Machi are all on or near Olympic Blvd between Vermont and Western, a concentration with no equivalent in Burbank. The drive is longer than from Hollywood or Silver Lake, but for a serious boba outing, Koreatown is worth the trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Burbank Boba FAQ</h2>
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
            <Link href="/best-boba-hollywood/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba Near Hollywood</h3>
              <p className="text-[#4A5568] text-sm">Mixue&apos;s first US location is on Hollywood Blvd, 15 minutes south of Burbank. The guide for Hollywood, East Hollywood, and the Koreatown corridor.</p>
            </Link>
            <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Koreatown</h3>
              <p className="text-[#4A5568] text-sm">The complete guide to 30+ boba shops in Koreatown, the best boba neighborhood in Los Angeles. Tiger Sugar, Happy Lemon, and Machi Machi in one corridor.</p>
            </Link>
            <Link href="/best-boba-los-angeles/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Los Angeles</h3>
              <p className="text-[#4A5568] text-sm">The definitive citywide ranking of the best boba shops across all of LA County, from Burbank and Hollywood to Koreatown, Westwood, and the SGV.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
