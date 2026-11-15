'use client'

import Image from "next/image";
import Header from "./Header";
import Canvas from "./Canvas";
import Footer from "./footer";
import "./globals.css";
import { TelaAtual } from "./Canvas";
import { useState } from "react";



export default function Home() {

  const [canvasAtual, setcanvasAtual] = useState<TelaAtual>("MainScreen")

  return (
    <>
      <Header navegarPara={setcanvasAtual}/>
      <Canvas canvasAtual={canvasAtual} setcanvasAtual={setcanvasAtual}/>
      <Footer/>
    </>
  );
}
