import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Packages from "@/components/home/Packages";
import Benefits from "@/components/home/Benefits";
import MeetMeenu from "@/components/home/MeetMeenu";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Journey from "@/components/home/Journey";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <Benefits />
      <MeetMeenu />
      <WhyChooseUs />
      <Journey />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}