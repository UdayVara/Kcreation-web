import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Custom/Header";
import Footer from "@/components/Custom/Footer";
import ToastProvider from "@/providers/ToastProvider";
import TransitionProvider from "@/providers/TransitionProvider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KCreation",
  description: "A place Where Art Meets Passion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ToastProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
