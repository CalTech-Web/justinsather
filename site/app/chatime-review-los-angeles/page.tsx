import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chatime Review: Menu, Prices & Los Angeles Locations | Justin Sather",
  description: "Chatime review covering the full menu, best drinks, prices, and Los Angeles locations. One of the world's largest bubble tea chains, tested across multiple LA visits. No sponsorships.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Chatime Review: Menu, Prices & Los Angeles Locations",
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
    "name": "Chatime",
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
  "datePublished": "2026-03-27",
  "url": "https://justinsather.com/chatime-review-los-angeles/"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best drink at Chatime?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The QQ Milk Tea is Chatime's most iconic order, combining pearls, pudding, and grass jelly in a single drink. The Ruby Red Tea is the chain's signature fruit tea and worth ordering if you prefer something lighter than milk tea. For a classic starting point, the Pearl Milk Tea is a solid benchmark of the chain's fundamentals."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Chatime cost in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chatime drinks in Los Angeles typically range from $5.50 to $8.50 depending on size and toppings. Most regular drinks run $6 to $7.50 for a medium. The QQ drinks with multiple toppings run toward the higher end. Chatime is priced similarly to Gong Cha and slightly above CoCo Fresh Tea."
      }
    },
    {
      "@type": "Question",
      "name": "Where are Chatime locations in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chatime has multiple Los Angeles locations, concentrated in the San Gabriel Valley including Alhambra, Rowland Heights, Arcadia, and Hacienda Heights. There are also locations in Torrance in the South Bay. The SGV locations are the most established and consistent, serving a community that has made bubble tea part of daily life for decades."
      }
    },
    {
      "@type": "Question",
      "name": "What are the QQ drinks at Chatime?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "QQ at Chatime refers to a combination of multiple toppings in a single drink, typically pearls, pudding, and grass jelly together. The QQ Milk Tea is the flagship example. QQ is a Taiwanese term for the chewy, springy texture associated with well-made tapioca, and Chatime built its brand around this texture philosophy."
      }
    },
    {
      "@type": "Question",
      "name": "What sugar level should I order at Chatime?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chatime uses a percentage system from 0% to 100% sugar. For milk teas, 70% is the recommended starting point, which delivers the intended sweetness balance. For fruit teas like the Ruby Red, 50% lets the tea character come through more clearly. The QQ Milk Tea works well at 70% because the pudding adds natural sweetness that balances the added sugar."
      }
    },
    {
      "@type": "Question",
      "name": "How does Chatime compare to Gong Cha and Kung Fu Tea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chatime and Gong Cha are direct competitors at the mid-tier international chain level. Chatime wins on topping variety, especially the QQ multi-topping drinks. Gong Cha wins on tea base quality with its High Mountain Oolong program. Against Kung Fu Tea, Chatime has a more interesting menu and slightly higher tea quality. For everyday boba, Chatime and Gong Cha are the two strongest mid-tier international chains in LA."
      }
    }
  ]
};

