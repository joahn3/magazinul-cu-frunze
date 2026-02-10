// app/components/Navbar.tsx
"use client"; // <--- Aceasta linie e CRITICA pentru interactivitate

import { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-green-600 p-2 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-green-900">Magazinul cu Frunze</span>
            </Link>
          </div>
          
          {/* DESKTOP MENU (Ascuns pe mobil) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#cum-functioneaza" className="text-slate-600 hover:text-green-700 font-medium transition">Cum funcționează</Link>
            <Link href="/donatii" className="text-slate-600 hover:text-green-700 font-medium transition">Donații</Link>
            <Link href="/implica-te" className="text-slate-600 hover:text-green-700 font-medium transition">Voluntari</Link>
            <Link href="/contact" className="text-slate-600 hover:text-green-700 font-medium transition">Contact</Link>
            <Link href="/donatii" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-bold transition shadow-lg shadow-green-200">
              Donează
            </Link>
          </div>

          {/* MOBILE MENU BUTTON (Vizibil doar pe mobil) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link href="/#cum-functioneaza" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">Cum funcționează</Link>
            <Link href="/donatii" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">Donații</Link>
            <Link href="/implica-te" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">Voluntari</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">Contact</Link>
            <Link href="/donatii" onClick={() => setIsMenuOpen(false)} className="mt-4 block w-full text-center bg-green-600 text-white px-5 py-3 rounded-lg font-bold">
              Donează Acum
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
