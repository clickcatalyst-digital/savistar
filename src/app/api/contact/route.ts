// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      family: 4, // force IPv4 — Render's IPv6 route to Gmail SMTP hangs (ETIMEDOUT)
      connectionTimeout: 10000,
    } as SMTPTransport.Options);

    // Set up email data
    const mailOptions = {
      from: `"Contact Form" <${process.env.GMAIL_EMAIL}>`, // Sender address (must be your Gmail)
      to: process.env.GMAIL_EMAIL, // Receiver address (your Gmail where you want to receive messages)
      replyTo: email, // Set the reply-to to the user's email
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h1>New Project Inquiry</h1>
        <p>You have received a new message from your website contact form.</p>
        <hr>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Needed:</strong> ${service}</p>
        <hr>
        <h2>Project Details:</h2>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}