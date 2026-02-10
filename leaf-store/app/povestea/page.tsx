// app/povestea/page.tsx
import { Heart, Smile, Sun, Leaf, ArrowRight, UserCheck, Search, School } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Povestea() {
  return (
    <div className="bg-paper min-h-screen font-body">

      {/* HERO SECTION - Manifestul */}
      <div className="relative pt-24 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-forest text-white text-center px-4">
        {/* Pattern subtil fundal */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-leaf/20 border border-leaf/40 text-green-100 text-sm font-bold mb-8">
            <span className="mr-2">🍂</span> Manifestul Nostru
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
            Sărăcia fură multe.<br/>
            Dar nu trebuie să fure <span className="text-leaf">demnitatea</span>.
          </h1>
          <p className="text-lg md:text-2xl text-green-50 max-w-2xl mx-auto leading-relaxed font-light">
            Am creat un univers în care nu există &quot;pomană&quot;, ci doar o monedă diferită.
            La noi, copiii nu primesc degeaba. Ei sunt clienți respectați.
          </p>
        </div>
      </div>

      {/* CONCEPTUL - De ce frunze? */}
      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest mb-6">
              De ce Magazinul cu Frunze?
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                &quot;Pomana&quot; poate fi umilitoare. Cozile la alimente pot fi traumatizante pentru un copil de 7 ani.
                El învață că trebuie să stea cu mâna întinsă.
              </p>
              <p className="font-bold text-forest">
                Noi am schimbat regulile.
              </p>
              <p>
                Transformăm ajutorul social într-un joc. Copilul pleacă acasă mândru că a făcut &quot;cumpărături&quot;,
                nu rușinat că a primit de milă. Învățăm demnitate și responsabilitate prin puterea jocului.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-forest font-bold font-heading text-xl mb-1">1 Frunză de Nuc</div>
                    <div className="text-sm text-slate-500">= O Pâine Caldă</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-forest font-bold font-heading text-xl mb-1">1 Frunză de Stejar</div>
                    <div className="text-sm text-slate-500">= Un Caiet Nou</div>
                </div>
            </div>
          </div>

          {/* Imagine Concept */}
          <div className="relative">
             <div className="absolute inset-0 bg-gold/20 rounded-3xl transform rotate-3"></div>
             {/* INSTRUCTIUNI IMAGINE: Copil tinand o frunza la ochi (portrait) */}
             <div className="relative bg-slate-200 rounded-3xl overflow-hidden aspect-4/5] shadow-xl">
                {/* UPDATED: Folosim Next.js Image component */}
                <Image
                  src="/poveste-copil.jpg"
                  alt="Copil cu frunza la ochi"
                  fill
                  className="object-cover"
                />
             </div>
          </div>
        </div>
      </div>

      {/* VALORI - Pilonii */}
      <div className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest">Valorile Noastre</h2>
                <p className="mt-4 text-slate-600">Pilonii pe care construim acest proiect.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Valoare 1 */}
                <div className="text-center p-6 group">
                    <div className="w-16 h-16 mx-auto bg-leaf/10 rounded-full flex items-center justify-center text-forest mb-6 group-hover:bg-forest group-hover:text-white transition-colors">
                        <UserCheck size={32} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-forest mb-3">Demnitate, nu Milă</h3>
                    <p className="text-slate-600 text-sm">Copilul este un client, nu un caz social. Îl tratăm cu respect, îl salutăm, îi dăm rest.</p>
                </div>

                {/* Valoare 2 */}
                <div className="text-center p-6 group">
                    <div className="w-16 h-16 mx-auto bg-gold/20 rounded-full flex items-center justify-center text-earth mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
                        <Sun size={32} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-forest mb-3">Magie Realistă</h3>
                    <p className="text-slate-600 text-sm">Păstrăm inocența copilăriei. Nu distrugem povestea. Pentru câteva minute, frunza chiar are valoare.</p>
                </div>

                {/* Valoare 3 */}
                <div className="text-center p-6 group">
                    <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Search size={32} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-forest mb-3">Transparență Radicală</h3>
                    <p className="text-slate-600 text-sm">Donatorul vede exact unde ajung banii. Rafturi pline vs. rafturi goale. Facturi la vedere.</p>
                </div>

                {/* Valoare 4 */}
                <div className="text-center p-6 group">
                    <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center text-green-700 mb-6 group-hover:bg-green-700 group-hover:text-white transition-colors">
                        <School size={32} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-forest mb-3">Educație prin Comerț</h3>
                    <p className="text-slate-600 text-sm">Copiii învață valoarea alegerii. Ei decid dacă își iau ciocolată sau caiet.</p>
                </div>
            </div>
        </div>
      </div>

      {/* ECHIPA & VISUL (Call to Action) */}
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest mb-6">
            Viziunea noastră?
        </h2>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Vrem să deschidem o rețea națională de &quot;Magazine cu Frunze&quot; în cele mai izolate 100 de sate din România.
            Vrem o comunitate de donatori care înțeleg că <span className="font-bold text-forest">educația începe cu demnitatea</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donatii" className="px-10 py-4 bg-forest hover:bg-forest-hover text-white rounded-full font-bold text-lg transition shadow-xl shadow-green-900/10 flex items-center justify-center gap-2 transform hover:-translate-y-1">
              <Heart size={20} className="fill-current" />
              Susține Povestea
            </Link>
            <Link href="/contact" className="px-10 py-4 bg-white hover:bg-slate-50 text-forest border-2 border-slate-100 hover:border-leaf rounded-full font-bold text-lg transition flex items-center justify-center gap-2">
              Scrie-ne
            </Link>
        </div>
      </div>

    </div>
  );
}
