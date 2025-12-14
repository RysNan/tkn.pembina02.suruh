import Image from "next/image";
import { Target, BookOpen } from "lucide-react";

export default function ProfilPage() {
  
  // DATA GURU
  const teachers = [
    { 
      name: "Rahayu Kurniasari", 
      role: "Guru Kelas", 
      image: "/images/Rahayu.JPG" 
    },
    { 
      name: "Uswatul Umami, S.Pd AUD", 
      role: "Kepala Sekolah", 
      image: "/images/Uswatul.jpg" 
    },
    { 
      name: "Nur Sholekah, S.Pd", 
      role: "Guru Kelas", 
      image: "/images/Nur.JPG" 
    },
    { 
      name: "Rina Septi Nugraheni, S.Pd", 
      role: "Guru Kelas", 
      image: "/images/Rina.jpg" 
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
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
      <section className="pt-16 pb-4 px-4">
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
      <section className="pt-4 pb-16 px-4 bg-gray-50">
         <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">Guru & Tenaga Pendidik</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
               {teachers.map((teacher, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all border-b-4 border-transparent hover:border-blue-400 group h-full">
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
    </main>
  );
}