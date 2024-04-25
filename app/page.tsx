import Hero from "@/components/landingpage/Hero";
import Navbar from "@/components/landingpage/Navbar";
import Profile from "@/components/landingpage/Profile";
import Shares from "@/components/landingpage/Shares";
import Brands from "@/components/landingpage/Brands";
import Pandemic from "@/components/landingpage/Pandemic";
import Blog from "@/components/landingpage/Blog";
import Careers from "@/components//landingpage/Careers";

import Image from "next/image";
import Footer from "@/components/landingpage/Footer";

export default function Home() {
  return (
    <main className="text-slate-800 ">
      <Navbar />
      <Hero />
      <Profile />
      <div className="bg-slate-50">
        <Shares />
        <Pandemic />
        <Brands />
      </div>
      <Blog />

      <div className="bg-slate-50">
        <Careers />
        <Footer />
      </div>
    </main>
  );
}
