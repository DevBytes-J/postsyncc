import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Palanquin_Dark,
  EB_Garamond,
  Roboto,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const palanquinDark = Palanquin_Dark({
  weight: ["400", "500", "600", "700"],
  variable: "--font-palanquin-dark",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

import localFont from "next/font/local";

const britti = localFont({
  src: [
    {
      path: "../public/Nois_Trial_Fonts/BrittiSansTrial-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Nois_Trial_Fonts/BrittiSansTrial-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/Nois_Trial_Fonts/BrittiSansTrial-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/Nois_Trial_Fonts/BrittiSansTrial-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/Nois_Trial_Fonts/BrittiSansTrial-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/Nois_Trial_Fonts/BrittiSansTrial-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/Nois_Trial_Fonts/BrittiSansTrial-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Nois_Trial_Fonts/BrittiSansTrial-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-britti",
});

export const metadata: Metadata = {
  title: "PostSync",
  description: "PostSync",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${palanquinDark.variable} ${ebGaramond.variable} ${britti.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
