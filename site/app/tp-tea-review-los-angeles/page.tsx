import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TP Tea Review: The Complete Menu Guide for LA Locations | Justin Sather",
  description: "TP Tea review: the Ten Ren-backed Taiwanese boba chain with 70 years of tea expertise, reviewed from Diamond Bar and SGV locations. Honest menu breakdown, what to order, and how it compares to every other LA boba chain.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "TP Tea Review: The Complete Menu Guide for LA Locations",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.4",
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
    "name": "TP Tea",
    "servesCuisine": "Bubble Tea",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Diamond Bar",
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
  "url": "https://justinsather.com/tp-tea-review-los-angeles/"
};

export default function TpTeaReviewPage() {
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
            TP Tea Review: What 70 Years of Taiwanese Tea Expertise Tastes Like in a Boba Cup
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
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4.4/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Diamond Bar, SGV</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Taiwanese Chain</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_scene_lifestyle.png"
            alt="TP Tea boba Los Angeles"
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
            { label: "Location", value: "Diamond Bar, Hacienda Heights, SGV" },
            { label: "Hours", value: "Daily 11am to 10pm (varies)" },
            { label: "Price Range", value: "$" },
            { label: "Best For", value: "Pearl Milk Tea, Green Milk Tea, Mango Green Tea" },
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
              TP Tea is the boba chain that most LA tea drinkers overlook and should not. While the trendy Instagram brands compete on aesthetics and the mass-market chains compete on price, TP Tea competes on something far more interesting: it is backed by Ten Ren Tea Company, a Taiwanese tea company founded in 1953 that has been sourcing, aging, and blending Taiwanese teas for over 70 years.
            </p>
            <p>
              The result is a boba chain where the tea base is genuinely different from everywhere else. Not louder or more visually dramatic, just better. If you care about what your boba actually tastes like underneath the milk and toppings, TP Tea belongs on your list.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Ten Ren Connection: Why It Matters</h2>
            <p>
              Most boba chains source commodity tea powder or tea concentrate to mix their drinks. TP Tea uses loose-leaf teas sourced directly from Ten Ren&apos;s own tea gardens and partner farms in Taiwan, then brews them fresh in-store. The parent company has been doing this since before boba was invented.
            </p>
            <p>
              Ten Ren built its reputation on oolong teas from the Alishan and Li Shan mountain regions of Taiwan, where the high altitude and cool temperatures produce teas with natural floral and creamy notes that lower-elevation teas cannot replicate. That sourcing heritage carries into TP Tea&apos;s milk tea bases, which have a depth and sweetness that is difficult to explain until you taste the difference.
            </p>
            <p>
              This is the key distinction between TP Tea and chains like{" "}
              <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Kung Fu Tea
              </Link>{" "}
              or{" "}
              <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Happy Lemon
              </Link>
              . Those chains make solid drinks from decent commercial tea stock. TP Tea makes its drinks from teas that were grown, harvested, and processed by a company whose entire identity is built around doing that well.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">TP Tea Menu: What to Order</h2>
            <p>
              The <strong>Pearl Milk Tea</strong> is the benchmark item and where every first visit should start. The black tea base is brewed from Ten Ren&apos;s proprietary blend, which produces a tea that is more complex and less bitter than the black tea you will find at most LA chains. The milk rounds it out without flattening the tea flavor. Tapioca pearls are cooked to a consistent texture, soft with a slight chew, not gummy or hard. This is what a baseline milk tea should taste like.
            </p>
            <p>
              The <strong>Green Milk Tea</strong> is one of the best versions of this drink in Los Angeles. The green tea base uses a higher-grade leaf than most chains bother with, which means the grassiness is subtle and pleasant rather than sharp or vegetal. Combined with milk, it has a smoothness that the cheaper green milk teas at other shops cannot match. This is the drink to order if you want to understand what sets TP Tea apart from the competition.
            </p>
            <p>
              The <strong>Mango Green Tea</strong> is the top fruit tea on the menu. The mango is present and properly sweet, but the green tea base holds its own and keeps the drink from tasting like fruit punch with ice. It is balanced in a way that fruit teas at{" "}
              <Link href="/feng-cha-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Feng Cha
              </Link>{" "}
              and other chains are not. Order this one in the summer or whenever you want something lighter than a milk tea.
            </p>
            <p>
              The <strong>Earl Grey Milk Tea</strong> is a reliable choice and one of the stronger non-standard milk tea options on the menu. Ten Ren&apos;s earl grey blend has a clear bergamot note without the perfume-forward quality that makes some earl grey teas difficult to pair with milk. It works. This is a drink for people who find standard black milk tea slightly boring but do not want to go as far as matcha or taro.
            </p>
            <p>
              The <strong>Taro Milk Tea</strong> is competent but not the reason to visit. The taro flavor is genuine and not overly sweet, but the preparation is conventional. If taro is your primary interest,{" "}
              <Link href="/xing-fu-tang-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Xing Fu Tang
              </Link>{" "}
              and{" "}
              <Link href="/7-leaves-cafe-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                7 Leaves Cafe
              </Link>{" "}
              do more interesting things with it. At TP Tea, stay focused on the tea-forward drinks where the Ten Ren sourcing actually shows up.
            </p>
            <p>
              One thing to note: TP Tea lets you customize sweetness and ice level, which is standard across LA boba chains now. But at TP Tea, reducing sweetness to 50% or 70% is worth doing because the tea flavor is strong enough to carry the drink without full sugar. At chains that use inferior tea, dropping sweetness just makes the drink taste weak. Here it actually improves it.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="TP Tea menu Los Angeles Diamond Bar"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">LA Locations: Diamond Bar and the SGV</h2>
            <p>
              TP Tea&apos;s Southern California presence is anchored in the San Gabriel Valley, which is the most tea-literate boba market in all of Los Angeles County. The Diamond Bar and Hacienda Heights locations serve a customer base that grew up drinking proper Taiwanese tea and can tell the difference between a premium loose-leaf brew and a bag-and-powder alternative.
            </p>
            <p>
              That customer base is why TP Tea operates differently in the SGV than it would in a less discerning market. The shops are not trying to sell you an Instagram moment or a novelty topping. They are making tea-forward boba drinks for people who actually care about the tea. The atmosphere reflects that: clean, efficient, and focused on the product.
            </p>
            <p>
              Both locations are accessible from the 60 freeway. The Diamond Bar location has adequate parking. The SGV positioning puts TP Tea within easy reach of{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>
              ,{" "}
              <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sunright Tea Studio
              </Link>
              , and{" "}
              <Link href="/xing-fu-tang-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Xing Fu Tang
              </Link>
              , making the SGV the best single-day boba destination in all of LA if you are willing to drive the 10 or 60.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              TP Tea is one of the best value propositions in the LA boba market. Drinks run $5 to $7, putting it below{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>{" "}
              ($7 to $10),{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>{" "}
              ($7 to $10), and most of the premium chains in LA. For tea quality that exceeds nearly all of its direct competitors in the mid-price tier, that is a real bargain.
            </p>
            <p>
              The pricing reflects a brand that has not been caught up in the premium boba pricing wave. Ten Ren has been selling quality Taiwanese tea affordably for 70 years and TP Tea extends that philosophy to the boba format. You are not paying for the brand or the aesthetics. You are paying for the tea, and the tea is worth it.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares</h2>
            <p>
              TP Tea operates in a different lane than most LA boba chains. Against the tea-focused premium chains (Chicha San Chen, Sunright), TP Tea is more affordable and more widely available, but does not quite reach the single-origin oolong craft level that those shops operate at. Against the mainstream chains (Kung Fu Tea, It&apos;s Boba Time, Happy Lemon), TP Tea&apos;s tea quality is noticeably superior at a comparable price.
            </p>
            <p>
              The best comparison is to{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>
              , which is the other large chain in LA operating in the accessible mid-market tier. It&apos;s Boba Time wins on menu size, variety, and locations. TP Tea wins on tea quality, full stop. If you are choosing between them and tea quality matters to you, TP Tea is the answer every time.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Tea sourced directly from Ten Ren&apos;s 70-year-old Taiwanese tea operation, highest-pedigree tea base of any chain in LA</li>
                  <li>Green Milk Tea and Pearl Milk Tea are among the best versions of those drinks in the city</li>
                  <li>Affordable pricing, $5 to $7, significantly below the premium chains with comparable tea quality</li>
                  <li>SGV location puts it at the center of LA&apos;s most boba-literate market</li>
                  <li>Sweetness reduction actually improves the drink because the tea base is strong enough to carry it</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Limited LA footprint, SGV only, no Westside or Koreatown locations</li>
                  <li>No standout specialty drinks, the menu is clean and focused but lacks a signature item with the visual or novelty appeal of Tiger Sugar or Boba Guys</li>
                  <li>Lower brand awareness means most LA boba drinkers have not tried it yet, which is their loss</li>
                  <li>Less seating than some competitors, lean operation focused on takeout</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              TP Tea is the most underrated boba chain in Los Angeles. It does not have a signature Instagram drink. It does not have Westside locations for the Hollywood and Santa Monica crowd. It does not have the marketing budget of Gong Cha or the cult following of Boba Guys. What it has is 70 years of Taiwanese tea expertise poured into a $6 cup, and that is worth more than any of those things if you actually care about how your boba tastes.
            </p>
            <p>
              A 4.4 out of 5 reflects a shop that punches well above its weight class on tea quality and value, with the only significant drawbacks being its limited LA footprint and the absence of a breakout signature drink. If you live near the SGV or are willing to make the drive, TP Tea is essential. If you have never had it, the Pearl Milk Tea or Green Milk Tea at 70% sugar is the place to start.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order at 70% sugar on your first visit. The Ten Ren tea base is strong enough that full sugar can actually mask what makes it special. Try it slightly less sweet before deciding on your preferred level.</li>
                <li>The Green Milk Tea is the most underrated item on the menu. Most people default to black milk tea, but the green tea sourcing at TP Tea is where the Ten Ren connection makes the biggest difference.</li>
                <li>If you are already making a SGV boba trip, combine TP Tea with Chicha San Chen and Sunright Tea Studio. The three shops cover different niches and together show the range of what excellent Taiwanese-heritage boba looks like.</li>
                <li>Avoid ordering the specialty fruit teas if you are price-sensitive. The tea-forward milk teas are where the value is strongest and where the quality gap with other chains is most apparent.</li>
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
                  { label: "Pearl Quality", score: 8 },
                  { label: "Menu Range", score: 7 },
                  { label: "Value", score: 10 },
                  { label: "Experience", score: 7 },
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
              <p className="text-5xl font-bold">4.4/5</p>
              <p className="text-blue-100 text-xs mt-1">Best value boba in the SGV</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Area:</span> Diamond Bar, Hacienda Heights, SGV</p>
                <p><span className="font-semibold">Origin:</span> Taiwan, backed by Ten Ren Tea (est. 1953)</p>
                <p><span className="font-semibold">Price:</span> $5 to $7 per drink</p>
                <p><span className="font-semibold">Best drink:</span> Green Milk Tea, Pearl Milk Tea</p>
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
                <Link href="/xing-fu-tang-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Xing Fu Tang Review &rarr;
                </Link>
                <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Boba Guys Review &rarr;
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