export default function ChatimeReviewPage() {
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
            Chatime Review: The Complete Menu Guide for LA Locations
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
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">SGV, Torrance</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Founded Taiwan 2005</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_scene_lifestyle.png"
            alt="Chatime bubble tea Los Angeles"
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
            { label: "Locations", value: "Alhambra, Rowland Heights, Arcadia, Hacienda Heights, Torrance" },
            { label: "Hours", value: "Daily 11am to 10pm (varies by location)" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "QQ Milk Tea, Ruby Red Tea, Pearl Milk Tea, Taro Milk Tea" },
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
        <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Chatime Menu: Prices and What to Order</h2>
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
                { drink: "QQ Milk Tea", price: "$7.50", notes: "Chatime's flagship. Pearl, pudding, and grass jelly together in one cup. The defining Chatime order. Rich, textured, satisfying." },
                { drink: "Pearl Milk Tea", price: "$6.00", notes: "The benchmark order for any new visit. Smooth black milk tea with properly cooked QQ pearls. Consistent across all LA locations." },
                { drink: "Ruby Red Tea", price: "$6.50", notes: "Chatime's signature fruit tea. Hibiscus-forward, tart and floral, with a red color that makes it instantly recognizable. Order at 50% sugar." },
                { drink: "Taro Milk Tea", price: "$6.25", notes: "Earthy and naturally sweet, with genuine taro character rather than purely artificial flavoring. One of the better taro milk teas at this price tier." },
                { drink: "Matcha Latte", price: "$6.75", notes: "Accessible rather than complex. Good for matcha beginners. Pairs well with pearls added as a topping." },
                { drink: "Brown Sugar Boba Milk", price: "$7.25", notes: "Cooked brown sugar syrup with fresh milk and pearls. Solid execution at a slightly lower price than Tiger Sugar's version." },
                { drink: "Oolong Milk Tea", price: "$6.25", notes: "Light, floral oolong base with milk. Cleaner and more nuanced than standard black milk tea. Recommended for returning visitors." },
                { drink: "Wintermelon Milk Tea", price: "$6.00", notes: "Subtle, lightly sweet, with the distinctive wintermelon floral note. One of the few chains in LA still doing wintermelon well." },
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
        <p className="text-xs text-[#718096] mt-2">Prices are for medium size. Large adds $0.50 to $1.00. Toppings (pearls, pudding, grass jelly, aloe) are $0.50 to $0.75 each. QQ Milk Tea includes multiple toppings in the base price.</p>
      </section>

      {/* Review content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main review */}
          <div className="lg:col-span-2 space-y-6 text-[#4A5568] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1A202C]">The Verdict</h2>
            <p>
              Chatime is one of the world&apos;s largest bubble tea chains, founded in Taipei, Taiwan in 2005 by La Kaffa International. With over 1,500 locations across more than 30 countries, it sits alongside{" "}
              <Link href="/gong-cha-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Gong Cha
              </Link>{" "}
              and{" "}
              <Link href="/coco-fresh-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                CoCo Fresh Tea
              </Link>{" "}
              as one of the three most recognizable Taiwanese boba brands in the world. In Los Angeles, Chatime is primarily found in the San Gabriel Valley, where the chain has built a loyal following across Alhambra, Rowland Heights, Arcadia, and Hacienda Heights.
            </p>
            <p>
              What Chatime does better than most mid-tier chains is the topping program. The QQ drinks, which combine pearls, pudding, and grass jelly in a single cup, are the chain&apos;s strongest differentiator. If you have ever ordered a standard pearl milk tea and wished for more texture variety in a single drink, Chatime&apos;s QQ series is the answer.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes Chatime Worth Visiting</h2>
            <p>
              The QQ concept is Chatime&apos;s core identity. In Taiwanese culture, &ldquo;QQ&rdquo; describes the springy, chewy texture that defines well-made tapioca and other jellied toppings. Chatime built its brand around this texture obsession, and it shows in both the quality of individual toppings and the deliberate way the QQ Milk Tea combines them. Pearls, pudding, and grass jelly each have a different chew and sweetness, and the combination in a single cup creates more complexity than any single-topping order delivers.
            </p>
            <p>
              The Ruby Red Tea is the second reason to seek out Chatime. A hibiscus-based fruit tea with a distinctive deep red color, the Ruby Red is Chatime&apos;s most photographed drink and, more importantly, one of the better fruit teas served by any chain in the{" "}
              <Link href="/best-boba-san-gabriel-valley/" className="text-[#2B6CB0] hover:text-[#215387]">
                San Gabriel Valley
              </Link>
              . The hibiscus gives the tea a genuine tartness that most fruit teas replace with artificial flavoring. At 50% sugar, the natural sourness comes through clearly and balances the sweetness well.
            </p>
            <p>
              The Wintermelon Milk Tea is an underrated order. Wintermelon is a traditional Taiwanese tea base that most chains have quietly dropped in favor of simpler syrups. Chatime still does it properly: the subtle floral, lightly sweet note that is the hallmark of real wintermelon comes through in the tea. It is a more interesting drink than a standard black milk tea and worth ordering at least once.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Best Drinks at Chatime in LA</h2>
            <p>
              The <strong>QQ Milk Tea</strong> is the order that defines Chatime and the one most worth ordering on a first visit. The combination of pearls, pudding, and grass jelly gives you the full range of the chain&apos;s topping program in a single cup. The base milk tea is competent, smooth, and well-calibrated for sweetness. This is not the subtlest drink in Los Angeles, but it is one of the most satisfying for texture.
            </p>
            <p>
              The <strong>Ruby Red Tea</strong> is the drink to order if you prefer something lighter. The hibiscus base gives the tea a tartness and depth that most fruit teas lack, and the red color makes it visually distinctive without being a gimmick. Order it at 50% sugar and without extra toppings to let the tea character dominate.
            </p>
            <p>
              The <strong>Pearl Milk Tea</strong> is the clearest test of Chatime&apos;s fundamentals. The black tea base is solid, the milk ratio is correct, and the pearls have consistent chew. It is not at the level of{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>{" "}
              or{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>{" "}
              on tea quality, but it holds up well against{" "}
              <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Kung Fu Tea
              </Link>{" "}
              and{" "}
              <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Happy Lemon
              </Link>{" "}
              at comparable prices.
            </p>
            <p>
              The <strong>Taro Milk Tea</strong> at Chatime is one of the better versions at the mid-tier chain level. The taro character is genuinely earthy rather than purely synthetic, which is the failure mode for budget chain taro milk teas. It does not reach the sourcing quality of{" "}
              <Link href="/milksha-westwood-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Milksha&apos;s
              </Link>{" "}
              real taro from Dajia, Taiwan, but for an everyday chain option it is an honest cup.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Chatime boba tea Los Angeles SGV"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Chatime LA Locations: Where to Go</h2>
            <p>
              The San Gabriel Valley is where Chatime has the strongest LA presence. The Alhambra and Rowland Heights locations serve the core SGV boba-going community and are the most consistent in execution. If you are visiting the SGV for the first time and want to hit Chatime alongside premium shops like{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>{" "}
              or{" "}
              <Link href="/xing-fu-tang-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Xing Fu Tang
              </Link>
              , the Rowland Heights location is the most convenient starting point.
            </p>
            <p>
              The Arcadia and Hacienda Heights locations serve the eastern SGV and are similarly well-established. The Torrance location brings Chatime into the South Bay, serving a community with fewer premium boba options nearby. For South Bay visitors, Chatime is the strongest chain-level option in the area.
            </p>
            <p>
              Across all LA locations, Chatime&apos;s most consistent quality is in the QQ toppings. Pearl consistency, pudding texture, and grass jelly quality hold up reliably. The tea bases vary slightly by location, with the SGV locations generally outperforming the Torrance location on consistency.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Chatime is priced at the mid-tier chain level, roughly equivalent to{" "}
              <Link href="/gong-cha-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Gong Cha
              </Link>{" "}
              and slightly above{" "}
              <Link href="/coco-fresh-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                CoCo Fresh Tea
              </Link>
              . Most drinks run $6 to $7.50 for a medium. The QQ Milk Tea with multiple toppings included is $7.50, which is actually reasonable given that adding the same toppings individually at a cheaper chain would cost the same or more. Premium drinks like the Brown Sugar Boba Milk run $7.25. This positions Chatime clearly below craft shops like Boba Guys ($8 to $11) and above the budget tier of{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>{" "}
              ($5.25 to $6.25).
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How Chatime Compares</h2>
            <p>
              Chatime and Gong Cha are the two strongest mid-tier international chains in Los Angeles, and they target slightly different preferences. Gong Cha has the edge on tea base quality, particularly the High Mountain Oolong program. Chatime has the edge on topping variety and the QQ multi-topping concept. For someone who cares primarily about the tea itself, Gong Cha is the better call. For someone who wants the most interesting texture experience from a chain, Chatime wins.
            </p>
            <p>
              Against Kung Fu Tea, Chatime wins on both tea quality and menu interest. The Ruby Red Tea and QQ Milk Tea give Chatime two genuinely distinctive drinks that Kung Fu Tea cannot match with comparable items. Against{" "}
              <Link href="/feng-cha-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Feng Cha
              </Link>
              , the comparison is closer, but Chatime edges ahead on the strength of the QQ program and the Ruby Red.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>QQ Milk Tea is a genuinely distinctive multi-topping drink no competitor fully replicates</li>
                  <li>Ruby Red Tea is one of the better fruit teas served by any chain in the SGV</li>
                  <li>Wintermelon Milk Tea done properly when most chains have dropped it</li>
                  <li>Strong topping quality across pearls, pudding, and grass jelly</li>
                  <li>Reliable consistency across SGV locations</li>
                  <li>Priced competitively against comparable mid-tier chains</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Tea base quality below Gong Cha&apos;s High Mountain Oolong standard</li>
                  <li>Fewer LA locations than Gong Cha, Kung Fu Tea, or CoCo Fresh Tea</li>
                  <li>Branding and store design feels dated at older SGV locations</li>
                  <li>QQ drinks can feel heavy for lighter boba drinkers who want a simpler cup</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Chatime earns its global reputation in Los Angeles by delivering a mid-tier chain experience that is genuinely more interesting than most of its direct competitors. The QQ Milk Tea is a concept worth knowing: if you have never had a multi-topping boba drink done well, Chatime is the place to start. The Ruby Red Tea and Wintermelon Milk Tea give the chain two more menu items with genuine identity beyond the generic chain formula.
            </p>
            <p>
              At 4.2 out of 5, Chatime sits alongside{" "}
              <Link href="/gong-cha-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Gong Cha
              </Link>{" "}
              as the best mid-tier international chain option in Los Angeles. It is a step below the craft programs at Chicha San Chen, Boba Guys, and Sunright, but a clear step above the budget tier of CoCo Fresh Tea and It&apos;s Boba Time on quality and menu interest. For SGV visitors who want a reliable, interesting chain stop between premium shop visits, Chatime is the right choice.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the QQ Milk Tea on your first visit to experience what makes Chatime distinct from every other chain. The combination of pearls, pudding, and grass jelly is the point.</li>
                <li>The Ruby Red Tea at 50% sugar is one of the most interesting fruit teas served by a chain in the SGV. Let the hibiscus tartness come through rather than masking it with sweetness.</li>
                <li>Wintermelon Milk Tea at 70% sugar is the underrated order for visitors who have had every standard milk tea. It tastes distinctly different from black or oolong milk tea in a way that rewards the curious.</li>
                <li>SGV locations (Alhambra, Rowland Heights) are the most consistent. Start there before visiting the South Bay location.</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-[#1A202C] mt-10">Chatime FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the best drink at Chatime?",
                  a: "The QQ Milk Tea is Chatime's most distinctive order, combining pearls, pudding, and grass jelly in one cup. The Ruby Red Tea is the best fruit tea on the menu and the chain's most visually recognizable drink. For a classic starting point, the Pearl Milk Tea tests the chain's fundamentals cleanly."
                },
                {
                  q: "How much does Chatime cost in Los Angeles?",
                  a: "Most Chatime drinks run $6 to $7.50 for a medium. The QQ Milk Tea with multiple toppings is around $7.50. The Brown Sugar Boba Milk runs $7.25. Chatime is priced similarly to Gong Cha and slightly above CoCo Fresh Tea, placing it solidly in the mid-tier chain range."
                },
                {
                  q: "What are the QQ drinks at Chatime?",
                  a: "QQ is a Taiwanese term for the chewy, springy texture of well-made tapioca and jelly toppings. Chatime's QQ Milk Tea combines pearls, pudding, and grass jelly in one drink, giving you the full range of the chain's topping program. It is Chatime's flagship drink and the order that sets the chain apart from most competitors."
                },
                {
                  q: "What sugar level should I order at Chatime?",
                  a: "70% sugar is the right default for most milk teas, including the QQ Milk Tea and Pearl Milk Tea. For the Ruby Red Tea and other fruit teas, 50% lets the natural tea flavors come through more clearly. Avoid 100% sugar on your first visit as the standard recipes are already calibrated for sweetness."
                },
                {
                  q: "Where is Chatime in Los Angeles?",
                  a: "Chatime has multiple LA locations concentrated in the San Gabriel Valley, including Alhambra, Rowland Heights, Arcadia, and Hacienda Heights. There is also a location in Torrance in the South Bay. The Alhambra and Rowland Heights locations are the most established and consistent."
                },
                {
                  q: "Is Chatime better than Gong Cha?",
                  a: "They are comparable in overall quality. Gong Cha has a stronger tea base with its High Mountain Oolong program. Chatime has a more interesting topping program, particularly the QQ multi-topping drinks and the Ruby Red Tea. For everyday boba, either is an excellent choice. The best call depends on whether you prioritize the tea itself (Gong Cha) or the topping and menu variety (Chatime)."
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
                  { label: "Topping Quality", score: 9 },
                  { label: "Menu Range", score: 8 },
                  { label: "Value", score: 8 },
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
              <p className="text-5xl font-bold">4.2/5</p>
              <p className="text-blue-100 text-xs mt-1">Best QQ topping program among LA chains</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Chain Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Founded:</span> 2005, Taipei, Taiwan</p>
                <p><span className="font-semibold">Global locations:</span> 1,500+ in 30+ countries</p>
                <p><span className="font-semibold">Price:</span> $6 to $8 per drink</p>
                <p><span className="font-semibold">Best drink:</span> QQ Milk Tea</p>
                <p><span className="font-semibold">Can&apos;t miss:</span> Ruby Red Tea, Wintermelon Milk Tea</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Compare Mid-Tier Chains</h3>
              <div className="space-y-2">
                <Link href="/gong-cha-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Gong Cha Review &rarr;
                </Link>
                <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Kung Fu Tea Review &rarr;
                </Link>
                <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Happy Lemon Review &rarr;
                </Link>
                <Link href="/feng-cha-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Feng Cha Review &rarr;
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
