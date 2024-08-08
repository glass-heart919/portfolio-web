import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";

const generateVerifyEmailBody = (name: string, otp: string): string => {
  return `Hello ${name},

Here is your OTP to verify your email address.

${otp}

Thanks`;
};

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const sendOTP = async (email: string, name: string, otp: string) => {
  console.log(process.env.USER, process.env.PASS);
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    service: "Outlook365",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    tls: { ciphers: "SSLv3" },
  });

  const mailOptions = {
    from: process.env.USER,
    to: email,
    subject: "Verify your email",
    text: generateVerifyEmailBody(name, otp),
    html: generateVerifyEmailBody(name, otp).split("\n").join("<br />"),
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

export async function POST(req: Request) {
  try {
    const request = await req.json();
    const { name, email } = request;
    const otp = generateOtp().toString();
    const expiresAt = Date.now() + 5 * 60 * 1000;

    await sendOTP(email, name, otp);

    await prisma.otp.upsert({
      where: { email },
      update: { otp, expiresAt },
      create: { email, otp, expiresAt },
    });
    return Response.json({ message: "success" }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return Response.json(
      { message: error?.message || "Something went wrong." },
      { status: 500 }
    );
  }
}
