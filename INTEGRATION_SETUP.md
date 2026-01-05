# Virgin CROSSings - Integration Setup Guide

This guide will help you integrate email notifications (via Resend) and Google Sheets tracking for your reservation form.

---

## 1. Email Integration with Resend

### Step 1: Sign up for Resend
1. Go to [resend.com](https://resend.com)
2. Create a free account (100 emails/day free)

### Step 2: Verify Your Domain
1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Add your domain (e.g., `yourdomain.com`)
4. Add the DNS records they provide to your domain registrar
5. Wait for verification (usually 5-10 minutes)

### Step 3: Get Your API Key
1. In Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Name it "Virgin CROSSings Production"
4. Copy the API key (starts with `re_`)

### Step 4: Add Environment Variables
Add these to your Vercel project (or `.env.local` for local development):

\`\`\`bash
RESEND_API_KEY=re_your_api_key_here
\`\`\`

### Step 5: Update Email Addresses
In `app/actions.ts`, replace:
- `reservations@yourdomain.com` with your verified sending address
- `admin@yourdomain.com` with where you want to receive notifications

### Step 6: Install Dependencies
\`\`\`bash
npm install resend
\`\`\`

---

## 2. Google Sheets Integration

### Step 1: Create a Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new spreadsheet called "Virgin CROSSings Reservations"
3. Add headers in row 1:
   \`\`\`
   Timestamp | Name | Email | Phone | Cabin | Guests | Skill | Arrival | Dietary | Gear | Notes | WhatsApp
   \`\`\`
4. Copy the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`

### Step 2: Create Google Cloud Project
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project called "Virgin CROSSings"
3. Enable the **Google Sheets API**:
   - Search for "Google Sheets API" in the API Library
   - Click **Enable**

### Step 3: Create Service Account
1. Go to **IAM & Admin** → **Service Accounts**
2. Click **Create Service Account**
3. Name: `virgin-crossings-sheets`
4. Click **Create and Continue**
5. Grant role: **Editor**
6. Click **Done**

### Step 4: Create Service Account Key
1. Click on the service account you just created
2. Go to **Keys** tab
3. Click **Add Key** → **Create New Key**
4. Choose **JSON** format
5. Download the JSON file (keep it secure!)

### Step 5: Share Sheet with Service Account
1. Open your Google Sheet
2. Click **Share** button
3. Add the service account email (found in the JSON file as `client_email`)
4. Give it **Editor** access

### Step 6: Add Environment Variables
Add these to your Vercel project:

\`\`\`bash
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SHEETS_CREDENTIALS='{"type":"service_account","project_id":"...","private_key":"...","client_email":"..."}'
\`\`\`

**Important:** The `GOOGLE_SHEETS_CREDENTIALS` should be the entire contents of the downloaded JSON file as a single-line string.

### Step 7: Install Dependencies
\`\`\`bash
npm install googleapis
\`\`\`

---

## 3. Testing Locally

### Create `.env.local` file:
\`\`\`bash
RESEND_API_KEY=re_your_api_key_here
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SHEETS_CREDENTIALS='{"type":"service_account",...}'
\`\`\`

### Test the form:
\`\`\`bash
npm run dev
\`\`\`

Go to `http://localhost:3000`, scroll to the reservation form, and submit a test entry.

---

## 4. Deploy to Production

### Option 1: Deploy via Vercel (Recommended)
1. Click **Publish** button in v0 interface
2. Connect to GitHub
3. In Vercel dashboard → **Settings** → **Environment Variables**
4. Add all three environment variables
5. Redeploy

### Option 2: Manual Deployment
1. Download the ZIP from v0
2. Push to GitHub
3. Connect to Vercel
4. Add environment variables in Vercel dashboard
5. Deploy

---

## 5. Alternative: Use SendGrid Instead of Resend

If you prefer SendGrid:

### Install SendGrid:
\`\`\`bash
npm install @sendgrid/mail
\`\`\`

### Replace in `app/actions.ts`:
\`\`\`typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

// In sendConfirmationEmail function:
await sgMail.send({
  to: data.email as string,
  from: 'reservations@yourdomain.com',
  subject: 'Your Virgin CROSSings Reservation Request',
  html: '...'
})
\`\`\`

### Environment Variable:
\`\`\`bash
SENDGRID_API_KEY=SG.your_api_key_here
\`\`\`

---

## Troubleshooting

### Emails not sending?
- Check that domain is verified in Resend
- Check API key is correct
- Look at Vercel function logs for errors
- Verify `from` address uses your verified domain

### Google Sheets not updating?
- Verify service account email has Editor access to the sheet
- Check that Sheet ID is correct
- Verify JSON credentials are properly formatted (single line, escaped quotes)
- Check Vercel function logs for errors

### Still stuck?
- Check Vercel function logs: Vercel Dashboard → Your Project → Functions
- Test locally first with `console.log` statements
- Verify all environment variables are set correctly

---

## Cost Breakdown

- **Resend:** Free up to 100 emails/day, then $20/month for 50k emails
- **SendGrid:** Free up to 100 emails/day, then paid plans
- **Google Sheets API:** Free up to 60 requests/minute
- **Vercel:** Free hobby tier works fine, Pro if you need more

---

## Security Notes

- Never commit `.env.local` to git (it's in `.gitignore`)
- Keep your API keys and service account credentials secret
- Use environment variables for all sensitive data
- Consider adding rate limiting if you get spam submissions

---

That's it! Your reservation form will now send beautiful email confirmations and track all submissions in Google Sheets automatically.
\`\`\`

\`\`\`json file="" isHidden
