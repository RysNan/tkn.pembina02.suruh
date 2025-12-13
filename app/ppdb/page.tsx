import Image from "next/image";
import Link from "next/link";
import { 
  FileText, ClipboardCheck, UserSearch, Megaphone, 
  Calendar, CheckCircle2, DollarSign, Phone, Download, MapPin 
} from "lucide-react";

export default function PpdbPage() {
  
  // Data Alur Pendaftaran (Teks tetap ada sebagai pelengkap gambar)
  const steps = [
    { num: "01", title: "Isi Formulir", desc: "Ambil formulir di sekolah atau download online." },
    { num: "02", title: "Serahkan Berkas", desc: "Kembalikan formulir beserta syarat dokumen." },
    { num: "03", title: "Observasi", desc: "Anak mengikuti observasi bermain sederhana." },
    { num: "04", title: "Daftar Ulang", desc: "Pembayaran administrasi & pengambilan seragam." },
  ];

  // Data Biaya
  const costs = [
    { item: "Pendaftaran", price: "Rp 200.000", note: "Sekali bayar" },
    { item: "Uang Pangkal", price: "Rp 1.500.000", note: "Pengembangan sarana" },
    { item: "SPP Bulanan", price: "Rp 300.000", note: "Termasuk makan sehat" },
    { item: "Seragam (4 Stel)", price: "Rp 800.000", note: "Batik, Olahraga, Kotak, Muslim" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* ================= HEADER SECTION (High Contrast) ================= */}
      {/* Ganti bg-cerah-biru jadi bg-blue-800 (Biru Tua) agar teks putih JELAS */}
      <section className="relative pt-24 pb-20 px-4 text-center overflow-hidden bg-blue-800">
         
         {/* Pattern Dekorasi (Dibuat samar) */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
         
         {/* Blob Dekorasi (Warna diganti agar tidak tabrakan) */}
         <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-50"></div>
         <div className="absolute top-10 -left-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-40"></div>

        <div className="container mx-auto relative z-10 text-white">
          {/* Badge Tahun Ajaran */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/20">
            <Calendar size={18} className="text-yellow-400" />
            <span className="font-bold text-sm tracking-wide text-yellow-50">Tahun Ajaran 2025/2026</span>
          </div>
          
          {/* Judul Utama (Putih Tebal di atas Biru Tua = Sangat Jelas) */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg text-white">
            Pendaftaran Peserta Didik Baru
          </h1>
          
          {/* Sub-judul */}
          <p className="text-blue-100 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Bergabunglah bersama keluarga besar TK Negeri Pembina 02 Suruh. Kuota terbatas!
          </p>
        </div>
      </section>


      {/* ================= SYARAT & KETENTUAN (Card Style) ================= */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start">
          
          {/* Kolom Kiri: Ilustrasi Foto */}
          <div className="relative">
             <div className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition duration-500">
                {/* Placeholder Foto Suasana Pendaftaran */}
                <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-400 font-bold text-center p-4">
                   FOTO SUASANA<br/>PENDAFTARAN / ANAK SEKOLAH
                </div>
                {/* <Image src="/images/ppdb-suasana.jpg" fill className="object-cover" alt="Suasana PPDB" /> */}
             </div>
             {/* Dekorasi Sticker */}
             <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-blue-900 px-6 py-4 rounded-xl shadow-lg font-bold text-lg transform -rotate-6">
                ✨ Kuota Terbatas!
             </div>
          </div>

          {/* Kolom Kanan: Teks Persyaratan */}
          <div className="space-y-8">
             <div>
               <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={32} /> Syarat Dokumen
               </h2>
               <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <ul className="space-y-3">
                     {[
                        "Fotocopy Akta Kelahiran (2 lbr)",
                        "Fotocopy Kartu Keluarga (2 lbr)",
                        "Fotocopy KTP Orang Tua (2 lbr)",
                        "Pas Foto Anak 3x4 (4 lbr)",
                        "Fotocopy Kartu Imunisasi/KIA"
                     ].map((req, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                           <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                           {req}
                        </li>
                     ))}
                  </ul>
               </div>
             </div>

             <div>
               <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <UserSearch className="text-purple-500" size={32} /> Ketentuan Usia
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
          </div>

        </div>
      </section>


      {/* ================= ALUR PENDAFTARAN (Revisi: Gambar Alur) ================= */}
      <section className="py-20 px-4 bg-yellow-50 relative overflow-hidden">
         <div className="container mx-auto">
            <div className="text-center mb-12">
               <span className="inline-block px-4 py-1 rounded-full bg-white border border-yellow-300 text-yellow-600 font-bold text-sm mb-3 uppercase tracking-wide">Proses Mudah</span>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Alur Pendaftaran</h2>
            </div>

            {/* AREA GAMBAR ALUR (Sesuai Revisi Poin 5) */}
            <div className="max-w-5xl mx-auto bg-white p-4 md:p-8 rounded-3xl shadow-xl border-4 border-white mb-12">
               {/* Placeholder Gambar Alur */}
               <div className="aspect-[16/9] md:aspect-[21/9] bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden group">
                  <div className="text-center p-6">
                     <FileText size={48} className="mx-auto text-gray-300 mb-2" />
                     <p className="text-gray-400 font-bold text-lg">TEMPAT GAMBAR ALUR / INFOGRAFIS</p>
                     <p className="text-gray-400 text-sm">(Upload desain alur pendaftaran di sini)</p>
                  </div>
                  {/* <Image src="/images/alur-ppdb.jpg" fill className="object-contain" alt="Alur Pendaftaran" /> */}
               </div>
            </div>

            {/* Fallback: Teks Alur (Tetap ada sebagai penjelasan jika gambar belum load/untuk SEO) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
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


      {/* ================= BIAYA PENDIDIKAN (Tabel Bersih) ================= */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">Estimasi Biaya</h2>
              <p className="text-gray-500 mt-2">Investasi pendidikan terbaik untuk buah hati Anda</p>
           </div>

           <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-blue-600 p-4 text-center text-white text-sm font-bold tracking-wider uppercase">
                 Tahun Ajaran 2025/2026
              </div>
              <div className="divide-y divide-gray-100">
                 {costs.map((cost, idx) => (
                    <div key={idx} className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 hover:bg-blue-50/50 transition">
                       <div className="text-center sm:text-left">
                          <h4 className="text-lg font-bold text-gray-800">{cost.item}</h4>
                          <p className="text-sm text-gray-500">{cost.note}</p>
                       </div>
                       <div className="text-xl font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
                          {cost.price}
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>


      {/* ================= CTA & LOKASI (Termasuk area Gmaps user) ================= */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-center relative overflow-hidden">
         <div className="container mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Siap Bergabung?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
               Segera daftarkan putra-putri Anda sebelum kuota terpenuhi. Kami menantikan kehadiran Anda di TK Negeri Pembina 02 Suruh.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
               <Link 
                  href="/kontak" 
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-extrabold text-lg shadow-lg hover:bg-yellow-300 transition hover:scale-105 flex items-center justify-center gap-2"
               >
                  <MapPin size={22} />
                  Datang ke Sekolah
               </Link>
               
               <button 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2"
               >
                  <Download size={22} />
                  Download Formulir
               </button>
            </div>

            {/* =========================================================
                AREA GMAPS (Jika user ingin menampilkan peta di sini)
                Silakan tempel <iframe> Gmaps kamu di bawah div ini jika perlu.
                Tapi karena sudah ada di Footer/Kontak, tombol "Datang ke Sekolah" di atas sudah cukup.
            =========================================================== */}

         </div>
      </section>

    </main>
  );
}