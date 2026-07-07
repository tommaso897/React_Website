import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [
    { slug: "7-poggiali-plastic-creations-alla-sicam-2023-una-importante-occasione-per-l-espansione-nel-mercato-europeo" },
    { slug: "6-poggiali-plastic-progetto-di-espansione-commerciale-all-estero-per-la-ripresa-post-covid-nel-2022" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ContributoDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === "7-poggiali-plastic-creations-alla-sicam-2023-una-importante-occasione-per-l-espansione-nel-mercato-europeo") {
    return (
      <div className="flex flex-col w-full">
        {/* Page Header */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#002554] via-[#0b213b] to-zinc-950 py-16 px-6 sm:px-12 lg:px-24 text-white text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,164,215,0.1),transparent_45%)]" />
          <div className="relative max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#28a4d7]/10 text-[#28a4d7] border border-[#28a4d7]/20 uppercase tracking-wider">
              Bando Fiere 2023
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Poggiali Plastic Creations alla SICAM 2023
            </h1>
            <p className="text-zinc-400 text-xs font-medium">
              Progetto di espansione commerciale nel mercato europeo
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-zinc-900">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                Descrizione della partecipazione
              </h2>
              <div className="w-12 h-0.5 bg-[#28a4d7] rounded-full" />
              <p className="text-zinc-650 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                Poggiali Plastic Creations ha partecipato con successo al Salone Internazionale dei Componenti, Accessori e Semilavorati per l'Industria del Mobile (SICAM), svoltosi a Pordenone nel 2023. La partecipazione è stata avviata con l’obiettivo strategico di espandere la nostra clientela verso altri paesi dell'Unione Europea, individuando come mercato target prioritario la Germania.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                Risultati e Impatto
              </h2>
              <div className="w-12 h-0.5 bg-[#28a4d7] rounded-full" />
              <p className="text-zinc-650 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                La fiera ha offerto una straordinaria visibilità al nostro marchio e ai nostri prodotti di stampaggio ad iniezione (come piedini per divani e articoli tecnici). Questo ci ha consentito di instaurare solidi e promettenti rapporti commerciali diretti con distributori chiave attivi in Germania e in altri paesi europei.
              </p>
            </div>

            {/* Poster CTA Block */}
            <div className="bg-zinc-50 dark:bg-zinc-850 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 mt-12">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50 text-sm sm:text-base">
                  Poster Informativo del Progetto
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs">
                  Visualizza i dettagli dei contributi concessi ai sensi delle normative vigenti.
                </p>
              </div>
              <a
                href="/images/poster-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#28a4d7] hover:bg-[#28a4d7]/90 text-white font-semibold text-xs py-3.5 px-6 rounded-xl transition-all text-center shadow-sm"
              >
                📥 Scarica il Poster (PDF)
              </a>
            </div>

            {/* Back Button */}
            <div className="pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50">
              <Link
                href="/contributi"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#002554] dark:text-[#28a4d7] hover:underline"
              >
                ← Torna all'elenco contributi
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (slug === "6-poggiali-plastic-progetto-di-espansione-commerciale-all-estero-per-la-ripresa-post-covid-nel-2022") {
    return (
      <div className="flex flex-col w-full">
        {/* Page Header */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#002554] via-[#0b213b] to-zinc-950 py-16 px-6 sm:px-12 lg:px-24 text-white text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,164,215,0.1),transparent_45%)]" />
          <div className="relative max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#28a4d7]/10 text-[#28a4d7] border border-[#28a4d7]/20 uppercase tracking-wider">
              Fondo FESR & Ripresa Covid
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Progetto di Espansione Commerciale all'Estero
            </h1>
            <p className="text-zinc-400 text-xs font-medium">
              Iniziativa di sviluppo internazionale per la ripresa post Covid-19
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-zinc-900">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                Descrizione del progetto
              </h2>
              <div className="w-12 h-0.5 bg-[#28a4d7] rounded-full" />
              <p className="text-zinc-650 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                Il progetto di sviluppo commerciale all’estero di <strong>Poggiali Plastic Creations S.r.l.</strong>, ditta specializzata nello stampaggio di materiali plastici ad iniezione, ha identificato la fiera internazionale <strong>“SICAM 2022”</strong> a Pordenone quale strumento strategico di crescita con l’obiettivo di strutturare una distribuzione a livello mondiale dei propri prodotti.
              </p>
            </div>

            {/* Objectives */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                Obiettivi
              </h2>
              <div className="w-12 h-0.5 bg-[#28a4d7] rounded-full" />
              <p className="text-zinc-650 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                L’obiettivo dell’impresa è stato quello di promuovere i prodotti aziendali all’interno di una qualificata platea internazionale. Questo ha permesso di:
              </p>
              <ul className="list-disc pl-5 text-zinc-650 dark:text-zinc-300 text-sm sm:text-base space-y-2">
                <li>Promuovere ed accrescere il valore del marchio aziendale a livello internazionale.</li>
                <li>Presentare i prodotti aziendali con particolare riferimento alle novità del nostro catalogo articoli.</li>
                <li>Consolidare i rapporti commerciali esistenti con clienti storici e distributori esteri.</li>
              </ul>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                Risultati ottenuti
              </h2>
              <div className="w-12 h-0.5 bg-[#28a4d7] rounded-full" />
              <p className="text-zinc-650 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                A seguito delle iniziative promozionali attivate nell’ambito del progetto di espansione commerciale all'estero per la ripresa post covid nel 2021, sono stati attivati importanti rapporti commerciali diretti con <strong>5 aziende</strong> dislocate nei mercati esteri target individuati all'inizio del progetto.
              </p>
            </div>

            {/* Funding statement */}
            <div className="p-4 bg-[#28a4d7]/5 border border-[#28a4d7]/15 rounded-xl text-center text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              🇪🇺 Progetto cofinanziato dal Fondo europeo di sviluppo regionale (FESR)
            </div>

            {/* Poster CTA Block */}
            <div className="bg-zinc-50 dark:bg-zinc-850 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 mt-12">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50 text-sm sm:text-base">
                  Poster Informativo del Progetto
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs">
                  Visualizza i dettagli del finanziamento concesso a valere sui fondi europei FESR.
                </p>
              </div>
              <a
                href="/images/poster.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#28a4d7] hover:bg-[#28a4d7]/90 text-white font-semibold text-xs py-3.5 px-6 rounded-xl transition-all text-center shadow-sm"
              >
                📥 Scarica il Poster (PDF)
              </a>
            </div>

            {/* Back Button */}
            <div className="pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50">
              <Link
                href="/contributi"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#002554] dark:text-[#28a4d7] hover:underline"
              >
                ← Torna all'elenco contributi
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Fallback to 404
  notFound();
}
