import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mashti Malone Review: LA's Best Persian Ice Cream in Hollywood | Justin Sather",
  description: "An honest review of Mashti Malone in Hollywood, LA. Persian ice cream, faloodeh, saffron bastani, and what to order. Visited in person, paid out of pocket, no sponsorships.",
};

export default function MashtiMaloneReviewPage() {
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
            Mashti Malone Review: LA&apos;s Best Persian Ice Cream on Hollywood Boulevard
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
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4.7/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Hollywood</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Persian Ice Cream</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/mashti_malone_product.png"
            alt="Mashti Malone Persian ice cream Los Angeles"
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
            { label: "Location", value: "Hollywood, CA" },
            { label: "Hours", value: "Check Google for current hours" },
            { label: "Price Range", value: "$" },
            { label: "Best For", value: "Saffron bastani, faloodeh, rose water" },
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
              Mashti Malone is one of those Los Angeles institutions that people who have lived here for decades already know, and people who just moved here have not found yet. It is a Persian ice cream shop on Hollywood Boulevard that has been open since 1980, and it is, genuinely, one of the best dessert stops in the city.
            </p>
            <p>
              I have been here multiple times across different seasons. The saffron bastani and the faloodeh are unlike anything else in LA. This is not a boba shop, but if you are exploring desserts in Los Angeles and you have not been to Mashti Malone, you have a gap in your knowledge of this city.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Mashti Malone Is</h2>
            <p>
              Mashti Malone is a Persian ice cream shop, which means the flavor profile is completely different from the Italian gelato or American scoop shop you are used to. The base flavors here come from rosewater, saffron, cardamom, and pistachio. These are not novelty flavors. This is what ice cream tastes like in Iran and has tasted like for centuries.
            </p>
            <p>
              The shop is small, counter-service, and family-run. The storefront on Hollywood Boulevard is modest. Nothing about the exterior tells you that you are about to eat some of the most interesting ice cream in Los Angeles. That is part of what makes it an LA discovery rather than a tourist attraction.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What to Order</h2>
            <p>
              The saffron bastani is the first thing to order. Bastani is traditional Persian ice cream made with saffron, rosewater, and pistachios. The color is a pale gold from the saffron. The flavor is floral and slightly savory in a way that takes one bite to understand and two bites to love. The pistachio pieces throughout add texture without being overwhelming. This is the item that defines the shop.
            </p>
            <p>
              The faloodeh is the second essential order. Faloodeh is a frozen dessert made from thin rice noodles set in a semi-frozen syrup of rosewater and sugar. The texture is completely unlike ice cream. It is lighter, more granular, and the rose flavor is direct. It is served with a squeeze of lime, which brightens the whole dessert. Most people from outside Persian food culture have never had faloodeh before. Mashti Malone is where you fix that.
            </p>
            <p>
              The rosewater ice cream is the third standby. It is less complex than the bastani but delivers the rosewater flavor clearly and cleanly. If you want to understand what Persian ice cream tastes like at its most straightforward, the rosewater scoop is the answer.
            </p>
            <p>
              The shop also offers a mixed bastani sandwich served between two wafers. This is a traditional way to eat bastani in Iran, similar to an ice cream sandwich but with a flavor that is nothing like the American version. Worth trying at least once.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Flavors</h2>
            <p>
              The menu at Mashti Malone rotates slightly but the core Persian flavors are always available. Beyond bastani and faloodeh, you will find flavors like pomegranate, orange blossom, pistachio, and cardamom. The shop also offers more familiar Western flavors for people who are not ready to commit to something unfamiliar, though there is really no reason to go to Mashti Malone and order chocolate.
            </p>
            <p>
              The saffron is real. This matters. Cheap saffron ice cream at other shops tastes metallic and artificial. The version at Mashti Malone is made with actual saffron threads, which is why the flavor is rounded and complex rather than sharp and fake. The difference is obvious once you have had both.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Mashti Malone is genuinely affordable by LA dessert standards. A scoop runs around $4 to $6 depending on size. A faloodeh is in the same range. For how good the product is and how long the shop has been doing this, the pricing is fair and accessible. This is not a destination that requires a special occasion. You can come here on a Tuesday for no reason.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Atmosphere</h2>
            <p>
              The shop is small and the seating is limited. There is a counter where you order and a few spots to stand or sit near the front. Most people get their order and walk out. The neighborhood around it on Hollywood Boulevard is busy and loud, but the shop itself is calm inside.
            </p>
            <p>
              The crowd is a genuine cross-section of LA. You will see Persian families, tourists who wandered in from the Hollywood walk, film industry people who know the neighborhood, and regulars who have been coming for years. The vibe is warm and unhurried.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Fits with LA&apos;s Dessert Scene</h2>
            <p>
              LA has a strong Persian community and Mashti Malone has served as one of the anchors of that community&apos;s food culture in Hollywood for over 40 years. The shop predates the craft ice cream boom, the boba explosion, and the current era of dessert content on social media. It has stayed consistent through all of it.
            </p>
            <p>
              Compared to newer spots like Wanderlust Creamery, which does global-inspired flavors as a concept, Mashti Malone is doing something more specific and more historically rooted. Both are worth visiting. They are doing different things.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Saffron bastani is one of the best desserts in LA</li>
                  <li>Faloodeh is a completely unique experience</li>
                  <li>Real saffron, real rosewater, real quality</li>
                  <li>Affordable pricing for the product quality</li>
                  <li>LA institution with 40+ years of history</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Very limited seating inside the shop</li>
                  <li>Hollywood Blvd parking is difficult</li>
                  <li>Menu is narrow compared to craft dessert shops</li>
                  <li>Not a sit-down experience</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Mashti Malone is a genuine Los Angeles original. The saffron bastani and the faloodeh are things you will not find at another shop in the city at this quality level and this price. If you have lived in LA for any amount of time and have not been here, fix that. If you are new to LA, this is one of the first places I would tell you to go.
            </p>
            <p>
              Four point seven out of five. The only thing keeping it from a perfect score is the limited seating and the Hollywood parking situation, both of which are problems with the neighborhood rather than the shop.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the bastani and the faloodeh on your first visit. These two items together give you the full picture of what the shop does.</li>
                <li>The bastani sandwich with wafers is the traditional way to eat it. Ask for it if you want the full experience.</li>
                <li>Park on a side street and walk to the shop. Hollywood Boulevard metered spots are available but the side streets are easier.</li>
                <li>Come in the afternoon on a weekday if you want a shorter wait. Weekend evenings on Hollywood Boulevard are busy.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Quick Rating</h3>
              <div className="space-y-2">
                {[
                  { label: "Flavor Quality", score: 10 },
                  { label: "Authenticity", score: 10 },
                  { label: "Value", score: 9 },
                  { label: "Atmosphere", score: 7 },
                  { label: "Uniqueness", score: 10 },
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
              <p className="text-5xl font-bold">4.7/5</p>
              <p className="text-blue-100 text-xs mt-1">LA&apos;s best Persian ice cream</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Neighborhood:</span> Hollywood, CA</p>
                <p><span className="font-semibold">Price:</span> $4 to $6 per scoop</p>
                <p><span className="font-semibold">Open since:</span> 1980</p>
                <p><span className="font-semibold">Best item:</span> Saffron bastani</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More LA Dessert Reviews</h3>
              <div className="space-y-2">
                <Link href="/wanderlust-creamery-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Wanderlust Creamery Review &rarr;
                </Link>
                <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Boba Guys Review &rarr;
                </Link>
                <Link href="/7-leaves-cafe-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  7 Leaves Cafe Review &rarr;
                </Link>
                <Link href="/teaspoon-boba-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Teaspoon Boba Review &rarr;
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
