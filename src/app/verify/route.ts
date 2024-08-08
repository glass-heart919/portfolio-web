import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const request = await req.json();
    const { email, otp } = request;
    const storedOtpData = await prisma.otp.findUnique({ where: { email } });
    if (!storedOtpData) {
      return Response.json({ message: "OTP not found" }, { status: 500 });
    }

    const { otp: storedOtp, expiresAt } = storedOtpData;

    if (Date.now() > expiresAt) {
      await prisma.otp.delete({ where: { email } });
      return Response.json({ message: "OTP has expired" }, { status: 500 });
    }

    if (storedOtp === otp) {
      await prisma.otp.delete({ where: { email } });
      return Response.json(
        { message: "OTP verified successfully" },
        { status: 200 }
      );
    } else {
      return Response.json({ message: "Invalid OTP" }, { status: 500 });
    }
  } catch (error: any) {
    console.log(error);
    return Response.json(
      { message: error?.message || "Something went wrong." },
      { status: 500 }
    );
  }
}
