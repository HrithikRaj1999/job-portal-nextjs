import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Swapna Karya",
    template: "%s | Swapna Karya",
  },
  description: "Find your dream job with Swapna Karya",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[400px]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
