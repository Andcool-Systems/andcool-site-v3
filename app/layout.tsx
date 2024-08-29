import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./styles/globals.css";

const Roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AndcoolSystems",
  icons: {
    icon: '/static/andcool.jpg',
    shortcut: '/static/andcool.jpg',
    apple: '/static/andcool.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Roboto.className}>{children}</body>
    </html>
  );
}
