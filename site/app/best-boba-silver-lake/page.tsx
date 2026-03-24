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
  title: "Best Boba in Silver Lake: Top Bubble Tea Near Silver Lake, Los Feliz, and Echo Park | Justin Sather",
  description: "The complete guide to boba and bubble tea near Silver Lake, Los Feliz, Echo Park, and Atwater Village. Every shop personally visited by Justin Sather. No sponsorships. Updated 2026.",
};

const faqItems = [
  {
    question: "What is the best boba near Silver Lake?",
    answer: "Tiger Sugar in Koreatown is the best boba within 15 minutes of Silver Lake. It serves the best brown sugar boba in Los Angeles, with fresh pearls made every four hours and ceremonial-grade brown sugar syrup torched tableside. For variety, Koreatown as a whole is the premier boba destination closest to Silver Lake.",
  },
  {
    question: "Does Silver Lake have good boba?",
    answer: "Silver Lake has a few solid options on Sunset Blvd and the surrounding streets, but the neighborhood does not have a concentrated boba scene the way Koreatown or the San Gabriel Valley does. The best strategy from Silver Lake is to drive 10 to 15 minutes west to Koreatown, which has some of the best boba in all of Los Angeles.",
  },
  {
    question: "Where is the closest good boba to Los Feliz?",
    answer: "Koreatown is the closest neighborhood with a strong boba scene to Los Feliz, about 10 to 15 minutes west. Tiger Sugar, Happy Lemon, and Feng Cha are all in Koreatown and are among the best in LA. Atwater Village, which borders Los Feliz, has Wanderlust Creamery for creative desserts.",
  },
  {
    question: "Is there boba in Echo Park?",
    answer: "Echo Park has some casual boba options along Sunset Blvd, but none are at the quality level of Koreatown or SGV shops. The best boba accessible from Echo Park is in Koreatown, which is a 10-minute drive west and has Tiger Sugar, Happy Lemon, Feng Cha, and Mochinut all within a few blocks of each other.",
  },
  {
    question: "What is the best bubble tea near Atwater Village?",
    answer: "Wanderlust Creamery in Atwater Village is the best specialty dessert destination in the neighborhood, though it focuses on ice cream rather than boba. For boba specifically, Koreatown is the best option from Atwater Village, about 20 minutes west on the 2 freeway.",
  },
  {
    question: "How far is Silver Lake from Koreatown?",
    answer: "Silver Lake is about 3 to 4 miles from Koreatown, roughly 10 to 15 minutes by car depending on traffic. This makes Koreatown the most practical destination for premium boba from Silver Lake. Most of the best boba shops in Koreatown are clustered along Olympic Blvd and the streets around Wilshire.",
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

const silverLakeShops = [
  {
    rank: 1,
    name: "Tiger Sugar",
    city: "Koreatown (15 min west)",
    image: "/assets/products/tiger_sugar_drink.png",
    rating: "5",
    price: "$$",
    address: "Olympic Blvd, Koreatown",
    bestFor: "Brown sugar boba, fresh-cooked pearls, ceremonial presentation",
    mustOrder: "Brown Sugar Boba Milk with Cream Mousse",
    verdict: "The best boba within 15 minutes of Silver Lake, and the best brown sugar boba in Los Angeles. Pearls are made fresh every four hours from Okinawa black sugar, and the brown sugar syrup is torched tableside. The Koreatown location on Olympic Blvd is the most consistent in all of LA. No other shop near the Eastside comes close for this category.",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
  },
  {
    rank: 2,
    name: "Happy Lemon",
    city: "Koreatown (15 min west)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.2",
    price: "$$",
    address: "Koreatown",
    bestFor: "Rock salt and cheese foam, roasted oolongs",
    mustOrder: "Rock Salt and Cheese Oolong, QQ Cocoa",
    verdict: "Happy Lemon introduced Rock Salt and Cheese foam to Los Angeles and the Koreatown location is one of the best-run shops in the chain. The cheese foam format, a layer of lightly salted cream cheese foam over cold tea, is worth trying at least once. Reliable for everyday boba when you want something more interesting than a standard milk tea.",
    href: "/happy-lemon-review-los-angeles/",
  },
  {
    rank: 3,
    name: "Feng Cha",
    city: "Koreatown (15 min west)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3",
    price: "$$",
    address: "Koreatown",
    bestFor: "Brown sugar milk tea, cheese foam series, oolong bases",
    mustOrder: "Brown Sugar Milk Tea, Oolong Milk Tea with Cheese Foam",
    verdict: "One of the best everyday boba shops in Koreatown and one of the most searched boba chains in Los Angeles. The brown sugar milk tea is executed cleanly, the cheese foam is consistent, and the wait times are manageable compared to Tiger Sugar. A reliable first stop or backup option whenever the Koreatown boba corridor is the destination.",
    href: "/feng-cha-review-los-angeles/",
  },
  {
    rank: 4,
    name: "Mochinut",
    city: "Koreatown (15 min west)",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.3",
    price: "$$",
    address: "Koreatown and Torrance",
    bestFor: "Mochi donuts, brown sugar boba, Korean-Taiwanese fusion",
    mustOrder: "Ube Mochi Donut, Brown Sugar Milk Tea",
    verdict: "Mochinut is the best combination stop near Silver Lake: a mochi donut and a boba in the same visit. The Koreatown location makes fresh ube, matcha, and black sesame mochi donuts alongside a full brown sugar boba program. One of the most distinctive food experiences in Koreatown and worth the 15-minute drive from Silver Lake specifically for the donut-and-boba pairing.",
    href: "/mochinut-review-los-angeles/",
  },
  {
    rank: 5,
    name: "It's Boba Time",
    city: "Multiple LA locations",
    image: "/assets/products/its_boba_time_exterior.png",
    rating: "4",
    price: "$",
    address: "Multiple LA locations",
    bestFor: "Value milk teas, everyday accessibility, LA-grown chain",
    mustOrder: "Classic Milk Tea, Brown Sugar Boba",
    verdict: "The most accessible quality boba chain from Silver Lake. It's Boba Time is an LA-founded chain with multiple locations across the city, and the value pricing ($5 to $6.25 per drink) makes it the most practical everyday option. The milk tea program is solid, the pearls are fresh, and the service is fast. Good for when you want reliable boba without the drive to Koreatown.",
    href: "/its-boba-time-review-los-angeles/",
  },
  {
    rank: 6,
    name: "Teaspoon",
    city: "Multiple LA locations",
    image: "/assets/products/teaspoon_exterior.png",
    rating: "4.3",
    price: "$$",
    address: "Multiple LA locations",
    bestFor: "Brown sugar boba milk, clean jasmine teas, Bay Area quality",
    mustOrder: "Brown Sugar Boba Milk, Jasmine Milk Tea",
    verdict: "A Bay Area import that holds up well against LA competition. Teaspoon uses high-quality tea bases and avoids the shortcuts that drag down most chain-level shops. The Brown Sugar Boba Milk is one of the better versions of this format available in LA. Multiple locations make it accessible from Silver Lake without committing to a Koreatown drive.",
    href: "/teaspoon-boba-review-los-angeles/",
  },
  {
    rank: 7,
    name: "Wanderlust Creamery",
    city: "Atwater Village (adjacent)",
    image: "/assets/products/wanderlust_creamery_product.png",
    rating: "5",
    price: "$$",
    address: "Atwater Village",
    bestFor: "Travel-inspired ice cream, ube, Thai tea, champurrado flavors",
    mustOrder: "Ube Halaya, Thai Tea and Toast",
    verdict: "Not a boba shop, but the best specialty dessert destination within five minutes of Silver Lake. Wanderlust Creamery in Atwater Village makes ice cream from real ingredients: ube from the Philippines, Thai tea from Bangkok, champurrado from traditional Mexican chocolate. For anyone who wants a world-class dessert experience in the Eastside without going to Koreatown, this is the answer.",
    href: "/wanderlust-creamery-review-los-angeles/",
  },
  {
    rank: 8,
    name: "Kung Fu Tea",
    city: "Multiple LA locations",
    image: "/assets/products/boba_scene_lifestyle.png",
    rating: "4.1",
    price: "$",
    address: "Multiple LA locations",
    bestFor: "Affordable milk teas, taro slush, accessible chain quality",
    mustOrder: "Kung Fu Milk Tea, Taro Slush",
    verdict: "A reliable fallback when the drive to Koreatown is not practical. Kung Fu Tea is one of the most consistent chain-level boba brands in Los Angeles and the Taro Slush is one of its better drinks. Not exceptional, but dependable and priced well. Good for casual boba when you want something local without overthinking it.",
    href: "/kung-fu-tea-review-los-angeles/",
  },
];

const moreShops = [
  { name: "Class 302", city: "Silver Lake / Westlake", note: "A Taiwanese-American chain with Silver Lake-area presence. Known for their signature Class 302 Milk Tea and comfort food menu. Good for combining boba with a full meal." },
  { name: "Boba Guys", city: "Rideback Ranch, Los Angeles", note: "Premium boba using hormone-free milk and organic cane sugar. Expensive but among the best base tea quality in LA. Read the full review.", href: "/boba-guys-review-los-angeles/" },
  { name: "Somi Somi", city: "Koreatown", note: "Korean fish-shaped waffle cones filled with soft serve. The ah-boong presentation makes it one of the most photogenic dessert experiences in Koreatown. Read the full review.", href: "/somi-somi-review-los-angeles/" },
  { name: "Mashti Malone", city: "Hollywood (adjacent)", note: "LA's best Persian ice cream on Hollywood Blvd. Saffron bastani, rosewater, and faloodeh. 40+ year institution. Read the full review.", href: "/mashti-malone-review-los-angeles/" },
  { name: "Gong Cha", city: "Multiple LA locations", note: "Korean-founded chain with a consistently good milk tea program. One of the most reliable chain-level options anywhere in LA." },
  { name: "CoCo Fresh Tea", city: "Multiple LA locations", note: "Taiwanese chain with consistent value milk teas. Brown Sugar Pearl Milk Tea is the standout at most LA locations." },
];

export default function BestBobaSilverLakePage() {
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
                Best Boba in Silver Lake: Top Bubble Tea Near Silver Lake, Los Feliz, and Echo Park
              </h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Silver Lake sits between two of LA's best food corridors. Koreatown, 15 minutes west, is one of the premier boba neighborhoods in Southern California. Every shop below has been personally visited by Justin Sather, zero sponsorships.
              </p>
              <div className="flex gap-3 flex-wrap text-sm">
                <span className="bg-[#EDF2F7] text-[#2B6CB0] px-3 py-1 rounded-full font-medium">8 Ranked Shops</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Silver Lake, Los Feliz, Echo Park, Koreatown</span>
                <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full font-medium">Updated 2026</span>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/gallery/boba_koreatown_guide.png"
                alt="Best boba near Silver Lake, Los Feliz, and Echo Park Los Angeles"
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-4">The Honest Guide to Boba Near Silver Lake</h2>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            Silver Lake is a great food neighborhood. For boba specifically, it does not have the density you find in Koreatown or the San Gabriel Valley. The shops in the immediate Silver Lake, Los Feliz, and Echo Park area are mostly chain locations and casual spots. Good enough for a quick fix, but not the reason to make a trip.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-4">
            The good news is that Koreatown is 10 to 15 minutes west, and it has Tiger Sugar, Happy Lemon, Feng Cha, Mochinut, and more, all within a few blocks of each other. If you care about boba quality, this is the move from Silver Lake. The drive is short, parking is workable on Olympic Blvd, and the quality difference is significant.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            The guide below covers the best options you can reach from Silver Lake in under 20 minutes, starting with the Koreatown shops that are genuinely worth the drive and ending with the local options that are solid for everyday visits.
          </p>
        </div>
      </section>

      {/* Ranked Shops */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">The Best Boba Near Silver Lake, Ranked</h2>
          <p className="text-[#4A5568] mb-10">Every shop personally visited. Ranked by overall quality, tea sourcing, and consistency across multiple visits.</p>

          <div className="space-y-8">
            {silverLakeShops.map((shop) => (
              <div key={shop.rank} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-56 md:h-auto min-h-[200px]">
                    <Image
                      src={shop.image}
                      alt={`${shop.name} boba near Silver Lake Los Angeles`}
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-2">More Worth Visiting Near Silver Lake</h2>
          <p className="text-[#4A5568] mb-6 text-sm">Additional options in the Silver Lake, Echo Park, and adjacent corridor worth knowing about.</p>
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
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Boba by Area: Silver Lake, Echo Park, Los Feliz, and Koreatown</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Silver Lake</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Silver Lake has a few chain locations and casual boba spots along Sunset Blvd, but no standout destination shop. The neighborhood is better served by its proximity to Koreatown than by its own boba scene. If you are in Silver Lake and want something quick without driving, the chain options in the area are reliable enough. If you care about quality, make the 15-minute drive west.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Echo Park</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Echo Park has a few casual boba shops along Sunset, but the scene is thin compared to neighboring Koreatown. The neighborhood is better known for its restaurant and bar scene than its boba. For quality bubble tea from Echo Park, the 10-minute drive to Koreatown is the right move.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Los Feliz</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Los Feliz does not have dedicated boba shops. The Hillhurst Ave and Vermont Ave corridors are strong for restaurants and coffee but weak for bubble tea. Koreatown is 10 to 15 minutes west and covers everything Los Feliz lacks for boba. Atwater Village, which borders Los Feliz to the north, has Wanderlust Creamery for creative desserts if you are staying on the Eastside.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Atwater Village</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Atwater Village is the best non-Koreatown option on the Eastside for specialty desserts. Wanderlust Creamery uses real ingredients from the countries that inspired each flavor: ube from the Philippines, Thai tea from Bangkok, champurrado from traditional chocolate. Not boba, but among the best dessert experiences accessible from Silver Lake without a long drive.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B6CB0] mb-2">Koreatown (15 min west)</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Koreatown is where Silver Lake residents should go for serious boba. Tiger Sugar, Happy Lemon, Feng Cha, and Mochinut are all within a few blocks of each other on and around Olympic Blvd. The concentration and quality of Koreatown boba is simply not matched by any shop in the immediate Silver Lake area. The drive takes 10 to 15 minutes, parking on Olympic Blvd is workable, and the quality difference justifies the trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7FAFC] py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Silver Lake Boba FAQ</h2>
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
              <p className="text-[#4A5568] text-sm">The complete guide to 30+ boba shops in Koreatown, LA's premier boba neighborhood and the closest premium boba corridor to Silver Lake.</p>
            </Link>
            <Link href="/best-boba-san-gabriel-valley/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in the SGV</h3>
              <p className="text-[#4A5568] text-sm">The most authentic Taiwanese and Chinese boba in Southern California, 30 to 45 minutes east of Silver Lake in the San Gabriel Valley.</p>
            </Link>
            <Link href="/best-boba-los-angeles/" className="block bg-[#EDF2F7] rounded-xl p-5 hover:bg-[#E2E8F0] transition-colors">
              <h3 className="font-bold text-[#1A202C] mb-1">Best Boba in Los Angeles</h3>
              <p className="text-[#4A5568] text-sm">The definitive citywide ranking of the best boba shops across all of LA County, from Koreatown to the SGV and beyond.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
