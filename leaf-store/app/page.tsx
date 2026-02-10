"use client";
import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
// Daca ai imagini locale, importa-le aici sau foloseste <Image src="..." /> direct

const LeafStore = () => {

  // Produsele disponibile pentru donație (Demo)
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
    <div className="font-sans text-slate-800">
      
      {/* NOTA: Header-ul (Navigation) este acum in layout.tsx, deci il scoatem de aici */}

      {/* HERO SECTION */}
      <div className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
            {/* Aici poti pune imaginea Hero (poza cu mana si frunza) cand o ai gata */}
            {/* <img src="/hero-bg.jpg" className="w-full h-full object-cover opacity-20" /> */}
            
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
            <Link href="/donatii" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold text-lg transition shadow-xl shadow-green-200 flex items-center justify-center gap-2">
              <ShoppingBag size={20} />
              Umple un Raft
            </Link>
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

      {/* POVESTEA */}
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
                 <Link href="/transparenta" className="flex items-center text-green-600 font-bold hover:underline">
                    Vezi Rapoartele de Transparență <ArrowRight className="ml-2 h-4 w-4"/>
                 </Link>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition duration-500">
                {/* Aici vei pune imaginea cu copilul tinand frunza la ochi */}
                <div className="aspect-[4/5] bg-slate-200 w-full object-cover relative group">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                        {/* Placeholder pana pui <Image /> */}
                        Imagine Copil (Portret)
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

      {/* DONATION STORE PREVIEW */}
      <div id="magazin" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Umple Rafturile</h2>
              <p className="mt-4 text-slate-600">Alege ce vrei să trimiți copiilor.</p>
            </div>
            <Link href="/donatii" className="hidden md:flex text-green-600 font-bold hover:underline items-center">
                Vezi toate opțiunile <ArrowRight className="ml-2 h-4 w-4"/>
            </Link>
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
                  <Link href="/donatii" className="w-full py-3 bg-slate-900 hover:bg-green-600 text-white rounded-xl font-bold transition flex justify-between px-6 items-center">
                    <span>Donează</span>
                    <span>{product.price} RON</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/donatii" className="inline-flex text-green-600 font-bold hover:underline items-center">
                Vezi toate opțiunile <ArrowRight className="ml-2 h-4 w-4"/>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="bg-green-600 py-24 text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nu ai bani de donat?</h2>
            <p className="text-green-100 text-lg mb-8">
                Nu-i nimic. Avem nevoie de oameni care să sorteze pachete, să conducă dubele cu marfă sau să facă poze.
            </p>
            <Link href="/implica-te" className="inline-block bg-white text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition shadow-lg">
                Devino Voluntar
            </Link>
         </div>
      </div>

      {/* NOTA: Footer-ul este acum in layout.tsx, deci il scoatem de aici */}

    </div>
  );
};

export default LeafStore;
