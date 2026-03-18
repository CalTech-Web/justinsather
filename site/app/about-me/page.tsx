import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Justin Sather | Los Angeles Boba Guide",
  description: "Learn about Justin Sather, the LA-based boba enthusiast who has personally visited 150+ bubble tea shops across Los Angeles County with zero sponsorships.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                About Justin
              </span>
              <h1 className="text-4xl font-bold text-[#1A202C] mb-4">About Justin Sather</h1>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
                Founder of Los Angeles&apos;s most honest, most thorough boba guide. 150+ shops visited, $3,000+ spent, zero sponsorships.
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:justin@justinsather.com"
                  className="bg-[#2B6CB0] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#215387] transition-colors text-sm"
                >
                  Email Justin
                </a>
                <a
                  href="https://instagram.com/labobaguide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#2B6CB0] text-[#2B6CB0] font-semibold px-5 py-2 rounded-lg hover:bg-[#EDF2F7] transition-colors text-sm"
                >
                  @labobaguide
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl ring-4 ring-[#2B6CB0]">
                <Image
                  src="/assets/team/justin-sather-headshot-1024.jpg"
                  alt="Justin Sather, Los Angeles boba guide author"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy quote */}
      <section className="bg-[#215387] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl font-medium italic leading-relaxed">
            &ldquo;I pay for every drink myself. No sponsorships, no partnerships, no free products. Just honest reviews from a guy who really, really loves boba.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Personal story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">The Story Behind the Guide</h2>
          <div className="space-y-4 text-[#4A5568] leading-relaxed">
            <p>
              I&apos;m from a small town in California named Turlock. I was born and raised there, and after growing up I wanted to see the world and decide for myself what type of location I wanted to live in. The first stop on that journey is Los Angeles.
            </p>
            <p>
              When I moved to LA in 2015, I started exploring the city the way most people do: through food. And in LA, boba is everywhere. I quickly discovered that finding honest information about where to go was harder than it should be. Yelp reviews are stale, food blogs are sponsored, and most &ldquo;best of&rdquo; lists are copy-pasted from each other.
            </p>
            <p>
              So I built the guide I wished existed. I visit every shop myself, I pay for every drink out of pocket, and I write honest reviews that tell you what you actually need to know: the best things to order, the parking situation, the vibe, the hours, and whether it&apos;s actually worth your time and money.
            </p>
            <p>
              Since November 2024, I&apos;ve visited 150+ bubble tea shops across LA County, spending over $3,000 of my own money in the process. I revisit shops quarterly to keep information current. If a shop closes or changes their menu, I update the review.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#EDF2F7] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "150+", label: "Shops Visited" },
              { value: "50+", label: "Reviews Published" },
              { value: "$3,000+", label: "Self-Funded Boba" },
              { value: "0", label: "Sponsorships" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm">
                <p className="text-3xl font-bold text-[#2B6CB0]">{stat.value}</p>
                <p className="text-[#4A5568] text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-8">How Every Review Works</h2>
        <div className="space-y-6">
          {[
            { step: "1", title: "In-Person Visit", desc: "Justin visits every shop himself, pays out of pocket, and photographs the full experience." },
            { step: "2", title: "Full Documentation", desc: "Original photos taken of the exterior, interior, menu board, and drinks." },
            { step: "3", title: "Detailed Review", desc: "Notes compiled into a full review with insider tips, pricing, atmosphere, and ordering recommendations." },
            { step: "4", title: "Published to the Site", desc: "Review goes live with all the practical info you actually need: hours, prices, parking, and what to order." },
            { step: "5", title: "Quarterly Updates", desc: "Shops revisited every quarter to keep hours, prices, and menu info current and accurate." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 bg-[#2B6CB0] text-white rounded-full flex items-center justify-center font-bold text-sm">
                {item.step}
              </div>
              <div>
                <h3 className="font-bold text-[#1A202C] mb-1">{item.title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-3">Have a Boba Shop to Recommend?</h2>
          <p className="text-[#4A5568] mb-6">
            Justin is always looking for new shops to add to the guide. Send him a tip or just say hello.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:justin@justinsather.com"
              className="bg-[#2B6CB0] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#215387] transition-colors"
            >
              Email: justin@justinsather.com
            </a>
            <a
              href="https://instagram.com/labobaguide"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#2B6CB0] text-[#2B6CB0] font-bold px-6 py-3 rounded-lg hover:bg-[#EDF2F7] transition-colors"
            >
              Instagram: @labobaguide
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
