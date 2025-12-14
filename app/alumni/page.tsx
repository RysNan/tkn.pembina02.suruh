import Image from "next/image";
import Link from "next/link";
import { Quote, Briefcase, GraduationCap, Users } from "lucide-react";

export default function AlumniPage() {
  
  // DATA ALUMNI (Pindahan dari Profil)
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
      
      {/* ================= HEADER SECTION ================= */}
      <section className="relative pt-24 pb-20 px-4 text-center overflow-hidden bg-blue-800">
         
         {/* Dekorasi */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
         <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-500 rounded-full blur-3xl opacity-40"></div>

        <div className="container mx-auto relative z-10 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/20">
            <Users size={18} className="text-yellow-400" />
            <span className="font-bold text-sm tracking-wide text-yellow-50">Keluarga Besar</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg text-white">
            Jejak Alumni
          </h1>
          
          <p className="text-blue-100 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Kebanggaan kami melihat lulusan TK Negeri Pembina 02 Suruh tumbuh menjadi generasi emas yang sukses berkarya.
          </p>
        </div>
      </section>

      {/* ================= DAFTAR ALUMNI ================= */}
      <section className="py-20 px-4 bg-white relative">
         <div className="container mx-auto max-w-6xl">
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {alumni.map((alum, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex items-start gap-4 group">
                     
                     {/* Inisial Nama */}
                     <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner group-hover:scale-110 transition ${alum.color}`}>
                        {alum.name.charAt(0)}
                     </div>
                     
                     <div className="w-full">
                        <h4 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-blue-600 transition">{alum.name}</h4>
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

            {/* CTA GABUNG */}
            <div className="mt-16 bg-yellow-50 rounded-3xl p-8 text-center border-2 border-yellow-100">
               <Quote className="mx-auto text-yellow-400 mb-4" size={48} />
               <h3 className="text-2xl font-bold text-gray-800 mb-2">Apakah Anda Alumni Sekolah Ini?</h3>
               <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                  Kami ingin mendengar kabar kesuksesan Anda! Mari terhubung kembali untuk menginspirasi adik-adik kelas.
               </p>
               <Link href="/kontak" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg">
                  Hubungi Sekolah
               </Link>
            </div>

         </div>
      </section>

    </main>
  );
}