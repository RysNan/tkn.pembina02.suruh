import Image from "next/image";
import Link from "next/link";
import { BookOpen, Star, Music, ArrowRight, Clock } from "lucide-react";

export default function KurikulumPage() {
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
             Menerapkan pendekatan <strong>Deep Learning</strong> (Belajar Mendalam) untuk membangun pemahaman yang kuat dan karakter mandiri.
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

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
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

          {/* CTA LIHAT JADWAL */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
             <div className="relative z-10">
                <Clock className="mx-auto mb-4 text-yellow-300" size={48} />
                <h2 className="text-3xl font-bold mb-4">Ingin Tahu Kegiatan Sehari-hari?</h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                   Kami memiliki jadwal rutinitas yang terstruktur untuk melatih kedisiplinan dan kemandirian siswa.
                </p>
                <Link href="/jadwal" className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition transform hover:-translate-y-1 shadow-lg">
                   Lihat Jadwal Harian <ArrowRight size={20} />
                </Link>
             </div>
             {/* Dekorasi Background */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>

        </div>
      </section>
    </main>
  );
}