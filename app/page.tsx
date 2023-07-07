import Image from "next/image";
import Header from "../components/Header";
import Content from "../components/Content";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import SectionCard from "@/components/SectionCard";

export default function Home() {
  return (
    <div className="h-full max-w-7xl mx-auto bg-[#111] flex flex-col ">
      <Header />
      <Content />
      <Main />
      <SectionCard />
      <Hero />
      <Footer />
    </div>
  );
}
