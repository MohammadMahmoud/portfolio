import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import Footer from '../components/organisms/footer';
import Header from '../components/organisms/header';
import './globals.css';
import { Providers } from './providers';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '700', '800'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  title:
    'Mohammed Mohammed | Innovative Technical Lead | Problem-Solver & Mentor | Expert in Javascript, React, Node.js',
  description: 'Portfolio of Mohammed, Expert in Javascript, React, Node.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased bg-background text-foreground min-h-screen transition-colors`}
      >
        <Providers>
          <Header />
          <main className='grow pt-24'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
