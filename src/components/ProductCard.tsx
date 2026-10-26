import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Product, money } from "../data/products";

export default function ProductCard({ p, tall = false }: { p: Product; tall?: boolean }) {
  const unavailable = p.status !== "available";
  return (
    <Link to={`/shop/${p.id}`} className="group block">
      <div className={`relative overflow-hidden bg-linen ${tall ? "aspect-[4/5]" : "aspect-[5/6]"} rounded-t-[999px] rounded-b-md`}>
        <motion.img
          src={p.images[0]} alt={p.title} loading="lazy"
          className={`h-full w-full object-cover ${unavailable ? "grayscale opacity-70" : ""}`}
          whileHover={{ scale: 1.04 }} transition={{ duration: 0.6 }}
        />
        {unavailable && (
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-espresso text-cream px-4 py-1 text-sm rounded-full">
            {p.status === "sold" ? "Sold" : "Reserved"}
          </span>
        )}
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-xl">{p.title}</h3>
        <span className="text-olive font-medium">{money(p.price)}</span>
      </div>
      <p className="text-sm text-espresso/60">{p.category} · {p.condition}</p>
    </Link>
  );
}
