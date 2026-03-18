import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Los Angeles Boba Guide | Justin Sather",
  description: "The most comprehensive boba and bubble tea guide in Los Angeles. 150+ shops visited personally, honest reviews, original photos, and zero sponsorships.",
};

const shops = [
  {
    name: "Tiger Sugar",
    neighborhood: "Koreatown",
    rating: "5/5",
    image: "/assets/products/tiger_sugar_drink.png",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
    highlight: "Best brown sugar boba in Koreatown. Fresh pearls every 4 hours.",
    price: "$$",
  },
  {
    name: "Boba Guys",
    neighborhood: "Multiple Locations",
    rating: "4.5/5",
    image: "/assets/products/boba_guys_drinks.png",
    href: "/best-boba-los-angeles/",
    highlight: "Organic, specialty-grade teas with house-made milk and fresh taro.",
    price: "$$",
  },
  {
    name: "Yi Fang",
    neighborhood: "San Gabriel Valley",
    rating: "4/5",
    image: "/assets/products/yifang_drink.png",
    href: "/best-boba-los-angeles/",
    highlight: "Taiwanese fruit teas done right. The brown sugar boba milk is a must-try.",
    price: "$",
  },
  {
    name: "It&apos;s Boba Time",
    neighborhood: "Silver Lake",
    rating: "4/5",
    image: "/assets/products/its_boba_time_drink.png",
    href: "/best-boba-los-angeles/",
    highlight: "LA original since 1999. Classic flavors, reliable quality, great value.",
    price: "$",
  },
  {
    name: "Chicha San Chen",
    neighborhood: "Multiple Locations",
    rating: "4.5/5",
    image: "/assets/products/chicha_san_chen_drink.png",
    href: "/best-boba-los-angeles/",
    highlight: "High-end Taiwanese tea house. The osmanthus oolong latte is exceptional.",
    price: "$$$",
  },
  {
    name: "7 Leaves Cafe",
    neighborhood: "Multiple Locations",
    rating: "4/5",
    image: "/assets/products/7_leaves_cafe_drink.png",
    href: "/best-boba-los-angeles/",
    highlight: "Vietnamese-American cafe with creative seasonal drinks and excellent matcha.",
    price: "$$",
  },
];

export default function BobaGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              LA Boba Guide
            </span>
            <h1 className="text-4xl font-bold text-[#1A202C] mb-4">
              The Complete Los Angeles Boba and Bubble Tea Guide
            </h1>
            <p className="text-lg text-[#4A5568] leading-relaxed">
              150+ shops visited personally. Every review is based on a real in-person visit with original photos. No sponsorships, no free drinks.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhood guides */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Neighborhood Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link href="/best-boba-koreatown-complete-guide-to-30-shops/" className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-56">
              <Image
                src="/assets/gallery/boba_koreatown_guide.png"
                alt="Best boba in Koreatown Los Angeles"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-200 mb-1">30+ Shops</p>
                <h3 className="text-xl font-bold">Koreatown Complete Guide</h3>
              </div>
            </div>
          </Link>
          <Link href="/best-boba-los-angeles/" className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-56">
              <Image
                src="/assets/gallery/best-boba-los-angeles-feature-full.jpeg"
                alt="Best boba shops across all of Los Angeles County"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-200 mb-1">25+ Top Shops</p>
                <h3 className="text-xl font-bold">Best Boba in Los Angeles</h3>
              </div>
            </div>
          </Link>
        </div>

        {/* Shop grid */}
        <h2 className="text-2xl font-bold text-[#1A202C] mb-6">Featured Shops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop) => (
            <article key={shop.name} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-44">
                <Image
                  src={shop.image}
                  alt={`${shop.name} boba review`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#718096] font-medium">{shop.neighborhood}</span>
                  <span className="text-xs font-bold text-[#2B6CB0]">{shop.rating}</span>
                </div>
                <h3 className="font-bold text-[#1A202C] mb-2" dangerouslySetInnerHTML={{ __html: shop.name }} />
                <p className="text-[#4A5568] text-sm leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: shop.highlight }} />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#718096]">{shop.price}</span>
                  <Link href={shop.href} className="text-[#2B6CB0] text-xs font-semibold hover:text-[#215387] transition-colors">
                    Full Review &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#EDF2F7] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6">From the Streets of Koreatown</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/assets/gallery/boba_koreatown_1.jpg", alt: "Koreatown boba scene photo 1" },
              { src: "/assets/gallery/boba_koreatown_2.jpg", alt: "Koreatown boba scene photo 2" },
              { src: "/assets/gallery/boba_koreatown_3.jpg", alt: "Koreatown boba scene photo 3" },
              { src: "/assets/gallery/boba_koreatown_4.jpg", alt: "Koreatown boba scene photo 4" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square rounded-lg overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
