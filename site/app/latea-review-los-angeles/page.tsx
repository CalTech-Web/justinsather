import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTea Review: Complete Menu Guide & LA Locations | Justin Sather",
  description: "LaTea review covering the full menu, best drinks, prices, and LA locations including Rowland Heights and Koreatown. Personally visited, zero sponsorships. Traditional Taiwanese milk tea done right.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "LaTea Review: Complete Menu Guide & LA Locations",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.3",
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
    "name": "LaTea",
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
  "url": "https://justinsather.com/latea-review-los-angeles/"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best drink at LaTea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Classic Milk Tea is the best starting point at LaTea. It uses a traditional Taiwanese black tea blend that produces a clean, malty flavor that more modern chains have moved away from. The Taro Milk Tea and Honey Milk Tea are also standout orders. For pearls, LaTea cooks its own tapioca fresh, which gives the classic drinks a more authentic texture than pre-packaged alternatives."
      }
    },
    {
      "@type": "Question",
      "name": "How much does LaTea cost in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LaTea drinks in Los Angeles range from $5.50 to $7.50 depending on size and toppings. Most standard milk teas run $5.50 to $6.50 for a medium. Toppings cost $0.50 to $0.75 extra. LaTea is priced at the value end of the mid-range for LA boba, offering better tea quality than budget chains like It's Boba Time while remaining more affordable than premium shops like Boba Guys or Chicha San Chen."
      }
    },
    {
      "@type": "Question",
      "name": "Where are LaTea locations in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LaTea has multiple locations in the Los Angeles area concentrated in the San Gabriel Valley, including Rowland Heights and the Alhambra area. The chain also has Koreatown-area locations accessible from central LA. The San Gabriel Valley locations see the highest traffic and serve a customer base with high standards for authentic Taiwanese tea."
      }
    },
    {
      "@type": "Question",
      "name": "What does LaTea stand for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LaTea is a Taiwanese-origin bubble tea chain established in Southern California. The name combines LA (Los Angeles) with tea, reflecting the brand's identity as a tea-focused shop serving the LA market. The chain is rooted in traditional Taiwanese tea preparation methods."
      }
    },
    {
      "@type": "Question",
      "name": "Is LaTea better than other boba chains in LA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LaTea stands out for its traditional Taiwanese milk tea approach. It uses a real brewed black tea base rather than tea powder, which gives the classic drinks a more authentic flavor profile than most chain competitors. For drinkers who want traditional Taiwanese-style milk tea, LaTea is among the best options in LA at its price point. It is not as premium as Chicha San Chen or Sunright Tea Studio, but it outperforms most budget chains on tea quality."
      }
    },
    {
      "@type": "Question",
      "name": "Does LaTea have good boba pearls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. LaTea makes tapioca pearls fresh in-house, which gives them a better chew and more authentic texture than shops using pre-packaged pearls. The pearl quality is one of LaTea's genuine differentiators from chain competitors at a similar price point. The classic black pearls cooked in brown sugar are the best topping."
      }
    }
  ]
};

