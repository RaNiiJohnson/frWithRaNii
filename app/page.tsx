"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Introduction attractive */}
      <div className="flex flex-col gap-6 py-8 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text">
            Arrêtez de dire...
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed md:text-2xl text-muted-foreground">
            Découvrez des alternatives plus riches et expressives pour enrichir
            votre français quotidien
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="p-4 text-center border rounded-lg bg-primary/10 border-primary/20">
            <div className="text-2xl font-bold text-primary">12+</div>
            <div className="text-sm text-muted-foreground">
              Expressions alternatives
            </div>
          </div>
          <div className="p-4 text-center border rounded-lg bg-purple-500/10 border-purple-500/20">
            <div className="text-2xl font-bold text-purple-600">🎯</div>
            <div className="text-sm text-muted-foreground">
              Communication enrichie
            </div>
          </div>
          <div className="p-4 text-center border rounded-lg bg-green-500/10 border-green-500/20">
            <div className="text-2xl font-bold text-green-600">✨</div>
            <div className="text-sm text-muted-foreground">
              Vocabulaire varié
            </div>
          </div>
        </div>

        <div className="max-w-4xl p-6 mx-auto space-y-4 rounded-lg bg-muted/50">
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Pourquoi ce guide ?</strong>{" "}
            Parce que la richesse de la langue française mérite d&apos;être
            explorée. Remplacer les expressions banales par des alternatives
            plus nuancées et expressives peut transformer votre façon de
            communiquer et enrichir vos conversations quotidiennes.
          </p>
          <Link
            href="/frWithRaNii"
            className="inline-flex items-center px-8 py-4 mt-5 text-lg font-bold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 hover:shadow-xl hover:scale-105"
          >
            🚀 Démarrer
          </Link>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="space-y-6 content-section">
        <h2 className="mb-8 text-3xl font-bold text-center text-foreground">
          Découvrez les alternatives
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 transition-shadow border rounded-lg bg-card hover:shadow-lg">
            <h3 className="mb-3 text-xl font-bold text-primary">Merci</h3>
            <p className="text-muted-foreground">
              Il existe de nombreuses façons d&apos;exprimer sa gratitude en
              dehors du traditionnel &quot;Merci&quot;.
            </p>
          </div>
          <div className="p-6 transition-shadow border rounded-lg bg-card hover:shadow-lg">
            <h3 className="mb-3 text-xl font-bold text-primary">Cool</h3>
            <p className="text-muted-foreground">
              Remplacez ce mot banal par des expressions plus riches et
              expressives.
            </p>
          </div>
          <div className="p-6 transition-shadow border rounded-lg bg-card hover:shadow-lg">
            <h3 className="mb-3 text-xl font-bold text-primary">
              Je pense que
            </h3>
            <p className="text-muted-foreground">
              Exprimez vos opinions avec plus de nuance et de sophistication.
            </p>
          </div>
          <div className="p-6 transition-shadow border rounded-lg bg-card hover:shadow-lg">
            <h3 className="mb-3 text-xl font-bold text-primary">Il faut</h3>
            <p className="text-muted-foreground">
              Alternatives moins directes et plus polies pour exprimer une
              nécessité.
            </p>
          </div>
          <div className="p-6 transition-shadow border rounded-lg bg-card hover:shadow-lg">
            <h3 className="mb-3 text-xl font-bold text-primary">
              Je travaille
            </h3>
            <p className="text-muted-foreground">
              Découvrez des façons plus variées de parler de votre activité
              professionnelle.
            </p>
          </div>
          <div className="p-6 transition-shadow border rounded-lg bg-card hover:shadow-lg">
            <h3 className="mb-3 text-xl font-bold text-primary">Non</h3>
            <p className="text-muted-foreground">
              Apprenez à dire &quot;non&quot; de manière plus polie et
              constructive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
