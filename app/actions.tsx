"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitReservation(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      cabins: formData.get("cabins"),
      guests: formData.get("guests"),
      skill: formData.get("skill"),
      arrival: formData.get("arrival"),
      dietary: formData.get("dietary") || "",
      gear: formData.getAll("gear"),
      notes: formData.get("notes") || "",
      terms: formData.get("terms"),
      whatsapp: formData.get("whatsapp"),
      timestamp: new Date().toISOString(),
    }

    // Validate required fields
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.cabins ||
      !data.guests ||
      !data.skill ||
      !data.arrival ||
      !data.terms
    ) {
      return { success: false, error: "Please fill in all required fields." }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email as string)) {
      return { success: false, error: "Please enter a valid email address." }
    }

    await sendConfirmationEmail(data)

    await sendAdminNotification(data)

    await addToGoogleSheet(data)

    return { success: true }
  } catch (error) {
    console.error("[v0] Error submitting reservation:", error)
    return { success: false, error: "An unexpected error occurred. Please try again." }
  }
}

async function sendConfirmationEmail(data: any) {
  try {
    await resend.emails.send({
      from: "Virgin Crossings <onboarding@resend.dev>", // Swap for your verified domain once set up in Resend
      to: data.email as string,
      subject: "Your Virgin Crossings Reservation Request",
      html: `
        <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 600px; margin: 0 auto; color: #0A2540;">
          <h1 style="color: #0A2540; font-weight: 500;">Welcome Aboard</h1>
          <p>Dear ${data.name},</p>
          <p>Thank you for your reservation request for the <strong>Virgin Crossings all-inclusive private yacht charter</strong> (February 8&ndash;15, 2027, British Virgin Islands).</p>

          <div style="background: #FAF8F3; padding: 20px; border-radius: 12px; margin: 20px 0; border: 1px solid #C6A667;">
            <h3 style="margin-top: 0; color: #0A2540;">Your Details</h3>
            <ul style="line-height: 1.8;">
              <li><strong>Cabins:</strong> ${data.cabins} ($10,000 per cabin)</li>
              <li><strong>Guests:</strong> ${data.guests}</li>
              <li><strong>Skill Level:</strong> ${data.skill}</li>
              <li><strong>Arrival:</strong> ${data.arrival}</li>
              ${data.dietary ? `<li><strong>Dietary:</strong> ${data.dietary}</li>` : ""}
              ${data.gear && data.gear.length > 0 ? `<li><strong>Gear:</strong> ${data.gear.join(", ")}</li>` : ""}
            </ul>
          </div>

          <h3 style="color: #0A2540;">What Happens Next</h3>
          <ol style="line-height: 1.8;">
            <li>Our team will send deposit details shortly</li>
            <li>Once your deposit is received, we'll share your charter brochure</li>
            <li>We'll stay in touch with everything you need before you sail</li>
          </ol>

          <p>Questions? Simply reply to this email and we'll be glad to help.</p>

          <p style="color: #B0904E; font-weight: bold;">We look forward to welcoming you in the BVI.</p>

          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 30px 0;" />
          <p style="color: #6B7280; font-size: 12px;">
            Virgin Crossings &bull; Private Yacht Charters<br />
            February 8&ndash;15, 2027 &bull; British Virgin Islands
          </p>
        </div>
      `,
    })
  } catch (error) {
    console.error("[v0] Error sending confirmation email:", error)
    // Don't fail the submission if email fails
  }
}

async function sendAdminNotification(data: any) {
  try {
    await resend.emails.send({
      from: "Virgin Crossings <onboarding@resend.dev>", // Swap for your verified domain once set up in Resend
      to: "grantfleming@bellsouth.net", // Admin notification recipient
      replyTo: data.email as string,
      subject: `New Reservation: ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Reservation Request</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Cabins:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.cabins}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Guests:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.guests}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Skill:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.skill}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Arrival:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.arrival}</td></tr>
            ${data.dietary ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Dietary:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.dietary}</td></tr>` : ""}
            ${data.gear && data.gear.length > 0 ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Gear:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.gear.join(", ")}</td></tr>` : ""}
            ${data.notes ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Notes:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.notes}</td></tr>` : ""}
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>WhatsApp:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.whatsapp === "on" ? "Yes" : "No"}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Timestamp:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.timestamp}</td></tr>
          </table>
        </div>
      `,
    })
  } catch (error) {
    console.error("[v0] Error sending admin notification:", error)
    // Don't fail the submission if email fails
  }
}

async function addToGoogleSheet(data: any) {
  try {
    // Skip entirely if Google Sheets isn't configured (keeps the app working without it)
    if (!process.env.GOOGLE_SHEETS_CREDENTIALS || !process.env.GOOGLE_SHEET_ID) {
      return
    }

    // Lazy-load googleapis so this large Node-only package is never bundled into the page
    const { google } = await import("googleapis")

    // Parse the service account credentials from environment variable
    const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS || "{}")

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    const spreadsheetId = process.env.GOOGLE_SHEET_ID // Your Google Sheet ID

    // Prepare row data
    const row = [
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.cabins,
      data.guests,
      data.skill,
      data.arrival,
      data.dietary || "",
      data.gear && data.gear.length > 0 ? data.gear.join(", ") : "",
      data.notes || "",
      data.whatsapp === "on" ? "Yes" : "No",
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:L", // Adjust based on your sheet structure
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    })
  } catch (error) {
    console.error("[v0] Error adding to Google Sheet:", error)
    // Don't fail the submission if Google Sheets fails
  }
}
