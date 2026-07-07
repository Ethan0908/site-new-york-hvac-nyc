import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Fraunces, Instrument_Sans } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'New York HVAC NYC | HVAC in Manhattan',
  description:
    'New York HVAC NYC is listed for HVAC service in Manhattan. Call (631) 500-2060 or visit the business website.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${instrumentSans.variable}`}>{children}</body>
    </html>
  );
}
