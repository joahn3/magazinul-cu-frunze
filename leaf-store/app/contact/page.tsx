// app/contact/page.tsx
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-paper">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-forest mb-4">Hai să vorbim</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-body">
          Ai o întrebare, o propunere sau vrei să ne ajuți? Suntem aici pentru tine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Info Contact */}
        <div className="space-y-8">
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition duration-300">
            <div className="bg-leaf/10 p-3 rounded-full text-forest">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-forest mb-1">Sediul Nostru</h3>
              <p className="text-slate-600">Bragadiru, Jud. Ilfov<br/>România</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition duration-300">
            <div className="bg-leaf/10 p-3 rounded-full text-forest">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-forest mb-1">Email</h3>
              <a href="mailto:contact@magazinulcufrunze.ro" className="text-leaf font-bold hover:text-forest transition-colors">
                contact@magazinulcufrunze.ro
              </a>
              <p className="text-sm text-slate-500 mt-1">Răspundem în maxim 24h.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition duration-300">
             <div className="bg-leaf/10 p-3 rounded-full text-forest">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-forest mb-1">Telefon</h3>
              <p className="text-slate-600 font-medium">+40 700 000 000</p>
              <p className="text-sm text-slate-500 mt-1">Luni - Vineri, 09:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Formular Simplu (Vizual) */}
        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-green-900/5 border border-slate-100">
          <h3 className="font-heading font-bold text-2xl text-forest mb-6">Trimite un mesaj</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-forest mb-1">Numele tău</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-leaf focus:border-transparent outline-none transition shadow-sm bg-paper" 
                placeholder="Ex: Andrei Popescu" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-forest mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-leaf focus:border-transparent outline-none transition shadow-sm bg-paper" 
                placeholder="andrei@email.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-forest mb-1">Mesaj</label>
              <textarea 
                rows={4} 
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-leaf focus:border-transparent outline-none transition shadow-sm bg-paper" 
                placeholder="Cum te putem ajuta?"
              ></textarea>
            </div>
            <button 
              type="button" 
              className="w-full bg-forest hover:bg-forest-hover text-white font-heading font-bold py-4 rounded-xl transition shadow-lg transform hover:-translate-y-0.5"
            >
              Trimite Mesaj
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
