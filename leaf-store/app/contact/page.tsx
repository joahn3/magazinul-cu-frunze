// app/contact/page.tsx
import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Hai să vorbim</h1>
        <p className="text-xl text-slate-600">
          Ai o întrebare, o propunere sau vrei să ne ajuți? Suntem aici.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Info Contact */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full text-green-600">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Sediul Nostru</h3>
              <p className="text-slate-600">Bragadiru, Jud. Ilfov<br/>România</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full text-green-600">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Email</h3>
              <a href="mailto:contact@magazinulcufrunze.ro" className="text-green-600 hover:underline">
                contact@magazinulcufrunze.ro
              </a>
              <p className="text-sm text-slate-500 mt-1">Răspundem în maxim 24h.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
             <div className="bg-green-100 p-3 rounded-full text-green-600">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Telefon</h3>
              <p className="text-slate-600">+40 700 000 000</p>
              <p className="text-sm text-slate-500 mt-1">Luni - Vineri, 09:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Formular Simplu (Vizual) */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
          <h3 className="font-bold text-xl mb-6">Trimite un mesaj</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Numele tău</label>
              <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" placeholder="Ex: Andrei Popescu" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" placeholder="andrei@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mesaj</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" placeholder="Cum te putem ajuta?"></textarea>
            </div>
            <button type="button" className="w-full bg-slate-900 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition">
              Trimite Mesaj
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
