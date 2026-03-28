import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mixue Review: The World's Largest Boba Chain Is Now in Los Angeles | Justin Sather",
  description: "Mixue opened its first US location at 6922 Hollywood Blvd in December 2025. Full menu review, prices, and how the world's largest boba chain (42,000+ locations) stacks up in LA.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Mixue Review: The World's Largest Boba Chain Is Now in Los Angeles",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "3.9",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Person",
    "name": "Justin Sather",
    "url": "https://justinsather.com/about-me/"
  },
  "itemReviewed": {
    "@type": "FoodEstablishment",
    "name": "Mixue",
    "servesCuisine": "Bubble Tea",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6922 Hollywood Blvd",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90028",
      "addressCountry": "US"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Justin Sather, Los Angeles",
    "url": "https://justinsather.com"
  },
  "datePublished": "2026-03-28",
  "url": "https://justinsather.com/mixue-review-los-angeles/"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Mixue and where is it in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mixue is the world's largest boba and bubble tea chain with over 42,000 locations globally, surpassing McDonald's in outlet count in many markets. The first US location opened in December 2025 at 6922 Hollywood Blvd in Hollywood, across from the TCL Chinese Theatre. It is the most affordable boba shop reviewed on this site, with drinks starting at $3.99."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best drink at Mixue?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Lemon Tea series is Mixue's most iconic drink globally and the recommended first order at the Hollywood location. The classic Pearl Milk Tea is a solid benchmark of the chain's fundamentals. The Strawberry Fruit Tea is the best choice for something lighter and fruitier. The Snow King soft serve ice cream is also worth adding to any order at under $2."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Mixue cost in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mixue is the most affordable boba option reviewed in Los Angeles, with drinks starting at $3.99. Most drinks range from $3.99 to $5.99. The Snow King soft serve ice cream is around $1.50. This puts Mixue clearly below It's Boba Time ($5.25 to $6.25) and well below mid-tier chains like Chatime and Gong Cha ($6 to $8)."
      }
    },
    {
      "@type": "Question",
      "name": "How big is Mixue globally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mixue was founded in Zhengzhou, China in 1997 and has grown to over 42,000 locations across China, Southeast Asia, Australia, and now the United States. By outlet count, Mixue is larger than McDonald's in many Asian markets. The Hollywood location is Mixue's first US store, marking the brand's entry into the American boba market."
      }
    },
    {
      "@type": "Question",
      "name": "Is Mixue good boba?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mixue is a value-tier chain designed for volume and affordability rather than craft quality. The tea bases are straightforward rather than complex, and the toppings are functional rather than artisanal. For the price, Mixue delivers a reliable, refreshing drink. If you are looking for the best boba in LA, Chicha San Chen and Boba Guys are the higher-quality options. If you want a solid drink at the lowest price in the city, Mixue is the right call."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Mixue Hollywood located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mixue's Hollywood location is at 6922 Hollywood Blvd, Los Angeles, CA 90028, directly across from the TCL Chinese Theatre and one block from the Hollywood Walk of Fame. The location is easily accessible from the Hollywood and Highland Metro station on the B Line. Street parking on Hollywood Blvd is metered. The store opened in December 2025 as Mixue's first US location."
      }
    }
  ]
};

