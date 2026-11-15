"use client";

import React from "react";
import { useState } from "react";
import { MainScreen } from "./MainScreen";
import { Forum } from "./Forum";
import Home from "./page";

export type TelaAtual = "Forum" | "MainScreen" | "Contato";

interface CanvasProps{
    canvasAtual: TelaAtual;
    setcanvasAtual: (tela:TelaAtual) => void;
}

function Canvas({canvasAtual, setcanvasAtual} : CanvasProps){

    return(
        <section className="flex flex-col min-h-screen bg-white">
         {canvasAtual === 'MainScreen' && (<MainScreen navegarPara={setcanvasAtual} />)}    
         {canvasAtual === 'Forum' && <Forum navegarPara={setcanvasAtual} />} 
        </ section>
       
    )


}

export default Canvas