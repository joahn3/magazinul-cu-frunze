// app/confidentialitate/page.tsx
export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
      <h1 className="text-3xl font-bold mb-8">Politica de Confidențialitate (GDPR)</h1>
      
      <h3>1. Ce date colectăm?</h3>
      <p>Colectăm doar datele necesare pentru procesarea donației și comunicarea cu dumneavoastră:</p>
      <ul>
        <li>Nume și prenume</li>
        <li>Adresa de email</li>
        <li>Date necesare facturării (dacă este cazul)</li>
      </ul>
      <p><strong>Nu stocăm datele cardurilor bancare.</strong> Acestea sunt procesate exclusiv de procesatorul de plăți (Stripe).</p>

      <h3>2. Cum folosim datele?</h3>
      <p>Datele sunt utilizate pentru:</p>
      <ul>
        <li>Confirmarea donației (veți primi un email automat).</li>
        <li>Transmiterea rapoartelor de transparență (doar cu acordul dvs.).</li>
        <li>Îndeplinirea obligațiilor legale și fiscale.</li>
      </ul>

      <h3>3. Cine are acces la date?</h3>
      <p>
        Nu vindem și nu înstrăinăm niciodată datele dumneavoastră către terți în scopuri de marketing. 
        Datele pot fi accesate doar de membrii autorizați ai Asociației și de furnizorii de servicii strict necesari (ex: platforma de plăți, serviciul de email marketing).
      </p>

      <h3>4. Drepturile dumneavoastră</h3>
      <p>
        Conform Regulamentului UE 2016/679 (GDPR), aveți dreptul de acces, rectificare, ștergere ("dreptul de a fi uitat") 
        sau restricționare a prelucrării datelor. Pentru a exercita aceste drepturi, trimiteți un email la contact@magazinulcufrunze.ro.
      </p>
    </div>
  );
}
