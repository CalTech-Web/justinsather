import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food and Drink | Justin Sather - Los Angeles Boba Guide",
  description: "All food and drink content from Justin Sather's Los Angeles boba guide. Reviews, neighborhood guides, and citywide roundups.",
};

const articles = [
  {
    title: "Tiger Sugar, Koreatown: The Best Brown Sugar Boba in Los Angeles?",
    href: "/tiger-sugar-review-koreatown-boba-bubble-tea/",
    image: "/assets/products/tiger_sugar_drink.png",
    type: "Shop Review",
    summary: "An honest, in-depth review of Tiger Sugar in Koreatown. The best brown sugar boba in LA? Justin paid his own way and gives you the full verdict.",
    rating: "5/5",
  },
  {
    title: "Best Boba in Koreatown: A Complete Guide to 30+ Shops",
    href: "/best-boba-koreatown-complete-guide-to-30-shops/",
    image: "/assets/gallery/boba_koreatown_guide.png",
    type: "Neighborhood Guide",
    summary: "The most complete guide to boba in Koreatown. Every shop visited, ranked, and reviewed. 30+ shops covered with insider tips and ordering recommendations.",
    rating: null,
  },
  {
    title: "Best Boba in Los Angeles: 25+ Top Shops Across LA County",
    href: "/best-boba-los-angeles/",
    image: "/assets/products/boba_scene_lifestyle.png",
    type: "Citywide Roundup",
    summary: "25+ top boba shops across LA County. Koreatown, San Gabriel Valley, Silver Lake, and beyond. Every shop personally visited, all drinks paid out of pocket.",
    rating: null,
  },
];

export default function FoodDrinkCategoryPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Category
          </span>
          <h1 className="text-4xl font-bold text-[#1A202C] mb-3">Food and Drink</h1>
          <p className="text-[#4A5568] text-lg max-w-2xl">
            All boba and bubble tea content from Justin Sather&apos;s Los Angeles guide. Reviews, neighborhood guides, and citywide roundups, all based on personal visits.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.href} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <Link href={article.href} className="block">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#2B6CB0] uppercase tracking-wide">{article.type}</span>
                  {article.rating && (
                    <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">{article.rating}</span>
                  )}
                </div>
                <Link href={article.href}>
                  <h2 className="text-lg font-bold text-[#1A202C] mb-2 hover:text-[#2B6CB0] transition-colors leading-snug">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{article.summary}</p>
                <Link href={article.href} className="text-[#2B6CB0] text-sm font-semibold hover:text-[#215387] transition-colors">
                  Read More &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
