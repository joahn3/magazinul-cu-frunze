export default function ImplicaTe() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Devino Voluntar</h1>
        <p className="text-xl text-slate-600">
          Nu ai bani de donat? Nu-i nimic. <br/>
          Avem nevoie de brațe puternice, mașini pentru transport sau doar de un zâmbet.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
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

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-4">
            <h3 className="font-bold text-lg mb-2">🚚 Transport</h3>
            <p className="text-sm text-slate-600">Ai o dubă sau o mașină spațioasă? Ajută-ne să ducem marfa în sate.</p>
        </div>
        <div className="p-4">
            <h3 className="font-bold text-lg mb-2">📦 Sortare</h3>
            <p className="text-sm text-slate-600">Vino la sediu să ne ajuți să pregătim pachetele pentru copii.</p>
        </div>
        <div className="p-4">
            <h3 className="font-bold text-lg mb-2">📸 Foto/Video</h3>
            <p className="text-sm text-slate-600">Știi să faci poze? Vino cu noi pe teren să spui povestea mai departe.</p>
        </div>
      </div>
    </div>
  );
}
