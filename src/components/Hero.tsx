
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const benefits = [
    'AIMS & ISMS Compliance Expertise',
    'AI-Powered Business Solutions',
    'Expert Auditing and Audit Training',
    'Digital Transformation Leadership'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}

          <div
            className="inline-flex items-center justify-center mb-6 bg-primary/10 text-primary px-4 py-2 rounded-full"
          >
            <Sparkles className="mr-2" size={18} />
            <span className="font-bold">AI-Powered Compliance & Transformation</span>
          </div>

          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed mb-8 text-center">
              Build with AI to Break Barriers
              <span className="gradient-text block mt-2">Backed with Compliance</span>
            </h1>
            <p></p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Synergionix Tech empowers your business with expert AIMS/ISMS compliance, audit training, and cutting-edge AI implementations. 
              We deliver comprehensive solutions that ensure regulatory excellence while driving innovation.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 text-left">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#services">
                <Button className="btn-primary group">
                  Discover Our Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#case-studies">
                <Button variant="outline" className="btn-secondary">
                  View Case Studies
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">125+</h3>
                <p className="text-sm text-muted-foreground">Compliance Audits</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">99%</h3>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">28+</h3>
                <p className="text-sm text-muted-foreground">Implementations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
