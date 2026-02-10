// app/termeni/page.tsx
export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
      <h1 className="text-3xl font-bold mb-8">Termeni și Condiții</h1>
      <p className="text-sm text-slate-500 mb-6">Ultima actualizare: 10 Februarie 2026</p>

      <h3>1. Despre Noi</h3>
      <p>
        Website-ul <strong>Magazinul cu Frunze</strong> este operat de Asociația [NUMELE COMPLET DIN ACTE], 
        persoană juridică de drept privat fără scop patrimonial, cu sediul în Bragadiru, Ilfov, 
        înregistrată în Registrul Asociațiilor și Fundațiilor cu nr. [NR. ÎNREGISTRARE], CIF [COD FISCAL].
      </p>

      <h3>2. Scopul Platformei</h3>
      <p>
        Acest site funcționează ca un mecanism de colectare de fonduri (donatii). Produsele afișate pe site 
        (ex: "Pachet Micul Dejun", "Rechizite") sunt reprezentări virtuale ale nevoilor beneficiarilor noștri.
      </p>
      <p>
        <strong>Important:</strong> Prin achiziționarea unui "produs" de pe site, dumneavoastră efectuați o <strong>donație</strong>. 
        Nu veți primi fizic produsul respectiv acasă. Contravaloarea donației va fi utilizată de Asociație pentru a achiziționa 
        produse reale care vor fi distribuite copiilor din zonele defavorizate, conform misiunii noastre.
      </p>

      <h3>3. Plăți și Donații</h3>
      <p>
        Plățile sunt procesate securizat prin partenerul nostru, <strong>Stripe Payments</strong>. 
        Asociația nu stochează datele cardului dumneavoastră bancar.
        Toate donațiile sunt finale. Fiind vorba de acte de caritate, sumele nu pot fi returnate decât în cazul unor erori tehnice dovedite (ex: dublarea tranzacției).
      </p>

      <h3>4. Transparență</h3>
      <p>
        Ne angajăm să utilizăm fondurile exclusiv pentru scopul declarat: aprovizionarea magazinelor sociale și costurile logistice aferente. 
        Rapoartele de activitate vor fi publicate periodic în secțiunea "Transparență".
      </p>

      <h3>5. Limitarea Răspunderii</h3>
      <p>
        Facem eforturi permanente pentru a păstra acuratețea informațiilor de pe site. Fotografiile au caracter informativ 
        și pot exista diferențe minore între pachetele prezentate virtual și produsele fizice distribuite, în funcție de stocuri și nevoi.
      </p>

      <h3>6. Contact</h3>
      <p>Pentru orice întrebări, ne puteți contacta la adresa de email: contact@magazinulcufrunze.ro</p>
    </div>
  );
}
