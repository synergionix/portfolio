
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CaseStudyDetail = () => {
  const { id } = useParams();

  const caseStudies = {
    'global-financial-aims': {
      category: 'AIMS Compliance',
      title: 'FinTech AIMS Compliance Transformation',
      client: 'Major Banking Corporation',
      duration: '8 months',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80',
      description: 'Successfully implemented comprehensive AIMS compliance framework for a multinational banking institution, achieving 100% regulatory compliance and establishing robust audit capabilities.',
      challenge: 'The client faced significant regulatory compliance gaps in their information management systems, with outdated processes and insufficient audit trails threatening their operational license.',
      solution: 'We conducted a comprehensive gap analysis, developed a tailored compliance roadmap, and implemented automated monitoring systems while training their internal audit team.',
      results: [
        '100% AIMS compliance achievement within 8 months',
        '60% reduction in audit preparation time',
        '40% improvement in information security posture',
        'Zero compliance violations post-implementation'
      ],
      technologies: ['AIMS Framework', 'Compliance Management Systems', 'Audit Analytics', 'Risk Assessment Tools'],
      outcomes: 'The transformation resulted in enhanced regulatory standing, improved operational efficiency, and strengthened customer trust through robust compliance practices.'
    },
    'healthcare-aims': {
      category: 'AIMS Compliance',
      title: 'Healthcare Network AIMS Implementation',
      client: 'Regional Healthcare Provider',
      duration: '6 months',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1200&q=80',
      description: 'Deployed enterprise-wide AIMS compliance solution for a healthcare network, ensuring patient data protection and regulatory adherence across multiple facilities.',
      challenge: 'The healthcare network struggled with disparate information systems and inconsistent compliance practices across their facilities, creating significant regulatory risks.',
      solution: 'We standardized compliance processes, implemented unified monitoring systems, and established a center of excellence for ongoing compliance management.',
      results: [
        '95% improvement in compliance consistency',
        '50% reduction in compliance-related incidents',
        '30% faster regulatory reporting',
        'Enhanced patient data protection'
      ],
      technologies: ['Healthcare Information Systems', 'AIMS Standards', 'Compliance Automation', 'Data Governance'],
      outcomes: 'The implementation enhanced patient trust, streamlined operations across facilities, and established a foundation for future healthcare technology adoption.'
    },
    'technology-iso27001': {
      category: 'ISMS Compliance',
      title: 'Technology Firm ISO 27001 Certification Success',
      client: 'Leading Software Company',
      duration: '10 months',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
      description: 'Guided a rapidly growing technology company through complete ISO 27001 ISMS implementation and certification, establishing world-class information security practices.',
      challenge: 'Fast-growing tech company needed ISO 27001 certification to win enterprise clients but lacked structured information security management processes.',
      solution: 'We implemented a comprehensive ISMS from ground up, including policy development, risk assessment framework, and staff training programs.',
      results: [
        'ISO 27001 certification achieved on first attempt',
        '75% reduction in security incidents',
        '200% increase in enterprise client acquisitions',
        'Improved competitive positioning in the market'
      ],
      technologies: ['ISO 27001 Standards', 'Security Management Systems', 'Risk Assessment Frameworks', 'Policy Management'],
      outcomes: 'The certification opened new market opportunities, enhanced client confidence, and established the company as a trusted enterprise software provider.'
    },
    'retail-ai-analytics': {
      category: 'AI Solutions',
      title: 'Retail Chain AI-Powered Customer Analytics Platform',
      client: 'National Retail Chain',
      duration: '9 months',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      description: 'Developed and implemented an advanced AI-powered customer analytics platform that revolutionized personalized marketing and inventory optimization for a major retail chain.',
      challenge: 'The retail chain struggled with inventory management, customer segmentation, and personalizing marketing campaigns, leading to excess inventory and declining customer engagement.',
      solution: 'We built a comprehensive AI platform using machine learning algorithms for predictive analytics, customer behavior analysis, and automated inventory optimization.',
      results: [
        '35% improvement in inventory turnover',
        '50% increase in marketing campaign effectiveness',
        '25% boost in customer retention rates',
        '$2.5M annual cost savings achieved'
      ],
      technologies: ['Machine Learning', 'Predictive Analytics', 'Customer Segmentation AI', 'Inventory Optimization'],
      outcomes: 'The AI platform transformed the retail operations, delivering significant cost savings while improving customer satisfaction and loyalty.'
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const study = caseStudies[id as keyof typeof caseStudies];

  if (!study) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto container-padding py-20">
          <h1 className="text-2xl font-bold">Case Study Not Found</h1>
          <Link to="/">
            <Button className="mt-4">Return Home</Button>
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
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto container-padding">
              <div className="max-w-4xl">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {study.category}
                </span>
                <h1 className="text-4xl font-bold text-white mb-4">{study.title}</h1>
                <div className="flex items-center space-x-6 text-white">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>{study.client}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>{study.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto">
              <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>

              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{study.description}</p>
              </div>

              {/* Challenge */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2 text-green-500" />
                  Key Results
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Technologies & Frameworks</h2>
                <div className="flex flex-wrap gap-3">
                  {study.technologies.map((tech, index) => (
                    <span key={index} className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Long-term Outcomes</h2>
                <p className="text-muted-foreground leading-relaxed">{study.outcomes}</p>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready for Your Transformation?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how we can help your organization achieve similar results.
                </p>
                <Link to="/consultation" onClick={scrollToTop}>
                  <Button className="btn-primary">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
