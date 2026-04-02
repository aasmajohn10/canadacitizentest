import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 text-xs">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-2">
        <p className="leading-relaxed">
          © 2025 Canada Citizen Test. All rights reserved. Study content adapted from <em>Discover Canada: The Rights and Responsibilities of Citizenship</em>, © His Majesty the King in Right of Canada, reproduced under the Open Government Licence – Canada. Canada Citizen Test is not affiliated with, endorsed by, or connected to the Government of Canada or Immigration, Refugees and Citizenship Canada (IRCC). This site is for educational purposes only. "Discover Canada" is a publication of the Government of Canada.
        </p>
        <p className="leading-relaxed">
          <span className="font-semibold text-gray-300">Note:</span>{' '}
          Questions and study content on this site are based on the official Discover Canada study guide (2012 edition). While we have worked to ensure accuracy, always verify information with the official Government of Canada resource at{' '}
          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 underline hover:text-white transition-colors"
          >
            canada.ca/citizenship
          </a>
          . Canada Citizen Test accepts no liability for incorrect or outdated content.{' '}
          <Link href="/privacy" className="text-gray-300 underline hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
