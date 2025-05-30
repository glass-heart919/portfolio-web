"use client";
import { useEffect } from "react";
import Aos from "aos";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Hireme from "@/components/Hireme";
import Contact from "@/components/Contact";
import "aos/dist/aos.css";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Made with ❤ by Andrew</h6>
        <p>© All Copyrights Reserved {year}</p>
      </footer>
    </div>
  );
}
