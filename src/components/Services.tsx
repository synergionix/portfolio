
import { Shield, Brain, BookOpen, TrendingUp, ShieldCheck, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'aims-compliance',
      icon: ShieldCheck,
      title: 'AIMS Compliance Consulting & Audit Training',
      description: 'Comprehensive AIMS (Artificial Intelligence Management Systems) compliance consulting with expert audit training programs. We help organizations achieve and maintain compliance while building internal audit capabilities.',
      features: [
        'ISO 42001 Implementation and Certification',
        'Gap Analysis and Compliance Assessment',
        'Impact Assessment and Risk Management',
        'Staff Training and Certification Programs',
        'Internal Audit Capability Building',
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'isms-compliance',
      icon: ShieldCheck,
      title: 'ISMS Compliance Consulting & Audit Training',
      description: 'Expert Information Security Management System (ISMS) consulting services aligned with ISO 27001 standards. Our comprehensive approach ensures robust information security governance.',
      features: [
        'ISO 27001 Implementation and Certification',
        'Risk Assessment and Management',
        'Security Policy Development',
        'ISMS Audit Training Programs',
        'Incident Response Planning'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-solutions',
      icon: BrainCircuit,
      title: 'AI & Agentic AI Solutions Implementation',
      description: 'Cutting-edge AI and Agentic AI solutions designed for specific business use cases. We implement intelligent systems that automate processes and enhance decision-making capabilities.',
      features: [
        'Custom AI Solution Development',
        'Agentic AI System Implementation',
        'Machine learning Model Building and Deployment',
        'Process Automation Solutions',
        'AI-Powered Analytics Platforms'
      ],
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'ai-transformation',
      icon: TrendingUp,
      title: 'AI Adoption & Transformation Consulting',
      description: 'Strategic consulting services to guide businesses through AI adoption and digital transformation. We help organizations leverage AI technologies for competitive advantage.',
      features: [
        'AI Readiness Assessment',
        'Digital Transformation Strategy',
        'Change Management Support',
        'ROI Optimization Planning',
        'Technology Integration Consulting'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            Comprehensive technology solutions and consulting services designed to 
            transform your business operations and ensure regulatory compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-lift border border-border h-full flex flex-col">
              {/* Icon with gradient background */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6 w-fit`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-center flex-grow">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to={`/services/${service.id}`} onClick={scrollToTop}>
                <Button className="btn-primary w-full mt-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold mb-4 text-center">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-center">
              Let's discuss how our comprehensive technology solutions can help your 
              organization achieve compliance, innovation, and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation">
                <Button className="btn-primary" onClick={scrollToTop}>
                  Let's Build Together
                </Button>
              </Link>
              {/* <Link to="/resources">
                <Button variant="outline" className="btn-secondary" onClick={scrollToTop}>
                  Resources
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
