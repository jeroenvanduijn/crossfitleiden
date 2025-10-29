# HYROX Simulation Website - Setup Instructies

Deze documentatie beschrijft hoe je de HYROX Simulation website configureert en activeert voor je event.

## 📋 Inhoudsopgave

1. [Google Sheets Integratie](#google-sheets-integratie)
2. [HighLevel Formulier Integratie](#highlevel-formulier-integratie)
3. [Foto's en Media Toevoegen](#fotos-en-media-toevoegen)
4. [Event Details Updaten](#event-details-updaten)
5. [Deployment](#deployment)

---

## 🗂️ Google Sheets Integratie

De Heats & Uitslagen pagina synchroniseert automatisch met Google Sheets voor real-time updates.

### Stap 1: Google Sheet Aanmaken

1. Maak een nieuwe Google Sheet aan of gebruik een bestaande
2. Zorg dat de sheet de volgende kolommen heeft (in deze volgorde):
   - **Kolom A**: Heat (bijv. "Heat 1", "Heat 2")
   - **Kolom B**: Starttijd (bijv. "08:00", "08:20")
   - **Kolom C**: Categorie (bijv. "Singles - Men", "Doubles - Mixed")
   - **Kolom D**: Deelnemers (namen, komma gescheiden)
   - **Kolom E**: Finishtijd (optioneel, vul in na afloop)

**Voorbeeld:**

```
Heat    | Starttijd | Categorie        | Deelnemers                     | Finishtijd
--------|-----------|------------------|--------------------------------|------------
Heat 1  | 08:00     | Singles - Men    | John Doe, Mike Smith           | 01:15:32
Heat 2  | 08:20     | Singles - Women  | Sarah Johnson, Emma Brown      | 01:22:45
Heat 3  | 08:40     | Doubles - Mixed  | Team Alpha, Team Beta          |
```

### Stap 2: Sheet Publiceren

1. Ga naar **File > Share > Publish to web**
2. Selecteer het tabblad met je heat data (bijv. "Heats")
3. Kies **Entire Document** of specifiek **Sheet**
4. Klik op **Publish**
5. Kopieer de **Sheet ID** uit de URL (het lange deel tussen `/d/` en `/edit`)

Bijvoorbeeld in deze URL:
```
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
```
Het Sheet ID is: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

### Stap 3: Google API Key Aanmaken

1. Ga naar [Google Cloud Console](https://console.cloud.google.com/)
2. Maak een nieuw project aan of selecteer een bestaand project
3. Ga naar **APIs & Services > Credentials**
4. Klik op **Create Credentials > API Key**
5. Kopieer de API key
6. **Belangrijk**: Restricties toevoegen:
   - Klik op de API key om te bewerken
   - Onder **API restrictions**, selecteer **Google Sheets API**
   - Onder **Website restrictions**, voeg je domein toe (bijv. `crossfitleiden.com`)
   - Klik op **Save**

### Stap 4: Configureer de Website

Open het bestand: `app/hyrox/heats/page.tsx`

Zoek naar deze regels (rond regel 27-29):

```typescript
const SHEET_ID = "YOUR_GOOGLE_SHEET_ID";
const API_KEY = "YOUR_GOOGLE_API_KEY";
const SHEET_NAME = "Heats"; // Name of the sheet tab
```

Vervang met je eigen waarden:

```typescript
const SHEET_ID = "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms";
const API_KEY = "AIzaSyD-9tSR6Yt5_example_key_12345";
const SHEET_NAME = "Heats"; // Zorg dat dit overeenkomt met je tab naam!
```

### Stap 5: Test de Integratie

1. Start de development server: `npm run dev`
2. Ga naar `http://localhost:3000/hyrox/heats`
3. Controleer of de data correct wordt geladen
4. Update een cel in je Google Sheet
5. Ververs de pagina om te zien of de wijziging verschijnt

**Troubleshooting:**
- Als je een CORS error ziet, controleer of de Google Sheet publiek leesbaar is
- Als je een 403 error ziet, controleer je API key restricties
- Als data niet laadt, open de browser console (F12) voor error messages

---

## 📝 HighLevel Formulier Integratie

Het inschrijfformulier wordt via HighLevel beheerd en embedded in de pagina.

### Stap 1: HighLevel Embed Code Verkrijgen

1. Log in op je HighLevel account
2. Ga naar het HYROX Simulation formulier
3. Klik op **Share** of **Embed**
4. Kopieer de embed code (meestal een `<script>` tag of `<iframe>`)

Voorbeeld embed code:
```html
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
<iframe src="https://api.leadconnectorhq.com/widget/form/FORM_ID"
        style="width:100%;height:500px;border:none;"></iframe>
```

### Stap 2: Embed Code Plaatsen

Open het bestand: `app/hyrox/page.tsx`

Zoek naar de sectie met id `inschrijven` (rond regel 224):

```tsx
{/* Placeholder for HighLevel Form */}
<div className="bg-white rounded-lg p-8 border-2 border-dashed border-gray-300 text-center">
  <p className="text-gray-600 mb-4">
    🔗 <strong>HighLevel Formulier Embed Placeholder</strong>
  </p>
  ...
</div>
```

Vervang dit hele blok met:

```tsx
{/* HighLevel Form Embed */}
<div className="highlevel-form-container">
  {/* Plak hier je HighLevel embed code */}
  <script src="https://link.msgsndr.com/js/form_embed.js"></script>
  <iframe
    src="https://api.leadconnectorhq.com/widget/form/JOUW_FORM_ID"
    style={{width: '100%', height: '600px', border: 'none', borderRadius: '8px'}}
    title="HYROX Simulation Inschrijving"
  />
</div>
```

### Stap 3: Styling Aanpassen (Optioneel)

Als je de vormgeving van het formulier wilt aanpassen, voeg custom CSS toe aan `app/globals.css`:

```css
/* HighLevel Form Styling */
.highlevel-form-container iframe {
  min-height: 600px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

/* Override form button colors to match CFL brand */
.highlevel-form-container button[type="submit"] {
  background-color: #EF4C37 !important; /* Cinnabar */
  border-radius: 8px !important;
}
```

### Stap 4: Meerdere Formulieren (Leden vs Niet-leden)

Als je aparte formulieren hebt voor leden en niet-leden, gebruik dan tabs:

```tsx
<div className="mb-6">
  <div className="flex border-b border-gray-200">
    <button
      onClick={() => setFormType('members')}
      className={`px-6 py-3 font-semibold ${formType === 'members' ? 'border-b-2 border-cinnabar text-cinnabar' : 'text-gray-600'}`}
    >
      CFL/Partner Leden
    </button>
    <button
      onClick={() => setFormType('external')}
      className={`px-6 py-3 font-semibold ${formType === 'external' ? 'border-b-2 border-cinnabar text-cinnabar' : 'text-gray-600'}`}
    >
      Niet-leden
    </button>
  </div>
</div>

{formType === 'members' ? (
  <iframe src="MEMBERS_FORM_URL" ... />
) : (
  <iframe src="EXTERNAL_FORM_URL" ... />
)}
```

---

## 📸 Foto's en Media Toevoegen

### Stap 1: Foto's Voorbereiden

1. Verzamel foto's van vorige HYROX events
2. Optimaliseer foto's voor web:
   - Maximale breedte: 1200px
   - Formaat: JPG (voor foto's) of WebP (voor moderne browsers)
   - Compressie: 70-80% kwaliteit
   - Tools: [TinyPNG](https://tinypng.com/) of [Squoosh](https://squoosh.app/)

### Stap 2: Foto's Uploaden

Maak een nieuwe map aan: `public/images/hyrox/`

Upload je foto's hierheen met duidelijke namen:
```
public/images/hyrox/
  ├── hero-background.jpg
  ├── gallery-1.jpg
  ├── gallery-2.jpg
  ├── gallery-3.jpg
  ├── gallery-4.jpg
  └── testimonial-sarah.jpg
```

### Stap 3: Foto's in de Website Plaatsen

**Hero Achtergrond:**

Open `app/hyrox/page.tsx` en zoek de hero sectie:

```tsx
<section className="relative bg-gradient-to-br from-cinnabar via-cinnabar/90 to-verdigris text-white section-padding overflow-hidden">
  {/* Voeg achtergrondafbeelding toe */}
  <div
    className="absolute inset-0 opacity-30 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/hyrox/hero-background.jpg')" }}
  ></div>
```

**Foto Galerij:**

Zoek de "Sfeerimpressie" sectie en vervang de placeholders:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
  <div className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
    <img
      src="/images/hyrox/gallery-1.jpg"
      alt="HYROX deelnemers in actie"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
    <img
      src="/images/hyrox/gallery-2.jpg"
      alt="Team tijdens workout"
      className="w-full h-full object-cover"
    />
  </div>
  {/* Herhaal voor gallery-3 en gallery-4 */}
</div>
```

**Testimonial Foto's:**

In de testimonials sectie:

```tsx
<div className="w-16 h-16 rounded-full overflow-hidden">
  <img
    src="/images/hyrox/testimonial-sarah.jpg"
    alt="Sarah"
    className="w-full h-full object-cover"
  />
</div>
```

---

## ✏️ Event Details Updaten

### Datum en Tijd Aanpassen

Open `app/hyrox/page.tsx` en zoek naar de event details:

```tsx
<div className="text-3xl mb-2">📅</div>
<div className="font-semibold">1 November 2025</div>
<div className="text-sm text-white/80">Start vanaf 08:00</div>
```

Update naar je eigen event datum.

### Tarieven Wijzigen

Zoek de "Tarieven" sectie:

```tsx
<li className="flex items-start">
  <span className="text-cinnabar mr-2 font-bold">•</span>
  <span><strong>CFL-leden:</strong> €10</span>
</li>
```

Pas de bedragen aan zoals nodig.

### Metadata Updaten

Update SEO metadata bovenaan `app/hyrox/page.tsx`:

```tsx
export const metadata: Metadata = {
  title: "HYROX Simulation 2025 - CrossFit Leiden",
  description: "Doe mee aan onze HYROX Simulation op 1 november 2025. Test je vorm in een supportieve omgeving!",
  keywords: ["hyrox", "crossfit", "leiden", "simulation", "fitness", "event", "race", "2025"],
};
```

---

## 🚀 Deployment

### Lokaal Testen

Voordat je deploy, test lokaal:

```bash
# Installeer dependencies (eerste keer)
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:3000/hyrox
```

Test alle functionaliteiten:
- ✅ Navigatie werkt
- ✅ Formulier laadt correct
- ✅ Google Sheets data wordt geladen
- ✅ Responsive design op mobiel (gebruik browser dev tools)
- ✅ Alle links werken
- ✅ Afbeeldingen laden

### Production Build

Maak een production build:

```bash
npm run build
```

Als er errors zijn, los deze op voordat je deploy.

### Deploy naar Vercel (Aanbevolen)

De website is al geconfigureerd voor Vercel deployment:

```bash
# Commit je wijzigingen
git add .
git commit -m "Add HYROX Simulation website"
git push

# Vercel zal automatisch deployen
```

Vercel detecteert automatisch Next.js en zal de site builden en deployen.

### Environment Variables (Productie)

Voor extra beveiliging kun je de Google Sheets credentials als environment variables instellen:

1. Ga naar Vercel Dashboard > Your Project > Settings > Environment Variables
2. Voeg toe:
   - `NEXT_PUBLIC_GOOGLE_SHEET_ID`: Je Sheet ID
   - `NEXT_PUBLIC_GOOGLE_API_KEY`: Je API Key
   - `NEXT_PUBLIC_SHEET_NAME`: "Heats"

3. Update `app/hyrox/heats/page.tsx`:

```typescript
const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || "YOUR_SHEET_ID";
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "YOUR_API_KEY";
const SHEET_NAME = process.env.NEXT_PUBLIC_SHEET_NAME || "Heats";
```

---

## 🔧 Onderhoud & Updates

### Voor Volgende Events

1. **Update event datum** in `app/hyrox/page.tsx`
2. **Maak nieuwe Google Sheet** of clear de oude data
3. **Update Sheet ID** als je een nieuwe sheet gebruikt
4. **Vervang foto's** met nieuwe event foto's
5. **Update testimonials** met nieuwe ervaringen

### Monitoring

Check regelmatig:
- Google Sheets API quota (Google Cloud Console)
- HighLevel formulier submissions
- Website analytics (indien geconfigureerd)

### Support

Bij vragen of problemen:
- Check de browser console voor JavaScript errors (F12)
- Verifieer dat Google Sheet publiek toegankelijk is
- Test de HighLevel embed code in een leeg HTML bestand
- Neem contact op met de developer

---

## 📊 Google Sheets Voorbeeld Template

Kopieer deze template voor je eigen sheet:

| Heat   | Starttijd | Categorie        | Deelnemers                                    | Finishtijd |
|--------|-----------|------------------|-----------------------------------------------|------------|
| Heat 1 | 08:00     | Singles - Men    | John Doe, Mike Smith, Tom Wilson              | 01:15:32   |
| Heat 2 | 08:20     | Singles - Women  | Sarah Johnson, Emma Brown, Lisa Davis         | 01:22:45   |
| Heat 3 | 08:40     | Doubles - Mixed  | Team Alpha (Mark & Lisa), Team Beta (Chris)   |            |
| Heat 4 | 09:00     | Singles - Men    | David Lee, James Clark                        |            |
| Heat 5 | 09:20     | Doubles - Men    | Team Gamma (Tom & Jerry)                      |            |

**Tips:**
- Gebruik consistent formaat voor tijd (HH:MM of HH:MM:SS)
- Bij Doubles teams, vermeld beide namen in Deelnemers kolom
- Laat Finishtijd leeg tot na de race
- Sorteer op Starttijd voor beste overzicht

---

## ✅ Checklist voor Live Gang

- [ ] Google Sheet aangemaakt en gevuld met heat data
- [ ] Sheet ID en API Key geconfigureerd in code
- [ ] Google Sheets API geactiveerd en restricted
- [ ] HighLevel formulier embed code geplaatst
- [ ] Formulier getest (test inschrijving gedaan)
- [ ] Event datum en tijd geüpdatet
- [ ] Tarieven gecontroleerd
- [ ] Foto's geoptimaliseerd en geüpload
- [ ] Metadata (SEO) geüpdatet
- [ ] Lokaal getest op desktop en mobiel
- [ ] Production build succesvol (`npm run build`)
- [ ] Gedeployed naar productie
- [ ] Live website getest
- [ ] Google Sheets sync getest
- [ ] Formulier submission getest
- [ ] Social media posts voorbereid met link

---

**Veel succes met de HYROX Simulation! 💪🏃‍♂️**

Voor vragen: welcome@crossfitleiden.com
