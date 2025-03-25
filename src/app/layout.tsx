import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  display: "swap",
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Created with Next.js, Tailwind CSS, Framer Motion  and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased text-stone-200 bg-stone-900 ${archivo.variable} font-sans`}>{children}</body>
    </html>
  );
}
