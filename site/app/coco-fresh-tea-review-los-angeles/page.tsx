import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoCo Fresh Tea & Juice Review: Menu, Prices & LA Locations | Justin Sather",
  description: "CoCo Fresh Tea & Juice review covering the full menu, best drinks, prices, and Los Angeles locations. The world's largest boba chain, tested honestly across multiple LA visits. No sponsorships.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "CoCo Fresh Tea & Juice Review: Menu, Prices & LA Locations",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.1",
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
    "name": "CoCo Fresh Tea & Juice",
    "servesCuisine": "Bubble Tea",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Justin Sather, Los Angeles",
    "url": "https://justinsather.com"
  },
  "datePublished": "2026-03-26",
  "url": "https://justinsather.com/coco-fresh-tea-review-los-angeles/"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best drink at CoCo Fresh Tea & Juice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Avocado Smoothie Milk Tea is CoCo's most distinctive drink and worth ordering on your first visit. For a classic boba experience, the Pearl Milk Tea is the best starting point. The Taro Milk Tea and Passion Fruit Green Tea with QQ pearls are standout menu items for repeat visitors."
      }
    },
    {
      "@type": "Question",
      "name": "How much does CoCo Fresh Tea cost in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CoCo Fresh Tea drinks in Los Angeles range from $4.50 to $7.00 depending on size and toppings. Most regular drinks run $5 to $6.50 for a medium. Toppings like pearls, pudding, or jelly cost $0.50 to $0.75 extra. CoCo is one of the most affordable boba chains in LA, making it excellent value for the quality delivered."
      }
    },
    {
      "@type": "Question",
      "name": "Where are CoCo Fresh Tea locations in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CoCo Fresh Tea has multiple Los Angeles area locations including Alhambra, Rowland Heights, Monterey Park, Arcadia, Koreatown, and West LA. The San Gabriel Valley has the highest density of CoCo locations in the LA area. Most SGV locations are in Alhambra along Valley Blvd and in Rowland Heights."
      }
    },
    {
      "@type": "Question",
      "name": "Is CoCo Fresh Tea the same as CoCo Boba?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CoCo Fresh Tea & Juice, CoCo boba, and CoCo bubble tea all refer to the same chain. The full name is CoCo Fresh Tea & Juice. In LA the chain is commonly called CoCo or CoCo boba by regulars. The brand was founded in Tainan, Taiwan in 1997 and now operates over 4,000 locations across more than 40 countries."
      }
    },
    {
      "@type": "Question",
      "name": "What sugar level should I order at CoCo Fresh Tea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CoCo uses a percentage system: 0%, 30%, 50%, 70%, or 100% sugar. The default is calibrated around 70%, so ordering at 70% gives you the intended flavor. For fruit teas, 50% works well and lets the tea shine. For milk teas, 70% is the right starting point. The Avocado Smoothie Milk Tea is best at 50% since the avocado adds natural creaminess that balances with less added sugar."
      }
    },
    {
      "@type": "Question",
      "name": "How does CoCo Fresh Tea compare to Gong Cha and Kung Fu Tea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CoCo is more affordable than both Gong Cha and Kung Fu Tea, with drinks running $1 to $2 less per order. On tea quality, CoCo is comparable to Kung Fu Tea and slightly below Gong Cha's High Mountain Oolong level. CoCo wins on value and on unique menu items like the Avocado Milk Tea that you cannot get at either competitor. For everyday boba on a budget, CoCo is the best call."
      }
    }
  ]
};

