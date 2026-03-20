import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunright Tea Studio Review: The Complete Guide to LA Locations | Justin Sather",
  description: "An honest review of Sunright Tea Studio in Los Angeles. Full menu breakdown, best drinks, Pasadena and SGV locations, and how it compares to the rest of the LA boba scene. Personal visit, paid out of pocket.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Sunright Tea Studio Review: The Complete Guide to LA Locations",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.6",
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
    "name": "Sunright Tea Studio",
    "servesCuisine": "Bubble Tea",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pasadena",
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
  "url": "https://justinsather.com/sunright-tea-studio-review-los-angeles/"
};

export default function SunrightTeaStudioReviewPage() {
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
            Sunright Tea Studio Review: The Best Premium Boba in the San Gabriel Valley
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
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">4.6/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Pasadena + SGV Locations</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Premium Taiwanese Tea</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/boba_scene_lifestyle.png"
            alt="Sunright Tea Studio boba drinks Los Angeles"
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
            { label: "Locations", value: "Pasadena, Rowland Heights, and surrounding SGV" },
            { label: "Hours", value: "Daily 11am to 10pm (varies by location)" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Single-origin tea, oolong milk tea, fruit tea" },
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
              Sunright Tea Studio is one of the best boba chains operating in the Los Angeles area right now. The name is not just branding: Sunright sources single-origin teas from Taiwan, brews them fresh in-house, and builds drinks around the actual flavor of the tea rather than masking it with sugar and artificial flavoring. The result is a cup that tastes fundamentally different from most of what you will find at other LA boba shops.
            </p>
            <p>
              If you have not been to Sunright yet, it should be near the top of your LA boba list. The Pasadena location alone is worth the drive from anywhere in the city.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes Sunright Tea Studio Different</h2>
            <p>
              Most boba shops in Los Angeles use tea powder or highly concentrated syrups as their base. It is fast, consistent, and cheap to produce, which is why chains do it. Sunright does not. They use whole-leaf teas sourced from specific growing regions in Taiwan, brewed fresh every few hours. You can taste the difference immediately.
            </p>
            <p>
              Their flagship tea is a Sun Moon Lake black tea from Nantou County, Taiwan. It is a high-altitude black tea with a natural honey sweetness and zero bitterness when brewed properly. Sunright brews it properly. The milk tea version of this tea is one of the best base drinks in LA.
            </p>
            <p>
              The Ali Mountain oolong is the other must-try. Ali Mountain (Alishan) oolong is a well-known Taiwanese high-mountain tea with a floral, creamy quality. Sunright uses it as the foundation for several drinks and the flavor is genuinely distinctive. If you have only had oolong as a generic "oolong milk tea" from a chain that uses powder, Sunright will change your understanding of what the drink can be.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Sunright Tea Studio drink selection San Gabriel Valley"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Sunright Tea Studio Menu: What to Order</h2>
            <p>
              The <strong>Sun Moon Lake Milk Tea</strong> is the drink that defines Sunright. Smooth, naturally sweet, with a depth that you do not get from powder-based milk teas. Order it with the signature pearls at 70 percent sweet. The tea is good enough that you do not want to bury it.
            </p>
            <p>
              The <strong>Alishan Oolong Milk Tea</strong> is the second essential order. The floral top notes of the Alishan oolong come through even with milk added, which is a mark of quality. At most other shops the oolong gets completely lost once you add milk. Here it does not.
            </p>
            <p>
              The <strong>Strawberry Slushie</strong> is the standout from the fruit tea section. Real strawberry, properly tart, not the candy-sweet version that most shops serve. It is a clean, refreshing drink that works well alongside something richer like the milk tea.
            </p>
            <p>
              The <strong>Sea Salt Cream Oolong</strong> is worth ordering on a first visit to understand what Sunright is doing with toppings. The sea salt cream is lighter and more refined than the cheese foam you find at other chains. It complements the oolong without overwhelming it.
            </p>
            <p>
              Skip the <strong>Brown Sugar Boba Milk</strong> unless that is specifically what you came for. Sunright can make it, but it is not where they shine. For brown sugar boba, go to{" "}
              <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] hover:text-[#215387]">
                Tiger Sugar
              </Link>
              . Sunright&apos;s strength is the high-mountain teas.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">LA Locations: Where to Find Sunright</h2>
            <p>
              Sunright Tea Studio&apos;s LA-area locations are concentrated in the San Gabriel Valley, which is the right place for them. The SGV has the most knowledgeable boba-drinking audience in the city, and Sunright&apos;s quality-forward approach fits the neighborhood.
            </p>
            <p>
              The <strong>Pasadena location</strong> is the most accessible for visitors coming from the west side or downtown. Pasadena has good parking and the Sunright there is easy to get to. This is where I started and it remains my default visit when I am in the area.
            </p>
            <p>
              The <strong>Rowland Heights location</strong> sits in the heart of the SGV boba corridor. If you are doing a full SGV boba crawl, Rowland Heights should be on the itinerary. The crowd there skews heavily toward people who take their tea seriously, which tends to mean faster, more accurate drinks.
            </p>
            <p>
              Both locations run the same menu and the quality is consistent between them. Sunright has clearly invested in staff training and production standards.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              Sunright sits at the premium end of the LA boba price range. Most drinks run $8 to $11, which puts them above{" "}
              <Link href="/feng-cha-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Feng Cha
              </Link>{" "}
              and{" "}
              <Link href="/its-boba-time-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                It&apos;s Boba Time
              </Link>
              , and roughly in line with{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>{" "}
              and{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>
              . The price is justified by the ingredient sourcing. You are paying for real Taiwanese single-origin tea, not tea powder. For boba drinkers who care about tea quality, this is fair. If you just want something sweet and caffeinated and do not care about the provenance, Sunright may feel expensive.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares</h2>
            <p>
              The closest comparison in the LA market is Chicha San Chen. Both shops use high-quality Taiwanese teas, both brew fresh, and both serve a more educated boba audience than the average chain. Chicha San Chen has the World Tea Championship credentials and a slightly higher ceiling. Sunright is more approachable, has more LA locations, and is generally easier to get to.
            </p>
            <p>
              Against Boba Guys, Sunright wins on tea quality but loses on overall beverage creativity. Boba Guys has more interesting signature combinations. If you want pure tea quality, Sunright. If you want more ambitious drink building, Boba Guys.
            </p>
            <p>
              Against the everyday chain options like Feng Cha, Sharetea, and It&apos;s Boba Time, Sunright is in a different category. The tea-first approach makes it a fundamentally different product. It is worth trying both ends of the spectrum to understand what you prefer.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Single-origin Taiwanese teas: Sun Moon Lake and Alishan oolong</li>
                  <li>Fresh-brewed tea, not powder or concentrate</li>
                  <li>Consistent quality across LA locations</li>
                  <li>Sea salt cream topping is more refined than standard cheese foam</li>
                  <li>Pasadena location is accessible from most of LA</li>
                  <li>Staff trained to explain the tea sourcing</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Premium pricing: $8 to $11 per drink</li>
                  <li>Fewer LA locations than major chains</li>
                  <li>Not the best choice if you want creative signature drinks</li>
                  <li>Brown sugar and trendy items are not the focus here</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Sunright Tea Studio is at the top of the LA boba hierarchy for one specific reason: the tea quality is real. It is not flavored water with milk and pearls. It is properly sourced, freshly brewed Taiwanese tea that happens to also have pearls in it. If you care about that distinction, Sunright is essential. If you do not, it is still very good boba at a fair price for what you are getting.
            </p>
            <p>
              For anyone serious about LA boba, Sunright Tea Studio is a 4.6 out of 5. Start with the Sun Moon Lake Milk Tea and the Alishan Oolong. That is all you need to understand what the shop is about.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Order the Sun Moon Lake Milk Tea at 70 percent sweet. The tea is distinctive enough that full sugar masks it.</li>
                <li>Ask which teas were brewed most recently. Fresh-brewed batches give you a noticeably better cup.</li>
                <li>The SGV locations see the best quality consistency. If you can make the drive to Pasadena or Rowland Heights, do it.</li>
                <li>Sunright&apos;s toppings are better than most chains. The sea salt cream and the signature pearls are both worth adding.</li>
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
                  { label: "Drink Variety", score: 8 },
                  { label: "Value", score: 8 },
                  { label: "Consistency", score: 9 },
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
              <p className="text-5xl font-bold">4.6/5</p>
              <p className="text-blue-100 text-xs mt-1">Top-tier tea sourcing in LA</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Key Locations:</span> Pasadena, Rowland Heights</p>
                <p><span className="font-semibold">Origin:</span> Taiwan</p>
                <p><span className="font-semibold">Price:</span> $8 to $11 per drink</p>
                <p><span className="font-semibold">Best drink:</span> Sun Moon Lake Milk Tea</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More LA Boba Reviews</h3>
              <div className="space-y-2">
                <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Chicha San Chen SGV Review &rarr;
                </Link>
                <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Boba Guys Review &rarr;
                </Link>
                <Link href="/tiger-sugar-review-koreatown-boba-bubble-tea/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Tiger Sugar Koreatown Review &rarr;
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
