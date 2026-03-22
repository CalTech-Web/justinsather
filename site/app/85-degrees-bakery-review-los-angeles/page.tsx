import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "85 Degrees Bakery Review: Complete Menu Guide for LA Locations | Justin Sather",
  description: "85 Degrees Bakery review covering the full menu, sea salt coffee, best pastries, LA location guide for Arcadia, Alhambra, and Rowland Heights. Personally visited, zero sponsorships.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "85 Degrees Bakery Review: The Complete Menu Guide for LA Locations",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.4",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Person",
    "name": "Justin Sather",
    "url": "https://justinsather.com/about-me/"
  },
  "itemReviewed": {
    "@type": "Bakery",
    "name": "85 Degrees Bakery Cafe",
    "servesCuisine": "Taiwanese Bakery",
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
  "datePublished": "2026-03-22",
  "url": "https://justinsather.com/85-degrees-bakery-review-los-angeles/"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is 85 Degrees Bakery famous for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "85 Degrees Bakery Cafe is most famous for its sea salt coffee, a cold brew coffee topped with sea salt cream that became a signature across the Taiwanese-American community. The chain is also known for its tiger bread, soft milk rolls, and freshly baked pastries made daily on site."
      }
    },
    {
      "@type": "Question",
      "name": "Where are the 85 Degrees Bakery locations in Los Angeles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "85 Degrees Bakery Cafe has multiple Los Angeles area locations including Arcadia, Alhambra, Rowland Heights, Hacienda Heights, and Monterey Park, all in the San Gabriel Valley. These SGV locations serve the largest Taiwanese-American community in the United States."
      }
    },
    {
      "@type": "Question",
      "name": "How much does 85 Degrees Bakery cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "85 Degrees Bakery is one of the most affordable Taiwanese cafe options in LA. Drinks run $4 to $7, bread and pastries are $2 to $5 each, and most visits come in under $15. It is significantly cheaper than boba chains like Boba Guys or Chicha San Chen while offering a completely different menu category."
      }
    },
    {
      "@type": "Question",
      "name": "Is 85 Degrees Bakery a boba shop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. 85 Degrees Bakery Cafe is primarily a Taiwanese bakery, not a boba shop. While they do serve some tea drinks and slushes, the menu is centered on freshly baked bread, pastries, and their signature sea salt coffee. It is a bakery cafe, not a bubble tea shop."
      }
    },
    {
      "@type": "Question",
      "name": "What should I order at 85 Degrees Bakery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with the sea salt coffee, which is the chain's signature drink. For bread, the tiger bread and soft milk buns are the most popular items. The egg tart is one of the best in any LA bakery. Avoid going at peak weekend hours when the best items sell out early, especially the tiger bread."
      }
    },
    {
      "@type": "Question",
      "name": "Why is it called 85 Degrees Bakery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The name comes from 85 degrees Celsius, which the founders determined is the ideal temperature for serving coffee. The chain was founded in Taiwan in 2004 and expanded to the United States, where it built its largest customer base in the Taiwanese-American communities of Southern California."
      }
    }
  ]
};

