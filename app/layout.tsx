import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Konfigurasi Font Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

// Konfigurasi Metadata (Judul & Logo Tab)
export const metadata: Metadata = {
  title: "TK Negeri Pembina 02 Suruh",
  description: "Website Resmi TK Negeri Pembina 02 Suruh, Kabupaten Semarang. Mewujudkan generasi emas yang cerdas dan berakhlak mulia.",
  icons: {
    icon: "/images/logo-tk.png", // <--- INI YANG MENGUBAH LOGO TAB
    apple: "/images/logo-tk.png", // Untuk icon di iPhone/iPad
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-sans antialiased text-gray-800 bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}