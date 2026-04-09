import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'The Humbled Architect | Kabbalah & Neuro-Anatomy',
  description: 'Mapping esoteric architecture to biological reality.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${outfit.variable} dark`}>
      <body className="bg-zinc-950 text-zinc-100 antialiased selection:bg-amber-500/30 selection:text-amber-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
