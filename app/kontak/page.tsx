import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Video, Clock } from "lucide-react";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      
      <section className="pt-24 pb-12 bg-blue-800 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">Hubungi Kami</h1>
        <p className="text-blue-100 max-w-2xl mx-auto px-4">
          Punya pertanyaan seputar pendaftaran atau kegiatan sekolah? Kami siap membantu Anda.
        </p>
      </section>

      <section className="py-16 px-4 container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* KONTAK ADMIN */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:border-blue-200 transition">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone size={32} />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">Telepon / WhatsApp</h3>
            <div className="text-gray-600 space-y-1">
              <p><strong>Bu Us:</strong> 0858-7032-9978</p>
              <p><strong>Bu Sari:</strong> 0895-3779-19364</p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:border-blue-200 transition">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail size={32} />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">Email Sekolah</h3>
            <p className="text-gray-600">tknpembinasuruh02@gmail.com</p>
          </div>

          {/* LOKASI */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:border-blue-200 transition">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">Alamat</h3>
            <p className="text-gray-600">Kecamatan Suruh, Kabupaten Semarang</p>
          </div>
        </div>

        {/* SOSIAL MEDIA */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-16 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Ikuti Kegiatan Kami di Sosial Media</h2>
            <div className="flex flex-wrap justify-center gap-6">
               <Link href="https://facebook.com/TekaNegeriKebowan" target="_blank" className="flex items-center gap-3 px-6 py-4 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-600 hover:text-white transition font-bold">
                  <Facebook size={24} /> Teka Negeri Kebowan
               </Link>
               <Link href="https://instagram.com/tkn_pembina02suruh" target="_blank" className="flex items-center gap-3 px-6 py-4 bg-pink-50 text-pink-600 rounded-xl hover:bg-pink-600 hover:text-white transition font-bold">
                  <Instagram size={24} /> @tkn_pembina02suruh
               </Link>
               <Link href="https://tiktok.com/@tekanegeripembina02suruh" target="_blank" className="flex items-center gap-3 px-6 py-4 bg-gray-50 text-black rounded-xl hover:bg-black hover:text-white transition font-bold">
                  <Video size={24} /> @tekanegeripembina02suruh
               </Link>
            </div>
        </div>

        {/* GOOGLE MAPS */}
        <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white h-[400px] relative bg-gray-200">
           {/* Ganti src iframe di bawah ini dengan link Embed Maps asli lokasi sekolah kamu */}
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.270685785348!2d110.543!3d-7.234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTQnMDIuNCJTIDExMMKwMzInMzQuOCJF!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid" 
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