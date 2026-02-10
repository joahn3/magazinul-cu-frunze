// app/transparenta/page.tsx
import { FileText, TrendingUp, CheckCircle } from 'lucide-react';

export default function Transparency() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Transparență Radicală</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Încrederea ta este moneda noastră cea mai valoroasă. Aici poți vedea exact unde ajunge fiecare leu donat.
        </p>
      </div>

      {/* Grid Statistici */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
          <div className="mx-auto bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-600 mb-4">
            <TrendingUp size={24} />
          </div>
          <h3 className="text-lg font-bold">Total Colectat</h3>
          <p className="text-3xl font-bold text-slate-900 mt-2">0 RON</p>
          <p className="text-sm text-slate-500">Actualizat: Azi</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
          <div className="mx-auto bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4">
            <CheckCircle size={24} />
          </div>
          <h3 className="text-lg font-bold">Fonduri Utilizate</h3>
          <p className="text-3xl font-bold text-slate-900 mt-2">0 RON</p>
          <p className="text-sm text-slate-500">Investite în stocuri</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
            <div className="mx-auto bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center text-yellow-600 mb-4">
            <FileText size={24} />
            </div>
            <h3 className="text-lg font-bold">Rapoarte</h3>
            <p className="text-3xl font-bold text-slate-900 mt-2">0</p>
            <p className="text-sm text-slate-500">Documente disponibile</p>
        </div>
      </div>

      {/* Placeholder Rapoarte */}
      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-2xl font-bold mb-6">Jurnal de Bord</h2>
        <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-slate-200 flex justify-between items-center">
                <div>
                    <h4 className="font-bold">Lansarea Proiectului Pilot</h4>
                    <p className="text-sm text-slate-500">În curs de desfășurare • Februarie 2026</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-bold">În Lucru</span>
            </div>
            {/* Aici vei adauga rapoarte pdf sau linkuri catre video */}
        </div>
        <p className="mt-8 text-center text-slate-500 text-sm">
            Primul raport financiar detaliat va fi disponibil după prima lună de activitate a magazinului pilot.
        </p>
      </div>
    </div>
  );
}
