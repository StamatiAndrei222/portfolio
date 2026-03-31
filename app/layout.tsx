import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Andrei Stamati | Junior Web Developer",
  description:
    "Personal portfolio of Andrei Stamati, a junior web developer focused on clean, practical web applications."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-[family-name:var(--font-manrope)]`}>
        {children}
      </body>
    </html>
  );
}
