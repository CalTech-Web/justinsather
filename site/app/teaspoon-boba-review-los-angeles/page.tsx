import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teaspoon Boba Review: LA's Bay Area Import Worth the Hype? | Justin Sather",
  description: "An honest review of Teaspoon boba in Los Angeles. Signature drinks, menu breakdown, pricing, and what to order. Visited in person, paid out of pocket, no sponsorships.",
};

export default function TeaspoonBobaReviewPage() {
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
            Teaspoon Boba Review: Is the Bay Area Import Worth It in Los Angeles?
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
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Classic Milk Tea</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/teaspoon_exterior.png"
            alt="Teaspoon boba shop exterior Los Angeles"
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
            { label: "Locations", value: "Multiple across LA" },
            { label: "Hours", value: "Check Google for current hours" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Classic milk tea, everyday boba" },
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
              Teaspoon started in the Bay Area and has since expanded into Los Angeles with several locations across the city. It sits in a specific lane: cleaner than a strip mall chain, less expensive than Boba Guys, more consistent than the average independent shop. For a lot of people in LA, that is exactly the right spot.
            </p>
            <p>
              I have tried Teaspoon at multiple LA locations over multiple visits. The drinks hold up. The Brown Sugar Boba Milk and the Jasmine Milk Tea are both genuinely good. The shop does not try to be everything to everyone, and that focus shows in the execution.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes Teaspoon Stand Out</h2>
            <p>
              The differentiator at Teaspoon is consistency. Every location I have visited in LA delivers the same quality level. The tea base is brewed, not powder. The pearls are cooked properly. The sweetness levels are reliable when you ask for adjustments. That sounds basic, but it is surprisingly rare in a chain environment.
            </p>
            <p>
              The menu is designed around classic Taiwanese boba rather than trend-chasing. You will not find thirty fusion items here. You will find well-executed versions of the drinks the category was built on, plus a focused set of seasonal and signature items. That approach works.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Menu</h2>
            <p>
              The core menu at Teaspoon centers on milk teas, fresh milk teas, and matcha drinks. The Brown Sugar Boba Milk is the flagship item and for good reason. The caramelized brown sugar is layered into the drink visually before mixing, and the pearl-to-milk ratio is calibrated well. It is not as theatrical as Tiger Sugar, but the drink is solid.
            </p>
            <p>
              The Jasmine Milk Tea is the sleeper hit on the menu. The jasmine base is fragrant without being perfumy, and the milk integration is smoother than most shops achieve with jasmine. If you like a lighter, more floral milk tea, this is the one to order.
            </p>
            <p>
              The Matcha Latte is worth ordering if matcha is your thing. Teaspoon uses a ceremonial-grade matcha that reads as actual matcha rather than green sugar. It is bitter in the right way. The milk tempers it without drowning it.
            </p>
            <p>
              Seasonal specials rotate in regularly and tend to be more interesting than the base menu. Pay attention to what is new on the board when you arrive.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What to Order</h2>
            <p>
              On your first visit, get the Brown Sugar Boba Milk. It is the drink most people associate with Teaspoon and it is a reliable entry point. Order it at 50% sweet if you prefer less sugar, full sugar if you want the full brown sugar effect.
            </p>
            <p>
              Once you know the menu, come back for the Jasmine Milk Tea. It is quieter than the Brown Sugar drink but more interesting the more you think about it. The quality of the jasmine base is the best argument for why Teaspoon deserves repeat visits.
            </p>
            <p>
              The Tiger Milk Tea is a close relative of the Tiger Sugar brown sugar style and runs a bit cheaper than going to a dedicated brown sugar shop. If you are in the neighborhood and craving that flavor profile, the Teaspoon version gets the job done.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Drinks at Teaspoon run $6 to $8. That puts it comfortably below Boba Guys, roughly on par with 7 Leaves Cafe, and above the sub-$5 shops in Koreatown. For the quality level, the pricing is fair. You are not getting a deal, but you are not overpaying either.
            </p>
            <p>
              The locations are generally well-staffed and the wait time is shorter than at dedicated craft shops on busy weekends. If speed matters, Teaspoon delivers faster than most comparable options.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Los Angeles Locations</h2>
            <p>
              Teaspoon has expanded steadily across LA since entering the market. Current locations include neighborhoods across the Westside, the Valley, and the Eastside. Exact hours vary by location, so check Google before going. The shop footprints are modest, typically counter-service with limited seating, which keeps wait times down.
            </p>
            <p>
              The Westside locations draw the heaviest traffic. If you are near a location in the Valley or further east, those tend to be less crowded with shorter waits, same drink quality.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Consistent quality across multiple LA locations</li>
                  <li>Jasmine Milk Tea is one of the best in the city</li>
                  <li>Brewed tea base, not powder</li>
                  <li>Reasonable pricing for the quality tier</li>
                  <li>Faster service than most craft boba shops</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Menu is conservative, not much experimentation</li>
                  <li>Limited seating at most locations</li>
                  <li>Brown Sugar drink is good but not best-in-class</li>
                  <li>Seasonal specials disappear too fast</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Teaspoon is the kind of boba shop LA needed more of: quality-conscious without being precious about it, priced fairly, and available in multiple neighborhoods. It is not the most exciting shop on this list and it does not try to be. What it is, reliably, is a good cup of boba at a fair price from a shop that actually brews its tea.
            </p>
            <p>
              Four point three out of five. A little more menu ambition and a little more seating and this becomes a five.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the Jasmine Milk Tea on your second visit. It is the best thing on the menu that most people miss on the first pass.</li>
                <li>Ask about seasonal specials before you default to the standard menu. They rotate frequently and tend to be the most interesting options.</li>
                <li>Request 50% sweetness on the Brown Sugar Boba Milk if you find standard brown sugar drinks too sweet. The drink works better balanced.</li>
                <li>The Valley and Eastside locations are significantly less crowded than the Westside spots. Same quality, shorter wait.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Quick Rating</h3>
              <div className="space-y-2">
                {[
                  { label: "Drink Quality", score: 8 },
                  { label: "Pearl Freshness", score: 8 },
                  { label: "Value", score: 9 },
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
              <p className="text-5xl font-bold">4.3/5</p>
              <p className="text-blue-100 text-xs mt-1">Consistent, quality boba across LA</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Locations:</span> Multiple across Los Angeles</p>
                <p><span className="font-semibold">Price:</span> $6 to $8 per drink</p>
                <p><span className="font-semibold">Seating:</span> Limited, mostly counter service</p>
                <p><span className="font-semibold">Best drink:</span> Jasmine Milk Tea</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More LA Boba Reviews</h3>
              <div className="space-y-2">
                <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Boba Guys Review &rarr;
                </Link>
                <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  It&apos;s Boba Time Review &rarr;
                </Link>
                <Link href="/7-leaves-cafe-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  7 Leaves Cafe Review &rarr;
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
