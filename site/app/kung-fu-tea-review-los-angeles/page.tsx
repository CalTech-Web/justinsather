import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kung Fu Tea Menu & Review: The Complete Guide for Los Angeles | Justin Sather",
  description: "Kung Fu Tea menu breakdown, what to order, what to skip, and how it stacks up against the rest of LA boba. Honest review from personal visits, paid out of pocket. No sponsorships.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Kung Fu Tea Menu & Review: The Complete Guide for Los Angeles",
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
    "name": "Kung Fu Tea",
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
  "datePublished": "2026-03-21",
  "url": "https://justinsather.com/kung-fu-tea-review-los-angeles/"
};

export default function KungFuTeaReviewPage() {
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
            Kung Fu Tea Menu &amp; Review: The Complete Guide for Los Angeles
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
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4.1/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Multiple LA Locations</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">American Chain</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_scene_lifestyle.png"
            alt="Kung Fu Tea boba drinks Los Angeles"
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
            { label: "Best For", value: "Kung Fu Milk Tea, Taro Slush, everyday boba runs" },
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
              Kung Fu Tea is one of the most recognized bubble tea chains in the country, and its Los Angeles locations deliver exactly what the brand promises: consistent, approachable boba at a price that makes it easy to visit often. The menu is broad, the drinks are reliable, and the experience is straightforward. If you want a dependable cup without a lot of decision fatigue, Kung Fu Tea is a solid choice.
            </p>
            <p>
              It does not rank among the most distinctive boba experiences in LA, but that is not the goal here. Kung Fu Tea occupies a clear spot in the market: accessible, reliable, and widely available. For what it is, it earns a confident recommendation.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Kung Fu Tea Menu: What to Order</h2>
            <p>
              The <strong>Kung Fu Milk Tea</strong> is the house signature and the right place to start. It is a classic Hong Kong-style milk tea made with a strong black tea base and a creamy finish. The sweetness is balanced, the tea flavor is present without being bitter, and the tapioca pearls are cooked to a proper chew. This drink is the benchmark for the chain and it holds up well.
            </p>
            <p>
              The <strong>Brown Sugar Boba Milk</strong> is the most popular drink in the current LA boba climate and Kung Fu Tea executes it competently. The brown sugar syrup has a decent caramel depth, though it does not quite reach the level of{" "}
              <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tiger Sugar
              </Link>
              , which remains the gold standard for this drink in Koreatown. Kung Fu Tea&apos;s version is good enough to satisfy the craving without the premium price or the wait.
            </p>
            <p>
              The <strong>Taro Slush</strong> stands out as one of the better items on the menu. The taro flavor is genuine and the slush texture is well-executed, thicker than most LA chains manage. If taro is your preference, this is worth ordering over the taro milk tea.
            </p>
            <p>
              The <strong>Matcha Latte</strong> is a reliable option for non-tea drinkers who want something more rounded. The matcha is not single-origin ceremonial grade, but it is properly mixed and not overly sweet. Order it at 25 percent sweet for the best result.
            </p>
            <p>
              The <strong>Mango Slush</strong> is a crowd pleaser for fruit tea fans. It is bright, refreshing, and consistent. On a warm LA afternoon, this is one of the better grab-and-go options Kung Fu Tea offers.
            </p>
            <p>
              Skip the <strong>Passion Fruit Green Tea</strong>. The passion fruit flavoring reads as artificial, which stands out in a city where fresh fruit teas from shops like{" "}
              <Link href="/yi-fang-taiwan-fruit-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Yi Fang
              </Link>{" "}
              have raised the bar for this category.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Kung Fu Tea bubble tea menu Los Angeles"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Menu Customization</h2>
            <p>
              Kung Fu Tea gives you full control over sweetness and ice level, which matters more than most people think. The default sweetness at most LA boba chains is calibrated too high. At Kung Fu Tea, ordering at 50 percent sweet is the move for milk teas. It lets the tea flavor come through and makes the drink less cloying on the back half.
            </p>
            <p>
              Topping selection is solid. Tapioca pearls are the obvious choice and they are consistently good here. The lychee jelly is a lighter option worth trying if you want something different. Avoid the coconut jelly, which lacks flavor at most locations.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">LA Locations</h2>
            <p>
              Kung Fu Tea has spread across Los Angeles County with locations in neighborhoods including Koreatown, Alhambra, the San Gabriel Valley, and the Westside. The chain has enough coverage that most LA residents can reach one without a dedicated trip.
            </p>
            <p>
              Quality consistency across LA locations is generally good. The drinks you get at one store match what you would expect from another, which reflects well-standardized training and supply. There can be variation in pearl freshness depending on time of day, but this is a minor complaint that applies to most chains.
            </p>
            <p>
              The ordering process is fast. Kung Fu Tea has optimized its counter flow, and most locations have minimal wait even during peak hours. This makes it a strong option when you want boba without committing to a longer experience.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Kung Fu Tea sits at the more affordable end of the LA boba market. Most drinks run $6 to $8, which is meaningfully below{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>{" "}
              and{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>
              , and roughly in line with{" "}
              <Link href="/feng-cha-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Feng Cha
              </Link>{" "}
              and{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>
              . The value proposition is strong when you account for how often the drinks hit the mark.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares</h2>
            <p>
              Kung Fu Tea positions itself between the value chains and the premium independent shops. It beats the lower-tier fast food bubble tea options handily on quality, but it does not compete with specialty shops on tea sourcing or craft.
            </p>
            <p>
              Against direct competitors like{" "}
              <Link href="/sharetea-westwood-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sharetea
              </Link>{" "}
              and{" "}
              <Link href="/feng-cha-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Feng Cha
              </Link>
              , Kung Fu Tea is competitive on price and roughly equal on quality. The differentiator is menu preference. Kung Fu Tea has a stronger slush program; Feng Cha has better cheese foam. If neither category is a priority, the choice mostly comes down to which location is closest.
            </p>
            <p>
              For the most distinctive boba in LA, you should be looking at{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>{" "}
              for single-origin tea craft or{" "}
              <Link href="/7-leaves-cafe-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                7 Leaves Cafe
              </Link>{" "}
              for Vietnamese-style boba. Kung Fu Tea is not trying to compete in that lane and should not be judged for it.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Kung Fu Milk Tea is a genuinely well-made house drink</li>
                  <li>Taro Slush is one of the better taro offerings in the city</li>
                  <li>Accessible pricing for everyday boba runs</li>
                  <li>Consistent quality across multiple LA locations</li>
                  <li>Fast ordering and pickup, minimal wait times</li>
                  <li>Full customization on sweetness and ice level</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Fruit teas use artificial flavoring in some options</li>
                  <li>Brown sugar boba does not match Tiger Sugar&apos;s standard</li>
                  <li>No single-origin or craft tea sourcing</li>
                  <li>Seating is limited at most LA locations</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Kung Fu Tea is a reliable, well-priced boba chain that does most things right. The Kung Fu Milk Tea and Taro Slush are legitimately good, the pricing makes frequent visits easy, and the locations are spread across LA County in a way that makes the chain accessible.
            </p>
            <p>
              It is not the most distinctive boba you will find in Los Angeles, and it does not need to be. Kung Fu Tea occupies a valuable spot in the LA boba ecosystem as the chain you can count on. A 4.1 out of 5 is an honest score for a shop that consistently delivers what it promises.
            </p>
            <p>
              Start with the Kung Fu Milk Tea. Order it at 50 percent sweet. That is the drink that explains why this chain has stayed relevant in a city that never stops adding new competition.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order all milk teas at 50 percent sweet. The default is calibrated for a sweeter palate and it masks the tea flavor.</li>
                <li>The Taro Slush is one of the standout drinks on the menu. If you usually skip slushes, this one is worth trying.</li>
                <li>Weekday afternoons are the fastest time to visit. Morning and evening rushes extend wait times at the busier LA locations.</li>
                <li>Ask about limited seasonal drinks at the counter. They are not always featured on the main display boards.</li>
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
                  { label: "Menu Range", score: 9 },
                  { label: "Value", score: 9 },
                  { label: "Consistency", score: 8 },
                  { label: "Service Speed", score: 9 },
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
              <p className="text-blue-100 text-xs mt-1">Reliable everyday boba</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Locations:</span> Multiple across LA County</p>
                <p><span className="font-semibold">Origin:</span> USA (founded 2010, New York)</p>
                <p><span className="font-semibold">Price:</span> $6 to $8 per drink</p>
                <p><span className="font-semibold">Best drink:</span> Kung Fu Milk Tea</p>
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
                <Link href="/feng-cha-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Feng Cha Review &rarr;
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
