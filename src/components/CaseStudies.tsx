
import { ExternalLink, Calendar, User, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'global-financial-aims',
      category: 'AIMS Compliance',
      title: 'FinTech AIMS Compliance Transformation',
      client: 'Major Banking Corporation',
      duration: '8 months',
      image: 'https://images.unsplash.com/photo-1669951584605-4deba095a87f?auto=format&fit=crop&w=600&q=80',
      description: 'Successfully implemented comprehensive AIMS compliance framework for a multinational banking institution, achieving 100% regulatory compliance and establishing robust audit capabilities.',
      results: [
        '100% AIMS compliance achievement within 8 months',
        '60% reduction in audit preparation time',
        '40% improvement in information security posture',
        'Zero compliance violations post-implementation'
      ],
      technologies: ['AIMS Framework', 'Compliance Management Systems', 'Audit Analytics', 'Risk Assessment Tools']
    },
    {
      id: 'healthcare-aims',
      category: 'AIMS Compliance',
      title: 'Healthcare Network AIMS Implementation',
      client: 'Regional Healthcare Provider',
      duration: '6 months',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
      description: 'Deployed enterprise-wide AIMS compliance solution for a healthcare network, ensuring patient data protection and regulatory adherence across multiple facilities.',
      results: [
        '95% improvement in compliance consistency',
        '50% reduction in compliance-related incidents',
        '30% faster regulatory reporting',
        'Enhanced patient data protection'
      ],
      technologies: ['Healthcare Information Systems', 'AIMS Standards', 'Compliance Automation', 'Data Governance']
    },
    {
      id: 'technology-iso27001',
      category: 'ISMS Compliance',
      title: 'Technology Firm ISO 27001 Certification Success',
      client: 'Leading Software Company',
      duration: '10 months',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
      description: 'Guided a rapidly growing technology company through complete ISO 27001 ISMS implementation and certification, establishing world-class information security practices.',
      results: [
        'ISO 27001 certification achieved on first attempt',
        '75% reduction in security incidents',
        '200% increase in enterprise client acquisitions',
        'Improved competitive positioning in the market'
      ],
      technologies: ['ISO 27001 Standards', 'Security Management Systems', 'Risk Assessment Frameworks', 'Policy Management']
    },
    {
      id: 'retail-ai-analytics',
      category: 'AI Solutions',
      title: 'Retail Chain AI-Powered Customer Analytics Platform',
      client: 'National Retail Chain',
      duration: '9 months',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      description: 'Developed and implemented an advanced AI-powered customer analytics platform that revolutionized personalized marketing and inventory optimization for a major retail chain.',
      results: [
        '35% improvement in inventory turnover',
        '50% increase in marketing campaign effectiveness',
        '25% boost in customer retention rates',
        '$2.5M annual cost savings achieved'
      ],
      technologies: ['Machine Learning', 'Predictive Analytics', 'Customer Segmentation AI', 'Inventory Optimization']
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <section id="case-studies" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped organizations across industries achieve their 
            technology and compliance objectives through innovative solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg hover-lift border border-border">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{study.title}</h3>
                
                {/* Meta Info */}
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{study.client}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{study.duration}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {study.description}
                </p>

                {/* Key Results */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                    Key Results
                  </h4>
                  <ul className="space-y-2">
                    {study.results.slice(0, 3).map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to={`/case-studies/${study.id}`}>
                  <Button variant="outline" className="w-full group" onClick={scrollToTop}>
                    Read Full Case Study
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4">Want to Be Our Next Success Story?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join the growing list of organizations that have transformed their operations 
              with our comprehensive technology solutions and expert consulting services.
            </p>
            <Link to='/consultation'>
              <Button className="btn-primary" onClick={scrollToTop}>
                Start Your Transformation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
