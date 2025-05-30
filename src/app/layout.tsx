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
  title: "Portfolio - Andrew",
  description:
    "Hi, Andrew here. I am a professional full stack engineer and a passionate learner.",
  applicationName: "Portfolio - Andrew Thomas",
  authors: { name: "Andrew Thomas", url: "https://Ajeetw.net" },
  alternates: { canonical: "https://Ajeetw.vercel.app/" },
  keywords: [
    "Andrew Thomas",
    "Andrew",
    "Portfolio",
    "Full Stack",
    "Frontend",
    "Developer",
    "Engineer",
    "Dev",
    "Blockchain",
    "web3",
    "smart contract",
  ],
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
