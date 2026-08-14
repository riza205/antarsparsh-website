import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FCFBF8]">
        <section className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#8C9687]">CONTACT</p>
          <h1 className="mt-4 text-5xl md:text-7xl text-[#3E5140]" style={{fontFamily:"var(--font-serif)"}}>Let's Connect</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#667164]">If you're interested in beginning therapy or simply have a question, fill out the form below and I'll get back to you as soon as possible.</p>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}