import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#002554] text-zinc-300 border-t border-white/10 pt-16 pb-8 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Company Info Section */}
        <div>
          <h3 className="text-white text-lg font-bold tracking-tight mb-4">
            Poggiali <span className="font-light text-[#28a4d7]">Plastic Creations</span>
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            Dal 1961 specialisti nello stampaggio di materiali plastici ad iniezione. Qualità, professionalità e affidabilità al servizio del cliente.
          </p>
          <div className="text-zinc-500 text-xs space-y-1">
            <p>Poggiali Plastic Creations S.r.l.</p>
            <p>P.IVA / C.F. 02530340393</p>
            <p>Nr. REA RA210115</p>
            <p>Cap. Soc. 2.000€ i.v.</p>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Mappa del Sito
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-all">Home</Link>
              </li>
              <li>
                <Link href="/azienda" className="hover:text-white hover:underline transition-all">Azienda</Link>
              </li>
              <li>
                <Link href="/servizi" className="hover:text-white hover:underline transition-all">Servizi</Link>
              </li>
              <li>
                <Link href="/contributi" className="hover:text-white hover:underline transition-all">Contributi</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Prodotti
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/prodotti" className="hover:text-white hover:underline transition-all">Tutti i Prodotti</Link>
              </li>
              <li>
                <Link href="/prodotti/piedi-ed-articoli-per-divani" className="hover:text-white hover:underline transition-all">Piedi per Divani</Link>
              </li>
              <li>
                <Link href="/prodotti/tappi-in-plastica-per-tubi-di-diverse-sezioni" className="hover:text-white hover:underline transition-all">Tappi per Tubi</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contacts Section */}
        <div>
          <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
            Contatti
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <svg className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0Z" />
              </svg>
              <span className="text-zinc-400">
                Via Modena 10, <br />
                48024 Massa Lombarda (RA)
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.302a12.017 12.017 0 0 1-5.905-5.905c-.44-.441-.274-.927.101-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <a href="tel:+39054587841" className="hover:text-white transition-colors">
                +39 0545 87841
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:info@poggialiplasticcreations.com" className="hover:text-white transition-colors">
                info@poggialiplasticcreations.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <svg className="w-3.5 h-3.5 text-zinc-550 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0V10.5m-2.25 10.5h13.5c.621 0 1.125-.504 1.125-1.125v-7.25c0-.621-.504-1.125-1.125-1.125H5.25c-.621 0-1.125.504-1.125 1.125v7.25c0 .621.504 1.125 1.125 1.125z" />
              </svg>
              <a href="mailto:info@pec.poggialiplasticcreations.com" className="text-zinc-500 hover:text-white transition-colors text-xs">
                PEC: info@pec.poggialiplasticcreations.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
        <p>© 2026 Poggiali Plastic Creations. Tutti i diritti riservati.</p>
        <div className="flex gap-4">
          <Link href="/cookie-law" className="hover:text-zinc-400 transition-colors">Cookie Policy</Link>
          <span>•</span>
          <span className="text-zinc-600">Powered by Gstudio</span>
        </div>
      </div>
    </footer>
  );
}
