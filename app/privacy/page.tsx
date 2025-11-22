export default function PrivacyPage() {
  return (
    <div className="container-custom section-padding max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-gray-700">
          CrossFit Leiden respecteert de privacy van alle bezoekers van de website en dragers van onze diensten.
          In deze privacyverklaring leggen we uit welke persoonsgegevens we verzamelen en gebruiken.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Welke gegevens verzamelen we?</h2>
        <p className="text-gray-700">
          Wanneer je contact met ons opneemt of een account aanmaakt, kunnen we de volgende gegevens verzamelen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Naam en contactgegevens (email, telefoonnummer)</li>
          <li>Adresgegevens</li>
          <li>Geboortedatum</li>
          <li>Betaalgegevens</li>
          <li>Gezondheids- en fitnessinformatie (indien relevant)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Waarvoor gebruiken we je gegevens?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Om je te registreren als lid</li>
          <li>Om lessen en afspraken in te plannen</li>
          <li>Om betalingen te verwerken</li>
          <li>Om contact met je op te nemen over je lidmaatschap</li>
          <li>Om je te informeren over nieuwe aanbiedingen (alleen met toestemming)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Beveiliging</h2>
        <p className="text-gray-700">
          We nemen passende technische en organisatorische maatregelen om je persoonsgegevens te beschermen
          tegen verlies of onrechtmatige verwerking.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Je rechten</h2>
        <p className="text-gray-700">
          Je hebt het recht om:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Je persoonsgegevens in te zien</li>
          <li>Je gegevens te laten corrigeren</li>
          <li>Je gegevens te laten verwijderen</li>
          <li>Bezwaar te maken tegen verwerking van je gegevens</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
        <p className="text-gray-700">
          Heb je vragen over onze privacyverklaring? Neem dan contact met ons op via:
        </p>
        <p className="text-gray-700">
          Email: <a href="mailto:welcome@crossfitleiden.com" className="text-cinnabar hover:underline">welcome@crossfitleiden.com</a><br />
          Telefoon: <a href="tel:0712340477" className="text-cinnabar hover:underline">071 - 234 0477</a>
        </p>

        <p className="text-sm text-gray-500 mt-12">
          Laatst bijgewerkt: November 2025
        </p>
      </div>
    </div>
  );
}
