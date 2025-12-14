import { Clock, Sun, Users, BookOpen, Heart, Palette, Star, CalendarDays } from "lucide-react";

export default function JadwalPage() {
  
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
      
      {/* ================= HEADER SECTION ================= */}
      <section className="relative pt-24 pb-20 px-4 text-center overflow-hidden bg-blue-800">
         <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
         <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-40"></div>

        <div className="container mx-auto relative z-10 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/20">
            <CalendarDays size={18} className="text-yellow-400" />
            <span className="font-bold text-sm tracking-wide text-yellow-50">Rutinitas Sekolah</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg text-white">
            Jadwal Harian
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Membangun kedisiplinan dan kebiasaan baik melalui rutinitas yang terstruktur dan menyenangkan.
          </p>
        </div>
      </section>

      {/* ================= JADWAL HARIAN ================= */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-10">
             <Clock className="text-blue-600" size={32} />
             <h2 className="text-3xl font-bold text-gray-800">Senin - Kamis</h2>
          </div>

          <div className="relative mb-12">
             {/* Garis Tengah */}
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