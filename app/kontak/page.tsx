import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Video, MessageCircle, ExternalLink } from "lucide-react";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      
      {/* ================= HEADER SECTION (STYLE PPDB) ================= */}
      <section className="relative pt-24 pb-20 px-4 text-center overflow-hidden bg-blue-800">
         
         {/* Pattern Dekorasi (Sama dengan PPDB) */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
         
         {/* Blob Dekorasi (Sama dengan PPDB) */}
         <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-50"></div>
         <div className="absolute top-10 -left-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-40"></div>

        <div className="container mx-auto relative z-10 text-white">
          {/* Badge Kecil */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/20">
            <MessageCircle size={18} className="text-yellow-400" />
            <span className="font-bold text-sm tracking-wide text-yellow-50">Layanan Informasi</span>
          </div>
          
          {/* Judul Utama */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg text-white">
            Hubungi Kami
          </h1>
          
          {/* Sub-judul */}
          <p className="text-blue-100 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Punya pertanyaan seputar pendaftaran atau kegiatan sekolah? Kami siap membantu Anda.
          </p>
        </div>
      </section>

      {/* ================= KONTEN KONTAK ================= */}
      <section className="py-16 px-4 container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* 1. KARTU TELEPON / WA */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:border-blue-200 transition group">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
              <Phone size={32} />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-4">Chat WhatsApp</h3>
            
            <div className="flex flex-col gap-3">
              <a 
                href="https://wa.me/6285870329978" 
                target="_blank"
                className="flex items-center justify-center gap-2 bg-green-50 text-green-700 py-2 px-4 rounded-xl font-bold hover:bg-green-600 hover:text-white transition"
              >
                <MessageCircle size={18} /> Bu Us: 0858-7032-9978
              </a>

              <a 
                href="https://wa.me/62895377919364" 
                target="_blank"
                className="flex items-center justify-center gap-2 bg-green-50 text-green-700 py-2 px-4 rounded-xl font-bold hover:bg-green-600 hover:text-white transition"
              >
                <MessageCircle size={18} /> Bu Sari: 0895-3779-19364
              </a>
            </div>
          </div>

          {/* 2. KARTU EMAIL */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:border-blue-200 transition group">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
              <Mail size={32} />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">Email Sekolah</h3>
            <p className="text-gray-500 text-sm mb-4">Klik untuk mengirim email</p>
            
            <a 
               href="mailto:tknpembinasuruh02@gmail.com"
               className="inline-block text-orange-600 font-bold hover:underline hover:text-orange-700 break-all"
            >
               tknpembinasuruh02@gmail.com
            </a>
          </div>

          {/* 3. KARTU LOKASI */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:border-blue-200 transition group">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
              <MapPin size={32} />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">Lokasi Sekolah</h3>
            <p className="text-gray-600 mb-4">Kecamatan Suruh, Kabupaten Semarang</p>
            <a 
               href="https://maps.google.com/?q=TK+Negeri+Pembina+02+Suruh" 
               target="_blank"
               className="inline-flex items-center gap-1 text-green-600 font-bold hover:underline"
            >
               Lihat di Google Maps <ExternalLink size={14}/>
            </a>
          </div>
        </div>

        {/* SOSIAL MEDIA */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-16 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Ikuti Kegiatan Kami di Sosial Media</h2>
            <div className="flex flex-wrap justify-center gap-6">
               
               <Link href="https://facebook.com/TekaNegeriKebowan" target="_blank" className="flex items-center gap-3 px-6 py-4 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-600 hover:text-white transition font-bold shadow-sm hover:shadow-md">
                  <Facebook size={24} /> Teka Negeri Kebowan
               </Link>

               <Link href="https://instagram.com/tkn_pembina02suruh" target="_blank" className="flex items-center gap-3 px-6 py-4 bg-pink-50 text-pink-600 rounded-xl hover:bg-pink-600 hover:text-white transition font-bold shadow-sm hover:shadow-md">
                  <Instagram size={24} /> @tkn_pembina02suruh
               </Link>

               <Link href="https://tiktok.com/@tekanegeripembina02suruh" target="_blank" className="flex items-center gap-3 px-6 py-4 bg-black/5 text-black rounded-xl hover:bg-black hover:text-white transition font-bold shadow-sm hover:shadow-md">
                  <Video size={24} /> @tekanegeripembina02suruh
               </Link>

            </div>
        </div>

        {/* GOOGLE MAPS EMBED */}
        <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white h-[400px] relative bg-gray-200">
           {/* Silakan ganti src dengan link embed maps asli sekolah jika sudah ada */}
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15835.43862214301!2d110.5186!3d-7.2846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTcnMDUuMCJTIDExMMKwMzEnMDcuMCJF!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid" 
             width="100%" 
             height="100%" 
             style={{border:0}} 
             allowFullScreen 
             loading="lazy"
           ></iframe>
        </div>

      </section>
    </main>
  );
}