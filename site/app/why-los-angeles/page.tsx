import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Los Angeles? | Justin Sather",
  description: "Justin Sather explains why he moved from Turlock, CA to Los Angeles and why LA is the perfect home for the world's most obsessive boba guide.",
};

export default function WhyLosAngelesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            The Story
          </span>
          <h1 className="text-4xl font-bold text-[#1A202C] mb-4">Why Los Angeles?</h1>
          <p className="text-lg text-[#4A5568] leading-relaxed max-w-2xl">
            From a small town in Central California to the boba capital of the United States. Here is how I ended up here, and why it made sense to build this guide in LA.
          </p>
        </div>
      </section>

      {/* Main story content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-[#4A5568] leading-relaxed max-w-prose">
            <h2 className="text-2xl font-bold text-[#1A202C]">From Turlock to Los Angeles</h2>
            <p>
              I&apos;m originally from Turlock, California. If you&apos;ve never been, it&apos;s a small agricultural city in the Central Valley, the kind of place where everyone knows everyone and the closest thing to boba is a Jamba Juice.
            </p>
            <p>
              When I finished school with my civil engineering degree, I had one clear goal: see more of the world. I wanted to pick a city, live in it properly, and figure out whether it was where I belonged. Los Angeles was the first stop.
            </p>
            <p>
              I arrived in 2015. Within a few months, I was hooked. Not just on the city generally, but specifically on LA&apos;s boba scene, which I quickly discovered is one of the best in the country. The sheer density of high-quality bubble tea shops in neighborhoods like Koreatown and the San Gabriel Valley is unlike anything you find elsewhere in the US.
            </p>
            <p>
              But what I also discovered is that finding honest, current, useful information about which shops to visit was surprisingly hard. Yelp reviews go stale. Food blogs are filled with sponsored content. Most top-10 lists are copied from each other. Nobody had actually visited every shop and written a real review of each one.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C] mt-8">Why This Guide Exists</h2>
            <p>
              So I started keeping notes. I visited every shop I could find. I paid for every drink out of pocket. I took photos, wrote down what I liked and didn&apos;t like, and eventually I had enough material to build the guide I wished had existed when I moved here.
            </p>
            <p>
              Los Angeles is the right city for this guide because it has the boba scene to support it. Koreatown alone has 30+ shops within a few square miles. The San Gabriel Valley is a completely different universe of Taiwanese and Chinese-style bubble tea. Silver Lake and Echo Park have their own emerging scenes. And new shops are opening constantly.
            </p>
            <p>
              The goal is to document all of it. Not just the popular spots, not just a curated best-of list, but every boba shop in LA County. That&apos;s a long-term project, and one that I&apos;m building in real time.
            </p>

            <h2 className="text-2xl font-bold text-[#1A202C] mt-8">LA as Home</h2>
            <p>
              After nearly a decade in Los Angeles, it&apos;s no longer just a stop on a journey. It&apos;s home. I work here as a structural engineer, I explore here as a boba obsessive, and I write here as the author of what I hope is the most useful boba guide in the city.
            </p>
            <p>
              If you have a shop you think I should visit, or just want to talk boba, reach out. I&apos;m always looking for the next great drink.
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/assets/team/justin-sather-headshot-1024.jpg"
                  alt="Justin Sather in Los Angeles"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="font-bold text-[#1A202C] text-sm">Justin Sather</p>
                <p className="text-[#718096] text-xs">Founder, Los Angeles Boba Guide</p>
              </div>
            </div>

            <div className="bg-[#EDF2F7] rounded-xl p-5">
              <h3 className="font-bold text-[#1A202C] mb-3 text-sm">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-[#4A5568]">
                <li className="flex justify-between"><span>Hometown</span><span className="font-medium">Turlock, CA</span></li>
                <li className="flex justify-between"><span>Moved to LA</span><span className="font-medium">2015</span></li>
                <li className="flex justify-between"><span>Guide started</span><span className="font-medium">2024</span></li>
                <li className="flex justify-between"><span>Shops visited</span><span className="font-medium text-[#2B6CB0]">150+</span></li>
                <li className="flex justify-between"><span>Sponsorships</span><span className="font-medium">Zero</span></li>
              </ul>
            </div>

            <div className="bg-[#2B6CB0] rounded-xl p-5 text-white">
              <h3 className="font-bold mb-2 text-sm">Explore the Guide</h3>
              <p className="text-white text-xs mb-3">Start with the most thoroughly documented neighborhood in LA.</p>
              <Link
                href="/best-boba-koreatown-complete-guide-to-30-shops/"
                className="block text-center bg-white text-[#2B6CB0] font-bold text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Koreatown Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Boba scene photos */}
      <section className="bg-[#EDF2F7] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1A202C] mb-5">The LA Boba Scene</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src="/assets/products/boba_scene_lifestyle.png"
                alt="Los Angeles boba scene lifestyle"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src="/assets/gallery/boba_koreatown_guide.png"
                alt="Koreatown boba shops Los Angeles"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
