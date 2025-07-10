"use client";
import { useState, useEffect } from "react";
import TableOfContents from "./Table";

export default function Profile({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headings = [
    "Je sais / je comprends",
    "Cool",
    "Je pense que",
    "Il faut",
    "Je travaille",
    "Non",
    "Ça va?",
    "De rien",
    "Désolé",
    "Merci",
    "Au revoir",
  ];

  useEffect(() => {
    const handleCloseMenu = () => setIsMenuOpen(false);
    window.addEventListener("closeMobileMenu", handleCloseMenu);
    return () => window.removeEventListener("closeMobileMenu", handleCloseMenu);
  }, []);

  return (
    <div>
      {/* Bouton menu mobile */}
      <div className="fixed z-40 md:hidden top-20 right-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md shadow-lg bg-primary text-primary-foreground"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute max-w-xs p-4 rounded-lg shadow-lg top-20 right-4 bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <TableOfContents headings={headings} />
          </div>
        </div>
      )}

      <div className="flex flex-col pl-4 md:flex-row md:pl-20">
        <div className="flex-1">{children}</div>
        {/* Menu desktop - caché sur mobile */}
        <div className="hidden px-10 md:block">
          <TableOfContents headings={headings} />
        </div>
      </div>
    </div>
  );
}
