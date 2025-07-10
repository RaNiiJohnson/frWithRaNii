import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Providers } from "@/components/utils/providers";
import { Header } from "@/features/layout/Header";
import { SiteConfig } from "@/lib/site-config";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: SiteConfig.title,
  // description: SiteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="h-full antialiased font-playpenSans bg-background">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <div className="flex flex-col h-full mx-auto max-w-7xl">
              <Header />
              <div className="flex-1 w-full max-w-6xl py-3 m-auto h-2/4">
                {children}
              </div>
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
