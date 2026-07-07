import Link from "next/link";
import Image from "next/image";

export default function AziendaPage() {
  const stats = [
    { value: "1961", label: "Anno di Fondazione", desc: "Oltre 60 anni di esperienza nel settore." },
    { value: "7", label: "Presse ad Iniezione", desc: "Un parco macchine efficiente e diversificato." },
    { value: "35t - 360t", label: "Forza di Chiusura", desc: "Capacità per pezzi di diverse dimensioni e pesi." },
    { value: "100%", label: "Made in Italy", desc: "Produzione interamente situata a Massa Lombarda (RA)." },
  ];

  const materials = [
    { name: "PLP (Polipropilene)", desc: "Versatile, leggero e resistente agli agenti chimici." },
    { name: "Nylon (Poliammide)", desc: "Ottime proprietà meccaniche e resistenza all'usura." },
    { name: "Acetalica (POM)", desc: "Elevata rigidità, basso attrito e stabilità dimensionale." },
    { name: "ABS", desc: "Resistenza agli urti e ottima finitura estetica superficiale." },
    { name: "Metacrilati (PMMA)", desc: "Trasparenza eccezionale e resistenza ai raggi UV." },
    { name: "Policarbonati (PC)", desc: "Massima resistenza all'impatto e alta trasparenza." },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#002554] via-[#0b213b] to-zinc-950 py-20 px-6 sm:px-12 lg:px-24 text-white text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,164,215,0.1),transparent_45%)]" />
        <div className="relative max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#28a4d7]/10 text-[#28a4d7] border border-[#28a4d7]/20 uppercase tracking-wider">
            Chi Siamo
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Poggiali Plastic Creations
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Dal 1961, stampiamo idee e realizziamo prodotti in plastica ad iniezione con precisione e passione artigianale.
          </p>
        </div>
      </section>

      {/* Main Narrative & History with Press Image */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Narrative Text */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Una tradizione industriale dal 1961
            </h2>
            <div className="w-12 h-1 bg-[#28a4d7] rounded-full" />
            <p className="text-zinc-650 dark:text-zinc-350 leading-relaxed text-base">
              Fondata nel <strong>1961</strong>, la nostra azienda si occupa con dedizione e professionalità dello stampaggio di materie plastiche ad iniezione. Da oltre sei decenni ci evolviamo per rispondere con precisione alle richieste tecnologiche del mercato, mantenendo intatta la cura e la flessibilità tipiche della nostra storia.
            </p>
            <p className="text-zinc-650 dark:text-zinc-350 leading-relaxed text-base">
              Disponiamo di un reparto produttivo equipaggiato con <strong>7 presse ad iniezione</strong> che coprono un range di forza di chiusura da <strong>35 a 360 tonnellate</strong>. Questa versatilità ci consente di stampare sia piccoli componenti di precisione che articoli di dimensioni e peso più significativi.
            </p>
          </div>

          {/* Press Image */}
          <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-xl border border-zinc-200/50 dark:border-zinc-800/50">
            <Image
              src="/images/pressa-1200x1000.jpg"
              alt="Presse ad iniezione Poggiali Plastic Creations"
              fill
              priority
              className="object-cover"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      {/* Key Metrics / Numbers Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/30 shadow-sm text-center space-y-2 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#28a4d7]">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Specialization Cards */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-zinc-50 dark:bg-zinc-850 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              La Nostra Missione
            </h3>
            <div className="w-8 h-0.5 bg-[#28a4d7] rounded-full" />
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Il nostro obiettivo principale è quello di fornire il prodotto ideale che risponde esattamente alle esigenze del cliente, garantendo il <strong>massimo rapporto qualità-prezzo</strong> ed elevati standard di affidabilità.
            </p>
          </div>

          {/* Specialization Card */}
          <div className="bg-zinc-50 dark:bg-zinc-850 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Specializzazioni di Settore
            </h3>
            <div className="w-8 h-0.5 bg-[#28a4d7] rounded-full" />
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Siamo storicamente specializzati nella realizzazione di articoli e componenti in plastica per il settore degli imbottiti (<strong>divani e poltrone</strong>) e per i sistemi di riposo (<strong>reti da letto</strong>).
            </p>
          </div>
        </div>
      </section>

      {/* Materials Showcase */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              I Materiali Lavorati
            </h2>
            <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              La nostra produzione utilizza un'ampia varietà di tecnopolimeri scelti in base alle specifiche sollecitazioni meccaniche ed estetiche richieste dal prodotto.
            </p>
            <div className="w-12 h-1 bg-[#28a4d7] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/30 hover:-translate-y-1 transition-all duration-300"
              >
                <h4 className="text-base font-bold text-[#002554] dark:text-[#28a4d7] mb-2">
                  {material.name}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {material.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships / Stampaggio Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-zinc-900 border-t border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-16 h-16 bg-[#28a4d7]/10 rounded-2xl flex items-center justify-center text-3xl mx-auto">
            🛠️
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Progettazione e Costruzione Stampo
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed max-w-2xl mx-auto font-light">
              Per offrire un servizio completo, ci avvaliamo della preziosa collaborazione esterna di stampisti altamente qualificati. Questo ci permette di gestire con successo la progettazione e la realizzazione di <strong>nuovi stampi in acciaio ed alluminio</strong> e, a richiesta del cliente, lo sviluppo di prototipi precisi.
            </p>
          </div>
          <div className="pt-4">
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-[#002554] hover:bg-[#002554]/90 dark:bg-[#28a4d7] dark:hover:bg-[#28a4d7]/90 text-white font-semibold py-3 px-6 rounded-full transition-colors shadow-sm"
            >
              Richiedi una consulenza per il tuo progetto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
