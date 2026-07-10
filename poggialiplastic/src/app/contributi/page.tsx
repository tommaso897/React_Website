import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contributi Pubblici",
  description: "Trasparenza amministrativa sui contributi pubblici ricevuti da Poggiali Plastic Creations S.r.l. per progetti europei, SICAM e post-Covid.",
  openGraph: {
    title: "Contributi Pubblici | Poggiali Plastic Creations",
    description: "Trasparenza amministrativa sui contributi pubblici ricevuti da Poggiali Plastic Creations S.r.l. per progetti europei, SICAM e post-Covid.",
  },
};

export default function ContributiPage() {
  const contributi = [
    {
      slug: "7-poggiali-plastic-creations-alla-sicam-2023-una-importante-occasione-per-l-espansione-nel-mercato-europeo",
      title: "Poggiali Plastic Creations alla SICAM 2023: una importante occasione per l’espansione nel mercato europeo",
      summary: "La nostra partecipazione al SICAM 2023 di Pordenone con l'obiettivo di consolidare ed espandere i rapporti commerciali nell'Unione Europea, con focus specifico sulla Germania.",
      date: "2023",
      category: "Fiere & Internazionalizzazione",
    },
    {
      slug: "6-poggiali-plastic-progetto-di-espansione-commerciale-all-estero-per-la-ripresa-post-covid-nel-2022",
      title: "Poggiali plastic: progetto di espansione commerciale all'estero per la ripresa post covid nel 2022",
      summary: "Sviluppo commerciale all'estero tramite la fiera SICAM 2022, per promuovere il marchio aziendale a livello internazionale e avviare nuove collaborazioni commerciali post-pandemia.",
      date: "2022",
      category: "Fondo FESR & Ripresa Covid",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#002554] via-[#0b213b] to-zinc-950 py-20 px-6 sm:px-12 lg:px-24 text-white text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,164,215,0.1),transparent_45%)]" />
        <div className="relative max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#28a4d7]/10 text-[#28a4d7] border border-[#28a4d7]/20 uppercase tracking-wider">
            Trasparenza
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contributi Pubblici
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            In ottemperanza agli obblighi di trasparenza, pubblichiamo i dettagli dei progetti finanziati e cofinanziati dall'Unione Europea e dagli enti pubblici.
          </p>
        </div>
      </section>

      {/* Main List Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto space-y-8">
          {contributi.map((item, index) => (
            <div
              key={index}
              className="group bg-zinc-50 dark:bg-zinc-850 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:shadow-zinc-200/10 dark:hover:shadow-black/20 transition-all duration-300 flex flex-col sm:flex-row justify-between gap-6"
            >
              <div className="space-y-4 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-bold bg-[#28a4d7]/10 text-[#28a4d7] rounded-md uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                    Anno: {item.date}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-[#28a4d7] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
                  {item.summary}
                </p>
              </div>
              <div className="flex sm:items-center">
                <Link
                  href={`/contributi/${item.slug}`}
                  className="w-full sm:w-auto bg-[#002554] dark:bg-[#28a4d7] hover:opacity-95 text-white text-xs font-semibold py-3 px-6 rounded-xl transition-all shadow-sm text-center"
                >
                  Leggi di più
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
