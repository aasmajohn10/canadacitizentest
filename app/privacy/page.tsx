import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Canada Citizen Test — how we handle data, Google AdSense cookies, and your opt-out options.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: April 2025</p>

      <div className="flex flex-col gap-8 text-sm text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">1. What Data We Collect</h2>
          <p>
            Canada Citizen Test does not directly collect any personal data from its users. We do not
            require you to create an account, and we do not store any information you enter on
            this site.
          </p>
          <p className="mt-2">
            However, we use Google AdSense to display advertisements. Google AdSense may
            use cookies and similar tracking technologies on your device to collect data for
            the purpose of serving personalized ads. This data is collected and processed by
            Google, not by Canada Citizen Test.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">2. Google AdSense</h2>
          <p>
            This site uses Google AdSense, an advertising service provided by Google LLC.
            Google AdSense places cookies on your device to show you ads that are relevant
            to your interests, based on your browsing activity across websites that use
            Google's advertising services.
          </p>
          <p className="mt-2">
            Google's use of advertising cookies enables it and its partners to serve ads
            based on your visit to this site and other sites on the internet. For more
            information on how Google uses data when you use our site, please visit{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C0392B] underline hover:text-[#a93226] transition-colors"
            >
              Google's Privacy &amp; Terms
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">3. How to Opt Out</h2>
          <p>
            You can opt out of personalized advertising by visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C0392B] underline hover:text-[#a93226] transition-colors"
            >
              google.com/settings/ads
            </a>
            . You may also opt out of interest-based advertising from participating
            third-party vendors by visiting{' '}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C0392B] underline hover:text-[#a93226] transition-colors"
            >
              aboutads.info/choices
            </a>
            .
          </p>
          <p className="mt-2">
            Note that opting out of personalized ads does not mean you will no longer see
            ads — it means the ads you see will not be tailored to your interests.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">4. Third-Party Links</h2>
          <p>
            This site contains links to third-party websites, including the official
            Government of Canada resource at canada.ca/citizenship. These links are provided
            for your convenience and reference only. Canada Citizen Test is not responsible for the
            privacy practices or content of any third-party websites. We encourage you to
            review the privacy policies of any external sites you visit.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">5. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a
              href="mailto:aasmajohn.10@gmail.com"
              className="text-[#C0392B] underline hover:text-[#a93226] transition-colors"
            >
              aasmajohn.10@gmail.com
            </a>
            .
          </p>
        </section>

      </div>
    </div>
  );
}
