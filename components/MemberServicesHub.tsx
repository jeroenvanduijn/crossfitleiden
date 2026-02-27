import { useState, useEffect, useRef, useMemo } from "react";

interface FAQ {
  q: string;
  a: string;
}

interface Action {
  label: string;
  href: string;
}

interface Category {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  actions: Action[];
  faqs: FAQ[];
}

// ─── Data ────────────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: "membership",
    icon: "🏠",
    title: "Mijn Abonnement",
    subtitle: "Prijzen, pauzeren, upgraden & opzeggen",
    color: "#EF4C37",
    actions: [
      { label: "Opzeggen", href: "https://www.crossfitleiden.com/nl/opzeggen" },
      { label: "Pauzeren", href: "https://links.gymops.nl/widget/form/9vXZ8MOHQwySdb0hhJAK" },
      { label: "Goal Review boeken", href: "https://links.gymops.nl/widget/bookings/grgym" },
    ],
    faqs: [
      {
        q: "Welke abonnementen bieden jullie aan?",
        a: `<strong>Regular Group:</strong><br/>Base – 3x per week @ €139/maand<br/>Pro – 4x per week @ €154/maand<br/>Elite – 6x per week @ €174/maand<br/><br/><strong>Teens:</strong><br/>Teens 1x per week – €44/maand<br/>Teens 2x per week – €84/maand<br/>Pre-Teens 1x per week – €44/maand<br/><br/><strong>Semi-Private (GetShredded):</strong><br/>Morning Shredded maandelijks – €465/maand<br/>Morning Shredded 6-maanden contract – €414/maand<br/>Add-on Nutrition coaching – €200/maand`,
      },
      {
        q: "Hoe kan ik mijn abonnement opzeggen?",
        a: `Je kunt je abonnement pauzeren of opzeggen met een opzegtermijn van één kalendermaand. Dat betekent dat na je opzegging je abonnement pas de maand erna stopt.<br/><br/>Voorbeeld: als je op 31 december opzegt, stopt je abonnement per 1 februari.<br/><br/><a href="https://www.crossfitleiden.com/nl/opzeggen" target="_blank" class="faq-link">→ Opzegformulier</a>`,
      },
      {
        q: "Hoe kan ik mijn abonnement pauzeren?",
        a: `Je kunt je abonnement pauzeren bij reizen, blessure of persoonlijke omstandigheden. De pauzefee is €50 per maand om je plek te behouden.<br/><br/>Bij een blessure of medische reden kun je een directe pauze aanvragen zonder opzegtermijn (met bewijs van je huisarts of fysiotherapeut).<br/><br/><a href="https://links.gymops.nl/widget/form/9vXZ8MOHQwySdb0hhJAK" target="_blank" class="faq-link">→ Pauze aanvragen</a>`,
      },
      {
        q: "Hoe kan ik upgraden of downgraden?",
        a: `Je kunt switchen tussen abonnementen via de mobiele app. In sommige gevallen kun je niet direct upgraden (bijv. als je class pack bijna vol zit). Neem dan contact op via WhatsApp.<br/><br/><strong>Upgrades:</strong> direct mogelijk<br/><strong>Downgrades:</strong> gaan in na de huidige periode`,
      },
      {
        q: "Bieden jullie drop-in classes aan?",
        a: `Ja, voor bezoekers met minimaal 6 maanden CrossFit-ervaring. Niet alle klassen zijn beschikbaar voor drop-ins – we geven voorrang aan onze leden tijdens piekmomenten.<br/><br/><a href="https://www.crossfitleiden.com/nl/info/drop-in?page_history=%2Fnl+-%3E+%2Fnl%2Fopzeggen+-%3E+%2Fnl%2Finfo%2Fdrop-in" target="_blank" class="faq-link">→ Drop-in boeken</a>`,
      },
      {
        q: "Zijn er gezins- of koppelkortingen?",
        a: `Nee, we bieden geen kortingen aan. Onze prijzen weerspiegelen de waarde van onze community, waar de meeste leden komen voor de coaching en het gemeenschapsgevoel.`,
      },
      {
        q: "Waarom bieden jullie geen strippenkaarten aan?",
        a: `Onze visie is om een sterke community te bouwen van mensen die minimaal drie keer per week trainen. Daardoor ontstaan de beste resultaten en de sterkste verbindingen.`,
      },
      {
        q: "Waarom moet ik als nieuw lid de Kickstart doen?",
        a: `We hechten veel waarde aan hoge coaching standaarden. Elke nieuw lid start daarom met de Kickstart om de basis goed te leren, goede voeding mee te krijgen, en direct een trainingsritme op te bouwen.`,
      },
      {
        q: "Hoe boek ik een Goal Review?",
        a: `Een Goal Review is inbegrepen bij je abonnement en kun je elke 90 dagen boeken.<br/><br/><a href="https://links.gymops.nl/widget/bookings/grgym" target="_blank" class="faq-link">→ Goal Review boeken</a>`,
      },
    ],
  },
  {
    id: "kickstart",
    icon: "🚀",
    title: "28-Day Kickstart",
    subtitle: "Alles over je eerste maand",
    color: "#F7CB15",
    actions: [
      { label: "Mighty Networks inloggen", href: "https://creativesportscompany.mn.co/plans/385241?bundle_token=3e35e528dfa1569629ab314471208c60" },
      { label: "Google Review plaatsen", href: "https://g.page/r/CYP2cQ0RD2vxEBM/review" },
    ],
    faqs: [
      {
        q: "Wat is de Kickstart?",
        a: `De Kickstart is ontworpen om maximale resultaten te behalen in minimale tijd.<br/><br/><strong>1. Gestructureerd trainingsplan</strong><br/>Train de eerste maand in een kleine groep (max. 5 personen) op ma/wo/vr.<br/><br/><strong>2. Persoonlijke voedingscoaching</strong><br/>Dagelijks contact met Coach Stef voor een voedingsplan op maat.<br/><br/><strong>3. Investering & garantie</strong><br/>De eerste maand kost €600, met geld-terug-garantie. Bonus: alle 12 sessies afmaken = tweede maand gratis!`,
      },
      {
        q: "Hoe meld ik me aan voor de Kickstart classes?",
        a: `Gebruik de Creative Sports Company app om je in te schrijven.<br/><br/><a href="https://apps.apple.com/nl/app/creative-sports-company/id1507434278" target="_blank" class="faq-link">→ Download voor Apple</a><br/><a href="https://play.google.com/store/apps/details?id=com.dexos.sportbit.cfleiden&hl=nl" target="_blank" class="faq-link">→ Download voor Android</a>`,
      },
      {
        q: "Hoe log ik in op Mighty Networks?",
        a: `Je moet een nieuw account aanmaken – je inloggegevens van de Creative Sports Company app werken hier niet.<br/><br/><a href="https://creativesportscompany.mn.co/plans/385241?bundle_token=3e35e528dfa1569629ab314471208c60" target="_blank" class="faq-link">→ Inloggen bij Mighty Networks</a>`,
      },
      {
        q: "Hoe verdien ik de gratis maand?",
        a: `Maak 12 workouts af binnen 28 dagen en plaats een Google Review. Dan is je tweede maand helemaal gratis!<br/><br/><a href="https://g.page/r/CYP2cQ0RD2vxEBM/review" target="_blank" class="faq-link">→ Google Review plaatsen</a>`,
      },
      {
        q: "Wat als ik een Kickstart sessie moet missen?",
        a: `Meld je altijd af via de app. Afhankelijk van wanneer je afmeldt, kun je mogelijk een andere sessie boeken.`,
      },
    ],
  },
  {
    id: "classes",
    icon: "💪",
    title: "Lessen & Training",
    subtitle: "Class types, focus hours & beleid",
    color: "#0CBABA",
    actions: [],
    faqs: [
      {
        q: "Welke soorten lessen bieden jullie aan?",
        a: `<strong>CFL Training</strong> – Onze dagelijkse CrossFit workout voor algemene conditie<br/><strong>Hyrox Training</strong> – Gericht op voorbereiding voor Hyrox wedstrijden<br/><strong>Intensity Training</strong> – High-energy workout om je grenzen te verleggen<br/><strong>Oly met Sem</strong> – Olympisch gewichtheffen: Clean & Jerk en Snatch<br/><strong>Running met Jef</strong> – Hardloopsessies<br/><strong>Urban Training</strong> – Outdoor workout met sleden, touwen en zandzakken<br/><strong>Gymnastics Workshop</strong> – Gymnastiek vaardigheden<br/><strong>CFL Teens</strong> – Voor tieners`,
      },
      {
        q: "Wat zijn Focus Hours?",
        a: `Focus Hours geven je de kans om extra te trainen op je persoonlijke doelen. Je moet eerst een Goal Review doen om een programma te krijgen.<br/><br/>Let op: Metcon-style workouts zijn niet toegestaan tijdens Focus Hours. Gebruik deze tijd voor het programma dat je coach voor je heeft gemaakt.`,
      },
      {
        q: "Waarom doen jullie niet meer aan stretching of Yoga?",
        a: `Onze focus is functionele training. We integreren mobility work direct in onze training in plaats van aparte lessen. Sterker worden vergroot je range of motion – een dikkere elastiek rekt ook verder uit. We ondersteunen leden die yoga willen combineren met CrossFit graag.`,
      },
      {
        q: "Wat als ik geblesseerd ben?",
        a: `<strong>Stap 1:</strong> Boek een afspraak bij FysioFabriek (onze in-house fysio)<br/><strong>Stap 2:</strong> Helemaal stoppen is meestal niet de beste optie. De fysio geeft aanpassingen voor je training<br/><strong>Stap 3:</strong> Voel je je onzeker? Boek een Goal Review met een coach<br/><br/>We updaten ons systeem zodat coaches op de hoogte zijn van je blessure.<br/><br/><a href="https://api.spotonmedics.nl/praktijk/EditAppointment?step=1" target="_blank" class="faq-link">→ FysioFabriek afspraak maken</a>`,
      },
      {
        q: "Wat is het aanmeld- en afmeldbeleid?",
        a: `<strong>Aanmelden:</strong> Tot 1 week van tevoren en tot op het laatste moment<br/><strong>Afmelden:</strong> Tot 2 uur van tevoren zonder credit te verliezen<br/><strong>Vroege lessen & weekendlessen:</strong> Minimaal 8 uur van tevoren afmelden<br/><strong>Te laat afmelden:</strong> Kost een credit`,
      },
      {
        q: "Wanneer worden lessen gecanceld door CrossFit Leiden?",
        a: `We cancelen een les alleen als er minder dan 3 boekingen zijn. In dat geval nemen we altijd persoonlijk contact op met de 1 of 2 deelnemers, minimaal 2 uur van tevoren. We cancelen alleen als we iedereen kunnen bereiken en bieden altijd een alternatief aan, zoals een andere les op dezelfde dag of een ander moment.`,
      },
    ],
  },
  {
    id: "getshredded",
    icon: "🔥",
    title: "GetShredded",
    subtitle: "Semi-private training programma",
    color: "#7B6D8D",
    actions: [
      { label: "Aanmelden via WhatsApp", href: "https://wa.me/31712340477" },
    ],
    faqs: [
      {
        q: "Hoe meld ik me aan voor GetShredded?",
        a: `Neem contact op via Member Services WhatsApp. Let op: plekken zijn beperkt en er kan een wachtlijst zijn.`,
      },
      {
        q: "Wanneer zijn de GetShredded lessen?",
        a: `<strong>Ochtendprogramma</strong> (3x per week: ma/wo/vr)<br/>06:00 / 07:00 / 08:00 / 09:00<br/><br/><strong>Avondprogramma</strong> (2x per week: di/do)<br/>20:00<br/><br/>Je traint altijd op hetzelfde tijdstip met dezelfde groep.`,
      },
      {
        q: "Wat maakt GetShredded anders?",
        a: `Semi-private training met maximaal 5 personen en één vaste coach. Je krijgt een gepersonaliseerd programma, meer individuele aandacht, en je bereikt meer in 60 minuten dan in een reguliere groepsles.`,
      },
      {
        q: "Wanneer is GetShredded geschikt voor mij?",
        a: `Perfect als je: moeite hebt met consistentie, een plateau hebt bereikt, traint voor een specifiek doel (Hyrox, marathon, bruiloft), of de voorkeur geeft aan een kleinere groep.`,
      },
      {
        q: "Wat kost GetShredded?",
        a: `<strong>Morning Shredded:</strong><br/>Maandelijks: €465/maand<br/>6-maanden contract: €414/maand<br/><br/><strong>Add-on:</strong><br/>Nutrition coaching: €200/maand<br/><em>Nieuw: Coach Jeffrey maakt een persoonlijk voedingsplan voor je en houdt je accountable gedurende het programma.</em>`,
      },
      {
        q: "Kan ik pauzeren bij GetShredded?",
        a: `Je kunt maximaal 2 weken pauzeren per 6 maanden (of 4 weken per jaar). Er geldt een houdingsfee van €50 per week om je plek te behouden.`,
      },
      {
        q: "Hoe zeg ik GetShredded op?",
        a: `Er geldt een opzegtermijn van 2 maanden. Deel dit met je GetShredded coach én stuur een e-mail naar <a href="mailto:welcome@crossfitleiden.com" class="faq-link">welcome@crossfitleiden.com</a>.`,
      },
    ],
  },
  {
    id: "unlock",
    icon: "🧬",
    title: "Unlock Motion",
    subtitle: "Beweeg beter, voel je beter, presteer beter",
    color: "#0CBABA",
    actions: [
      { label: "Aanmelden via WhatsApp", href: "https://wa.me/31712340477" },
    ],
    faqs: [
      {
        q: "Wat houdt Unlock Motion in?",
        a: `Unlock Motion is een uniek small-group programma gericht op <strong>bewegingskwaliteit</strong>. In plaats van alleen harder of zwaarder trainen, leer je je lichaam écht begrijpen en beter bewegen.<br/><br/>Onder begeleiding van coach Jari werk je in kleine groepen (max. 4 personen) aan mobiliteit, motorische controle en lichaamsbewustzijn. Het programma helpt je om pijn en beperkingen te verminderen, je range of motion te vergroten, en uiteindelijk beter te presteren in al je andere training.<br/><br/>Of je nu last hebt van stijfheid, terugkerende blessures, of gewoon het gevoel hebt dat je lichaam meer kan: Unlock Motion helpt je om de basis te leggen voor duurzame, pijnvrije beweging.`,
      },
      {
        q: "Hoe meld ik me aan voor Unlock Motion?",
        a: `Neem contact op via Member Services WhatsApp. Let op: plekken zijn beperkt (max. 4 per groep) en er kan een wachtlijst zijn.<br/><br/><a href="https://wa.me/31712340477" target="_blank" class="faq-link">→ Aanmelden via WhatsApp</a>`,
      },
      {
        q: "Wat maakt Unlock Motion anders?",
        a: `Waar reguliere groepslessen focussen op <strong>wat</strong> je doet (de workout), richt Unlock Motion zich op <strong>hoe</strong> je beweegt. Het is geen standaard training of fysiotherapie, maar zit er precies tussenin.<br/><br/>In groepen van maximaal 4 personen krijg je een volledig gepersonaliseerd programma van coach Jari. Elke sessie bouwt voort op de vorige, zodat je stap voor stap meer controle en vrijheid in je bewegingen krijgt.<br/><br/>Veel leden merken dat ze dingen over hun lichaam leren die ze dagelijks gebruiken, niet alleen in de gym maar ook daarbuiten.`,
      },
      {
        q: "Wanneer is Unlock Motion geschikt voor mij?",
        a: `Unlock Motion is geschikt voor iedereen, ongeacht je niveau. Het is ideaal als je:<br/><br/>• <strong>Terugkerende pijn of beperkingen hebt</strong> die je trainen in de weg zitten<br/>• <strong>Een plateau hebt bereikt</strong> en het gevoel hebt dat je mobiliteit je tegenhoudt<br/>• <strong>Beter wilt bewegen</strong> in het dagelijks leven en in je training<br/>• <strong>Revalideert van een blessure</strong> en gestructureerd wilt terugkomen<br/>• <strong>Nieuwsgierig bent</strong> naar wat je lichaam écht kan als je het goed aanstuurt`,
      },
      {
        q: "Wat kost Unlock Motion?",
        a: `<strong>6-maanden contract:</strong> €499/maand<br/><strong>3-maanden contract:</strong> €545/maand<br/><strong>Maandelijks:</strong> €595/maand<br/><br/>Je traint 2x per week (dinsdag en donderdag) in een vaste kleine groep met maximaal 4 personen.`,
      },
      {
        q: "Kan ik pauzeren bij Unlock Motion?",
        a: `Je kunt je lidmaatschap pauzeren bij vakantie, blessure of persoonlijke omstandigheden. Er geldt een houdingsfee om je plek in de groep te behouden. Neem contact op via WhatsApp voor de exacte voorwaarden.`,
      },
      {
        q: "Hoe zeg ik Unlock Motion op?",
        a: `Er geldt een opzegtermijn van 2 maanden. Deel dit met je coach én stuur een e-mail naar <a href="mailto:welcome@crossfitleiden.com" class="faq-link">welcome@crossfitleiden.com</a>.`,
      },
    ],
  },
  {
    id: "pt",
    icon: "🎯",
    title: "Personal Training",
    subtitle: "1-op-1 coaching & tarieven",
    color: "#EF4C37",
    actions: [
      { label: "Goal Review boeken", href: "https://links.gymops.nl/widget/bookings/grgym" },
    ],
    faqs: [
      {
        q: "Waarom Personal Training?",
        a: `Ideaal voor: gepersonaliseerde programmering, meer aandacht voor techniek, doorbreken van plateaus, revalidatie bij blessures, of als je extra motivatie en accountability zoekt.`,
      },
      {
        q: "Hoe boek ik een PT sessie?",
        a: `Begin met een Goal Review om je doelen te bespreken. Daarna plan je samen met je coach een traject van 5-10 sessies. Niet zeker welke coach? Neem contact op via Member Services.<br/><br/><a href="https://links.gymops.nl/widget/bookings/grgym" target="_blank" class="faq-link">→ Goal Review boeken</a>`,
      },
      {
        q: "Wat kost Personal Training?",
        a: `<strong>60 minuten:</strong><br/>1 sessie: €95<br/>5 sessies: €465<br/>10 sessies: €830<br/><br/><strong>30 minuten:</strong><br/>1 sessie: €45<br/>5 sessies: €230<br/>10 sessies: €410<br/><br/><strong>Monthly PT Membership:</strong><br/>1x per maand: €95<br/>2x per maand: €181<br/>4x per maand: €382<br/><br/>Goal Review: gratis (inbegrepen bij je abonnement)`,
      },
      {
        q: "Wat is het afmeldbeleid voor PT?",
        a: `Je kunt tot 24 uur voor aanvang afmelden of verzetten. Je ontvangt een bevestigingsmail met een link om je boeking te beheren.`,
      },
      {
        q: "Kan ik een specifieke coach kiezen?",
        a: `Ja! Bij het boeken van een Goal Review kun je een coach selecteren. Geen beschikbaarheid? Neem contact op via WhatsApp.`,
      },
    ],
  },
  {
    id: "nutrition",
    icon: "🥗",
    title: "Voeding & Lifestyle",
    subtitle: "Coaching & programma's",
    color: "#F7CB15",
    actions: [
      { label: "Gratis voedingsintake boeken", href: "https://links.gymops.nl/widget/bookings/cflnutritionintro" },
    ],
    faqs: [
      {
        q: "Bieden jullie voedingsadvies of -plannen aan?",
        a: `<strong>1. Nutrition Kickstart</strong><br/>Hetzelfde programma als nieuwe leden volgen, op maat gemaakt. Investering: €220 voor 4 weken.<br/><br/><strong>2. Nutrition 1-op-1 Coaching</strong><br/>Volledig gepersonaliseerd programma met een coach. Investering: €350/maand.<br/><br/><a href="https://links.gymops.nl/widget/bookings/cflnutritionintro" target="_blank" class="faq-link">→ Gratis voedingsintake boeken</a>`,
      },
    ],
  },
  {
    id: "community",
    icon: "🤝",
    title: "Community & Events",
    subtitle: "Nieuws, events & vrienden meenemen",
    color: "#0CBABA",
    actions: [
      { label: "WhatsApp Community joinen", href: "https://chat.whatsapp.com/LG9L9LWsVOpKjsx2DEkxM8" },
      { label: "Vriend uitnodigen", href: "https://kilo.gymleadmachine.com/widget/form/G5tdzrtuqKVBUvkxvhmH" },
    ],
    faqs: [
      {
        q: "Hoe blijf ik op de hoogte van nieuws en events?",
        a: `Check je e-mail inbox voor onze nieuwsbrief, bekijk de inbox in de mobiele app (en zet push-notificaties aan!), en join onze WhatsApp Community.<br/><br/><a href="https://chat.whatsapp.com/LG9L9LWsVOpKjsx2DEkxM8" target="_blank" class="faq-link">→ WhatsApp Community joinen</a>`,
      },
      {
        q: "Kan ik een vriend of familielid meenemen?",
        a: `Ja! Nodig ze uit voor een Flex Friday sessie.<br/><br/><a href="https://kilo.gymleadmachine.com/widget/form/G5tdzrtuqKVBUvkxvhmH" target="_blank" class="faq-link">→ Vriend aanmelden voor Flex Friday</a>`,
      },
    ],
  },
  {
    id: "support",
    icon: "📱",
    title: "Apps & Support",
    subtitle: "Mobiele apps, contact & account",
    color: "#7B6D8D",
    actions: [
      { label: "E-mail sturen", href: "mailto:welcome@crossfitleiden.com" },
      { label: "WhatsApp Member Services", href: "https://wa.me/31712340477" },
    ],
    faqs: [
      {
        q: "Welke apps gebruiken jullie?",
        a: `<strong>1. Creative Sports Company App</strong><br/>Voor het boeken van lessen, account beheren, en facturen downloaden.<br/><br/><strong>2. Mighty Networks App</strong><br/>Voor coaching content, community, en het Kickstart programma.`,
      },
      {
        q: "Hoe kan ik de gym of een coach bereiken?",
        a: `<strong>E-mail:</strong> <a href="mailto:welcome@crossfitleiden.com" class="faq-link">welcome@crossfitleiden.com</a><br/><strong>WhatsApp:</strong> Via de Member Services WhatsApp button<br/><br/>Let op: we delen geen persoonlijke telefoonnummers van coaches.`,
      },
      {
        q: "Is er een WhatsApp groep?",
        a: `Ja! We hebben een CrossFit Leiden WhatsApp Community met verschillende groepen.<br/><br/><a href="https://chat.whatsapp.com/LG9L9LWsVOpKjsx2DEkxM8" target="_blank" class="faq-link">→ WhatsApp Community joinen</a>`,
      },
      {
        q: "Hoe wijzig ik mijn bankgegevens of adres?",
        a: `Ga naar My Account in de Creative Sports Company app om je persoonlijke gegevens aan te passen.`,
      },
      {
        q: "Kan ik een factuur krijgen?",
        a: `Ja, download facturen zelf via de mobiele app: My Account → Bills & Invoices.`,
      },
    ],
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

function DiamondPattern() {
  return (
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
      overflow: "hidden", pointerEvents: "none", opacity: 0.04,
    }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diamonds" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect x="25" y="0" width="20" height="20" fill="#EF4C37" transform="rotate(45, 35, 10)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diamonds)" />
      </svg>
    </div>
  );
}

