import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-6 border-t-4 border-blue-400">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* KOLOM 1: KONTAK KAMI (Pindah ke Kiri) */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
                {/* Logo Gabungan (Logo Sekolah + Slogan di dalam gambar logo nanti) */}
               <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                  TK
               </div>
               <span className="text-xl font-bold text-blue-600 font-[Century Gothic]">
                 TK Negeri Pembina 02
               </span>
            </div>

            <h3 className="font-bold text-gray-800 text-lg">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm text-gray-600">
               {/* Link Google Maps */}
               <li>
                  <a href="https://maps.google.com/?q=Jl+Raya+Suruh" target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-blue-500 transition">
                    <MapPin size={20} className="text-blue-500 shrink-0" />
                    <span>Jl. Raya Suruh No. 123, Suruh, Jawa Tengah</span>
                  </a>
               </li>
               {/* Link Telepon/WA */}
               <li>
                  <a href="https://wa.me/628123456789" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-green-500 transition">
                    <Phone size={20} className="text-green-500 shrink-0" />
                    <span>(0298) 123456</span>
                  </a>
               </li>
               {/* Link Email */}
               <li>
                  <a href="mailto:info@tkpembina.sch.id" className="flex items-center gap-3 hover:text-orange-500 transition">
                    <Mail size={20} className="text-orange-500 shrink-0" />
                    <span>info@tkpembina.sch.id</span>
                  </a>
               </li>
            </ul>
            
            {/* Sosmed Icons */}
            <div className="flex gap-3 pt-2">
               <a href="#" className="w-9 h-9 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition"><Instagram size={18} /></a>
               <a href="#" className="w-9 h-9 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition"><Facebook size={18} /></a>
               <a href="#" className="w-9 h-9 bg-red-100 text-red-500 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition"><Youtube size={18} /></a>
            </div>
          </div>

          {/* KOLOM 2: PROGRAM UNGGULAN (Tengah) */}
          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-4">Program Unggulan</h3>
            <ul className="space-y-3 text-sm text-gray-600">
               {['Posyandu Integrasi', 'Outing Class', 'Peringatan Hari Besar', 'Drumband Cilik', 'Tari Tradisional'].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${idx % 2 === 0 ? 'bg-yellow-400' : 'bg-pink-400'}`}></div> 
                    <Link href="/program" className="hover:translate-x-1 transition duration-300 hover:text-blue-600">
                      {item}
                    </Link>
                 </li>
               ))}
            </ul>
          </div>

          {/* KOLOM 3: Output / Alumni (Fitur Baru) */}
          <div>
             <h3 className="font-bold text-gray-800 text-lg mb-4">Generasi Emas</h3>
             <p className="text-sm text-gray-600 mb-4">
               Kami berkomitmen mencetak lulusan yang berkarakter, cerdas, dan siap melangkah ke jenjang Sekolah Dasar.
             </p>
             <Link href="/profil" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition shadow-md">
                Lihat Profil Alumni
             </Link>
          </div>

        </div>

        {/* COPYRIGHT BARU */}
        <div className="border-t border-gray-100 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
           <p>© 2025 TK Negeri Pembina 02 Suruh. All rights reserved.</p>
           <div className="flex items-center gap-1 mt-2 md:mt-0">
              <span>Powered by</span>
              <span className="font-bold text-blue-600">PT Eintio</span>
           </div>
        </div>
      </div>
      
      {/* VERSI WEBSITE (Fixed di pojok kanan bawah layar) */}
      <div className="fixed bottom-2 right-2 bg-black/80 text-white text-[10px] px-2 py-1 rounded z-50 opacity-50 hover:opacity-100 transition cursor-default">
         v1.1.0 (Dev)
      </div>
    </footer>
  );
};

export default Footer;