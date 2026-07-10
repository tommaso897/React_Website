import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servizi di Stampaggio",
  description: "I nostri servizi: dallo stampaggio ad iniezione di materie plastiche alla prototipazione 3D rapida, costruzione stampi e assemblaggio.",
  openGraph: {
    title: "Servizi di Stampaggio | Poggiali Plastic Creations",
    description: "I nostri servizi: dallo stampaggio ad iniezione di materie plastiche alla prototipazione 3D rapida, costruzione stampi e assemblaggio.",
  },
};

export default function ServiziPage() {
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
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#002554] via-[#0b213b] to-zinc-950 py-20 px-6 sm:px-12 lg:px-24 text-white text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,164,215,0.1),transparent_45%)]" />
        <div className="relative max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#28a4d7]/10 text-[#28a4d7] border border-[#28a4d7]/20 uppercase tracking-wider">
            I Nostri Servizi
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Cosa Facciamo
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Realizzazione e progettazione del prodotto a partire dalle idee ed esigenze del cliente, coprendo l'intero ciclo dalla prototipazione allo stampaggio in serie.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-[#28a4d7] uppercase tracking-widest">
              IL NOSTRO FLUSSO DI LAVORO
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Dall'idea iniziale al prodotto stampato
            </h3>
            <div className="w-12 h-1 bg-[#28a4d7] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-50 dark:bg-zinc-850 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-14 h-14 bg-[#28a4d7]/10 rounded-xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                  {service.title}
                </h4>
                <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#002554] to-zinc-950 py-20 px-6 sm:px-12 lg:px-24 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(40,164,215,0.1),transparent_40%)]" />
        <div className="relative max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Hai un progetto da realizzare?
          </h2>
          <p className="text-zinc-300 text-base max-w-xl mx-auto leading-relaxed font-light">
            Mettiti in contatto con noi per analizzare il tuo disegno tecnico, studiare la fattibilità dello stampaggio e richiedere un preventivo gratuito.
          </p>
          <div className="pt-4">
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-[#28a4d7] hover:bg-[#28a4d7]/90 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#28a4d7]/20 hover:-translate-y-0.5"
            >
              Richiedi un Preventivo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