export default function LaTeaReviewPage() {
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
            LaTea Review: Traditional Taiwanese Milk Tea Done Right in Los Angeles
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
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4.3/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">SGV &amp; Koreatown Locations</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Traditional Taiwanese Style</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/latea_drink.png"
            alt="LaTea boba milk tea Los Angeles"
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
            { label: "Locations", value: "Rowland Heights, Alhambra, Koreatown area" },
            { label: "Hours", value: "Daily 11am to 9:30pm (varies by location)" },
            { label: "Price Range", value: "$" },
            { label: "Best For", value: "Classic Milk Tea, Taro Milk Tea, fresh-cooked pearls" },
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
        <h2 className="text-2xl font-bold text-[#1A202C] mb-4">LaTea Menu: Prices and What to Order</h2>
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
                { drink: "Classic Milk Tea", price: "$5.75", notes: "The flagship. Brewed black tea with fresh milk, clean and malty without artificial sweetness" },
                { drink: "Taro Milk Tea", price: "$6.25", notes: "Real taro root, slightly earthy and naturally sweet. One of the better taro milk teas in the SGV" },
                { drink: "Honey Milk Tea", price: "$5.75", notes: "Honey instead of syrup gives a rounded sweetness with faint floral note. Lighter than Classic" },
                { drink: "Brown Sugar Milk Tea", price: "$6.50", notes: "Brown sugar caramel swirled into fresh milk tea. Satisfying version of the now-classic format" },
                { drink: "Jasmine Green Milk Tea", price: "$5.75", notes: "Jasmine fragrance comes through cleanly. A good option for those who prefer lighter, more floral tea" },
                { drink: "Matcha Latte", price: "$6.25", notes: "Ceremonial grade matcha. More mellow than single-origin shops but a solid everyday option" },
                { drink: "Passion Fruit Green Tea", price: "$5.50", notes: "Refreshing and tart, ideal for warm weather. Lighter option for those avoiding dairy" },
                { drink: "Winter Melon Tea", price: "$5.50", notes: "Traditional Taiwanese winter melon with a naturally sweet, herbal character. Often overlooked but excellent" },
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
        <p className="text-xs text-[#718096] mt-2">Prices are for medium size. Large adds $0.50. Toppings are $0.50 to $0.75 each.</p>
      </section>

      {/* Review content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main review */}
          <div className="lg:col-span-2 space-y-6 text-[#4A5568] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1A202C]">The Verdict</h2>
            <p>
              LaTea is what happens when a boba shop stays true to traditional Taiwanese tea preparation instead of chasing every new trend. While most chains have moved toward brown sugar spectacle and cheese foam novelties, LaTea keeps its focus on the fundamentals: a properly brewed black tea base, fresh-cooked tapioca, and honest flavor without shortcuts. The result is a shop that rewards drinkers who actually care about what is in their cup.
            </p>
            <p>
              In the context of the LA boba scene, LaTea occupies a specific niche. It is not as visually dramatic as{" "}
              <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tiger Sugar
              </Link>
              , not as globally famous as{" "}
              <Link href="/gong-cha-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Gong Cha
              </Link>
              , and not as premium as{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>
              . What it is: the most authentically traditional Taiwanese milk tea you can find at a value price in Los Angeles. For drinkers who grew up on this style of tea or who want the real thing rather than the modern adaptation, LaTea is the right call.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes LaTea Worth Visiting</h2>
            <p>
              The single most important thing LaTea does right is the tea base. Most chain boba shops use tea powder or low-grade tea extract, which produces a flat, one-dimensional flavor that tastes the same regardless of drink variety. LaTea brews fresh black tea for its classic milk tea drinks. The difference is clear: the Classic Milk Tea has a genuine malty backbone, a slight natural astringency, and a clean finish that powder-based chains cannot replicate.
            </p>
            <p>
              The second differentiator is the tapioca. LaTea cooks its pearls fresh in-house, which gives them a chew that is firm without being rubbery, and a slight sweetness from the brown sugar cooking liquid. Fresh pearls do not stay fresh for more than a few hours, which means the quality depends on timing, but at LaTea the pearls are consistently good across multiple visits at different times of day.
            </p>
            <p>
              The third factor is the price. Most drinks run $5.50 to $6.50, which places LaTea below the midpoint for LA boba even while delivering tea quality that chains charging $7 to $8 cannot match. For the quality-to-price ratio, LaTea is one of the best values in the city.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Best Drinks at LaTea</h2>
            <p>
              The <strong>Classic Milk Tea</strong> is the order that best demonstrates what LaTea does differently. Brewed black tea, fresh milk, and a measured amount of sweetener. No powder, no artificial flavoring, no shortcuts. The tea character is present throughout the drink rather than being masked by sugar, which is the defining mark of a properly made Taiwanese milk tea. Order at 70% sugar with fresh pearls to experience the full range of what this drink can be.
            </p>
            <p>
              The <strong>Taro Milk Tea</strong> is the best flavor beyond the classic. LaTea uses real taro root in the preparation, which produces the slightly earthy, naturally sweet flavor that defines good taro milk tea. Compare this directly with the taro options at{" "}
              <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Kung Fu Tea
              </Link>{" "}
              or{" "}
              <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Happy Lemon
              </Link>{" "}
              and the difference in quality is immediately apparent.
            </p>
            <p>
              The <strong>Winter Melon Tea</strong> is the most underrated item on the menu. Winter melon is a traditional Taiwanese beverage made from the winter melon gourd, which has a naturally sweet, subtle herbal flavor with none of the heaviness of milk teas. It is refreshing, lightly complex, and genuinely different from anything most LA boba shops offer. For visitors who want to try something they cannot get at chain competitors, this is the order.
            </p>
            <p>
              The <strong>Honey Milk Tea</strong> is worth trying for its sweetener choice. LaTea uses honey instead of cane syrup, which gives the drink a rounded, slightly floral sweetness with more nuance than a standard sugar-sweetened milk tea. The honey does not overpower the tea base, which keeps the drink light and drinkable even at higher sugar levels.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/latea_drink.png"
                alt="LaTea classic milk tea with pearls Los Angeles"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">LaTea LA Locations: Where to Go</h2>
            <p>
              LaTea is primarily a San Gabriel Valley chain, with its strongest presence in Rowland Heights and the Alhambra area. These locations serve a customer base with deep familiarity with traditional Taiwanese tea, which keeps quality standards high. The SGV locations are where LaTea performs best: high traffic means pearls are always fresh, staff know the menu, and the overall experience is closest to what the chain delivers at its peak.
            </p>
            <p>
              For visitors from central LA, LaTea has a Koreatown-area presence that makes it accessible without a trip to the SGV. If you are in Koreatown doing a boba crawl that already covers{" "}
              <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tiger Sugar
              </Link>
              ,{" "}
              <Link href="/the-alley-boba-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                The Alley
              </Link>
              , and the other signature shops in the neighborhood, LaTea provides an interesting contrast: traditional preparation versus modern presentation. That comparison makes for an informative visit.
            </p>
            <p>
              For the full LaTea experience, the Rowland Heights location is the right call. It sits in the heart of the{" "}
              <Link href="/best-boba-san-gabriel-valley/" className="text-[#2B6CB0] hover:text-[#215387]">
                SGV boba corridor
              </Link>
              , within easy distance of Chicha San Chen, Xing Fu Tang,{" "}
              <Link href="/tp-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                TP Tea
              </Link>
              , and other SGV shops. A trip to this area for a comparison of traditional versus modern Taiwanese tea chains is one of the more educational boba experiences LA offers.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              LaTea is one of the better-value options in the LA boba market. Drinks run $5.50 to $7.50, with most milk teas landing at $5.75 to $6.50. Toppings add $0.50 to $0.75 each. Compare this to{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>{" "}
              ($7 to $10),{" "}
              <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sunright Tea Studio
              </Link>{" "}
              ($6 to $8), or Chicha San Chen ($7 to $9). LaTea delivers genuine tea quality at a price that is accessible for daily boba drinkers, which is a meaningful distinction in a city where premium shops have pushed prices north of $8 for a single drink.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How LaTea Compares</h2>
            <p>
              LaTea sits in an interesting position in the LA boba hierarchy. It is better than most budget chains on tea quality but does not have the origin story or single-variety sourcing credentials of premium shops like Chicha San Chen or Sunright. The closest comparison is{" "}
              <Link href="/tp-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                TP Tea
              </Link>
              , which is also a traditional Taiwanese chain (affiliated with Ten Ren Tea Company) operating at a similar price point. Both chains prioritize the classic Taiwanese milk tea format over modern spectacle.
            </p>
            <p>
              Against TP Tea directly, LaTea has a slight edge on atmosphere and the fresh-cooked pearl program, while TP Tea has the more visible Ten Ren origin story. Against{" "}
              <Link href="/half-and-half-tea-express-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Half and Half Tea Express
              </Link>
              , LaTea is more affordable and more traditional, while Half and Half offers a more modern experience with the cold-brew technique. Against Gong Cha, LaTea is more authentically traditional and better priced, though Gong Cha has wider LA coverage.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Brewed black tea base, not powder, delivers authentic milk tea flavor</li>
                  <li>Fresh-cooked tapioca pearls with proper chew and brown sugar sweetness</li>
                  <li>Winter Melon Tea is a genuinely unique item not offered at most competitors</li>
                  <li>Best value per dollar for quality milk tea in the SGV</li>
                  <li>Honey Milk Tea uses real honey rather than standard sugar syrup</li>
                  <li>Traditional Taiwanese style preserved without chasing trends</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Limited LA presence compared to major chains (fewer locations)</li>
                  <li>Menu is intentionally narrow, less variety than chains like Gong Cha</li>
                  <li>No cheese foam or specialty topping programs</li>
                  <li>Modern trend-forward drinks (tiger stripes, etc.) are not a focus</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              LaTea is the right choice for boba drinkers who want the real Taiwanese milk tea experience without paying premium prices. The brewed black tea base, fresh-cooked pearls, and traditional menu approach deliver a drink that is more honest than most of what LA&apos;s modern boba chains produce. In a market dominated by Instagram-optimized drinks and branded presentation, LaTea&apos;s commitment to traditional craft stands out.
            </p>
            <p>
              A 4.3 out of 5 reflects a shop that genuinely excels at what it sets out to do. The limited menu and smaller LA footprint keep it from ranking higher, but for classic milk tea in the SGV, LaTea is one of the best options in the city. If you are in Rowland Heights or Alhambra and want traditional Taiwanese milk tea done right, LaTea is the order.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the Classic Milk Tea at 70% sugar with fresh pearls on your first visit. This is the drink that shows what makes LaTea different from chains using tea powder. The brewed tea character is clearest at this sweetness level.</li>
                <li>Try the Winter Melon Tea if you have never had it before. It is one of the most traditional Taiwanese beverages and one of the hardest to find at LA boba shops. LaTea&apos;s version is a clean, honest example of the drink.</li>
                <li>Go during lunch or early afternoon when the pearl batches are most likely to be freshly cooked. Late evening visits closer to closing time can mean older pearls that have lost their optimal chew.</li>
                <li>LaTea pairs well with a visit to Chicha San Chen or TP Tea on the same trip for a direct comparison of traditional Taiwanese tea approaches at different price points.</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-[#1A202C] mt-10">LaTea FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the best drink at LaTea?",
                  a: "The Classic Milk Tea is the best starting point. It uses a brewed black tea base that delivers an authentic Taiwanese milk tea flavor most chains cannot match with powder. The Taro Milk Tea and Winter Melon Tea are also excellent. Order with fresh pearls at 70% sugar."
                },
                {
                  q: "How much does LaTea cost?",
                  a: "Most LaTea drinks run $5.50 to $6.50 for a medium. Toppings add $0.50 to $0.75. LaTea is one of the best-value boba options in LA for the quality delivered, more affordable than Boba Guys, Chicha San Chen, and Sunright while delivering better tea quality than budget chains."
                },
                {
                  q: "Does LaTea use fresh or powder tea?",
                  a: "LaTea uses brewed black tea for its classic milk tea drinks, not tea powder. This is the key differentiator that makes the Classic Milk Tea and Honey Milk Tea taste like genuine Taiwanese milk tea rather than a sweetened tea-flavored beverage."
                },
                {
                  q: "Where is LaTea in Los Angeles?",
                  a: "LaTea has locations in the San Gabriel Valley including Rowland Heights and the Alhambra area, as well as a Koreatown-area location accessible from central LA. The SGV locations see the highest traffic and the best consistency."
                },
                {
                  q: "What makes LaTea different from other boba shops?",
                  a: "LaTea's focus on traditional Taiwanese milk tea preparation sets it apart. Brewed black tea base instead of powder, fresh-cooked tapioca pearls, and traditional items like Winter Melon Tea that most chains have dropped from their menus. The result is a more authentic flavor at a value price."
                },
                {
                  q: "Are LaTea pearls fresh?",
                  a: "Yes. LaTea cooks tapioca pearls fresh in-house, which gives them better chew and a more authentic sweetness than pre-packaged alternatives. Fresh pearl quality depends on timing: visits during peak hours (lunch and afternoon) consistently produce the best results."
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
                  { label: "Tea Quality", score: 9 },
                  { label: "Pearl Quality", score: 9 },
                  { label: "Value", score: 10 },
                  { label: "Menu Range", score: 6 },
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
              <p className="text-5xl font-bold">4.3/5</p>
              <p className="text-blue-100 text-xs mt-1">Best traditional Taiwanese milk tea in the SGV</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Shop Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Style:</span> Traditional Taiwanese bubble tea</p>
                <p><span className="font-semibold">Price:</span> $5.50 to $7.50 per drink</p>
                <p><span className="font-semibold">Best drink:</span> Classic Milk Tea, Taro Milk Tea</p>
                <p><span className="font-semibold">Hidden gem:</span> Winter Melon Tea</p>
                <p><span className="font-semibold">Can&apos;t miss:</span> Fresh-cooked tapioca pearls</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Compare Traditional Taiwanese Tea</h3>
              <div className="space-y-2">
                <Link href="/tp-tea-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  TP Tea Review &rarr;
                </Link>
                <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Chicha San Chen Review &rarr;
                </Link>
                <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Sunright Tea Studio Review &rarr;
                </Link>
                <Link href="/half-and-half-tea-express-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Half and Half Tea Express &rarr;
                </Link>
                <Link href="/best-boba-san-gabriel-valley/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Boba SGV Guide &rarr;
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
