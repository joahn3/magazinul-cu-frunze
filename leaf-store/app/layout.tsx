// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
// Nota: Fonturile sunt gestionate acum global in globals.css prin @import, 
// dar pastram Inter ca fallback sau putem sterge importul daca globals.css e incarcat corect.
import { Leaf, MapPin } from 'lucide-react'; 
import Navbar from './components/Navbar'; 

export const metadata: Metadata = {
  title: 'Magazinul cu Frunze',
  description: 'Locul unde faptele bune prind rădăcini.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className="font-body bg-paper text-slate-700 antialiased">
        
        {/* --- GLOBAL HEADER --- */}
        <Navbar />

        {/* --- CONTENT --- */}
        <div className="pt-16 min-h-screen">
            {children}
        </div>

        {/* --- GLOBAL FOOTER --- */}
        {/* Conform Brand DNA: Footer-ul este Earth Brown (#78350f) */}
        <footer className="bg-earth text-amber-50/80 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              
              {/* Coloana 1: Brand */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  {/* Logo alb/leaf pe fundal maro */}
                  <Leaf className="h-6 w-6 text-leaf" />
                  <span className="font-heading font-bold text-2xl text-white">Magazinul cu Frunze</span>
                </div>
                <p className="text-sm max-w-sm leading-relaxed opacity-90">
                  Un proiect social care combate sărăcia prin educație și demnitate.
                  Transformăm frunzele în monedă de schimb pentru copiii care au nevoie de noi.
                </p>
              </div>

              {/* Coloana 2: Link-uri */}
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-6">Link-uri utile</h4>
                <ul className="space-y-3 text-sm font-medium">
                  <li>
                    <a href="/implica-te" className="hover:text-gold transition-colors duration-200 flex items-center gap-2">
                      Devino Voluntar
                    </a>
                  </li>
                  <li>
                    <a href="/transparenta" className="hover:text-gold transition-colors duration-200">
                      Raport Transparență
                    </a>
                  </li>
                  <li>
                    <a href="/termeni" className="hover:text-gold transition-colors duration-200">
                      Termeni și condiții
                    </a>
                  </li>
                  {/* LINK NOU ADAUGAT */}
                  <li>
                    <a href="/confidentialitate" className="hover:text-gold transition-colors duration-200">
                      Politica de confidențialitate
                    </a>
                  </li>
                </ul>
              </div>

              {/* Coloana 3: Contact */}
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-6">Contact</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-leaf mt-0.5"/> 
                    <span>Bragadiru, Jud. Ilfov<br/>România</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-4.5 h-4.5 rounded-full border border-leaf flex items-center justify-center text-[10px] text-leaf font-bold">@</span>
                    <a href="mailto:contact@magazinulcufrunze.ro" className="hover:text-gold transition-colors">
                      contact@magazinulcufrunze.ro
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-amber-900/30 mt-16 pt-8 text-sm text-center opacity-60">
              &copy; {new Date().getFullYear()} Asociația Magazinul cu Frunze. Toate drepturile rezervate.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
