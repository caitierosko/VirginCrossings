# Quick Start Guide

Get your Virgin CROSSings landing page running in 3 steps:

## Step 1: Export the Code

Choose one method:

### A) Deploy to Vercel (Recommended - Fastest)
1. Click **"Publish"** button in v0 (top right)
2. Follow the prompts to connect GitHub
3. Your site will be live in 2 minutes at `your-project.vercel.app`

### B) Download & Run Locally
1. Click **three dots (⋯)** in v0 (top right)
2. Select **"Download ZIP"**
3. Extract and open in terminal:
\`\`\`bash
cd virgin-crossings
npm install
npm run dev
\`\`\`
4. Open http://localhost:3000

## Step 2: Set Up Integrations (Optional but Recommended)

The reservation form works out of the box, but to receive emails and track submissions:

### Email Setup (5 minutes)
1. Go to [resend.com](https://resend.com) → Sign up (free)
2. Add your domain and verify DNS records
3. Create API key
4. Add to Vercel env vars or `.env.local`:
\`\`\`bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
\`\`\`

### Google Sheets Setup (10 minutes)
1. Create a Google Sheet with headers:
   \`\`\`
   Timestamp | Name | Email | Phone | Cabin | Guests | Skill | Arrival | Dietary | Gear | Notes | WhatsApp
   \`\`\`
2. Follow [INTEGRATION_SETUP.md](./INTEGRATION_SETUP.md) section 2
3. Add env vars to Vercel or `.env.local`

**See [INTEGRATION_SETUP.md](./INTEGRATION_SETUP.md) for detailed step-by-step instructions.**

## Step 3: Customize Your Content

All content is in separate component files for easy editing:

\`\`\`
components/
  ├── hero.tsx              # Main banner
  ├── about.tsx             # About section
  ├── dates-inclusions.tsx  # Trip details & pricing
  ├── cabin-options.tsx     # Cabin cards
  ├── faq.tsx              # Questions & answers
  └── contact.tsx          # Contact info
\`\`\`

### Quick Edits:

**Change dates:**
- Edit `components/dates-inclusions.tsx`

**Update pricing:**
- Edit `components/cabin-options.tsx`

**Add/remove FAQ items:**
- Edit `components/faq.tsx`

**Change contact info:**
- Edit `components/contact.tsx` and `components/footer.tsx`

**Update email addresses:**
- Edit `app/actions.ts` (lines with `@yourdomain.com`)

## Need Help?

- **Integration issues?** → See [INTEGRATION_SETUP.md](./INTEGRATION_SETUP.md) troubleshooting section
- **Design changes?** → Return to v0.app and ask for modifications
- **Deployment issues?** → Check [vercel.com/help](https://vercel.com/help)

## What's Next?

1. ✅ Test the reservation form
2. ✅ Verify emails are sending
3. ✅ Check Google Sheets is updating
4. ✅ Update all placeholder content
5. ✅ Replace placeholder images with real photos
6. ✅ Share your live URL with customers!

---

That's it! Your landing page is ready to accept reservations. 🌬️🏝️
