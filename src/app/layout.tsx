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
  title: "Portfolio - Nicholas",
  description:
    "Hi, Nicholas here. I am a professional full stack engineer and a passionate learner.",
  applicationName: "Portfolio - Nicholas Hearne",
  authors: { name: "Nicholas Hearne", url: "https://Ajeetw.net" },
  alternates: { canonical: "https://Ajeetw.vercel.app/" },
  keywords: [
    "Nicholas Hearne",
    "Nicholas",
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
