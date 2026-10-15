import Image from "next/image";
import Header from "./Header";
import Canvas from "./Canvas";
import Footer from "./footer";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Header />
      <Canvas/>
      <Footer/>
    </>
  );
}
