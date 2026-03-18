import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boba Guys Review: LA's Premium Boba Shop Explained | Justin Sather",
  description: "An honest review of Boba Guys in Los Angeles. Premium ingredients, signature drinks, honest pros and cons, and what to order. Paid out of pocket, no sponsorships.",
};

export default function BobaGuysReviewPage() {
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
            Boba Guys Review: Is the Premium Price Worth It in Los Angeles?
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
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Beverly Blvd, LA</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Premium Milk Tea</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_guys_exterior.png"
            alt="Boba Guys exterior Los Angeles"
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
            { label: "Location", value: "Rideback Ranch, Beverly Blvd" },
            { label: "Hours", value: "Check Google for current hours" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Premium boba, dates, gifts" },
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
              Boba Guys is the closest thing Los Angeles has to a fine dining boba experience. The drinks cost more than almost anything else on this list, and they earn most of that premium. If you have been dismissing boba as a cheap sugar drink, one visit here will change your mind.
            </p>
            <p>
              I have visited the LA location at Rideback Ranch on Beverly Blvd multiple times over the past year. The consistency is remarkable. The Earl Grey Milk Tea in particular is something I think about regularly. That does not happen with most boba shops.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes Boba Guys Different</h2>
            <p>
              The core difference is ingredients. Boba Guys uses real brewed tea leaves instead of powder, organic dairy, and tapioca pearls cooked fresh throughout the day. This sounds like marketing copy, but the result actually tastes different. The tea flavor is cleaner, the milk is richer, and the pearls have a texture that most shops cannot replicate.
            </p>
            <p>
              They were founded in 2011 in San Francisco with the explicit goal of elevating the category. The LA location carries that same philosophy. Everything is made with more care than you expect from a boba counter.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Menu</h2>
            <p>
              The menu is focused compared to most boba shops, which is a good thing. You will not find 80 options here. What you will find is a tight lineup of milk teas, matcha drinks, and seasonal specials, all executed well.
            </p>
            <p>
              The signature items are the Earl Grey Milk Tea, the Horchata Milk Tea, and the Strawberry Matcha. The Thai Milk Tea is also on rotation and is one of the best versions in the city. Seasonal specials show up throughout the year and are worth trying when available.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/boba_guys_drinks.png"
                alt="Boba Guys signature drinks Los Angeles"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">What to Order</h2>
            <p>
              Start with the Earl Grey Milk Tea. It is the drink that launched Boba Guys as a concept and it is still the best thing on the menu. The bergamot flavor from the Earl Grey cuts through the sweetness of the milk in a way that standard black milk tea cannot. Order it at 75% sweet.
            </p>
            <p>
              The Horchata Milk Tea is the sleeper hit. Cinnamon and vanilla with milk tea underneath, topped with tapioca pearls. It sounds like a gimmick and tastes like the real thing. If you grew up drinking horchata in LA, this one will hit differently.
            </p>
            <p>
              The Strawberry Matcha is the most Instagrammed item on the menu for good reason. The visual is striking and the flavor actually backs it up. Real matcha, not the sweetened powder. Real strawberry, not syrup. Skip it if you want a traditional milk tea. Order it if you want something memorable.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Price Question</h2>
            <p>
              A drink here runs $8 to $10. That is double what you pay at It&apos;s Boba Time and significantly more than most shops in Koreatown. The question is whether the quality justifies the gap.
            </p>
            <p>
              My answer is yes, with a caveat. If you are grabbing boba for a quick everyday drink, go to a cheaper shop. If you are treating yourself, bringing someone who has never had great boba, or just want to understand what premium looks like in this category, Boba Guys is worth every dollar. It is a different product at a different price point. Both can be right.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Rideback Ranch Location</h2>
            <p>
              The LA location sits inside Rideback Ranch, a creative campus on Beverly Blvd in the Echo Park area. The setting is unlike any other boba shop in the city. The space is open, the lighting is good, and the vibe skews creative professional rather than strip mall. It is a genuinely pleasant place to sit for an hour.
            </p>
            <p>
              Parking is available in the Rideback Ranch lot. The location is also bikeable from Silver Lake and Echo Park. Weekends get busy mid-afternoon. Weekday mornings and early evenings are calmer and the staff has more time for you.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Best quality ingredients of any boba shop in LA</li>
                  <li>Earl Grey Milk Tea is genuinely world-class</li>
                  <li>Focused menu means everything is executed well</li>
                  <li>Beautiful location inside Rideback Ranch</li>
                  <li>Fresh tapioca pearls, not sitting for hours</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>$8 to $10 per drink is the most expensive in LA</li>
                  <li>Only one LA location</li>
                  <li>Menu is smaller than most competitors</li>
                  <li>Can have long waits on weekend afternoons</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Boba Guys is the best boba shop in Los Angeles if quality is your top priority and price is not your constraint. The Earl Grey Milk Tea alone justifies the trip. The Horchata Milk Tea makes you want to come back. The Strawberry Matcha gives you something to talk about.
            </p>
            <p>
              Four and a half out of five. Deducting half a point purely because one location means you will not always be able to get there. If they open more LA spots, that becomes a five.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the Earl Grey Milk Tea at 75% sweet on your first visit. It is the single best drink in LA boba.</li>
                <li>Weekday mornings between 10am and noon are the fastest service of the week.</li>
                <li>Ask about seasonal specials before ordering. They rotate regularly and are often the most interesting thing on the menu.</li>
                <li>Bring someone who thinks boba is just a sugar drink. This is the place that changes that perception.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Quick Rating</h3>
              <div className="space-y-2">
                {[
                  { label: "Drink Quality", score: 10 },
                  { label: "Pearl Freshness", score: 9 },
                  { label: "Value", score: 7 },
                  { label: "Atmosphere", score: 9 },
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
              <p className="text-blue-100 text-xs mt-1">Best quality boba in Los Angeles</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Address:</span> Rideback Ranch, Beverly Blvd, Los Angeles</p>
                <p><span className="font-semibold">Price:</span> $8 to $10 per drink</p>
                <p><span className="font-semibold">Parking:</span> Available in Rideback Ranch lot</p>
                <p><span className="font-semibold">Best drink:</span> Earl Grey Milk Tea</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More LA Boba Reviews</h3>
              <div className="space-y-2">
                <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Tiger Sugar Koreatown Review &rarr;
                </Link>
                <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  It&apos;s Boba Time Review &rarr;
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
