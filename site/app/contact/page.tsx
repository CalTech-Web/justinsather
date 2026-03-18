import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Justin Sather | Los Angeles Boba Guide",
  description: "Send a message to Justin Sather. Have a boba shop tip, question about a review, or just want to say hello? Reach out here.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#EDF2F7] text-[#2B6CB0] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl font-bold text-[#1A202C] mb-4">Contact Justin</h1>
          <p className="text-[#4A5568] text-lg leading-relaxed max-w-xl mx-auto">
            Have a boba shop tip, a question about a review, or just want to say hello? Send a message below or reach out directly.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <h2 className="text-xl font-bold text-[#1A202C] mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Direct contact */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#1A202C] mb-4">Direct Contact</h2>
              <div className="space-y-4">
                <div className="bg-[#EDF2F7] rounded-xl p-4">
                  <p className="text-xs font-semibold text-[#718096] uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:justin@justinsather.com" className="text-[#2B6CB0] font-medium hover:text-[#215387] transition-colors">
                    justin@justinsather.com
                  </a>
                </div>
                <div className="bg-[#EDF2F7] rounded-xl p-4">
                  <p className="text-xs font-semibold text-[#718096] uppercase tracking-wide mb-1">Instagram</p>
                  <a
                    href="https://instagram.com/labobaguide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2B6CB0] font-medium hover:text-[#215387] transition-colors"
                  >
                    @labobaguide
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1A202C] mb-4">Common Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Do you accept sponsorships?",
                    a: "No. Every drink and every visit is paid out of pocket. No free products, no paid partnerships.",
                  },
                  {
                    q: "Can I recommend a shop?",
                    a: "Yes, please. Justin is always looking for shops to add to the guide. Send the name and neighborhood.",
                  },
                  {
                    q: "How often are reviews updated?",
                    a: "Shops are revisited quarterly. If something has changed, let Justin know and he will re-check on the next visit.",
                  },
                ].map((faq) => (
                  <div key={faq.q} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                    <p className="font-semibold text-[#1A202C] text-sm mb-1">{faq.q}</p>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
