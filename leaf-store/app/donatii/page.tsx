// app/donatii/page.tsx
import { CreditCard, Building } from 'lucide-react';

export default function Donatii() {
  return (
    <div className="bg-paper min-h-screen pb-24 font-body">
      {/* Header Secțiune */}
      <div className="bg-forest py-24 text-center text-white relative overflow-hidden">
        {/* Pattern subtil de fundal (optional) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Susține Magazinul cu Frunze</h1>
          <p className="text-green-50 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Fiecare donație se transformă în produse pe raft. <br className="hidden md:block" />
            Tu umpli stocul, copiii cumpără cu frunze.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl shadow-forest/10 p-8 md:p-12 mb-12 border border-slate-100">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Metoda 1: Card Online */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-leaf/10 p-3 rounded-full text-forest">
                  <CreditCard size={28} />
                </div>
                <h2 className="text-2xl font-heading font-bold text-forest">Plătește cu Cardul</h2>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Cel mai rapid mod de a ajuta. Alege un pachet și donează securizat prin Stripe. Banii ajung instantaneu la noi.
              </p>
              <div className="space-y-4">
                <a href="#" className="block w-full text-center py-4 border-2 border-slate-100 rounded-xl hover:border-leaf hover:text-forest font-heading font-bold text-slate-700 transition duration-300 group">
                  Donează 25 RON <span className="text-sm font-normal text-slate-400 group-hover:text-leaf block md:inline md:ml-2 transition-colors">(Micul Dejun)</span>
                </a>
                <a href="#" className="block w-full text-center py-4 border-2 border-slate-100 rounded-xl hover:border-leaf hover:text-forest font-heading font-bold text-slate-700 transition duration-300 group">
                  Donează 50 RON <span className="text-sm font-normal text-slate-400 group-hover:text-leaf block md:inline md:ml-2 transition-colors">(Rechizite)</span>
                </a>
                <a href="#" className="block w-full text-center py-4 bg-forest hover:bg-forest-hover text-white rounded-xl font-heading font-bold transition shadow-lg shadow-green-900/20 transform hover:-translate-y-0.5">
                  Donează Orice Sumă
                </a>
              </div>
            </div>

            {/* Metoda 2: Transfer Bancar */}
            <div className="border-t md:border-t-0 md:border-l border-slate-100 pt-10 md:pt-0 md:pl-12">
               <div className="flex items-center gap-4 mb-6">
                {/* Folosim Gold/Earth aici pentru a sugera "Banca/Valoare" */}
                <div className="bg-gold/20 p-3 rounded-full text-earth">
                  <Building size={28} />
                </div>
                <h2 className="text-2xl font-heading font-bold text-forest">Transfer Bancar</h2>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Pentru donații mai mari sau sponsorizări de la companii (contracte de sponsorizare deductibile).
              </p>
              
              <div className="bg-paper p-6 rounded-xl border border-slate-200 space-y-5 text-sm font-mono text-slate-700 shadow-inner">
                <div>
                  <span className="block text-xs text-slate-400 uppercase tracking-wider mb-1 font-sans font-bold">Titular Cont</span>
                  <strong className="text-forest text-base">ASOCIAȚIA MAGAZINUL CU FRUNZE</strong>
                </div>
                <div>
                  <span className="block text-xs text-slate-400 uppercase tracking-wider mb-1 font-sans font-bold">Banca</span>
                  <strong>BANCA TRANSILVANIA</strong>
                </div>
                <div>
                  <span className="block text-xs text-slate-400 uppercase tracking-wider mb-1 font-sans font-bold">IBAN (RON)</span>
                  <strong className="select-all bg-white px-3 py-1.5 rounded border border-slate-100 block mt-1 text-slate-800">RO99 BTRL 0000 0000 0000 00XX</strong>
                </div>
                <div>
                  <span className="block text-xs text-slate-400 uppercase tracking-wider mb-1 font-sans font-bold">CIF</span>
                  <strong>12345678</strong>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4 italic">
                * Pentru contracte de sponsorizare, scrie-ne la <a href="mailto:contact@magazinulcufrunze.ro" className="text-leaf hover:text-forest transition-colors font-bold">contact@magazinulcufrunze.ro</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
