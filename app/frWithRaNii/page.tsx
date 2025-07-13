import Cava from "@/features/Markdown/stopsaying/cava.mdx";
import Cool from "@/features/Markdown/stopsaying/cool.mdx";
import Derien from "@/features/Markdown/stopsaying/derien.mdx";
import Desole from "@/features/Markdown/stopsaying/desole.mdx";
import Aurevoir from "@/features/Markdown/stopsaying/aurevoir.mdx";
import Ilfaut from "@/features/Markdown/stopsaying/ilfaut.mdx";
import Jepense from "@/features/Markdown/stopsaying/jepense.mdx";
import Jesais from "@/features/Markdown/stopsaying/jesais.mdx";
import Jetravaille from "@/features/Markdown/stopsaying/jetravaille.mdx";
import Merci from "@/features/Markdown/stopsaying/merci.mdx";
import Non from "@/features/Markdown/stopsaying/non.mdx";
import React from "react";

export default function Page() {
  return (
    <div className="space-y-12">
      {/* Introduction douce */}
      <div className="py-8 space-y-6 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text">
            Guide des alternatives
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed md:text-xl text-muted-foreground">
            Découvrez comment enrichir votre vocabulaire français en remplaçant
            les expressions banales par des alternatives plus nuancées et
            expressives.
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="space-y-6">
        <FrWithRaNii
          title="Je sais / je comprends"
          header="Je Sais / Je Comprends"
        >
          <Jesais />
        </FrWithRaNii>
        <FrWithRaNii title="Cool" header="Cool">
          <Cool />
        </FrWithRaNii>
        <FrWithRaNii title="Je pense que" header="Je Pense Que">
          <Jepense />
        </FrWithRaNii>
        <FrWithRaNii title="Il faut" header="Il Faut">
          <Ilfaut />
        </FrWithRaNii>
        <FrWithRaNii title="Je travaille" header="Je Travaille">
          <Jetravaille />
        </FrWithRaNii>
        <FrWithRaNii title="Non" header="Non">
          <Non />
        </FrWithRaNii>
        <FrWithRaNii title="Ça va?" header="Ça Va">
          <Cava />
        </FrWithRaNii>
        <FrWithRaNii title="De rien" header="De rien">
          <Derien />
        </FrWithRaNii>
        <FrWithRaNii title="Désolé" header="Désolé">
          <Desole />
        </FrWithRaNii>
        <FrWithRaNii title="Merci" header="Merci">
          <Merci />
        </FrWithRaNii>
        <FrWithRaNii title="Au revoir" header="Au Revoir">
          <Aurevoir />
        </FrWithRaNii>
      </div>
    </div>
  );
}

const FrWithRaNii = ({
  title,
  header,
  children,
}: {
  title: string;
  header: string;
  children: React.ReactNode;
}) => {
  return (
    <div id={title}>
      <div className="pb-6 text-4xl font-bold ">
        <span className="text-transparent bg-gradient-to-r from-primary to-purple-600 bg-clip-text">
          #
        </span>
        <span>{header}</span>
      </div>
      <div className="prose dark:prose-invert">{children}</div>
    </div>
  );
};
