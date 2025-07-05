import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, FileText, Video, BookOpen } from 'lucide-react';

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resources = [
    {
      title: 'AIMS Compliance Checklist',
      type: 'PDF Guide',
      icon: FileText,
      description: 'Comprehensive checklist for AIMS compliance assessment and implementation.',
      category: 'Compliance'
    },
    {
      title: 'AI Readiness Assessment Tool',
      type: 'Interactive Tool',
      icon: BookOpen,
      description: 'Evaluate your organization\'s readiness for AI implementation.',
      category: 'AI Solutions'
    },
    {
      title: 'ISO 27001 Implementation Webinar',
      type: 'Video',
      icon: Video,
      description: 'Expert-led webinar on ISO 27001 implementation best practices.',
      category: 'ISMS'
    },
    {
      title: 'Digital Transformation Playbook',
      type: 'White Paper',
      icon: FileText,
      description: 'Strategic guide for successful digital transformation initiatives.',
      category: 'Transformation'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">Resource Center</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Access our collection of guides, tools, and resources to support your compliance and technology initiatives.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <resource.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-2">
                          <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                            {resource.category}
                          </span>
                        </div>
                        <h3 className="font-bold mb-2">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{resource.type}</span>
                          <Button size="sm" className="btn-primary">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12 bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Need Custom Resources?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us to discuss custom resources tailored to your specific requirements.
                </p>
                <a href="mailto:info@synergionix.com"><Button className="btn-primary">Request Custom Resource</Button></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
