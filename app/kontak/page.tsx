import { MapPin, Phone, Mail, Clock, Send, Calendar, CheckCircle2 } from "lucide-react";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* ================= HEADER SECTION ================= */}
      <section className="bg-gradient-to-b from-yellow-50 to-white pt-16 pb-12 px-4 text-center relative overflow-hidden">
         {/* Dekorasi Ikon Smiley */}
         <div className="absolute top-10 left-10 opacity-50 animate-bounce">
            <div className="text-yellow-400 text-4xl">☺</div>
         </div>

        <div className="container mx-auto relative z-10">
          <div className="flex justify-center mb-2">
             <MapPin className="text-[#d4a017] w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Kami siap membantu menjawab pertanyaan dan memberikan informasi yang Anda butuhkan seputar pendaftaran dan kegiatan sekolah.
          </p>
        </div>

        {/* Dekorasi Anak Sekolah Kanan */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block w-24">
             <div className="text-gray-300 text-xs text-center">Ilustrasi<br/>Siswa</div>
        </div>
      </section>


      {/* ================= INFO CARDS SECTION ================= */}
      <section className="py-10 px-4 bg-white">
        <div className="container mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card Alamat */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
                 <div className="w-12 h-12 bg-yellow-100 text-[#d4a017] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin size={24} />
                 </div>
                 <h3 className="font-bold text-gray-900 mb-2">Alamat</h3>
                 <p className="text-sm text-gray-500">Jl. Raya Suruh No. 123, Suruh, Kabupaten Semarang, Jawa Tengah 50776</p>
              </div>

              {/* Card Telepon */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
                 <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone size={24} />
                 </div>
                 <h3 className="font-bold text-gray-900 mb-2">Telepon</h3>
                 <p className="text-sm text-gray-500">(0298) 123456</p>
                 <p className="text-sm text-gray-500">0812-3456-7890 (WA)</p>
              </div>

              {/* Card Email */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
                 <div className="w-12 h-12 bg-yellow-100 text-[#d4a017] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={24} />
                 </div>
                 <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                 <p className="text-sm text-gray-500">info@tkpembina02suruh.sch.id</p>
                 <p className="text-sm text-gray-500">ppdb@tkpembina02suruh.sch.id</p>
              </div>

              {/* Card Jam Operasional */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
                 <div className="w-12 h-12 bg-yellow-100 text-[#d4a017] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock size={24} />
                 </div>
                 <h3 className="font-bold text-gray-900 mb-2">Jam Operasional</h3>
                 <p className="text-sm text-gray-500">Senin - Jumat</p>
                 <p className="text-sm text-gray-500">07:00 - 15:00 WIB</p>
              </div>

           </div>
        </div>
      </section>


      {/* ================= MAPS & FORM SECTION ================= */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12">
           
           {/* Kolom Kiri: Peta & Akses */}
           <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Lokasi Kami</h2>
              
              {/* GOOGLE MAPS EMBED */}
              <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                 {/* Ganti URL di dalam src="" dengan Link Embed dari Google Maps milikmu */}
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.004666258082!2d110.36439437539461!3d-7.125454569881969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70890051886759%3A0x8bfbc67b2d237dc6!2sTK%20NEGERI%20PEMBINA%2002%20KEC%20UNGARAN%20BARAT!5e0!3m2!1sid!2sid!4v1765555691237!5m2!1sid!2sid"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                 </iframe>
              </div>

              {/* Box Info Akses */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                 <h4 className="font-bold text-gray-900 mb-3">Akses Lokasi:</h4>
                 <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                       10 menit dari Terminal Suruh
                    </li>
                    <li className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                       Dekat dengan Pasar Suruh
                    </li>
                    <li className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                       Area parkir luas tersedia
                    </li>
                 </ul>
              </div>
           </div>


           {/* Kolom Kanan: Form Pesan */}
           <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                 <form className="space-y-5">
                    
                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                       <input type="text" placeholder="Masukkan nama lengkap Anda" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition" />
                    </div>

                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                       <input type="email" placeholder="nama@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition" />
                    </div>

                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
                       <input type="tel" placeholder="08xx-xxxx-xxxx" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition" />
                    </div>

                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                       <textarea rows={4} placeholder="Tulis pesan Anda di sini..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-[#d4a017] hover:bg-[#b88b14] text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2">
                       <Send size={20} />
                       Kirim Pesan
                    </button>
                 </form>

                 {/* Callout Kunjungan */}
                 <div className="mt-8 bg-yellow-400 p-6 rounded-2xl text-white relative overflow-hidden">
                    <div className="relative z-10">
                       <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                          <Calendar size={20} /> Ingin berkunjung?
                       </h4>
                       <p className="text-yellow-50 text-sm mb-4">
                          Kami menyambut kunjungan Anda untuk melihat langsung fasilitas dan bertemu dengan tim kami. Hubungi kami terlebih dahulu.
                       </p>
                       <button className="bg-white text-[#d4a017] px-6 py-2 rounded-full text-sm font-bold shadow-sm hover:bg-gray-50 transition">
                          Buat Janji
                       </button>
                    </div>
                    {/* Dekorasi lingkaran background */}
                    <div className="absolute -right-5 -bottom-10 w-32 h-32 bg-white opacity-20 rounded-full"></div>
                 </div>

              </div>
           </div>

        </div>
      </section>

    </main>
  );
}