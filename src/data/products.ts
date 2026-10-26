export type Status = "available" | "reserved" | "sold";
export type Category = "Seating" | "Tables" | "Storage" | "Lighting" | "Decor";

export interface Product {
  id: string;
  title: string;
  category: Category;
  price: number;
  status: Status;
  condition: string;
  materials: string;
  dimensions: string;
  description: string;
  images: string[];
}

// Placeholder photos (picsum). Replace with real photos via the admin dashboard in Phase 2.
const img = (seed: string, n = 3) =>
  Array.from({ length: n }, (_, i) => `https://picsum.photos/seed/${seed}${i}/1000/1250`);

export const products: Product[] = [
  { id: "olive-boucle-sofa", title: "Olive Bouclé Sofa", category: "Seating", price: 850, status: "available", condition: "Excellent", materials: "Bouclé fabric, solid oak legs", dimensions: '84"W × 36"D × 31"H', description: "A deep, low three-seater in soft olive bouclé. Cushions are firm and the cover is clean, from a smoke-free, pet-free home.", images: img("sofa") },
  { id: "walnut-dining-table", title: "Walnut Dining Table", category: "Tables", price: 1100, status: "available", condition: "Very good", materials: "Solid walnut", dimensions: '72"W × 36"D × 30"H', description: "Seats six comfortably. A few light surface marks add character, and the finish was recently refreshed.", images: img("table") },
  { id: "cane-lounge-chair", title: "Cane Lounge Chair", category: "Seating", price: 320, status: "reserved", condition: "Good", materials: "Rattan cane, teak frame", dimensions: '28"W × 31"D × 32"H', description: "Sculptural lounge chair with a woven back. Cushion included.", images: img("chair") },
  { id: "oak-media-console", title: "Oak Media Console", category: "Storage", price: 540, status: "available", condition: "Excellent", materials: "White oak veneer, brass pulls", dimensions: '66"W × 18"D × 24"H', description: "Four-door console with adjustable shelving and a cable pass-through.", images: img("console") },
  { id: "travertine-side-table", title: "Travertine Side Table", category: "Tables", price: 260, status: "sold", condition: "Excellent", materials: "Travertine", dimensions: '18" round × 20"H', description: "Heavy, honed stone with a warm cream tone.", images: img("side") },
  { id: "arc-floor-lamp", title: "Arc Floor Lamp", category: "Lighting", price: 180, status: "available", condition: "Very good", materials: "Brushed brass, linen shade", dimensions: '72"H, 60" reach', description: "Dimmable arc lamp that clears a sofa without a ceiling hook.", images: img("lamp") },
  { id: "ceramic-vase-trio", title: "Ceramic Vase Trio", category: "Decor", price: 75, status: "available", condition: "Excellent", materials: "Glazed stoneware", dimensions: 'Tallest 14"', description: "Three hand-thrown vases in matte oat, olive, and espresso glazes.", images: img("vase") },
  { id: "linen-armchair-pair", title: "Linen Armchair Pair", category: "Seating", price: 620, status: "available", condition: "Good", materials: "Linen, beech frame", dimensions: '30"W × 32"D × 33"H each', description: "Sold as a pair. Slipcovers are removable and washable.", images: img("arm") },
];

export const categories: Category[] = ["Seating", "Tables", "Storage", "Lighting", "Decor"];
export const money = (n: number) => `$${n.toLocaleString()}`;
