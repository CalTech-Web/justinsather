import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiger Sugar Review: The Best Brown Sugar Boba in Koreatown | Justin Sather",
  description: "An honest, in-depth review of Tiger Sugar in Koreatown, Los Angeles. The best brown sugar boba in LA? Justin Sather paid his own way and gives you the full verdict.",
};

export default function TigerSugarReviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="text-[#2B6CB0] text-sm hover:text-[#215387] transition-colors">
              &larr; Back to Koreatown Guide
            </Link>
          </div>
          <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Shop Review
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4 leading-tight">
            Tiger Sugar, Koreatown: The Best Brown Sugar Boba in Los Angeles?
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/assets/team/justin-sather-avatar.jpg" alt="Justin Sather" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1A202C]">Justin Sather</p>
              <p className="text-xs text-[#718096]">Visited in person, paid out of pocket &bull; Updated Q1 2026</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm mb-6">
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">5/5 Stars</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Koreatown</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">Brown Sugar Boba</span>
            <span className="bg-[#EDF2F7] text-[#2D3748] px-3 py-1 rounded-full">$$</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 mb-10">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/products/tiger_sugar_drink.png"
            alt="Tiger Sugar brown sugar boba drink Koreatown Los Angeles"
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
            { label: "Address", value: "3470 W 6th St, Los Angeles, CA" },
            { label: "Hours", value: "Mon-Sun, 11am to 10pm" },
            { label: "Price Range", value: "$$" },
            { label: "Best For", value: "Brown sugar boba, dates, photos" },
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
              Tiger Sugar is the best brown sugar boba shop in Koreatown. That&apos;s not a close call. If you are visiting K-Town and you want one drink, this is where you go.
            </p>
            <p>
              The signature drink is the Brown Sugar Boba Milk with Cream Mousse. It is a layered drink built from the bottom up: fresh tapioca pearls cooked with brown sugar syrup, cold milk, and a salted cream foam on top that gets torched table-side. The theatrical presentation is part of the appeal, but it also serves a functional purpose: the light charring on the foam adds a subtle caramelized note that balances the sweetness of the brown sugar below.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Pearls</h2>
            <p>
              The pearls are what separate Tiger Sugar from every imitator. They make fresh batches every 4 hours, which means the tapioca is always at the right texture: bouncy on the outside and soft inside, infused with brown sugar syrup that is genuinely house-made and not just a commercial syrup dumped over pre-packaged pearls.
            </p>
            <p>
              Most boba shops let their pearls sit. After a few hours, tapioca turns from bouncy to gummy. Tiger Sugar doesn&apos;t let that happen.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">The Atmosphere</h2>
            <p>
              The K-Town location has a clean, modern interior. The line forms outside during peak hours (Friday and Saturday evenings), but it moves quickly. Seating is limited so most people order and leave. Staff are efficient and friendly without being over-the-top.
            </p>
            <p>
              Parking is the main complaint in the area, not Tiger Sugar&apos;s fault but worth knowing: street parking on 6th Street is limited. Use the Target parking structure two blocks west and walk.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">What to Order</h2>
            <p>
              Keep it simple. The Brown Sugar Boba Milk with Cream Mousse is the reason to come. Everything else on the menu is decent but unremarkable. The specialty drinks vary by season and some are better than others.
            </p>
            <p>
              If you hate sweet drinks, reduce the sugar level when you order. The default is very sweet, which is part of the experience, but a 50% sugar option gives you a more balanced drink.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C]">Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-2 text-sm">Pros</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>Best brown sugar boba in Koreatown</li>
                  <li>Fresh pearls every 4 hours</li>
                  <li>Theatrical table-side torching</li>
                  <li>Fast service even during peak hours</li>
                  <li>Consistent quality across visits</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-2 text-sm">Cons</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>Limited seating</li>
                  <li>Long lines on weekends</li>
                  <li>Menu is narrow outside the signature drink</li>
                  <li>Parking is a challenge in the area</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1A202C]">Final Verdict</h2>
            <p>
              Tiger Sugar is the real deal. The hype is earned. If you are building a boba bucket list for Koreatown, start here. Five out of five.
            </p>

            <div className="bg-[#EDF2F7] rounded-xl p-5 mt-6">
              <p className="text-sm font-semibold text-[#1A202C] mb-2">Insider Tips</p>
              <ul className="text-sm text-[#4A5568] space-y-2">
                <li>Come before noon on weekdays to skip the line entirely.</li>
                <li>The drink is designed to be enjoyed immediately. The cream foam deflates and the ice melts fast.</li>
                <li>Order 75% sugar for the best balance of brown sugar flavor and sweetness.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Quick Rating</h3>
              <div className="space-y-2">
                {[
                  { label: "Drink Quality", score: 10 },
                  { label: "Pearl Freshness", score: 10 },
                  { label: "Value", score: 8 },
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
              <p className="text-blue-100 text-xs mt-1">Best brown sugar boba in Koreatown</p>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Location Details</h3>
              <div className="space-y-2 text-sm text-[#4A5568]">
                <p><span className="font-semibold">Address:</span> 3470 W 6th St, Los Angeles</p>
                <p><span className="font-semibold">Hours:</span> Daily 11am to 10pm</p>
                <p><span className="font-semibold">Parking:</span> Use Target structure 2 blocks west</p>
                <p><span className="font-semibold">Best time:</span> Weekday mornings</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">More Koreatown Reviews</h3>
              <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors block">
                Full Koreatown Guide (30+ shops) &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-[#1A202C] mb-1">Explore More Koreatown Boba</h2>
            <p className="text-[#4A5568] text-sm">30+ shops covered in the complete guide.</p>
          </div>
          <Link
            href="/best-boba-koreatown-complete-guide-to-30-shops/"
            className="bg-[#2B6CB0] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#215387] transition-colors flex-shrink-0"
          >
            Koreatown Guide
          </Link>
        </div>
      </section>
    </>
  );
}
