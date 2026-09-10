import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Advisory from '@/components/Advisory';
import Workflow from '@/components/Workflow';
import Modules from '@/components/Modules';
import UAELocalisation from '@/components/UAELocalisation';
import Dashboard from '@/components/Dashboard';
import CaseStudy from '@/components/CaseStudy';
import Industries from '@/components/Industries';
import ConsultationForm from '@/components/ConsultationForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PainPoints />
      <Advisory />
      <Workflow />
      <Modules />
      <UAELocalisation />
      <Dashboard />
      <CaseStudy />
      <Industries />
      <ConsultationForm />
      <FAQ />
      <Footer />
    </main>
  );
}
