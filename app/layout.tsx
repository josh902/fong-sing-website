import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

// Replace metadataBase with the actual production domain when live
export const metadata: Metadata = {
  metadataBase: new URL("https://www.fongsing.ca"),
  title: "Fong Sing Restaurant | Canadian Chinese & Vietnamese Food – Halifax, NS",
  description:
    "Fong Sing Restaurant has served Halifax for over 30 years. Enjoy Canadian-style Chinese and authentic Vietnamese cuisine. Dine-in, takeout, and delivery available.",
  keywords: [
    "Fong Sing Restaurant",
    "Halifax restaurant",
    "Chinese food Halifax",
    "Vietnamese food Halifax",
    "pho Halifax",
    "Chinese takeout Halifax",
  ],
  openGraph: {
    title: "Fong Sing Restaurant | Canadian Chinese & Vietnamese Food – Halifax, NS",
    description:
      "Fong Sing Restaurant has served Halifax for over 30 years. Enjoy Canadian-style Chinese and authentic Vietnamese cuisine. Dine-in, takeout, and delivery available.",
    url: "https://www.fongsing.ca",
    siteName: "Fong Sing Restaurant",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
