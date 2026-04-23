import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type LeadPayload = {
  fullName: string;
  email: string;
  phone: string;
  weddingDate: string;
  guestCount: string;
  packageInterest: string;
  vision: string;
  referral: string;
  consent: boolean;
  source: string;
};

const LEAD_SOURCE = "wedding-lp-google-ads";
const FALLBACK_LEAD_TO = "info@mississaugaconvention.com";

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function toLeadPayload(body: unknown): LeadPayload {
  const input = typeof body === "object" && body !== null ? body as Record<string, unknown> : {};

  return {
    fullName: readString(input.fullName),
    email: readString(input.email),
    phone: readString(input.phone),
    weddingDate: readString(input.weddingDate),
    guestCount: readString(input.guestCount),
    packageInterest: readString(input.packageInterest),
    vision: readString(input.vision),
    referral: readString(input.referral),
    consent: input.consent === true,
    source: readString(input.source)
  };
}

function renderLeadHtml(payload: LeadPayload) {
  const rows = [
    ["Full Name", payload.fullName],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Wedding Date", payload.weddingDate || "Not provided"],
    ["Estimated Guest Count", payload.guestCount || "Not provided"],
    ["Package Interest", payload.packageInterest || "Not sure yet"],
    ["Referral Source", payload.referral || "Not provided"],
    ["Lead Source", payload.source]
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 14px;border:1px solid #d9c29a;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#0d1b2d;background:#f7f0e6;">${escapeHtml(label)}</td>
          <td style="padding:12px 14px;border:1px solid #d9c29a;font-family:Arial,sans-serif;font-size:14px;color:#1d2835;background:#ffffff;">${escapeHtml(value)}</td>
        </tr>
      `
    )
    .join("");

  const visionBlock = payload.vision
    ? `
      <div style="margin-top:24px;padding:20px;border-radius:18px;background:#f5f3f0;border:1px solid #d9c29a;">
        <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#bc9c6f;">Wedding Vision</p>
        <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;line-height:1.8;color:#1d2835;">${escapeHtml(payload.vision)}</p>
      </div>
    `
    : "";

  return `
    <div style="padding:32px;background:#f8f5f0;">
      <div style="max-width:720px;margin:0 auto;padding:32px;border-radius:28px;background:#ffffff;border:1px solid #e5d5bb;">
        <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:#bc9c6f;">Mississauga Convention Centre</p>
        <h1 style="margin:0 0 12px;font-family:Georgia,serif;font-size:34px;line-height:1.05;color:#0d1b2d;">New Wedding Lead</h1>
        <p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:15px;line-height:1.8;color:#665d54;">
          A new wedding inquiry was submitted from the branded MCC landing page.
        </p>
        <table style="width:100%;border-collapse:collapse;border-spacing:0;">
          ${rows}
        </table>
        ${visionBlock}
      </div>
    </div>
  `;
}

function renderLeadText(payload: LeadPayload) {
  return [
    "New wedding lead from the MCC landing page",
    "",
    `Full Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Wedding Date: ${payload.weddingDate || "Not provided"}`,
    `Estimated Guest Count: ${payload.guestCount || "Not provided"}`,
    `Package Interest: ${payload.packageInterest || "Not sure yet"}`,
    `Referral Source: ${payload.referral || "Not provided"}`,
    `Lead Source: ${payload.source}`,
    "",
    "Wedding Vision:",
    payload.vision || "Not provided"
  ].join("\n");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const leadToEmail = process.env.LEAD_TO_EMAIL ?? FALLBACK_LEAD_TO;

  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured yet. Add RESEND_API_KEY and RESEND_FROM_EMAIL before using the live form."
      },
      { status: 500 }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit the form again." }, { status: 400 });
  }

  const payload = toLeadPayload(body);

  if (!payload.fullName || !payload.email || !payload.phone) {
    return NextResponse.json(
      { error: "Please complete your name, email, and phone number." },
      { status: 400 }
    );
  }

  if (!payload.consent) {
    return NextResponse.json(
      { error: "Please confirm consent so the MCC team can contact you." },
      { status: 400 }
    );
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (payload.source !== LEAD_SOURCE) {
    return NextResponse.json({ error: "This inquiry source is not supported." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const subject = `New wedding lead: ${payload.fullName}`;

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [leadToEmail],
      subject,
      html: renderLeadHtml(payload),
      text: renderLeadText(payload),
      replyTo: payload.email
    });

    if (error) {
      console.error("Resend lead delivery failed", error);
      return NextResponse.json(
        {
          error:
            "The inquiry was received, but the email could not be delivered right now. Please try again or call MCC directly."
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id ?? null });
  } catch (error) {
    console.error("Lead route exception", error);
    return NextResponse.json(
      {
        error:
          "The inquiry could not be delivered right now. Please try again or call MCC directly."
      },
      { status: 502 }
    );
  }
}
