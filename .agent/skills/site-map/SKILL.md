---
name: CrossFit Leiden Site Map
description: Overzicht van alle pagina's, componenten en GHL-integraties van de CrossFit Leiden website. Gebruik dit als eerste referentie bij het zoeken naar pagina's of functionaliteit.
---

# CrossFit Leiden — Site Map & Referentie

Raadpleeg dit bestand wanneer je een pagina, component of GHL-integratie moet vinden.

## Pagina's (`app/[locale]/...`)

| Route | Bestand | Doel / Beschrijving |
|-------|---------|---------------------|
| `/` | `page.tsx` | Homepage met hero, programma's, reviews, KickstartBlock |
| `/starten` | `starten/page.tsx` | **Intake booking pagina** — Twee GHL booking calendars: Fysieke Intro (in gym) + Online Intro (video call). Redirect-doel na popup-formulier. Keywords: *intake, agenda, booking, calendar, no sweat intro, intake-plannen* |
| `/gratis-intro` | `gratis-intro/page.tsx` | Informatiepagina over de No Sweat Intro (wat het is, wat je kunt verwachten) |
| `/kickstart` | `kickstart/page.tsx` | Kickstart programma overzicht |
| `/kickstart/jouw-eerste-28-dagen` | `kickstart/jouw-eerste-28-dagen/page.tsx` | Journey-pagina: de eerste 28 dagen als nieuw lid |
| `/tarieven` | `tarieven/page.tsx` | Prijzen en abonnementen |
| `/rooster` | `rooster/page.tsx` | Lesrooster |
| `/contact` | `contact/page.tsx` | Contactpagina met GHL contactformulier |
| `/opzeggen` | `opzeggen/page.tsx` | Opzegformulier (GHL) |
| `/member-service` | `member-service/page.tsx` | Member Services hub (FAQ, links naar booking/opzeggen/pauze) |
| `/ervaringen` | `ervaringen/page.tsx` | Reviews / ervaringen |
| `/over-ons` | `over-ons/page.tsx` | Over ons |
| `/over-ons/team` | `over-ons/team/page.tsx` | Team pagina met coaches |
| `/over-ons/locatie` | `over-ons/locatie/page.tsx` | Locatie informatie |
| `/nutrition` | `nutrition/page.tsx` | Voedingsprogramma's |
| `/fitness-test` | `fitness-test/page.tsx` | Fitness test / InBody |
| `/links` | `links/page.tsx` | Link-in-bio stijl pagina |
| `/privacy` | `privacy/page.tsx` | Privacybeleid |
| `/terms` | `terms/page.tsx` | Algemene voorwaarden |
| `/info/drop-in` | `info/drop-in/page.tsx` | Drop-in informatie |
| `/info/faciliteit` | `info/faciliteit/page.tsx` | Faciliteiten |

### Aanbod pagina's (`/aanbod/...`)

| Route | Beschrijving |
|-------|-------------|
| `/aanbod` | Overzicht van alle programma's |
| `/aanbod/groepslessen` | CrossFit groepslessen |
| `/aanbod/hyrox` | HYROX training |
| `/aanbod/private-coaching` | Personal training |
| `/aanbod/small-group` | Small group training |
| `/aanbod/sport-performance` | Sport performance |
| `/aanbod/teens` | Teens programma |
| `/aanbod/pre-teens` | Pre-teens programma |
| `/aanbod/fysiofabriek` | Fysiotherapie |
| `/aanbod/body-apk` | Body-APK: houding- en bewegingsanalyse door coach Jari. GHL booking embed (`shoFMv6aUldZKsGsUxfm`) |
| `/aanbod/workshops` | Workshops |

### Events (`/events/...`)

| Route | Beschrijving |
|-------|-------------|
| `/events/de-volgende-ronde` | De Volgende Ronde event |
| `/events/hyrox-simulation` | HYROX simulatie event |
| `/events/leidse-wintertriatlon` | Leidse Wintertriatlon |

### Blog posts (`/blog/...`)

