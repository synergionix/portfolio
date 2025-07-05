
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Team from '@/components/Team';
import ClientMarquee from '@/components/ClientMarquee';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClientMarquee />
      <About />
      <Services />
      <CaseStudies />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
