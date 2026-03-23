import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Somi Somi Review: The Complete Menu Guide for LA Locations | Justin Sather",
  description: "Somi Somi review covering the full menu, best flavors, prices, and LA location guide. The Korean soft serve and ah-boong fish waffle program that took Koreatown by storm. Personally visited, zero sponsorships.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Somi Somi Review: The Complete Menu Guide for LA Locations",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.5",
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
    "name": "Somi Somi",
    "servesCuisine": "Korean Desserts",
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
  "url": "https://justinsather.com/somi-somi-review-los-angeles/"
};

const faqItems = [
  {
    question: "What is Somi Somi?",
    answer: "Somi Somi is a Korean dessert chain famous for their ah-boong, a fish-shaped waffle cone stuffed with Korean soft serve ice cream. The chain originated in South Korea and has expanded to multiple locations in Los Angeles, with a particularly strong presence in Koreatown.",
  },
  {
    question: "What are the best flavors at Somi Somi?",
    answer: "The Injeolmi (Korean rice cake powder) soft serve is the most unique and recommended flavor, offering a toasted, nutty sweetness unlike anything else in LA. Ube is the most popular choice for first-time visitors. Matcha is the most consistent performer across all locations.",
  },
  {
    question: "How much does Somi Somi cost?",
    answer: "Somi Somi drinks and desserts typically run $7 to $12. The ah-boong soft serve cones are around $7 to $9. Drinks like boba and soft serve cups run $6 to $11. Premium combos with multiple toppings can reach $12 to $14.",
  },
  {
    question: "Where is Somi Somi in Los Angeles?",
    answer: "Somi Somi has multiple locations across the LA area, with the Koreatown location being the most accessible and busiest. Additional locations operate in the San Gabriel Valley and across Southern California. Hours typically run noon to 10 PM, with weekend hours extending later.",
  },
  {
    question: "Is Somi Somi worth it in Los Angeles?",
    answer: "Yes. The ah-boong concept is genuinely original in the LA dessert landscape, and the soft serve quality is significantly above what most dessert chains deliver. The Injeolmi flavor alone is worth the visit for anyone who has not encountered Korean rice cake powder in a dessert context before.",
  },
  {
    question: "What is ah-boong at Somi Somi?",
    answer: "Ah-boong is Somi Somi's signature fish-shaped waffle cone, based on the Korean bungeoppang street food tradition. The waffle is made fresh to order, slightly crispy on the outside and soft inside, then filled with your choice of Korean soft serve. The fish shape is not just visual, the waffle-to-cream ratio is calibrated for how the soft serve fills the cavity.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function SomiSomiReviewPage() {
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
            <Link href="/best-desserts-los-angeles/" className="text-[#2B6CB0] text-sm hover:text-[#215387] transition-colors">
              &larr; Back to Best Desserts LA
            </Link>
          </div>
          <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Shop Review
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4 leading-tight">
            Somi Somi Review: The Korean Soft Serve and Ah-Boong Experience in Los Angeles
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
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Koreatown + Multiple LA Locations</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Korean Soft Serve</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/wanderlust_creamery_product.png"
            alt="Somi Somi Korean soft serve Los Angeles"
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
            { label: "Location", value: "Koreatown and multiple LA-area locations" },
            { label: "Hours", value: "Noon to 10 PM daily (varies by location)" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Ah-boong, Injeolmi soft serve, Ube soft serve" },
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
              Somi Somi arrived in Los Angeles with a concept that did not exist in the market: Korean soft serve served inside a freshly made fish-shaped waffle cone called ah-boong. The visual is immediately compelling, but what keeps people coming back is the soft serve quality itself. The texture is distinctly different from American-style ice cream, denser and creamier, and the flavor program is built around Korean ingredients that are genuinely uncommon in a dessert-shop context in LA.
            </p>
            <p>
              After multiple visits to Somi Somi locations across the LA area, including the Koreatown flagship, the assessment is that this is one of the most original dessert concepts operating in Los Angeles right now. The ah-boong format is the draw, but the flavors are what make it worth returning for. This is not a novelty destination. It is a well-executed dessert shop built on a distinctive concept that holds up on every visit.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Is Ah-Boong?</h2>
            <p>
              Ah-boong is Somi Somi&apos;s version of bungeoppang, the Korean street food tradition of cooking a fish-shaped waffle stuffed with filling. At traditional street stalls in Korea, the filling is typically red bean paste. Somi Somi replaced the red bean with Korean soft serve, which created a dessert that bridges a well-loved street food format with the modern soft serve culture that has swept across Asian-American markets in the US.
            </p>
            <p>
              The waffle itself is made fresh to order. It is slightly crispy on the outside, soft and lightly chewy inside, with a mild sweetness that works as a neutral backdrop for the soft serve. The fish shape is not just decorative; the cavity inside the waffle is sized and shaped to create a specific soft-serve-to-waffle ratio as you eat from the tail toward the head. The result is that every bite has both waffle and cream in a proportion that is clearly intentional. No other dessert chain in Los Angeles has anything directly comparable.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Somi Somi Menu: What to Order</h2>
            <p>
              The <strong>Injeolmi Soft Serve</strong> is the order that most distinguishes Somi Somi from any other dessert shop in LA. Injeolmi is a Korean rice cake dusted with roasted soybean powder, and when the flavor is translated into soft serve, the result is a toasted, nutty sweetness with a faint earthiness that reads nothing like the standard vanilla, chocolate, or even matcha options that dominate Korean soft serve menus. If you have never had injeolmi in any form, this is an excellent introduction. If you are already familiar with the flavor, seeing it executed this well in soft serve form is genuinely impressive. Order this as your first flavor on any visit.
            </p>
            <p>
              The <strong>Ube Soft Serve</strong> is the most popular flavor and the one that draws the most first-time visitors. The ube flavor is properly made with real purple yam, not artificial coloring, and delivers the earthy sweetness that distinguishes genuine ube from the approximations that appear on many menus. Compared to what{" "}
              <Link href="/wanderlust-creamery-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Wanderlust Creamery
              </Link>{" "}
              does with ube in their Ube Malted Crunch, Somi Somi&apos;s ube soft serve is cleaner and less complex, but serves its role as an approachable, well-made expression of the flavor. For groups where not everyone wants the injeolmi, ube is the default recommendation.
            </p>
            <p>
              The <strong>Matcha Soft Serve</strong> is the most consistent performer on the menu and the safest choice for matcha regulars. The matcha intensity is properly calibrated, not too sweet and not so bitter that it overwhelms the soft serve texture. It is a well-made matcha soft serve without any particular surprises, which is what most matcha orders should be. For groups, a matcha and injeolmi swirl is one of the more interesting flavor combinations available.
            </p>
            <p>
              The <strong>Black Sesame Soft Serve</strong> is the most niche flavor on the standard menu and the one that polarizes opinions most sharply. Black sesame has a nutty, slightly bitter profile that can feel assertive when translated to soft serve. Done correctly, as it is at Somi Somi, the flavor is complex and memorable. For drinkers who enjoy the earthy, roasted register of{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen&apos;s
              </Link>{" "}
              oolong teas or the depth in Moge Tee&apos;s Pu-erh drinks, black sesame at Somi Somi will appeal for the same reasons. It is not the entry point but it rewards an adventurous palate.
            </p>
            <p>
              The <strong>Cookies and Cream Soft Serve</strong> is the one flavor that feels slightly out of place in the context of the rest of the menu. It is well-made but generic. There is no Korean culinary tradition behind it and no particular differentiation from what any other soft serve shop in LA offers in this category. It is the flavor for someone in the group who has not yet found a Korean-inspired flavor they want to try, which is a legitimate role, but it is not the reason to visit Somi Somi.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Somi Somi menu Los Angeles"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">LA Locations: Where to Find Somi Somi</h2>
            <p>
              The Koreatown location is the most accessible for visitors staying in central LA and operates in the same corridor as the city&apos;s best boba shops, including{" "}
              <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tiger Sugar
              </Link>{" "}
              and{" "}
              <Link href="/happy-lemon-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Happy Lemon
              </Link>
              . A Somi Somi visit fits naturally at the end of a Koreatown boba crawl, serving as a dessert-on-dessert conclusion that the neighborhood&apos;s density of options uniquely enables.
            </p>
            <p>
              SGV locations draw a different crowd, primarily Korean-American and East Asian American families who are familiar with the bungeoppang tradition and come specifically for the injeolmi flavor. These locations tend to be in strip mall settings with easier parking than Koreatown. If the primary goal is the most authentic experience of the ah-boong concept without the Koreatown weekend crowds, an SGV location is the better choice.
            </p>
            <p>
              Weekend evening waits at the Koreatown location can be significant, particularly between 7 PM and 9 PM when foot traffic in the neighborhood is highest. Arriving before 6 PM or on a weekday eliminates the wait entirely without any reduction in soft serve quality. The ah-boong is made to order regardless of how busy the shop is.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              The ah-boong soft serve runs $7 to $9 depending on size and topping additions. Soft serve cups start at $6. Drinks including boba and soft serve beverages run $8 to $11. Premium combos with multiple toppings can reach $12 to $14. This pricing is competitive with other Korean dessert concepts in LA and represents fair value given the quality of the soft serve and the freshness of the ah-boong waffle. It is priced above budget boba chains like{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>{" "}
              and roughly comparable to{" "}
              <Link href="/mochinut-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Mochinut
              </Link>{" "}
              on a per-item basis.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares</h2>
            <p>
              The most direct comparison in the Korean dessert category is Mochinut, which also uses Korean-influenced flavors in a novel format (mochi donuts). Both chains draw from the same Korean-American food culture and serve a similar market. Somi Somi&apos;s soft serve quality edges Mochinut&apos;s boba program in refinement, and the ah-boong format is more visually distinctive than a mochi donut. Mochinut has the better savory-to-sweet balance as a full stop; Somi Somi is more singular in its focus.
            </p>
            <p>
              Against the artisan ice cream shops like{" "}
              <Link href="/wanderlust-creamery-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Wanderlust Creamery
              </Link>
              , Somi Somi does not compete on the same axis. Wanderlust is built around the concept of hand-crafted small-batch flavors rotating seasonally. Somi Somi is built around a specific Korean soft serve tradition delivered at scale. They satisfy different needs. If the goal is maximum flavor complexity and craft credentials, Wanderlust wins. If the goal is the best Korean soft serve in LA in a uniquely designed format, Somi Somi wins.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Ah-boong fish waffle cone is the most original dessert format in LA, freshly made to order on every visit</li>
                  <li>Injeolmi soft serve is genuinely unique and unavailable in any comparable form elsewhere in the city</li>
                  <li>Soft serve texture is distinctly higher quality than chain competitors at similar price points</li>
                  <li>Koreatown location makes it an easy add-on to any boba crawl itinerary</li>
                  <li>Flavor program built around Korean ingredients, not generic soft serve options</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Koreatown weekend evening waits are significant during peak hours</li>
                  <li>Cookies and Cream flavor is generic and does not belong on the same menu as Injeolmi and Black Sesame</li>
                  <li>Pricing is at the high end of the Korean dessert category for what is ultimately a single-item concept</li>
                  <li>Ah-boong format is best eaten immediately, difficult to transport without the soft serve melting</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Somi Somi is the most original dessert concept operating in Los Angeles across multiple locations. The ah-boong format is immediately compelling and holds up on every visit because the waffle is made fresh and the soft serve quality is genuinely high. The Injeolmi flavor alone justifies the visit for anyone who has not experienced Korean rice cake powder in a dessert context. Combined with the Koreatown location that fits seamlessly into any boba crawl itinerary, Somi Somi is an easy recommendation.
            </p>
            <p>
              A 4.5 out of 5 reflects a concept executed at a very high level with one minor deduction for the generic Cookies and Cream flavor that undersells the kitchen&apos;s ability to deliver something distinctly Korean in every other option. The injeolmi and ube ah-boong combination is the most memorable dessert experience in Koreatown, and one of the best in Los Angeles.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the Injeolmi on your first visit regardless of whether you are familiar with Korean rice cake flavors. It is the most distinctive thing Somi Somi makes and nothing else in LA offers a direct comparison.</li>
                <li>Eat the ah-boong immediately. The soft serve begins melting within a few minutes, and the waffle loses its crispness quickly in warm weather. This is not a dessert to carry around while browsing Koreatown.</li>
                <li>Swirl options are available at most locations. The Injeolmi and Ube swirl is one of the better flavor combinations on the menu and gives first-time visitors exposure to both of the top flavors in a single order.</li>
                <li>Arrive before 6 PM on weekends to avoid the peak-hour line at the Koreatown location. The soft serve quality does not change based on crowd size, but the wait can extend significantly on Friday and Saturday evenings.</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Somi Somi FAQ</h2>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div key={item.question} className="border border-gray-100 rounded-xl overflow-hidden">
                    <div className="bg-[#EDF2F7] px-5 py-4">
                      <h3 className="font-semibold text-[#1A202C] text-sm">{item.question}</h3>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-sm text-[#4A5568] leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Quick Rating</h3>
              <div className="space-y-2">
                {[
                  { label: "Soft Serve Quality", score: 9 },
                  { label: "Concept Originality", score: 10 },
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
              <p className="text-5xl font-bold">4.5/5</p>
              <p className="text-blue-100 text-xs mt-1">Best Korean soft serve in LA</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Area:</span> Koreatown, San Gabriel Valley, multiple LA locations</p>
                <p><span className="font-semibold">Origin:</span> South Korea</p>
                <p><span className="font-semibold">Price:</span> $7 to $12 per item</p>
                <p><span className="font-semibold">Best item:</span> Ah-boong with Injeolmi soft serve</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More LA Dessert Reviews</h3>
              <div className="space-y-2">
                <Link href="/wanderlust-creamery-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Wanderlust Creamery Review &rarr;
                </Link>
                <Link href="/mochinut-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Mochinut Review &rarr;
                </Link>
                <Link href="/mashti-malone-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Mashti Malone Review &rarr;
                </Link>
                <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Tiger Sugar Review &rarr;
                </Link>
                <Link href="/best-desserts-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Best Desserts in LA &rarr;
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
            <h2 className="text-xl font-bold text-[#1A202C] mb-1">Explore Every Dessert in LA</h2>
            <p className="text-[#4A5568] text-sm">Boba, ice cream, and more across Los Angeles, all personally visited.</p>
          </div>
          <Link
            href="/best-desserts-los-angeles/"
            className="bg-[#2B6CB0] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#215387] transition-colors flex-shrink-0"
          >
            Best Desserts LA Guide
          </Link>
        </div>
      </section>
    </>
  );
}
