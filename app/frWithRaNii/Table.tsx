"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TableOfContentsProps {
  headings: string[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px", // Déclenche quand la section est visible dans le viewport
      }
    );

    // Observer tous les headings
    headings.forEach((heading) => {
      const element = document.getElementById(heading);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav className="md:sticky md:top-24 md:right-6">
      <span className="text-xl font-bold">Arrêtez de dire:</span>
      <ul className="flex flex-col mt-4 space-y-2">
        {headings.map((heading) => (
          <li key={heading}>
            <Link
              href={`#${heading}`}
              className={`block transition-colors duration-200 hover:text-primary hover:underline ${
                activeHeading === heading
                  ? "text-violet-600 font-semibold"
                  : "text-muted-foreground"
              }`}
              onClick={() => {
                // Fermer le menu mobile après clic
                if (window.innerWidth < 768) {
                  // Dispatch un event pour fermer le menu
                  window.dispatchEvent(new CustomEvent("closeMobileMenu"));
                }
              }}
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