export default function MixueReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 pt-12 pb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/best-boba-los-angeles/" className="text-[#2B6CB0] text-sm hover:text-[#215387] transition-colors">
              &larr; Back to Best Boba LA
            </Link>
          </div>
          <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Shop Review
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4 leading-tight">
            Mixue Review: The World&apos;s Largest Boba Chain Is Now in Los Angeles
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/assets/team/justin-sather-avatar.jpg" alt="Justin Sather" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1A202C]">Justin Sather</p>
              <p className="text-xs text-[#718096]">Visited Hollywood location, paid out of pocket &bull; Updated Q1 2026</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm mb-6">
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">3.9/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Hollywood Blvd</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">42,000+ locations worldwide</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_scene_lifestyle.png"
            alt="Mixue boba Hollywood Los Angeles"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Quick facts */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-[#EDF2F7] rounded-xl p-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Location", value: "6922 Hollywood Blvd, Hollywood, CA 90028" },
            { label: "Hours", value: "Daily 11am to 9pm (check current hours)" },
            { label: "Price Range", value: "$ (from $3.99)" },
            { label: "Best For", value: "Lemon Tea, Pearl Milk Tea, Strawberry Fruit Tea, Snow King ice cream" },
          ].map((fact) => (
            <div key={fact.label}>
              <p className="text-xs font-semibold text-[#718096] uppercase tracking-wide mb-1">{fact.label}</p>
              <p className="text-sm text-[#1A202C] font-medium">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Mixue Menu: Prices and What to Order</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-[#EDF2F7]">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-[#1A202C]">Drink</th>
                <th className="text-left px-4 py-3 font-semibold text-[#1A202C]">Price</th>
                <th className="text-left px-4 py-3 font-semibold text-[#1A202C]">Tasting Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { drink: "Lemon Green Tea", price: "$3.99", notes: "Mixue's global signature. Bright, tart, refreshing. This is the drink that built the brand across China and Southeast Asia. Order it at 50% sugar to let the citrus come through." },
                { drink: "Pearl Milk Tea", price: "$4.50", notes: "The benchmark order for any boba shop. Clean black tea base with milk and chewy pearls. Straightforward rather than complex, but well-calibrated and consistent." },
                { drink: "Strawberry Fruit Tea", price: "$4.25", notes: "Lightly sweet strawberry tea without artificial aftertaste. A good option if you want something fruity and lighter than milk tea." },
                { drink: "Taro Milk Tea", price: "$4.75", notes: "Accessible taro flavor with a smooth texture. Does not reach the sourcing quality of Milksha or Chicha San Chen, but honest at this price point." },
                { drink: "Matcha Milk Tea", price: "$4.75", notes: "Mild matcha with a light sweet finish. A good entry point for matcha newcomers. Pair with pearls for texture." },
                { drink: "Mango Fruit Tea", price: "$4.25", notes: "Sweet and tropical. One of the more consistent fruit tea options on the menu. Good for warmer weather." },
                { drink: "Brown Sugar Milk Tea", price: "$5.50", notes: "Brown sugar syrup with milk and pearls. The most premium order on the menu. At this price, it is a very good value for the category." },
                { drink: "Snow King Soft Serve", price: "$1.50", notes: "Mixue's ice cream mascot in cup form. Lightly sweet vanilla soft serve. Add to any drink order for almost nothing." },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F7FAFC]"}>
                  <td className="px-4 py-3 font-medium text-[#1A202C]">{row.drink}</td>
                  <td className="px-4 py-3 text-[#4A5568]">{row.price}</td>
                  <td className="px-4 py-3 text-[#4A5568]">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#718096] mt-2">Prices are approximate and may vary. Mixue is the most affordable boba reviewed in Los Angeles. Toppings (pearls, jelly) are typically $0.50 to $0.75 each. Snow King soft serve can be ordered separately or added to drinks.</p>
      </section>

      {/* Review content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main review */}
          <div className="lg:col-span-2 space-y-6 text-[#4A5568] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1A202C]">The Verdict</h2>
            <p>
              Mixue is the world&apos;s largest boba and bubble tea chain by outlet count. With over 42,000 locations across China, Southeast Asia, and Australia, Mixue has more stores globally than McDonald&apos;s in many markets. The first US location opened in December 2025 at 6922 Hollywood Blvd, directly across from the TCL Chinese Theatre, making it one of the most prominent new boba openings in Los Angeles in years.
            </p>
            <p>
              The reason Mixue became the largest chain in the world is not because it makes the most complex boba. It is because Mixue cracked a problem no other chain solved at scale: how to sell a reliable, refreshing bubble tea for under $4. In Los Angeles, where a standard{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>{" "}
              drink runs $5.25 to $6.25 and a{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>{" "}
              drink runs $9 to $11, Mixue&apos;s $3.99 starting price is genuinely disruptive.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes Mixue Worth Visiting</h2>
            <p>
              The Lemon Tea is the drink that built Mixue&apos;s empire. A simple concept done well: fresh-squeezed lemon (or high-quality lemon concentrate depending on location), green tea, and ice. Bright, tart, and immediately refreshing. Globally, the Mixue Lemon Tea is to Chinese boba what the original Pearl Milk Tea was to Taiwanese tea culture in the 1980s: the drink that changed what the category could be.
            </p>
            <p>
              The Snow King soft serve is the brand&apos;s second signature element. Named after Mixue&apos;s mascot, the Snow King ice cream is a lightly sweet vanilla soft serve that costs around $1.50 on its own. Adding it to a boba visit turns an already affordable drink stop into one of the best value food experiences in Hollywood.
            </p>
            <p>
              The Pearl Milk Tea is worth ordering as a benchmark. It is not as nuanced as the tea at{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>{" "}
              or as carefully sourced as the milk at{" "}
              <Link href="/milksha-westwood-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Milksha
              </Link>
              , but at $4.50 it is a well-made drink with consistent pearl chew and a clean tea-to-milk ratio. The honest comparison is that Mixue&apos;s Pearl Milk Tea is better than what most chains in its price tier deliver.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Hollywood Location</h2>
            <p>
              The location at 6922 Hollywood Blvd is one block west of the Hollywood and Highland Metro station and directly across from the TCL Chinese Theatre. This is among the most tourist-trafficked intersections in Los Angeles, which means the Mixue Hollywood location captures an audience that most boba shops in the{" "}
              <Link href="/best-boba-san-gabriel-valley/" className="text-[#2B6CB0] hover:text-[#215387]">
                San Gabriel Valley
              </Link>{" "}
              or{" "}
              <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="text-[#2B6CB0] hover:text-[#215387]">
                Koreatown
              </Link>{" "}
              never sees: visitors from outside LA who happen to be walking the Walk of Fame and want something cold and affordable.
            </p>
            <p>
              For locals, the Hollywood Blvd location is convenient to Hollywood residents, East Hollywood, and Los Feliz. It fills a gap: affordable, reliable boba on a corridor that previously had{" "}
              <Link href="/ding-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Ding Tea
              </Link>{" "}
              and{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>{" "}
              as the main options but nothing at Mixue&apos;s price point.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/gallery/boba_koreatown_1.jpg"
                alt="Mixue Hollywood boba Los Angeles"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing: The Most Affordable Boba in LA</h2>
            <p>
              Mixue is the least expensive boba shop reviewed on this site and it is not particularly close. At $3.99 for a Lemon Tea and $4.50 for a Pearl Milk Tea, Mixue sits well below the budget tier of the LA boba market. For context:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Mixue: $3.99 to $5.99 most drinks</li>
              <li><Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">It&apos;s Boba Time</Link>: $5.25 to $6.25</li>
              <li><Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">Kung Fu Tea</Link>: $5.50 to $7.50</li>
              <li><Link href="/gong-cha-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">Gong Cha</Link>: $5.50 to $8.50</li>
              <li><Link href="/chatime-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">Chatime</Link>: $6.00 to $7.50</li>
              <li><Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">Boba Guys</Link>: $8.00 to $11.00</li>
            </ul>
            <p>
              The price difference is large enough to matter. A family of four ordering Mixue drinks instead of Gong Cha drinks saves $10 to $18 on a single visit. For tourists on the Walk of Fame looking for a cold drink, the calculus is obvious.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How Mixue Compares</h2>
            <p>
              The right comparison for Mixue in Los Angeles is not Boba Guys or Chicha San Chen. It is not trying to be a craft shop. The honest comparison is to other budget and mid-tier chains:{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>
              ,{" "}
              <Link href="/coco-fresh-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                CoCo Fresh Tea
              </Link>
              , and{" "}
              <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Kung Fu Tea
              </Link>
              .
            </p>
            <p>
              Against It&apos;s Boba Time, Mixue wins on price and on the Lemon Tea specifically. It&apos;s Boba Time wins on menu variety, with more LA-style milk tea options and a longer track record of consistency at multiple locations. Both are in the same tier of accessible, everyday boba.
            </p>
            <p>
              Against CoCo Fresh Tea, Mixue is cheaper and the Lemon Tea is better than anything CoCo does in the fruit tea category. CoCo has the edge on the Taiwanese fruit tea side (the Passion Fruit Green Tea and Avocado Smoothie Milk Tea are distinctly CoCo). For pure value and the lemon tea specifically, Mixue is the call.
            </p>
            <p>
              Against Kung Fu Tea and Gong Cha, Mixue is significantly cheaper with roughly comparable quality at the everyday drink level. If you are not specifically seeking the Gong Cha High Mountain Oolong or the Kung Fu Tea milk tea, Mixue delivers a similar boba experience at a dollar or two less per drink.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>The most affordable boba in Los Angeles at $3.99 starting price</li>
                  <li>Lemon Tea is genuinely excellent and unlike anything else in the LA boba landscape</li>
                  <li>Snow King soft serve is a unique add-on no other reviewed LA shop offers</li>
                  <li>Prime location on Hollywood Blvd for tourists and Hollywood locals</li>
                  <li>Reliable, consistent quality at a value tier that does not sacrifice drinkability</li>
                  <li>The global scale means standardized recipes that hold up across visits</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Tea bases are straightforward rather than complex or single-origin</li>
                  <li>Pearl quality and chew are consistent but not at the level of Tiger Sugar or Xing Fu Tang</li>
                  <li>Only one US location as of early 2026, so no neighborhood coverage beyond Hollywood</li>
                  <li>Not the right call if you are seeking a premium boba experience</li>
                  <li>Menu is smaller than established LA chains with more years in the US market</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Mixue is not the best boba in Los Angeles. For that, you want{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>
              ,{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>
              , or{" "}
              <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tiger Sugar
              </Link>
              . But Mixue is something those shops are not: it is the most affordable boba in the city from the most proven chain in the world.
            </p>
            <p>
              The Lemon Tea alone is worth the visit. No other reviewed shop in Los Angeles has a lemon tea this good at any price, let alone $3.99. For Hollywood visitors, East Hollywood residents, and anyone who wants a solid, cold boba drink without spending $8, Mixue earns its place in the LA boba conversation at 3.9 out of 5.
            </p>
            <p>
              Watch this chain. With 42,000 locations globally and a price point designed to make boba a daily habit rather than an occasional treat, Mixue&apos;s US expansion is likely to be the most significant development in the American boba market of the next several years.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the Lemon Green Tea on your first visit. It is the drink that made Mixue the world&apos;s largest boba chain and the most distinctive item on the menu at 50% sugar.</li>
                <li>Add the Snow King soft serve to your order. At under $2, it is the best value add-on at any reviewed boba shop in Los Angeles.</li>
                <li>The Hollywood location is busiest on weekends and tourist-heavy afternoons. Go before noon or after 7pm to avoid peak lines.</li>
                <li>The Brown Sugar Milk Tea at $5.50 is the best quality-to-price ratio on the menu if you want something more substantial than the Lemon Tea.</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-[#1A202C] mt-10">Mixue FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is Mixue and where is it in Los Angeles?",
                  a: "Mixue is the world's largest boba chain with 42,000+ locations globally. The first US location opened in December 2025 at 6922 Hollywood Blvd, across from the TCL Chinese Theatre. Drinks start at $3.99, making it the most affordable reviewed boba shop in Los Angeles."
                },
                {
                  q: "What is the best drink at Mixue?",
                  a: "The Lemon Green Tea is Mixue's global signature and the recommended first order. Bright, tart, and refreshing at $3.99. The Pearl Milk Tea is the clean benchmark order. The Snow King soft serve at under $2 is worth adding to any visit."
                },
                {
                  q: "How much does Mixue cost in Los Angeles?",
                  a: "Mixue is the most affordable boba in LA. Drinks start at $3.99 and most range from $3.99 to $5.99. The Snow King soft serve is around $1.50. This puts Mixue well below It's Boba Time ($5.25 to $6.25) and mid-tier chains like Chatime and Gong Cha ($6 to $8)."
                },
                {
                  q: "How big is Mixue globally?",
                  a: "Mixue was founded in Zhengzhou, China in 1997 and operates over 42,000 locations across China, Southeast Asia, and Australia. By outlet count, Mixue is larger than McDonald's in many Asian markets. The Hollywood location is Mixue's first US store."
                },
                {
                  q: "Is Mixue better than It's Boba Time?",
                  a: "They are in the same budget tier, with Mixue costing slightly less. Mixue's Lemon Tea is better than anything on the It's Boba Time menu in the fruit tea category. It's Boba Time has more locations across LA and a longer track record of consistency. For the Lemon Tea specifically, Mixue wins. For classic LA-style milk teas, It's Boba Time has more variety."
                },
                {
                  q: "Where exactly is Mixue Hollywood?",
                  a: "Mixue Hollywood is at 6922 Hollywood Blvd, Los Angeles, CA 90028, across from the TCL Chinese Theatre. It is one block from the Hollywood and Highland Metro B Line station. Street parking on Hollywood Blvd is metered. The store opened December 2025 as Mixue's first US location."
                }
              ].map((item, i) => (
                <details key={i} className="border border-gray-200 rounded-lg">
                  <summary className="px-4 py-3 font-semibold text-[#1A202C] cursor-pointer text-sm">{item.q}</summary>
                  <p className="px-4 pb-4 pt-2 text-sm text-[#4A5568]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Quick Rating</h3>
              <div className="space-y-2">
                {[
                  { label: "Tea Quality", score: 7 },
                  { label: "Value for Money", score: 10 },
                  { label: "Menu Range", score: 7 },
                  { label: "Taste", score: 8 },
                  { label: "Consistency", score: 8 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#4A5568]">{item.label}</span>
                      <span className="font-bold text-[#2B6CB0]">{item.score}/10</span>
                    </div>
                    <div className="h-1.5 bg-[#EDF2F7] rounded-full overflow-hidden">
                      <div className="h-full bg-[#2B6CB0] rounded-full" style={{ width: `${item.score * 10}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#2B6CB0] text-white rounded-xl p-5">
              <h3 className="font-bold mb-1 text-sm">Overall Score</h3>
              <p className="text-5xl font-bold">3.9/5</p>
              <p className="text-blue-100 text-xs mt-1">Best value boba in Los Angeles</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Chain Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Founded:</span> 1997, Zhengzhou, China</p>
                <p><span className="font-semibold">Global locations:</span> 42,000+</p>
                <p><span className="font-semibold">US location:</span> 6922 Hollywood Blvd</p>
                <p><span className="font-semibold">Price:</span> $3.99 to $5.99 per drink</p>
                <p><span className="font-semibold">Best drink:</span> Lemon Green Tea</p>
                <p><span className="font-semibold">Can&apos;t miss:</span> Snow King soft serve</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Compare Budget Chains</h3>
              <div className="space-y-2">
                <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  It&apos;s Boba Time Review &rarr;
                </Link>
                <Link href="/ding-tea-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Ding Tea Review &rarr;
                </Link>
                <Link href="/coco-fresh-tea-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  CoCo Fresh Tea Review &rarr;
                </Link>
                <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Kung Fu Tea Review &rarr;
                </Link>
                <Link href="/gong-cha-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Gong Cha Review &rarr;
                </Link>
                <Link href="/best-boba-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Boba in LA (25+ shops) &rarr;
                </Link>
                <Link href="/best-boba-hollywood/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Boba Near Hollywood &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-[#1A202C] mb-1">Explore Every Boba Shop in LA</h2>
            <p className="text-[#4A5568] text-sm">25+ shops ranked and reviewed across Los Angeles County.</p>
          </div>
          <Link
            href="/best-boba-los-angeles/"
            className="bg-[#2B6CB0] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#215387] transition-colors flex-shrink-0"
          >
            Best Boba LA Guide
          </Link>
        </div>
      </section>
    </>
  );
}
