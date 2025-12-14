import Image from "next/image";
import { 
  BookOpen, Clock, Heart, Users, 
  Sun, Star, Palette, Music 
} from "lucide-react";

export default function KurikulumPage() {
  
  // Data Jadwal Harian (Senin - Kamis)
  const dailySchedule = [
    { time: "07:00 - 08:00", activity: "Penyambutan & SOP Pagi", icon: Sun, color: "text-orange-500", bg: "bg-orange-100" },
    { time: "08:00 - 08:30", activity: "Senam / Circle Time / Berdoa", icon: Users, color: "text-blue-500", bg: "bg-blue-100" },
    { time: "08:30 - 09:30", activity: "Kegiatan Inti (Deep Learning)", icon: BookOpen, color: "text-pink-500", bg: "bg-pink-100" },
    { time: "09:30 - 10:00", activity: "Istirahat & Makan Bekal Sehat", icon: Heart, color: "text-red-500", bg: "bg-red-100" },
    { time: "10:00 - 10:45", activity: "Pengembangan Bakat / Ekstra", icon: Palette, color: "text-purple-500", bg: "bg-purple-100" },
    { time: "10:45 - 11:00", activity: "Refleksi & Pulang", icon: Star, color: "text-yellow-500", bg: "bg-yellow-100" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
           <Image src="/images/kurikulum.jpg" alt="Kurikulum Belajar" fill className="object-cover" />
           <div className="absolute inset-0 bg-yellow-900/60 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto relative z-10 px-4">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm mb-4 uppercase tracking-wide">
            Metode Pembelajaran
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Kurikulum Merdeka
          </h1>
          <p className="text-yellow-50 text-xl max-w-3xl mx-auto font-medium">
             Menerapkan pendekatan <strong>Deep Learning</strong> (Belajar Mendalam) <br/> untuk membangun pemahaman yang kuat dan karakter mandiri
          </p>
        </div>
      </section>

      {/* ================= ALUR KURIKULUM ================= */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-800">Struktur Pembelajaran</h2>
             <p className="text-gray-500 mt-2">Kami menggabungkan bermain dan belajar mendalam</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             {/* Pilar 1 */}
             <div className="bg-blue-50 rounded-3xl p-8 border-2 border-blue-100 hover:border-blue-300 transition-all text-center group">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition">
                   <BookOpen size={32} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Deep Learning</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                   Pembelajaran mendalam yang mengajak anak berpikir kritis, kreatif, dan reflektif dalam setiap kegiatan bermainnya.
                </p>
             </div>
             {/* Pilar 2 */}
             <div className="bg-yellow-50 rounded-3xl p-8 border-2 border-yellow-100 hover:border-yellow-300 transition-all text-center group">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition">
                   <Star size={32} className="text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Projek P5</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                   Projek Penguatan Profil Pelajar Pancasila untuk menanamkan karakter gotong royong dan cinta tanah air.
                </p>
             </div>
             {/* Pilar 3 */}
             <div className="bg-green-50 rounded-3xl p-8 border-2 border-green-100 hover:border-green-300 transition-all text-center group">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition">
                   <Music size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Ekstrakurikuler</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                   Pengembangan bakat melalui Drumband, Tari, dan Seni untuk melatih kepercayaan diri.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* ================= JADWAL HARIAN ================= */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-10">
             <Clock className="text-blue-600" size={32} />
             <h2 className="text-3xl font-bold text-gray-800">Jadwal Harian Siswa</h2>
          </div>

          <div className="relative mb-12">
             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-100 rounded-full"></div>
             <div className="space-y-6 md:space-y-0">
                {dailySchedule.map((item, index) => (
                   <div key={index} className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="hidden md:block w-5/12"></div>
                      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-200 rounded-full items-center justify-center z-10">
                         <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 relative z-20">
                         <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-full ${item.bg} ${item.color}`}>
                               <item.icon size={24} />
                            </div>
                            <div>
                               <span className="block text-sm font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-full w-fit mb-1">
                                  {item.time} WIB
                               </span>
                               <h4 className="font-bold text-gray-800 text-lg">
                                  {item.activity}
                               </h4>
                            </div>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          <div className="relative z-30 text-center bg-yellow-50 p-6 rounded-2xl text-sm text-yellow-900 border border-yellow-200 shadow-sm max-w-2xl mx-auto">
             <div className="font-bold mb-1 flex items-center justify-center gap-2">
                <Star size={16} className="text-yellow-600" fill="currentColor" /> 
                PENTING
             </div>
             Catatan: Jadwal hari <strong>Jumat</strong> menyesuaikan dengan kegiatan Ibadah dan Olahraga Bersama.
          </div>
        </div>
      </section>
    </main>
  );
}