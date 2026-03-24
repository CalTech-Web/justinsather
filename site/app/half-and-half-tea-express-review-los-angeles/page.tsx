import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Half and Half Tea Express Review: Complete Menu Guide for LA | Justin Sather",
  description: "Half and Half Tea Express review covering the full menu, best drinks, prices, and LA location guide including Arcadia, Rowland Heights, and Temple City. Personally visited, zero sponsorships. The cold-brew layered milk tea that made SGV regulars loyal.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Half and Half Tea Express Review: Complete Menu Guide for LA",
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
    "name": "Half and Half Tea Express",
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
  "datePublished": "2026-03-24",
  "url": "https://justinsather.com/half-and-half-tea-express-review-los-angeles/"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Half and Half Tea Express known for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Half and Half Tea Express is known for their cold-brewed layered milk teas, particularly the Top 1 Milk Tea, which combines cold-brewed full-leaf tea with fresh milk in a two-layer presentation. The chain originated in Taiwan and built its LA following through the San Gabriel Valley boba community."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best drink at Half and Half Tea Express?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Top 1 Milk Tea is the definitive order at Half and Half Tea Express. It is their founding drink and best-seller for a reason: cold-brewed Assam tea layered with fresh milk creates a two-tone drink that tastes cleaner and less sweet than most LA milk teas. The Sea Salt Cheese Tea is the best option for anyone who wants the cheese foam experience."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Half and Half Tea Express cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Half and Half Tea Express drinks range from $6 to $8.50. Most standard milk teas and fruit teas run $6 to $7.50, with specialty drinks like the Tiger Pearl or Sea Salt Cheese series landing closer to $7.50 to $8.50. Toppings add $0.50 to $0.75 each."
      }
    },
    {
      "@type": "Question",
      "name": "Where are Half and Half Tea Express locations in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Half and Half Tea Express has multiple locations in the San Gabriel Valley, including Arcadia, Rowland Heights, and Temple City. The chain is concentrated in the SGV rather than the Westside or Hollywood, making it a destination for boba enthusiasts who know the SGV scene."
      }
    },
    {
      "@type": "Question",
      "name": "Is Half and Half Tea Express worth it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The cold-brew program and fresh milk approach put Half and Half Tea Express above average in a dense market. The Top 1 Milk Tea is one of the cleaner-tasting milk teas available in LA at any price point. For SGV regulars, it is a consistent go-to. For Westsiders making the drive, it is worth pairing with other SGV stops."
      }
    },
    {
      "@type": "Question",
      "name": "How does Half and Half Tea Express compare to other SGV boba chains?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Half and Half Tea Express sits between the ultra-premium shops like Chicha San Chen and the budget chains. The cold-brew approach and fresh milk create a noticeably cleaner drink than most chains at the same price point. It is less distinctive than Moge Tee's Pu-erh program but more consistent across the full menu."
      }
    }
  ]
};

