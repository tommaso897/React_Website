"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("poggiali-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  if (!mounted || !isVisible) {
    return null;
  }

  const handleAcceptAll = () => {
    const consentValue = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("poggiali-cookie-consent", JSON.stringify(consentValue));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consentValue = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem("poggiali-cookie-consent", JSON.stringify(consentValue));
    setIsVisible(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem("poggiali-cookie-consent", JSON.stringify(settings));
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-zinc-900/95 dark:bg-zinc-950/95 text-zinc-100 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-zinc-800/80 flex flex-col gap-4">
        
        {/* Banner Header */}
        <div>
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-[#28a4d7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            Gestione del Consenso Cookie
          </h4>
          <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
            Utilizziamo cookie tecnici per far funzionare il sito. Previo tuo consenso, vorremmo usare anche cookie analitici e di marketing per migliorare l'esperienza e offrirti contenuti personalizzati. Puoi decidere quali abilitare.
          </p>
        </div>

        {/* Customization Details (Hidden by default) */}
        {showCustomize && (
          <div className="bg-zinc-800/50 rounded-xl p-3 border border-zinc-700/30 flex flex-col gap-3">
            {/* Technical */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Cookie Tecnici (Necessari)</span>
                <span className="text-[10px] text-zinc-500">Indispensabili per il sito.</span>
              </div>
              <input
                type="checkbox"
                checked={settings.necessary}
                disabled
                className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-[#28a4d7] focus:ring-0 opacity-50 cursor-not-allowed"
              />
            </div>
            
            {/* Analytics */}
            <div className="flex items-start justify-between gap-4 border-t border-zinc-700/20 pt-2.5">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Cookie Statistici / Analitici</span>
                <span className="text-[10px] text-zinc-500">Per analizzare il traffico del sito.</span>
              </div>
              <input
                type="checkbox"
                checked={settings.analytics}
                onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                className="w-4 h-4 rounded border-zinc-750 bg-zinc-800 text-[#28a4d7] focus:ring-0 cursor-pointer"
              />
            </div>

            {/* Marketing */}
            <div className="flex items-start justify-between gap-4 border-t border-zinc-700/20 pt-2.5">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Cookie di Marketing / Profilazione</span>
                <span className="text-[10px] text-zinc-500">Per integrare servizi esterni.</span>
              </div>
              <input
                type="checkbox"
                checked={settings.marketing}
                onChange={(e) => setSettings({ ...settings, marketing: e.target.checked })}
                className="w-4 h-4 rounded border-zinc-750 bg-zinc-800 text-[#28a4d7] focus:ring-0 cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Policies and Links */}
        <div className="text-[10px] text-zinc-500">
          Leggi l'informativa completa nella nostra{" "}
          <Link href="/cookie-law" className="text-[#28a4d7] hover:underline" onClick={() => setIsVisible(false)}>
            Cookie Policy
          </Link>
          .
        </div>

        {/* Banner Buttons */}
        <div className="flex flex-col gap-2 pt-2">
          {!showCustomize ? (
            <>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleAcceptAll}
                  className="bg-[#28a4d7] hover:bg-[#28a4d7]/90 text-white font-semibold text-xs py-2 px-3 rounded-lg transition-colors cursor-pointer"
                >
                  Accetta Tutti
                </button>
                <button
                  onClick={handleRejectAll}
                  className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs py-2 px-3 rounded-lg transition-colors cursor-pointer border border-zinc-700/40"
                >
                  Rifiuta Tutti
                </button>
              </div>
              <button
                onClick={() => setShowCustomize(true)}
                className="text-zinc-400 hover:text-white font-medium text-[11px] py-1 transition-colors cursor-pointer text-center"
              >
                Personalizza Preferenze
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSaveCustom}
                className="flex-1 bg-[#28a4d7] hover:bg-[#28a4d7]/90 text-white font-semibold text-xs py-2 px-3 rounded-lg transition-colors cursor-pointer"
              >
                Salva Preferenze
              </button>
              <button
                onClick={() => setShowCustomize(false)}
                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs py-2 px-3 rounded-lg transition-colors cursor-pointer border border-zinc-700/40"
              >
                Indietro
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
