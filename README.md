# Virgin CROSSings - Wing-Foil Flotilla Landing Page

A beautiful, fully-functional landing page for the Virgin CROSSings wing-foil flotilla experience in the British Virgin Islands (Feb 14-20, 2025).

## Features

- Responsive design with nautical theme
- Sticky navigation header
- Hero section with video/image background
- Detailed sections: About, Dates, Cabins, FAQ
- Fully functional reservation form with validation
- Email notifications (Resend)
- Google Sheets integration for tracking
- SEO optimized with JSON-LD structured data

## Quick Start

### Option 1: Export from v0 (Easiest)

1. **Click "Publish"** in the top right of v0 interface
   - This creates a GitHub repo and deploys to Vercel automatically
   - Clone the repo to edit locally: `git clone <your-repo-url>`

2. **Or Download ZIP**
   - Click the three dots (⋯) in the top right
   - Select "Download ZIP"
   - Extract and run: `npx shadcn@latest init` to set up

### Option 2: Manual Setup

\`\`\`bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Add your API keys to .env.local
# See INTEGRATION_SETUP.md for detailed instructions

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Integration Setup

See **[INTEGRATION_SETUP.md](./INTEGRATION_SETUP.md)** for complete instructions on:

- Setting up Resend for email notifications
- Configuring Google Sheets tracking
- Adding environment variables
- Alternative email providers (SendGrid)
- Troubleshooting tips

## Environment Variables

Required for production:

\`\`\`bash
RESEND_API_KEY=re_xxxxx              # From resend.com
GOOGLE_SHEET_ID=xxxxx                # Your Google Sheet ID
GOOGLE_SHEETS_CREDENTIALS='{"type":"service_account",...}'  # Service account JSON
\`\`\`

See `.env.local.example` for a template.

## Customization

### Update Content

- **Hero**: Edit `components/hero.tsx`
- **About**: Edit `components/about.tsx`
- **Dates & Pricing**: Edit `components/dates-inclusions.tsx` and `components/cabin-options.tsx`
- **FAQ**: Edit `components/faq.tsx`
- **Contact Info**: Edit `components/contact.tsx` and `components/footer.tsx`

### Update Styles

- **Colors**: Edit `app/globals.css` (design tokens in `@theme` section)
- **Typography**: Edit `app/layout.tsx` to change fonts
- **Layout**: Each component is self-contained and easy to modify

### Email Templates

- **Customer Email**: Edit `sendConfirmationEmail()` in `app/actions.ts`
- **Admin Email**: Edit `sendAdminNotification()` in `app/actions.ts`

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI)
- **Email**: Resend
- **Database**: Google Sheets API
- **Deployment**: Vercel

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Deploy

Or use the Vercel CLI:

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Support

- **Integration Issues**: See [INTEGRATION_SETUP.md](./INTEGRATION_SETUP.md)
- **Vercel Support**: [vercel.com/help](https://vercel.com/help)
- **v0 Updates**: Return to v0.app to make design changes

## License

This project was generated with v0.app by Vercel.
