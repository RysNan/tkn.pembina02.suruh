import Image from "next/image";
import { Target, Award, BookOpen, Quote, Briefcase, GraduationCap } from "lucide-react";

export default function ProfilPage() {
  
  // DATA GURU UPDATED (4 Orang)
  // Pastikan file foto: rahayu.jpg, uswatul.jpg, nur.jpg, rina.jpg ada di folder public/images/
  const teachers = [
    { 
      name: "Rahayu Kurniasari", 
      role: "Kepala Sekolah", 
      image: "/images/rahayu.jpg" 
    },
    { 
      name: "Uswatul Umami, S.Pd AUD", 
      role: "Guru Kelas", 
      image: "/images/uswatul.jpg" 
    },
    { 
      name: "Nur Sholekah, S.Pd", 
      role: "Guru Kelas", 
      image: "/images/nur.jpg" 
    },
    { 
      name: "Rina Septi Nugraheni, S.Pd", 
      role: "Guru Kelas", 
      image: "/images/rina.jpg" 
    },
  ];

  // DATA ALUMNI (Tanpa Foto - Diganti Inisial)
  const alumni = [
    { 
      name: "Joseph Kristian", 
      age: "20 th",
      gradYear: "2010", 
      job: "Satlantas Polres Salatiga",
      color: "bg-blue-100 text-blue-700"
    },
    { 
      name: "Nur Afidah", 
      age: "25 th",
      gradYear: "2006", 
      job: "Guru SD",
      color: "bg-pink-100 text-pink-700"
    },
    { 
      name: "Sekar", 
      age: "27 th",
      gradYear: "2005", 
      job: "PNS Dinas Arpus Prov. Jateng",
      color: "bg-yellow-100 text-yellow-700"
    },
    { 
      name: "M. Adinata Omar", 
      age: "21 th",
      gradYear: "2009", 
      job: "BUMA",
      color: "bg-green-100 text-green-700"
    },
    { 
      name: "Enggar", 
      age: "23 th",
      gradYear: "2007", 
      job: "Cumlaude di UGM",
      color: "bg-purple-100 text-purple-700"
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
           {/* Menggunakan profil.jpg */}
           <Image 
             src="/images/profil.jpg" 
             alt="Profil Sekolah" 
             fill 
             className="object-cover"
             priority
           />
           <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
        </div>

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

      {/* ================= GURU & STAFF (4 GURU) ================= */}
      <section className="py-16 px-4 bg-gray-50">
         <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">Guru & Tenaga Pendidik</h2>
            
            {/* Grid disesuaikan agar 4 guru terlihat rapi */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
               {teachers.map((teacher, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all border-b-4 border-transparent hover:border-blue-400 group h-full">
                     {/* Foto Guru */}
                     <div className="relative w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition duration-300">
                        <Image 
                           src={teacher.image} 
                           alt={teacher.name}
                           fill
                           className="object-cover"
                        />
                     </div>
                     <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 min-h-[3rem] flex items-center justify-center">
                        {teacher.name}
                     </h3>
                     <p className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        {teacher.role}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================= JEJAK ALUMNI (TANPA FOTO) ================= */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -z-10"></div>

         <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
               <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Output Sekolah</span>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Generasi Emas (Alumni)</h2>
               <p className="text-gray-500 mt-2">Beberapa alumni kami yang telah sukses berkarya.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {alumni.map((alum, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-start gap-4">
                     
                     {/* Inisial Nama (Pengganti Foto) */}
                     <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner ${alum.color}`}>
                        {alum.name.charAt(0)}
                     </div>
                     
                     <div className="w-full">
                        <h4 className="font-bold text-gray-900 text-lg leading-tight">{alum.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 mt-1">
                           <span className="font-semibold bg-gray-100 px-2 py-0.5 rounded text-xs">Usia {alum.age}</span>
                           <span>• Lulus {alum.gradYear}</span>
                        </div>
                        
                        <div className="border-t border-gray-100 pt-3">
                           <div className="flex items-start gap-2">
                              {alum.job.toLowerCase().includes('cumlaude') || alum.job.toLowerCase().includes('kuliah') ? (
                                 <GraduationCap size={18} className="text-blue-500 mt-0.5 shrink-0" />
                              ) : (
                                 <Briefcase size={18} className="text-green-500 mt-0.5 shrink-0" />
                              )}
                              <p className="text-sm font-bold text-gray-700 leading-tight">
                                 {alum.job}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="mt-12 text-center">
               <p className="text-gray-500 text-sm bg-gray-50 inline-block px-6 py-3 rounded-full">
                  Apakah Anda alumni TK Negeri Pembina 02? <br className="md:hidden"/>
                  <a href="/kontak" className="text-blue-600 font-bold hover:underline">Hubungi kami</a> untuk terhubung kembali!
               </p>
            </div>
         </div>
      </section>

    </main>
  );
}