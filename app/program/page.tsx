import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

// FIX: Definisikan tipe datanya agar TypeScript tidak bingung
type Program = {
  id: number;
  title: string;
  desc: string;
  image: string;
  color: string;
  link: string;
  textColor?: string; // Tanda tanya (?) artinya OPTIONAL (Boleh kosong)
};

export default function ProgramPage() {
  
  // Tambahkan ': Program[]' untuk memastikan datanya sesuai aturan di atas
  const programs: Program[] = [
    {
      id: 1,
      title: "Posyandu Integrasi",
      desc: "Pemeriksaan kesehatan rutin dan pantauan tumbuh kembang anak bersama tenaga medis profesional.",
      image: "/images/program-posyandu.jpg",
      color: "bg-pink-500",
      link: "/galeri?kategori=Posyandu"
    },
    {
      id: 2,
      title: "Outing Class & Field Trip",
      desc: "Belajar langsung dari alam dan lingkungan sekitar. Kunjungan ke museum, taman, dan instansi publik.",
      image: "/images/program-outing.jpg", 
      color: "bg-cerah-biru", 
      link: "/galeri?kategori=Outing"
    },
    {
      id: 3,
      title: "Peringatan Hari Besar",
      desc: "Menanamkan nilai kebangsaan dan religius melalui perayaan Kartini, Maulid Nabi, dan Kemerdekaan.",
      image: "/images/program-haribesar.jpg", 
      color: "bg-yellow-400", // Ganti ke kuning standar tailwind
      textColor: "text-blue-900", // Ini yang bikin error tadi (sekarang sudah aman)
      link: "/galeri?kategori=Acara"
    },
    {
      id: 4,
      title: "Drumband Cilik",
      desc: "Mengasah seni musik, ketukan nada, dan kekompakan tim dalam satu harmoni irama.",
      image: "/images/program-drumband.jpg", 
      color: "bg-cerah-hijau",
      link: "/galeri?kategori=Seni"
    },
    {
      id: 5,
      title: "Tari & Seni Tradisional",
      desc: "Melestarikan budaya sejak dini melalui gerak tari dan pengenalan alat musik daerah.",
      image: "/images/program-tari.jpg", 
      color: "bg-purple-500",
      link: "/galeri?kategori=Seni"
    },
    {
      id: 6,
      title: "Cooking Class",
      desc: "Kegiatan memasak sederhana untuk melatih kemandirian dan mengenal jenis makanan sehat.",
      image: "/images/program-cooking.jpg", 
      color: "bg-cerah-oranye",
      link: "/galeri?kategori=Kreativitas"
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* ================= HEADER SECTION ================= */}
      <section className="relative pt-24 pb-16 px-4 text-center overflow-hidden bg-blue-50">
         {/* Dekorasi Background */}
         <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto relative z-10">
          {/* Badge Kegiatan Seru */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400 text-blue-900 text-sm font-extrabold mb-4 shadow-md uppercase tracking-wide">
            Kegiatan Seru
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Program Unggulan Kami
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Kami merancang kegiatan yang tidak hanya mendidik, tetapi juga menciptakan kenangan indah masa kecil yang tak terlupakan.
          </p>
        </div>
      </section>


      {/* ================= PROGRAM GRID ================= */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Link 
                href={program.link} 
                key={program.id}
                className="group block relative h-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* 1. GAMBAR BACKGROUND */}
                <div className="absolute inset-0 bg-gray-200">
                   {/* Placeholder Text */}
                   <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold bg-gray-100">
                      FOTO: {program.title}
                   </div>
                   {/* <Image 
                      src={program.image} 
                      alt={program.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                   /> */}
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>

                {/* 2. KONTEN TEKS */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                   
                   {/* Label Kategori */}
                   <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold mb-3 ${program.color} ${program.textColor || 'text-white'}`}>
                      Program Unggulan
                   </span>

                   <h3 className="text-2xl font-bold mb-2 leading-tight group-hover:text-yellow-400 transition-colors">
                      {program.title}
                   </h3>
                   
                   <p className="text-gray-200 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300 mb-4 opacity-90">
                      {program.desc}
                   </p>

                   <div className="flex items-center gap-2 text-sm font-bold text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                      Lihat Dokumentasi <ArrowRight size={16} />
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
            
            {/* Ikon Bintang */}
            <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6 animate-bounce">
               <Star className="text-orange-500 fill-yellow-400" size={40} strokeWidth={2.5} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
               Ingin tahu apa yang dipelajari anak?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
               Simak detail Kurikulum Merdeka dan jadwal harian siswa di halaman terpisah.
            </p>
            
            {/* Tombol Biru Tua */}
            <Link 
               href="/kurikulum" 
               className="inline-flex items-center gap-3 bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
               Lihat Kurikulum & Jadwal
               <ArrowRight size={22} />
            </Link>
         </div>
      </section>

    </main>
  );
}