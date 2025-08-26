import {NextResponse} from "next/server";
import nodemailer from "nodemailer";
import {z} from "zod";

// Schema for validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  mobile: z
    .string()
    .length(10, "Mobile number must be exactly 10 digits")
    .regex(/^\d+$/, "Mobile number must contain only digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

function escapeHtml(text: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate with Zod
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.flatten().fieldErrors,
        },
        {status: 400}
      );
    }

    const {name, email, message, mobile} = parsed.data;

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
      
    const htmlContent = `
  <div style="font-family: Verdana, Geneva, Tahoma, sans-serif; color: #222; line-height: 1.5; padding: 20px; background-color: #f9f9f9;">
    <h2 style="color: #0052cc; border-bottom: 2px solid #0052cc; padding-bottom: 8px;">New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(
      email
    )}" style="color: #0052cc;">${escapeHtml(email)}</a></p>
    <p><strong>Mobile:</strong> <a href="tel:${escapeHtml(
      mobile
    )}" style="color: #0052cc;">${escapeHtml(mobile)}</a></p>
    <p><strong>Message:</strong></p>
    <div style="background-color: #fff; border: 1px solid #ddd; padding: 12px; border-radius: 6px; white-space: pre-wrap; font-size: 14px;">
      ${escapeHtml(message)}
    </div>
    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />
    <footer style="font-size: 12px; color: #888; text-align: center;">This email has been sent from your Portfolio's contact form</footer>
  </div>
`;
    const res = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: "crazycodedev143@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      html: htmlContent,
    });

    return NextResponse.json({success: true, message: "Email sent!", res});
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {success: false, message: "Failed to send email"},
      {status: 500}
    );
  }
}
