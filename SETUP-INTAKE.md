# Enquiry intake setup (Resend + Vercel)

Forms on the site POST to `/api/enquiry`. When configured, messages arrive in your inbox without asking the visitor to open their mail app.

## 1. Create a Resend account

1. Go to [https://resend.com](https://resend.com) and sign up.
2. Create an API key.
3. For production, add and verify your domain, then set a from-address on that domain.

## 2. Add Vercel environment variables

In the Vercel project for this site:

| Name | Value |
|---|---|
| `RESEND_API_KEY` | your Resend API key |
| `CONTACT_TO` | `joelfacco.positioning@gmail.com` |
| `RESEND_FROM` | optional; default uses Resend test sender |

Redeploy after saving variables.

## 3. Confirm

Submit a test assessment or contact form on the live site. You should receive the email within seconds.

If variables are missing, the form falls back to copy / mailto so visitors are not blocked.
