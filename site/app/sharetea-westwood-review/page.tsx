import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sharetea Westwood Review: The Complete Menu Guide Near UCLA | Justin Sather",
  description: "An honest review of Sharetea Westwood, Los Angeles. Full menu breakdown, best drinks, pricing, and insider ordering tips. Paid out of pocket, no sponsorships.",
};

export default function ShareteaWestwoodReviewPage() {
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
            Sharetea Westwood Review: The Complete Menu Guide Near UCLA
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
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4.2/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Westwood Village, LA</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Milk Tea &amp; Fruit Tea</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_scene_lifestyle.png"
            alt="Sharetea Westwood Los Angeles boba"
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
            { label: "Location", value: "Westwood Village, near UCLA" },
            { label: "Hours", value: "Check Google for current hours" },
            { label: "Price Range", value: "$" },
            { label: "Best For", value: "Everyday boba, large groups, customization" },
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
              Sharetea Westwood is the boba shop I recommend when someone asks me where to go near UCLA. The menu is enormous, the quality is consistent, and the prices are fair. It is not the most exciting boba in Los Angeles, but it is reliable in a way that matters when you are going back regularly.
            </p>
            <p>
              I have visited the Westwood location multiple times over the past year. The drinks hold up across visits. The staff is efficient even when the shop is packed, which happens constantly given the foot traffic from the UCLA campus nearby.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">About Sharetea</h2>
            <p>
              Sharetea is a Taiwanese boba chain founded in 1992 in Taipei. They have expanded to over 450 locations across 15 countries and have a significant footprint across California. The Westwood location serves one of the densest concentrations of boba drinkers in Los Angeles: college students who want something affordable and consistent.
            </p>
            <p>
              The chain made its name on customization. Every drink can be adjusted across multiple variables: sugar level (0% to 100%), ice level (no ice to regular ice), milk type, and topping combinations. This flexibility is why Sharetea developed such a loyal repeat customer base. You can walk in 50 times and order something different every visit.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Sharetea Westwood Menu</h2>
            <p>
              The Sharetea menu is divided into several categories: classic milk teas, fruit teas, specialty drinks, smoothies, and slushes. The Westwood location carries the full standard menu with rotating seasonal items.
            </p>
            <p>
              The standout categories are the classic milk teas and the fruit teas. The milk teas use a brewed base, not a powder mix, which gives them a cleaner flavor than a lot of chains at this price point. The fruit teas are built on a green tea base with real fruit added, not just syrup.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What to Order at Sharetea Westwood</h2>
            <p>
              The Three Mates is the drink that introduced Sharetea to most of its regulars. It blends Assam black tea, green tea, and oolong, which produces a layered flavor profile that is more interesting than any single-base drink. Order it at 50% sweet to let the tea come through.
            </p>
            <p>
              The Handcrafted Milk Tea is the baseline you should use to judge any boba shop. Sharetea Westwood does it well. The Assam tea is strong enough to hold up against the milk, and the tapioca pearls have good chew without being over-cooked. It is not the best milk tea in the city, but it is consistently good at a price that makes it easy to come back for.
            </p>
            <p>
              The Mango Green Tea is the best fruit tea on the menu. Real mango pieces, clean green tea base, and a sweetness level that does not overpower either ingredient. Order it with popping boba instead of tapioca for a different texture experience.
            </p>
            <p>
              For something off the standard ordering path, ask for the Winter Melon Milk Tea if it is available. The winter melon flavor is subtle and slightly floral, and it pairs well with the milk tea base in a way that most sweeteners do not. It is the drink that converts skeptics.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Toppings Guide</h2>
            <p>
              Sharetea Westwood carries a wider topping selection than most shops. The standard tapioca pearls are good. The coconut jelly is chewy with a faint sweetness that does not compete with the drink. The aloe vera is light and refreshing, best matched with fruit teas. The egg pudding is rich and custard-forward, best matched with milk teas.
            </p>
            <p>
              The popping boba deserves a specific mention. These are small spheres filled with juice that burst when you bite them. The passion fruit and mango versions are worth trying at least once. They change the texture experience of the drink in a way that standard tapioca cannot.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Westwood Location</h2>
            <p>
              The shop sits in Westwood Village, the commercial strip that borders the UCLA campus from the south. The area is dense with foot traffic throughout the day and heavy with students in the afternoon and evening. The interior of the shop is functional rather than atmospheric: you come here for the drink, not the ambiance.
            </p>
            <p>
              Street parking in Westwood Village is limited, especially in the evening. The UCLA parking structures nearby charge by the hour and fill up fast. If you are driving, plan to arrive before 5pm or after 9pm to avoid the worst of it. If you are on campus, the shop is walkable from anywhere on the south side.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Extensive menu with something for every preference</li>
                  <li>Real brewed tea base, not powder</li>
                  <li>Full customization on sugar and ice levels</li>
                  <li>Affordable pricing relative to quality</li>
                  <li>Efficient service even during peak UCLA hours</li>
                  <li>Wide topping selection including popping boba</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Atmosphere is basic, not a place to linger</li>
                  <li>Can get very crowded during UCLA class transitions</li>
                  <li>Parking in Westwood Village is genuinely difficult</li>
                  <li>Large menu can be overwhelming for first-timers</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Sharetea Westwood earns its reputation as the go-to boba spot near UCLA. The Three Mates and the Mango Green Tea are both excellent. The customization system is the best in class at this price point. The atmosphere is not a selling point, but the drink quality and value make up for it.
            </p>
            <p>
              Four point two out of five. This is the shop I recommend to people who want good, affordable boba they can order differently every time. If you are looking for the most exciting or premium experience in LA, go to Boba Guys or Tiger Sugar. If you want consistency and value near Westwood, Sharetea is the answer.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Start with the Three Mates at 50% sweet. It is the drink that explains why Sharetea has a following.</li>
                <li>Add egg pudding to any milk tea for a richer texture that makes the drink feel like a full snack.</li>
                <li>Avoid the 2pm to 5pm window on weekdays if you want a shorter wait. The post-class rush is real.</li>
                <li>Ask what seasonal specials are available before defaulting to the standard menu. They rotate every few months.</li>
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
                  { label: "Atmosphere", score: 5 },
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
              <p className="text-5xl font-bold">4.2/5</p>
              <p className="text-blue-100 text-xs mt-1">Best value boba near UCLA</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Area:</span> Westwood Village, near UCLA</p>
                <p><span className="font-semibold">Price:</span> $5 to $8 per drink</p>
                <p><span className="font-semibold">Parking:</span> Street parking limited, use UCLA structures</p>
                <p><span className="font-semibold">Best drink:</span> Three Mates, Mango Green Tea</p>
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
