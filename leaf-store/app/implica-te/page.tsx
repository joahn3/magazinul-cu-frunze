// app/implica-te/page.tsx
import { Truck, Package, Camera } from 'lucide-react';

export default function ImplicaTe() {
  return (
    <div className="bg-paper min-h-screen py-16 font-body">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-forest mb-6">
            Devino Voluntar
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Nu ai bani de donat? Nu-i nimic. <br className="hidden md:block"/>
            Avem nevoie de brațe puternice, mașini pentru transport sau doar de un zâmbet.
          </p>
        </div>

        {/* Roluri Voluntari (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Card 1: Transport */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg hover:border-leaf/30 transition duration-300 group">
                <div className="mx-auto bg-leaf/10 w-16 h-16 rounded-full flex items-center justify-center text-forest mb-4 group-hover:bg-forest group-hover:text-white transition-colors">
                    <Truck size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl text-forest mb-2">Transport</h3>
                <p className="text-slate-600 text-sm">Ai o dubă sau o mașină spațioasă? Ajută-ne să ducem marfa în sate în weekend.</p>
            </div>

            {/* Card 2: Sortare */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg hover:border-leaf/30 transition duration-300 group">
                <div className="mx-auto bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center text-earth mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                    <Package size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl text-forest mb-2">Sortare</h3>
                <p className="text-slate-600 text-sm">Vino la sediu să ne ajuți să sortăm alimentele și să pregătim pachetele pentru copii.</p>
            </div>

            {/* Card 3: Foto/Video */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg hover:border-leaf/30 transition duration-300 group">
                <div className="mx-auto bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Camera size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl text-forest mb-2">Foto / Storytelling</h3>
                <p className="text-slate-600 text-sm">Știi să faci poze? Vino cu noi pe teren să spui povestea mai departe.</p>
            </div>
        </div>

        {/* TALLY FORM CONTAINER */}
        <div className="bg-white rounded-3xl shadow-xl shadow-forest/5 overflow-hidden border border-slate-100 relative z-10">
          <div className="bg-forest/5 p-4 text-center border-b border-forest/10 md:hidden">
             <p className="text-sm text-forest font-bold">Completează formularul de mai jos 👇</p>
          </div>
          
          {/* TALLY FORM EMBED */}
          {/* Înlocuiește src-ul de mai jos cu linkul generat de tine în Tally.so */}
          <iframe 
              src="https://tally.so/embed/w7Xk1L?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              width="100%" 
              height="500" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="Formular Voluntari"
              className="w-full min-h-[600px]"
          >
          </iframe>
        </div>

        <div className="mt-8 text-center">
            <p className="text-sm text-slate-400 italic">
                Datele tale sunt în siguranță. Te vom contacta doar pentru acțiuni de voluntariat.
            </p>
        </div>

      </div>
    </div>
  );
}
