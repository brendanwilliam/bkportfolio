import type { Metadata } from "next";
import { Layout } from "@/components/Layout";
import { Inter_Tight } from "next/font/google";
import "./globals.css";


const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rough Draft Media",
  description: "A Seattle-based digital media production house",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={interTight.className}>
        <div className="flex w-full bg-black">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}