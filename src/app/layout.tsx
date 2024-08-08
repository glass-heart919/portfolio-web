import type { Metadata } from "next";
import { Inria_Serif, Paprika, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inria_serif = Inria_Serif({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inria-serif",
});

const paprika = Paprika({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-paprika",
});

export const metadata: Metadata = {
  title: "Portfolio - Lucas",
  description:
    "Hi, Lucas here. I am a professional full stack engineer and a passionate learner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${paprika.variable} ${inria_serif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
