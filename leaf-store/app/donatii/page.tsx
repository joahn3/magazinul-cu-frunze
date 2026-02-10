import { CreditCard, Building, Smartphone } from 'lucide-react';

export default function Donatii() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Secțiune */}
      <div className="bg-green-600 py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Susține Magazinul cu Frunze</h1>
        <p className="text-green-100 text-xl max-w-2xl mx-auto px-4">
          Fiecare donație se transformă în produse pe raft. Tu umpli stocul, copiii cumpără cu frunze.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Metoda 1: Card Online */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <CreditCard size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Plătește cu Cardul</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Cel mai rapid mod de a ajuta. Alege un pachet și donează securizat prin Stripe.
              </p>
              <div className="space-y-4">
                <a href="#" className="block w-full text-center py-3 border-2 border-slate-200 rounded-xl hover:border-green-500 hover:text-green-600 font-bold transition">
                  Donează 25 RON (Micul Dejun)
                </a>
                <a href="#" className="block w-full text-center py-3 border-2 border-slate-200 rounded-xl hover:border-green-500 hover:text-green-600 font-bold transition">
                  Donează 50 RON (Rechizite)
                </a>
                <a href="#" className="block w-full text-center py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 font-bold transition shadow-lg shadow-green-200">
                  Donează Orice Sumă
                </a>
              </div>
            </div>

            {/* Metoda 2: Transfer Bancar */}
            <div className="border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0 md:pl-12">
               <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Building size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Transfer Bancar</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Pentru donații mai mari sau sponsorizări de la companii (deductibile).
              </p>
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4 text-sm font-mono text-slate-700">
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">Titular Cont</span>
                  <strong>ASOCIAȚIA MAGAZINUL CU FRUNZE</strong>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">Banca</span>
                  <strong>BANCA TRANSILVANIA</strong>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">IBAN (RON)</span>
                  <strong className="select-all">RO99 BTRL 0000 0000 0000 00XX</strong>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">CIF</span>
                  <strong>12345678</strong>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                * Pentru contracte de sponsorizare, scrie-ne la contact@magazinulcufrunze.ro
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