| Route | Beschrijving |
|-------|-------------|
| `/blog` | Blog overzicht |
| `/blog/hoge-intensiteit-of-kracht-opbouwen` | Hoge intensiteit of kracht opbouwen — intensiteit, coaching & community |
| `/blog/crossfit-na-je-40e` | CrossFit na je 40e |
| `/blog/terug-in-beweging-na-zwangerschap` | Terug in beweging na zwangerschap |
| `/blog/van-kantoorstoel-naar-barbell` | Van kantoorstoel naar barbell |
| `/blog/trainen-met-een-blessureverleden` | Trainen met een blessureverleden |
| `/blog/nervous-to-start-one-small-step` | Nervous to start? One small step |
| `/blog/no-sleeping-members` | No sleeping members |
| `/blog/more-training-is-not-always-better` | More training is not always better |
| `/blog/how-to-start-crossfit-when-youre-busy` | How to start when you're busy |
| `/blog/is-crossfit-safe` | Is CrossFit safe? |
| `/blog/why-80-percent-start-as-beginners` | Why 80% start as beginners |
| `/blog/what-happens-during-free-intro` | What happens during a free intro |
| `/blog/crossfit-for-40-plus-beginners` | CrossFit for 40+ beginners |

---

## Belangrijke Componenten (`components/`)

| Component | Bestand | Doel |
|-----------|---------|------|
| `HighLevelPopup` | `HighLevelPopup.tsx` | **Hoofd CTA popup** — GHL formulier (naam/telefoon/email). Stuurt `generate_lead` GA4 event bij submit. Geopend via `window.openCFLPopup()` |
| `KickstartPromoPopup` | `KickstartPromoPopup.tsx` | Promo popup voor Kickstart programma (plekken april/mei) |
| `WhatsAppPopup` | `WhatsAppPopup.tsx` | WhatsApp chat widget |
| `Header` | `Header.tsx` | Navigatie header met dropdown menu's |
| `Footer` | `Footer.tsx` | Footer |
| `CTA` | `CTA.tsx` | Call-to-action secties |
| `CTAButton` | `CTAButton.tsx` | CTA knop component |
| `KickstartBlock` | `KickstartBlock.tsx` | Kickstart info blok voor op pagina's |
| `MemberServicesHub` | `MemberServicesHub.tsx` | Member services FAQ en links hub |
| `PageHistoryTracker` | `PageHistoryTracker.tsx` | Trackt pagina-navigatie voor GHL |
| `CookieConsent` | `CookieConsent.tsx` | Cookie consent banner |
| `IntroCtaSection` | `IntroCtaSection.tsx` | Intro CTA sectie |

---

## GHL (GoHighLevel) Integraties

| Wat | URL / ID | Waar gebruikt |
|-----|----------|---------------|
| Intake formulier (popup) | `XceYD5LZEfvepWfcdvXJ` | `HighLevelPopup.tsx` |
| Fysieke Intro booking | `Xx2YGcdzQDQVudn1Y5ta` | `starten/page.tsx` |
| Online Intro booking | `bLCQAlE718t0sWd9Ojys` | `starten/page.tsx` |
| Contact formulier | `b4Qn1S6E0UFidH567ZY6` | `contact/page.tsx` |
| Opzeg formulier | `PbjexJEnp4gfrN0xz3vZ` | `opzeggen/page.tsx` |
| Goal Review booking | `grgym` | `MemberServicesHub.tsx` |
| Nutrition Intro booking | `cflnutritionintro` | `MemberServicesHub.tsx` |
| Body-APK Intro Call | `shoFMv6aUldZKsGsUxfm` | `aanbod/body-apk/page.tsx` |
| Embed script | `https://links.gymops.nl/js/form_embed.js` | Meerdere pagina's |

---

## Lead Flow

```
Bezoeker klikt CTA → HighLevelPopup opent → Vult formulier in →
GHL ontvangt lead → GA4 generate_lead event → Redirect naar /starten →
Bezoeker boekt No Sweat Intro via booking calendar
```

---

## Vertalingen

- `messages/nl.json` — Nederlandse vertalingen
- `messages/en.json` — Engelse vertalingen
- `lib/translations.ts` — Aanvullende vertalingen
- `lib/site.ts` — Site configuratie en navigatie structuur
