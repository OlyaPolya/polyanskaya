import "./globals.scss";
import type { Metadata } from "next";
import { Great_Vibes, Montserrat, Caveat } from "next/font/google";
import { AppContextProvider } from './_context/appContext';
import ErrorBoundary from './_components/ErrorBoundary';
import Error from './error';
import { GoogleTagManager } from '@next/third-parties/google'


const caveat = Caveat({
  weight: '400',
  subsets: ["cyrillic"],
  variable: "--font-handwriting",
  preload: false,
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["cyrillic", 'latin'],
  variable: "--font-main",
  preload: false,
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: "--font-italic",
  preload: false,
});

export const metadata: Metadata = {
  title: "Frontent разработчик Полянская",
  description: "Резюме разработчика Полянской Ольги",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <GoogleTagManager gtmId="GTM-583NLT29" />
      <body className={`${caveat.variable} ${montserrat.variable} ${greatVibes.variable}`}>
          <ErrorBoundary fallback={<Error/>}>
            <AppContextProvider>
              {children}
            </AppContextProvider>
          </ErrorBoundary>
      </body>
    </html>
  );
}
