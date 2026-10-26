import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { products, money } from "../data/products";

export default function ProductPage() {
  const { id } = useParams();
  const p = products.find((x) => x.id === id);
  const [active, setActive] = useState(0);

  if (!p) return (
    <div className="mx-auto max-w-7xl px-5 py-24">
      <p className="text-lg">We couldn’t find that piece.</p>
      <Link to="/shop" className="underline text-olive">Back to the collection</Link>
    </div>
  );

  const specs = [["Condition", p.condition], ["Materials", p.materials], ["Dimensions", p.dimensions], ["Category", p.category]];

  return (
    <div className="mx-auto max-w-7xl px-5 pt-8">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-olive"><ArrowLeft size={16} />All furniture</Link>
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div>
          <img src={p.images[active]} alt={`${p.title}, photo ${active + 1}`} className="w-full aspect-[4/5] object-cover rounded-t-[999px] rounded-b-md bg-linen" />
          <div className="mt-4 flex gap-3">
            {p.images.map((src, i) => (
              <button key={src} onClick={() => setActive(i)} aria-label={`Show photo ${i + 1}`} aria-pressed={i === active}
                className={`w-20 h-20 overflow-hidden rounded-md border-2 ${i === active ? "border-olive" : "border-transparent"}`}>
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="lg:pt-10">
          <h1 className="display text-5xl md:text-7xl">{p.title}</h1>
          <p className="mt-6 text-3xl font-display text-olive">{money(p.price)}</p>
          <p className="mt-6 text-lg leading-relaxed max-w-prose">{p.description}</p>
          <dl className="mt-8 divide-y divide-espresso/15 border-y border-espresso/15">
            {specs.map(([k, v]) => (
              <div key={k} className="flex justify-between py-3"><dt className="text-espresso/60">{k}</dt><dd className="text-right">{v}</dd></div>
            ))}
          </dl>
          <div className="mt-8">
            {p.status === "available" ? (
              <>
                <button disabled className="w-full md:w-auto bg-olive text-cream px-8 py-4 rounded-full opacity-60 cursor-not-allowed">Buy now (checkout arrives in Phase 3)</button>
                <p className="mt-3 text-sm text-espresso/60">Pickup only. Pay online or in person.</p>
              </>
            ) : (
              <p className="inline-block bg-espresso text-cream px-6 py-3 rounded-full">{p.status === "sold" ? "This piece has sold" : "This piece is reserved"}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
