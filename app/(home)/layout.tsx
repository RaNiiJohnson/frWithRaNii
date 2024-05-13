import TableOfContents from "./Table";

export default async function Profile({
  children,
}: {
  children: React.ReactNode;
}) {
  const headings = [
    "Merci",
    "Je sais / je comprends",
    "Cool",
    "Je pense que",
    "Il faut",
    "Je travaille",
    "Non",
    "Bonjour",
    "Ça va?",
    "De rien",
    "Désolé",
    "Au revoir",
    "Je m'appelle",
    "Très",
  ];

  return (
    <div>
      <div className="flex flex-row pl-20">
        <div className="flex-1 ">{children}</div>
        <div className="px-10">
          <TableOfContents headings={headings} />
        </div>
      </div>
    </div>
  );
}
