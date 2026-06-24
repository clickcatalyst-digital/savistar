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

    // Diagnostics: confirm env vars are actually present in this environment
    console.log('[contact] GMAIL_EMAIL set:', !!process.env.GMAIL_EMAIL);
    console.log('[contact] GMAIL_APP_PASSWORD set:', !!process.env.GMAIL_APP_PASSWORD);

    // Try the two Gmail SMTP ports. If one is blocked/timing out we learn which.
    const ports: { port: number; secure: boolean }[] = [
      { port: 465, secure: true },  // SSL
      { port: 587, secure: false }, // STARTTLS
    ];

    let transporter: nodemailer.Transporter | null = null;
    let lastError: unknown = null;

    for (const { port, secure } of ports) {
      const t = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port,
        secure,
        auth: {
          user: process.env.GMAIL_EMAIL,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
        family: 4, // force IPv4 — Render's IPv6 route to Gmail SMTP hangs (ETIMEDOUT)
        connectionTimeout: 10000,
      } as SMTPTransport.Options);

      const started = Date.now();
      try {
        console.log(`[contact] verifying SMTP connection on port ${port} (secure=${secure})...`);
        await t.verify();
        console.log(`[contact] SMTP connection OK on port ${port} in ${Date.now() - started}ms`);
        transporter = t;
        break;
      } catch (err) {
        const e = err as { code?: string; command?: string; message?: string };
        console.error(`[contact] port ${port} failed after ${Date.now() - started}ms:`, e.code, e.command, e.message);
        lastError = err;
      }
    }

    if (!transporter) {
      throw lastError ?? new Error('Could not connect to SMTP on any port');
    }

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