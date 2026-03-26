import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milksha Westwood Review: Taiwan's No-Powder Boba Brand Lands in LA | Justin Sather",
  description: "Milksha Westwood review. Taiwan's largest fresh milk tea brand opened its first US store at 1009 Broxton Ave in Westwood Village. Complete menu guide, prices, signature drinks, and what to order. Personally visited, zero sponsorships.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Milksha Westwood Review: Taiwan's No-Powder Boba Brand Lands in LA",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.6",
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
    "name": "Milksha Westwood",
    "servesCuisine": "Bubble Tea",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1009 Broxton Ave",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90024",
      "addressCountry": "US"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Justin Sather, Los Angeles",
    "url": "https://justinsather.com"
  },
  "datePublished": "2026-03-26",
  "url": "https://justinsather.com/milksha-westwood-review/"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should I order at Milksha Westwood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Fresh Taro Milk is the best order at Milksha Westwood. It uses real taro from Dajia, Taiwan, steamed and hand-mashed in-store for a flavor that is entirely different from the artificial taro most chains serve. The Campus Crush is a Westwood-exclusive limited drink and worth ordering at least once. For classic milk tea, the Earl Grey Latte with Honey Pearl is the signature option. The Azuki Matcha Milk is the best choice for matcha drinkers."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Milksha Campus Crush drink?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Campus Crush is a limited-edition drink exclusive to the Milksha Westwood location. It is a two-tone blend of golden Philippine mango and sky-blue cotton candy, designed specifically for the UCLA and Westwood Village community. It is only available at 1009 Broxton Ave, not at any other Milksha location worldwide."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Milksha Westwood cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Milksha Westwood drinks range from approximately $7 to $9.50 depending on drink and toppings. This puts Milksha in the premium tier for Westwood boba, above Sharetea and Just Boba Tea House, and comparable to Junbi Matcha. The quality justifies the price: Milksha uses fresh milk rather than powder, real fruit, and hand-crafted ingredients across the menu."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Milksha in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Milksha's only Los Angeles location is at 1009 Broxton Ave, Los Angeles, CA 90024 in Westwood Village, approximately half a block from UCLA's main entrance on Broxton. This is also Milksha's first US storefront, which opened in fall 2025. Milksha has additional US locations at Great Mall in Milpitas, CA and in Ontario, CA."
      }
    },
    {
      "@type": "Question",
      "name": "Does Milksha use powder or fresh milk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Milksha uses fresh milk, not powder. This is the brand's defining philosophy and the source of the name. No-powder policy means every milk drink is made with real dairy, which produces a creamier texture and cleaner flavor than powder-based alternatives. The pearls are also cooked fresh each day through a 90-plus minute cooking process. This approach separates Milksha from the majority of boba chains in Los Angeles."
      }
    },
    {
      "@type": "Question",
      "name": "Is Milksha Westwood worth it compared to other boba near UCLA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Milksha is the best boba shop in Westwood for ingredient quality. The no-powder policy, fresh-cooked pearls, and Taiwan-sourced ingredients produce drinks that are noticeably better than most chains near UCLA. It costs more than Sharetea or Just Boba Tea House, but the quality difference is real. If you drink boba regularly and care about what is in your cup, Milksha is the best option within walking distance of campus."
      }
    }
  ]
};

