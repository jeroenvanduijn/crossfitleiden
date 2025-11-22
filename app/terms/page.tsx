export default function TermsPage() {
  return (
    <div className="container-custom section-padding max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-gray-700">
          Welkom bij CrossFit Leiden. Deze algemene voorwaarden zijn van toepassing op al onze diensten en lidmaatschappen.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Lidmaatschap</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Lidmaatschappen worden maandelijks automatisch verlengd</li>
          <li>Opzegging kan tot de 1e van de maand voor de volgende facturatieperiode</li>
          <li>Bij opzegging blijf je welkom tot het einde van de betaalde periode</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Betaling</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Betaling vindt plaats via automatische incasso</li>
          <li>De contributie wordt aan het begin van elke maand geïnd</li>
          <li>Bij niet-betaling kunnen we je toegang tijdelijk opschorten</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Lessen & Reserveringen</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Reserveren van lessen is verplicht via onze app of website</li>
          <li>Annuleren kan tot 2 uur voor aanvang van de les</li>
          <li>Late annuleringen kunnen leiden tot verlies van een leskredit</li>
          <li>Maximum aantal deelnemers per les is 12 personen</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Gedragsregels</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Respectvol gedrag naar coaches en andere leden</li>
          <li>Apparatuur netjes en veilig gebruiken</li>
          <li>Materiaal opruimen na gebruik</li>
          <li>Op tijd komen voor lessen</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Aansprakelijkheid</h2>
        <p className="text-gray-700">
          Sport brengt altijd risico's met zich mee. Je neemt deel op eigen risico. CrossFit Leiden is niet
          aansprakelijk voor blessures die ontstaan tijdens training, tenzij er sprake is van grove nalatigheid.
        </p>
        <p className="text-gray-700">
          We raden je aan om bij twijfel altijd eerst medisch advies in te winnen voordat je begint met trainen.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Wijzigingen</h2>
        <p className="text-gray-700">
          CrossFit Leiden behoudt zich het recht voor om deze algemene voorwaarden te wijzigen.
          Wijzigingen worden van tevoren aangekondigd via email of op de website.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
        <p className="text-gray-700">
          Heb je vragen over onze voorwaarden? Neem dan contact met ons op:
        </p>
        <p className="text-gray-700">
          Email: <a href="mailto:welcome@crossfitleiden.com" className="text-cinnabar hover:underline">welcome@crossfitleiden.com</a><br />
          Telefoon: <a href="tel:0712340477" className="text-cinnabar hover:underline">071 - 234 0477</a><br />
          Adres: Marie Diebenplaats 108, 2324 NG Leiden
        </p>

        <p className="text-sm text-gray-500 mt-12">
          Laatst bijgewerkt: November 2025
        </p>
      </div>
    </div>
  );
}
