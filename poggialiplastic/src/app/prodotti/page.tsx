import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prodotti in Plastica",
  description: "Esplora la nostra produzione di articoli in plastica stampati ad iniezione: piedini per divani, tappi per tubi e soluzioni industriali personalizzate.",
  openGraph: {
    title: "Prodotti in Plastica | Poggiali Plastic Creations",
    description: "Esplora la nostra produzione di articoli in plastica stampati ad iniezione: piedini per divani, tappi per tubi e soluzioni industriali personalizzate.",
  },
};

export default function ProdottiPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          Prodotti in Plastica
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          La nostra gamma di prodotti realizzati ad iniezione.
        </p>
      </div>
    </main>
  );
}
