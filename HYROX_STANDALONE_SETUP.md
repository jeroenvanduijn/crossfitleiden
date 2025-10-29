# HYROX Simulation - Standalone Landingspagina Setup

## 🎯 Standalone Landingspagina

De HYROX Simulation website is gebouwd als een **standalone landingspagina** binnen het CrossFit Leiden project. Dit betekent:

- ✅ **Eigen header en footer** - Niet de hoofdwebsite navigatie
- ✅ **Volledig gefocust op conversie** - Geen afleiding
- ✅ **Beschikbaar op subdomein** - `hyrox.crossfitleiden.com` of `crossfitleiden.com/hyrox`
- ✅ **Aparte branding** - Eigen HYROX identiteit binnen CFL huisstijl
- ✅ **Gescheiden van hoofdsite** - Geen cross-links

**Belangrijke bestanden:**
```
app/hyrox/
├── layout.tsx            → Custom layout (gebruikt HyroxHeader & HyroxFooter)
├── page.tsx              → Hoofdlandingspagina
└── heats/page.tsx        → Heats & Uitslagen

components/
├── HyroxHeader.tsx       → HYROX-specifieke navigatie
└── HyroxFooter.tsx       → HYROX-specifieke footer (met link terug naar hoofdsite)
```

---

## 🌐 Subdomein Configuratie

### Optie 1: Via Pad (Standaard)
De HYROX pagina is bereikbaar via:
```
https://crossfitleiden.com/hyrox
```

### Optie 2: Via Subdomein (Aanbevolen voor Marketing)
Voor een echte standalone ervaring, configureer:
```
https://hyrox.crossfitleiden.com
```

#### Stappen voor Subdomein:

**1. DNS Configuratie bij je Domain Provider:**

Voeg een CNAME record toe:
```
Type: CNAME
Name: hyrox
Value: cname.vercel-dns.com
TTL: 3600 (of Auto)
```

**2. Vercel Domain Toevoegen:**

