import HeroSection from "@/components/HeroSection";
import Client from "@/components/Client";
import Service from "@/components/Service";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import Plan from "@/components/Plan";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Client />
      <Service />
      <About/>
      <Team />
      <Portfolio />
      <Plan />
      <Testimonial />
      <Blog />
      <CTA />
    </>
  );
}