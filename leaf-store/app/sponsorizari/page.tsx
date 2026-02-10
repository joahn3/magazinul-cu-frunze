// app/sponsorizari/page.tsx
import { Building2, Calculator, FileCheck, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function Sponsorizari() {
  return (
    <div className="bg-paper min-h-screen font-body">
      
      {/* HERO SECTION */}
      <div className="relative pt-24 pb-20 bg-forest text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-green-50 text-sm font-bold mb-6">
            <Building2 size={16} className="mr-2" />
            Pentru Companii & Antreprenori
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Transformă taxele în educație.
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto font-light leading-relaxed">
            Statul îți permite să direcționezi 20% din impozitul pe profit către o cauză aleasă de tine. 
            Nu te costă nimic în plus. Banii oricum pleacă din firmă – tu alegi dacă ajung la stat sau la copii.
          </p>
        </div>
      </div>

      {/* CUM FUNCTIONEAZA (Mecanismul Fiscal) */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Explicatia */}
            <div>
                <h2 className="text-3xl font-heading font-bold text-forest mb-6">Cum funcționează facilitatea fiscală?</h2>
                <div className="prose prose-lg text-slate-600">
                    <p>
                        Conform Codului Fiscal, companiile plătitoare de impozit pe profit pot acorda sponsorizări care se scad direct din impozitul datorat statului.
                    </p>
                    <p className="font-bold text-forest mt-4">
                        Limitele deducerii (se aplică valoarea cea mai mică dintre):
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2 marker:text-leaf">
                        <li><strong>0,75%</strong> din Cifra de Afaceri;</li>
                        <li><strong>20%</strong> din Impozitul pe Profit datorat.</li>
                    </ul>
                    
                    <div className="bg-yellow-50 border-l-4 border-gold p-4 mt-8 rounded-r-xl">
                        <p className="text-sm text-slate-700 font-medium">
                            <strong>Notă pentru Microîntreprinderi (2026):</strong><br/>
                            Legislația fiscală pentru microîntreprinderi este în continuă schimbare. Vă rugăm să consultați contabilul firmei pentru a verifica eligibilitatea actuală pentru creditul fiscal.
                        </p>
                    </div>
                </div>
            </div>

            {/* Calculator Vizual (Exemplu) */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-forest/5 border border-slate-100">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                    <div className="bg-leaf/10 p-3 rounded-full text-forest">
                        <Calculator size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-forest">Exemplu de Calcul</h3>
                </div>
                
                <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Impozit pe profit datorat (Trimestrul I):</span>
                        <span className="font-bold text-slate-800">10.000 RON</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Sponsorizare către Asociație (20%):</span>
                        <span className="font-bold text-leaf">- 2.000 RON</span>
                    </div>
                    <div className="w-full h-px bg-slate-200 my-2"></div>
                    <div className="flex justify-between items-center text-lg font-bold">
                        <span className="text-forest">Rest de plată către ANAF:</span>
                        <span className="text-forest">8.000 RON</span>
                    </div>
                </div>
                
                <div className="mt-8 bg-forest/5 p-4 rounded-xl text-center">
                    <p className="text-forest font-bold text-sm">
                        Cost real pentru firmă: 0 RON.<br/>
                        Impact în comunitate: 2.000 RON.
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* PASII DE URMAT */}
      <div className="bg-white py-20 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-heading font-bold text-center text-forest mb-12">3 Pași Simpli</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Pas 1 */}
                  <div className="text-center group">
                      <div className="w-16 h-16 mx-auto bg-leaf/10 rounded-2xl flex items-center justify-center text-forest mb-6 group-hover:bg-forest group-hover:text-white transition-colors">
                          <Download size={32} />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-forest mb-3">1. Descarcă Contractul</h3>
                      <p className="text-slate-600 text-sm px-4">Completează datele firmei și suma pe care dorești să o sponsorizezi.</p>
                  </div>

                  {/* Pas 2 */}
                  <div className="text-center group">
                      <div className="w-16 h-16 mx-auto bg-leaf/10 rounded-2xl flex items-center justify-center text-forest mb-6 group-hover:bg-forest group-hover:text-white transition-colors">
                          <FileCheck size={32} />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-forest mb-3">2. Faci Plata</h3>
                      <p className="text-slate-600 text-sm px-4">Realizezi transferul bancar menționând "Sponsorizare" la detalii plată.</p>
                  </div>

                  {/* Pas 3 */}
                  <div className="text-center group">
                      <div className="w-16 h-16 mx-auto bg-leaf/10 rounded-2xl flex items-center justify-center text-forest mb-6 group-hover:bg-forest group-hover:text-white transition-colors">
                          <Building2 size={32} />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-forest mb-3">3. Deducerea</h3>
                      <p className="text-slate-600 text-sm px-4">Contabilul înregistrează contractul și scade suma din impozitul datorat.</p>
                  </div>
              </div>
          </div>
      </div>

      {/* CTA / CONTRACT */}
      <div className="py-20 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-forest mb-6">Ești gata să devii partener?</h2>
            <p className="text-slate-600 mb-10">
                Descarcă modelul de contract precompletat. Dacă ai nevoie de ajutor, scrie-ne.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                {/* Link catre un PDF real pe care il vei incarca in /public */}
                <a href="/contract-sponsorizare-2026.pdf" target="_blank" className="px-8 py-4 bg-forest hover:bg-forest-hover text-white rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                    <Download size={20} />
                    Descarcă Contractul (.pdf)
                </a>
                <Link href="/contact" className="px-8 py-4 bg-white hover:bg-paper text-forest border-2 border-slate-100 hover:border-leaf rounded-xl font-bold transition flex items-center justify-center gap-2">
                    Contactează-ne
                </Link>
            </div>
            <p className="mt-6 text-sm text-slate-400">
                * Asociația Magazinul cu Frunze este înscrisă în Registrul Entităților/Unităților de Cult (ANAF), condiție obligatorie pentru deducere.
            </p>
          </div>
      </div>

    </div>
  );
}
