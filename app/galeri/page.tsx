"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react"; // PlayCircle dihapus karena sudah pakai iframe

// 1. KOMPONEN ISI GALERI
function GaleriContent() {
  const searchParams = useSearchParams();
  const kategoriUrl = searchParams.get('kategori'); 

  // State Filter
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Update filter otomatis jika ada link dari halaman lain
  useEffect(() => {
    if (kategoriUrl) {
      // Normalisasi nama kategori dari URL agar cocok dengan data baru
      let categoryMap: { [key: string]: string } = {
        'Posyandu': 'Posyandu',
        'Outing': 'Outing Class',
        'Lingkungan': 'Pengenalan Lingkungan',
        'Acara': 'Peringatan Hari Besar'
      };
      setActiveCategory(categoryMap[kategoriUrl] || "Semua");
    }
  }, [kategoriUrl]);

  // --- DATA KATEGORI BARU (Sesuai Request) ---
  const categories = [
    "Semua",
    "Posyandu",
    "Outing Class",
    "Pengenalan Lingkungan",
    "Peringatan Hari Besar",
  ];

  // --- DATA FOTO BARU (Sesuai Request nama file) ---
  // Pastikan file-file ini ada di folder public/images/
  const galleryItems = [
    // Posyandu
    { id: 1, title: "Kegiatan Posyandu Rutin", category: "Posyandu", image: "/images/posyandu1.jpg" },
    { id: 2, title: "Pemeriksaan Tumbuh Kembang Anak", category: "Posyandu", image: "/images/posyandu2.jpg" },
    
    // Outing Class
    { id: 3, title: "Kunjungan Edukatif Luar Sekolah", category: "Outing Class", image: "/images/outing1.jpg" },
    { id: 4, title: "Belajar Seru di Alam Terbuka", category: "Outing Class", image: "/images/outing2.jpg" },
    
    // Pengenalan Lingkungan
    { id: 5, title: "Berjalan-jalan di Lingkungan Sekitar", category: "Pengenalan Lingkungan", image: "/images/pengenalan1.jpg" },
    { id: 6, title: "Mengenal Tetangga & Lingkungan Sekolah", category: "Pengenalan Lingkungan", image: "/images/pengenalan2.jpg" },
    
    // Peringatan Hari Besar
    { id: 7, title: "Pentas Seni Hari Kemerdekaan", category: "Peringatan Hari Besar", image: "/images/haribesar1.jpg" },
    { id: 8, title: "Lomba Fashion Show Kartini", category: "Peringatan Hari Besar", image: "/images/haribesar2.jpg" },
    { id: 9, title: "Perayaan Maulid Nabi", category: "Peringatan Hari Besar", image: "/images/haribesar3.jpg" },
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
          <p className="text-gray-500">Momen keceriaan dan tumbuh kembang siswa TK Negeri Pembina 02 Suruh.</p>
        </div>
      </section>

      {/* ================= VIDEO HIGHLIGHT (YOUTUBE ASLI) ================= */}
      <section className="px-4 -mt-6 mb-12 relative z-10">
         <div className="container mx-auto max-w-4xl">
            {/* Container Aspect Ratio untuk Video */}
            <div className="relative aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
               {/* Iframe YouTube */}
               <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/Jg1oj9jf3z4?si=k1L2m3n4o5p6q7r8&rel=0" // Link embed dengan ID video baru
                  title="Profil TK Negeri Pembina 02 Suruh"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="absolute inset-0"
               ></iframe>
            </div>
         </div>
      </section>

      {/* FILTER TABS & GRID */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          
          {/* TAB MENU KATEGORI BARU */}
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
                
                {/* KOMPONEN GAMBAR ASLI (Diaktifkan) */}
                {/* Pastikan file gambar sudah ada di folder public/images/ */}
                <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Fallback jika gambar belum ada (bisa dihapus jika semua gambar sudah siap) */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400 -z-10">
                   <ImageIcon size={32} />
                </div>

                {/* Overlay Info (Muncul saat hover) */}
                <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                   <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full mb-3 truncate max-w-[90%]">
                      {item.category}
                   </span>
                   <h3 className="text-white font-bold text-lg leading-tight">
                      {item.title}
                   </h3>
                </div>

              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
             <div className="text-center py-10 text-gray-400">
                Belum ada foto untuk kategori ini. Silakan tambahkan di folder images.
             </div>
          )}

        </div>
      </section>

    </main>
  );
}

// 2. KOMPONEN PEMBUNGKUS (Wajib ada Suspense)
export default function GaleriPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-bold text-blue-600">Memuat Galeri...</div>}>
      <GaleriContent />
    </Suspense>
  );
}