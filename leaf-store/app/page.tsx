"use client";
import React, { useState } from 'react';
import { Leaf, Heart, ShoppingBag, MapPin, ArrowRight, Menu, X } from 'lucide-react';

const LeafStore = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Produsele disponibile pentru donație
  const products = [
    {
      id: 1,
      name: "Pachetul Micul Dejun",
      price: 25,
      description: "Lapte, cereale și biscuiți pentru o săptămână.",
      icon: "🥛",
      color: "bg-blue-50"
    },
    {
      id: 2,
      name: "Rechizite Școlare",
      price: 35,
      description: "Caiete, pixuri și creioane colorate.",
      icon: "✏️",
      color: "bg-yellow-50"
    },
    {
      id: 3,
      name: "Dulciuri de Duminică",
      price: 15,
      description: "Ciocolată și fructe pentru bucurie pură.",
      icon: "🍫",
      color: "bg-pink-50"
    },
    {
      id: 4,
      name: "Coșul Familiei",
      price: 100,
      description: "Ulei, făină, zahăr și orez pentru o familie.",
      icon: "🏠",
      color: "bg-green-50"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-green-600 p-2 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-green-900">Magazinul cu Frunze</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#cum-functioneaza" className="text-slate-600 hover:text-green-700 font-medium transition">Cum funcționează</a>
              <a href="#magazin" className="text-slate-600 hover:text-green-700 font-medium transition">Umple Raftul</a>
              <a href="#poveste" className="text-slate-600 hover:text-green-700 font-medium transition">Povestea</a>
              <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-bold transition shadow-lg shadow-green-200">
                Donează Acum
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a href="#cum-functioneaza" className="block px-3 py-2 text-slate-600 font-medium">Cum funcționează</a>
              <a href="#magazin" className="block px-3 py-2 text-slate-600 font-medium">Umple Raftul</a>
              <a href="#poveste" className="block px-3 py-2 text-slate-600 font-medium">Povestea</a>
              <button className="w-full mt-4 bg-green-600 text-white px-5 py-3 rounded-lg font-bold">
                Donează Acum
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
            {/* Aici vom pune o imagine reala mai tarziu. Acum folosim un gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 opacity-70"></div>
            {/* Pattern decorativ abstract */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2"></span>
            Proiect Pilot: Lansare în Iunie 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
            La noi, banii cresc <br />
            <span className="text-green-600">în copaci.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10">
            Primul lanț de magazine din România unde copiii vulnerabili "plătesc" cu frunze, 
            iar tu asiguri stocul real prin donații transparente.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#magazin" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold text-lg transition shadow-xl shadow-green-200 flex items-center justify-center gap-2">
              <ShoppingBag size={20} />
              Umple un Raft
            </a>
            <a href="#poveste" className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-full font-bold text-lg transition flex items-center justify-center gap-2">
              Vezi Povestea
            </a>
          </div>
        </div>
      </div>

      {/* STATS / TRUST */}
      <div className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">0</div>
              <div className="text-slate-500 font-medium">Magazine Deschise</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">0</div>
              <div className="text-slate-500 font-medium">Frunze Colectate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">0</div>
              <div className="text-slate-500 font-medium">Copii Fericiți</div>
            </div>
          </div>
        </div>
      </div>

      {/* POVESTEA - Insert this after the Stats section */}
      <div id="poveste" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text Side */}
            <div className="mb-12 lg:mb-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold mb-6">
                <span className="mr-2">🍂</span>
                Originea Ideii
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Totul a început de la o joacă.
              </h2>
              <div className="prose prose-lg text-slate-600 space-y-6">
                <p>
                  Îți amintești când erai mic? Adunai frunze de nuc, pietre de râu sau petale de flori și le transformai în cea mai valoroasă monedă din lume. 
                  <span className="font-bold text-slate-900"> "Asta costă 2 frunze"</span>, spuneai. Și jocul era magic.
                </p>
                <p>
                  Pentru mii de copii din satele României, însă, lipsurile nu sunt o joacă. Sărăcia le fură nu doar mâncarea de pe masă, ci și demnitatea. 
                  Să primești "de pomană" poate fi rușinos.
                </p>
                <p className="border-l-4 border-green-500 pl-4 italic text-slate-800 bg-slate-50 py-2 pr-2">
                  "Am creat Magazinul cu Frunze pentru a le oferi ajutorul de care au nevoie, păstrându-le inocența. Aici ei nu cerșesc. Ei cumpără. Cu singura resursă pe care o au din belșug: natura."
                </p>
                <p>
                  Fiecare donație a ta devine un produs pe raft. Fiecare frunză a lor devine un zâmbet demn.
                </p>
              </div>
              
              <div className="mt-8 flex gap-4">
                 <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs">Foto</div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-xs">Foto</div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center text-xs">Foto</div>
                 </div>
                 <div className="flex items-center text-sm text-slate-500 font-medium">
                    Alătură-te celor care au donat deja
                 </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition duration-500">
                {/* Aici vom pune imaginea generata cu Nano Banana (Scenario 2) */}
                <div className="aspect-[4/5] bg-slate-200 w-full object-cover relative">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                        Imagine: Copil oferind o frunză
                    </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div id="cum-functioneaza" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Cum funcționează magia?</h2>
            <p className="mt-4 text-slate-600">Transformăm un gest simplu într-un lanț al bunătății.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center font-bold text-xl">1</div>
              <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">Tu Donezi Online</h3>
              <p className="text-slate-600">Cumperi produse virtuale de pe site-ul nostru. Banii tăi se transformă direct în stoc real de marfă.</p>
            </div>
             {/* Step 2 */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center font-bold text-xl">2</div>
              <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">Noi Aprovizionăm</h3>
              <p className="text-slate-600">Ducem alimente, rechizite și dulciuri în satele uitate de lume, aranjând totul ca într-un magazin adevărat.</p>
            </div>
             {/* Step 3 */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center font-bold text-xl">3</div>
              <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">Ei Plătesc cu Frunze</h3>
              <p className="text-slate-600">Copiii vin la magazin și "cumpără" ce au nevoie folosind frunze. Păstrăm demnitatea și bucuria jocului.</p>
            </div>
          </div>
        </div>
      </div>

      {/* DONATION STORE */}
      <div id="magazin" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Umple Rafturile</h2>
              <p className="mt-4 text-slate-600">Alege ce vrei să trimiți copiilor.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`h-48 ${product.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-6 h-10">{product.description}</p>
                  <button className="w-full py-3 bg-slate-900 hover:bg-green-600 text-white rounded-xl font-bold transition flex justify-between px-6 items-center">
                    <span>Donează</span>
                    <span>{product.price} RON</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-green-600 p-1.5 rounded-full">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white">Magazinul cu Frunze</span>
              </div>
              <p className="text-sm max-w-sm">
                Un proiect social care combate sărăcia prin educație și demnitate.
                Construit cu ❤️ în România.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400">Termeni și condiții</a></li>
                <li><a href="#" className="hover:text-green-400">Politica de confidențialitate</a></li>
                <li><a href="#" className="hover:text-green-400">Raport Transparență</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><MapPin size={16}/> Bragadiru, Ilfov</li>
                <li>contact@magazinulcufrunze.ro</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
            &copy; 2026 Magazinul cu Frunze. Toate drepturile rezervate.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LeafStore;
