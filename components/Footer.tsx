import Link from "next/link";
import Image from "next/image"; // IMPORT WAJIB
import { Facebook, Instagram, Mail, Phone, MapPin, Video } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 font-sans border-t-8 border-yellow-400">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 mb-12">
        
        {/* Kolom 1: Identitas & Logo Baru */}
        <div>
           <p className="text-gray-400 leading-relaxed mb-6">
              Mewujudkan generasi emas yang cerdas, kreatif, berakhlak mulia, dan cinta tanah air melalui Kurikulum Merdeka dengan pendekatan Deep Learning.
           </p>
        </div>

        {/* Kolom 2: Kontak (Data Real) */}
        <div>
           <h4 className="font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2 inline-block">Hubungi Kami</h4>
           <ul className="space-y-4 text-gray-300">
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

        {/* Kolom 3: Sosmed & Link (Data Real) */}
        <div>
           <h4 className="font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2 inline-block">Sosial Media</h4>
           <div className="flex gap-4 mb-8">
              <Link href="https://facebook.com/TekaNegeriKebowan" target="_blank" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition">
                 <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com/tkn_pembina02suruh" target="_blank" className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-500 transition">
                 <Instagram size={20} />
              </Link>
              <Link href="https://tiktok.com/@tekanegeripembina02suruh" target="_blank" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition">
                 <Video size={20} />
              </Link>
           </div>
           
           <h4 className="font-bold text-lg mb-4 text-white">Menu Cepat</h4>
           <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <Link href="/profil" className="hover:text-yellow-400 transition">Profil</Link>
              <Link href="/kurikulum" className="hover:text-yellow-400 transition">Kurikulum</Link>
              <Link href="/ppdb" className="hover:text-yellow-400 transition">PPDB</Link>
              <Link href="/galeri" className="hover:text-yellow-400 transition">Galeri</Link>
           </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
         © {new Date().getFullYear()} TK Negeri Pembina 02 Suruh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;