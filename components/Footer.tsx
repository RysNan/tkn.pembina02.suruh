import Link from "next/link";
import Image from "next/image"; 
import { Facebook, Instagram, Mail, Phone, MapPin, Video } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 font-sans border-t-8 border-yellow-400">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 mb-12">

        {/* KOLOM 1: IDENTITAS & LOGO */}
        <div>
           <p className="text-gray-400 leading-relaxed text-sm">
              Mewujudkan generasi emas yang cerdas, kreatif, berakhlak mulia, dan cinta tanah air melalui Kurikulum Merdeka dengan pendekatan Deep Learning.
           </p>
        </div>

        {/* KOLOM 2: KONTAK */}
        <div>
           <h4 className="font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2 inline-block">Hubungi Kami</h4>
           <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                 <MapPin className="text-yellow-400 shrink-0" size={20} />
                 <span>Kecamatan Suruh, Kabupaten Semarang</span>
              </li>
              <li className="flex items-center gap-3">
                 <Phone className="text-yellow-400 shrink-0" size={20} />
                 <span>0858-7032-9978 (Bu Us)</span>
              </li>
              <li className="flex items-center gap-3">
                 <Mail className="text-yellow-400 shrink-0" size={20} />
                 <span>tknpembinasuruh02@gmail.com</span>
              </li>
           </ul>
        </div>

        {/* KOLOM 3: SOSMED */}
        <div>
           <h4 className="font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2 inline-block">Ikuti Kami</h4>
           <div className="flex gap-4 mb-6">
              <Link href="https://facebook.com/TekaNegeriKebowan" target="_blank" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition shadow-lg hover:scale-110">
                 <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com/tkn_pembina02suruh" target="_blank" className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-500 transition shadow-lg hover:scale-110">
                 <Instagram size={20} />
              </Link>
              <Link href="https://tiktok.com/@tekanegeripembina02suruh" target="_blank" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition shadow-lg hover:scale-110">
                 <Video size={20} />
              </Link>
           </div>
           
           <div className="text-xs text-gray-500">
              <p>Mari berteman dan melihat keseruan kegiatan siswa kami di sosial media.</p>
           </div>
        </div>

      </div>

      {/* COPYRIGHT & VERSION SECTION (CENTERED) */}
      <div className="border-t border-gray-800 pt-8 mt-8">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center gap-6">
           
           {/* Copyright & Powered By */}
           <div className="text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} TK Negeri Pembina 02 Suruh. All rights reserved.</p>
              <p className="mt-2 text-gray-600">
                 Powered by{' '}
                 <Link 
                   href="https://eintio.vercel.app/" 
                   target="_blank"
                   className="font-bold text-gray-400 hover:text-yellow-400 transition"
                 >
                   PT Eintio Academic & Technology
                 </Link>
              </p>
           </div>

           {/* Version Badge */}
           <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
              <span className="text-xs text-gray-400 font-mono">Version 1.0.0</span>
           </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;