export default function MilkshaWestwoodReviewPage() {
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
            <Link href="/best-boba-westwood/" className="text-[#2B6CB0] text-sm hover:text-[#215387] transition-colors">
              &larr; Back to Best Boba Westwood
            </Link>
          </div>
          <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Shop Review
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4 leading-tight">
            Milksha Westwood Review: Taiwan&apos;s No-Powder Boba Brand Opens Its First US Store Near UCLA
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/assets/team/justin-sather-avatar.jpg" alt="Justin Sather" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1A202C]">Justin Sather</p>
              <p className="text-xs text-[#718096]">Multiple visits, paid out of pocket &bull; Updated Q1 2026</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm mb-6">
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4.6/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">1009 Broxton Ave, Westwood</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">No-Powder Policy</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_scene_lifestyle.png"
            alt="Milksha Westwood boba Broxton Ave Los Angeles"
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
            { label: "Address", value: "1009 Broxton Ave, Los Angeles, CA 90024" },
            { label: "Hours", value: "Daily 11am to 10pm (verify on Google)" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Fresh Taro Milk, Campus Crush, Earl Grey Latte with Honey Pearl" },
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
        <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Milksha Menu: What to Order and Prices</h2>
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
                { drink: "Fresh Taro Milk", price: "$8.50", notes: "Real taro from Dajia, Taiwan, steamed and hand-mashed in-store. The most authentic taro milk drink in Westwood by a significant margin" },
                { drink: "Earl Grey Latte with Honey Pearl", price: "$8.00", notes: "Signature drink. Bergamot Earl Grey tea with fresh milk and house honey pearls. Clean and aromatic with no artificial sweetness" },
                { drink: "Azuki Matcha Milk", price: "$8.50", notes: "Japanese matcha with red bean and fresh milk. The azuki adds earthiness and texture that sets this apart from basic matcha lattes" },
                { drink: "Campus Crush", price: "$8.50", notes: "Westwood-exclusive. Two-tone Philippine mango and cotton candy blend. A limited item designed specifically for the UCLA community" },
                { drink: "Mango Lemon Green Tea", price: "$7.50", notes: "Real Philippine mango juice with 100% lemon and jasmine green tea. Brighter and more acidic than most fruit teas. No syrup shortcut here" },
                { drink: "Cloudy Cream Uji Matcha", price: "$8.50", notes: "Ceremonial-grade Uji matcha with Milksha's signature cloudy cream. More refined than standard cheese foam, lighter texture" },
                { drink: "Valrhona Cocoa Milk", price: "$8.00", notes: "100% Valrhona cocoa with fresh milk. Deeply flavored and not overly sweet. Worth ordering if you want something entirely different" },
                { drink: "Refreshing Orange Green Tea", price: "$7.00", notes: "Real orange juice with jasmine green tea, no flavor concentrate. One of the cleanest fruit tea options in Westwood" },
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
        <p className="text-xs text-[#718096] mt-2">Prices are approximate. Toppings are available at additional cost. Campus Crush availability may vary.</p>
      </section>

      {/* Review content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main review */}
          <div className="lg:col-span-2 space-y-6 text-[#4A5568] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1A202C]">The Verdict</h2>
            <p>
              Milksha is not just another boba shop in Westwood Village. It is the first US location of a Taiwanese chain with over 300 stores worldwide, built on a philosophy that most American boba drinkers have never experienced: every drink made with real fresh milk, zero powder, and ingredients sourced directly from Taiwan. The result is the best boba you can get within walking distance of UCLA, and one of the most thoughtfully made options on the entire Westside.
            </p>
            <p>
              For context, most boba chains in the US use tea powder, non-dairy creamer, and flavor concentrates. It is fast, cheap, and consistent. Milksha does the opposite: fresh dairy milk, brewed tea, real fruit, and pearls cooked fresh each day in a process that takes over 90 minutes. You taste the difference immediately. The Fresh Taro Milk tastes like actual taro. The Earl Grey Latte tastes like actual Earl Grey. This is what the format was supposed to be when it was invented in Taiwan in the 1980s, before it became a mass-market commodity.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Milksha Story: Why This Shop Matters</h2>
            <p>
              Milksha was founded in Taiwan in 2007 with a single principle: no powder. At the time, the Taiwanese boba industry was consolidating around mass-production methods, and Milksha positioned itself as the alternative for drinkers who wanted the real thing. The brand grew to over 300 locations across Taiwan and Asia on that positioning alone.
            </p>
            <p>
              The decision to open the first US location in Westwood Village near UCLA was deliberate. Westwood has the highest concentration of Taiwanese-American students in Los Angeles, a customer base that grew up with Milksha back in Taiwan and has been waiting for the brand to arrive. The 1009 Broxton Ave location opened in fall 2025 and has drawn lines from opening day, particularly from students who recognize the brand from home.
            </p>
            <p>
              This is relevant for non-Taiwanese drinkers because it signals something about ingredient standards. When a brand famous in its home market for doing things properly opens its first US location, it is not cutting corners to accommodate American palates. The Westwood menu reflects the full Taiwan Milksha experience.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The No-Powder Policy: What It Actually Means</h2>
            <p>
              The practical impact of Milksha&apos;s no-powder policy shows up in three ways. First, the milk drinks have real dairy texture, not the thin, slightly waxy mouthfeel that non-dairy creamer produces. The Fresh Taro Milk is creamy in the way a fresh taro smoothie is creamy, not in the way a powder-based taro drink simulates creaminess.
            </p>
            <p>
              Second, the flavor profiles are more complex. Real milk has fat, protein, and natural sweetness that amplifies the tea or fruit notes in a drink. Powder-based drinks flatten this, producing a one-dimensional sweetness that tastes the same regardless of what flavor is listed on the cup. At Milksha, the Earl Grey Latte actually tastes like bergamot-forward Earl Grey tea with milk. The Valrhona Cocoa Milk actually tastes like Valrhona chocolate.
            </p>
            <p>
              Third, the shelf life is shorter, which means the shop has to operate with higher turnover and fresher batches. The pearls cooked fresh each day via a 90-plus minute process are a direct result of this philosophy. There are no shortcuts in the back kitchen because the product cannot accommodate shortcuts without failing.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Best Drinks at Milksha Westwood</h2>
            <p>
              The <strong>Fresh Taro Milk</strong> is the drink that best demonstrates what Milksha does that no other boba shop in Westwood can replicate. The taro is sourced from Dajia in Taiwan, which is the region known for producing the highest-quality taro root. It is steamed and hand-mashed in-store, which means every batch has slight natural variation in texture and sweetness depending on the individual root. The result tastes genuinely of taro: earthy, slightly sweet, faintly floral. Compare this to any other taro milk tea in LA and the difference is immediate.
            </p>
            <p>
              The <strong>Campus Crush</strong> is the Westwood-exclusive item and worth ordering on that basis alone. It is a two-tone drink built from golden Philippine mango and sky-blue cotton candy, designed specifically for the UCLA community. The visual presentation is striking, but the flavor holds up: the mango is real and bright, and the cotton candy element adds sweetness and color without overpowering the fruit. This drink does not exist at any other Milksha location in the world.
            </p>
            <p>
              The <strong>Earl Grey Latte with Honey Pearl</strong> is the signature that shows Milksha&apos;s approach to classic milk tea. The Earl Grey base is properly aromatic, the fresh milk gives it richness, and the honey pearl adds sweetness without the cloying quality of standard caramel-coated tapioca. This is the best classic milk tea in Westwood, and one of the better ones on the Westside generally. Compare it directly with the Three Mates at{" "}
              <Link href="/sharetea-westwood-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sharetea
              </Link>{" "}
              to understand what fresh milk versus non-dairy creamer produces in a finished drink.
            </p>
            <p>
              The <strong>Mango Lemon Green Tea</strong> is the best non-dairy option on the menu for people who want something lighter. Real Philippine mango juice and 100% lemon juice with jasmine green tea produces a drink that is refreshing and acidic in the way a well-made fruit tea should be. No flavor concentrate, no fake brightness from citric acid additives. This is among the cleaner fruit teas available in Los Angeles.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Milksha fresh taro milk boba Westwood Village"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Location and Atmosphere</h2>
            <p>
              Milksha is at 1009 Broxton Ave, in the heart of Westwood Village. Broxton is the main commercial street of the village and the location places Milksha within half a block of the UCLA campus entrance. The closest comparable shop is{" "}
              <Link href="/sharetea-westwood-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sharetea Westwood
              </Link>{" "}
              at 1036 Westwood Blvd, literally around the corner.
            </p>
            <p>
              The store design reflects the Taiwan brand identity: clean, modern, and minimalist with a focus on the drinks. It is a smaller space relative to the demand it generates, so peak times (lunch and after-class hours in late afternoon) can mean a wait. The wait is worth it. For the best experience, visit mid-morning or weekday evenings when the line is manageable and the pearl batches are at their freshest.
            </p>
            <p>
              The neighborhood context matters: Westwood Village has a boba scene, but it has lacked a truly premium option. Junbi Matcha does high-quality matcha; Just Boba Tea House does solid value boba; Sharetea covers the mainstream menu. Milksha fills the gap at the top of the market, which is the slot the neighborhood needed. Drinkers who were previously making the drive to Koreatown or the SGV for quality boba now have an option within walking distance of campus.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Milksha Westwood is priced at the premium end for the neighborhood, with drinks ranging from approximately $7 to $9.50. This is above{" "}
              <Link href="/sharetea-westwood-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sharetea
              </Link>{" "}
              ($7 to $9) and significantly above Just Boba Tea House ($5 to $7). It is comparable to{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>{" "}
              ($7 to $10) in Culver City and{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>{" "}
              ($7 to $9) in the SGV.
            </p>
            <p>
              For students on a budget, the pricing is a consideration. But the quality is real: these are not $8 drinks made with powder and concentrate. If you are buying boba twice a week and care about what is in the cup, Milksha is worth adjusting for. The Fresh Taro Milk at $8.50 delivers more actual flavor and ingredient quality than most $7 drinks at other Westwood shops.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How Milksha Compares to Other Westwood Boba</h2>
            <p>
              Within Westwood, Milksha is the clear leader on ingredient quality. The no-powder policy alone separates it from every other shop in the neighborhood. Junbi Matcha is the strongest competition for specialty drinks, with seriously sourced Japanese matcha that competes with Milksha&apos;s matcha offerings. For classic milk tea and fresh milk drinks, Milksha has no peer in the area.
            </p>
            <p>
              The more interesting comparison is with the premium chains elsewhere in LA. Against{" "}
              <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sunright Tea Studio
              </Link>
              , which sources single-origin Taiwanese teas, Milksha wins on ingredient freshness and milk quality while Sunright wins on tea variety and origin specificity. Against Boba Guys, Milksha wins on ingredient authenticity (Taiwan-sourced versus California-sourced), and Boba Guys wins on brand story and local community roots. Against Chicha San Chen in the SGV, Milksha wins on milk drink quality and Chicha wins on traditional tea preparation and World Tea Championship credentials.
            </p>
            <p>
              For the Westside, Milksha is the best premium boba option available without making a significant drive. That geographic advantage matters for UCLA students and Westwood residents who want quality boba on demand.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>No-powder policy produces noticeably better milk drink quality than every other Westwood option</li>
                  <li>Campus Crush is a genuinely unique Westwood-exclusive drink worth experiencing</li>
                  <li>Fresh Taro Milk uses real Dajia taro, steamed and mashed in-store</li>
                  <li>Pearls cooked fresh daily via a 90-plus minute process</li>
                  <li>Real fruit ingredients, not flavor concentrates, in all fruit teas</li>
                  <li>Valrhona cocoa and Uji matcha sourcing reflects serious ingredient commitment</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Premium pricing ($7 to $9.50) is a stretch for daily student budgets</li>
                  <li>Small space means waits during peak hours (afternoon on class days)</li>
                  <li>Only one LA location, so not accessible for non-Westside visits</li>
                  <li>Campus Crush is limited availability and may not always be on menu</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Milksha Westwood is the best boba shop near UCLA and the most important new boba opening on the Westside in years. The no-powder philosophy produces a measurably different drink, the Taiwan-sourced ingredients are the real thing, and the Campus Crush gives this specific location a reason to visit that no other Milksha in the world can offer. The Fresh Taro Milk alone is worth making the trip to Broxton Ave.
            </p>
            <p>
              A 4.6 out of 5 reflects a shop that executes its philosophy with genuine consistency. The only reasons it does not rank higher are the premium pricing and limited Westwood capacity. For quality per dollar it is not the best deal in Westwood. For quality per cup it is the best option in the neighborhood, full stop. If you are near UCLA and want boba that tastes like it was made with actual thought, Milksha is where you go.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the Fresh Taro Milk on your first visit. It is the drink that most clearly demonstrates the no-powder difference. The taro flavor is earthy and specific in a way that powder-based taro simply cannot replicate.</li>
                <li>Ask about the Campus Crush availability before ordering. It is listed as a limited-edition item and may sell out on busy days. If it is available, order it. It is the only drink in the world you can only get at this location.</li>
                <li>Visit mid-morning or weekday evenings for the shortest waits. Lunch and the 3 to 5 pm post-class window are the busiest periods, particularly on Tuesdays and Thursdays when UCLA class schedules cluster.</li>
                <li>The honey pearls in the Earl Grey Latte are the best topping on the menu. They are less aggressively sweet than standard caramel-coated tapioca and hold their texture better over the life of the drink.</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-[#1A202C] mt-10">Milksha Westwood FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What should I order at Milksha Westwood?",
                  a: "The Fresh Taro Milk is the best drink to order first. Real taro from Dajia, Taiwan, mashed in-store, produces a flavor that is entirely different from artificial taro powder. The Earl Grey Latte with Honey Pearl is the best classic milk tea option. The Campus Crush is a Westwood-exclusive limited drink worth experiencing."
                },
                {
                  q: "What is the Milksha Campus Crush?",
                  a: "The Campus Crush is a limited-edition drink exclusive to the Westwood location, not available at any other Milksha worldwide. It is a two-tone blend of golden Philippine mango and sky-blue cotton candy. Availability varies, so ask when you arrive."
                },
                {
                  q: "Does Milksha use real milk or powder?",
                  a: "Milksha uses real fresh milk, not powder. This is the brand's founding philosophy and the source of its name. The no-powder policy applies across the entire menu. Pearls are also cooked fresh each day through a process that takes over 90 minutes."
                },
                {
                  q: "Where is Milksha Westwood located?",
                  a: "Milksha Westwood is at 1009 Broxton Ave, Los Angeles, CA 90024, in Westwood Village approximately half a block from the UCLA main campus entrance. This is Milksha's first US storefront, opened in fall 2025."
                },
                {
                  q: "How much does Milksha cost?",
                  a: "Milksha drinks range from approximately $7 to $9.50. This is the premium tier for Westwood boba but comparable to other premium LA chains like Boba Guys and Chicha San Chen. The higher cost reflects real fresh milk, Taiwan-sourced taro, Valrhona cocoa, and Uji matcha in the ingredients."
                },
                {
                  q: "Is Milksha better than Sharetea Westwood?",
                  a: "For milk-based drinks, yes. Milksha's no-powder policy produces noticeably better flavor and texture than Sharetea, which uses standard chain ingredients. For menu variety and price, Sharetea is the better option. For the best drink quality near UCLA, Milksha is the clear choice."
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
                  { label: "Ingredient Quality", score: 10 },
                  { label: "Pearl Quality", score: 9 },
                  { label: "Value", score: 7 },
                  { label: "Menu Range", score: 8 },
                  { label: "Uniqueness", score: 10 },
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
              <p className="text-5xl font-bold">4.6/5</p>
              <p className="text-blue-100 text-xs mt-1">Best boba near UCLA. Best ingredient quality on the Westside.</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Shop Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Address:</span> 1009 Broxton Ave, LA 90024</p>
                <p><span className="font-semibold">Opened:</span> Fall 2025 (first US location)</p>
                <p><span className="font-semibold">Price:</span> $7 to $9.50 per drink</p>
                <p><span className="font-semibold">Best drink:</span> Fresh Taro Milk</p>
                <p><span className="font-semibold">Exclusive:</span> Campus Crush (Westwood only)</p>
                <p><span className="font-semibold">Policy:</span> No powder, fresh milk only</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More Westwood Boba</h3>
              <div className="space-y-2">
                <Link href="/best-boba-westwood/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Boba Westwood Guide &rarr;
                </Link>
                <Link href="/sharetea-westwood-review/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Sharetea Westwood Review &rarr;
                </Link>
                <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Boba Guys Review &rarr;
                </Link>
                <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Sunright Tea Studio Review &rarr;
                </Link>
                <Link href="/best-boba-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Boba LA Guide &rarr;
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
