import Link from "next/link";

export default function CookieLawPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 sm:p-12 shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#002554] dark:text-[#28a4d7] tracking-tight mb-8">
          Informativa sui Cookie (Cookie Policy)
        </h1>
        
        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">1. Cosa sono i Cookie?</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali (computer, smartphone, tablet), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. I cookie sono usati per differenti finalità: esecuzione di autenticazioni informatiche, monitoraggio di sessioni, memorizzazione di informazioni su specifiche configurazioni riguardanti gli utenti che accedono al server, ecc.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">2. Tipologie di Cookie utilizzate in questo sito</h2>
            <p>
              Questo sito utilizza diverse tipologie di cookie per garantire il corretto funzionamento, analizzare il traffico ed eventualmente offrire contenuti personalizzati:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Cookie Tecnici / Necessari:</strong> Sono essenziali per il corretto funzionamento del sito. Consentono la navigazione delle pagine, la memorizzazione delle scelte dell'utente (come il consenso ai cookie stessi) e la sicurezza del sito. Non possono essere disattivati nei nostri sistemi.
              </li>
              <li>
                <strong>Cookie Statistici / Analitici (Previo consenso):</strong> Vengono utilizzati per raccogliere informazioni in forma anonima e aggregata sul numero degli utenti e su come questi visitano il sito (es. pagine più visitate, durata della permanenza). Questo ci aiuta a migliorare le prestazioni del nostro sito web.
              </li>
              <li>
                <strong>Cookie di Marketing / Profilazione (Previo consenso):</strong> Vengono utilizzati per tracciare i visitatori sui siti web. L'intento è quello di mostrare annunci pertinenti e coinvolgenti per il singolo utente, o integrare funzionalità di terze parti (es. video incorporati o mappe interattive).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">3. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati è:
              <br />
              <strong>Poggiali Plastic Creations S.r.l.</strong>
              <br />
              Via Modena, 10 - 48024 Massa Lombarda (RA)
              <br />
              Email: <a href="mailto:info@poggialiplasticcreations.com" className="text-[#28a4d7] hover:underline">info@poggialiplasticcreations.com</a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">4. Gestione e revoca del consenso</h2>
            <p>
              In qualsiasi momento puoi modificare o revocare il tuo consenso cancellando i cookie del tuo browser o cliccando sul pulsante di personalizzazione dei cookie (ove disponibile).
            </p>
            <p>
              Per disattivare o gestire i cookie direttamente dalle impostazioni del tuo browser, puoi consultare le guide ufficiali dei principali produttori:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#28a4d7]">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#28a4d7]">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#28a4d7]">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#28a4d7]">Microsoft Edge</a></li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50 flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#002554] dark:text-[#28a4d7] hover:underline"
          >
            ← Torna alla Home
          </Link>
        </div>
      </div>
    </main>
  );
}
