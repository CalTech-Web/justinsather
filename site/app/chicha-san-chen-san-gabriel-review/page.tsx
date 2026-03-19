import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chicha San Chen San Gabriel Review: Award-Winning Boba in the SGV | Justin Sather",
  description: "An honest review of Chicha San Chen in San Gabriel. Taiwan's most decorated bubble tea brand lands in the SGV with single-origin teas and a theatrical experience unlike anything else in LA.",
};

export default function ChichaSanChenReviewPage() {
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
            Chicha San Chen San Gabriel Review: Award-Winning Boba in the SGV
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
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">5/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">San Gabriel Valley</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Premium Tea</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/chicha_san_chen_drink.png"
            alt="Chicha San Chen signature tea drinks San Gabriel"
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
            { label: "Location", value: "San Gabriel, CA (SGV)" },
            { label: "Hours", value: "Daily 11am to 10pm (approx.)" },
            { label: "Price Range", value: "$$$" },
            { label: "Best For", value: "Premium single-origin tea, gift-worthy drinks" },
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
              Chicha San Chen is the most serious bubble tea operation in Los Angeles. The brand originates from Taiwan, where it has won awards at the World Tea Championships and built a reputation for sourcing the highest-quality single-origin teas available. The San Gabriel location brings that same standard to the SGV, and the result is the best tea-forward boba experience in the city.
            </p>
            <p>
              This is not the shop for brown sugar milk tea or taro slushies. Chicha San Chen is built around the tea itself. If you want to understand what bubble tea actually tastes like when the tea is treated with the same care as a specialty coffee, this is the place.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes Chicha San Chen Different</h2>
            <p>
              The brand&apos;s name translates roughly to &ldquo;tea at three thousand&rdquo; — a reference to the ideal brewing altitude for premium tea leaves. Every menu item is built around that sourcing philosophy. The teas come from specific growing regions in Taiwan and China, each chosen for distinct flavor profiles rather than generic commodity tea grades.
            </p>
            <p>
              The preparation is also different. Staff steep each tea order at a controlled temperature for a precise time window. There is no massive pre-brewed vat sitting on a warming tray. The tea is made to order, which matters more than it sounds. You can taste the difference in the clarity of the flavor. The finish is clean, not bitter, not flat.
            </p>
            <p>
              Chicha San Chen also won the World Tea Championship, which is not a marketing claim that many bubble tea brands can make. The judges were evaluating actual tea quality. That context matters when you are deciding whether the premium pricing is justified.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/chicha_san_chen_drink.png"
                alt="Chicha San Chen award-winning bubble tea San Gabriel Valley"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">What to Order</h2>
            <p>
              The Four Seasons Tea with pearl is the right starting order. Four Seasons is a Taiwanese oolong variety with a floral, slightly fruity character that holds up beautifully with milk and sweetener added. The pearls are chewy and have a subtle molasses note. It is the menu item that shows you what Chicha San Chen does best.
            </p>
            <p>
              The Wuyi Mountain Oolong is the drink for anyone who wants to understand what single-origin tea actually means in a boba context. Wuyi oolongs have a distinct mineral and roasted quality that is completely unlike the generic &ldquo;oolong&rdquo; offered at most shops. Order it without milk to taste the tea straight. If you like it, add a small amount of milk on your second visit.
            </p>
            <p>
              The Lychee Green Tea is the easy recommendation for people who are newer to the category. The lychee is not overly sweet, it adds a delicate floral note that complements the green tea rather than masking it. A lot of shops use lychee to hide low-quality tea. Chicha San Chen does not need to.
            </p>
            <p>
              Avoid ordering on autopilot. This is not a brown sugar or taro shop. If you come in looking for something heavily sweet and creamy, you will find it on the menu but you will miss the point entirely.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The San Gabriel Location</h2>
            <p>
              The San Gabriel Valley location sits in the heart of LA&apos;s most concentrated stretch of Taiwanese and Cantonese food culture. The area around Valley Boulevard and the surrounding blocks is home to a density of authentic Chinese restaurants, bakeries, and dessert shops that does not exist anywhere else in Los Angeles County.
            </p>
            <p>
              Chicha San Chen fits the neighborhood. This is not a shop transplanted awkwardly into a strip mall. The design is minimal and considered, and the clientele at the SGV location skews toward people who actually know the brand from Taiwan or have family connections to the source. That is a good sign.
            </p>
            <p>
              Parking in San Gabriel can be frustrating. The streets near the main commercial strips get congested on weekends, especially if you are visiting during lunch or dinner hours. Arrive early or plan for a short walk from a side street. The wait inside the shop is manageable, typically under ten minutes, because the ordering process is efficient even with the made-to-order approach.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Chicha San Chen is the most expensive regular stop on my LA boba rotation. Drinks typically run $8 to $12, depending on what you order and how many add-ons you choose. That is notably higher than{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>{" "}
              or{" "}
              <Link href="/7-leaves-cafe-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                7 Leaves Cafe
              </Link>
              , and it is in a similar range to{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>
              .
            </p>
            <p>
              The difference from Boba Guys is where the money goes. Boba Guys invests in ingredient sourcing for the milk and sweetener side of the equation. Chicha San Chen invests in the tea. Both are legitimate approaches. If tea quality specifically matters to you, Chicha San Chen wins.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares</h2>
            <p>
              There is no direct competitor to Chicha San Chen in LA right now. The closest comparison is{" "}
              <Link href="/yi-fang-taiwan-fruit-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Yi Fang Taiwan Fruit Tea
              </Link>
              , which also emphasizes sourced ingredients and a cleaner flavor profile than most chains. But Yi Fang focuses on fresh fruit, not tea quality. They are solving different problems.
            </p>
            <p>
              If you have already tried Tiger Sugar for brown sugar milk tea, Boba Guys for premium milk teas, and Yi Fang for fruit teas, Chicha San Chen is the logical next stop. It completes the picture of what the premium tier of LA boba looks like.
            </p>
            <p>
              The SGV location also gives this review a geographic note worth adding. The San Gabriel Valley is the most important boba destination in Southern California outside of Koreatown. If you are building a full boba map of LA County, the SGV is not optional, and Chicha San Chen should be the anchor of that visit.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>World Tea Championship winner, the credentials are real</li>
                  <li>Single-origin teas sourced from specific growing regions</li>
                  <li>Made-to-order brewing produces noticeably better clarity</li>
                  <li>SGV location places it in the right cultural context</li>
                  <li>Best option in LA for anyone who cares about the tea itself</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Premium pricing, $8 to $12 per drink</li>
                  <li>Not the right shop if you want heavily sweet or creamy drinks</li>
                  <li>SGV parking is a real friction point on weekends</li>
                  <li>Limited locations in LA compared to chain competitors</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Chicha San Chen is the best bubble tea shop in Los Angeles, full stop. The tea quality is in a different category from everyone else in the city. The San Gabriel location is the right place for it. If you take boba seriously or want to understand what the category is actually capable of, this is the visit you have been putting off.
            </p>
            <p>
              Five out of five. Not because it is perfect for every occasion, but because it does what it sets out to do better than anyone else in LA. Order the Four Seasons Tea with pearl and judge for yourself.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order at 70% sweet on your first visit. The tea flavors are delicate and full sugar can overwhelm them. You can always go sweeter on your next order.</li>
                <li>Ask for the seasonal special. Chicha San Chen rotates limited offerings tied to tea harvest cycles. These are usually the most interesting things on the menu and are not always listed on the main board.</li>
                <li>Weekday mornings are the best time to visit the SGV. Parking is easier, waits are shorter, and the tea is as fresh as it will be all day.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Quick Rating</h3>
              <div className="space-y-2">
                {[
                  { label: "Tea Quality", score: 10 },
                  { label: "Ingredient Sourcing", score: 10 },
                  { label: "Value", score: 7 },
                  { label: "Atmosphere", score: 8 },
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
              <p className="text-5xl font-bold">5/5</p>
              <p className="text-blue-100 text-xs mt-1">Best tea quality in LA</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Location:</span> San Gabriel, CA</p>
                <p><span className="font-semibold">Area:</span> San Gabriel Valley (SGV)</p>
                <p><span className="font-semibold">Price:</span> $8 to $12 per drink</p>
                <p><span className="font-semibold">Parking:</span> Street parking, easier on weekdays</p>
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
                <Link href="/yi-fang-taiwan-fruit-tea-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Yi Fang Taiwan Fruit Tea Review &rarr;
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
