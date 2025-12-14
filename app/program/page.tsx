import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

// Definisikan tipe data
type Program = {
  id: number;
  title: string;
  desc: string;
  image: string;
  color: string;
  link: string;
  textColor?: string;
};

export default function ProgramPage() {
  
  // DATA PROGRAM BARU (Hanya 4 Sesuai Request)
  const programs: Program[] = [
    {
      id: 1,
      title: "Posyandu Integrasi",
      desc: "Pemeriksaan kesehatan rutin dan pantauan tumbuh kembang anak bersama tenaga medis profesional.",
      image: "/images/posyandu1.jpg", // Menggunakan foto asli
      color: "bg-pink-500",
      link: "/galeri?kategori=Posyandu" // Link ke filter Galeri
    },
    {
      id: 2,
      title: "Outing Class",
      desc: "Belajar langsung dari alam dan lingkungan sekitar untuk pengalaman yang nyata dan menyenangkan.",
      image: "/images/outing1.jpg", 
      color: "bg-cerah-biru", 
      link: "/galeri?kategori=Outing"
    },
    {
      id: 3,
      title: "Pengenalan Lingkungan",
      desc: "Kegiatan berkeliling mengenal lingkungan sosial dan tetangga sekitar sekolah.",
      image: "/images/pengenalan1.jpg", 
      color: "bg-cerah-hijau",
      link: "/galeri?kategori=Lingkungan"
    },
    {
      id: 4,
      title: "Peringatan Hari Besar",
      desc: "Menanamkan nilai kebangsaan dan religius melalui perayaan Kartini, Maulid Nabi, dan Kemerdekaan.",
      image: "/images/haribesar1.jpg", 
      color: "bg-yellow-400",
      textColor: "text-blue-900", // Teks gelap agar terbaca di kuning
      link: "/galeri?kategori=Acara"
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* ================= HERO SECTION (GAMBAR UTAMA) ================= */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
           {/* Pastikan file program.jpg ada, atau ganti dengan salah satu foto kegiatan */}
           <Image 
             src="/images/program.jpg" 
             alt="Program Kegiatan" 
             fill className="object-cover"
             priority
           />
           {/* Overlay Pink/Ungu */}
           <div className="absolute inset-0 bg-pink-900/60 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto relative z-10 px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm mb-4 uppercase tracking-wide">
            Kegiatan Seru
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Program Unggulan
          </h1>
          <p className="text-pink-50 text-xl max-w-2xl mx-auto font-medium">
            Menciptakan kenangan indah masa kecil melalui kegiatan yang mendidik dan menyenangkan.
          </p>
        </div>
      </section>


      {/* ================= PROGRAM GRID (UPDATED) ================= */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program) => (
              <Link 
                href={program.link} 
                key={program.id}
                className="group block relative h-[350px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* 1. GAMBAR BACKGROUND (Diaktifkan) */}
                <div className="absolute inset-0 bg-gray-200">
                   <Image 
                      src={program.image} 
                      alt={program.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* 2. KONTEN TEKS */}
                <div className="absolute bottom-0 left-0 w-full p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                   
                   {/* Label Kategori */}
                   <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold mb-3 ${program.color} ${program.textColor || 'text-white'}`}>
                      Program Unggulan
                   </span>

                   <h3 className="text-3xl font-bold mb-3 leading-tight group-hover:text-yellow-400 transition-colors">
                      {program.title}
                   </h3>
                   
                   <p className="text-gray-200 text-sm md:text-base line-clamp-2 group-hover:line-clamp-none transition-all duration-300 mb-4 opacity-90">
                      {program.desc}
                   </p>

                   <div className="flex items-center gap-2 text-sm font-bold text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                      Lihat Foto Dokumentasi <ArrowRight size={16} />
                   </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA KURIKULUM ================= */}
      <section className="py-20 px-4 bg-blue-50">
         <div className="container mx-auto text-center">
            
            <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6 animate-bounce">
               <Star className="text-orange-500 fill-yellow-400" size={40} strokeWidth={2.5} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
               Ingin tahu cara kami mengajar?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
               Simak detail Kurikulum Merdeka dan pendekatan Deep Learning yang kami terapkan.
            </p>
            
            <Link 
               href="/kurikulum" 
               className="inline-flex items-center gap-3 bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
               Lihat Kurikulum
               <ArrowRight size={22} />
            </Link>
         </div>
      </section>

    </main>
  );
}