# Payments (Stripe Checkout — after agreement only)

Online payment is optional. The `/payment` page and `/api/create-checkout` stay inert until Stripe is configured. Assessment requests never create a charge.

## Flow

1. Assessment / conversation  
2. Written confirmation via `/agreement` (or email)  
3. Client pays via `/payment` using the agreement reference  
4. Work begins

## Stripe setup

1. Create a Stripe account and activate Checkout.  
2. Create **Products / Prices** for each package you approve (do not invent public prices on the site).  
3. In Vercel → Environment Variables:

| Name | Value |
|---|---|
| `STRIPE_SECRET_KEY` | `sk_live_…` or `sk_test_…` |
| `STRIPE_PRICE_FOUNDATION` | Stripe Price ID for Career Foundation |
| `STRIPE_PRICE_EXECUTIVE` | Stripe Price ID for Executive Positioning |
| `STRIPE_PRICE_PARTNERSHIP` | Stripe Price ID for Search Strategy Partnership |
| `SITE_URL` | Public origin (same as custom domain / `VITE_SITE_URL`) |

4. Redeploy.

## Behaviour when not configured

Checkout returns `NOT_CONFIGURED`. The payment page tells the client to use the private invoice or link from the written agreement.

## Notes

- Amounts are never accepted from the browser.  
- `client_reference_id` and metadata store the agreement reference for reconciliation.  
- Keep Career Advisory Terms `[TO BE CONFIRMED]` refund/deposit lines updated when you approve commercial policy.
