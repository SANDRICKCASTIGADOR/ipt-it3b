import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "IPT IT-3B",
  description: "Interactive Programming Technology for IT-3B",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <main className="flex w-full bg-white">
        <h1>Hello BSIT-3A</h1>
      </main>
      <body>{children}</body>
    </html>
  );
}