function SearchBar({ value, onChange, resultCount }: { value: string; onChange: (v: string) => void; resultCount: number }) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        inputRef.current?.blur();
        onChange("");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onChange]);

  return (
    <div style={{
      position: "relative", maxWidth: 600, margin: "0 auto",
      animation: "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
    }}>
      <div style={{
        position: "relative", background: "#fff",
        borderRadius: 16, overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
        border: "2px solid transparent",
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}>
        <span style={{
          position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
          fontSize: 20, opacity: 0.4, pointerEvents: "none",
        }}>🔍</span>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Zoek je vraag... (druk / om te focussen)"
          style={{
            width: "100%", padding: "18px 60px 18px 52px", border: "none",
            fontSize: 16, fontFamily: "'DM Sans', sans-serif", outline: "none",
            background: "transparent", color: "#1a1a1a", boxSizing: "border-box",
          }}
        />
        {value && (
          <button
            onClick={() => onChange("")}
            style={{
              position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
              background: "#f0f0f0", border: "none", borderRadius: 8,
              padding: "6px 10px", cursor: "pointer", fontSize: 13,
              fontFamily: "'DM Sans', sans-serif", color: "#666",
            }}
          >
            ✕ Wis
          </button>
        )}
      </div>
      {value && (
        <div style={{
          textAlign: "center", marginTop: 8, fontSize: 13,
          color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif",
        }}>
          {resultCount} {resultCount === 1 ? "resultaat" : "resultaten"} gevonden
        </div>
      )}
    </div>
  );
}

