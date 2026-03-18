import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7 Leaves Cafe Menu & Review: The Best Vietnamese Boba in Los Angeles | Justin Sather",
  description: "Complete 7 Leaves Cafe menu guide and honest review. Full drink breakdown, secret menu, best orders, and what to expect. Personally visited, paid out of pocket, no sponsorships.",
};

export default function SevenLeavesCafeReviewPage() {
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
            7 Leaves Cafe Review: The Complete Menu Guide for LA&apos;s Best Vietnamese Boba
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
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Multiple LA Locations</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Vietnamese Boba</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/7_leaves_cafe_drink.png"
            alt="7 Leaves Cafe signature Vietnamese coffee and boba drinks Los Angeles"
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
            { label: "Locations", value: "Several across LA County" },
            { label: "Hours", value: "Varies by location" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Vietnamese coffee, fruit teas, secret menu" },
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
              7 Leaves Cafe is the rare boba shop that earns its hype. Originally from Orange County, it has expanded into Los Angeles and brought with it something the LA scene was genuinely missing: a serious Vietnamese coffee and tea program alongside the boba. The drinks are well-crafted, the menu is layered, and the secret menu alone gives you months of exploration.
            </p>
            <p>
              I have visited multiple 7 Leaves locations across LA County over the past year. The quality holds up. For a chain that started as a regional cult favorite, they have managed to scale without losing what made them good.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The 7 Leaves Cafe Menu Explained</h2>
            <p>
              The 7 Leaves menu can look overwhelming on a first visit. It is organized into several categories and understanding the structure helps you order better.
            </p>
            <p>
              The core menu breaks down into Vietnamese coffee drinks, milk teas, fruit teas, slushes, and smoothies. The Vietnamese coffee side is where 7 Leaves genuinely separates itself from every other boba shop in Los Angeles. The ca phe sua da (Vietnamese iced milk coffee) is the drink that built the reputation, and it is excellent.
            </p>
            <p>
              On the boba side, the milk tea lineup is stronger than most shops at this price point. The taro milk tea uses a real taro blend. The matcha is not an afterthought. The signature Pandan Milk Tea is a house original and worth ordering at least once.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 my-4">
              <h3 className="font-bold text-[#1A202C] mb-3 text-base">7 Leaves Cafe Menu Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#4A5568]">
                <div>
                  <p className="font-semibold text-[#1A202C] mb-2">Vietnamese Coffee</p>
                  <ul className="space-y-1">
                    <li>Ca Phe Sua Da (Vietnamese Iced Coffee)</li>
                    <li>Dalgona Coffee</li>
                    <li>Coco Cafe</li>
                    <li>Matcha Coffee Fusion</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[#1A202C] mb-2">Boba and Tea</p>
                  <ul className="space-y-1">
                    <li>Pandan Milk Tea (house original)</li>
                    <li>Taro Milk Tea</li>
                    <li>Tiger Milk Tea</li>
                    <li>Strawberry Matcha</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">7 Leaves Secret Menu</h2>
            <p>
              The 7 Leaves secret menu is real and it is worth knowing about. The most popular off-menu item is the Cloud Milk Tea, which is a standard milk tea topped with a whipped cream cheese foam that adds a savory contrast to the sweetness. Not every location makes it the same way, but most will know what you mean if you ask.
            </p>
            <p>
              Other secret menu items worth asking about include the Brown Sugar Milk Tea with extra pearls and a higher milk-to-tea ratio, and the seasonal collab drinks that appear on their social media before they hit the posted menu. Following their Instagram before your visit pays off.
            </p>
            <p>
              The most important thing to know about the secret menu: just ask. The staff at 7 Leaves locations are generally knowledgeable and happy to accommodate.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What to Order</h2>
            <p>
              First visit: order the Ca Phe Sua Da. This is the Vietnamese iced milk coffee and it is the flagship drink for a reason. Rich, slightly sweet, intensely caffeinated, and better than what you will find at most Vietnamese restaurants. Order it at the default sweetness level on the first visit to understand the baseline.
            </p>
            <p>
              Second visit: the Pandan Milk Tea. Pandan is an aromatic leaf used throughout Southeast Asian cooking and it gives the drink a grassy, slightly nutty flavor that tastes nothing like a standard milk tea. It is distinctive without being polarizing.
            </p>
            <p>
              For fruit teas: the Passion Fruit Green Tea is the cleaner choice. The flavor is bright and the sweetness does not overpower the tea base. Good for days when you want caffeine without the milk.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Locations in Los Angeles</h2>
            <p>
              7 Leaves has expanded steadily into Los Angeles from its Orange County base. You will find locations in areas including the San Gabriel Valley, Koreatown, and various neighborhoods across LA County. The SGV locations draw the longest lines, which tells you something about where the most enthusiastic boba crowd is in this city.
            </p>
            <p>
              Parking is generally available at most locations since many are in shopping centers with dedicated lots. This is not a guarantee in LA, but 7 Leaves tends to be in accessible spots rather than street-parking-only areas.
            </p>
            <p>
              Wait times vary. The SGV locations on weekends can run 15 to 20 minutes. Weekday afternoons are significantly faster at every location I have visited. Mobile ordering where available cuts the wait substantially.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Best Vietnamese coffee in LA boba scene</li>
                  <li>Deep, layered menu with real flavor variety</li>
                  <li>Active secret menu worth exploring</li>
                  <li>Quality holds up across multiple locations</li>
                  <li>Pandan Milk Tea is genuinely unique</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Weekend waits at SGV locations can be long</li>
                  <li>Slightly pricier than average LA boba</li>
                  <li>Menu is overwhelming without a guide</li>
                  <li>Secret menu execution varies by location</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              7 Leaves Cafe earns its reputation. The Vietnamese coffee program alone puts it in a category above most boba shops in Los Angeles. The boba and tea menu has enough range to keep regulars engaged, and the secret menu gives you a reason to keep coming back.
            </p>
            <p>
              If you have never been, order the Ca Phe Sua Da first. Then come back for the Pandan Milk Tea. After that, start asking about the secret menu. Four and a half out of five.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the Ca Phe Sua Da at default sweetness first. It is calibrated well and customizing before you know the baseline is a mistake.</li>
                <li>Ask about the secret menu. The Cloud Milk Tea is not listed but most locations will make it.</li>
                <li>Go on a weekday afternoon for the shortest wait. SGV weekend crowds are real.</li>
                <li>Request less ice if you are staying to drink on-site. The tea base is strong enough to hold without as much dilution.</li>
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
                  { label: "Pearl Freshness", score: 8 },
                  { label: "Value", score: 7 },
                  { label: "Atmosphere", score: 8 },
                  { label: "Service", score: 8 },
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
              <p className="text-blue-100 text-xs mt-1">Best Vietnamese boba in Los Angeles</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Shop Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Locations:</span> Multiple across LA County</p>
                <p><span className="font-semibold">Price:</span> $6 to $9 per drink</p>
                <p><span className="font-semibold">Parking:</span> Available at most locations</p>
                <p><span className="font-semibold">Must Order:</span> Ca Phe Sua Da, Pandan Milk Tea</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More LA Boba Guides</h3>
              <div className="space-y-2">
                <Link href="/best-boba-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Boba in Los Angeles (25+ shops) &rarr;
                </Link>
                <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Koreatown Boba Guide (30+ shops) &rarr;
                </Link>
                <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  It&apos;s Boba Time Review &rarr;
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
