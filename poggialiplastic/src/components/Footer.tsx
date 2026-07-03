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
              <span>📍</span>
              <span className="text-zinc-400">
                Via Modena 10, <br />
                48024 Massa Lombarda (RA)
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <span>📞</span>
              <a href="tel:+39054587841" className="hover:text-white transition-colors">
                +39 0545 87841
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <span>✉️</span>
              <a href="mailto:info@poggialiplasticcreations.com" className="hover:text-white transition-colors">
                info@poggialiplasticcreations.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <span>🔒</span>
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
