// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
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
        <footer className="bg-earth text-amber-50/80 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              
              {/* Coloana 1: Brand (Lata - ocupa 2 coloane) */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Leaf className="h-6 w-6 text-leaf" />
                  <span className="font-heading font-bold text-2xl text-white">Magazinul cu Frunze</span>
                </div>
                <p className="text-sm max-w-sm leading-relaxed opacity-90">
                  Un proiect social care combate sărăcia prin educație și demnitate.
                  Transformăm frunzele în monedă de schimb pentru copiii care au nevoie de noi.
                </p>
                <div className="mt-6 flex gap-4">
                  <a href="/povestea" className="text-white font-bold border-b border-leaf hover:text-gold transition-colors">
                    Citește Povestea Noastră
                  </a>
                </div>
              </div>

              {/* Coloana 2: Susține & Legal */}
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-6">Implică-te</h4>
                <ul className="space-y-3 text-sm font-medium">
                  <li>
                    <a href="/sponsorizari" className="hover:text-gold transition-colors duration-200 flex items-center gap-2">
                      <span className="text-leaf">●</span> Sponsorizează (Firme)
                    </a>
                  </li>
                  <li>
                    <a href="/redirectioneaza" className="hover:text-gold transition-colors duration-200 flex items-center gap-2">
                      <span className="text-leaf">●</span> Redirecționează 3.5%
                    </a>
                  </li>
                  <li>
                    <a href="/implica-te" className="hover:text-gold transition-colors duration-200">
                      Devino Voluntar
                    </a>
                  </li>
                  <li className="pt-4 border-t border-amber-900/30 mt-4">
                     <a href="/transparenta" className="hover:text-white transition-colors duration-200 opacity-70 hover:opacity-100">
                      Raport Transparență
                    </a>
                  </li>
                   <li>
                    <a href="/termeni" className="hover:text-white transition-colors duration-200 opacity-70 hover:opacity-100">
                      Termeni și condiții
                    </a>
                  </li>
                  <li>
                    <a href="/confidentialitate" className="hover:text-white transition-colors duration-200 opacity-70 hover:opacity-100">
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
