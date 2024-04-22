import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Shares from "@/components/Shares";
import Brands from "@/components/Brands";
import Pandemic from "@/components/Pandemic";
import Blog from "@/components/Blog";
import Careers from "@/components/Careers";

import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="text-slate-800">
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
