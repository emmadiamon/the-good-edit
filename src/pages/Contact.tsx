import { useState } from "react";

const field = "w-full bg-linen rounded-xl px-4 py-3 mt-1";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-2xl px-5 pt-12">
      <h1 className="display text-6xl md:text-8xl">Ask a question</h1>
      {sent ? (
        <p className="mt-10 text-lg">Thanks. Your message is saved on this page only for now; sending starts working in Phase 2.</p>
      ) : (
        <form className="mt-10 space-y-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <label className="block">Name<input required className={field} /></label>
          <label className="block">Email<input required type="email" className={field} /></label>
          <label className="block">Phone<input type="tel" className={field} /></label>
          <label className="block">Which piece? (optional)<input className={field} /></label>
          <label className="block">Message<textarea required rows={5} className={field} /></label>
          <button className="bg-olive text-cream px-8 py-4 rounded-full hover:bg-olive-deep transition-colors">Send message</button>
        </form>
      )}
    </div>
  );
}
