
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CaseStudyDetail = () => {
  const { id } = useParams();

  const caseStudies = {
    'global-financial-aims': {
      category: 'AIMS & ISMS Compliance',
      title: 'Credit Rating Agency AIMS & ISMS Integration (Cloud AI)',
      client: 'Major Credit Rating Agency',
      duration: '6 months',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80',
      description: 'Delivered integrated AIMS (ISO 42001) and ISMS (ISO 27001/27017/27018) rollout for a global credit-rating agency’s cloud-based AI services, ensuring full audit-readiness and information security assurance.',
      challenge: 'The client had fragmented AI risk management and legacy data security controls across cloud deployments—creating gaps in bias oversight, auditability, and regulatory trust.',
      solution: 'We performed comprehensive risk & gap analysis, designed an integrated compliance roadmap, deployed automated bias monitoring and data lineage tools, formalized a Statement of Applicability (SoA), and trained internal audit and governance teams.',
      results: [
        '100 % AIMS & ISMS compliance achieved within 6 months',
        '60 % reduction in audit preparation effort',
        '40 % uplift in AI fairness and data security posture',
        'Zero compliance violations post-deployment'
      ],
      technologies: ['ISO 42001 AIMS', 'ISO 27001/27017/27018 ISMS', 'Automated Compliance & Bias Analytics', 'Unified Risk & Governance Platform'],
      outcomes: 'Strengthened regulatory standing, operational efficiency across AI and data workflows, and enhanced stakeholder trust via transparent and ethical governance.'
    },
    'cloud-aims': {
      category: 'AIMS & ISMS Compliance',
      title: 'Integrated AIMS & ISMS Rollout for Cloud AI Systems',
      client: 'Global SaaS Platform',
      duration: '6 months',
      image: 'https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?auto=format&fit=crop&w=1200&q=80',
      description: 'Implemented enterprise-wide AIMS and ISMS solution for a cloud-based platform provider, ensuring both AI governance (ISO 42001) and cloud information security (ISO 27001/27017/27018) across distributed services.',
      challenge: 'The organization managed AI services across global cloud environments without unified controls, leading to fragmented risk oversight and audit readiness gaps.',
      solution: 'We unified AI and information security governance by aligning AIMS and ISMS frameworks, implemented a Statement of Applicability (SoA) for both ISO 42001 and ISO 27001/27017/27018, set up cross-functional audit processes, and established a governance hub for ongoing monitoring.',
      results: [
        '95% improvement in compliance consistency',
        '50% fewer compliance audit non-conformities',
        '30% accelerated regulatory reporting',
        'Robust protection for AI-generated and customer data'
      ],
      technologies: ['Cloud ISMS (ISO 27001 / 27017 / 27018)', 'ISO 42001 AIMS Standards', 'Compliance Automation', 'Unified Risk Management'],
      outcomes: 'This integrated initiative improved stakeholder trust, ensured seamless audit readiness, and created a scalable compliance foundation to support future AI deployments in cloud environments.'
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
    'saas-ai-infosec': {
      category: 'AI Security Solutions',
      title: 'AI-First Cloud Security Transformation for SaaS Platform',
      client: 'Leading SaaS Platform',
      duration: '5 months',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      description: 'Executed full rollout of an AI-powered security platform for cloud infrastructure and SaaS applications, enabling real-time threat detection, behavioral risk scoring, misconfiguration remediation, and compliance insights.',
      challenge: 'The SaaS provider lacked unified visibility into cloud misconfigurations, anomalous user behaviors, and evolving threat patterns resulting in undetected exposures and slow incident response.',
      solution: 'Engineered an AI-based security stack that continuously monitors cloud workloads, applies anomaly detection models, automates misconfiguration scanning, integrates behavioral analytics, and triggers automated incident response workflows.',
      results: [
        '70% reduction in cloud security breaches',
        '50% enhanced real-time compliance visibility',
        '60% faster threat response time',
        '$10M breach cost savings through early remediation'
      ],
      technologies: ['Cloud Threat Analytics AI', 'Automated Misconfiguration Detection', 'Behavioral Risk Scoring', 'AI-Orchestrated Response Flows'],
      outcomes: 'Strengthened organizational resilience against advanced threats, accelerated compliance posture, and significantly reduced security incident costs while empowering security teams with deep cloud visibility.'
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
