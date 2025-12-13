"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // UPDATE STRUKTUR MENU (Sesuai Revisi)
  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Profil", href: "/profil" },
    { name: "Kurikulum", href: "/kurikulum" }, // Menu Baru
    { name: "Program", href: "/program" },     // Nama dipersingkat
    { name: "Galeri", href: "/galeri" },
    { name: "PPDB", href: "/ppdb" },
    { name: "Kontak", href: "/kontak" },
  ];

  // Fungsi cek aktif
  const isActive = (path: string) => pathname === path;

  return (
    // Tambahkan font-sans agar pakai Quicksand
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 w-full font-sans border-b-4 border-yellow-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO SECTION - Lebih Colorful */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Bulat Kuning */}
            <div className="w-11 h-11 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-extrabold shadow-md group-hover:scale-110 transition border-2 border-white">
              TK
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-900 leading-none group-hover:text-blue-600 transition">
                TK Pembina 02
              </span>
              <span className="text-xs text-gray-500 font-bold tracking-wider">SURUH</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300
                  ${isActive(link.href) 
                    ? "bg-blue-100 text-blue-700 shadow-inner" // State Aktif: Biru Muda
                    : "text-gray-600 hover:bg-yellow-50 hover:text-yellow-600" // Hover: Kuning Tipis
                  }
                  ${link.name === "PPDB" ? "!bg-yellow-400 !text-blue-900 shadow-md hover:!bg-yellow-300 transform hover:-translate-y-1" : ""} // Tombol Spesial PPDB
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 hover:text-yellow-500 focus:outline-none transition p-2 bg-gray-50 rounded-lg"
            >
              {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl transition-all duration-300 ease-in-out ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-5 py-3 rounded-xl text-base font-bold transition
                ${isActive(link.href)
                  ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                  : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;