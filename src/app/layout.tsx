import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";


const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio — Brendan Keane",
  description: "Brendan Keane's design & UX engineering portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body className={interTight.className}>
        <div className="flex w-full bg-zinc-950">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}