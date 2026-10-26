# The Good Edit

Personal furniture moving-sale site. React + TypeScript, Vite, Tailwind, Motion.

## Local development
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Status
- Phase 1 (this commit): full frontend with sample data.
- Phase 2: Supabase database, auth, image storage, admin dashboard.
- Phase 3: PayPal Checkout, reservations, verified webhooks.
- Phase 4: GitHub + Cloudflare Pages deployment.

## Deployment (Cloudflare Pages)
Build command `npm run build`, output directory `dist`. `public/_redirects` makes direct links to product pages work.

## Secrets
Copy `.env.example` to `.env` for public values only. Never commit PayPal secrets or the Supabase service key.
