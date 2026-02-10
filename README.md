# Magazinul cu Frunze (The Leaf Store) 🍂
> "Unde copiii cumpără cu natura, iar tu umpli rafturile cu bunătate."

Acesta este planul operațional și tehnic pentru un proiect social open-source, menit să digitalizeze și să scaleze ajutorul umanitar în zonele rurale defavorizate din România, redând demnitatea copiilor prin gamificare.

## 1. Conceptul
Transformăm actul caritabil (milă) într-un act comercial ludic (educație și demnitate).
* **Moneda:** Frunze (colectate din natură).
* **Clienții:** Copii din medii vulnerabile.
* **Finanțarea:** Crowdfunding recurent și "E-commerce Invers" (donatorii cumpără stocul online).

---

## 2. Ghid de Implementare Legală (ONG - Asociație)

### Pasul 1: Pregătirea (Zilele 1-5)
* **Echipa:** Minim 3 membri fondatori (fără cazier fiscal pătat).
* **Sediul:** Contract de comodat pe un spațiu (poate fi apartament proprietate personală).
* **Rezervare Nume:** Cerere la Ministerul Justiției (cost ~40 RON).

### Pasul 2: Actele Constitutive (Zilele 5-15)
* Redactarea **Statutului** și a **Actului Constitutiv**.
    * *Obiectiv:* Asistență socială, educație, combaterea sărăciei.
* Autentificarea actelor la Notar sau Atestarea de către Avocat.

### Pasul 3: Patrimoniul și ANAF (Zilele 15-20)
* Depunere capital social (minim 200 RON) la o bancă.
* Obținerea Cazierului Fiscal pentru fondatori (ANAF/SPV).

### Pasul 4: Judecătoria și Finalizarea (Zilele 20-45)
* Depunerea dosarului la Judecătoria teritorială.
* Așteptarea încheierii judecătorești.
* Înscrierea în Registrul Asociațiilor și Fundațiilor.
* Obținerea CIF (Cod Fiscal) de la ANAF.

---

## 3. Proiectul Pilot: "Satul Zero"

### Necesar Logistic & Buget (Estimare 50 copii / 1 lună)
**Buget Total Start-up:** ~1.000 EUR (5.000 RON)

| Categorie | Detalii | Cost Estimat (RON) |
| :--- | :--- | :--- |
| **Amenajare** | Rafturi, Banner, Coșuri, Amenajare sumară spațiu | 1.000 |
| **Alimente Bază** | Ulei, Zahăr, Făină, Orez (50 unități fiecare) | 1.500 |
| **Gustări** | Lapte, Cereale, Biscuiți, Cornuri | 600 |
| **Fructe** | Mere, Citrice (rezistente) | 250 |
| **Igienă** | Săpun, Pastă dinți, Periuțe | 500 |
| **Rechizite** | Caiete, Instrumente scris | 400 |
| **Transport** | Carburant (4 drumuri/lună) | 500 |
| **Neprevăzute** | Fond de urgență (10%) | 250 |

---

## 4. Arhitectura Platformei Web (Tech Stack)

### Obiectiv
Un site rapid, sigur, costuri zero de hosting, scalabil.

### Stack Propus (Free Tier Friendly)
* **Frontend:** `React` cu `Next.js` sau `Astro` (pentru viteză maximă).
* **Hosting:** `Netlify` sau `Vercel` (Planul Hobby/Free este suficient pentru start).
* **CMS (Conținut):** `Contentful` sau `Sanity.io` (Headless CMS - planul free permite destule înregistrări). Aici vom gestiona "stocul virtual" și poveștile copiilor.
* **Plăți (Donations):** `Stripe` (integrat prin API) sau `EuPlatesc.ro` (pentru România).
    * *Notă:* Stripe are comisioane, dar integrarea e superbă.
* **Baza de date (Opțional):** `Supabase` sau `Firebase` (pentru autentificare donatori recurenți).
* **Code Repository:** `GitHub` (Public).

### Structura Site-ului
1.  **Homepage:** Hero Video (povestea), Counter Frunze/Bani, Harta Magazinelor.
2.  **Magazinul Virtual:** Grid de produse (Pâine, Rechizite) -> Cart -> Checkout (Donation).
3.  **Transparență:** Rapoarte live (integrare YouTube/Instagram feed).
4.  **Implică-te:** Formular voluntari / propune un sat.

## 5. Roadmap
- [ ] Înființare Repo GitHub (`leaf-store`)
- [ ] Design Mockups (Figma)
- [ ] Identificare Locație Pilot
- [ ] Dezvoltare MVP Site
- [ ] Lansare Pilot
