import { useEffect, useState } from 'react';

import centumLogo from '@/assets/logos/centum.png';
import crayonLogo from '@/assets/logos/crayon.png';
import happymindLogo from '@/assets/logos/happymind.png';
import jindalLogo from '@/assets/logos/jindal.png';
import simpsonLogo from '@/assets/logos/simpson.png';
import tessolveLogo from '@/assets/logos/tessolve.png';
import verityLogo from '@/assets/logos/verity.png';

const ClientMarquee = () => {
  const [isVisible, setIsVisible] = useState(true);

  const clients = [
    { name: 'Centum', logo: centumLogo },
    { name: 'Crayon', logo: crayonLogo },
    { name: 'HappyMind', logo: happymindLogo },
    { name: 'Jindal', logo: jindalLogo },
    { name: 'Simpson', logo: simpsonLogo },
    { name: 'Tessolve', logo: tessolveLogo },
    { name: 'Verity', logo: verityLogo },
  ];

  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 50);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-white border-y border-border">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-muted-foreground mb-2">
            Trusted by Industry Leaders
          </h3>
          <p className="text-sm text-muted-foreground">
            Join the growing list of organizations that trust Synergionix
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-16 items-center">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className={`flex-shrink-0 transition-all duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-70'
                }`}
                style={{ maxHeight: 48 }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="h-12 flex items-center px-6 bg-gray-100 rounded text-gray-600 font-medium text-sm hover:bg-primary hover:text-white transition-colors duration-300">${client.name}</div>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        {/* Client Count */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">50+</span> satisfied clients across various industries
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;