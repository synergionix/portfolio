import { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree for form handling
      const response = await fetch('https://formspree.io/f/xvgrnvpa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `New inquiry from ${formData.name} - ${formData.service}`,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Consultation Request Submitted!',
          description: "We'll contact you within 24 hours to confirm your appointment.",
          duration: 5000
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          preferredDate: '',
          preferredTime: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error submitting request',
        description: 'Please try again or contact us directly.',
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'AIMS Compliance Consulting',
    'ISMS Compliance Consulting',
    'AI Solutions Implementation',
    'AI Adoption & Transformation',
    'General Inquiry'
  ];

  const consultationBenefits = [
    'Expert analysis of your current systems',
    'Customized solution recommendations',
    'Implementation roadmap planning',
    'ROI and projected growth estimates',
    'No-obligation assessment'
  ];

  // Added points from What to Expect merged here
  const whatToExpectPoints = [
    '45-minute consultation with our experts',
    'Detailed assessment of your requirements',
    'Project timeline and cost estimate'
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-blue-500/10 py-20">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Schedule Your <span className="gradient-text">Consultation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get expert advice tailored to your business needs. Our consultants will help you
                identify opportunities and create a roadmap for success.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>30-60 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Expert consultants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Flexible scheduling</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Consultation Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
                <h2 className="text-2xl font-bold mb-2">Book Your Consultation</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
                        Preferred Date
                      </label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">
                        Preferred Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell us about your project
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your current challenges and goals..."
                      rows={2}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Schedule Consultation
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Right Side */}
              <div className="space-y-4">
                {/* Merged What You'll Get & What to Expect */}
                <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-4">
                  <h3 className="text-lg font-semibold mb-3">What to Expect ?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-snug">
                    {consultationBenefits.map((benefit, index) => (
                      <li key={`benefit-${index}`} className="flex items-start space-x-1">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                    {whatToExpectPoints.map((point, index) => (
                      <li key={`expect-${index}`} className="flex items-start space-x-1">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why Choose Synergionix Technologies */}
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-border">
                  <h3 className="text-lg font-semibold mb-3">Why Choose Synergionix Technologies?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-snug">
                    <li className="flex items-center space-x-1">
                      <CheckCircle className="text-primary h-4 w-4 flex-shrink-0" />
                      <span>Dual expertise in AI & Compliance</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <CheckCircle className="text-primary h-4 w-4 flex-shrink-0" />
                      <span>Certified and experienced professionals</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <CheckCircle className="text-primary h-4 w-4 flex-shrink-0" />
                      <span>Custom solutions for your business</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <CheckCircle className="text-primary h-4 w-4 flex-shrink-0" />
                      <span>Dedicated to long-term partnership</span>
                    </li>
                  </ul>
                </div>

                {/* Available Times */}
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-border">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Clock className="h-4 w-4 text-primary mr-1" />
                    Available Times
                  </h3>
                  <div className="space-y-1 text-muted-foreground leading-snug">
                    <span className='text-sm'><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM | </span>
                    <span className='text-sm'><strong>Time Zones:</strong> IST, EST | </span>
                    <span className='text-sm'><strong>Format:</strong> Online Meeting </span>
                  </div>
                </div>

                {/* Who You'll Meet */}
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-border">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Users className="h-4 w-4 text-primary mr-1" />
                    Who You'll Meet
                  </h3>
                  <p className="text-sm text-muted-foreground leading-snug">
                    Senior consultants with 30+ years of experience in Software and Business Transformation
                  </p>
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

export default Consultation;
