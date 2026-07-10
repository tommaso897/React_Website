import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tappi in Plastica per Tubi",
  description: "Produzione e stampaggio di tappi e sottopiedi in plastica per tubi a sezione tonda, quadra e rettangolare.",
  openGraph: {
    title: "Tappi in Plastica per Tubi | Poggiali Plastic Creations",
    description: "Produzione e stampaggio di tappi e sottopiedi in plastica per tubi a sezione tonda, quadra e rettangolare.",
  },
};

export default function TappiTubiPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          Tappi in Plastica per Tubi di Diverse Sezioni
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Tappi e sottopiedi protettivi per tubi quadri, rettangolari e tondi di varie dimensioni.
        </p>
      </div>
    </main>
  );
}
