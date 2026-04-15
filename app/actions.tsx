"use server"

import { Resend } from "resend"
import { google } from "googleapis"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitReservation(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      cabin: formData.get("cabin"),
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
      !data.cabin ||
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
      from: "Virgin CROSSings <reservations@yourdomain.com>", // Replace with your verified domain
      to: data.email as string,
      subject: "Your Virgin CROSSings Reservation Request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #0891B2;">You're in! 🌬️</h1>
          <p>Hi ${data.name},</p>
          <p>We've received your reservation request for the <strong>Virgin CROSSings Wing-Foil Flotilla</strong> (Feb 14-20, 2025).</p>
          
          <div style="background: #F0F9FF; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Details:</h3>
            <ul style="line-height: 1.8;">
              <li><strong>Cabin:</strong> ${data.cabin}</li>
              <li><strong>Guests:</strong> ${data.guests}</li>
              <li><strong>Skill Level:</strong> ${data.skill}</li>
              <li><strong>Arrival:</strong> ${data.arrival}</li>
              ${data.dietary ? `<li><strong>Dietary:</strong> ${data.dietary}</li>` : ""}
              ${data.gear && data.gear.length > 0 ? `<li><strong>Gear:</strong> ${data.gear.join(", ")}</li>` : ""}
            </ul>
          </div>

          <h3>What's Next?</h3>
          <ol style="line-height: 1.8;">
            <li>We'll send you deposit details within 24 hours</li>
            <li>Once paid, you'll receive your Welcome Packet</li>
            <li>Join the WhatsApp group for trip updates</li>
          </ol>

          <p>Questions? Reply to this email or WhatsApp us at +1-XXX-XXX-XXXX</p>
          
          <p style="color: #0891B2; font-weight: bold;">See you in the BVI! 🏝️</p>
          
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 30px 0;" />
          <p style="color: #6B7280; font-size: 12px;">
            Virgin CROSSings | February 14-20, 2025<br />
            British Virgin Islands
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
      from: "Virgin CROSSings <reservations@yourdomain.com>", // Replace with your verified domain
      to: "grantfleming@bellsouth.net", // Replace with your admin email
      subject: `New Reservation: ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Reservation Request</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Cabin:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.cabin}</td></tr>
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
      data.cabin,
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
