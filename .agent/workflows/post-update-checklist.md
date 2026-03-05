---
description: VERPLICHT uitvoeren na het aanmaken, wijzigen of verwijderen van pagina's, componenten of vertalingen. Doorloop deze checklist aan het einde van elke taak die de website wijzigt.
---

# Post-Update Checklist

Doorloop deze stappen na elke significante wijziging aan de CrossFit Leiden website.

## Bij nieuwe pagina's

1. **Sitemap.ts** — Voeg de nieuwe route toe aan `app/sitemap.ts` met juiste priority en changeFrequency
2. **Navigatie** — Voeg de pagina toe als sub-item in `components/Header.tsx` (onder het juiste dropdown menu)
3. **Site map skill** — Update `.agent/skills/site-map/SKILL.md` met de nieuwe pagina en eventuele GHL-integraties
4. **Vertalingen** — Zorg dat zowel `messages/nl.json` als `messages/en.json` bijgewerkt zijn
5. **Aanbod overzicht** — Als het een aanbod-pagina is: voeg een kaart toe op `/aanbod` (page.tsx)

## Bij elke wijziging

6. **Build check** — Run `npx next build` en controleer op errors (exit code 0)
7. **Git commit & push** — Commit met duidelijke commit message en push naar `main`
8. **Vercel deploy** — Controleer dat Vercel automatisch deployt na push

## Bij content-wijzigingen op bestaande pagina's

9. **Taal-consistentie** — Als de pagina hardcoded tekst heeft: update zowel NL als EN
10. **Cross-links** — Controleer of gerelateerde pagina's ook bijgewerkt moeten worden
