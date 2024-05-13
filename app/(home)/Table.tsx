"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TableOfContentsProps {
  headings: string[]; // Liste des identifiants des en-têtes
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Trouver l'en-tête actif en fonction de la position de défilement
      const active = headings.find((heading) => {
        const element = document.getElementById(heading);
        if (element) {
          const top = element.offsetTop - 300;
          const bottom = top + element.offsetHeight;
          return scrollPosition >= top && scrollPosition < bottom;
        }
        return false;
      });

      setActiveHeading(active || null);
    };

    // Écoute du défilement de la fenêtre
    window.addEventListener("scroll", handleScroll);

    // Nettoyage de l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  return (
    <nav className="sticky top-24 right-6">
      <span className="text-xl font-bold">Arrêtez de dire:</span>
      <ul className="flex flex-col">
        {headings.map((heading) => (
          <li key={heading}>
            <Link
              href={`#${heading}`}
              className={`${activeHeading === heading ? "text-primary" : ""}`}
            >
              * {heading}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
