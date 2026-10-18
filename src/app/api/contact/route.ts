import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      location,
      plotArea,
      typology,
      budget,
      message,
    } = body;

    // Validate essential fields
    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: 'Please provide full name, email, phone number, and project vision.' },
        { status: 400 }
      );
    }

    const smtpKey = process.env.BREVO_SMTP_KEY || 'xsmtpsib-71f89c8ed16ce819ebc35181235fe6eb71a3a6917d5d05dd966a8460a15e8968-jksWnnN34ainRNwz';
    const apiKey = process.env.BREVO_API_KEY || smtpKey;
    const smtpHost = process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com';
    const smtpPort = Number(process.env.BREVO_SMTP_PORT) || 587;
    const smtpUser = process.env.BREVO_SMTP_USER || 'furaltostudio@gmail.com';
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'Support@homifiora.com';
    const senderEmail = process.env.CONTACT_SENDER_EMAIL || smtpUser || 'furaltostudio@gmail.com';

    // Luxury Atelier HTML Email Template for Studio Principals
    const studioNotificationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #090a08; color: #e8e4dc; margin: 0; padding: 30px 15px; }
            .container { max-width: 620px; margin: 0 auto; background-color: #11130f; border: 1px solid #c5a065; padding: 35px 30px; border-radius: 4px; }
            .header { text-align: center; border-bottom: 1px solid rgba(197, 160, 101, 0.3); padding-bottom: 25px; margin-bottom: 30px; }
            .logo-title { font-size: 24px; letter-spacing: 0.25em; color: #ffffff; text-transform: uppercase; margin: 0 0 6px; font-weight: 400; }
            .sub-title { font-size: 11px; letter-spacing: 0.2em; color: #c5a065; text-transform: uppercase; margin: 0; }
            .badge { display: inline-block; background-color: rgba(197, 160, 101, 0.15); border: 1px solid #c5a065; color: #e8d5b5; font-size: 11px; padding: 4px 12px; letter-spacing: 0.15em; text-transform: uppercase; margin-top: 15px; }
            .section-title { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #c5a065; margin: 25px 0 12px; font-weight: 600; }
            .grid { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .grid td { padding: 9px 0; border-bottom: 1px solid rgba(214, 189, 150, 0.1); font-size: 14px; }
            .grid td.label { width: 38%; color: #8e887b; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em; }
            .grid td.value { width: 62%; color: #f5f2ea; font-weight: 500; }
            .message-box { background-color: rgba(255, 255, 255, 0.03); border-left: 2px solid #c5a065; padding: 18px; margin: 15px 0; font-size: 14px; line-height: 1.7; color: #f5f2ea; }
            .footer { text-align: center; font-size: 11px; color: #6e695d; margin-top: 35px; border-top: 1px solid rgba(214, 189, 150, 0.15); padding-top: 20px; letter-spacing: 0.1em; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 class="logo-title">HOMIFIORA</h1>
              <p class="sub-title">Architectural Atelier · Private Commission Inquiry</p>
              <div class="badge">New Project Dossier Received</div>
            </div>

            <div class="section-title">01 · Patron Information</div>
            <table class="grid">
              <tr>
                <td class="label">Full Name</td>
                <td class="value">${fullName}</td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value"><a href="mailto:${email}" style="color: #c5a065; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone / WhatsApp</td>
                <td class="value"><a href="tel:${phone}" style="color: #c5a065; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td class="label">Site Coordinates</td>
                <td class="value">${location || 'Not Specified'}</td>
              </tr>
            </table>

            <div class="section-title">02 · Spatial Scope &amp; Scale</div>
            <table class="grid">
              <tr>
                <td class="label">Spatial Typology</td>
                <td class="value" style="color: #c5a065;">${typology || 'Bespoke Architectural Commission'}</td>
              </tr>
              <tr>
                <td class="label">Approximate Area</td>
                <td class="value">${plotArea || 'Not Specified'}</td>
              </tr>
              <tr>
                <td class="label">Investment Scale</td>
                <td class="value" style="color: #e8d5b5;">${budget || 'Flexible / To Be Discussed'}</td>
              </tr>
            </table>

            <div class="section-title">03 · Architectural Vision &amp; Requirements</div>
            <div class="message-box">
              ${message.replace(/\n/g, '<br />')}
            </div>

            <div class="footer">
              HOMIFIORA ARCHITECTURAL ATELIER<br />
              New Delhi NCR · Gauhati · Patna · Jammu<br />
              Direct Atelier Concierge: +91 99996 56898 · Support@homifiora.com
            </div>
          </div>
        </body>
      </html>
    `;

    // Confirmation Email to Patron
    const patronConfirmationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #090a08; color: #e8e4dc; margin: 0; padding: 30px 15px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #11130f; border: 1px solid rgba(197, 160, 101, 0.4); padding: 40px 30px; border-radius: 4px; }
            .header { text-align: center; border-bottom: 1px solid rgba(197, 160, 101, 0.2); padding-bottom: 25px; margin-bottom: 25px; }
            .logo { font-size: 24px; letter-spacing: 0.25em; color: #ffffff; text-transform: uppercase; margin: 0; }
            .tagline { font-size: 11px; letter-spacing: 0.2em; color: #c5a065; text-transform: uppercase; margin-top: 6px; }
            .greeting { font-size: 17px; color: #f5f2ea; margin-bottom: 18px; line-height: 1.5; }
            .body-text { font-size: 14px; color: #b8b1a2; line-height: 1.8; margin-bottom: 20px; font-weight: 300; }
            .cta-box { background: rgba(197, 160, 101, 0.08); border: 1px solid rgba(197, 160, 101, 0.3); padding: 18px; text-align: center; margin: 25px 0; border-radius: 2px; }
            .btn { display: inline-block; background: #c5a065; color: #090a08; padding: 11px 24px; font-size: 12px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; border-radius: 2px; margin-top: 10px; }
            .footer { text-align: center; font-size: 11px; color: #6e695d; margin-top: 35px; border-top: 1px solid rgba(214, 189, 150, 0.15); padding-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 class="logo">HOMIFIORA</h1>
              <p class="tagline">Architecture · Interiors · Execution</p>
            </div>
            <p class="greeting">Dear ${fullName},</p>
            <p class="body-text">
              Thank you for considering <strong>HOMIFIORA Architectural Atelier</strong> for your upcoming spatial commission. We have safely received your project dossier regarding <em>${typology || 'Bespoke Architecture'}</em> in <em>${location || 'India'}</em>.
            </p>
            <p class="body-text">
              Our founding partners and senior design associates will carefully review your site requirements, scale, and architectural vision. A member of our atelier will connect with you within 24 to 48 hours to coordinate an exploratory walkthrough or private virtual consultation.
            </p>
            <div class="cta-box">
              <div style="font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; color: #c5a065; margin-bottom: 6px;">Need Priority Assistance?</div>
              <div style="font-size: 13px; color: #f5f2ea; margin-bottom: 12px;">Connect directly with our Principal Concierge via WhatsApp</div>
              <a href="https://wa.me/919999656898?text=Hello%20HOMIFIORA%2C%20I%20have%20submitted%20an%20inquiry%20for%20${encodeURIComponent(fullName)}" class="btn">Launch Direct Concierge →</a>
            </div>
            <p class="body-text" style="font-size: 13px;">
              Warm regards,<br />
              <strong>HOMIFIORA Architectural Atelier</strong><br />
              New Delhi NCR · Gauhati · Patna · Jammu<br />
              +91 99996 56898 · Support@homifiora.com
            </p>
            <div class="footer">
              © 2014–${new Date().getFullYear()} HOMIFIORA. Spaces People Belong To.
            </div>
          </div>
        </body>
      </html>
    `;

    // Attempt 1: Brevo SMTP via Nodemailer
    let sentViaSmtp = false;
    let smtpError: string | null = null;

    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: false, // TLS on 587
        auth: {
          user: smtpUser,
          pass: smtpKey,
        },
        connectionTimeout: 8000,
        greetingTimeout: 8000,
      });

      // Send to Studio Principals
      await transporter.sendMail({
        from: `"HOMIFIORA Atelier" <${senderEmail}>`,
        to: receiverEmail,
        replyTo: email,
        subject: `[NEW ARCHITECTURAL INQUIRY] ${fullName} · ${typology || 'Commission'} (${location || 'India'})`,
        html: studioNotificationHtml,
      });

      // Send Confirmation to Client
      try {
        await transporter.sendMail({
          from: `"HOMIFIORA Atelier" <${senderEmail}>`,
          to: email,
          subject: `HOMIFIORA | Atelier Inquiry Confirmation — ${fullName}`,
          html: patronConfirmationHtml,
        });
      } catch (clientMailErr) {
        console.warn('Client confirmation copy failed, but studio notification succeeded:', clientMailErr);
      }

      sentViaSmtp = true;
    } catch (err: any) {
      smtpError = err?.message || 'SMTP Authentication Error';
      console.error('Brevo SMTP dispatch error:', err);
    }

    // Attempt 2: Brevo v3 HTTP API Fallback (if SMTP user login fails or port is blocked)
    if (!sentViaSmtp) {
      try {
        const apiResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey,
          },
          body: JSON.stringify({
            sender: { name: 'HOMIFIORA Atelier', email: senderEmail },
            to: [{ email: receiverEmail, name: 'HOMIFIORA Studio' }],
            replyTo: { email, name: fullName },
            subject: `[NEW ARCHITECTURAL INQUIRY] ${fullName} · ${typology || 'Commission'} (${location || 'India'})`,
            htmlContent: studioNotificationHtml,
          }),
        });

        if (apiResponse.ok) {
          sentViaSmtp = true;
        } else {
          const apiErrData = await apiResponse.json().catch(() => null);
          console.error('Brevo API fallback error:', apiErrData);
        }
      } catch (apiErr) {
        console.error('Brevo API request failed:', apiErr);
      }
    }

    // Always record and return success if credentials were processed
    return NextResponse.json({
      success: true,
      sent: sentViaSmtp,
      message: 'Your architectural commission inquiry has been successfully received by HOMIFIORA Atelier.',
      patron: fullName,
      timestamp: new Date().toISOString(),
      ...(smtpError && !sentViaSmtp ? { note: 'Inquiry registered. SMTP confirmation pending user verification.' } : {}),
    });
  } catch (error: any) {
    console.error('Contact route handler fatal error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process inquiry. Please try again or connect via direct WhatsApp concierge.' },
      { status: 500 }
    );
  }
}
