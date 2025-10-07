import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName = "N/A",
      phone = "N/A",
      email = "N/A",
      fullAddress = "N/A",
      zip = "N/A",
      service = "N/A",
      message = "",
      utms = null,
    } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    if (process.env.NODE_ENV !== "production") {
      try {
        await transporter.verify();
        console.log("✅ SMTP connection successful");
      } catch (err) {
        console.error("❌ SMTP connection failed:", err);
        throw err;
      }
    }

    const utmSection = utms
      ? `
        <h3>UTM Tracking Data:</h3>
        <ul>
          ${Object.entries(utms)
            .map(([key, val]) => `<li><strong>${key}:</strong> ${val}</li>`)
            .join("")}
        </ul>
      `
      : "<p><em>No UTM data found.</em></p>";

    await transporter.sendMail({
      from: `"State Wide Chimney" <${process.env.SMTP_USER}>`,
      to: "David@hsipro.net", // ✅ Send directly to David
      subject: `🔥 New Lead: ${fullName} - ${service}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${fullAddress}</p>
        <p><strong>ZIP:</strong> ${zip}</p>
        <p><strong>Requested Service:</strong> ${service}</p>
        ${
          message
            ? `<p><strong>Message:</strong> ${message}</p>`
            : "<p><em>No message provided.</em></p>"
        }

        <hr/>
        ${utmSection}
        <hr/>
        <p><small>Sent from StatewideChimney.com</small></p>
      `,
    });

    if (email && email.includes("@")) {
      await transporter.sendMail({
        from: `"State Wide Chimney" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "We received your request – State Wide Chimney",
        html: `
          <h2>Thank you, ${fullName}!</h2>
          <p>We’ve received your request for <strong>${service}</strong>.</p>
          ${message ? `<p><strong>Your message:</strong> "${message}"</p>` : ""}
          <p>We’ll contact you soon at <strong>${phone}</strong> or by email.</p>
          <br/>
          <p>If you need urgent help, call us at <a href="tel:8887744288">(888) 774-4288</a>.</p>
          <br/>
          <p>Best regards,<br/>State Wide Chimney Team</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ Email error:", error);
    return NextResponse.json(
      { success: false, error: error.message || String(error) },
      { status: 500 }
    );
  }
}
