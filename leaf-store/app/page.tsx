"use client";
import React from 'react';
import { ShoppingBag, ArrowRight, Target } from 'lucide-react';
import Link from 'next/link';

const LeafStore = () => {

  // Produsele disponibile pentru donație
  const products = [
    {
      id: 1,
      name: "Pachetul Micul Dejun",
      price: 25,
      description: "Lapte, cereale și biscuiți pentru o săptămână.",
      icon: "🥛",
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 2,
      name: "Rechizite Școlare",
      price: 35,
      description: "Caiete, pixuri și creioane colorate.",
      icon: "✏️",
      color: "bg-gold/20 text-earth"
    },
    {
      id: 3,
      name: "Dulciuri de Duminică",
      price: 15,
      description: "Ciocolată și fructe pentru bucurie pură.",
      icon: "🍫",
      color: "bg-pink-50 text-pink-600"
    },
    {
      id: 4,
      name: "Coșul Familiei",
      price: 100,
      description: "Ulei, făină, zahăr și orez pentru o familie.",
      icon: "🏠",
      color: "bg-leaf/20 text-forest"
    }
  ];

  // Configurare Obiectiv Pilot
  const targetAmount = 25000;
  const currentAmount = 0; // Aici vei actualiza suma manual sau prin API
  const progressPercent = Math.min((currentAmount / targetAmount) * 100, 100);

  return (
    <div className="font-body text-slate-700 bg-paper">
      
      {/* HERO SECTION */}
      <div className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
            {/* INSTRUCTIUNI IMAGINE FUNDAL HERO:
                1. Salveaza imaginea cu "mainile si painea pe masa" ca 'hero-bg.jpg' in folderul /public
                2. Decomenteaza linia de mai jos:
            */}
            {/* <img src="/hero-bg.jpg" className="w-full h-full object-cover opacity-20" alt="Sat romanesc" /> */}
            
            {/* Fallback gradient daca nu e poza */}
            <div className="absolute inset-0 bg-gradient-to-br from-paper via-white to-green-50 opacity-90"></div>
            
            {/* Elemente decorative abstracte */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-leaf/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-leaf/20 text-forest text-sm font-bold mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-leaf mr-2"></span>
            Proiect Pilot: Lansare în Iunie 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-forest tracking-tight mb-8 leading-tight">
            La noi, banii cresc <br />
            <span className="text-leaf relative inline-block">
              în copaci.
              {/* Linie decorativa sub text */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
            Primul lanț de magazine din România unde copiii vulnerabili "plătesc" cu frunze, 
            iar tu asiguri stocul real prin donații transparente.
          </p>
          
          {/* OBIECTIV PILOT (Nou adaugat) */}
          <div className="max-w-md mx-auto bg-white p-4 rounded-2xl shadow-lg border border-leaf/20 mb-10 relative overflow-hidden">
             <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-forest font-bold">
                    <Target size={20} className="text-red-500" />
                    <span>Obiectiv Pilot: 1 Sat / 1 Lună</span>
                </div>
                <span className="text-sm font-bold text-slate-500">{currentAmount} / {targetAmount.toLocaleString()} RON</span>
             </div>
             {/* Bara Progres */}
             <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div 
                    className="bg-gradient-to-r from-leaf to-forest h-3 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${progressPercent}%` }}
                ></div>
             </div>
             <p className="text-xs text-center mt-2 text-slate-400 font-medium">Ajută-ne să deschidem primul magazin.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donatii" className="px-8 py-4 bg-forest hover:bg-forest-hover text-white rounded-full font-bold text-lg transition shadow-xl shadow-green-900/10 flex items-center justify-center gap-2 transform hover:-translate-y-1">
              <ShoppingBag size={20} />
              Umple un Raft
            </Link>
            <a href="/povestea/" className="px-8 py-4 bg-white hover:bg-paper text-forest border border-slate-200 rounded-full font-bold text-lg transition flex items-center justify-center gap-2">
              Vezi Povestea
            </a>
          </div>
        </div>
      </div>

      {/* STATS / TRUST */}
      <div className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-4">
              <div className="text-5xl font-heading font-bold text-forest mb-2">0</div>
              <div className="text-earth font-medium uppercase tracking-wide text-sm">Magazine Deschise</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-heading font-bold text-leaf mb-2">0</div>
              <div className="text-earth font-medium uppercase tracking-wide text-sm">Frunze Colectate</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-heading font-bold text-gold mb-2">0</div>
              <div className="text-earth font-medium uppercase tracking-wide text-sm">Copii Fericiți</div>
            </div>
          </div>
        </div>
      </div>

      {/* POVESTEA */}
      <div id="poveste" className="py-24 bg-paper overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text Side */}
            <div className="mb-12 lg:mb-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gold/20 text-earth text-sm font-bold mb-6">
                <span className="mr-2">🍂</span>
                Originea Ideii
              </div>
              <h2 className="text-4xl font-heading font-bold text-forest mb-6">
                Totul a început de la o joacă.
              </h2>
              <div className="prose prose-lg text-slate-600 space-y-6">
                <p>
                  Îți amintești când erai mic? Adunai frunze de nuc, pietre de râu sau petale de flori și le transformai în cea mai valoroasă monedă din lume. 
                  <span className="font-bold text-forest"> "Asta costă 2 frunze"</span>, spuneai. Și jocul era magic.
                </p>
                <p>
                  Pentru mii de copii din satele României, însă, lipsurile nu sunt o joacă. Sărăcia le fură nu doar mâncarea de pe masă, ci și demnitatea. 
                  Să primești "de pomană" poate fi rușinos.
                </p>
                <blockquote className="border-l-4 border-leaf pl-4 italic text-forest bg-white py-4 px-4 rounded-r-lg shadow-sm">
                  "Am creat Magazinul cu Frunze pentru a le oferi ajutorul de care au nevoie, păstrându-le inocența. Aici ei nu cerșesc. Ei cumpără."
                </blockquote>
                <p>
                  Fiecare donație a ta devine un produs pe raft. Fiecare frunză a lor devine un zâmbet demn.
                </p>
              </div>
              
              <div className="mt-8">
                 <Link href="/transparenta" className="flex items-center text-leaf font-bold hover:text-forest transition-colors group">
                    Vezi Rapoartele de Transparență 
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform"/>
                 </Link>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white rotate-2 hover:rotate-0 transition duration-500">
                {/* INSTRUCTIUNI IMAGINE PORTRET COPIL:
                   1. Salveaza poza "portrait of village boy holding leaf" ca 'poveste-copil.jpg' in /public
                   2. Sterge div-ul placeholder si activeaza img-ul de mai jos:
                */}
                <div className="aspect-[4/5] bg-slate-200 w-full object-cover relative group">
                    {/* <img src="/poveste-copil.jpg" alt="Copil cu frunza" className="w-full h-full object-cover" /> */}
                    
                    {/* Placeholder Temporar */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100 flex-col gap-2">
                        <span>Inserare Imagine:</span>
                        <code className="text-xs bg-slate-200 px-2 py-1 rounded">/public/poveste-copil.jpg</code>
                    </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-leaf/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div id="cum-functioneaza" className="py-24 bg-white relative">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#166534 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest">Cum funcționează magia?</h2>
            <p className="mt-4 text-slate-600 text-lg">Transformăm un gest simplu într-un lanț al bunătății.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="bg-paper p-0 rounded-2xl shadow-sm border border-slate-100 relative group hover:-translate-y-2 transition duration-300 overflow-hidden">
                {/* INSTRUCTIUNI POZA PAS 1 (Laptop/Donatie): salveaza ca 'step-1.jpg' */}
                <div className="h-48 bg-slate-200 w-full relative">
                    {/* <img src="/step-1.jpg" className="w-full h-full object-cover" /> */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs">IMG: step-1.jpg</div>
                </div>
                <div className="p-8 relative">
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-forest text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:bg-leaf transition-colors">1</div>
                    <h3 className="text-xl font-heading font-bold text-forest mt-4 mb-3">Tu Donezi Online</h3>
                    <p className="text-slate-600">Cumperi produse virtuale de pe site-ul nostru. Banii tăi se transformă direct în stoc real de marfă.</p>
                </div>
            </div>

             {/* Step 2 */}
             <div className="bg-paper p-0 rounded-2xl shadow-sm border border-slate-100 relative group hover:-translate-y-2 transition duration-300 overflow-hidden">
                {/* INSTRUCTIUNI POZA PAS 2 (Duba/Transport): salveaza ca 'step-2.jpg' */}
                <div className="h-48 bg-slate-200 w-full relative">
                    {/* <img src="/step-2.jpg" className="w-full h-full object-cover" /> */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs">IMG: step-2.jpg</div>
                </div>
                <div className="p-8 relative">
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-forest text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:bg-leaf transition-colors">2</div>
                    <h3 className="text-xl font-heading font-bold text-forest mt-4 mb-3">Noi Aprovizionăm</h3>
                    <p className="text-slate-600">Ducem alimente, rechizite și dulciuri în satele uitate de lume, aranjând totul ca într-un magazin adevărat.</p>
                </div>
            </div>

             {/* Step 3 */}
             <div className="bg-paper p-0 rounded-2xl shadow-sm border border-slate-100 relative group hover:-translate-y-2 transition duration-300 overflow-hidden">
                {/* INSTRUCTIUNI POZA PAS 3 (Tranzactia/Maini): salveaza ca 'step-3.jpg' */}
                <div className="h-48 bg-slate-200 w-full relative">
                    {/* <img src="/step-3.jpg" className="w-full h-full object-cover" /> */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs">IMG: step-3.jpg</div>
                </div>
                <div className="p-8 relative">
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-forest text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:bg-leaf transition-colors">3</div>
                    <h3 className="text-xl font-heading font-bold text-forest mt-4 mb-3">Ei Plătesc cu Frunze</h3>
                    <p className="text-slate-600">Copiii vin la magazin și "cumpără" ce au nevoie folosind frunze. Păstrăm demnitatea și bucuria jocului.</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* DONATION STORE PREVIEW */}
      <div id="magazin" className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest">Umple Rafturile</h2>
              <p className="mt-4 text-slate-600">Alege ce vrei să trimiți copiilor.</p>
            </div>
            <Link href="/donatii" className="hidden md:flex text-leaf font-bold hover:text-forest items-center transition-colors">
                Vezi toate opțiunile <ArrowRight className="ml-2 h-4 w-4"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-leaf/30 transition-all duration-300">
                <div className={`h-48 ${product.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-forest mb-2">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-6 h-10 line-clamp-2">{product.description}</p>
                  <Link href="/donatii" className="w-full py-3 bg-forest hover:bg-leaf text-white rounded-xl font-bold transition flex justify-between px-6 items-center">
                    <span>Donează</span>
                    <span>{product.price} RON</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/donatii" className="inline-flex text-leaf font-bold hover:text-forest items-center">
                Vezi toate opțiunile <ArrowRight className="ml-2 h-4 w-4"/>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="bg-forest py-24 text-center relative overflow-hidden">
         {/* Elemente decorative fundal */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Nu ai bani de donat?</h2>
            <p className="text-green-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Nu-i nimic. Magazinul cu Frunze are nevoie de brațe puternice pentru sortat pachete, de șoferi sau de fotografi care să spună povestea.
            </p>
            <Link href="/implica-te" className="inline-block bg-gold hover:bg-yellow-400 text-forest px-10 py-4 rounded-full font-bold text-lg transition shadow-lg transform hover:-translate-y-1">
                Devino Voluntar
            </Link>
         </div>
      </div>

    </div>
  );
};

export default LeafStore;
