import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Setup Gmail SMTP with App Password
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // ✅ allow self-signed / Google CA chain
      },
    });

    // ✅ Debug: check if transporter can connect
    await transporter
      .verify()
      .then(() => console.log("✅ SMTP connection successful"))
      .catch(err => {
        console.error("❌ SMTP connection failed", err);
        throw err; // stop here if connection fails
      });

    // 📥 Send to you
    await transporter.sendMail({
      from: `"State Wide Chimney" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Contact Request from ${body.fullName}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${body.fullName}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Address:</strong> ${body.fullAddress}</p>
        <p><strong>ZIP:</strong> ${body.zip}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    // 📤 Auto-reply to customer
    await transporter.sendMail({
      from: `"State Wide Chimney" <${process.env.SMTP_USER}>`,
      to: body.email,
      subject: "We received your request – State Wide Chimney",
      html: `
        <h2>Thank you, ${body.fullName}!</h2>
        <p>We’ve received your request for <strong>${body.service}</strong>.</p>
        ${
          body.message
            ? `<p><strong>Your message:</strong> "${body.message}"</p>`
            : ""
        }
        <p>We’ll contact you soon at <strong>${
          body.phone
        }</strong> or by email.</p>
        <br/>
        <p>If you need urgent help, call us at <a href="tel:8887744288">(888) 774-4288</a>.</p>
        <br/>
        <p>Best regards,<br/>State Wide Chimney Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ Email error:", error);
    return NextResponse.json(
      { success: false, error: error.message || error },
      { status: 500 }
    );
  }
}
