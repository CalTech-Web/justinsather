import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ding Tea Review: Complete Menu Guide for LA Locations | Justin Sather",
  description: "Ding Tea review covering the full menu, best drinks, prices, and LA location guide including Hawthorne and Arcadia. Personally visited, zero sponsorships. The precision-brewed Taiwanese tea that earns its reputation.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Ding Tea Review: Complete Menu Guide for LA Locations",
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
    "name": "Ding Tea",
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
  "url": "https://justinsather.com/ding-tea-review-los-angeles/"
};

const faqItems = [
  {
    question: "What is the best drink at Ding Tea?",
    answer: "The Red Tea with Tapioca is the essential Ding Tea order. The precision-brewed red tea base has a clarity and depth that most chain boba cannot replicate. The Brown Sugar Milk Tea and Oolong Milk Tea with cheese foam are close behind.",
  },
  {
    question: "Where is Ding Tea in Los Angeles?",
    answer: "Ding Tea has multiple LA-area locations including Hawthorne and Arcadia in the San Gabriel Valley. The Hawthorne location is the most accessible from West LA and South Bay. The Arcadia location sits in the heart of SGV boba country.",
  },
  {
    question: "How much does Ding Tea cost?",
    answer: "Ding Tea drinks typically run $6 to $9 per drink. Toppings add $0.50 to $0.75 each. This puts it in the mid-tier range, above budget chains like It's Boba Time but below premium shops like Boba Guys and Chicha San Chen.",
  },
  {
    question: "What makes Ding Tea different from other boba chains?",
    answer: "Ding Tea uses a proprietary precision-brewing system developed in Taiwan that controls water temperature and steeping time exactly. This produces a cleaner, more consistent tea base than chains that free-pour or use concentrate. The difference is noticeable in the red tea and oolong drinks especially.",
  },
  {
    question: "Is Ding Tea good for people who don't like sweet drinks?",
    answer: "Yes. Ding Tea allows full customization of sweetness levels from 0% to 100%. The precision-brewed tea base is strong enough to be interesting at lower sweetness levels, which makes it a good option for drinkers who want flavor complexity without heavy sugar.",
  },
  {
    question: "Does Ding Tea have a secret menu?",
    answer: "Ding Tea does not have a formal secret menu, but regulars often order the Oolong Milk Tea with cheese foam at 50% sugar and light ice, which is not a listed combination but highlights the tea quality better than the default preparation.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
};

export default function DingTeaReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
            Ding Tea Review: The Precision-Brewed Taiwanese Chain Earning Loyal Regulars in LA
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
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Hawthorne + SGV Locations</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Precision-Brewed Tea</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_scene_lifestyle.png"
            alt="Ding Tea boba Los Angeles"
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
            { label: "Location", value: "Hawthorne, Arcadia, and more LA-area spots" },
            { label: "Hours", value: "Daily 11am to 10pm (varies by location)" },
            { label: "Price Range", value: "$6 to $9 per drink" },
            { label: "Best For", value: "Red Tea with Tapioca, Oolong Milk Tea, cheese foam series" },
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
              Most boba chains in Los Angeles compete on presentation, novelty toppings, and Instagram-ready visuals. Ding Tea competes on the tea itself. The chain uses a proprietary precision-brewing system developed in Taiwan that controls water temperature and steeping time down to the second. The result is a cleaner, more consistent tea base than what most mid-tier chains produce, and the difference shows in every cup you order from the red tea or oolong category.
            </p>
            <p>
              After visiting Ding Tea locations across the LA area and working through the full menu, the verdict is straightforward: this is a reliable, well-executed Taiwanese tea chain that rewards customers who actually care about the tea underneath the milk and toppings. It is not flashy. It does not have the cultural cachet of{" "}
              <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tiger Sugar
              </Link>{" "}
              or the craft-beverage branding of{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>
              . What it has is very good tea at a fair price, served consistently across locations.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes Ding Tea Different</h2>
            <p>
              The precision-brewing system is the foundation of everything Ding Tea does. Most boba chains brew tea in large batches that sit and oxidize before use, which flattens the flavor and introduces bitterness that has to be masked with sweetener. Ding Tea brews in smaller batches using a machine that runs exactly timed cycles at exact temperatures. This means the tea you receive was brewed recently, with parameters that matched the specific tea type being made.
            </p>
            <p>
              The practical result is that Ding Tea&apos;s straight tea drinks, particularly the red tea and oolong, have a brightness and clarity that most chain boba cannot match. When you order the Red Tea with Tapioca and ask for minimal sweetener, you can actually taste the tea. At many LA chains, reducing sweetener on a plain milk tea reveals nothing interesting underneath. At Ding Tea, reducing sweetener on the oolong reveals the tea.
            </p>
            <p>
              This matters most to a specific kind of customer: people who grew up with Taiwanese tea culture, or people who came to boba through a genuine interest in tea rather than through the brown sugar boba craze. For casual boba drinkers who order primarily for sweetness, toppings, and novelty, the difference is less apparent. But for regulars who order the same drink repeatedly, Ding Tea&apos;s consistency and tea quality explain why it builds loyal repeat customers without heavy marketing.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Ding Tea Menu: What to Order</h2>
            <p>
              The <strong>Red Tea with Tapioca</strong> is the essential first order. The red tea base is brewed to a clean, slightly malty depth with none of the astringency that cheap red tea develops when overbrewed. The tapioca pearls are cooked to the right texture, firm at the center with a slight give on the outside. At 50% sweetness, this is one of the most satisfying straightforward boba drinks in LA. It is not trying to be interesting in a trendy way. It is trying to be excellent at what it is, and it succeeds.
            </p>
            <p>
              The <strong>Oolong Milk Tea</strong> is the second essential order, and possibly the better drink for people who prefer something with more complexity. The oolong base has floral notes that come through even when combined with milk, which is a sign of quality tea used in sufficient quantity. The roasted oolong variant deepens the profile further, adding a toasty character that pairs well with the creaminess of the milk. Compare this to the oolong base at a chain like{" "}
              <Link href="/kung-fu-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Kung Fu Tea
              </Link>{" "}
              and the difference in tea quality is clear.
            </p>
            <p>
              The <strong>Oolong Milk Tea with Cheese Foam</strong> is the current standout order for anyone who wants to experience Ding Tea at its best. The cheese foam is made with cream cheese and a light dusting of sea salt, which creates a contrast with the floral oolong underneath that makes the whole drink more interesting than the sum of its parts. This is the order that converts first-time visitors into regulars. The cheese foam is not as bold as what{" "}
              <Link href="/moge-tee-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Moge Tee
              </Link>{" "}
              delivers, but it is properly made and a genuine value addition at the price.
            </p>
            <p>
              The <strong>Brown Sugar Milk Tea</strong> is Ding Tea&apos;s entry into the brown sugar boba category that{" "}
              <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tiger Sugar
              </Link>{" "}
              made famous in LA. Ding Tea&apos;s version is competent but not a destination order. The brown sugar syrup is sweet and rich, the milk is creamy, and the tapioca is good. It does not have the theatrical tiger stripe presentation or the fresh-made pearl program that makes Tiger Sugar worth a trip. Order it if brown sugar is specifically what you want and you are already at Ding Tea. Otherwise, go to Tiger Sugar for this category.
            </p>
            <p>
              The <strong>Taro Milk Tea</strong> and <strong>Matcha Milk Tea</strong> round out the menu with reliable execution. Neither is exceptional by LA standards, and taro drinkers specifically will find{" "}
              <Link href="/7-leaves-cafe-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                7 Leaves Cafe
              </Link>{" "}
              more memorable in this category. These drinks serve groups where not everyone wants straight tea, but they are not why the regulars keep coming back.
            </p>
            <p>
              The <strong>Thai Tea</strong> deserves a mention because Ding Tea executes it better than most non-Vietnamese chains. The spice blend in the tea is properly balanced, not just sweet orange color with no depth. For Thai tea specifically, only{" "}
              <Link href="/7-leaves-cafe-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                7 Leaves Cafe
              </Link>{" "}
              does it more authentically in LA.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Ding Tea menu Los Angeles"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">LA Locations: Where to Find Ding Tea</h2>
            <p>
              The <strong>Hawthorne</strong> location is the most accessible Ding Tea for people coming from West LA, the South Bay, or anywhere south of the 10 freeway. It sits in a small commercial strip and has adequate parking. The Hawthorne location tends to be less crowded than the SGV spots, which means faster service and more consistent drink quality during peak hours.
            </p>
            <p>
              The <strong>Arcadia</strong> location puts Ding Tea in direct competition with the dense cluster of SGV boba destinations. Nearby competitors include{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>
              ,{" "}
              <Link href="/sunright-tea-studio-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sunright Tea Studio
              </Link>
              ,{" "}
              <Link href="/xing-fu-tang-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Xing Fu Tang
              </Link>
              , and{" "}
              <Link href="/tp-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                TP Tea
              </Link>
              . The fact that Ding Tea has built consistent repeat traffic in this market, against this competition, is a meaningful endorsement of the drink quality. SGV customers are not loyal to chains that are merely fine.
            </p>
            <p>
              Parking across Ding Tea&apos;s LA locations is generally easy, consistent with the chain&apos;s strip mall and suburban commercial placement. Weekend afternoons can see short lines, but the throughput is fast enough that waits rarely exceed 10 to 15 minutes even during busy periods.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Ding Tea drinks run $6 to $9, putting the chain in the mid-tier bracket. This is above budget options like{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>{" "}
              ($5 to $7) and{" "}
              <Link href="/tp-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                TP Tea
              </Link>{" "}
              ($5 to $7), and below the premium tier occupied by{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>{" "}
              ($9 to $13) and{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>{" "}
              ($8 to $12). Toppings add $0.50 to $0.75. At this price for this quality of tea, the value proposition is strong.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares</h2>
            <p>
              The closest direct comparison in LA is{" "}
              <Link href="/tp-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                TP Tea
              </Link>
              , which is the Ten Ren-backed chain also focused on tea quality over gimmick. Both chains are Taiwanese, both prioritize the tea base, and both price at the same level. Ding Tea has a slight edge on cheese foam and the oolong program. TP Tea has a slight edge on pure tradition and the heritage of the Ten Ren brand behind it.
            </p>
            <p>
              Against{" "}
              <Link href="/tastea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tastea
              </Link>{" "}
              and{" "}
              <Link href="/sharetea-westwood-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Sharetea
              </Link>
              , Ding Tea is the stronger chain on tea quality. Sharetea wins on location count and brand recognition in California, particularly near UCLA. Tastea wins on menu variety and LA location placement. Ding Tea wins when you care about what the tea actually tastes like.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Precision-brewing system produces cleaner, more consistent tea than most LA chains</li>
                  <li>Red tea and oolong bases taste like actual tea, not sweet concentrate</li>
                  <li>Cheese foam on oolong is a standout combination worth ordering specifically</li>
                  <li>Thai tea is better than most non-Vietnamese chains in LA</li>
                  <li>Mid-tier pricing with above mid-tier tea quality, a genuine value</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Limited LA presence compared to larger chains, fewer neighborhood options</li>
                  <li>Brown sugar and taro categories do not stand out versus specialty competitors</li>
                  <li>Low brand visibility means many LA boba drinkers have never heard of it</li>
                  <li>No standout visual hook for social media, which limits organic discovery</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Ding Tea is a chain built for people who drink boba for the tea. The precision-brewing approach is not marketing copy, it produces a genuinely cleaner drink in the red tea and oolong categories, and the cheese foam program adds a current-moment relevance to a menu that is otherwise grounded in classic Taiwanese tea tradition. The pricing is fair, the execution is consistent, and the Hawthorne and Arcadia locations give the chain solid LA coverage.
            </p>
            <p>
              A 4.3 out of 5 reflects a chain that excels at what it set out to do, has meaningful limitations in menu breadth and visual appeal, and represents a better choice than most people realize because low brand awareness in LA keeps it from the conversations that Tiger Sugar and Boba Guys dominate. Order the Red Tea with Tapioca, then the Oolong Milk Tea with Cheese Foam, and you will understand why regulars keep coming back.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Start at 50% sweetness on any straight tea order. The precision-brewed base has enough flavor to hold at lower sugar levels, and you will taste the actual tea more clearly than at 100%.</li>
                <li>The Oolong Milk Tea with cheese foam at 50% sweetness, light ice, is the order that regulars recommend to first-timers who want to understand what Ding Tea is doing differently from other chains.</li>
                <li>The Hawthorne location is the lowest-stress option if you are coming from West LA or the South Bay. The SGV locations have more competition nearby for a boba crawl, but slightly longer waits on weekends.</li>
                <li>Bring a second person and split a Red Tea with Tapioca and an Oolong Milk Tea with Cheese Foam. Tasting both side-by-side makes the tea quality argument for Ding Tea more obvious than any single order would.</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-[#1A202C] mt-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-[#1A202C] mb-2 text-base">{item.question}</h3>
                  <p className="text-sm text-[#4A5568]">{item.answer}</p>
                </div>
              ))}
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
                  { label: "Menu Range", score: 7 },
                  { label: "Value", score: 9 },
                  { label: "Experience", score: 8 },
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
              <p className="text-blue-100 text-xs mt-1">Best precision-brewed tea in LA</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">LA Locations:</span> Hawthorne, Arcadia</p>
                <p><span className="font-semibold">Origin:</span> Taiwan</p>
                <p><span className="font-semibold">Price:</span> $6 to $9 per drink</p>
                <p><span className="font-semibold">Best drink:</span> Red Tea with Tapioca, Oolong Milk Tea with Cheese Foam</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More LA Boba Reviews</h3>
              <div className="space-y-2">
                <Link href="/tp-tea-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  TP Tea Review &rarr;
                </Link>
                <Link href="/tastea-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Tastea Review &rarr;
                </Link>
                <Link href="/sharetea-westwood-review/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Sharetea Westwood Review &rarr;
                </Link>
                <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Chicha San Chen SGV Review &rarr;
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
