// app/transparenta/page.tsx
import { FileText, TrendingUp, CheckCircle, Receipt, Image as ImageIcon, ShoppingCart, Truck } from 'lucide-react';

export default function Transparency() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-paper min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-forest mb-6">
          Transparență Radicală
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-body leading-relaxed">
          Încrederea ta este moneda noastră cea mai valoroasă. <br className="hidden md:block"/>
          Aici poți vedea exact unde ajunge fiecare leu donat.
        </p>
      </div>

      {/* Grid Statistici */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Card 1: Total Colectat */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition duration-300">
          <div className="mx-auto bg-leaf/10 w-16 h-16 rounded-full flex items-center justify-center text-forest mb-6">
            <TrendingUp size={28} />
          </div>
          <h3 className="text-lg font-heading font-bold text-slate-500 uppercase tracking-wider">Total Colectat</h3>
          <p className="text-4xl font-heading font-bold text-forest mt-2">0 RON</p>
          <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-xs text-slate-500 font-bold border border-slate-100">
            Actualizat: Azi
          </div>
        </div>
        
        {/* Card 2: Fonduri Utilizate */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition duration-300">
          <div className="mx-auto bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center text-earth mb-6">
            <CheckCircle size={28} />
          </div>
          <h3 className="text-lg font-heading font-bold text-slate-500 uppercase tracking-wider">Fonduri Utilizate</h3>
          <p className="text-4xl font-heading font-bold text-earth mt-2">0 RON</p>
          <p className="text-sm text-slate-500 mt-4 font-medium">Investite în stocuri & logistică</p>
        </div>

        {/* Card 3: Rapoarte */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition duration-300">
            <div className="mx-auto bg-paper w-16 h-16 rounded-full flex items-center justify-center text-slate-600 mb-6 border border-slate-200">
            <FileText size={28} />
            </div>
            <h3 className="text-lg font-heading font-bold text-slate-500 uppercase tracking-wider">Rapoarte</h3>
            <p className="text-4xl font-heading font-bold text-slate-700 mt-2">0</p>
            <p className="text-sm text-slate-500 mt-4 font-medium">Documente disponibile</p>
        </div>
      </div>

      {/* NOU: Standardul de Transparență (Checklist) */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-forest text-center mb-10">
          Ce publicăm în fiecare lună?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Item 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-leaf/30 transition shadow-sm group">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Receipt size={24} />
                </div>
                <h4 className="font-heading font-bold text-lg text-forest mb-2">Facturi & Bonuri</h4>
                <p className="text-sm text-slate-600">Scanări complete după documentele fiscale de la Metro/Selgros. Nimic ascuns.</p>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-leaf/30 transition shadow-sm group">
                <div className="bg-yellow-50 w-12 h-12 rounded-xl flex items-center justify-center text-earth mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                    <ImageIcon size={24} />
                </div>
                <h4 className="font-heading font-bold text-lg text-forest mb-2">Dovezi Foto</h4>
                <p className="text-sm text-slate-600">Poze reale cu marfa cumpărată, încărcată în mașină și așezată pe rafturile din sat.</p>
            </div>

            {/* Item 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-leaf/30 transition shadow-sm group">
                <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center text-forest mb-4 group-hover:bg-forest group-hover:text-white transition-colors">
                    <ShoppingCart size={24} />
                </div>
                <h4 className="font-heading font-bold text-lg text-forest mb-2">Listă Achiziții</h4>
                <p className="text-sm text-slate-600">Detaliere exactă: câți litri de ulei, câte caiete și câte ciocolate s-au cumpărat.</p>
            </div>

            {/* Item 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-leaf/30 transition shadow-sm group">
                <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center text-slate-600 mb-4 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                    <Truck size={24} />
                </div>
                <h4 className="font-heading font-bold text-lg text-forest mb-2">Raport Logistic</h4>
                <p className="text-sm text-slate-600">Costurile de transport (combustibil) pentru a duce marfa la destinație.</p>
            </div>

        </div>
      </div>

      {/* Jurnal de Bord (Reports Section) */}
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-forest/5">
        <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-forest rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-forest">Jurnal de Bord</h2>
        </div>
        
        <div className="space-y-4">
            {/* Report Item */}
            <div className="group bg-paper hover:bg-white p-6 rounded-2xl border border-slate-100 hover:border-leaf/30 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl text-forest shadow-sm group-hover:bg-leaf group-hover:text-white transition-colors">
                        <FileText size={20} />
                    </div>
                    <div>
                        <h4 className="font-heading font-bold text-lg text-slate-800 group-hover:text-forest transition-colors">Lansarea Proiectului Pilot</h4>
                        <p className="text-sm text-slate-500 font-medium mt-1">În curs de desfășurare • Februarie 2026</p>
                    </div>
                </div>
                <span className="bg-gold/20 text-earth border border-gold/20 text-xs px-4 py-2 rounded-full font-bold uppercase tracking-wide">
                    În Lucru
                </span>
            </div>
        </div>

        <div className="mt-12 bg-forest/5 rounded-2xl p-6 text-center border border-forest/10">
            <p className="text-slate-600 text-sm md:text-base font-medium">
                Suntem pregătiți să publicăm toate documentele de mai sus (facturi, poze, rapoarte) imediat după prima acțiune din teren.
            </p>
        </div>
      </div>
    </div>
  );
}
