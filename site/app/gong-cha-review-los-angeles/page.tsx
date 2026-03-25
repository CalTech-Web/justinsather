import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gong Cha Review: Complete Menu Guide & LA Locations | Justin Sather",
  description: "Gong Cha review covering the full menu, best drinks, prices, and all Los Angeles locations. Personally visited, zero sponsorships. The most recognized bubble tea chain in the world, reviewed honestly.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Gong Cha Review: Complete Menu Guide & LA Locations",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.2",
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
    "name": "Gong Cha",
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
  "datePublished": "2026-03-25",
  "url": "https://justinsather.com/gong-cha-review-los-angeles/"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best drink at Gong Cha?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Brown Sugar Milk Tea with Pearl is Gong Cha's signature drink and the best starting point for first-time visitors. The Oolong Milk Tea and Earl Grey Milk Tea are the best choices for drinkers who want a tea-forward experience. For fruit teas, the Passion Fruit Green Tea is the standout."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Gong Cha cost in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gong Cha drinks in Los Angeles range from $5.50 to $8.50 depending on size and toppings. Most regular drinks run $6 to $7. Adding toppings like pearls, pudding, or jelly costs $0.75 to $1.00 extra per topping. Gong Cha is priced in the mid-range for LA boba, more affordable than Boba Guys but above budget chains like It's Boba Time."
      }
    },
    {
      "@type": "Question",
      "name": "What is Gong Cha's sugar level system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gong Cha lets you choose your sugar level: 0%, 25%, 50%, 75%, or 100%. Most drinks are calibrated for 70% sweetness as the standard, so 75% is a good starting point. For tea-forward drinks like Oolong Milk Tea, 50% lets the tea flavor come through without being overwhelmed by sweetness."
      }
    },
    {
      "@type": "Question",
      "name": "Where are Gong Cha locations in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gong Cha has multiple Los Angeles area locations including Koreatown, Rowland Heights, Alhambra, Monterey Park, Arcadia, West LA near UCLA, and Long Beach on Pacific Coast Highway. The San Gabriel Valley cluster has the highest density of Gong Cha locations in the LA area."
      }
    },
    {
      "@type": "Question",
      "name": "Is Gong Cha good or overrated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gong Cha is genuinely good for a chain boba shop. The tea quality is above average, the customization system is one of the best in the industry, and the consistency across locations is strong. It is not as premium as Chicha San Chen or Boba Guys, but it outperforms most budget chains in tea quality and drink execution. A solid 4.2 out of 5."
      }
    },
    {
      "@type": "Question",
      "name": "What does Gong Cha mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gong Cha means tribute tea in Chinese, referencing the historical practice of offering the finest tea to the emperor as tribute. The name reflects the brand's positioning around quality tea sourcing. The chain was founded in Kaohsiung, Taiwan in 2006 and now has over 2,000 locations globally."
      }
    }
  ]
};

