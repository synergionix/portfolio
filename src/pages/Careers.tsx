
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign } from 'lucide-react';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = [
    {
      title: 'Senior AIMS Compliance Consultant',
      location: 'Remote / Sydney',
      type: 'Full-time',
      salary: '$90,000 - $120,000',
      description: 'Lead AIMS compliance initiatives for enterprise clients and provide expert consulting services.'
    },
    {
      title: 'AI Solutions Architect',
      location: 'Melbourne / Remote',
      type: 'Full-time',
      salary: '$110,000 - $140,000',
      description: 'Design and implement AI solutions for business transformation projects.'
    },
    {
      title: 'Information Security Analyst',
      location: 'Brisbane',
      type: 'Full-time',
      salary: '$75,000 - $95,000',
      description: 'Support ISMS implementation and security compliance for various organizations.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Build your career with us and help organizations achieve compliance excellence and digital transformation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6 mb-12">
                {jobs.map((job, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold mb-2 md:mb-0">{job.title}</h3>
                      <Button className="btn-primary w-full md:w-auto">Apply Now</Button>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Don't See the Right Role?</h3>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <Button className="btn-primary">Send Resume</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
