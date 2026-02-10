// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Leaf, MapPin, Menu, X } from 'lucide-react'; // Asigura-te ca ai lucide-react instalat

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        {/* --- GLOBAL HEADER --- */}
        <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-2">
                <a href="/" className="flex items-center gap-2">
                   <div className="bg-green-600 p-2 rounded-full">
                     <Leaf className="h-6 w-6 text-white" />
                   </div>
                   <span className="font-bold text-xl tracking-tight text-green-900">Magazinul cu Frunze</span>
                </a>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="/#cum-functioneaza" className="text-slate-600 hover:text-green-700 font-medium transition">Cum funcționează</a>
                <a href="/donatii" className="text-slate-600 hover:text-green-700 font-medium transition">Donații</a>
                <a href="/implica-te" className="text-slate-600 hover:text-green-700 font-medium transition">Voluntari</a>
                <a href="/contact" className="text-slate-600 hover:text-green-700 font-medium transition">Contact</a>
                <a href="/donatii" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-bold transition shadow-lg shadow-green-200">
                  Donează
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* --- CONTENTUL PAGINILOR VA FI RANDAT AICI --- */}
        <div className="pt-16 min-h-screen">
            {children}
        </div>

        {/* --- GLOBAL FOOTER --- */}
        <footer className="bg-slate-900 text-slate-400 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Leaf className="h-5 w-5 text-green-500" />
                  <span className="font-bold text-xl text-white">Magazinul cu Frunze</span>
                </div>
                <p className="text-sm max-w-sm">
                  Un proiect social care combate sărăcia prin educație și demnitate.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Link-uri utile</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/implica-te" className="hover:text-green-400">Devino Voluntar</a></li>
                  <li><a href="/termeni" className="hover:text-green-400">Termeni și condiții</a></li>
                  <li><a href="/transparenta" className="hover:text-green-400">Raport Transparență</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><MapPin size={16}/> Bragadiru, Ilfov</li>
                  <li>contact@magazinulcufrunze.ro</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
              &copy; 2026 Magazinul cu Frunze.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
