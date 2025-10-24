import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-2xl font-bold mb-3">Milarian</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Platform direktori UMKM yang membantu Anda menemukan bisnis lokal terbaik di seluruh Bandung. 
            Dukung produk lokal, temukan peluang baru, dan tumbuh bersama UMKM Bandung.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-accent transition">Beranda</a></li>
            <li><a href="/tentang" className="hover:text-accent transition">Tentang Kami</a></li>
            <li><a href="/kategori" className="hover:text-accent transition">Kategori</a></li>
            <li><a href="/kontak" className="hover:text-accent transition">Kontak</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-3">Bantuan</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/faq" className="hover:text-accent transition">FAQ</a></li>
            <li><a href="/syarat" className="hover:text-accent transition">Syarat & Ketentuan</a></li>
            <li><a href="/privasi" className="hover:text-accent transition">Kebijakan Privasi</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-3">Ikuti Kami</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>


      <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Milarian</span>. Semua hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