function CategoryCard({ category, index, onClick, isActive }: { category: Category; index: number; onClick: () => void; isActive: boolean }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: isActive ? category.color : "#fff",
        color: isActive ? "#fff" : "#1a1a1a",
        border: "none",
        borderRadius: 16,
        padding: "24px 20px",
        cursor: "pointer",
        textAlign: "left",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: isActive
          ? `0 8px 32px ${category.color}44`
          : "0 2px 12px rgba(0,0,0,0.06)",
        animation: `slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + index * 0.06}s both`,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        minHeight: 120,
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = `0 8px 24px ${category.color}22`;
          e.currentTarget.style.borderColor = category.color;
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
          e.currentTarget.style.borderColor = "transparent";
        }
      }}
    >
      <div style={{
        position: "absolute", top: -10, right: -10, width: 60, height: 60,
        background: isActive ? "rgba(255,255,255,0.1)" : `${category.color}08`,
        borderRadius: "50%", transform: "rotate(45deg)",
      }} />
      <span style={{ fontSize: 28, lineHeight: 1 }}>{category.icon}</span>
      <span style={{
        fontSize: 16, fontWeight: 700,
        fontFamily: "'Outfit', sans-serif",
        letterSpacing: "-0.01em",
      }}>
        {category.title}
      </span>
      <span style={{
        fontSize: 13,
        opacity: isActive ? 0.85 : 0.55,
        fontFamily: "'DM Sans', sans-serif",
        lineHeight: 1.3,
      }}>
        {category.subtitle}
      </span>
    </button>
  );
}

