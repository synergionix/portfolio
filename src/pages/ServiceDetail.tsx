
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Shield, Brain, TrendingUp, CheckCircle, Clock, Users, ShieldCheck, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const ServiceDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = {
    'aims-compliance': {
      icon: ShieldCheck,
      title: 'AIMS Compliance Consulting & Audit Training',
      description: 'Comprehensive AIMS (Artificial Intelligence Management System) compliance consulting with expert audit training programs. We help organizations achieve and maintain compliance while building internal audit capabilities.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80',
      overview: 'Our AIMS compliance services provide end-to-end support for organizations seeking to implement, maintain, or enhance their Artificial Intelligence Management System compliance. We combine deep regulatory expertise with practical implementation experience to deliver sustainable compliance solutions.',
      features: [
        'Gap analysis and compliance assessment',
        'Implementation roadmap development', 
        'Staff training and certification programs',
        'Internal audit capability building',
        'Continuous monitoring frameworks'
      ],
      benefits: [
        'Regulatory compliance assurance',
        'Reduced compliance costs',
        'Enhanced information security',
        'Improved audit readiness',
        'Streamlined processes'
      ],
      process: [
        'Initial compliance assessment and gap analysis',
        'Development of tailored implementation roadmap',
        'Policy and procedure development',
        'Staff training and capability building',
        'Implementation support and monitoring',
        'Ongoing compliance maintenance'
      ],
      deliverables: [
        'Compliance assessment report',
        'Implementation roadmap',
        'Policy and procedure documentation',
        'Training materials and programs',
        'Audit tools and templates',
        'Ongoing support framework'
      ]
    },
    'isms-compliance': {
      icon: ShieldCheck,
      title: 'ISMS Compliance Consulting & Audit Training',
      description: 'Expert Information Security Management System (ISMS) consulting services aligned with ISO 27001 standards. Our comprehensive approach ensures robust information security governance.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      overview: 'Our ISMS consulting services help organizations establish, implement, and maintain effective Information Security Management Systems in accordance with ISO 27001 standards. We provide comprehensive support from initial planning through certification and ongoing maintenance.',
      features: [
        'ISO 27001 implementation and certification',
        'Risk assessment and management',
        'Security policy development',
        'ISMS audit training programs',
        'Incident response planning'
      ],
      benefits: [
        'ISO 27001 certification readiness',
        'Enhanced information security posture',
        'Reduced security risks',
        'Improved stakeholder confidence',
        'Competitive advantage'
      ],
      process: [
        'Security risk assessment and analysis',
        'ISMS framework design and development',
        'Security controls implementation',
        'Staff training and awareness programs',
        'Internal audit preparation',
        'Certification support and maintenance'
      ],
      deliverables: [
        'Information security risk assessment',
        'ISMS documentation suite',
        'Security policies and procedures',
        'Training programs and materials',
        'Audit checklists and templates',
        'Certification roadmap'
      ]
    },
    'ai-solutions': {
      icon: BrainCircuit,
      title: 'AI & Agentic AI Solutions Implementation',
      description: 'Cutting-edge AI and Agentic AI solutions designed for specific business use cases. We implement intelligent systems that automate processes and enhance decision-making capabilities.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
      overview: 'Our AI solutions services focus on implementing practical, business-focused artificial intelligence and agentic AI systems that deliver measurable value. We specialize in custom AI development, machine learning deployment, and intelligent automation solutions.',
      features: [
        'Custom AI solution development',
        'Agentic AI system implementation',
        'Machine learning model deployment',
        'Process automation solutions',
        'AI-powered analytics platforms'
      ],
      benefits: [
        'Automated decision-making',
        'Improved operational efficiency',
        'Enhanced customer experiences',
        'Data-driven insights',
        'Competitive advantage'
      ],
      process: [
        'Business requirements analysis',
        'AI solution design and architecture',
        'Model development and training',
        'System integration and deployment',
        'Performance monitoring and optimization',
        'Ongoing maintenance and support'
      ],
      deliverables: [
        'AI solution architecture',
        'Custom AI models and algorithms',
        'Integration frameworks',
        'Performance dashboards',
        'Training and documentation',
        'Support and maintenance plans'
      ]
    },
    'ai-transformation': {
      icon: TrendingUp,
      title: 'AI Transformation Training & Consulting',
      description: 'Strategic consulting services to guide businesses through AI adoption and digital transformation. We help organizations leverage AI technologies for competitive advantage.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      overview: 'Our AI transformation consulting helps organizations navigate the complex journey of AI adoption. We provide strategic guidance, change management support, and practical roadmaps for successful AI implementation across your organization.',
      features: [
        'AI readiness assessment',
        'Digital transformation strategy',
        'Change management support',
        'ROI optimization planning',
        'AI Technology training & integration consulting'
      ],
      benefits: [
        'Strategic AI adoption roadmap',
        'Reduced implementation risks',
        'Maximized ROI on AI investments',
        'Enhanced organizational capabilities',
        'Future-ready business model'
      ],
      process: [
        'Organizational AI readiness assessment',
        'Strategic transformation planning',
        'Change management and training',
        'Pilot project implementation',
        'Scaling and optimization',
        'Continuous improvement'
      ],
      deliverables: [
        'AI readiness assessment report',
        'Transformation strategy document',
        'Implementation roadmap',
        'Change management plan',
        'Training programs',
        'Success metrics framework'
      ]
    }
  };

  const service = services[id as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto container-padding py-20">
          <h1 className="text-2xl font-bold">Service Not Found</h1>
          <Link to="/">
            <Button className="mt-4" onClick={scrollToTop}>Return Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <img 
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto container-padding">
              <div className="max-w-4xl">
                <div className="inline-flex p-3 rounded-xl bg-primary mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">{service.title}</h1>
                <p className="text-xl text-gray-200">{service.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto">
              <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8" onClick={scrollToTop}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>

              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Service Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.overview}</p>
              </div>

              {/* Features & Benefits */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-primary" />
                  Our Process
                </h2>
                <div className="grid gap-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-primary" />
                  Deliverables
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us today to discuss how this service can benefit your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/consultation">
                    <Button className="btn-primary" onClick={scrollToTop}>
                      Schedule Consultation
                    </Button>
                  </Link>
                  {/* <Link to="/resources"> */}
                    <Button variant="outline" className="btn-secondary" disabled onClick={scrollToTop}>
                      Resources
                    </Button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
