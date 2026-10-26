import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [q, setQ] = useState("");
  const [hideSold, setHideSold] = useState(false);
  const category = params.get("category") ?? "All";

  const list = useMemo(() => products.filter((p) =>
    (category === "All" || p.category === category) &&
    (!hideSold || p.status === "available") &&
    `${p.title} ${p.materials}`.toLowerCase().includes(q.toLowerCase())
  ), [q, category, hideSold]);

  const pick = (c: string) => (c === "All" ? setParams({}) : setParams({ category: c }));

  return (
    <div className="mx-auto max-w-7xl px-5 pt-12">
      <h1 className="display text-6xl md:text-9xl">The collection</h1>
      <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {["All", ...categories].map((c) => (
            <button key={c} onClick={() => pick(c)} aria-pressed={category === c}
              className={`px-5 py-2 rounded-full border text-sm transition-colors ${category === c ? "bg-espresso text-cream border-espresso" : "border-espresso/30 hover:border-espresso"}`}>{c}</button>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <label className="relative">
            <span className="sr-only">Search furniture</span>
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-espresso/50" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" className="pl-9 pr-4 py-2 rounded-full bg-linen w-48 placeholder:text-espresso/50" />
          </label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={hideSold} onChange={(e) => setHideSold(e.target.checked)} />Available only</label>
        </div>
      </div>
      {list.length === 0 ? (
        <p className="mt-16 text-lg">Nothing matches that search. Try another category or clear the search box.</p>
      ) : (
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      )}
    </div>
  );
}
