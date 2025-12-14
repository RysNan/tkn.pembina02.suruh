import Image from "next/image";
import Link from "next/link";
import { 
  FileText, UserSearch, Calendar, CheckCircle2, 
  MapPin, MessageCircle, DollarSign 
} from "lucide-react";

export default function PpdbPage() {
  
  // Data Alur Pendaftaran
  const steps = [
    { num: "01", title: "Cek Jadwal & Gelombang", desc: "Pastikan Anda mengetahui jadwal pendaftaran yang sedang dibuka." },
    { num: "02", title: "Siapkan Syarat & Dokumen", desc: "Lengkapi formulir dan berkas persyaratan yang dibutuhkan." },
    { num: "03", title: "Hubungi & Daftar", desc: "Hubungi kontak kami atau datang langsung untuk verifikasi." },
  ];

  // Data Biaya
  const costs = [
    { item: "Pendaftaran", price: "Rp 25.000", note: "Sekali bayar saat pendaftaran" },
    { item: "SPP Perbulan", price: "Rp 50.000", note: "Dibayar tiap 1 bulan sekali" },
    { item: "Seragam 6 Setel Putra", price: "Rp 600.000", note: "Biru Putih, Batik, Identitas, Hem, Adat, Olahraga" },
    { item: "Seragam 6 Setel Putri", price: "Rp 650.000", note: "Biru Putih, Batik, Identitas, Hem, Adat, Olahraga" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* ================= HEADER SECTION ================= */}
      <section className="relative pt-24 pb-20 px-4 text-center overflow-hidden bg-blue-800">
         <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
         <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-50"></div>
         <div className="absolute top-10 -left-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-40"></div>

        <div className="container mx-auto relative z-10 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/20">
            <Calendar size={18} className="text-yellow-400" />
            <span className="font-bold text-sm tracking-wide text-yellow-50">Tahun Ajaran 2025/2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg text-white">
            Pendaftaran Peserta Didik Baru
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Bergabunglah bersama keluarga besar TK Negeri Pembina 02 Suruh.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT (SYARAT, USIA, BIAYA) ================= */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start">
          
          {/* KOLOM KIRI: FOTO (Sticky agar tetap terlihat saat scroll) */}
          <div className="relative md:sticky md:top-24">
             <div className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition duration-500 relative">
                <Image src="/images/ppdb-suasana.jpg" fill className="object-cover" alt="Suasana PPDB" />
             </div>
             <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-blue-900 px-6 py-4 rounded-xl shadow-lg font-bold text-lg transform -rotate-6 z-10">
                ✨ Kuota Terbatas!
             </div>
          </div>

          {/* KOLOM KANAN: SYARAT, USIA, DAN BIAYA (DIGABUNG) */}
          <div className="space-y-10">
             
             {/* 1. Syarat Dokumen */}
             <div>
               <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={28} /> Syarat Dokumen
               </h2>
               <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <ul className="space-y-3">
                     {[
                        "Mengisi Formulir Pendaftaran",
                        "Fotocopy Akta Kelahiran",
                        "Fotocopy Kartu Keluarga",
                        "Fotocopy KTP Orang Tua",
                        "Fotocopy KMS, KIP/SKTM"
                     ].map((req, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                           <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold shrink-0">✓</div>
                           {req}
                        </li>
                     ))}
                  </ul>
               </div>
             </div>

             {/* 2. Ketentuan Usia */}
             <div>
               <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <UserSearch className="text-purple-500" size={28} /> Ketentuan Usia
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100">
                     <span className="block text-orange-600 font-bold text-lg mb-1">Kelompok A</span>
                     <p className="text-gray-600 text-sm">Usia 4 - 5 Tahun</p>
                  </div>
                  <div className="bg-pink-50 p-5 rounded-2xl border border-pink-100">
                     <span className="block text-pink-600 font-bold text-lg mb-1">Kelompok B</span>
                     <p className="text-gray-600 text-sm">Usia 5 - 6 Tahun</p>
                  </div>
               </div>
             </div>

             {/* 3. Estimasi Biaya (PINDAH KE SINI) */}
             <div>
               <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <DollarSign className="text-blue-500" size={28} /> Rincian Biaya
               </h2>
               <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
                  <div className="bg-blue-600 px-6 py-3 text-white text-xs font-bold uppercase tracking-wider">
                     Tahun Ajaran 2025/2026
                  </div>
                  <div className="divide-y divide-gray-100">
                     {costs.map((cost, idx) => (
                        <div key={idx} className="p-5 hover:bg-blue-50/30 transition">
                           <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-gray-800 text-sm">{cost.item}</h4>
                              <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded text-sm">
                                 {cost.price}
                              </span>
                           </div>
                           <p className="text-xs text-gray-500 leading-snug">{cost.note}</p>
                        </div>
                     ))}
                  </div>
               </div>
             </div>

          </div>
        </div>
      </section>

      {/* ================= ALUR PENDAFTARAN (TETAP DI BAWAH) ================= */}
      <section className="py-20 px-4 bg-yellow-50 relative overflow-hidden">
         <div className="container mx-auto">
            <div className="text-center mb-12">
               <span className="inline-block px-4 py-1 rounded-full bg-white border border-yellow-300 text-yellow-600 font-bold text-sm mb-3 uppercase tracking-wide">Proses Mudah</span>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Alur Pendaftaran</h2>
            </div>

            {/* Gambar Alur */}
            <div className="max-w-5xl mx-auto bg-white p-2 md:p-4 rounded-3xl shadow-xl border-4 border-white mb-12">
               <div className="aspect-[16/9] md:aspect-[21/9] bg-gray-50 rounded-xl overflow-hidden relative">
                  <Image src="/images/alur.jpg" fill className="object-contain" alt="Infografis Alur Pendaftaran" />
               </div>
            </div>

            {/* Teks Alur */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
               {steps.map((step, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition text-center border-b-4 border-yellow-400">
                     <div className="text-4xl font-extrabold text-yellow-200 mb-2">{step.num}</div>
                     <h3 className="font-bold text-gray-800 text-lg mb-2">{step.title}</h3>
                     <p className="text-gray-500 text-sm leading-snug">{step.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================= CTA: DATANG & KONTAK ================= */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-center relative overflow-hidden">
         <div className="container mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Siap Bergabung?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
               Silakan pilih metode pendaftaran yang paling memudahkan Anda.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               
               {/* PILIHAN 1: KONTAK (ONLINE) */}
               <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                     <MessageCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Pendaftaran Online</h3>
                  <p className="text-blue-100 text-sm mb-6">Chat panitia PPDB untuk mendaftar.</p>
                  
                  <div className="flex flex-col gap-3 w-full">
                     <a href="https://wa.me/6285870329978" target="_blank" className="w-full bg-white text-green-700 py-3 rounded-xl font-bold hover:bg-green-50 transition flex items-center justify-center gap-2">
                        Chat Bu Us
                     </a>
                     <a href="https://wa.me/62895377919364" target="_blank" className="w-full bg-white text-green-700 py-3 rounded-xl font-bold hover:bg-green-50 transition flex items-center justify-center gap-2">
                        Chat Bu Sari
                     </a>
                  </div>
               </div>

               {/* PILIHAN 2: DATANG KE SEKOLAH (OFFLINE) */}
               <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl flex flex-col items-center">
                  <div className="w-16 h-16 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center mb-4 shadow-lg">
                     <MapPin size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Datang ke Sekolah</h3>
                  <p className="text-blue-100 text-sm mb-6">Ambil formulir dan lihat fasilitas sekolah.</p>
                  
                  <div className="w-full mt-auto">
                     <Link 
                        href="/kontak" 
                        className="w-full bg-yellow-400 text-blue-900 py-3 rounded-xl font-bold hover:bg-yellow-300 transition flex items-center justify-center gap-2 shadow-lg"
                     >
                        Lihat Lokasi Sekolah
                     </Link>
                  </div>
               </div>

            </div>
         </div>
      </section>

    </main>
  );
}