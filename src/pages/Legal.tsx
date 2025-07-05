import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Legal = () => {
  const location = useLocation();
  const page = location.pathname.substring(1); // Remove leading slash

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const legalPages = {
    privacy: {
      title: 'Privacy Policy',
      content: `
        <section>
          <h2 class="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p class="mb-6">We collect information you provide directly to us, such as when you contact us, request services, or subscribe to our newsletter.</p>

          <h2 class="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p class="mb-6">We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.</p>

          <h2 class="text-2xl font-semibold mb-4">Information Sharing</h2>
          <p class="mb-6">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>

          <h2 class="text-2xl font-semibold mb-4">Data Security</h2>
          <p class="mb-6">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>If you have questions about this privacy policy, please contact us at <a href="mailto:privacy@synergionix.com" class="text-blue-600 hover:underline">privacy@synergionix.com</a>.</p>
        </section>
      `
    },
    terms: {
      title: 'Terms of Service', 
      content: `
        <section>
          <h2 class="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p class="mb-6">By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h2 class="text-2xl font-semibold mb-4">Service Description</h2>
          <p class="mb-6">Synergionix Technologies provides compliance consulting, AI solutions, and audit training services as described on our website.</p>

          <h2 class="text-2xl font-semibold mb-4">User Responsibilities</h2>
          <p class="mb-6">You agree to use our services in compliance with all applicable laws and regulations and not to use our services for any unlawful purpose.</p>

          <h2 class="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p class="mb-6">Our liability is limited to the maximum extent permitted by law. We shall not be liable for any indirect, incidental, or consequential damages.</p>

          <h2 class="text-2xl font-semibold mb-4">Modifications</h2>
          <p class="mb-6">We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.</p>
        </section>
      `
    },
    cookies: {
      title: 'Cookie Policy',
      content: `
        <section>
          <h2 class="text-2xl font-semibold mb-4">What Are Cookies</h2>
          <p class="mb-6">Cookies are small text files that are placed on your computer or mobile device when you visit our website.</p>

          <h2 class="text-2xl font-semibold mb-4">How We Use Cookies</h2>
          <p class="mb-6">We use cookies to improve your browsing experience, analyze website traffic, and personalize content.</p>

          <h2 class="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
          <ul class="list-disc list-inside mb-6 space-y-1">
            <li>Essential cookies: Required for the website to function properly</li>
            <li>Analytics cookies: Help us understand how visitors interact with our website</li>
            <li>Functional cookies: Enable enhanced functionality and personalization</li>
          </ul>

          <h2 class="text-2xl font-semibold mb-4">Managing Cookies</h2>
          <p>You can control and manage cookies through your browser settings. However, disabling certain cookies may impact your experience on our website.</p>
        </section>
      `
    },
    'data-protection': {
      title: 'Data Protection Policy',
      content: `
        <section>
          <h2 class="text-2xl font-semibold mb-4">Data Protection Principles</h2>
          <p class="mb-6">We are committed to protecting your personal data in accordance with applicable data protection laws and regulations.</p>

          <h2 class="text-2xl font-semibold mb-4">Lawful Basis for Processing</h2>
          <p class="mb-6">We process personal data based on legitimate interests, contract performance, legal obligations, and consent where applicable.</p>

          <h2 class="text-2xl font-semibold mb-4">Data Subject Rights</h2>
          <p class="mb-6">You have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data.</p>

          <h2 class="text-2xl font-semibold mb-4">Data Retention</h2>
          <p class="mb-6">We retain personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by law.</p>

          <h2 class="text-2xl font-semibold mb-4">International Transfers</h2>
          <p>When transferring data internationally, we ensure appropriate safeguards are in place to protect your personal data.</p>
        </section>
      `
    },
    compliance: {
      title: 'Compliance Statement',
      content: `
        <section>
          <h2 class="text-2xl font-semibold mb-4">Our Commitment to Compliance</h2>
          <p class="mb-6">Synergionix Technologies is committed to maintaining the highest standards of compliance across all our operations and service delivery.</p>

          <h2 class="text-2xl font-semibold mb-4">Regulatory Compliance</h2>
          <p class="mb-6">We comply with all applicable laws and regulations in the jurisdictions where we operate, including privacy, data protection, and industry-specific requirements.</p>

          <h2 class="text-2xl font-semibold mb-4">Professional Standards</h2>
          <p class="mb-6">Our consultants maintain relevant professional certifications and adhere to industry best practices and ethical standards.</p>

          <h2 class="text-2xl font-semibold mb-4">Quality Assurance</h2>
          <p class="mb-6">We have implemented comprehensive quality assurance processes to ensure the delivery of high-quality services to our clients.</p>

          <h2 class="text-2xl font-semibold mb-4">Continuous Improvement</h2>
          <p>We regularly review and update our compliance practices to ensure they remain current with evolving regulations and standards.</p>
        </section>
      `
    }
  };

  const currentPage = legalPages[page as keyof typeof legalPages];

  if (!currentPage) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto container-padding py-20">
          <h1 className="text-2xl font-bold">Page Not Found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-extrabold mb-10">{currentPage.title}</h1>
              <article
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: currentPage.content }}
              />
              <div className="mt-16 text-sm text-gray-500 space-y-1">
                <p><strong>Last updated:</strong> January 1, 2025</p>
                <p>
                  For questions about this policy, contact us at{' '}
                  <a href="mailto:legal@synergionix.com" className="text-blue-600 hover:underline">
                    legal@synergionix.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
