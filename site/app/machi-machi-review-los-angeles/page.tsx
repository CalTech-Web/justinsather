import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machi Machi Review: Cheese Foam Tea Menu & LA Locations | Justin Sather",
  description: "Machi Machi review covering the full menu, cheese foam drinks, prices, and Los Angeles locations in Koreatown and the SGV. Personally visited, zero sponsorships. The best cheese foam program in LA.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Machi Machi Review: Cheese Foam Tea Menu & LA Locations",
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
    "name": "Machi Machi",
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
  "url": "https://justinsather.com/machi-machi-review-los-angeles/"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best drink at Machi Machi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Brown Sugar Milk Tea with Cheese Foam is Machi Machi's defining drink and the one that put the chain on the map. The cheese foam is salted properly and thick enough to stay on top of the tea rather than dissolving into it. The Earl Grey Milk Tea with Cheese Foam is the second best order, with the floral tea base pairing exceptionally well with the savory foam. For something simpler, the Roasted Milk Tea without foam is a clean, well-executed traditional base."
      }
    },
    {
      "@type": "Question",
      "name": "What is cheese foam tea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cheese foam tea is a style of boba where a layer of salted cream cheese foam is added on top of the tea. The foam is made from cream cheese, heavy cream, milk, and a small amount of salt. You drink through the foam so each sip combines the savory, creamy foam with the sweet tea underneath. Machi Machi is one of the best places in Los Angeles to try cheese foam because the foam is thicker and more properly salted than most competitors."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Machi Machi cost in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Machi Machi drinks typically range from $6.50 to $8.50 in Los Angeles. Cheese foam drinks run $7.50 to $8.50 for a medium, with the foam adding about $1 to $1.50 over the base drink price. Standard milk teas without foam start around $6.50. Machi Machi is priced at the mid-tier chain level, slightly above Gong Cha and comparable to Milksha and Boba Guys on the lower end of their menus."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Machi Machi in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Machi Machi has locations in Koreatown and the San Gabriel Valley including Temple City and Arcadia. The Koreatown location is on the western edge of the boba corridor along Western Ave and Beverly Blvd. The SGV locations serve the eastern LA County boba community. The Koreatown location is the most convenient for visitors doing a K-Town boba tour."
      }
    },
    {
      "@type": "Question",
      "name": "How do you drink cheese foam tea correctly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Do not stir the cheese foam into the tea. Drink directly through the straw so each sip pulls tea through the foam layer. The point is the contrast between the cold, sweet tea and the thick, savory cream on your lips. If you want to try the foam on its own first, tilt the cup and sip from the rim. Most experienced boba drinkers do not stir the foam in, as it dilutes both the tea and the foam into a mediocre combined flavor."
      }
    },
    {
      "@type": "Question",
      "name": "Is Machi Machi better than other cheese foam boba shops?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Machi Machi is the best dedicated cheese foam boba program in Los Angeles. The foam is correctly salted, thick enough to hold its structure, and made fresh to order. Tiger Sugar and Happy Lemon both offer cheese foam as an add-on but it is thinner and less salted. Gong Cha and Kung Fu Tea offer cheese foam but it is an afterthought on their menus. Machi Machi was built around cheese foam from the beginning, which shows in the quality."
      }
    }
  ]
};

