import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feng Cha Review: The Complete Menu Guide for LA Locations | Justin Sather",
  description: "An honest review of Feng Cha boba in Los Angeles. Full menu breakdown, what to order, what to skip, and how it compares to the rest of the LA boba scene. Personal visit, paid out of pocket.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Feng Cha Review: The Complete Menu Guide for LA Locations",
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
    "name": "Feng Cha",
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
  "datePublished": "2026-03-20",
  "url": "https://justinsather.com/feng-cha-review-los-angeles/"
};

export default function FengChaReviewPage() {
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
            Feng Cha Review: The Complete Menu Guide for LA Locations
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
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Taiwanese Chain</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_scene_lifestyle.png"
            alt="Feng Cha boba drinks Los Angeles"
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
            { label: "Locations", value: "Multiple across LA County" },
            { label: "Hours", value: "Daily 11am to 10pm (varies by location)" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Brown sugar milk tea, cheese foam, everyday visits" },
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
              Feng Cha is a Taiwanese boba chain that has established a serious presence in Los Angeles, and for good reason. The menu hits the right notes for everyday boba drinking: well-made milk teas, a strong cheese foam game, and pricing that does not require you to think twice before ordering. It is not the most distinctive boba experience in the city, but it is one of the most consistently solid.
            </p>
            <p>
              If you have driven past a Feng Cha and wondered whether it is worth stopping, the answer is yes. It earns its place in the LA boba rotation.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Feng Cha Gets Right</h2>
            <p>
              The core strength of Feng Cha is consistency. Across multiple visits to different LA locations, the drinks arrive at the same quality level. The tea base is properly brewed, not watery or overextracted. The pearls are cooked to a real chewy texture, not the mushy version you get at shops that are cutting corners on prep time.
            </p>
            <p>
              Feng Cha also leans into cheese foam more seriously than most chains. The salted cheese foam here has the right density and a balanced salt-to-sweet ratio. It sits on top of the drink properly rather than dissolving immediately, which is a common failure mode at shops that mix it too thin. If you like cheese foam boba, Feng Cha is one of the better options in the city for it.
            </p>
            <p>
              The menu is broad without being overwhelming. There are clear categories: classic milk teas, fruit teas, cheese foam drinks, and seasonal specials. You can navigate it quickly on a first visit without needing to read everything twice.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Feng Cha bubble tea selection Los Angeles"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Feng Cha Menu: What to Order</h2>
            <p>
              The <strong>Brown Sugar Milk Tea</strong> is the entry point for a reason. Feng Cha executes this well. The brown sugar syrup has a caramel depth rather than the flat sweetness you get from shops using syrup out of a bottle. The pearls absorb some of the sugar during prep, which adds flavor to the chew. Start here on your first visit.
            </p>
            <p>
              The <strong>Oolong Milk Tea with Cheese Foam</strong> is the most sophisticated thing on the menu. The oolong base has enough character to hold up against the richness of the cheese foam. Order it at 50 percent sweet to let the tea flavor come through. This is the drink that separates Feng Cha from generic chain boba.
            </p>
            <p>
              The <strong>Strawberry Milk Tea</strong> is a solid choice for fruit tea fans. The strawberry flavor is clean and not artificial-tasting, which is not something you can say about every shop in LA. The fruit tea section generally runs lighter and more refreshing than the milk tea side.
            </p>
            <p>
              Skip the <strong>Taro Milk Tea</strong> unless taro is specifically what you came for. It is fine but not distinctive. There are better taro drinks at other LA shops.
            </p>
            <p>
              The <strong>seasonal specials</strong> are worth checking on each visit. Feng Cha rotates limited offerings that tend to be more creative than the core menu. These are not always listed on the main digital board, so ask at the counter.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">LA Locations</h2>
            <p>
              Feng Cha has multiple locations across Los Angeles County, which is one of its advantages. The chain has a presence in neighborhoods across the city, making it accessible from most parts of LA without a dedicated drive.
            </p>
            <p>
              Location quality is consistent across the LA stores. Feng Cha has clearly invested in standardizing its production process. The drink you get at one location should be essentially the same as another, which is not something all chains manage to achieve. If you have a Feng Cha near you, it is worth knowing that you are not taking a quality gamble.
            </p>
            <p>
              Wait times vary by location and time of day. The ordering process is efficient: order at the counter, get a number, pick up at the bar. No table service. Drinks typically arrive within five to eight minutes, which is fast enough that you do not feel like you are waiting.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Feng Cha sits in the mid-range of LA boba pricing. Most drinks run $7 to $9, which is below{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>{" "}
              and{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>
              , and roughly in line with{" "}
              <Link href="/7-leaves-cafe-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                7 Leaves Cafe
              </Link>{" "}
              and{" "}
              <Link href="/teaspoon-boba-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Teaspoon
              </Link>
              . For the quality you get, this is fair pricing. Feng Cha is not trying to be the cheapest option in the city, but it is not charging premium prices for mid-tier product either.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares</h2>
            <p>
              Feng Cha sits comfortably in the upper-middle tier of LA boba. It beats chains that use lower-quality tea and pearl prep, and it competes seriously with shops like{" "}
              <Link href="/sharetea-westwood-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sharetea
              </Link>{" "}
              and{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>
              {" "}in its price range. Where it falls short is differentiation. There is nothing at Feng Cha that you cannot find somewhere else in LA. It is excellent at the standard boba playbook, not an originator.
            </p>
            <p>
              If you want the most distinctive boba in LA, go to{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>{" "}
              for single-origin tea or{" "}
              <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tiger Sugar
              </Link>{" "}
              for brown sugar showmanship. If you want a reliable, well-made drink from a shop near you, Feng Cha is exactly the right answer.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Consistent quality across multiple LA locations</li>
                  <li>Cheese foam is better than most competitors in the range</li>
                  <li>Brown sugar milk tea is genuinely well-made</li>
                  <li>Accessible pricing for the quality delivered</li>
                  <li>Multiple locations across LA County</li>
                  <li>Fast ordering and pickup process</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Nothing truly distinctive from the broader chain boba category</li>
                  <li>Taro and some secondary items are average</li>
                  <li>Not the place to go if you want premium single-origin tea</li>
                  <li>Seating is limited at most locations</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Feng Cha earns its place in the regular boba rotation. The quality is reliable, the menu is well-executed, and the pricing is fair. It will not give you the most memorable boba experience in Los Angeles, but it will give you a consistently good one, which is exactly what you want from a chain you can reach without a special trip.
            </p>
            <p>
              For everyday boba in LA, Feng Cha is a solid 4.3 out of 5. Start with the Oolong Milk Tea with Cheese Foam and go from there.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the Oolong Milk Tea with Cheese Foam at 50 percent sweet. The tea flavor is subtle and full sugar buries it.</li>
                <li>Ask about the seasonal specials before ordering. These rotate and are not always on the main menu board.</li>
                <li>Afternoon visits on weekdays are the fastest. Morning and evening peaks extend wait times noticeably.</li>
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
                  { label: "Cheese Foam", score: 9 },
                  { label: "Value", score: 8 },
                  { label: "Consistency", score: 9 },
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
              <p className="text-5xl font-bold">4.3/5</p>
              <p className="text-blue-100 text-xs mt-1">Reliable everyday boba</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Locations:</span> Multiple across LA County</p>
                <p><span className="font-semibold">Origin:</span> Taiwan</p>
                <p><span className="font-semibold">Price:</span> $7 to $9 per drink</p>
                <p><span className="font-semibold">Best drink:</span> Oolong Milk Tea with Cheese Foam</p>
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
                <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Chicha San Chen Review &rarr;
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
