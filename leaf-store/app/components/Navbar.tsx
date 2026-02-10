// app/components/Navbar.tsx
"use client"; 

import { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-slate-100 font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-forest p-2 rounded-full transition-transform group-hover:scale-105">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-forest group-hover:text-leaf transition-colors">
                Magazinul cu Frunze
              </span>
            </Link>
          </div>
          
          {/* DESKTOP MENU (Ascuns pe mobil și tablete - lg:flex) */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/povestea" className="text-slate-600 hover:text-forest font-bold transition-colors">
              Povestea
            </Link>
            
            {/* Link-uri Noi */}
            <Link href="/sponsorizari" className="text-slate-600 hover:text-forest font-bold transition-colors">
              Sponsorizări
            </Link>
            <Link href="/redirectioneaza" className="text-slate-600 hover:text-forest font-bold transition-colors">
              3.5%
            </Link>

            <Link href="/implica-te" className="text-slate-600 hover:text-forest font-bold transition-colors">
              Voluntari
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-forest font-bold transition-colors">
              Contact
            </Link>

            {/* Buton CTA Principal */}
            <Link href="/donatii" className="bg-forest hover:bg-leaf text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-forest/20 hover:shadow-leaf/30 transform hover:-translate-y-0.5">
              Donează
            </Link>
          </div>

          {/* MOBILE MENU BUTTON (Vizibil pe mobil și tablete - lg:hidden) */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-forest p-2 hover:bg-leaf/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl max-h-[90vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col font-heading">
            <Link 
              href="/povestea" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-4 py-3 text-slate-600 font-bold hover:bg-paper hover:text-forest rounded-xl transition-colors"
            >
              Povestea Noastră
            </Link>
            <Link 
              href="/#cum-functioneaza" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-4 py-3 text-slate-600 font-bold hover:bg-paper hover:text-forest rounded-xl transition-colors"
            >
              Cum funcționează
            </Link>
            
            <div className="my-2 border-t border-slate-100"></div>
            
            <Link 
              href="/sponsorizari" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-4 py-3 text-slate-600 font-bold hover:bg-paper hover:text-forest rounded-xl transition-colors"
            >
              Sponsorizări (Firme)
            </Link>
            <Link 
              href="/redirectioneaza" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-4 py-3 text-slate-600 font-bold hover:bg-paper hover:text-forest rounded-xl transition-colors"
            >
              Redirecționează 3.5%
            </Link>
            
            <div className="my-2 border-t border-slate-100"></div>

            <Link 
              href="/implica-te" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-4 py-3 text-slate-600 font-bold hover:bg-paper hover:text-forest rounded-xl transition-colors"
            >
              Voluntari
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-4 py-3 text-slate-600 font-bold hover:bg-paper hover:text-forest rounded-xl transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/donatii" 
              onClick={() => setIsMenuOpen(false)} 
              className="mt-4 block w-full text-center bg-forest hover:bg-leaf text-white px-5 py-4 rounded-xl font-bold transition-colors shadow-md"
            >
              Donează Acum
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
