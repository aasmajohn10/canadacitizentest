import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Canada Citizen Test — Free Canadian Citizenship Practice Test',
    template: '%s | Canada Citizen Test',
  },
  description:
    'Free Canadian citizenship test practice — 259 questions based on the Discover Canada study guide. Take practice quizzes, flashcards, and mock exams to prepare for your citizenship test.',
  keywords: [
    'canadian citizenship test',
    'citizenship practice test canada',
    'discover canada study guide',
    'canadian citizenship exam',
    'canada citizenship test questions',
    'citizenship test practice',
  ],
  other: {
    'google-adsense-account': 'ca-pub-6351567252356535',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6351567252356535"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-dm-sans)] bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
