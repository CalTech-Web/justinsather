import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wanderlust Creamery Review: LA's Most Creative Ice Cream Shop | Justin Sather",
  description: "An honest review of Wanderlust Creamery in Los Angeles. Travel-inspired flavors, globally sourced ingredients, and the most creative ice cream menu in the city. Every scoop reviewed.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "Wanderlust Creamery Review: LA's Most Creative Ice Cream Shop",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
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
    "name": "Wanderlust Creamery",
    "servesCuisine": "Artisan Ice Cream",
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
  "datePublished": "2026-01-15",
  "url": "https://justinsather.com/wanderlust-creamery-review-los-angeles/"
};

export default function WanderlustCreameryReviewPage() {
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
            Wanderlust Creamery Review: LA&apos;s Most Creative Ice Cream Shop
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
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Atwater Village</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Artisan Ice Cream</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/wanderlust_creamery_product.png"
            alt="Wanderlust Creamery ice cream flavors Los Angeles"
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
            { label: "Flagship Location", value: "Atwater Village, LA" },
            { label: "Hours", value: "Varies by location, typically noon to 10pm" },
            { label: "Price Range", value: "$6 to $9 per scoop" },
            { label: "Best For", value: "Adventurous flavors, globally inspired ice cream" },
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
              Wanderlust Creamery is the best ice cream shop in Los Angeles. That is not a close call. The flavor program here is unlike anything else in the city. Every scoop is built around a specific place or culinary tradition, and the execution is precise enough that you can actually taste the reference point. This is not novelty for its own sake. These are genuinely great flavors.
            </p>
            <p>
              I have eaten ice cream at every shop worth visiting in LA County. Wanderlust stands apart because the people making it actually understand global ingredient sourcing at a level most ice cream makers do not bother with. The results show in every bite.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What Makes Wanderlust Creamery Different</h2>
            <p>
              The concept is straightforward: every flavor on the menu is inspired by a specific destination or culinary tradition from somewhere in the world. The Ube flavor references Filipino purple yam. The Champurrado is built on the Mexican spiced hot chocolate tradition. The Thai Milk Tea is a direct translation of the street tea culture from Bangkok into ice cream form.
            </p>
            <p>
              What separates this from gimmick ice cream is the sourcing. The ube comes from real ube, not ube extract or artificial purple flavoring. The Thai tea is brewed from actual Thai tea leaves. The cardamom in the Cardamom Rose flavor is fresh-ground, not pre-blended spice mix. You can tell the difference. The flavors have a sharpness and authenticity that you do not get from a shop that is just adding flavored syrups to a vanilla base.
            </p>
            <p>
              The founders clearly traveled extensively and ate widely before building this menu. That depth of reference shows. Each flavor feels considered rather than manufactured.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-4">
              <Image
                src="/assets/products/wanderlust_creamery_product.png"
                alt="Wanderlust Creamery artisan ice cream scoops Los Angeles"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">What to Order</h2>
            <p>
              The Ube is the entry point and the right starting order for anyone new to the shop. Filipino purple yam has a distinct earthy sweetness that reads as subtly floral and slightly nutty. The color is naturally vivid. This is what ube actually tastes like when it is made correctly, not the lurid purple extract version served at most places.
            </p>
            <p>
              The Thai Milk Tea is the one to order if you drink boba or Thai iced tea regularly. Wanderlust has essentially taken everything that makes a great Thai tea and compressed it into a scoop. The condensed milk sweetness is present but restrained. The tea flavor is prominent enough that you know exactly what inspired it.
            </p>
            <p>
              The Champurrado is the most polarizing flavor on the menu and also the most interesting one. Mexican champurrado is a thick hot chocolate made with masa, cinnamon, and often piloncillo. Translating that into ice cream should not work as well as it does. Order this one if you are willing to be surprised.
            </p>
            <p>
              The seasonal menu rotates and is always worth checking before you order. Wanderlust introduces limited flavors tied to specific ingredient seasons and cultural calendars. The limited flavors are often the best things in the case. Ask what is new before you default to the permanent menu.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Los Angeles Locations</h2>
            <p>
              The original and flagship location is in Atwater Village, a neighborhood in the northeast corner of LA that has become a genuine destination for food and drink over the past decade. The Atwater shop has the widest flavor selection and the most consistent staffing. This is the right place to visit if you are making a dedicated trip.
            </p>
            <p>
              Additional locations have opened in Woodland Hills and other parts of the San Fernando Valley, as well as pop-up presence at select markets and events across the city. The valley locations are more accessible by car and have shorter lines. The flavor rotation at satellite locations is slightly narrower than at Atwater.
            </p>
            <p>
              Lines at Atwater get long on weekend afternoons, particularly in warmer months. Arrive before noon or after 8pm to avoid the worst waits. The shop is compact, so lines move outside. Parking on Glendale Boulevard near the shop is available on the street and in a small lot behind the building.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pricing</h2>
            <p>
              A single scoop at Wanderlust runs $6 to $7. A double is $8 to $9. Cones cost a dollar more than cups. This is premium artisan ice cream pricing and it is fair given the ingredient sourcing. You are not paying for a name or a trend. You are paying for real ube, fresh-brewed tea, and actual sourced spices in every scoop.
            </p>
            <p>
              Compared to the major boba shops I cover on this site, a Wanderlust double scoop lands in the same price range as a drink at{" "}
              <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Boba Guys
              </Link>{" "}
              or{" "}
              <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] hover:text-[#215387]">
                Chicha San Chen
              </Link>
              . It belongs in that tier of LA&apos;s premium, ingredient-driven food and drink category.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">How It Compares</h2>
            <p>
              Salt and Straw is the obvious competitive comparison. Both are premium artisan ice cream with rotating seasonal menus and ingredient-forward branding. The difference is focus. Salt and Straw leans into local and seasonal California sourcing. Wanderlust leans into global cultural reference. If you prefer the local farm story, Salt and Straw makes sense. If you prefer the world-travel menu, Wanderlust is the better fit.
            </p>
            <p>
              McConnell&apos;s is the other premium LA comparison. McConnell&apos;s is a Central Coast institution with exceptional dairy quality and a more conservative flavor program. The ice cream base is arguably richer than Wanderlust. But the flavor creativity does not reach the same level. For people who want to be challenged by what they are eating, Wanderlust wins.
            </p>
            <p>
              Within the food and drink world I document on this site, the closest parallel is{" "}
              <Link href="/yi-fang-taiwan-fruit-tea-review-los-angeles/" className="text-[#2B6CB0] hover:text-[#215387]">
                Yi Fang Taiwan Fruit Tea
              </Link>
              . Both are shops where the sourcing philosophy is specific, the execution is consistent, and the cultural authenticity behind the product is real rather than performed.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-3 text-base">Pros</h3>
                <ul className="text-sm text-green-700 space-y-2 leading-relaxed">
                  <li>Most creative and globally informed flavor program in LA</li>
                  <li>Real ingredient sourcing behind every flavor, not extract-based shortcuts</li>
                  <li>Seasonal menu rotation gives regulars a reason to keep coming back</li>
                  <li>Atwater Village location is worth the trip on its own</li>
                  <li>Flavors that challenge your expectations and actually deliver</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-3 text-base">Cons</h3>
                <ul className="text-sm text-red-700 space-y-2 leading-relaxed">
                  <li>Weekend afternoon lines at Atwater are genuinely long</li>
                  <li>Premium pricing, $8 to $9 for a double scoop</li>
                  <li>Satellite locations carry fewer flavors than the flagship</li>
                  <li>Parking on Glendale Boulevard can be tight on busy evenings</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Wanderlust Creamery earns its reputation as the most interesting ice cream shop in Los Angeles. The concept works because the people behind it took the sourcing and cultural research seriously. This is not a theme executed with generic ingredients. The ube is real ube. The Thai tea is brewed Thai tea. The champurrado is built on actual masa.
            </p>
            <p>
              If you eat thoughtfully in LA, meaning you care about where ingredients come from and whether the people making your food understand what they are referencing, Wanderlust belongs on your list. Five out of five. Go to Atwater, order two scoops of things you have never tried, and work backward from there.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-8 border-t-4 border-[#2B6CB0]">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Always ask about the seasonal specials before ordering. The rotating flavors are often the most interesting things in the case and sell out before closing.</li>
                <li>Weekday evenings after 7pm are the best time to visit Atwater. The line is shorter and the staff have more time to walk you through the menu.</li>
                <li>Order a single scoop of something unfamiliar before committing to a double. The flavor intensity is higher than most ice cream shops and some of the bolder flavors are better in smaller portions.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Quick Rating</h3>
              <div className="space-y-2">
                {[
                  { label: "Flavor Creativity", score: 10 },
                  { label: "Ingredient Quality", score: 9 },
                  { label: "Value", score: 8 },
                  { label: "Atmosphere", score: 8 },
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
              <p className="text-5xl font-bold">5/5</p>
              <p className="text-blue-100 text-xs mt-1">Best ice cream in LA</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Flagship:</span> Atwater Village, LA</p>
                <p><span className="font-semibold">Also in:</span> Woodland Hills and select markets</p>
                <p><span className="font-semibold">Price:</span> $6 to $9 per scoop</p>
                <p><span className="font-semibold">Parking:</span> Street parking on Glendale Blvd, small rear lot</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More LA Food Reviews</h3>
              <div className="space-y-2">
                <Link href="/boba-guys-review-los-angeles/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Boba Guys Review &rarr;
                </Link>
                <Link href="/chicha-san-chen-san-gabriel-review/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                  Chicha San Chen SGV Review &rarr;
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
