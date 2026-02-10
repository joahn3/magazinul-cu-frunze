// app/redirectioneaza/page.tsx
import { FileSignature, Calendar, CheckCircle, Download, HelpCircle } from 'lucide-react';

export default function Redirectionare() {
  return (
    <div className="bg-paper min-h-screen font-body">
      
      {/* HERO SECTION */}
      <div className="relative pt-24 pb-24 bg-gradient-to-br from-white to-green-50 overflow-hidden text-center px-4">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/20 text-earth text-sm font-bold mb-6 animate-pulse">
            <Calendar size={16} className="mr-2" />
            Deadline: 25 Mai 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-forest mb-6 leading-tight">
            Semnătura ta ține loc de bani.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Poți direcționa 3,5% din impozitul pe venit (pe care l-ai plătit deja statului) către Magazinul cu Frunze. 
            <strong>Nu te costă absolut nimic.</strong> E dreptul tău să decizi ce face statul cu o parte din banii tăi.
          </p>
        </div>
      </div>

      {/* STEP BY STEP PROCESS */}
      <div className="max-w-5xl mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl shadow-forest/5 border border-slate-100 p-8 md:p-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Steps */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-heading font-bold text-forest mb-6">Cum completezi Formularul 230?</h2>
                    
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center font-bold">1</div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">Descarcă Formularul</h3>
                            <p className="text-slate-600 text-sm mt-1">Este deja precompletat cu datele asociației noastre.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                         <div className="flex-shrink-0 w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center font-bold">2</div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">Completează Datele Tale</h3>
                            <p className="text-slate-600 text-sm mt-1">Nume, prenume, CNP și semnătura. Nu trebuie să calculezi suma, o face ANAF.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                         <div className="flex-shrink-0 w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center font-bold">3</div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">Trimite-l</h3>
                            <p className="text-slate-600 text-sm mt-1">
                                Îl poți depune online prin SPV sau ni-l poți trimite nouă pe email, și îl depunem noi pentru tine (avem bordereau centralizator).
                            </p>
                        </div>
                    </div>

                    <div className="pt-6">
                        {/* Link catre PDF-ul real 230 */}
                        <a href="/formular-230-precompletat.pdf" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-leaf hover:bg-forest text-white rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-green-200">
                            <Download size={20} />
                            Descarcă Formularul 230
                        </a>
                        <p className="text-xs text-slate-400 mt-3 text-center sm:text-left">Format PDF editabil. Se deschide în 2 secunde.</p>
                    </div>
                </div>

                {/* Visual / FAQ */}
                <div className="bg-paper rounded-2xl p-8 border border-slate-200">
                    <h3 className="font-heading font-bold text-forest text-xl mb-6 flex items-center gap-2">
                        <HelpCircle size={20}/> Întrebări Frecvente
                    </h3>
                    
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm mb-1">Îmi scade salariul dacă semnez?</h4>
                            <p className="text-slate-600 text-sm">Absolut deloc. Acești bani au fost deja reținuți de stat. Dacă nu completezi formularul, banii rămân la bugetul de stat. Dacă îl completezi, ajung la copii.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm mb-1">Cine poate completa?</h4>
                            <p className="text-slate-600 text-sm">Oricine a avut venituri din salarii sau pensii în anul anterior. PFA-urile completează prin Declarația Unică.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm mb-1">Care este termenul limită?</h4>
                            <p className="text-slate-600 text-sm font-bold text-leaf">25 Mai 2026.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>

    </div>
  );
}