export default function GongChaReviewPage() {
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
            Gong Cha Review: The World&apos;s Most Famous Boba Chain, Tested Across LA
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
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4.2/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Multiple LA Locations</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Founded Taiwan 2006</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_scene_lifestyle.png"
            alt="Gong Cha boba tea Los Angeles"
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
            { label: "Locations", value: "Koreatown, SGV, Westwood, Long Beach" },
            { label: "Hours", value: "Daily 11am to 10pm (varies by location)" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Brown Sugar Milk Tea, Oolong, Pudding toppings" },
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
        <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Gong Cha Menu: Prices and What to Order</h2>
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
                { drink: "Brown Sugar Milk Tea with Pearl", price: "$7.00", notes: "The flagship. Brown sugar syrup marbled into milk tea with tapioca pearl, rich and sweet" },
                { drink: "Oolong Milk Tea", price: "$6.25", notes: "Best tea-forward option. High Mountain Oolong base with depth you don't get at budget chains" },
                { drink: "Earl Grey Milk Tea", price: "$6.25", notes: "Bergamot comes through clearly. One of the better Earl Grey milk teas in LA" },
                { drink: "Taro Milk Tea", price: "$6.50", notes: "Solid execution, slightly more synthetic than premium shops but consistent" },
                { drink: "Hokkaido Milk Tea", price: "$6.75", notes: "Creamy and mild. Good for drinkers who find oolong too grassy" },
                { drink: "Passion Fruit Green Tea", price: "$6.00", notes: "Best fruit tea on the menu. Bright, tart, well-balanced without being cloying" },
                { drink: "Pudding Milk Tea", price: "$7.00", notes: "Egg pudding adds silky texture and caramel notes. The best non-pearl topping option" },
                { drink: "Matcha Milk Tea", price: "$6.75", notes: "Mild matcha character, more accessible than single-origin shops but lacks depth" },
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
        <p className="text-xs text-[#718096] mt-2">Prices are for medium size. Large adds $0.50 to $1.00. Additional toppings are $0.75 to $1.00 each.</p>
      </section>

      {/* Review content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main review */}
          <div className="lg:col-span-2 space-y-6 text-[#4A5568] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1A202C]">The Verdict</h2>
            <p>
              Gong Cha is the most recognized bubble tea brand in the world. Over 2,000 locations across 20+ countries, a 20-year track record, and a cult following that stretches from Taipei to Toronto to Los Angeles. The question is not whether Gong Cha is famous. The question is whether it is good. After visiting multiple LA locations from Koreatown to the SGV to Westwood, the answer is: yes, legitimately good, and better than the chain&apos;s global ubiquity might lead you to expect.
            </p>
            <p>
              Gong Cha does not have the craft credentials of{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>{" "}
              or the premium sourcing story of{" "}
              <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sunright Tea Studio
              </Link>
              . It is a chain, and it operates like one: consistent, reliable, and built for scale. But within the chain boba tier, Gong Cha is at the top. The tea is better than what you get at{" "}
              <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Kung Fu Tea
              </Link>
              , the customization system is the best in the category, and the Brown Sugar Milk Tea is one of the most satisfying versions of that drink available at any price point in LA.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes Gong Cha Worth Visiting</h2>
            <p>
              The name means tribute tea, referencing the historical practice of offering the finest tea as an imperial tribute. That origin story is marketing, but it is marketing that reflects a genuine commitment to tea sourcing. Gong Cha uses High Mountain Oolong from Taiwan as its base, which has a naturally sweet, floral character that lower-grade oolong cannot replicate. When you taste the Oolong Milk Tea at Gong Cha, you can tell the difference between this base and what budget chains are using.
            </p>
            <p>
              The other defining feature is the customization system. Five sugar levels (0%, 25%, 50%, 75%, 100%), three ice levels (no ice, less ice, regular), and a topping selection that covers pearls, pudding, jelly, aloe, and red bean. Most chains offer some version of this, but Gong Cha has the clearest system and the best staff training around communicating options to customers. First-time visitors know exactly what they are ordering. Regulars can dial in their exact preferences with precision.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Best Drinks at Gong Cha in LA</h2>
            <p>
              The <strong>Brown Sugar Milk Tea with Pearl</strong> is the entry point and the best single drink on the menu. Gong Cha uses brown sugar syrup that is cooked to a deeper caramel than most chains, which gives the drink a more complex sweetness than the straight sugary versions at lower-end shops. The tapioca pearl is cooked with brown sugar as well, so the flavor is consistent throughout the drink rather than being a separate sweet element added on top. Order at 75% sugar for the most balanced version.
            </p>
            <p>
              The <strong>Oolong Milk Tea</strong> is the best order for drinkers who came for the tea, not the sweetness. The High Mountain Oolong base comes through clearly at 50% sugar, with a natural sweetness and floral note that is genuinely pleasant without anything added. This is the drink that best demonstrates why Gong Cha is better than comparable chains. It is a significantly better oolong milk tea than what{" "}
              <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Happy Lemon
              </Link>{" "}
              or{" "}
              <Link href="/sharetea-westwood-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sharetea
              </Link>{" "}
              delivers, and the gap is clear in a direct comparison.
            </p>
            <p>
              The <strong>Pudding Milk Tea</strong> is the best topping option available. Gong Cha&apos;s egg pudding is silky, lightly caramelized, and adds a custard-like richness to whatever tea base you pair it with. The combination of Oolong Milk Tea with pudding added is one of the most satisfying drinks you can order at a chain boba shop in Los Angeles. The pudding alone distinguishes Gong Cha from most competitors.
            </p>
            <p>
              The <strong>Passion Fruit Green Tea</strong> is the best fruit tea on the menu and the right order for anyone who wants something lighter and more refreshing. The passion fruit is bright and tart without being artificial, the green tea base provides subtle structure, and the overall drink is genuinely thirst-quenching in a way that heavy milk teas are not. On a hot LA day this is a top-tier order.
            </p>
            <p>
              The <strong>Earl Grey Milk Tea</strong> is consistently underrated at Gong Cha. The bergamot comes through clearly in a way that distinguishes this drink from generic milk teas, and the slightly floral, citrus quality pairs well with the milk base. It is a more interesting order than the standard Black Milk Tea at roughly the same price.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Gong Cha boba Los Angeles locations"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Gong Cha LA Locations: Where to Go</h2>
            <p>
              Gong Cha has the widest geographic spread of any premium boba chain in Los Angeles. The San Gabriel Valley cluster is the densest, with locations in Rowland Heights, Alhambra, Monterey Park, and Arcadia. These locations see the highest traffic and serve a customer base with high boba standards, which generally keeps quality consistent. SGV Gong Cha is where the chain performs at its best.
            </p>
            <p>
              The Koreatown location is the most convenient for visitors from central LA. It sits within walking distance of the dense{" "}
              <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="text-[#2B6CB0] hover:text-[#215387]">
                Koreatown boba corridor
              </Link>{" "}
              that includes Tiger Sugar, The Alley, and Happy Lemon. If you are doing a Koreatown boba crawl, Gong Cha is the right stop for comparing a well-executed chain against the more specialized shops in the same neighborhood.
            </p>
            <p>
              The Westwood location near UCLA draws a heavy student customer base, which means shorter menus and faster service tuned for high volume. The quality is consistent but the atmosphere is more utilitarian than the SGV locations. If you are in the Westwood area specifically,{" "}
              <Link href="/sharetea-westwood-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sharetea Westwood
              </Link>{" "}
              is a close competitor worth comparing directly.
            </p>
            <p>
              The Long Beach location on Pacific Coast Highway is the southernmost option and the one most likely to be convenient for visitors to the coast. It performs comparably to the Koreatown location in terms of consistency.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Gong Cha prices in LA run $5.50 to $8.50 depending on drink and size. Most regular drinks land at $6 to $7 for a medium. Toppings add $0.75 to $1.00 each. This positions Gong Cha in the true mid-range for LA boba: significantly more affordable than{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>{" "}
              (which runs $7 to $10), clearly above budget chains like{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>{" "}
              ($4.50 to $6), and roughly comparable to{" "}
              <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Happy Lemon
              </Link>{" "}
              and Sharetea. For the tea quality delivered, Gong Cha represents strong value at this price point.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How Gong Cha Compares</h2>
            <p>
              Against other major chains in LA, Gong Cha is the best middle-tier boba option. It outperforms Kung Fu Tea and{" "}
              <Link href="/tastea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tastea
              </Link>{" "}
              on tea quality. It matches{" "}
              <Link href="/feng-cha-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Feng Cha
              </Link>{" "}
              on overall execution while offering a more traditional menu. It falls short of the premium tier (Chicha San Chen, Boba Guys, Sunright) on sourcing credentials but closes some of the gap with the High Mountain Oolong base.
            </p>
            <p>
              The best use case for Gong Cha in LA is the consistent, reliable stop. On a day when you want a good boba drink without uncertainty, without waiting to see if the specialty shop is having an off day, Gong Cha delivers. That kind of consistency is genuinely valuable in a city where quality varies dramatically.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Best customization system of any chain boba shop in LA (5 sugar levels, 3 ice levels)</li>
                  <li>High Mountain Oolong base genuinely better than what lower-tier chains use</li>
                  <li>Brown Sugar Milk Tea with Pearl is one of the best versions of that drink at any chain</li>
                  <li>Egg pudding topping is silky and genuinely adds to the drink</li>
                  <li>Wide LA location coverage from SGV to Westside to Long Beach</li>
                  <li>Extremely consistent quality across all LA locations visited</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>No differentiation from craft or premium shops in sourcing transparency</li>
                  <li>Some drinks (Matcha, Taro) are generic relative to specialty competitors</li>
                  <li>Cheese foam program lags behind Moge Tee and Feng Cha</li>
                  <li>High-volume locations can feel transactional rather than experiential</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Gong Cha is the gold standard of chain boba. If the question is which global boba chain delivers the best drink in Los Angeles, Gong Cha wins. The High Mountain Oolong base, the superior customization system, the excellent pudding topping, and the consistency across all LA locations combine to make this the most dependable mid-tier boba option in the city.
            </p>
            <p>
              A 4.2 out of 5 reflects a chain that genuinely outperforms its peer tier while falling short of the craft and premium shops that LA&apos;s boba scene has developed at the top. For daily boba drinkers who want quality without the premium price, Gong Cha is the right call. For visitors who want the most memorable boba experience the city can offer, the order goes elsewhere. But as a consistent, well-executed chain operating at a fair price, Gong Cha is hard to beat.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the Oolong Milk Tea at 50% sugar to experience the High Mountain Oolong without sweetness overriding the tea character. This is the best way to understand why Gong Cha&apos;s base is better than most chains.</li>
                <li>The Pudding is the best topping. Pearl is the default, but the egg pudding adds a custard-like richness that the pearl does not. Try the pudding at least once before settling on pearls as your standard.</li>
                <li>SGV locations (Rowland Heights, Alhambra, Monterey Park) have the most experienced staff and highest throughput. These are the locations that perform most consistently.</li>
                <li>Gong Cha pairs well with a Chicha San Chen visit for a direct comparison of how a global chain and a craft single-origin shop approach the same underlying ingredients differently.</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-[#1A202C] mt-10">Gong Cha FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the best drink at Gong Cha?",
                  a: "The Brown Sugar Milk Tea with Pearl is the signature and the best starting point. For tea drinkers, the Oolong Milk Tea at 50% sugar is the standout. The Pudding Milk Tea and Passion Fruit Green Tea round out the top four."
                },
                {
                  q: "How much does Gong Cha cost in Los Angeles?",
                  a: "Most Gong Cha drinks in LA run $6 to $7.50 for a medium. The Brown Sugar Milk Tea is around $7. Adding toppings costs $0.75 to $1.00 each. Gong Cha is mid-range for LA boba, below Boba Guys but above budget chains."
                },
                {
                  q: "What sugar level should I order at Gong Cha?",
                  a: "75% is a good default for most milk teas. For fruit teas, 50% or 75% works well. For the Oolong Milk Tea specifically, 50% lets the tea come through. Avoid 100% on your first visit, as the standard recipe is already calibrated for sweetness at around 70%."
                },
                {
                  q: "Where is Gong Cha in Los Angeles?",
                  a: "Gong Cha has multiple LA area locations including Koreatown, Rowland Heights, Alhambra, Monterey Park, Arcadia, Westwood near UCLA, and Long Beach on Pacific Coast Highway. The San Gabriel Valley has the densest concentration of Gong Cha locations in the LA area."
                },
                {
                  q: "Is Gong Cha better than Kung Fu Tea?",
                  a: "Yes. Gong Cha outperforms Kung Fu Tea on tea quality, customization, and overall drink execution. The High Mountain Oolong base at Gong Cha is genuinely better, and the pudding topping is superior. Both are global chains at a similar price point, but Gong Cha is the better choice in LA."
                },
                {
                  q: "What does Gong Cha mean?",
                  a: "Gong Cha means tribute tea in Chinese, referencing the tradition of offering the finest tea as tribute to the emperor. The chain was founded in Kaohsiung, Taiwan in 2006 and now has over 2,000 locations across more than 20 countries."
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
                  { label: "Tea Quality", score: 8 },
                  { label: "Pearl Quality", score: 8 },
                  { label: "Menu Range", score: 9 },
                  { label: "Value", score: 9 },
                  { label: "Consistency", score: 9 },
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
              <p className="text-5xl font-bold">4.2/5</p>
              <p className="text-blue-100 text-xs mt-1">Best chain boba in Los Angeles</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Chain Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Founded:</span> 2006, Kaohsiung, Taiwan</p>
                <p><span className="font-semibold">Global locations:</span> 2,000+ in 20+ countries</p>
                <p><span className="font-semibold">Price:</span> $6 to $8 per drink</p>
                <p><span className="font-semibold">Best drink:</span> Brown Sugar Milk Tea, Oolong Milk Tea</p>
                <p><span className="font-semibold">Can&apos;t miss:</span> Egg pudding topping</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Compare Other Chains</h3>
              <div className="space-y-2">
                <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Kung Fu Tea Review &rarr;
                </Link>
                <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Happy Lemon Review &rarr;
                </Link>
                <Link href="/feng-cha-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Feng Cha Review &rarr;
                </Link>
                <Link href="/sharetea-westwood-review/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Sharetea Westwood Review &rarr;
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
