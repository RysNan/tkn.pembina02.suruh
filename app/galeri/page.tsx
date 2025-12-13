"use client";

import { useState, useEffect, Suspense } from "react"; // Tambah import Suspense
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { PlayCircle, Image as ImageIcon } from "lucide-react";

// 1. KITA UBAH NAMA KOMPONEN UTAMA TADI JADI "GaleriContent"
function GaleriContent() {
  const searchParams = useSearchParams();
  const kategoriUrl = searchParams.get('kategori'); 

  // State Filter
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Update filter otomatis jika ada link dari halaman Program
  useEffect(() => {
    if (kategoriUrl) {
      setActiveCategory(kategoriUrl);
    }
  }, [kategoriUrl]);

  // Data Kategori 
  const categories = [
    "Semua", "Posyandu", "Outing", "Acara", "Seni", "Karya",
  ];

  // Data Foto
  const galleryItems = [
    { id: 1, title: "Pemeriksaan Gigi Rutin", category: "Posyandu", image: "/images/galeri-posyandu.jpg" },
    { id: 2, title: "Kunjungan ke Museum Kereta", category: "Outing", image: "/images/galeri-outing1.jpg" },
    { id: 3, title: "Lomba Mewarnai Hari Ibu", category: "Acara", image: "/images/galeri-acara1.jpg" },
    { id: 4, title: "Pentas Drumband Cilik", category: "Seni", image: "/images/galeri-drumband.jpg" },
    { id: 5, title: "Panen Sayur Hidroponik", category: "Outing", image: "/images/galeri-kebun.jpg" },
    { id: 6, title: "Pentas Tari Daerah", category: "Seni", image: "/images/galeri-tari.jpg" },
    { id: 7, title: "Hasil Lukisan Jari", category: "Karya", image: "/images/galeri-karya1.jpg" },
    { id: 8, title: "Upacara Kemerdekaan", category: "Acara", image: "/images/galeri-upacara.jpg" },
  ];

  // Logic Filter
  const filteredItems = activeCategory === "Semua" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      
      {/* HEADER SIMPEL */}
      <section className="bg-yellow-50 pt-24 pb-10 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Galeri & Dokumentasi</h1>
          <p className="text-gray-500">Momen keceriaan dan tumbuh kembang siswa TK Pembina 02.</p>
        </div>
      </section>

      {/* VIDEO HIGHLIGHT */}
      <section className="px-4 -mt-6 mb-12 relative z-10">
         <div className="container mx-auto max-w-4xl">
            <div className="relative aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group cursor-pointer">
               <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 hover:bg-black/30 transition">
                  <PlayCircle size={64} className="mb-4 text-yellow-400 animate-pulse" />
                  <span className="font-bold tracking-widest">TONTON PROFIL SEKOLAH</span>
               </div>
            </div>
         </div>
      </section>

      {/* FILTER TABS & GRID */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          
          {/* TAB MENU */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 sticky top-24 z-30 bg-white/80 backdrop-blur py-4 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2
                  ${activeCategory === cat 
                    ? "bg-blue-600 text-white border-blue-600 shadow-md transform scale-105" 
                    : "bg-white text-gray-500 border-gray-100 hover:border-blue-200 hover:text-blue-500"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID FOTO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-gray-100 aspect-square">
                
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                   <ImageIcon size={32} />
                </div>

                <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                   <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {item.category}
                   </span>
                   <h3 className="text-white font-bold text-lg leading-tight">
                      {item.title}
                   </h3>
                </div>

              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
             <div className="text-center py-10 text-gray-400">
                Belum ada foto untuk kategori ini.
             </div>
          )}

        </div>
      </section>

    </main>
  );
}

// 2. INI KOMPONEN PEMBUNGKUS BARU (Wajib ada Suspense)
export default function GaleriPage() {
  return (
    // Fallback adalah tampilan sementara saat loading URL
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Memuat Galeri...</div>}>
      <GaleriContent />
    </Suspense>
  );
}