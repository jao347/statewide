import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { parsePhoneNumberFromString } from "libphonenumber-js";

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

    let phoneStatus = "Invalid";
    let formattedPhone = phone;
    let countryName = "Unknown";
    let countryCode = "";

    try {
      const phoneNumber = parsePhoneNumberFromString(phone);

      if (phoneNumber && phoneNumber.isValid()) {
        phoneStatus = "Valid";
        formattedPhone = phoneNumber.formatInternational();
        countryCode = phoneNumber.countryCallingCode;
        countryName = phoneNumber.country || "Unknown";
      } else {
        phoneStatus = "Invalid";
      }
    } catch (err) {
      console.warn("⚠️ Phone parsing error:", err);
      phoneStatus = "Invalid";
    }

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

    const emailBody = `
      <strong>Source:</strong> ${utms.source || "N/A"}<br>
      <strong>Name:</strong> ${fullName}<br>
      <strong>Phone:</strong> ${phone}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Address:</strong> ${fullAddress}<br>
      <strong>Zipcode:</strong> ${zip}<br>
      <strong>Service Needed:</strong> ${service}<br>
      <strong>Describe The Issue Or Request.:</strong> ${message}<br>
      <strong>Phone Status:</strong> ${phoneStatus}<br>
      <strong>UTM Source:</strong> ${utms.utm_source || "No Source"}<br>
      <strong>UTM Medium:</strong> ${utms.utm_medium || "No Medium"}<br>
      <strong>UTM Campaign:</strong> ${utms.utm_campaign || "No Campaign"}<br>
      <strong>UTM Content:</strong> ${utms.utm_content || "No Content"}<br>
      <strong>UTM Term:</strong> ${utms.utm_term || "No Term"}<br>
      <strong>GCLID:</strong> ${utms.gclid || "No GCLID"}<br>
    `;

    await transporter.sendMail({
      from: `"State Wide Chimney" <${process.env.SMTP_USER}>`,
      to: `"${process.env.SMTP_USER}"`,
      subject: `New Lead: ${fullName} - ${service}`,
      html: emailBody,
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
