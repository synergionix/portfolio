
import { Shield, Zap, Users, Award, ShieldCheck, Bot, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Security & Compliance',
      description: 'Expert AIMS and ISMS compliance consulting with comprehensive audit training programs.'
    },
    {
      icon: Bot,
      title: 'AI Innovation',
      description: 'Cutting-edge AI and Agentic AI solutions tailored for your specific business use cases.'
    },
    {
      icon: TrendingUp,
      title: 'Business Transformation',
      description: 'Strategic AI adoption and digital transformation consulting for sustainable growth.'
    },
    {
      icon: Users,
      title: 'Strategic Partnership',
      description: 'We act as an extension of your team, building long-term relationships based on trust and shared success.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Transforming Businesses Through 
              <span className="gradient-text block">Technology Excellence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              At Synergionix Technologies, we are pioneering the future of business technology. 
              Our comprehensive suite of services combines deep compliance expertise with 
              cutting-edge AI solutions to help organizations navigate the complex 
              landscape of modern business requirements.
            </p>

            <p className="text-muted-foreground mb-8">
              With years of experience in AIMS and ISMS compliance consulting, coupled 
              with our expertise in AI implementation and business transformation, we 
              provide end-to-end solutions that drive measurable results. Our team of 
              certified professionals ensures your organization stays ahead of regulatory 
              requirements while leveraging the latest technology innovations.
            </p>

            {/* Company Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">Innovation-Driven Approach</h4>
                  <p className="text-sm text-muted-foreground">
                    We stay at the forefront of technology trends to deliver cutting-edge solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">Client-Centric Solutions</h4>
                  <p className="text-sm text-muted-foreground">
                    Every solution is tailored to meet your specific business needs and objectives.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">Proven Methodology</h4>
                  <p className="text-sm text-muted-foreground">
                    Our systematic approach ensures consistent, high-quality deliverables.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border hover-lift">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
