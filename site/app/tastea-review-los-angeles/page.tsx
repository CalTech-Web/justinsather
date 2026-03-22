import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tastea Review: The Complete Menu Guide for LA Locations | Justin Sather",
  description: "Tastea review covering the full menu, best drinks, LA location guide, and honest comparison to every other boba chain in Los Angeles. Personally visited, zero sponsorships.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Tastea Review: The Complete Menu Guide for LA Locations",
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
    "name": "Tastea",
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
  "datePublished": "2026-03-22",
  "url": "https://justinsather.com/tastea-review-los-angeles/"
};

export default function TasteaReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            Tastea Review: The San Diego Chain That Earns Its Hype in Los Angeles
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
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Multiple LA Locations</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">California Chain</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_scene_lifestyle.png"
            alt="Tastea boba Los Angeles"
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
            { label: "Location", value: "Alhambra, West Covina, multiple LA-area spots" },
            { label: "Hours", value: "Daily 11am to 10pm (varies by location)" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Milk Tea, Fruit Tea, Rose Matcha series" },
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
              Tastea started in San Diego and built a following on the strength of its drinks before expanding up through Southern California into Los Angeles. That trajectory matters because it is the opposite of how most chains grow. Tastea did not arrive in LA because of a corporate expansion playbook. It arrived because people who tried it elsewhere kept asking why it was not here yet.
            </p>
            <p>
              After visiting multiple LA-area Tastea locations and working through a significant portion of the menu, the verdict is that the reputation is earned. Tastea is not the best boba in Los Angeles in any single category, but it is one of the most consistently good chains in the city across multiple drink types, which is harder to pull off than being the best at one thing.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes Tastea Different</h2>
            <p>
              The short answer is balance. Tastea has positioned itself in the middle of the LA boba market: more premium than the budget chains, less austere than the single-origin craft shops. The drinks are made to be approachable and enjoyable without being dumbed down. The tea base is consistently good, the toppings are fresh, and the flavor profiles are thought through rather than thrown together.
            </p>
            <p>
              Most LA boba chains make their name on one signature category. Tiger Sugar owns brown sugar boba.{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>{" "}
              owns premium oolong.{" "}
              <Link href="/yi-fang-taiwan-fruit-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Yi Fang
              </Link>{" "}
              owns real fruit teas. Tastea does not have that one iconic thing, but its milk teas, fruit teas, and specialty drinks are all above average, which means you can bring a group with different preferences and everyone leaves satisfied. That is a real differentiator in a city where most shops have a clear lane and everything outside of it is an afterthought.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Tastea Menu: What to Order</h2>
            <p>
              The <strong>Milk Tea</strong> is the foundation of the Tastea menu and the place to start. The black tea base is brewed to a consistent strength, with enough body to hold up against milk and sugar without disappearing. The pearls are cooked properly, soft with a slight resistance, and served at the right temperature. This is a reliable, well-executed version of the most fundamental boba drink. Not the best milk tea in LA, but a very good one.
            </p>
            <p>
              The <strong>Rose Matcha Milk Tea</strong> is Tastea&apos;s most distinctive drink and the clearest demonstration of what the chain does well. The floral note from the rose is present without being overwhelming, the matcha provides a grounding bitterness, and the milk softens both into something that is genuinely interesting to drink. This combination works because someone at Tastea understood that rose can easily overpower a drink and calibrated accordingly. Order this if you want to understand what Tastea is trying to do.
            </p>
            <p>
              The <strong>Strawberry Milk Tea</strong> is one of the best versions of this drink available at any LA chain. The strawberry is actual strawberry, not a vague red sweetness, and it integrates with the milk tea base rather than floating on top of it. The balance is better than what{" "}
              <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Kung Fu Tea
              </Link>{" "}
              and{" "}
              <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Happy Lemon
              </Link>{" "}
              manage with fruit milk tea. This is the drink to order if milk tea feels too plain but you still want something grounded.
            </p>
            <p>
              The <strong>Passion Fruit Green Tea</strong> is a reliable fruit tea option. The green tea base has enough presence to keep the drink from being straight juice, and the passion fruit flavoring is tart without being sharp. On a hot LA day this is one of the most refreshing options on the menu. A better version of the category than most mid-tier chains manage.
            </p>
            <p>
              The <strong>Taro Milk Tea</strong> is competent but not the chain&apos;s strength. The taro flavor is present and not oversweetened, which is more than can be said for several LA chains that go heavy on taro powder and sugar to mask thin tea bases. But if taro is specifically what you are looking for,{" "}
              <Link href="/7-leaves-cafe-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                7 Leaves Cafe
              </Link>{" "}
              and{" "}
              <Link href="/feng-cha-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Feng Cha
              </Link>{" "}
              execute the taro milk tea category more memorably.
            </p>
            <p>
              One practical note: Tastea allows full sweetness and ice customization, which is standard across LA boba chains now. The Rose Matcha benefits from 75% sugar, where the floral notes are most legible. The standard Milk Tea holds up well at 50% sugar because the tea base is strong enough. Start with those adjustments rather than defaulting to full sugar on your first visit.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Tastea menu Los Angeles"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">LA Locations: Where to Find Tastea</h2>
            <p>
              Tastea&apos;s Los Angeles presence is concentrated in the eastern suburbs and San Gabriel Valley corridor, with locations in Alhambra and West Covina among others. This positions the chain well within the SGV boba market, which is the most competitive and discerning boba market in all of Los Angeles County.
            </p>
            <p>
              The SGV customer base grew up on Taiwanese bubble tea and can tell the difference between a chain doing things correctly and one cutting corners. That Tastea has established a following in this market is meaningful validation. The Alhambra location in particular benefits from the same foot traffic that drives chains like{" "}
              <Link href="/meet-fresh-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Meet Fresh
              </Link>{" "}
              and{" "}
              <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Happy Lemon
              </Link>{" "}
              in that area.
            </p>
            <p>
              Parking varies by location. The West Covina location has easy strip mall parking. The Alhambra location is street parking and can be tighter during peak hours. Both locations run efficiently during busy periods without the extended waits that affect some more Instagram-driven chains on the weekend.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Tastea falls in the mid-tier of LA boba pricing. Drinks run $7 to $9, which is above budget chains like{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>{" "}
              and{" "}
              <Link href="/tp-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                TP Tea
              </Link>
              , but below the premium tier occupied by{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>{" "}
              and Chicha San Chen. For the drink quality delivered, the pricing is fair. You are not paying for brand cachet and you are not getting budget ingredients. The value sits in the middle of the market, which is where most daily boba drinkers actually want it.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares</h2>
            <p>
              The most direct comparison for Tastea in LA is{" "}
              <Link href="/sharetea-westwood-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sharetea
              </Link>
              : both are California-accessible chains in the mid-tier price range with broad menus and consistent execution. Tastea edges Sharetea on drink creativity and the quality of specialty items like the Rose Matcha. Sharetea has more LA locations and a slight edge on classic Taiwanese milk tea execution.
            </p>
            <p>
              Against the premium chains, Tastea does not try to compete on single-origin sourcing or craft credentials. It competes on accessibility and breadth. Against the budget chains, it wins on ingredient quality and drink design. In the crowded middle of the LA boba market, Tastea is one of the cleaner, more reliable options.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Consistently good across multiple drink categories, rare for a chain of this size</li>
                  <li>Rose Matcha Milk Tea is one of the most interesting specialty drinks at any LA boba chain</li>
                  <li>Strawberry Milk Tea is among the best fruit milk teas in the city</li>
                  <li>Fair mid-tier pricing with quality that matches the price point</li>
                  <li>SGV locations serve an unforgiving tea-literate market and hold up well</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>No standout signature drink with the cultural cachet of Tiger Sugar or Boba Guys</li>
                  <li>Limited Westside presence, primarily SGV and eastern suburbs</li>
                  <li>Taro and standard fruit teas are competent but not best-in-class</li>
                  <li>Less brand recognition in LA than competitors with similar quality levels</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Tastea is one of the most underrated chains in Los Angeles, which is saying something in a city where half the boba scene is underrated. It does not have a breakout Instagram moment, it does not dominate a single category, and it has not yet cracked the Westside market where brand visibility is highest. What it has is a menu full of drinks that are executed better than the price suggests and a consistency across locations that most mid-tier chains cannot manage.
            </p>
            <p>
              A 4.3 out of 5 reflects a chain that punches above its class on execution and variety without quite reaching the top tier on any individual drink. The Rose Matcha Milk Tea alone is worth the visit. Add the Strawberry Milk Tea and a Passion Fruit Green Tea to the order and you have one of the better multi-drink boba sessions available in the SGV right now.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>The Rose Matcha Milk Tea at 75% sugar is the best version of that drink. Full sugar muddies the floral and matcha balance that makes it worth ordering.</li>
                <li>Tastea is one of the few chains in LA where the fruit milk teas are as good as the standard milk teas. Do not skip them in favor of defaulting to a plain milk tea.</li>
                <li>If you are building a SGV boba day, Tastea pairs well with Chicha San Chen and Sunright for a complete picture of what the SGV does well across different boba styles.</li>
                <li>The standard Milk Tea at 50% sugar showcases the tea base quality. If it tastes flat at that level, the shop is having an off day. At its best, the tea is notably above average for a chain in this price range.</li>
              </ul>
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
              <p className="text-blue-100 text-xs mt-1">Best all-around mid-tier chain in LA</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Area:</span> Alhambra, West Covina, SGV</p>
                <p><span className="font-semibold">Origin:</span> San Diego, CA (California chain)</p>
                <p><span className="font-semibold">Price:</span> $7 to $9 per drink</p>
                <p><span className="font-semibold">Best drink:</span> Rose Matcha Milk Tea, Strawberry Milk Tea</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More LA Boba Reviews</h3>
              <div className="space-y-2">
                <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Chicha San Chen SGV Review &rarr;
                </Link>
                <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Sunright Tea Studio Review &rarr;
                </Link>
                <Link href="/sharetea-westwood-review/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Sharetea Westwood Review &rarr;
                </Link>
                <Link href="/feng-cha-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Feng Cha Review &rarr;
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
