
import { Facebook, Twitter, Linkedin, Youtube, MessageCircle, ArrowUp, Instagram, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'AIMS Compliance Audit & Training', href: '/services/aims-compliance' },
      { name: 'ISMS Compliance Audit & Training', href: '/services/isms-compliance' },
      { name: 'AI Solutions Implementation', href: '/services/ai-solutions' },
      { name: 'AI Adoption & Transformation', href: '/services/ai-transformation' },
      { name: 'Consultation Services', href: '/consultation' },
    ],
    company: [
      { name: 'About Us', href: '/#about' },
      { name: 'Our Team', href: '/#team' },
      { name: 'Case Studies', href: '/#case-studies' },
      // { name: 'Careers', href: '/careers' },
      // { name: 'News & Insights', href: '/blog' },
    ],
    resources: [
      { name: 'Resource Center', href: '/resources' },
      { name: 'White Papers', href: '/resources' },
      { name: 'Compliance Guides', href: '/resources' },
      { name: 'AI Implementation Toolkit', href: '/resources' },
      { name: 'Training Materials', href: '/resources' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Data Protection', href: '/data-protection' },
      { name: 'Compliance Statement', href: '/compliance' },
    ]
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/synergionix-technologies', 
      icon: Linkedin,
      color: 'hover:bg-blue-600'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/synergionix-tech', 
      icon: Twitter,
      color: 'hover:bg-blue-400'
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/synergionix-tech', 
      icon: Facebook,
      color: 'hover:bg-blue-800'
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/synergionix-tech', 
      icon: Instagram,
      color: 'hover:bg-pink-600'
    },
    { 
      name: 'YouTube', 
      href: 'https://youtube.com/@synergionix-tech', 
      icon: Youtube,
      color: 'hover:bg-red-600'
    },
    { 
      name: 'Reddit', 
      href: 'https://reddit.com/u/synergionix-tech', 
      icon: Bot,
      color: 'hover:bg-orange-600'
    },
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/1XXXXXXXXXX', 
      icon: MessageCircle,
      color: 'hover:bg-green-600'
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 md:col-span-2">
            <div className="mb-6">
              <Logo className="h-16 w-auto" isFooter/>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of comprehensive technology solutions, specializing in 
              AIMS/ISMS compliance consulting, AI implementation, and business 
              transformation services for organizations worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <p className="text-sm text-gray-400">
                <span className="font-medium">Email:</span> info@synergionix.com
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-2 bg-gray-800 rounded-full text-gray-400 transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm block"
                    onClick={scrollToTop}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/#') ? (
                    <Link 
                      to="/"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      onClick={() => {
                        setTimeout(() => {
                          const element = document.querySelector(link.href.substring(1));
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-white transition-colors text-sm block"
                      onClick={scrollToTop}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            {/* <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm block"
                    onClick={scrollToTop}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul> */}

            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm block"
                    onClick={scrollToTop}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      {/* <div className="border-t border-gray-800">
        <div className="container mx-auto container-padding py-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm">
                Get the latest insights on compliance, AI trends, and technology solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Link to="/consultation">
                <Button className="btn-primary whitespace-nowrap" onClick={scrollToTop}>
                  Subscribe
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © 2025 Synergionix Technologies. All rights reserved.
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-sm text-gray-400 text-center">
                Certified ISO 27001 | AIMS Compliant | AI Ethics Committed
              </div>
              <Button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 hover:bg-primary rounded-full transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