function ActionButton({ action, color }: { action: Action; color: string }) {
  return (
    <a
      href={action.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "10px 18px", borderRadius: 10,
        background: color, color: "#fff",
        textDecoration: "none", fontSize: 14, fontWeight: 600,
        fontFamily: "'DM Sans', sans-serif",
        transition: "all 0.2s",
        boxShadow: `0 2px 8px ${color}44`,
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = `0 4px 16px ${color}66`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = `0 2px 8px ${color}44`;
      }}
    >
      <span>→</span> {action.label}
    </a>
  );
}

function FAQItem({ faq, isOpen, onToggle, highlight, color }: { faq: FAQ; isOpen: boolean; onToggle: () => void; highlight: string; color: string }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const questionText = highlight
    ? faq.q.replace(
      new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"),
      `<mark style="background:${color}33;padding:1px 3px;border-radius:3px">$1</mark>`
    )
    : faq.q;

  return (
    <div style={{
      borderBottom: "1px solid #f0f0f0",
      transition: "background 0.2s",
    }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 16,
          padding: "18px 20px", border: "none",
          background: "transparent", cursor: "pointer",
          textAlign: "left", fontSize: 15, fontWeight: 600,
          fontFamily: "'DM Sans', sans-serif",
          color: "#1a1a1a", lineHeight: 1.4,
        }}
        onMouseEnter={(e) => { if (e.currentTarget.parentElement) e.currentTarget.parentElement.style.background = "#fafafa"; }}
        onMouseLeave={(e) => { if (e.currentTarget.parentElement) e.currentTarget.parentElement.style.background = "transparent"; }}
      >
        <span dangerouslySetInnerHTML={{ __html: questionText }} />
        <span style={{
          flexShrink: 0, width: 28, height: 28,
          display: "flex", alignItems: "center", justifyContent: "center",
          borderRadius: 8, background: isOpen ? color : "#f0f0f0",
          color: isOpen ? "#fff" : "#999",
          transition: "all 0.3s",
          fontSize: 14, fontWeight: 700,
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        }}>
          ▾
        </span>
      </button>
      <div style={{
        height, overflow: "hidden",
        transition: "height 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        <div
          ref={contentRef}
          style={{
            padding: "0 20px 20px 20px",
            fontSize: 14, lineHeight: 1.7,
            color: "#444",
            fontFamily: "'DM Sans', sans-serif",
          }}
          dangerouslySetInnerHTML={{ __html: faq.a }}
        />
      </div>
    </div>
  );
}

function CategoryDetail({ category, searchQuery }: { category: Category; searchQuery: string }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (searchQuery) setOpenFaq(0);
    else setOpenFaq(null);
  }, [category.id, searchQuery]);

  return (
    <div style={{
      animation: "fadeIn 0.3s ease",
    }}>
      {/* Actions */}
      {category.actions.length > 0 && (
        <div style={{
          padding: "20px 20px 8px",
          display: "flex", flexWrap: "wrap", gap: 10,
        }}>
          <div style={{
            width: "100%", fontSize: 11, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.08em",
            color: "#999", marginBottom: 4,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Snelle acties
          </div>
          {category.actions.map((action, i) => (
            <ActionButton key={i} action={action} color={category.color} />
          ))}
        </div>
      )}

      {/* Divider */}
      {category.actions.length > 0 && (
        <div style={{ height: 1, background: "#f0f0f0", margin: "12px 20px" }} />
      )}

      {/* FAQs */}
      <div>
        {category.faqs.map((faq, i) => (
          <FAQItem
            key={i}
            faq={faq}
            isOpen={openFaq === i}
            onToggle={() => setOpenFaq(openFaq === i ? null : i)}
            highlight={searchQuery}
            color={category.color}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main App ────────────────────────────────────────────────────────────────

export default function MemberServicesHub() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  // Filter categories and FAQs based on search
  const filteredData = useMemo(() => {
    if (!search.trim()) return CATEGORIES;
    const q = search.toLowerCase();
    return CATEGORIES.map((cat) => ({
      ...cat,
      faqs: cat.faqs.filter(
        (faq) =>
          faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q)
      ),
    })).filter((cat) => cat.faqs.length > 0);
  }, [search]);

  const totalResults = useMemo(
    () => filteredData.reduce((sum, cat) => sum + cat.faqs.length, 0),
    [filteredData]
  );

  // Auto-select first category when searching
  useEffect(() => {
    if (search && filteredData.length > 0) {
      setActiveCategory(filteredData[0].id);
    }
  }, [search, filteredData]);

  const activeCat = filteredData.find((c) => c.id === activeCategory);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#fafafa",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Outfit:wght@600;700;800;900&display=swap');
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .faq-link {
          color: #EF4C37;
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.2s;
        }
        .faq-link:hover { opacity: 0.7; }
        
        mark { background: #EF4C3733 !important; }
        
        /* Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #ddd; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #bbb; }
      `}</style>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        padding: "48px 24px 40px",
        position: "relative",
        overflow: "hidden",
      }}>
        <DiamondPattern />

        {/* Accent line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg, #EF4C37, #F7CB15, #0CBABA, #7B6D8D)",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          {/* Logo */}
          <div style={{
            textAlign: "center", marginBottom: 24,
            animation: "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both",
          }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 12,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                border: "2px solid #EF4C37",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, fontWeight: 900, color: "#EF4C37",
                fontFamily: "'Outfit', sans-serif",
              }}>
                ✕
              </div>
              <span style={{
                color: "#fff", fontSize: 14, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                fontFamily: "'Outfit', sans-serif",
              }}>
                CrossFit Leiden
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 900,
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: "-0.02em",
            marginBottom: 8,
            animation: "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
          }}>
            Member Services
          </h1>
          <p style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.5)",
            fontSize: 15,
            marginBottom: 28,
            animation: "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both",
          }}>
            Vind snel antwoord op je vraag of neem direct actie
          </p>

          {/* Search */}
          <SearchBar
            value={search}
            onChange={setSearch}
            resultCount={totalResults}
          />
        </div>
      </div>

      {/* Main content */}
      <div style={{
        maxWidth: 1000, margin: "0 auto",
        padding: "32px 20px 60px",
      }}>
        {/* Category Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 12,
          marginBottom: 32,
        }}>
          {filteredData.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              index={i}
              isActive={activeCategory === cat.id}
              onClick={() => {
                setActiveCategory(activeCategory === cat.id ? null : cat.id);
                setTimeout(() => {
                  detailRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 100);
              }}
            />
          ))}
        </div>

        {/* No results */}
        {search && filteredData.length === 0 && (
          <div style={{
            textAlign: "center", padding: "48px 20px",
            animation: "fadeIn 0.3s ease",
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🤔</div>
            <h3 style={{
              fontSize: 20, fontWeight: 700, marginBottom: 8,
              fontFamily: "'Outfit', sans-serif",
            }}>
              Geen resultaten voor "{search}"
            </h3>
            <p style={{ color: "#666", fontSize: 14, marginBottom: 20 }}>
              Probeer andere zoektermen of neem contact met ons op
            </p>
            <a
              href="https://wa.me/31712340477"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 24px", borderRadius: 12,
                background: "#25D366", color: "#fff",
                textDecoration: "none", fontSize: 15, fontWeight: 600,
              }}
            >
              💬 WhatsApp Member Services
            </a>
          </div>
        )}

        {/* Detail panel */}
        {activeCat && (
          <div
            ref={detailRef}
            style={{
              background: "#fff",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              animation: "fadeIn 0.3s ease",
              scrollMarginTop: 20,
            }}
          >
            {/* Category header */}
            <div style={{
              padding: "20px 20px 16px",
              borderBottom: `3px solid ${activeCat.color}`,
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <span style={{ fontSize: 28 }}>{activeCat.icon}</span>
              <div>
                <h2 style={{
                  fontSize: 20, fontWeight: 800,
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "-0.01em",
                  color: "#1a1a1a",
                }}>
                  {activeCat.title}
                </h2>
                <p style={{
                  fontSize: 13, color: "#888", marginTop: 2,
                }}>
                  {activeCat.faqs.length} {activeCat.faqs.length === 1 ? "vraag" : "vragen"}
                </p>
              </div>
            </div>

            <CategoryDetail
              category={activeCat}
              searchQuery={search}
            />
          </div>
        )}

        {/* Empty state - no category selected */}
        {!activeCategory && !search && (
          <div style={{
            textAlign: "center", padding: "40px 20px",
            color: "#999", fontSize: 14,
            animation: "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both",
          }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>☝️</div>
            Kies een categorie hierboven of zoek op trefwoord
          </div>
        )}

        {/* WhatsApp footer */}
        <div style={{
          textAlign: "center", marginTop: 48,
          padding: "32px 20px",
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          animation: "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both",
        }}>
          <p style={{
            fontSize: 15, fontWeight: 600, marginBottom: 4,
            fontFamily: "'Outfit', sans-serif",
          }}>
            Niet gevonden wat je zocht?
          </p>
          <p style={{
            fontSize: 13, color: "#888", marginBottom: 16,
          }}>
            Ons team helpt je graag verder via WhatsApp
          </p>
          <a
            href="https://wa.me/31712340477"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "14px 28px", borderRadius: 14,
              background: "#25D366", color: "#fff",
              textDecoration: "none", fontSize: 15, fontWeight: 600,
              boxShadow: "0 4px 16px rgba(37, 211, 102, 0.3)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(37, 211, 102, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(37, 211, 102, 0.3)";
            }}
          >
            💬 Chat met Member Services
          </a>
        </div>
      </div>
    </div>
  );
}
