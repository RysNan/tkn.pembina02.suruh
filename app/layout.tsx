import type { Metadata } from "next";
// Import font Poppins
import { Poppins } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Konfigurasi Font Poppins
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'], 
  variable: '--font-poppins', // Ini variabel penting agar terbaca Tailwind
});

export const metadata: Metadata = {
  title: "TK Negeri Pembina 02 Suruh",
  description: "Website Resmi TK Negeri Pembina 02 Suruh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* Masukkan variabel font ke Body */}
      <body className={`${poppins.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}