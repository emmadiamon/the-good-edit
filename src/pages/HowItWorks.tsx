const steps = [
  ["Choose your piece", "Browse the collection and open any available item to see photos, dimensions, and condition."],
  ["Pay to hold it", "Check out with PayPal or Venmo. Your item is held for you while the payment is confirmed. You can also pay with cash or Zelle in person."],
  ["Get your pickup details", "After payment is confirmed, you’ll get an email with the exact address and your pickup window."],
  ["Pick it up", "Bring a vehicle that fits and a helper for heavy pieces. We’ll help you load."],
];

export default function HowItWorks() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-12">
      <h1 className="display text-6xl md:text-9xl">How it works</h1>
      <ol className="mt-14 space-y-10">
        {steps.map(([t, d], i) => (
          <li key={t} className="grid md:grid-cols-12 gap-3 border-t border-espresso/20 pt-6">
            <span className="md:col-span-1 font-display text-3xl text-olive">{i + 1}</span>
            <h2 className="md:col-span-4 font-display text-3xl">{t}</h2>
            <p className="md:col-span-7 text-lg leading-relaxed">{d}</p>
          </li>
        ))}
      </ol>
      <p className="mt-14 bg-linen rounded-2xl p-6">All sales are final, and we don’t ship. Questions before you buy? Use the contact page.</p>
    </div>
  );
}
