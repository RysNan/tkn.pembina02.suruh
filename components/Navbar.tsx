"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isKurikulumOpen, setIsKurikulumOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  // Helper class untuk style link biasa
  const linkStyle = (path: string) => `px-3 py-2 rounded-full text-sm font-bold transition-all ${isActive(path) ? "bg-blue-100 text-blue-700 shadow-inner" : "text-gray-600 hover:text-yellow-600"}`;

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 w-full font-sans border-b-4 border-yellow-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:scale-110 transition">
               <Image 
                 src="/images/logo-tk.png" 
                 alt="Logo TK Negeri Pembina 02 Suruh"
                 fill
                 className="object-cover"
               />
            </div>
            <div className="flex flex-col gap-1"> 
              <span className="text-xl font-bold text-blue-900 leading-none group-hover:text-blue-600 transition font-poppins">
                TK Negeri Pembina 02
              </span>
              <span className="text-xs text-gray-500 font-bold tracking-wider">
                SURUH, KAB. SEMARANG
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden xl:flex items-center gap-1">
            
            {/* 1. Grup Awal */}
            <Link href="/" className={linkStyle('/')}>Beranda</Link>
            <Link href="/profil" className={linkStyle('/profil')}>Profil</Link>

            {/* 2. DROPDOWN KURIKULUM */}
            <div className="relative group">
               <button className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-bold transition-all ${pathname.includes('/kurikulum') || pathname.includes('/jadwal') ? "bg-blue-100 text-blue-700" : "text-gray-600 group-hover:text-yellow-600"}`}>
                  Kurikulum <ChevronDown size={14} />
               </button>
               <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                  <Link href="/kurikulum" className="block px-4 py-3 text-sm font-bold text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 border-b border-gray-50">
                     Metode Belajar
                  </Link>
                  <Link href="/jadwal" className="block px-4 py-3 text-sm font-bold text-gray-600 hover:bg-yellow-50 hover:text-yellow-600">
                     Jadwal Harian
                  </Link>
               </div>
            </div>

            {/* 3. Grup Tengah */}
            <Link href="/program" className={linkStyle('/program')}>Program</Link>
            <Link href="/galeri" className={linkStyle('/galeri')}>Galeri</Link>
            
            {/* 4. ALUMNI (DIPINDAH KE SINI) */}
            <Link href="/alumni" className={linkStyle('/alumni')}>Alumni</Link>

            {/* 5. Grup Akhir */}
            <Link href="/ppdb" className="px-3 py-2 rounded-full text-sm font-bold bg-yellow-400 text-blue-900 shadow-md hover:bg-yellow-300 transform hover:-translate-y-1 transition-all mx-1">PPDB</Link>
            <Link href="/kontak" className={linkStyle('/kontak')}>Kontak</Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 hover:text-yellow-500 focus:outline-none transition p-2 bg-gray-50 rounded-lg"
            >
              {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU DROPDOWN ================= */}
      <div className={`xl:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-4 pt-4 pb-6 space-y-1 flex flex-col overflow-y-auto max-h-[80vh]">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-5 py-3 rounded-xl text-base font-bold text-gray-600 hover:bg-gray-50">Beranda</Link>
            <Link href="/profil" onClick={() => setIsOpen(false)} className="block px-5 py-3 rounded-xl text-base font-bold text-gray-600 hover:bg-gray-50">Profil</Link>
            
            {/* Mobile Dropdown Kurikulum */}
            <div>
               <button 
                  onClick={() => setIsKurikulumOpen(!isKurikulumOpen)}
                  className="w-full text-left px-5 py-3 rounded-xl text-base font-bold text-gray-600 hover:bg-gray-50 flex justify-between items-center"
               >
                  Kurikulum <ChevronDown size={16} className={`transition-transform ${isKurikulumOpen ? "rotate-180" : ""}`}/>
               </button>
               <div className={`${isKurikulumOpen ? "block" : "hidden"} bg-gray-50 rounded-xl mx-2 mb-2`}>
                  <Link href="/kurikulum" onClick={() => setIsOpen(false)} className="block px-8 py-3 text-sm font-bold text-gray-500 hover:text-blue-600">Metode Belajar</Link>
                  <Link href="/jadwal" onClick={() => setIsOpen(false)} className="block px-8 py-3 text-sm font-bold text-gray-500 hover:text-blue-600">Jadwal Harian</Link>
               </div>
            </div>

            <Link href="/program" onClick={() => setIsOpen(false)} className="block px-5 py-3 rounded-xl text-base font-bold text-gray-600 hover:bg-gray-50">Program</Link>
            <Link href="/galeri" onClick={() => setIsOpen(false)} className="block px-5 py-3 rounded-xl text-base font-bold text-gray-600 hover:bg-gray-50">Galeri</Link>
            
            {/* ALUMNI (DIPINDAH KE SINI JUGA) */}
            <Link href="/alumni" onClick={() => setIsOpen(false)} className="block px-5 py-3 rounded-xl text-base font-bold text-gray-600 hover:bg-gray-50">Alumni</Link>
            
            <Link href="/ppdb" onClick={() => setIsOpen(false)} className="block px-5 py-3 rounded-xl text-base font-bold bg-yellow-50 text-yellow-700">PPDB</Link>
            <Link href="/kontak" onClick={() => setIsOpen(false)} className="block px-5 py-3 rounded-xl text-base font-bold text-gray-600 hover:bg-gray-50">Kontak</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;