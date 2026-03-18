import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yi Fang Taiwan Fruit Tea Review: Fresh Fruit Boba on Fairfax | Justin Sather",
  description: "An honest review of Yi Fang Taiwan Fruit Tea in Los Angeles. Fresh fruit teas, no syrups, farm-to-cup ingredients. What to order, best drinks, and the Fairfax location breakdown.",
};

export default function YiFangReviewPage() {
  return (
    <>
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
            Yi Fang Taiwan Fruit Tea Review: The Real Fruit Tea Experience in LA
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
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4.5/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Fairfax &amp; Sawtelle</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Fruit Tea</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/yifang_exterior.png"
            alt="Yi Fang Taiwan Fruit Tea exterior Los Angeles"
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
            { label: "Main Location", value: "7119 Melrose Ave, Los Angeles" },
            { label: "Hours", value: "Daily 11am to 10pm (approx.)" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Fruit tea, Taiwanese specialty drinks" },
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
              Yi Fang Taiwan Fruit Tea does one thing better than almost anyone in LA: fresh fruit tea made with actual fruit. Not syrup. Not powder. Real pineapple, real lemon, real strawberry squeezed into Taiwanese tea. If you have only tried milk tea chains, Yi Fang is a different category entirely.
            </p>
            <p>
              The Fairfax location on Melrose has been one of my more consistent LA boba stops over the past year. The concept comes from Taiwan, where the brand built its reputation around farm-to-cup sourcing and single-origin tea leaves. In LA, that translates to a drink that tastes noticeably cleaner than the competition.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes Yi Fang Different</h2>
            <p>
              The core difference is in the ingredients. Most boba shops use flavored syrups to create fruit teas. Yi Fang uses freshly squeezed fruit juice. You can taste it immediately. There is an acidity and freshness in the pineapple green tea that no syrup can replicate.
            </p>
            <p>
              The tea base also matters here. Yi Fang imports Taiwanese tea leaves and brews them in-house. The result is a cleaner, more delicate flavor than the heavy concentrate bases that most chains use. If you care about what is actually in your drink, this is the shop.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/yifang_drink.png"
                alt="Yi Fang Taiwan Fruit Tea signature drinks Los Angeles"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">What to Order</h2>
            <p>
              The Pineapple Green Tea is the signature and the right starting point. Freshly squeezed pineapple juice mixed with cold-brewed green tea, served over ice. It is bright, slightly tart, and genuinely refreshing. Nothing else on Melrose tastes like it.
            </p>
            <p>
              The Taiwan Lemon Green Tea is the second best order. The lemon is squeezed per order, so every drink is slightly different depending on the fruit that day. Order it with just a splash of honey instead of sugar for a cleaner flavor profile.
            </p>
            <p>
              If you want something more familiar, the Brown Sugar Milk Tea is solid. Less spectacular than the fruit teas, but well-executed. The pearls are cooked in brown sugar syrup and have good texture. It is not the reason to come here, but it will not disappoint.
            </p>
            <p>
              Skip the smoothie-style blended drinks. They lose the delicate fruit and tea character that makes Yi Fang worth visiting. The whole point is the fresh, clean flavors, and blending them out is a waste.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Fairfax Location</h2>
            <p>
              The Fairfax location on Melrose Avenue near The Grove sits in a busy stretch of LA retail. Street parking is available on Melrose and on the side streets, though it fills up on weekends. The shop itself is compact, with a short queue that moves quickly.
            </p>
            <p>
              Service is efficient. The staff is clearly practiced, and the wait time is rarely more than five minutes even during the afternoon rush. The interior is clean and minimal. Yi Fang is not a sit-down shop, it is a walk-in, order, and go experience, and the Fairfax location is set up for exactly that.
            </p>
            <p>
              There is also a Sawtelle location in West LA that serves the same menu. If you are on the Westside, Sawtelle is the easier stop. Both locations maintain the same quality, which is worth noting for a brand with multiple outposts.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Yi Fang sits in the mid-range for LA boba. Expect to pay $7 to $9 for a standard drink, slightly more than a chain like{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>{" "}
              but in line with{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>
              . Given the fresh fruit ingredients, the price is fair. You are paying for real produce, not flavor concentrate.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares</h2>
            <p>
              Yi Fang fills a gap in the LA boba market. The milk tea specialists like Tiger Sugar and Boba Guys are doing something different, optimizing for rich, indulgent drinks. Yi Fang is the shop for when you want something lighter and more refreshing. The fruit tea category in LA does not have many strong players at this quality level, which makes Yi Fang stand out more than it otherwise would.
            </p>
            <p>
              If you are new to boba and not sure where to start, Yi Fang is actually a good first stop. The fruit teas are approachable, not as sweet as most milk tea options, and the ingredients are transparent. It is a low-risk way to get into the category.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Real fresh fruit, no syrups or powders</li>
                  <li>Imported Taiwanese tea leaves, noticeably better quality</li>
                  <li>Fast service, rarely more than a five-minute wait</li>
                  <li>Fairfax location is convenient to a lot of LA neighborhoods</li>
                  <li>Lighter and more refreshing than typical milk tea chains</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Only two LA locations, not convenient for most of the county</li>
                  <li>Menu is shorter than most competitors</li>
                  <li>Blended drinks are not worth ordering</li>
                  <li>Street parking can be a challenge on weekends</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Yi Fang Taiwan Fruit Tea is one of the most distinctive shops in Los Angeles. The fresh fruit approach is not a gimmick, it genuinely produces a better drink. The Pineapple Green Tea alone is worth the trip to Fairfax. If your usual boba order is a milk tea, Yi Fang will show you what you have been missing.
            </p>
            <p>
              Four and a half out of five. The best fruit tea in LA at this price point, and one of the few shops in the city where the ingredients are worth talking about.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the Pineapple Green Tea at 70% sweet. The natural fruit acidity means you do not need full sugar to get a full-flavored drink.</li>
                <li>Go earlier in the day. The fruit is freshest in the morning and early afternoon before the evening rush depletes inventory.</li>
                <li>The Sawtelle location on the Westside has shorter waits than Fairfax on weekends. Same menu, less foot traffic.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Quick Rating</h3>
              <div className="space-y-2">
                {[
                  { label: "Drink Quality", score: 9 },
                  { label: "Ingredient Freshness", score: 10 },
                  { label: "Value", score: 7 },
                  { label: "Atmosphere", score: 7 },
                  { label: "Service", score: 9 },
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
              <p className="text-5xl font-bold">4.5/5</p>
              <p className="text-blue-100 text-xs mt-1">Best fruit tea in LA</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Fairfax:</span> 7119 Melrose Ave, Los Angeles</p>
                <p><span className="font-semibold">Sawtelle:</span> West LA location</p>
                <p><span className="font-semibold">Price:</span> $7 to $9 per drink</p>
                <p><span className="font-semibold">Parking:</span> Street parking on Melrose</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More LA Boba Reviews</h3>
              <div className="space-y-2">
                <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Tiger Sugar Koreatown Review &rarr;
                </Link>
                <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Boba Guys Review &rarr;
                </Link>
                <Link href="/7-leaves-cafe-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  7 Leaves Cafe Review &rarr;
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
