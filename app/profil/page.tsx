import Image from "next/image";
import { Target, Award, BookOpen, Users, Quote } from "lucide-react";

export default function ProfilPage() {
  
  // Data Guru
  const teachers = [
    { name: "Siti Nurjanah, S.Pd", role: "Kepala Sekolah", color: "bg-pink-100 text-pink-600" },
    { name: "Ratna Dewi, S.Pd", role: "Guru Kelas A", color: "bg-blue-100 text-blue-600" },
    { name: "Rina Wulandari, S.Pd", role: "Guru Kelas B", color: "bg-yellow-100 text-yellow-600" },
    { name: "Dwi Astuti, S.Pd", role: "Guru Pendamping", color: "bg-green-100 text-green-600" },
  ];

  // Data Alumni
  const alumni = [
    { 
      name: "Aditya Pratama", 
      gradYear: "Lulusan 2010", 
      achievement: "Sekarang Dokter Muda di RS Kariadi", 
      quote: "Dasar disiplin saya terbentuk di TK Pembina.",
      image: "/images/alumni-1.jpg"
    },
    { 
      name: "Anisa Rahma", 
      gradYear: "Lulusan 2018", 
      achievement: "Juara 1 Olimpiade Matematika SD Tingkat Provinsi", 
      quote: "Belajar di TK sangat menyenangkan!",
      image: "/images/alumni-2.jpg"
    },
    { 
      name: "Budi Santoso", 
      gradYear: "Lulusan 2020", 
      achievement: "Siswa Berprestasi SMP Negeri 1 Suruh", 
      quote: "Kangen masa-masa bermain drumband.",
      image: "/images/alumni-3.jpg"
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* ================= HEADER SECTION (HERO IMAGE) ================= */}
      {/* Ganti text-center biasa dengan Hero Image seperti Beranda */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        
        {/* GAMBAR BACKGROUND */}
        <div className="absolute inset-0">
           <Image 
             src="/images/profil.jpg" // Pastikan file ini ada di public/images/
             alt="Profil Sekolah" 
             fill 
             className="object-cover"
             priority
           />
           {/* Overlay Gelap Biru agar teks terbaca */}
           <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
        </div>

        {/* KONTEN HEADER */}
        <div className="container mx-auto relative z-10 px-4">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm mb-4 uppercase tracking-wide">
             Tentang Kami
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Mengenal Lebih Dekat
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto font-medium">
            TK Negeri Pembina 02 Suruh: Cerdas, Kreatif, dan Berakhlak Mulia.
          </p>
        </div>
      </section>

      {/* ================= VISI & MISI ================= */}
      <section className="py-16 px-4">
         <div className="container mx-auto grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* Visi Card */}
            <div className="bg-yellow-50 p-8 rounded-3xl border-2 border-yellow-100 relative overflow-hidden group hover:border-yellow-300 transition-all">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                  <Target size={100} className="text-yellow-600" />
               </div>
               <h3 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                  <Target className="text-yellow-600" /> Visi Sekolah
               </h3>
               <p className="text-gray-700 text-lg font-medium leading-relaxed">
                  "Terwujudnya anak usia dini yang Cerdas, Ceria, Berakhlak Mulia, dan Cinta Tanah Air."
               </p>
            </div>

            {/* Misi Card */}
            <div className="bg-blue-50 p-8 rounded-3xl border-2 border-blue-100 relative overflow-hidden group hover:border-blue-300 transition-all">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                  <BookOpen size={100} className="text-blue-600" />
               </div>
               <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <BookOpen className="text-blue-600" /> Misi Kami
               </h3>
               <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                     Menanamkan nilai-nilai agama dan moral sejak dini.
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                     Mengembangkan potensi kecerdasan majemuk anak.
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                     Mewujudkan pembelajaran yang aktif, inovatif, dan menyenangkan.
                  </li>
               </ul>
            </div>

         </div>
      </section>

      {/* ================= GURU & STAFF ================= */}
      <section className="py-16 px-4 bg-gray-50">
         <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">Guru & Tenaga Pendidik</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {teachers.map((teacher, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border-b-4 border-transparent hover:border-blue-400 group">
                     <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold ${teacher.color} group-hover:scale-110 transition duration-300`}>
                        {teacher.name.charAt(0)}
                     </div>
                     <h3 className="font-bold text-gray-900">{teacher.name}</h3>
                     <p className="text-sm text-gray-500 mt-1">{teacher.role}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================= JEJAK ALUMNI ================= */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -z-10"></div>

         <div className="container mx-auto">
            <div className="text-center mb-12">
               <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Testimoni & Output</span>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Generasi Emas</h2>
               <p className="text-gray-500 mt-2">Kebanggaan kami melihat lulusan TK Pembina 02 terus berprestasi.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {alumni.map((alum, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 p-8 rounded-3xl shadow-lg relative hover:-translate-y-2 transition-transform duration-300">
                     <Quote className="absolute top-6 right-6 text-gray-200 fill-gray-100" size={40} />
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                           <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold">
                              {alum.name.charAt(0)}
                           </div>
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-900">{alum.name}</h4>
                           <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                              {alum.gradYear}
                           </span>
                        </div>
                     </div>
                     <p className="text-gray-600 italic mb-4">"{alum.quote}"</p>
                     <div className="border-t border-gray-100 pt-4 mt-2">
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wide">Prestasi / Saat Ini:</p>
                        <p className="text-sm font-semibold text-green-600 flex items-center gap-1 mt-1">
                           <Award size={16} /> {alum.achievement}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="mt-12 text-center">
               <p className="text-gray-500 text-sm">
                  Apakah Anda alumni TK Negeri Pembina 02? <br/>
                  <a href="/kontak" className="text-blue-600 font-bold hover:underline">Hubungi kami</a> untuk terhubung kembali!
               </p>
            </div>
         </div>
      </section>

    </main>
  );
}