export default function MachiMachiReviewPage() {
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
            <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="text-[#2B6CB0] text-sm hover:text-[#215387] transition-colors">
              &larr; Back to Best Boba Koreatown
            </Link>
          </div>
          <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Shop Review
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4 leading-tight">
            Machi Machi Review: The Best Cheese Foam Tea in Los Angeles
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/assets/team/justin-sather-avatar.jpg" alt="Justin Sather" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1A202C]">Justin Sather</p>
              <p className="text-xs text-[#718096]">Multiple visits, Koreatown and SGV locations, paid out of pocket &bull; Updated Q1 2026</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm mb-6">
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4.1/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Koreatown, SGV</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Cheese Foam Specialist</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/gallery/boba_koreatown_4.jpg"
            alt="Machi Machi cheese foam tea Los Angeles"
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
            { label: "Locations", value: "Koreatown, Temple City, Arcadia (SGV)" },
            { label: "Hours", value: "Daily 11am to 10pm (varies by location)" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Brown Sugar Cheese Foam, Earl Grey Cheese Foam, Roasted Milk Tea" },
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
        <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Machi Machi Menu: Prices and What to Order</h2>
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
                { drink: "Brown Sugar Milk Tea with Cheese Foam", price: "$8.00", notes: "The flagship Machi Machi order. Brown sugar syrup swirled through milk with fresh pearls, topped with a thick layer of salted cheese foam. The foam is the reason to come." },
                { drink: "Earl Grey Milk Tea with Cheese Foam", price: "$7.75", notes: "The best tea base with cheese foam on the menu. The floral bergamot of the Earl Grey pairs exceptionally well with the savory cream. A more complex drink than the brown sugar version." },
                { drink: "Roasted Milk Tea", price: "$6.50", notes: "The best no-foam order on the menu. The roasted oolong base has a nutty, toasty depth. Well-extracted and cleaner than most chain roasted milk teas." },
                { drink: "Taro Milk Tea with Cheese Foam", price: "$7.75", notes: "The earthy taro and savory foam is a classic combination. Not as distinctive as the Earl Grey pairing, but solid. Order at 70% sugar to let the taro character come through." },
                { drink: "Matcha Latte with Cheese Foam", price: "$8.00", notes: "A strong combination. The bitterness of the matcha works well against the salty foam. Not the most complex matcha in LA but a better-than-average chain execution." },
                { drink: "Passion Fruit Green Tea", price: "$6.75", notes: "The best fruit tea on the menu. Tart, tropical, and refreshing. A good palate cleanser between heavier milk tea orders. Order without foam." },
                { drink: "Oolong Milk Tea", price: "$6.50", notes: "Clean and floral. A good benchmark order to test the tea base quality. Works well with cheese foam as an upgrade for around $1.50 more." },
                { drink: "Pearl Milk Tea", price: "$6.75", notes: "The straightforward test of the fundamentals. Solid black tea base, properly cooked pearls with consistent chew. A reliable everyday order." },
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
        <p className="text-xs text-[#718096] mt-2">Prices are for medium size. Large adds $0.50 to $1.00. Cheese foam is available as an add-on to most drinks for approximately $1.50. Toppings (pearls, pudding, grass jelly) are $0.50 to $0.75 each.</p>
      </section>

      {/* Review content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main review */}
          <div className="lg:col-span-2 space-y-6 text-[#4A5568] leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1A202C]">The Verdict</h2>
            <p>
              Machi Machi is the best cheese foam boba destination in Los Angeles. The chain built its entire identity around the cheese foam concept, and the result is a foam program that outperforms every competitor in the city. The foam is thick, properly salted, and holds its structure. At every other boba shop in Los Angeles, cheese foam is an add-on. At Machi Machi, it is the point.
            </p>
            <p>
              The chain has locations in{" "}
              <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="text-[#2B6CB0] hover:text-[#215387]">
                Koreatown
              </Link>{" "}
              and the San Gabriel Valley. Both areas have competitive boba scenes, and Machi Machi has carved out a distinct position in each by doing one thing better than anyone else nearby.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes Machi Machi Worth Visiting</h2>
            <p>
              Cheese foam tea originated in Taiwan and became one of the defining boba trends of the 2010s. The concept is simple: a layer of salted cream cheese foam sits on top of the tea, and you drink through it. Each sip pulls cold tea through the foam, combining sweet and savory in a way that no other boba format replicates.
            </p>
            <p>
              The problem with cheese foam at most boba shops is that it is thin, under-salted, and dissolves too quickly. You get one or two sips of decent contrast before the foam is gone. Machi Machi solves this. The foam is made fresh to order, has genuine body, and stays distinct from the tea below it for the full drink. The salt level is noticeably higher than competing foam programs, and it makes a significant difference.
            </p>
            <p>
              The Earl Grey pairing is the menu item that best demonstrates Machi Machi&apos;s thinking. Earl Grey tea has a floral bergamot note that most chains dilute into obscurity by over-milking. Machi Machi brews the Earl Grey as the base, adds minimal milk to preserve the floral character, then caps it with cheese foam. The bergamot aromatics, the slight bitterness of the tea, and the savory saltiness of the foam work together in a way that feels deliberately designed rather than assembled.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Best Drinks at Machi Machi in LA</h2>
            <p>
              The <strong>Brown Sugar Milk Tea with Cheese Foam</strong> is the order to start with if this is your first Machi Machi visit. The brown sugar swirl and pearls are the foundation, but the cheese foam is what the drink is actually about. The salt in the foam cuts through the sweetness of the brown sugar in a way that makes the drink feel balanced rather than cloying. Compare this to{" "}
              <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tiger Sugar&apos;s
              </Link>{" "}
              brown sugar drink, which hits harder on sweetness but lacks the foam dimension.
            </p>
            <p>
              The <strong>Earl Grey Milk Tea with Cheese Foam</strong> is the order for returning visitors who want to understand what Machi Machi does best. The bergamot floral note in the Earl Grey tea carries through clearly, giving the drink a complexity that most chain milk teas lack. When you drink through the foam, the salt on your lips and the floral tea in your mouth create a pairing that feels intentional.
            </p>
            <p>
              The <strong>Roasted Milk Tea</strong> (without foam) is the order for visitors who want to test the tea quality without the foam variable. The roasted oolong base has a genuine nutty, toasty quality. At{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>{" "}
              and{" "}
              <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sunright Tea Studio
              </Link>
              , the tea bases are better sourced and more precisely brewed. But for a chain operating at the mid-tier price point, the Roasted Milk Tea at Machi Machi holds up well.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/gallery/boba_koreatown_3.jpg"
                alt="Machi Machi boba Koreatown Los Angeles"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">How to Drink Cheese Foam Tea</h2>
            <p>
              Do not stir the foam into the tea. Drink directly through the straw without mixing. The foam sits on top of the tea and the straw draws tea up through the foam layer with each sip, combining both in the correct ratio. If you stir the foam in, you dilute both the tea flavor and the foam into a mediocre combined texture. Drink it as served, tilting the cup slightly to get the foam on your lips with each sip.
            </p>
            <p>
              Sugar level recommendation: order at 70% for milk teas and 50% for the Earl Grey. The foam adds its own body and a slight sweetness from the cream component, which means you want slightly less base sweetness than you would order at a standard milk tea shop.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Machi Machi LA Locations: Where to Go</h2>
            <p>
              The Koreatown location is the most convenient for visitors doing a{" "}
              <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="text-[#2B6CB0] hover:text-[#215387]">
                K-Town boba crawl
              </Link>
              . It sits within walking distance of Tiger Sugar and several other Koreatown shops, making it easy to include in a single-afternoon tour of the neighborhood. If cheese foam is the purpose of the visit, start with Machi Machi before moving to sweeter or heavier drinks at other shops.
            </p>
            <p>
              The SGV locations in Temple City and Arcadia serve the eastern LA County boba community. For visitors already in the SGV for shops like{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>
              ,{" "}
              <Link href="/xing-fu-tang-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Xing Fu Tang
              </Link>
              , or{" "}
              <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sunright Tea Studio
              </Link>
              , Machi Machi offers a different experience from the premium Taiwanese tea specialists in the area. It is a good complement to, rather than a substitute for, those shops.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Machi Machi is priced at the mid-tier to upper-mid-tier chain level. Standard milk teas without foam start at $6.50. Cheese foam drinks run $7.50 to $8.50 for a medium, with the foam adding roughly $1.50 over the base drink price. This is comparable to{" "}
              <Link href="/gong-cha-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Gong Cha
              </Link>{" "}
              and{" "}
              <Link href="/chatime-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chatime
              </Link>{" "}
              on standard drinks, but the cheese foam upgrade puts the final price closer to craft shops like{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>
              . Given that the cheese foam at Machi Machi is genuinely better than what you get at higher-priced shops, the premium is justified.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How Machi Machi Compares</h2>
            <p>
              The relevant comparison for Machi Machi is not the typical chain-versus-chain ranking. Machi Machi is not trying to compete with{" "}
              <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Happy Lemon
              </Link>{" "}
              on menu breadth or with Chicha San Chen on tea sourcing. It is competing on the specific category of cheese foam tea, and in that category it wins in Los Angeles.
            </p>
            <p>
              If you want to compare foam programs:
              <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tiger Sugar
              </Link>{" "}
              offers a brown sugar milk foam (not cheese foam) that is visually dramatic but thinner than Machi Machi&apos;s version.{" "}
              <Link href="/the-alley-boba-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                The Alley
              </Link>{" "}
              has a cheese foam series but the foam is thinner and less salted. Gong Cha and{" "}
              <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Kung Fu Tea
              </Link>{" "}
              both offer cheese foam add-ons that are noticeably inferior to what Machi Machi makes. If cheese foam is the reason you are visiting, Machi Machi is the right destination.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Best cheese foam program in Los Angeles, properly salted and thick</li>
                  <li>Earl Grey with cheese foam is a genuinely distinctive and well-conceived drink</li>
                  <li>Tea bases are above average for a mid-tier chain</li>
                  <li>Roasted Milk Tea is a strong no-foam option</li>
                  <li>Koreatown location is convenient for boba crawls</li>
                  <li>Fresh-to-order foam preparation, not pre-made</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Cheese foam drinks run $7.50 to $8.50, which is mid-to-high for a chain</li>
                  <li>Menu is narrower than Gong Cha, Chatime, or Happy Lemon</li>
                  <li>Tea base quality below craft shops in the SGV (Chicha San Chen, Sunright)</li>
                  <li>Fewer locations than major chains in LA County</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Machi Machi earns a 4.1 out of 5. The score reflects a shop with a clear identity, a genuinely superior foam program, and tea bases that hold up respectably for a mid-tier chain. The main limitations are menu breadth and price, both of which are the trade-off for doing one thing exceptionally well rather than many things adequately.
            </p>
            <p>
              If cheese foam tea is something you have not tried in Los Angeles, Machi Machi is the right first stop. If you have tried cheese foam elsewhere and been underwhelmed, Machi Machi is the shop that will change your mind. Start with the Earl Grey Milk Tea with Cheese Foam, do not stir it, and drink it the way it is meant to be consumed.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Do not stir the foam. Drink through the straw so each sip pulls tea through the foam layer. Stirring destroys the contrast that makes cheese foam worth ordering.</li>
                <li>Order the Earl Grey Milk Tea with Cheese Foam on your second visit. It is more interesting than the Brown Sugar on a pure flavor level, and it shows what Machi Machi is actually capable of.</li>
                <li>70% sugar for milk teas, 50% for the Earl Grey. The foam adds body and slight sweetness, so pull back the base sugar accordingly.</li>
                <li>Koreatown location works well as a first stop before visiting Tiger Sugar, Xing Fu Tang, or Boba Guys. The cheese foam is a different enough experience that the palate does not compete with what follows.</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-[#1A202C] mt-10">Machi Machi FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the best drink at Machi Machi?",
                  a: "The Brown Sugar Milk Tea with Cheese Foam is the classic first order. The Earl Grey Milk Tea with Cheese Foam is the more interesting drink for returning visitors. For a no-foam option, the Roasted Milk Tea is the best tea base on the menu."
                },
                {
                  q: "What is cheese foam tea?",
                  a: "Cheese foam tea is boba with a layer of salted cream cheese foam on top. You drink through the foam so each sip combines the sweet tea below with the savory, creamy foam. Machi Machi makes the foam thicker and more salted than most competitors, which is why the experience at Machi Machi is better than cheese foam at other shops."
                },
                {
                  q: "How much does Machi Machi cost?",
                  a: "Standard drinks start around $6.50. Cheese foam drinks run $7.50 to $8.50 for a medium. The foam upgrade costs approximately $1.50 over the base drink price. Toppings are extra."
                },
                {
                  q: "Where is Machi Machi in Los Angeles?",
                  a: "Machi Machi has locations in Koreatown and the San Gabriel Valley including Temple City and Arcadia. The Koreatown location is the most convenient for visitors doing a K-Town boba tour."
                },
                {
                  q: "How do you drink cheese foam tea?",
                  a: "Drink through the straw without stirring. The foam stays on top and each sip pulls tea through it, giving you both flavors in the right ratio. Stirring destroys the texture contrast. Tilt the cup slightly to get the foam on your lips with each sip."
                },
                {
                  q: "Is Machi Machi the best cheese foam boba in LA?",
                  a: "Yes. Machi Machi has the best cheese foam program in Los Angeles. The foam is thicker, more salted, and holds its structure better than competitors. Tiger Sugar, The Alley, Gong Cha, and Kung Fu Tea all offer cheese foam, but none of them make it as well as Machi Machi."
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
                  { label: "Cheese Foam Quality", score: 10 },
                  { label: "Tea Base Quality", score: 7 },
                  { label: "Menu Range", score: 6 },
                  { label: "Value", score: 7 },
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
              <p className="text-blue-100 text-xs mt-1">Best cheese foam program in Los Angeles</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Shop Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Founded:</span> Taiwan</p>
                <p><span className="font-semibold">Specialty:</span> Cheese foam tea</p>
                <p><span className="font-semibold">Price:</span> $6.50 to $8.50 per drink</p>
                <p><span className="font-semibold">Best drink:</span> Earl Grey with Cheese Foam</p>
                <p><span className="font-semibold">Can&apos;t miss:</span> Brown Sugar Cheese Foam, Roasted Milk Tea</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Compare in Koreatown</h3>
              <div className="space-y-2">
                <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Tiger Sugar Review &rarr;
                </Link>
                <Link href="/xing-fu-tang-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Xing Fu Tang Review &rarr;
                </Link>
                <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Happy Lemon Review &rarr;
                </Link>
                <Link href="/the-alley-boba-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  The Alley Review &rarr;
                </Link>
                <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Boba Koreatown Guide &rarr;
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
