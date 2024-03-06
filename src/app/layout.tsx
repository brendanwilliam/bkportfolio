import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";


const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio — Brendan Keane",
  description: "Brendan Keane's front-end developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" sizes="any" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body className={interTight.className}>
        <div className="flex w-full bg-white">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}