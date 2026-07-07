import Link from "next/link";

export default function ContattiPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#002554] via-[#0b213b] to-zinc-950 py-20 px-6 sm:px-12 lg:px-24 text-white text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,164,215,0.1),transparent_45%)]" />
        <div className="relative max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#28a4d7]/10 text-[#28a4d7] border border-[#28a4d7]/20 uppercase tracking-wider">
            Contatti
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Mettiti in contatto con noi
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Siamo a tua disposizione per informazioni sui nostri articoli in plastica o per preventivi sul tuo progetto di stampaggio.
          </p>
        </div>
      </section>

      {/* Contacts Cards Grid */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Sede Card */}
            <div className="flex flex-col items-center text-center p-8 bg-zinc-50 dark:bg-zinc-850 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 hover:shadow-lg transition-all duration-300">
              <span className="text-4xl mb-4">📍</span>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50 text-lg mb-2">Sede Stabilimento</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                Via Modena 10, <br />
                48024 Massa Lombarda (RA)
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Poggiali+Plastic+Creations+Via+Modena+10+Massa+Lombarda"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#002554] hover:bg-[#002554]/95 dark:bg-[#28a4d7] dark:hover:bg-[#28a4d7]/95 text-white text-xs font-bold py-2.5 px-5 rounded-full transition-all duration-300 shadow-sm"
              >
                Apri Google Maps
              </a>
            </div>

            {/* Telefono Card */}
            <div className="flex flex-col items-center text-center p-8 bg-zinc-50 dark:bg-zinc-850 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 hover:shadow-lg transition-all duration-300">
              <span className="text-4xl mb-4">📞</span>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50 text-lg mb-2">Telefono e Fax</h3>
              <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                Siamo disponibili telefonicamente per qualsiasi chiarimento commerciale o tecnico.
              </p>
              <a
                href="tel:+39054587841"
                className="bg-[#28a4d7] hover:bg-[#28a4d7]/90 text-white text-xs font-bold py-2.5 px-5 rounded-full transition-all duration-300 shadow-sm"
              >
                +39 0545 87841
              </a>
            </div>

            {/* Email Card */}
            <div className="flex flex-col items-center text-center p-8 bg-zinc-50 dark:bg-zinc-850 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 hover:shadow-lg transition-all duration-300">
              <span className="text-4xl mb-4">✉️</span>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50 text-lg mb-2">Posta Elettronica</h3>
              <div className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-1 space-y-1">
                <p>Scrivici per informazioni o invio disegni tecnici:</p>
                <a href="mailto:info@poggialiplasticcreations.com" className="block font-semibold text-[#28a4d7] hover:underline">
                  info@poggialiplasticcreations.com
                </a>
              </div>
              <a
                href="mailto:info@pec.poggialiplasticcreations.com"
                className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 text-xs hover:underline transition-colors"
              >
                PEC: info@pec.poggialiplasticcreations.com
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
