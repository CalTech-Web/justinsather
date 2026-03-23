import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moge Tee Review: The Complete Menu Guide for LA Locations | Justin Sather",
  description: "Moge Tee review covering the full menu, best drinks, prices, and LA location guide. Personally visited, zero sponsorships. The Yunnan Pu-erh base is what separates it from every other chain in Los Angeles.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Moge Tee Review: The Complete Menu Guide for LA Locations",
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
    "name": "Moge Tee",
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
  "datePublished": "2026-03-23",
  "url": "https://justinsather.com/moge-tee-review-los-angeles/"
};

export default function MogeTeeReviewPage() {
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
            Moge Tee Review: The Yunnan Pu-erh Chain That Changes How LA Drinks Boba
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
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Multiple LA Locations</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Yunnan Pu-erh Tea</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_scene_lifestyle.png"
            alt="Moge Tee boba Los Angeles"
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
            { label: "Location", value: "San Gabriel Valley, multiple LA-area spots" },
            { label: "Hours", value: "Daily 11am to 10pm (varies by location)" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Dirty Pu-erh, cheese foam series, fruit teas" },
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
              Most boba chains in Los Angeles build their menu around black tea, oolong, or green tea. Moge Tee built theirs around Yunnan Pu-erh, which is a fermented tea from southwestern China that tastes like nothing else in the boba world. That single decision makes Moge Tee the most distinctive chain operating in LA right now, and one of the few shops where regulars from Chinatown boba culture and mainstream boba culture have both found something worth coming back for.
            </p>
            <p>
              After visiting multiple Moge Tee locations across the LA area and working through the full menu, the verdict is that the hype is legitimate. The tea quality is real, the cheese foam program is among the best in the city, and the overall experience is more considered than the chain&apos;s rapid expansion would suggest. This is not a chain that grew fast by cutting corners. It grew because the drinks are genuinely good.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes Moge Tee Different</h2>
            <p>
              The short answer is the tea itself. Yunnan Pu-erh is aged and fermented, which gives it an earthy, almost mushroomy depth that black tea and oolong cannot replicate. When Moge Tee uses this as a base for milk tea, the result is a drink with genuine complexity at the foundation, not just sweetness layered on top of a neutral tea background. Most LA boba chains compete on toppings, sweetness, and Instagram presentation. Moge Tee competes on the tea.
            </p>
            <p>
              The cheese foam program reinforces that positioning. Moge Tee&apos;s cheese foam is made with cream cheese and sea salt, whipped to a texture that is thick enough to stay separate from the drink but light enough to incorporate naturally as you sip. It is a better cheese foam than what{" "}
              <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Happy Lemon
              </Link>{" "}
              delivers and a noticeably more generous pour than what{" "}
              <Link href="/7-leaves-cafe-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                7 Leaves Cafe
              </Link>{" "}
              offers on their cheese foam drinks. When you combine the Pu-erh base with the cheese foam, you get a drink that tastes more like a specialty coffee experience than a typical boba order, which is exactly what a certain segment of the LA market has been waiting for.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Moge Tee Menu: What to Order</h2>
            <p>
              The <strong>Dirty Pu-erh</strong> is the drink that defines Moge Tee and the first order for any first-time visitor. The Yunnan Pu-erh base is brewed to a deep, earthy strength, then layered with cheese foam and served over ice. The contrast between the fermented tea depth and the salty, creamy foam is the most interesting flavor combination available at any boba chain in Los Angeles. This drink alone justifies the visit. Order it without sweetener reduction on your first try so you experience the full tea character before adjusting.
            </p>
            <p>
              The <strong>Cheese Pu-erh Milk Tea</strong> is the more approachable version of the same concept. The Pu-erh base is softened with milk, which rounds out the earthiness, and topped with the same cheese foam. If the Dirty Pu-erh feels intense for your palate, this is the entry point. It is still distinctly Moge Tee in character, just less assertive. For daily drinkers,{" "}
              this is likely the order that becomes a habit.
            </p>
            <p>
              The <strong>Mango Cheese Tea</strong> represents Moge Tee&apos;s fruit tea side and is one of the better cheese fruit tea combinations in LA. The mango is bright and genuinely fruity, the cheese foam adds salinity that sharpens the sweetness, and the overall effect is more refreshing than indulgent. On a warm LA day this is a top-tier order. Comparable to what{" "}
              <Link href="/yi-fang-taiwan-fruit-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Yi Fang Taiwan Fruit Tea
              </Link>{" "}
              does in the fresh fruit category, but with a different flavor profile.
            </p>
            <p>
              The <strong>Taro Milk Tea</strong> is Moge Tee&apos;s most conventional offering and the weakest part of the menu relative to competitors. The taro is fine, the milk tea base is correctly made, but it lacks the differentiation that makes the Pu-erh drinks worth seeking out. If taro is specifically the goal,{" "}
              <Link href="/7-leaves-cafe-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                7 Leaves Cafe
              </Link>{" "}
              executes the category more memorably. Order the Taro at Moge Tee only if someone in your group specifically wants it. The other options are more interesting.
            </p>
            <p>
              The <strong>Strawberry Fruit Tea</strong> and <strong>Passion Fruit Green Tea</strong> are reliable secondary options for groups where not everyone wants a Pu-erh drink. The fruit teas are made with quality ingredients and avoid the artificial sweetness that undercuts most chain fruit teas. They are not the reason to visit Moge Tee, but they are good enough that the chain can satisfy a mixed group without anyone feeling like they settled.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Moge Tee menu Los Angeles"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">LA Locations: Where to Find Moge Tee</h2>
            <p>
              Moge Tee&apos;s Los Angeles presence is concentrated in the San Gabriel Valley, which is the right market for a chain built around tea quality. The SGV customer base has high standards for boba and can identify when a chain is doing something genuinely different versus just marketing itself as premium. Moge Tee has earned its following in this market on the merits of the drinks, which is meaningful validation.
            </p>
            <p>
              The Rowland Heights and Alhambra locations see the heaviest traffic and are surrounded by the same dense cluster of SGV boba destinations that includes{" "}
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
              . A Moge Tee visit fits naturally into any SGV boba crawl focused on shops doing something beyond the standard Taiwanese milk tea template.
            </p>
            <p>
              Parking at SGV strip mall locations is generally easy. Weekend afternoons see lines during peak hours, particularly for the Dirty Pu-erh, which has a strong word-of-mouth following. Going on a weekday or arriving before noon significantly reduces wait times without sacrificing drink quality.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Moge Tee drinks run $7 to $10, with cheese foam additions typically adding $1 to $1.50. This positions the chain at the higher end of mid-tier LA boba pricing, above budget chains like{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>{" "}
              and{" "}
              <Link href="/tp-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                TP Tea
              </Link>
              , and approaching the lower end of what{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>{" "}
              charges. Given the tea quality and the genuinely differentiated drink program, the pricing is fair. You are paying for something you cannot get at a cheaper chain.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares</h2>
            <p>
              The closest direct comparison in LA is{" "}
              <Link href="/feng-cha-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Feng Cha
              </Link>
              : both chains operate at a similar price point, both have strong cheese foam programs, and both draw from Chinese tea traditions rather than purely Taiwanese boba culture. Moge Tee edges Feng Cha on tea uniqueness due to the Pu-erh base. Feng Cha has a slight edge on menu breadth and location count in LA.
            </p>
            <p>
              Against the premium single-origin shops like Chicha San Chen and Sunright, Moge Tee does not try to compete on sourcing transparency or craft credentials. It competes on experience and accessibility. The Dirty Pu-erh is as interesting to drink as anything at the premium tier, even if the sourcing story is less developed. For casual drinkers who want a memorable experience without the craft-beverage price tag, Moge Tee delivers.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Yunnan Pu-erh base is the most distinctive tea foundation of any chain in LA</li>
                  <li>Dirty Pu-erh with cheese foam is one of the most interesting boba drinks in the city</li>
                  <li>Cheese foam program is thick, salty, and properly made, one of the best in LA</li>
                  <li>Fruit teas are above average with quality ingredients and no artificial sweetness</li>
                  <li>Mid-tier pricing that reflects the actual quality delivered</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Pu-erh base can be too earthy for drinkers who prefer lighter tea flavors</li>
                  <li>Limited Westside presence, primarily concentrated in the SGV</li>
                  <li>Conventional menu items like Taro Milk Tea do not stand out versus competitors</li>
                  <li>Weekend waits can be significant at peak hours</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Moge Tee is the most underrated chain in Los Angeles in terms of drink quality relative to name recognition. The Pu-erh base program is genuinely unique in a city with hundreds of boba shops, and the cheese foam execution puts it ahead of most chains at any price point. The reason more people have not heard of it is simple: the chain has grown primarily through word of mouth in the SGV and Chinatown communities rather than through the Instagram-driven marketing that drives mainstream boba discovery in LA.
            </p>
            <p>
              A 4.4 out of 5 reflects a chain with a standout signature concept, strong execution on cheese foam and fruit teas, and a few conventional menu items that do not match the ambition of the best drinks. The Dirty Pu-erh alone puts Moge Tee in a conversation with the top five boba experiences in Los Angeles. Come for the Pu-erh, stay for the cheese foam, and bring a second person so you can also try the Mango Cheese Tea.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the Dirty Pu-erh at full sweetness on your first visit. The Pu-erh base needs sugar to balance its natural earthiness, and most people reduce sweetness too aggressively on the first try.</li>
                <li>Sip the first few drinks with the cheese foam layer intact before mixing it in. The flavor change as the foam incorporates is part of the experience Moge Tee is designed around.</li>
                <li>Moge Tee pairs logically with Chicha San Chen and Sunright Tea Studio for an SGV boba crawl focused on premium tea sourcing from different traditions.</li>
                <li>The Mango Cheese Tea is the best order for someone who wants to try the cheese foam concept without committing to the Pu-erh base. It is a lower-intensity introduction to what makes Moge Tee worth visiting.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Quick Rating</h3>
              <div className="space-y-2">
                {[
                  { label: "Tea Quality", score: 9 },
                  { label: "Pearl Quality", score: 8 },
                  { label: "Menu Range", score: 8 },
                  { label: "Value", score: 8 },
                  { label: "Experience", score: 9 },
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
              <p className="text-blue-100 text-xs mt-1">Best Pu-erh tea program in LA</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Area:</span> San Gabriel Valley, multiple LA locations</p>
                <p><span className="font-semibold">Origin:</span> Shanghai, China</p>
                <p><span className="font-semibold">Price:</span> $7 to $10 per drink</p>
                <p><span className="font-semibold">Best drink:</span> Dirty Pu-erh, Cheese Pu-erh Milk Tea</p>
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
                <Link href="/feng-cha-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Feng Cha Review &rarr;
                </Link>
                <Link href="/xing-fu-tang-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Xing Fu Tang Review &rarr;
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