export default function HalfAndHalfTeaExpressReviewPage() {
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
            <Link href="/best-boba-san-gabriel-valley/" className="text-[#2B6CB0] text-sm hover:text-[#215387] transition-colors">
              &larr; Back to Best Boba San Gabriel Valley
            </Link>
          </div>
          <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Shop Review
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4 leading-tight">
            Half and Half Tea Express Review: The Cold-Brew Layered Milk Tea That SGV Regulars Keep Coming Back To
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
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">San Gabriel Valley</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Cold-Brew Milk Tea</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/half_and_half_tea_express_drink.png"
            alt="Half and Half Tea Express layered milk tea Los Angeles"
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
            { label: "Location", value: "San Gabriel Valley, Arcadia, Rowland Heights, Temple City" },
            { label: "Hours", value: "Daily 11am to 10pm (varies by location)" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Top 1 Milk Tea, Sea Salt Cheese Tea, Tiger Pearl" },
          ].map((fact) => (
            <div key={fact.label}>
              <p className="text-xs font-semibold text-[#718096] uppercase tracking-wide mb-1">{fact.label}</p>
              <p className="text-sm text-[#1A202C] font-medium">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Review content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main review */}
          <div className="lg:col-span-2 space-y-6 text-[#4A5568] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1A202C]">The Verdict</h2>
            <p>
              Most boba chains in the San Gabriel Valley compete on toppings, sweetness variety, and signature gimmicks. Half and Half Tea Express competes on the tea itself. The chain&apos;s defining technique is cold-brewing full-leaf Assam and letting it layer visually and in flavor with fresh milk, creating a two-tone drink that tastes cleaner and less cloying than almost anything else in this price range. After visiting multiple Half and Half Tea Express locations across the SGV and systematically working through the menu, the conclusion is that this chain earns the loyalty it has built among people who know the SGV boba scene well.
            </p>
            <p>
              It is not the flashiest chain operating in LA right now. The branding is understated and the aesthetic does not drive Instagram shares the way{" "}
              <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tiger Sugar
              </Link>
              {" "}or{" "}
              <Link href="/xing-fu-tang-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Xing Fu Tang
              </Link>
              {" "}do with their theatrical brown sugar preparations. But the drinks are consistently excellent, the cold-brew process produces a noticeably higher quality tea base than most competitors, and the value for what you receive is honest. Half and Half Tea Express is the kind of shop that turns occasional visitors into regulars.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes Half and Half Tea Express Different</h2>
            <p>
              The name explains the concept. Every milk tea at Half and Half Tea Express starts with cold-brewed tea, which means full leaves steeped in cold water for several hours rather than hot-brewed tea cooled down. Cold brewing extracts flavor compounds differently: less bitterness, less tannin, more of the natural sweetness and subtle fragrance that good tea is supposed to express. The result is a tea base that tastes lighter and cleaner than what most LA chains are pouring.
            </p>
            <p>
              The "half and half" layering technique places the cold-brewed tea and fresh milk in the cup separately, so the two components sit visibly distinct before the customer stirs or sips through the straw. As you drink, the flavor transitions from pure tea intensity at the top to creamy milk richness at the base. This is not a trick, it is a delivery method designed to give you two phases of the drink before they blend. Most customers stir halfway through rather than fully, which preserves some of the contrast. It is a more considered drinking experience than what{" "}
              <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Kung Fu Tea
              </Link>
              {" "}or{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>
              {" "}offers at similar price points.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Half and Half Tea Express Menu: What to Order</h2>

            <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm mb-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#EDF2F7]">
                    <th className="text-left px-4 py-3 font-semibold text-[#1A202C]">Drink</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1A202C]">Price</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1A202C]">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { name: "Top 1 Milk Tea", price: "$6.75", notes: "Cold-brew Assam layered with fresh milk. The signature drink." },
                    { name: "Sea Salt Cheese Tea", price: "$7.50", notes: "Green or black tea topped with lightly salted cream foam." },
                    { name: "Tiger Pearl Milk Tea", price: "$7.75", notes: "Brown sugar pearls with fresh milk, two-layer presentation." },
                    { name: "Fresh Taro Milk Tea", price: "$7.25", notes: "Real taro blended into the cold-brew base. Dense and earthy." },
                    { name: "Mango Green Tea", price: "$6.50", notes: "Cold-brew Taiwanese green tea with fresh mango puree." },
                    { name: "Jasmine Milk Tea", price: "$6.50", notes: "Delicate jasmine cold-brew with whole milk. Great for light drinkers." },
                  ].map((item) => (
                    <tr key={item.name} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-[#1A202C]">{item.name}</td>
                      <td className="px-4 py-3 text-[#2B6CB0] font-semibold">{item.price}</td>
                      <td className="px-4 py-3 text-[#4A5568]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              The <strong>Top 1 Milk Tea</strong> is the definitive Half and Half Tea Express order and the drink that built the chain&apos;s reputation in the SGV. Cold-brewed Assam provides a deep, malt-forward tea character that is strong enough to hold its own against the fresh milk without requiring aggressive sweetness to compensate. The layering keeps the flavor development interesting across the whole drink. On the first sip, you get the full Assam character. By the end, the milk has softened everything into something considerably more gentle. This is the correct way to drink a milk tea according to Half and Half Tea Express, and they are right. Order it at 50% sweetness minimum, since the tea quality is good enough that it does not need to be masked.
            </p>
            <p>
              The <strong>Sea Salt Cheese Tea</strong> is the entry for customers who want the cheese foam experience with a lighter tea base. Half and Half Tea Express uses a green tea foundation here, which is a smart pairing: the grassy brightness of green tea contrasts with the salt and fat of the cream foam in a way that black tea bases tend to overwhelm. The foam itself is well-made, with a light texture and appropriate saltiness. It is not as exceptional as what{" "}
              <Link href="/moge-tee-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Moge Tee
              </Link>
              {" "}delivers with their Pu-erh and cheese foam combination, but it is meaningfully better than average.
            </p>
            <p>
              The <strong>Tiger Pearl Milk Tea</strong> is Half and Half Tea Express&apos;s answer to the brown sugar trend that{" "}
              <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tiger Sugar
              </Link>
              {" "}popularized in LA. Brown sugar pearls are layered at the base of the cup, fresh milk is poured over the top, and the result is a visually striking drink with sweetness that dissolves upward as you drink. It is a good version of this drink. It does not match Tiger Sugar&apos;s original on pearl texture or sugar caramelization depth, but for a neighborhood location in the SGV where Tiger Sugar may not be nearby, this is a legitimate substitute.
            </p>
            <p>
              The <strong>Fresh Taro Milk Tea</strong> uses real taro root rather than powder, which gives it a dense, starchy texture and an earthy sweetness that powder-based taro cannot replicate. The cold-brew base keeps the drink from tasting artificially sweetened or thick in the way that hot-brew taro milk teas often do. If you want taro done correctly,{" "}
              <Link href="/7-leaves-cafe-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                7 Leaves Cafe
              </Link>
              {" "}has a stronger claim, but Half and Half Tea Express&apos; version is honest and well-made.
            </p>
            <p>
              The <strong>Mango Green Tea</strong> is the best of the fruit tea options and the right order for someone who wants something lighter and more refreshing than a milk tea. Cold-brew Taiwanese green tea provides a delicate, floral base that does not overwhelm the mango puree. The result is a drink that tastes genuinely fruit-forward without the artificial sweetness that mars most chain fruit teas. For the SGV summer months, this is one of the better options available anywhere in the neighborhood.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/half_and_half_tea_express_drink.png"
                alt="Half and Half Tea Express menu Los Angeles SGV"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">LA Locations: Where to Find Half and Half Tea Express</h2>
            <p>
              Half and Half Tea Express operates primarily in the San Gabriel Valley, which matches the chain&apos;s profile: this is a shop built for customers who already understand good tea and are not discovering boba for the first time. The Arcadia and Rowland Heights locations see the most consistent foot traffic and are surrounded by the same SGV boba ecosystem that includes{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>
              ,{" "}
              <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sunright Tea Studio
              </Link>
              , and{" "}
              <Link href="/tp-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                TP Tea
              </Link>
              .
            </p>
            <p>
              The Temple City location is slightly less busy and often has shorter waits than the Arcadia flagship. For a straightforward order during peak weekend hours, Temple City is the practical choice. Parking at SGV strip mall locations is generally uncomplicated. The chain does not draw the same social media traffic as the brown sugar shops, so waits rarely exceed fifteen minutes even on weekend afternoons.
            </p>
            <p>
              There is no Westside presence at this time. For someone coming from Santa Monica, Silver Lake, or Hollywood specifically for Half and Half Tea Express, the drive needs to be paired with other SGV destinations to justify the trip. A Half and Half Tea Express visit fits naturally into a{" "}
              <Link href="/best-boba-san-gabriel-valley/" className="text-[#2B6CB0] hover:text-[#215387]">
                Best Boba San Gabriel Valley
              </Link>
              {" "}crawl alongside Chicha San Chen, Xing Fu Tang, and Sunright.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Half and Half Tea Express drinks run $6.50 to $8.50, with most orders landing around $7 to $7.50. This positions the chain comfortably in the mid-tier of LA boba pricing, meaningfully less than{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>
              {" "}and{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>
              , while delivering noticeably better tea quality than budget chains like It&apos;s Boba Time or TP Tea. The value proposition is strong: cold-brew technique and fresh milk ingredients at prices that are still accessible for regular visits.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares</h2>
            <p>
              The most natural comparison is{" "}
              <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sunright Tea Studio
              </Link>
              : both chains compete in the same SGV market on the quality of their tea sourcing and brewing technique, both charge mid-tier prices, and both have earned loyal local followings rather than social media hype followings. Sunright&apos;s sourcing story (Sun Moon Lake black tea, Alishan oolong) is more developed. Half and Half Tea Express edges Sunright on the cold-brew execution and the visual appeal of the layered presentation.
            </p>
            <p>
              Against{" "}
              <Link href="/moge-tee-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Moge Tee
              </Link>
              , Half and Half Tea Express is less adventurous but more approachable. The Pu-erh program at Moge Tee is more distinctive. Half and Half Tea Express is the better choice if you want a clean, classic milk tea done exceptionally well rather than something deliberately unusual.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Cold-brew technique produces a noticeably cleaner, less bitter tea base than most LA chains</li>
                  <li>Top 1 Milk Tea is one of the best pure milk teas available in LA at any price point</li>
                  <li>Fresh milk rather than creamer elevates every drink that uses it</li>
                  <li>Mid-tier pricing that fairly reflects the ingredient quality</li>
                  <li>Consistent execution across multiple SGV locations</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>No Westside locations, requires committing to the SGV</li>
                  <li>Understated branding means it is easy to overlook among flashier competitors</li>
                  <li>Menu is not as adventurous as Moge Tee or as sourcing-forward as Chicha San Chen</li>
                  <li>Pearl quality is good but not the chain&apos;s primary differentiator</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Half and Half Tea Express is a chain that rewards the customer who knows what they want and wants it done right. The cold-brew foundation and fresh milk ingredients are not marketing language, they are genuine decisions that produce measurably better drinks than most competitors in the same price range. The Top 1 Milk Tea is the most convincing argument for what a daily-driver boba order should taste like in Los Angeles: clean, balanced, and interesting enough to come back to without ever feeling like a chore.
            </p>
            <p>
              A 4.3 out of 5 reflects a chain that does the fundamentals better than almost everyone and does not try to distract from that with gimmicks or trend-chasing. The main limitation is geographic concentration in the SGV. If you are already out there, Half and Half Tea Express should be on your list. If you are not, it is worth planning a trip around, but probably not as the sole destination.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the Top 1 Milk Tea at 50% sweetness on your first visit. The cold-brew Assam base has enough natural sweetness that full sugar level obscures the tea character you came for.</li>
                <li>Try sipping the Tiger Pearl Milk Tea before fully mixing. The transition from fresh milk to brown sugar pearl sweetness at the base is the intended experience, and stirring immediately loses it.</li>
                <li>Half and Half Tea Express pairs naturally with Chicha San Chen and Sunright Tea Studio for an SGV crawl focused on tea quality. All three shops are within driving distance of Arcadia.</li>
                <li>The Sea Salt Cheese Tea is best ordered with green tea base rather than black. The lighter base lets the cheese foam flavor read more clearly.</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-[#1A202C] mt-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is Half and Half Tea Express known for?",
                  a: "Half and Half Tea Express is known for their cold-brewed layered milk teas, particularly the Top 1 Milk Tea, which combines cold-brewed full-leaf tea with fresh milk in a two-layer presentation. The chain originated in Taiwan and built its LA following through the San Gabriel Valley boba community."
                },
                {
                  q: "What is the best drink at Half and Half Tea Express?",
                  a: "The Top 1 Milk Tea is the definitive order. Cold-brewed Assam layered with fresh milk creates a two-tone drink that tastes cleaner and less sweet than most LA milk teas. The Sea Salt Cheese Tea is the best option for anyone who wants the cheese foam experience."
                },
                {
                  q: "How much does Half and Half Tea Express cost?",
                  a: "Drinks range from $6 to $8.50. Most standard milk teas and fruit teas run $6 to $7.50, with specialty drinks like the Tiger Pearl or Sea Salt Cheese series landing closer to $7.50 to $8.50. Toppings add $0.50 to $0.75 each."
                },
                {
                  q: "Where are Half and Half Tea Express locations in Los Angeles?",
                  a: "Half and Half Tea Express has multiple locations in the San Gabriel Valley, including Arcadia, Rowland Heights, and Temple City. The chain is concentrated in the SGV rather than the Westside or Hollywood."
                },
                {
                  q: "Is Half and Half Tea Express worth it?",
                  a: "Yes. The cold-brew program and fresh milk approach put it above average in a dense market. The Top 1 Milk Tea is one of the cleaner-tasting milk teas in LA at any price point. For SGV regulars, it is a consistent go-to."
                },
                {
                  q: "How does Half and Half Tea Express compare to other SGV boba chains?",
                  a: "It sits between ultra-premium shops like Chicha San Chen and the budget chains. The cold-brew approach and fresh milk create a noticeably cleaner drink than most chains at the same price point. Less distinctive than Moge Tee's Pu-erh program but more consistent across the full menu."
                }
              ].map((item) => (
                <details key={item.q} className="group bg-white border border-gray-100 rounded-xl shadow-sm">
                  <summary className="cursor-pointer px-5 py-4 font-semibold text-[#1A202C] text-sm list-none flex justify-between items-center">
                    {item.q}
                    <span className="text-[#2B6CB0] group-open:rotate-180 transition-transform inline-block">&#8964;</span>
                  </summary>
                  <p className="px-5 pb-4 text-sm text-[#4A5568] leading-relaxed">{item.a}</p>
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
                  { label: "Pearl Quality", score: 8 },
                  { label: "Menu Range", score: 8 },
                  { label: "Value", score: 8 },
                  { label: "Experience", score: 8 },
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
              <p className="text-blue-100 text-xs mt-1">Best cold-brew milk tea in the SGV</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Area:</span> San Gabriel Valley</p>
                <p><span className="font-semibold">Origin:</span> Taiwan</p>
                <p><span className="font-semibold">Price:</span> $6.50 to $8.50 per drink</p>
                <p><span className="font-semibold">Best drink:</span> Top 1 Milk Tea, Sea Salt Cheese Tea</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More SGV Boba Reviews</h3>
              <div className="space-y-2">
                <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Chicha San Chen SGV Review &rarr;
                </Link>
                <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Sunright Tea Studio Review &rarr;
                </Link>
                <Link href="/moge-tee-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Moge Tee Review &rarr;
                </Link>
                <Link href="/xing-fu-tang-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Xing Fu Tang Review &rarr;
                </Link>
                <Link href="/best-boba-san-gabriel-valley/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Boba San Gabriel Valley &rarr;
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
