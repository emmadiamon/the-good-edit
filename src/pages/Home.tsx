import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";

const headline = ["GOOD THINGS.", "NEW BEGINNINGS."];

export default function Home() {
  const featured = products.filter((p) => p.status === "available").slice(0, 3);
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-12 md:pt-20">
        <h1 className="display text-[clamp(3.5rem,13vw,11rem)]">
          {headline.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.08em]">
              <motion.span className={`block ${i === 1 ? "text-olive md:pl-[12vw]" : ""}`} initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: i * 0.15, ease: [0.2, 0.7, 0.2, 1] }}>
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-12 items-end">
          <p className="md:col-span-5 text-lg leading-relaxed max-w-md">
            A personal moving sale of pieces chosen with care and kept well. Everything is priced to find a new home quickly.
          </p>
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <img src={products[0].images[0]} alt="" className="rounded-t-[999px] rounded-b-md aspect-[4/5] object-cover w-full" />
            <img src={products[1].images[0]} alt="" className="rounded-t-md rounded-b-[999px] aspect-[4/5] object-cover w-full mt-10" />
          </div>
        </div>
        <Link to="/shop" className="mt-10 inline-flex items-center gap-2 bg-olive text-cream px-7 py-4 rounded-full hover:bg-olive-deep transition-colors">
          Browse the collection <ArrowRight size={18} />
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-5 mt-28">
        <h2 className="display text-5xl md:text-7xl">Just in</h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <ProductCard key={p.id} p={p} tall />)}
        </div>
      </section>

      <section className="mt-28 bg-olive text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 grid gap-10 md:grid-cols-2">
          <h2 className="display text-5xl md:text-7xl">Why it’s all for sale</h2>
          <p className="text-lg leading-relaxed text-cream/90 max-w-prose">
            We’re moving, and these pieces deserve people who will use them. Each item was chosen for how it looks and how it lasts. Prices are fixed, photos are honest, and pickup is simple.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 mt-24">
        <h2 className="font-display text-3xl">Shop by room</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((c) => (
            <Link key={c} to={`/shop?category=${c}`} className="border border-espresso/30 rounded-full px-6 py-3 hover:bg-espresso hover:text-cream transition-colors">{c}</Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 mt-24">
        <div className="bg-linen rounded-3xl p-8 md:p-14 flex gap-5 items-start">
          <MapPin className="text-olive shrink-0 mt-1" />
          <div>
            <h2 className="font-display text-3xl">Pickup only</h2>
            <p className="mt-2 max-w-prose">Pickup is in [YOUR GENERAL AREA]. Once your purchase is confirmed, you’ll receive the exact address and a pickup window by email.</p>
            <Link to="/how-it-works" className="mt-4 inline-block underline underline-offset-4 text-olive">See how it works</Link>
          </div>
        </div>
      </section>
    </>
  );
}
