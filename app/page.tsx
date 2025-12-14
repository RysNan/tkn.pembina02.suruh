import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";

export default function Home() {
  return (
    // Container utama dibuat setinggi layar (min-h-[calc(100vh-80px)]) 
    // dikurangi tinggi navbar (sekitar 80px) agar pas tidak ada scroll.
    <main className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-cerah-biru">

      {/* ================= BACKGROUND IMAGE ARTISTIC ================= */}
      {/* Ini memenuhi request poin 3: Gambar anak bermain yg berseni */}
      <div className="absolute inset-0 z-0">
        {/* GANTI '/images/hero-colorful.jpg' DENGAN FILE FOTO ASLIMU YG BAGUS */}
        {/* Gunakan foto landscape high-res anak-anak sedang beraktivitas ceria */}
        <div className="relative w-full h-full bg-gray-300">
           {/* HAPUS DIV INI dan buka komentar Image di bawah saat ada foto */}
           <div className="flex h-full items-center justify-center text-gray-500 font-bold text-xl">
              [PLACEHOLDER: FOTO ARTISTIK ANAK BERMAIN FULL SCREEN]
           </div>
        </div>
        
        {<Image
          src="/images/hero-colorful.jpg" // Pastikan file ini ada!
          alt="Keceriaan Siswa TK Pembina 02"
          fill
          priority
          className="object-cover object-center"
        />}

        {/* Overlay Gelap Transparan (Agar teks putih terbaca jelas di atas foto) */}
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
        {/* Gradient tambahan di bawah agar halus */}
        <div className="absolute inset-0 bg-gradient-to-t from-cerah-biru/80 via-transparent to-transparent"></div>
      </div>


      {/* ================= KONTEN UTAMA (Tengah) ================= */}
      <div className="container mx-auto px-4 relative z-20 text-center text-white mt-10 md:mt-0">
        
        {/* Dekorasi Ikon Sparkle */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-cerah-kuning mb-6 shadow-lg ring-2 ring-white/30 animate-bounce">
          <Sparkles size={20} />
          <span className="font-bold text-white uppercase tracking-wider text-sm">
            Selamat Datang di
          </span>
        </div>

        {/* Judul Besar & Colorful */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
          Tempat Tumbuh Kembang <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerah-kuning to-cerah-hijau">
            Generasi Emas
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-blue-50 font-medium leading-relaxed drop-shadow-md">
          TK Negeri Pembina 02 Suruh <br/> Cerdas, Kreatif, dan Berakhlak Mulia.
        </p>

        {/* Tombol Aksi Utama (CTA) */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          
          {/* Tombol 1: PPDB (Background Kuning - Teks Biru Gelap) */}
          <Link 
            href="/ppdb" 
            className="group bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-extrabold text-lg shadow-lg hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Daftar Sekarang
            {/* Ikon panah biru gelap */}
            <ArrowRight className="text-blue-900 group-hover:translate-x-1 transition" strokeWidth={3} />
          </Link>
          
          {/* Tombol 2: Profil (Background Putih - Teks Biru Cerah) */}
          <Link 
            href="/profil" 
            className="bg-white text-blue-600 border-2 border-white px-8 py-4 rounded-full font-extrabold text-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center"
          >
            Jelajahi Sekolah
          </Link>

        </div>

      </div>

      {/* ================= DEKORASI ABSTRACT SHAPES (Agar lebih artistic) ================= */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 hidden md:block"></div>
      {/* Blob Kuning Kiri */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cerah-kuning rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob z-0"></div>
      {/* Blob Hijau Kanan */}
      <div className="absolute top-20 -right-20 w-72 h-72 bg-cerah-hijau rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 z-0"></div>
      
    </main>
  );
}