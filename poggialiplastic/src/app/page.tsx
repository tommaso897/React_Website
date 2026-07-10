import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  description: "Fondata nel 1961, Poggiali Plastic Creations è specializzata nello stampaggio ad iniezione di materie plastiche, tecnopolimeri e articoli per arredamento.",
  openGraph: {
    title: "Poggiali Plastic Creations - Stampaggio Plastica a Iniezione",
    description: "Fondata nel 1961, Poggiali Plastic Creations è specializzata nello stampaggio ad iniezione di materie plastiche, tecnopolimeri e articoli per arredamento.",
  },
};

export default function Home() {
  const services = [
    {
      title: "Supporto al Progetto",
      description: "Assistenza tecnica per ottimizzare l'idea e industrializzare il pezzo per lo stampaggio.",
      icon: (
        <svg className="w-8 h-8 text-[#28a4d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Prototipazione Rapida",
      description: "Realizzazione di prototipi e campioni fisici in stampa 3D per testare forma e accoppiamenti.",
      icon: (
        <svg className="w-8 h-8 text-[#28a4d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "Realizzazione Stampo",
      description: "Collaborazione con stampisti esperti per la costruzione di stampi ad alta precisione in acciaio o alluminio.",
      icon: (
        <svg className="w-8 h-8 text-[#28a4d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Stampaggio Plastica",
      description: "Produzione in serie con 7 presse ad iniezione da 35 a 360 ton per stampare diversi tipi di tecnopolimeri.",
      icon: (
        <svg className="w-8 h-8 text-[#28a4d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      ),
    },
    {
      title: "Trattamento Superfici",
      description: "Finitura estetica, verniciatura e trattamenti superficiali personalizzati su richiesta del cliente.",
      icon: (
        <svg className="w-8 h-8 text-[#28a4d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      title: "Assemblaggio",
      description: "Montaggio di componenti accessori e fornitura del prodotto finito pronto per l'imballo.",
      icon: (
        <svg className="w-8 h-8 text-[#28a4d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2H13a2 2 0 01-2-2V4zm-4 7a2 2 0 114 0v1a2 2 0 01-2 2H9a2 2 0 01-2-2v-1zm8 0a2 2 0 114 0v1a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden bg-cover bg-center py-24 sm:py-32 px-6 sm:px-12 lg:px-24 text-white flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: "url('/images/pallini-1200x1000.jpg')" }}
      >
        {/* Dark overlay for text readability and brand gradient integration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#002554]/85 via-[#0b213b]/90 to-zinc-950/95" />
        
        <div className="relative max-w-4xl mx-auto space-y-8">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#28a4d7]/10 text-[#28a4d7] border border-[#28a4d7]/20 uppercase tracking-widest">
            Fondata nel 1961
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Stampaggio di materiali plastici <span className="text-[#28a4d7]">ad iniezione</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light">
            Soluzioni industriali di eccellenza, stampaggio di tecnopolimeri di precisione e supporto completo alla progettazione. Specializzati in articoli per divani e reti da letto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/prodotti"
              className="w-full sm:w-auto bg-[#28a4d7] hover:bg-[#28a4d7]/90 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#28a4d7]/20 hover:-translate-y-0.5 text-center"
            >
              Scopri i Prodotti
            </Link>
            <Link
              href="/azienda"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-8 rounded-full border border-white/15 transition-all duration-300 backdrop-blur-sm text-center"
            >
              La Nostra Storia
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-[#28a4d7] uppercase tracking-widest">
              PRODOTTI IN PLASTICA
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Articoli in plastica realizzati su disegno
            </h3>
            <div className="w-12 h-1 bg-[#28a4d7] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Product Card 1 */}
            <div className="group relative bg-zinc-50 dark:bg-zinc-850 rounded-3xl p-8 border border-zinc-200/50 dark:border-zinc-800/50 hover:shadow-xl hover:shadow-zinc-200/10 dark:hover:shadow-black/20 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#28a4d7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative space-y-4">
                <div className="w-12 h-12 bg-[#002554]/10 dark:bg-[#28a4d7]/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#002554] dark:text-[#28a4d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {/* Backrest */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14a1 1 0 011 1v4H4V9a1 1 0 011-1z" />
                    {/* Seat cushion */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h18v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3z" />
                    {/* Armrests */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 11H3v5h1M20 11h1v5h-1" />
                    {/* Visible sofa feet/legs */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18l-1.5 3.5M18 18l1.5 3.5" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-[#28a4d7] transition-colors">
                  Piedi ed articoli per divani e poltrone
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  Progettazione e stampaggio di piedini estetici e strutturali, supporti e accessori specifici in plastica per il settore degli imbottiti.
                </p>
              </div>
              <div className="relative pt-6">
                <Link
                  href="/prodotti/piedi-ed-articoli-per-divani"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#002554] dark:text-[#28a4d7] hover:underline"
                >
                  Scopri di più
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group relative bg-zinc-50 dark:bg-zinc-850 rounded-3xl p-8 border border-zinc-200/50 dark:border-zinc-800/50 hover:shadow-xl hover:shadow-zinc-200/10 dark:hover:shadow-black/20 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#28a4d7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative space-y-4">
                <div className="w-12 h-12 bg-[#002554]/10 dark:bg-[#28a4d7]/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#002554] dark:text-[#28a4d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-[#28a4d7] transition-colors">
                  Tappi in plastica per tubi
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  Gamma completa di tappi di chiusura, sottopiedi protettivi e alettati per tubi a sezione quadra, rettangolare e tonda di diverse dimensioni.
                </p>
              </div>
              <div className="relative pt-6">
                <Link
                  href="/prodotti/tappi-in-plastica-per-tubi-di-diverse-sezioni"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#002554] dark:text-[#28a4d7] hover:underline"
                >
                  Scopri di più
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-[#28a4d7] uppercase tracking-widest">
              I NOSTRI SERVIZI
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Dall'idea iniziale al prodotto stampato
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Realizzazione e progettazione del prodotto a partire dalle esigenze del cliente, anche su disegno personalizzato. Ricerca di tecnopolimeri idonei e soluzioni chiavi in mano.
            </p>
            <div className="w-12 h-1 bg-[#28a4d7] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-14 h-14 bg-[#28a4d7]/10 rounded-xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                  {service.title}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#002554] to-zinc-950 py-20 px-6 sm:px-12 lg:px-24 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(40,164,215,0.1),transparent_40%)]" />
        <div className="relative max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ti servono informazioni?
          </h2>
          <p className="text-zinc-300 text-base max-w-xl mx-auto leading-relaxed font-light">
            Contattaci senza impegno per ricevere informazioni tecniche sui nostri prodotti o per richiedere un preventivo personalizzato basato sul tuo progetto.
          </p>
          <div className="pt-4">
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-[#28a4d7] hover:bg-[#28a4d7]/90 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#28a4d7]/20 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Contattaci Subito
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
