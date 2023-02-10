import Image from "next/image";
import Header from "../components/Header";
import Content from "../components/Content";

export default function Home() {
  return (
    <div className="h-screen w-full bg-[#111] flex flex-col ">
      <Header />
      <Content />
    </div>
  );
}