export default function CoCoFreshTeaReviewPage() {
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
            CoCo Fresh Tea &amp; Juice Review: The World&apos;s Largest Boba Chain, Tested in LA
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/assets/team/justin-sather-avatar.jpg" alt="Justin Sather" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1A202C]">Justin Sather</p>
              <p className="text-xs text-[#718096]">Multiple visits across LA locations, paid out of pocket &bull; Updated Q1 2026</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm mb-6">
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4.1/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">SGV, Koreatown, West LA</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Founded Taiwan 1997</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_scene_lifestyle.png"
            alt="CoCo Fresh Tea and Juice boba Los Angeles"
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
            { label: "Locations", value: "Alhambra, Rowland Heights, Monterey Park, Koreatown" },
            { label: "Hours", value: "Daily 11am to 10pm (varies by location)" },
            { label: "Price Range", value: "$" },
            { label: "Best For", value: "Avocado Milk Tea, Pearl Milk Tea, Taro, Passion Fruit" },
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
        <h2 className="text-2xl font-bold text-[#1A202C] mb-4">CoCo Fresh Tea Menu: Prices and What to Order</h2>
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
                { drink: "Pearl Milk Tea", price: "$5.50", notes: "The classic. Smooth black milk tea base with QQ pearls that have genuine chew. The benchmark order." },
                { drink: "Avocado Smoothie Milk Tea", price: "$6.50", notes: "CoCo's most distinctive drink. Real avocado blended into fresh milk tea, creamy and naturally sweet." },
                { drink: "Taro Milk Tea", price: "$5.75", notes: "Earthy, slightly sweet, with visible taro texture. One of the better taro milk teas at this price point." },
                { drink: "Passion Fruit Green Tea", price: "$5.50", notes: "Bright, tart, well-balanced. Better than average for a chain fruit tea. Order with less sugar." },
                { drink: "Brown Sugar Fresh Milk", price: "$6.25", notes: "Cooked brown sugar syrup in fresh milk with pearls. Solid execution at a lower price than Tiger Sugar." },
                { drink: "Matcha Latte", price: "$5.75", notes: "Mild matcha, accessible rather than complex. Good for matcha beginners." },
                { drink: "Mango Green Tea", price: "$5.50", notes: "Refreshing and tropical. The mango flavor is genuine rather than synthetic. Good summer order." },
                { drink: "Four Seasons Oolong Milk Tea", price: "$5.75", notes: "Light floral oolong base with milk. Cleaner than comparable budget chain versions." },
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
        <p className="text-xs text-[#718096] mt-2">Prices are for medium size. Large adds $0.50 to $1.00. Toppings (pearls, pudding, jelly, aloe) are $0.50 to $0.75 each.</p>
      </section>

      {/* Review content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main review */}
          <div className="lg:col-span-2 space-y-6 text-[#4A5568] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1A202C]">The Verdict</h2>
            <p>
              CoCo Fresh Tea &amp; Juice has a legitimate claim to being the largest boba chain on the planet. Founded in 1997 in Tainan, Taiwan, the chain now operates over 4,000 locations across more than 40 countries. In Los Angeles, CoCo is most concentrated in the San Gabriel Valley, where the chain has been a fixture for over a decade. If you have been to Alhambra or Rowland Heights in the last ten years and walked past a boba shop, there is a good chance it was a CoCo.
            </p>
            <p>
              What CoCo does is not complicated: reliable, affordable boba with a broad enough menu to satisfy most preferences. It is not trying to compete with the craft credentials of{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>{" "}
              or the sourcing story of{" "}
              <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sunright Tea Studio
              </Link>
              . It is competing at the value tier, where consistency and price matter more than single-origin provenance. At that job, CoCo is among the best in LA.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes CoCo Worth Visiting</h2>
            <p>
              The most compelling reason to visit CoCo over comparable budget chains is the Avocado Smoothie Milk Tea. This is a genuine differentiator. Real avocado, blended into fresh milk tea, produces a thick, naturally creamy drink that has no real equivalent at most boba shops in LA. It is not novelty for novelty&apos;s sake: the avocado adds richness and a mild savory note that balances the sweet tea base in an interesting way. If you have never had an avocado boba drink, CoCo is the place to try one.
            </p>
            <p>
              The second reason is price. CoCo is consistently $1 to $2 cheaper than{" "}
              <Link href="/gong-cha-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Gong Cha
              </Link>{" "}
              and{" "}
              <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Kung Fu Tea
              </Link>{" "}
              for comparable drinks. On a daily boba habit across a month, that gap adds up. For students, families, or anyone managing a budget while still wanting good boba, CoCo is the most sensible chain option in LA.
            </p>
            <p>
              The QQ pearls are also worth noting. CoCo uses what they call QQ pearls, a term for the extra-chewy, springy tapioca texture that is the hallmark of well-cooked boba. The pearl quality at CoCo is above what you get at the lowest-budget chains and consistently good across the SGV locations. If you care about pearl texture, CoCo delivers reliably.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Best Drinks at CoCo in LA</h2>
            <p>
              The <strong>Avocado Smoothie Milk Tea</strong> is the order that sets CoCo apart from every other chain on this list. Order it at 50% sugar to let the avocado flavor come through clearly. The natural creaminess of the avocado does more for the drink than any added sweetness would. This is CoCo&apos;s signature and the drink most worth ordering if you have never been before.
            </p>
            <p>
              The <strong>Pearl Milk Tea</strong> is the clearest test of a boba shop&apos;s fundamentals. CoCo&apos;s version is honest and well-executed: a smooth black tea base, real milk (not powder at the better locations), and QQ pearls with good chew. It is not exciting, but it is correct. At $5.50 for a medium, it is also a very good value relative to what you get.
            </p>
            <p>
              The <strong>Taro Milk Tea</strong> at CoCo is one of the better versions of this drink at the budget tier. The taro character comes through as earthy and lightly sweet rather than purely artificial, which is the failure mode for most budget chain taro milk teas. It is not at the level of what{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>{" "}
              produces with premium taro sourcing, but it holds up well at the price.
            </p>
            <p>
              The <strong>Passion Fruit Green Tea</strong> is the best fruit tea on the menu. The passion fruit is bright and tart without being artificial, and the green tea base adds enough structure to keep the drink from being just a sweet slush. Order at 50% sugar for the best balance. This is also a good choice for anyone who wants something lighter than a milk tea.
            </p>
            <p>
              The <strong>Four Seasons Oolong Milk Tea</strong> is an underrated order at CoCo. The Four Seasons oolong is a Taiwanese variety with a lighter, more floral profile than standard black tea. It produces a milk tea that is slightly more complex than the standard Pearl Milk Tea, and the floral note comes through even at 70% sugar. It is not a single-origin oolong program like at{" "}
              <Link href="/moge-tee-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Moge Tee
              </Link>
              , but for the price it is a genuinely good cup.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="CoCo Fresh Tea boba Los Angeles SGV"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">CoCo Fresh Tea LA Locations: Where to Go</h2>
            <p>
              The San Gabriel Valley is where CoCo has the deepest presence in LA. The Alhambra locations along Valley Blvd are the most established, serving the dense SGV boba-going population that has high expectations for both quality and value. These locations have the longest track record and the most consistent execution. If you are doing an{" "}
              <Link href="/best-boba-san-gabriel-valley/" className="text-[#2B6CB0] hover:text-[#215387]">
                SGV boba crawl
              </Link>
              , CoCo is the right stop for the affordable tier comparison before or after visiting premium shops like Chicha San Chen or{" "}
              <Link href="/tp-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                TP Tea
              </Link>
              .
            </p>
            <p>
              The Rowland Heights location serves a similar demographic and performs comparably. The Monterey Park location is the most convenient for downtown-adjacent visitors and handles high volume well. Across all SGV locations, the quality is consistent: this is one of CoCo&apos;s strengths. You know what you are getting.
            </p>
            <p>
              The Koreatown location brings CoCo into the heart of LA&apos;s most competitive boba corridor. Here it sits alongside{" "}
              <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tiger Sugar
              </Link>
              , Happy Lemon, and{" "}
              <Link href="/the-alley-boba-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                The Alley
              </Link>
              . CoCo does not compete with those shops on craft or spectacle, but it offers a different value proposition: a wider menu, lower prices, and faster throughput. For the Koreatown boba tourist, a CoCo stop is worth making as a contrast to the premium shops nearby.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              CoCo is the most affordable among the major international boba chains in LA. Drinks run $4.50 to $7 depending on size and what you order. Most regular menu drinks are $5 to $6 for a medium. Toppings add $0.50 to $0.75 each, making a fully loaded drink still under $8 in most cases. This compares to{" "}
              <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Happy Lemon
              </Link>{" "}
              ($6 to $8), Gong Cha ($6 to $8.50), and Boba Guys ($8 to $11). CoCo is a full tier below those chains on price while delivering a meaningful portion of the quality.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How CoCo Compares</h2>
            <p>
              CoCo occupies a specific position in the LA boba market: the high-volume, high-value international chain that prioritizes consistency and affordability over craft. In that tier, CoCo outperforms most domestic budget chains on quality and outperforms all mid-tier chains on price.
            </p>
            <p>
              Against{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>
              , CoCo wins on tea quality and menu range. Against{" "}
              <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Kung Fu Tea
              </Link>
              , CoCo wins on price and has the edge with unique items like the Avocado Milk Tea. Against Gong Cha, CoCo loses on tea base quality but wins on price and overall menu variety. The Avocado Smoothie Milk Tea alone gives CoCo a distinct menu identity that none of those competitors can match.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Avocado Smoothie Milk Tea is genuinely unique and excellent at this price point</li>
                  <li>Most affordable major international boba chain in LA ($4.50 to $7)</li>
                  <li>QQ pearls consistently well-cooked with good chew across SGV locations</li>
                  <li>Wide menu covering milk teas, fruit teas, smoothies, and fresh milk series</li>
                  <li>Strong consistency across multiple SGV locations</li>
                  <li>Four Seasons Oolong base adds genuine complexity at the budget tier</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Tea base quality below Gong Cha&apos;s High Mountain Oolong standard</li>
                  <li>Some locations use powder instead of fresh milk, which shows in the cup</li>
                  <li>High-volume SGV locations can feel rushed during peak hours</li>
                  <li>Branding and store design feels dated compared to newer chains</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              CoCo Fresh Tea &amp; Juice earned its position as the world&apos;s largest boba chain by doing the fundamentals correctly at a price that makes daily boba habits affordable. In Los Angeles, CoCo is the right answer to a specific question: where do I get a reliable, good-value boba drink without paying premium chain prices?
            </p>
            <p>
              The Avocado Smoothie Milk Tea alone is worth a visit if you have never had one. The Pearl Milk Tea and Taro Milk Tea are honest, well-executed versions of boba classics. The pricing is the most competitive among major international chains in LA. And the SGV locations consistently deliver what the menu promises.
            </p>
            <p>
              A 4.1 out of 5 reflects a chain that outperforms its price tier while falling short of the craft and mid-tier shops that define the LA boba scene at higher price points. For daily boba drinkers who want dependable quality at the lowest price among legitimate chains, CoCo is the best call in Los Angeles.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the Avocado Smoothie Milk Tea at 50% sugar on your first visit. The avocado flavor is subtle and gets lost at higher sugar levels. Let it come through at 50%.</li>
                <li>SGV locations (Alhambra, Rowland Heights) are the most consistent. If you are visiting for the first time, start at one of these rather than the Koreatown location.</li>
                <li>The Four Seasons Oolong Milk Tea at 50% sugar is an underrated order. It is a more interesting drink than the standard Pearl Milk Tea and available at the same price range.</li>
                <li>Avoid 100% sugar on any milk tea. CoCo&apos;s standard calibration is already sweet, and 100% can overwhelm the tea character entirely. 70% is the correct default.</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-[#1A202C] mt-10">CoCo Fresh Tea FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the best drink at CoCo Fresh Tea & Juice?",
                  a: "The Avocado Smoothie Milk Tea is CoCo's signature and the most distinctive drink on the menu. For a classic boba experience, the Pearl Milk Tea is the right starting point. The Taro Milk Tea and Passion Fruit Green Tea are standouts for repeat visits."
                },
                {
                  q: "How much does CoCo Fresh Tea cost in Los Angeles?",
                  a: "Most CoCo drinks run $5 to $6.50 for a medium. The Pearl Milk Tea is around $5.50. Adding toppings costs $0.50 to $0.75 each. CoCo is the most affordable major international boba chain in LA, a full tier below Gong Cha and Boba Guys on price."
                },
                {
                  q: "What sugar level should I order at CoCo?",
                  a: "70% is the correct default for most milk teas. For the Avocado Smoothie Milk Tea and fruit teas, 50% works better, letting the natural flavors come through. Avoid 100% on a first visit as the standard recipes are already calibrated for sweetness."
                },
                {
                  q: "Is CoCo Fresh Tea the same as CoCo Boba?",
                  a: "Yes. CoCo Fresh Tea & Juice, CoCo boba, and CoCo bubble tea all refer to the same Taiwanese chain founded in 1997 in Tainan. It now operates over 4,000 locations across 40+ countries, making it one of the largest boba chains in the world."
                },
                {
                  q: "Where is CoCo Fresh Tea in Los Angeles?",
                  a: "CoCo has multiple LA locations concentrated in the San Gabriel Valley, including Alhambra, Rowland Heights, and Monterey Park. There are also locations in Koreatown and West LA. The Alhambra and Rowland Heights locations are the most established and consistent."
                },
                {
                  q: "Is CoCo Fresh Tea better than It's Boba Time?",
                  a: "CoCo is better on tea quality and menu range. The tea base at CoCo is stronger, the QQ pearls are more consistently cooked, and the menu includes unique items like the Avocado Milk Tea that It's Boba Time cannot match. Both are in the affordable tier, but CoCo wins on the drink itself. It's Boba Time has more LA locations if convenience is the priority."
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
                  { label: "Pearl Quality", score: 8 },
                  { label: "Menu Range", score: 9 },
                  { label: "Value", score: 10 },
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
              <p className="text-5xl font-bold">4.1/5</p>
              <p className="text-blue-100 text-xs mt-1">Best value boba chain in Los Angeles</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Chain Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Founded:</span> 1997, Tainan, Taiwan</p>
                <p><span className="font-semibold">Global locations:</span> 4,000+ in 40+ countries</p>
                <p><span className="font-semibold">Price:</span> $5 to $7 per drink</p>
                <p><span className="font-semibold">Best drink:</span> Avocado Smoothie Milk Tea</p>
                <p><span className="font-semibold">Can&apos;t miss:</span> QQ pearls, Four Seasons Oolong</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Compare Budget Chains</h3>
              <div className="space-y-2">
                <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  It&apos;s Boba Time Review &rarr;
                </Link>
                <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Kung Fu Tea Review &rarr;
                </Link>
                <Link href="/gong-cha-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Gong Cha Review &rarr;
                </Link>
                <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Happy Lemon Review &rarr;
                </Link>
                <Link href="/best-boba-san-gabriel-valley/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Boba SGV Guide &rarr;
                </Link>
                <Link href="/best-boba-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Boba in LA (25+ shops) &rarr;
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
            <p className="text-[#4A5568] text-sm">25+ shops ranked and reviewed across Los Angeles.</p>
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
