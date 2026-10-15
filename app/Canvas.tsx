"use client";

import React from "react";
import { useState } from "react";
import { MainScreen } from "./MainScreen";
// import { Dashboard } from "./Dashboard";


export type TelaAtual = "Dashboard" | "MainScreen";

function Canvas(){

    const [canvasAtual, setcanvasAtual] = useState<TelaAtual>("MainScreen")

    return(
        <section className="flex flex-col min-h-screen bg-white">
         {canvasAtual === 'MainScreen' && (<MainScreen navegarPara={setcanvasAtual} />)}    
         {/* {canvasAtual === 'Dashboard' && <Dashboard />}     */}
        </ section>
       
    )


}

export default Canvas