1. Ga naar [Vercel Dashboard](https://vercel.com/dashboard)
2. Selecteer je CrossFit Leiden project
3. Ga naar **Settings → Domains**
4. Klik **Add Domain**
5. Voer in: `hyrox.crossfitleiden.com`
6. Klik **Add**
7. Vercel controleert automatisch de DNS configuratie
8. Wacht op verificatie (meestal binnen 1 uur, max 48 uur)

**3. Automatische Rewrites:**

De `vercel.json` is al geconfigureerd! Bezoekers van `hyrox.crossfitleiden.com` worden automatisch naar `/hyrox` geleid zonder dat ze het merken.

#### Test het Subdomein:

Na DNS propagatie (kan tot 48 uur duren):
```bash
# Check of DNS resolved
nslookup hyrox.crossfitleiden.com

# Of ping
ping hyrox.crossfitleiden.com
```

---

## 📱 Navigatie Structuur

### HYROX Header (HyroxHeader.tsx)

De standalone header bevat:
- **Logo**: "HYROX SIMULATION" + "CrossFit Leiden" tagline
- **Navigatie**:
  - Over HYROX (anchor link naar #over)
  - Waarom Meedoen (anchor link naar #waarom)
  - Heats & Uitslagen (link naar `/hyrox/heats`)
- **CTA**: "Schrijf je in" (anchor link naar #inschrijven)

### HYROX Footer (HyroxFooter.tsx)

De standalone footer bevat:
- **Event Info**: Links binnen HYROX (Over, Waarom, Heats, Inschrijven)
- **Contact Info**: CrossFit Leiden adres, email, telefoon, social media
- **Link terug naar hoofdsite**: "Bezoek CrossFit Leiden →"

### Belangrijke Anchor Links

De landingspagina gebruikt anchor links voor smooth scrolling:
- `#over` → "Over de HYROX Simulation" sectie
- `#waarom` → "Waarom Meedoen" sectie
- `#inschrijven` → Inschrijfformulier sectie

Deze zijn al geconfigureerd in de navigatie!

---

## 🎨 Branding & Styling

De HYROX landingspagina gebruikt:
- **CrossFit Leiden kleuren**: Cinnabar, Verdigris, Jonquil
- **Eigen gradient hero**: Cinnabar → Verdigris
- **Diagonale patronen**: Voor energie en beweging
- **Focus op conversie**: Grote CTA's, weinig afleiding

**Belangrijk**: De hoofdwebsite header/footer is NIET zichtbaar op HYROX pagina's!

---

## 🔗 Links tussen Sites

### Van Hoofdsite naar HYROX:
Momenteel zijn er **geen directe links** van de hoofdwebsite naar HYROX. Dit is opzettelijk om HYROX als standalone te behandelen.

Als je toch een link wilt toevoegen:
1. Open `components/Header.tsx`
2. Voeg toe aan navigation array: `{ name: "HYROX Event", href: "/hyrox" }`

### Van HYROX naar Hoofdsite:
Er is één subtiele link in de HYROX footer:
```tsx
<a href="https://crossfitleiden.com">
  Bezoek CrossFit Leiden →
</a>
```

Dit geeft bezoekers de optie om CrossFit Leiden te ontdekken zonder afleidend te zijn.

---

## 🚀 Marketing Tips voor Standalone

### Waarom Standalone?

1. **Focus**: Bezoekers zijn er om in te schrijven voor HYROX, niet om je gym te browsen
2. **Conversie**: Geen afleidende links = hogere conversie
3. **A/B Testing**: Makkelijker om verschillende versies te testen
4. **Analytics**: Duidelijk inzicht in HYROX-specifieke traffic
5. **Marketing**: Eigen URL is makkelijker te delen: "hyrox.crossfitleiden.com"

### Marketing Kanalen:

**Social Media:**
```
🏃‍♂️ HYROX Simulation - 1 November
Test je vorm in een supportieve omgeving!

👉 Schrijf je in: hyrox.crossfitleiden.com

#HYROX #CrossFitLeiden #Fitness
```

**Email:**
Gebruik `hyrox.crossfitleiden.com` in je email campaigns voor betere tracking.

**QR Code:**
Genereer een QR code naar `hyrox.crossfitleiden.com` voor posters/flyers.

**Instagram Bio:**
Link direct naar `hyrox.crossfitleiden.com` tijdens marketing periode.

---

## 📊 Analytics & Tracking

### Google Analytics Setup (Optioneel)

Om HYROX traffic apart te tracken:

1. **Voeg GA4 toe aan de HYROX layout:**

Bewerk `app/hyrox/layout.tsx`:

```tsx
export default function HyroxLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* ... rest */}
      </head>
      {/* ... */}
    </html>
  );
}
```

2. **Track belangrijke events:**

In `app/hyrox/page.tsx`, voeg event tracking toe aan CTA's:

```tsx
<a
  href="#inschrijven"
  onClick={() => {
    // @ts-ignore
    if (window.gtag) {
      // @ts-ignore
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'hero_cta',
      });
    }
  }}
  className="bg-white text-cinnabar ..."
>
  Schrijf je in
</a>
```

### UTM Parameters

Voor betere tracking, gebruik UTM parameters in marketing:
```
hyrox.crossfitleiden.com?utm_source=instagram&utm_medium=social&utm_campaign=hyrox_nov_2025
```

---

## 🔄 Voor Volgende Events

De standalone structuur maakt het makkelijk om HYROX te hergebruiken:

1. **Update datum** in `app/hyrox/page.tsx`
2. **Nieuwe Google Sheet ID** in `app/hyrox/heats/page.tsx`
3. **Nieuwe HighLevel form** embed
4. **Nieuwe foto's** in `public/images/hyrox/`
5. **Klaar!**

Je hoeft de hoofdwebsite niet aan te passen!

---

## ✅ Voordelen Standalone Aanpak

| Aspect | Standalone | Geïntegreerd |
|--------|-----------|--------------|
| Focus op conversie | ✅ Excellent | ⚠️ Gemiddeld |
| Marketing flexibiliteit | ✅ Excellent | ⚠️ Beperkt |
| Analytics duidelijkheid | ✅ Excellent | ⚠️ Gemengd |
| Onderhoud hoofdsite | ✅ Onafhankelijk | ❌ Afhankelijk |
| Eigen branding | ✅ Mogelijk | ❌ Moeilijk |
| A/B testing | ✅ Makkelijk | ❌ Complex |
| Subdomein mogelijkheid | ✅ Ja | ❌ Nee |

---

## 🆘 Troubleshooting

### "Ik zie nog steeds de hoofdsite header"
→ Check of `app/hyrox/layout.tsx` bestaat en gebruikt wordt
→ Clear browser cache en hard refresh (Cmd/Ctrl + Shift + R)

### "Subdomein werkt niet"
→ Check DNS met `nslookup hyrox.crossfitleiden.com`
→ Wacht 24-48 uur voor DNS propagatie
→ Verifieer in Vercel Dashboard dat domain toegevoegd is

### "Anchor links werken niet"
→ Check of id's zijn toegevoegd: `<section id="over">`, `<section id="waarom">`, etc.
→ Test in browser console: `document.getElementById('over')`

### "Layout breekt op mobiel"
→ Test met browser dev tools (F12 → Device toolbar)
→ Check responsive breakpoints in Tailwind classes

---

## 📞 Support

Voor vragen over de standalone setup:
- Email: welcome@crossfitleiden.com
- Documentatie: Zie `HYROX_SETUP.md` voor technische setup (Google Sheets, HighLevel, etc.)

**Volgende stappen**: Zie `HYROX_SETUP.md` voor Google Sheets, HighLevel formulier, en deployment instructies!