export default function EightyFiveDegreesReviewPage() {
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
            <Link href="/best-desserts-los-angeles/" className="text-[#2B6CB0] text-sm hover:text-[#215387] transition-colors">
              &larr; Back to Best Desserts LA
            </Link>
          </div>
          <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Bakery Review
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4 leading-tight">
            85 Degrees Bakery Review: The Taiwanese Bakery That Conquered LA&apos;s SGV
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
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4.4/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">SGV, Multiple Locations</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Taiwanese Bakery</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_scene_lifestyle.png"
            alt="85 Degrees Bakery Los Angeles"
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
            { label: "Locations", value: "Arcadia, Alhambra, Rowland Heights, Monterey Park, Hacienda Heights" },
            { label: "Hours", value: "Daily 7am to 10pm (varies by location)" },
            { label: "Price Range", value: "$ (very affordable)" },
            { label: "Best For", value: "Sea salt coffee, tiger bread, egg tarts, milk buns" },
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
              85 Degrees Bakery Cafe is not a boba shop. That distinction matters because most people who discover it through LA&apos;s Taiwanese food community arrive expecting something in the same category as{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>{" "}
              or{" "}
              <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sunright Tea Studio
              </Link>
              . It is not. It is a Taiwanese bakery cafe, which means the drinks are secondary to what comes out of the ovens. Understanding that before you walk in changes the experience from confusing to exceptional.
            </p>
            <p>
              After visiting multiple SGV locations and working through the full menu across several visits, the verdict is that 85 Degrees is one of the best value food experiences in all of Los Angeles. Not because the food is cheap, though it is, but because the quality at this price point is genuinely difficult to find anywhere else in the city. The sea salt coffee is one of LA&apos;s most underrated drinks. The bread program is legitimately excellent by any standard, not just by bakery chain standards.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Why It&apos;s Called 85 Degrees</h2>
            <p>
              The name comes from the founding philosophy: 85 degrees Celsius is the temperature the founders identified as optimal for serving coffee. Whether that claim holds up scientifically matters less than what it communicates: this is a chain that launched with an idea about precision and quality, not just a market opportunity. That founding story is now baked into every drink they serve, including the sea salt coffee that made the brand famous.
            </p>
            <p>
              Founded in Taiwan in 2004, the chain expanded through Asia before establishing its first US location in 2008, targeting Southern California&apos;s large Taiwanese-American community directly. The SGV became the brand&apos;s US base for a reason. The customers there grew up on Taiwanese bakery culture and could tell immediately whether 85 Degrees was doing things correctly or cutting corners. The fact that those same customers are the chain&apos;s most loyal regulars tells you most of what you need to know.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">85 Degrees Menu: What to Order</h2>
            <p>
              The <strong>Sea Salt Coffee</strong> is the starting point and for good reason. It is a cold brew base topped with a thick layer of salted cream that you drink through rather than stirring in, so each sip pulls coffee through the cream. The contrast between the bitterness of the cold brew and the savory sweetness of the salt cream is not a gimmick. It is a genuinely interesting flavor combination that holds up across hundreds of visits, which is why this drink built a cult following before most LA coffee shops had heard of salted coffee concepts. Order this first. Order it every time.
            </p>
            <p>
              The <strong>Tiger Bread</strong> is the visual signature of the menu, a striped bread with a slightly crispy exterior and a dense, chewy crumb. The striping comes from a rice paste coating that creates the pattern during baking. The texture is unlike any bread commonly found in American bakeries, closer to a Japanese milk bread in softness but with more structure. It is the bread people photograph, but it is also genuinely the right bread to order if you want to understand what 85 Degrees does well.
            </p>
            <p>
              The <strong>Soft Milk Buns</strong> are the daily staple. Small, pillowy rolls with a light sweetness and a paper-thin crust that pulls apart cleanly. These are the items that sell out first on weekday mornings, which is useful information: if you arrive after noon on a busy day, the milk buns may be gone. They are worth arriving early for. Paired with the sea salt coffee, this is the best $8 breakfast in the SGV.
            </p>
            <p>
              The <strong>Egg Tart</strong> is one of the better versions available at any LA bakery. The custard is set correctly, smooth without being stiff, and the pastry shell is flaky rather than dense. This is not the fragile Cantonese-style egg tart from a dim sum cart. It is the Taiwanese interpretation, which uses a cookie-style crust and a slightly richer custard. If you have had egg tarts elsewhere in the SGV, this version will stand out.
            </p>
            <p>
              The <strong>Taro Slush</strong> and other drink offerings are competent but not the reason to visit. If you are specifically looking for boba, this is the wrong shop. The taro slush is sweet and refreshing but does not approach the taro milk tea quality at{" "}
              <Link href="/7-leaves-cafe-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                7 Leaves Cafe
              </Link>{" "}
              or{" "}
              <Link href="/meet-fresh-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Meet Fresh
              </Link>
              . Order the sea salt coffee and let the bakery items be the main event.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="85 Degrees Bakery menu Los Angeles"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">LA Locations: Where to Find 85 Degrees Bakery</h2>
            <p>
              85 Degrees Bakery Cafe operates across the San Gabriel Valley, which is the right market for a Taiwanese bakery chain. The Arcadia, Alhambra, Rowland Heights, Hacienda Heights, and Monterey Park locations each serve communities with deep familiarity with Taiwanese food culture, which keeps the quality standard high. A chain that can maintain its standards in the SGV can maintain them anywhere.
            </p>
            <p>
              The Rowland Heights location is the most convenient for people visiting the SGV boba corridor who want to add a bakery stop. It sits near several of the top-reviewed boba shops in this guide, making it easy to pair with a stop at{" "}
              <Link href="/xing-fu-tang-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Xing Fu Tang
              </Link>{" "}
              or{" "}
              <Link href="/tp-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                TP Tea
              </Link>
              . The Alhambra location has the largest seating area and is the best option if you want to eat in rather than take out.
            </p>
            <p>
              Arrive before noon on weekends. The most popular bread items, particularly the tiger bread and milk buns, sell out regularly. The stores restock throughout the day but the first bake is the freshest and the selection is widest in the morning. Weekday visits avoid the crowds entirely and the quality is identical.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              85 Degrees Bakery is among the most affordable quality food experiences in Los Angeles. Drinks run $4 to $7. Individual bread items are $2 to $4. A full order of sea salt coffee, two pieces of tiger bread, and an egg tart comes to around $13, which is less than a single drink at{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>
              . The price-to-quality ratio is the best of any Taiwanese food experience I have reviewed in LA. Not because the ingredients are cheap, they are not, but because the bakery model allows the volume and freshness to sustain quality at a lower price point than a drinks-only operation.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares</h2>
            <p>
              Comparing 85 Degrees to boba shops is the wrong framework because the categories are different. The right comparison is to other SGV bakeries and Taiwanese cafes. In that comparison, 85 Degrees wins on scale, consistency, and accessibility while losing to smaller artisan bakeries on individuality and item selection. If you want a handcrafted approach with rotating seasonal items, find a smaller bakery. If you want a reliable, excellent version of Taiwanese bakery culture available across multiple SGV locations, 85 Degrees is the best option in Los Angeles.
            </p>
            <p>
              Within the broader LA Taiwanese food scene covered in this guide, 85 Degrees pairs well with a boba shop visit rather than replacing it. A morning at 85 Degrees followed by afternoon boba at{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>{" "}
              or{" "}
              <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sunright Tea Studio
              </Link>{" "}
              is the right way to structure a SGV food day. These are complementary experiences, not competing ones.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Sea salt coffee is one of the most distinctive and enjoyable drinks available at any LA cafe or bakery</li>
                  <li>Bread quality is legitimately excellent by any standard, not just by chain standards</li>
                  <li>Price-to-quality ratio is the best of any Taiwanese food experience in the SGV</li>
                  <li>Multiple SGV locations with consistent quality across all of them</li>
                  <li>Opens early, making it the best breakfast option in the Taiwanese food corridor</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Popular items, especially tiger bread and milk buns, sell out on busy days</li>
                  <li>Not a boba shop. If boba is what you want, this is not the right stop</li>
                  <li>Limited Westside presence. Primarily SGV-based</li>
                  <li>Weekend crowds at popular locations can mean lines and limited seating</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              85 Degrees Bakery Cafe earns a 4.4 out of 5 and the distinction of being the best value food experience in Los Angeles that most people outside the SGV have not tried yet. The sea salt coffee alone is worth the drive to Arcadia or Alhambra if you have never had it. Add the tiger bread and an egg tart and you have one of the best food experiences available in LA County for under $15.
            </p>
            <p>
              The 4.4 reflects a chain that is excellent within its category and that does what it does at a level most food operations at this price cannot approach. The deductions are for the lack of Westside presence and the occasional sell-out situation on popular items. Neither of those is a quality problem. They are the predictable downsides of a bakery that bakes fresh and has a loyal following. A genuinely impressive operation, and one of the places I return to most often during SGV days.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Arrive before noon on weekends. Tiger bread and milk buns sell out early and those are the items worth getting.</li>
                <li>Drink the sea salt coffee as designed: do not stir the cream into the coffee. Drink through the cream layer so each sip pulls coffee through the salt.</li>
                <li>The Alhambra location has the most seating if you want to sit and eat. Other locations are primarily takeout-oriented.</li>
                <li>85 Degrees pairs well with a boba stop. It is a morning or early afternoon stop, not an alternative to boba. Plan it as a first stop before heading to Chicha San Chen or Sunright Tea Studio.</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-[#1A202C] mt-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is 85 Degrees Bakery famous for?",
                  a: "85 Degrees Bakery Cafe is most famous for its sea salt coffee, a cold brew topped with salted cream that became a signature drink across the Taiwanese-American community. The chain is also known for its tiger bread, soft milk rolls, and freshly baked pastries made daily on site."
                },
                {
                  q: "Where are the 85 Degrees Bakery locations in Los Angeles?",
                  a: "85 Degrees Bakery Cafe has multiple LA area locations in the San Gabriel Valley: Arcadia, Alhambra, Rowland Heights, Hacienda Heights, and Monterey Park. These SGV locations serve the largest Taiwanese-American community in the United States."
                },
                {
                  q: "How much does 85 Degrees Bakery cost?",
                  a: "Drinks run $4 to $7. Bread and pastries are $2 to $5 each. Most visits come in under $15, making it one of the most affordable quality food experiences in LA."
                },
                {
                  q: "Is 85 Degrees Bakery a boba shop?",
                  a: "No. 85 Degrees Bakery Cafe is a Taiwanese bakery, not a boba shop. The menu centers on freshly baked bread, pastries, and their signature sea salt coffee. Some tea drinks are available but boba is not the focus."
                },
                {
                  q: "Why is it called 85 Degrees Bakery?",
                  a: "The name comes from 85 degrees Celsius, which the founders identified as the ideal temperature for serving coffee. Founded in Taiwan in 2004, the chain expanded to Southern California where it built its US base in the SGV."
                },
              ].map((item, i) => (
                <details key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="px-5 py-4 font-semibold text-[#1A202C] cursor-pointer hover:bg-[#EDF2F7] transition-colors text-sm">
                    {item.q}
                  </summary>
                  <div className="px-5 py-4 text-sm text-[#4A5568] leading-relaxed border-t border-gray-100">
                    {item.a}
                  </div>
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
                  { label: "Bread Quality", score: 9 },
                  { label: "Drink Quality", score: 8 },
                  { label: "Menu Range", score: 8 },
                  { label: "Value", score: 10 },
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
              <p className="text-5xl font-bold">4.4/5</p>
              <p className="text-blue-100 text-xs mt-1">Best value food experience in the SGV</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Area:</span> Arcadia, Alhambra, Rowland Heights, Monterey Park</p>
                <p><span className="font-semibold">Origin:</span> Taiwan (founded 2004)</p>
                <p><span className="font-semibold">Price:</span> $4 to $7 drinks, $2 to $5 bread</p>
                <p><span className="font-semibold">Best drink:</span> Sea Salt Coffee</p>
                <p><span className="font-semibold">Best food:</span> Tiger Bread, Egg Tart, Milk Buns</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More LA Food Reviews</h3>
              <div className="space-y-2">
                <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Chicha San Chen SGV Review &rarr;
                </Link>
                <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Sunright Tea Studio Review &rarr;
                </Link>
                <Link href="/xing-fu-tang-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Xing Fu Tang Review &rarr;
                </Link>
                <Link href="/wanderlust-creamery-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Wanderlust Creamery Review &rarr;
                </Link>
                <Link href="/best-desserts-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Desserts in LA &rarr;
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
            <h2 className="text-xl font-bold text-[#1A202C] mb-1">Explore the Best Desserts in LA</h2>
            <p className="text-[#4A5568] text-sm">Bakeries, boba, ice cream, and more across Los Angeles.</p>
          </div>
          <Link
            href="/best-desserts-los-angeles/"
            className="bg-[#2B6CB0] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#215387] transition-colors flex-shrink-0"
          >
            Best Desserts LA Guide
          </Link>
        </div>
      </section>
    </>
  );
}
