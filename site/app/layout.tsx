import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Justin Sather, Los Angeles - Your Honest Guide to Every Boba Shop",
  description: "LA-based boba enthusiast Justin Sather has personally visited 150+ bubble tea shops across Los Angeles County, documenting every one with original photos, honest reviews, and zero sponsorships.",
  metadataBase: new URL("https://justinsather.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
