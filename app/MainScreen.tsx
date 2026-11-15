import React, { useState } from 'react';
import { type TelaAtual } from './Canvas';
import Card from './card';
import { Car } from 'lucide-react';
import QuickAcess from './quickAcess';

interface CanvasProps {
  navegarPara: (novaTela: TelaAtual) => void;
}

export function MainScreen({navegarPara}: CanvasProps ) {
  const [activeTab, setActiveTab] = useState<string>('MainScreen');

  return (
    <main className="flex-1 px-4 py-8 md:px-[10%]">
    <div className="flex flex-col gap-6 md:grid md:grid-cols-[70%_30%]">
      {/* Coluna 1: Feed de Noticias / Cards */}
      <div className="flex h-auto w-full flex-col gap-4">
        <Card typeAviso="Aviso Geral" 
        title = 'Início das aulas.'
        data="Publicado em 15 de Novembro de 2026"
        content={
    <>
      Olá a todos! Anunciou-se através da plataforma Moodle que as aulas iniciarão no dia 18-11-2026. Primeira aula será de Anncio realizado na plataforma Moodle, primeira aula será "1. Introdução à modalidade EaD e aos recursos tecnológicos de apoio". Seguirei atualizando o a página conforme novas informações forem surgindo.
    </> 
         } />
        <Card typeAviso="Aviso Geral" 
        title = 'A data 14/10/2026 estava errada.'
        data="Publicado em 15 de Outubro de 2026"
        content={
    <>
      Olá a todos! A informação presente na plataforma Moodle de que as aulas do curso começariam no dia 14 de outubro de 2026 estava errada.  <strong className="font-semibold text-slate-900">
        Os alunos do grupo encaminharam e-mail à instituição acerca do tema, porém, ainda não obtiveram respostas.
      </strong>
      {" "}Seguirei atualizando o a página conforme novas informações forem surgindo.
    </> 
         } />
        <Card typeAviso="--" 
        title = 'Início Oficial das Aulas do Curso'
        data="Publicado em 12 de Outubro de 2026"
        content={
    <>
      Sejam bem-vindos! Segundo a plataforma Moodle, as aulas do curso de{" "}
      <strong className="font-semibold text-slate-900">
        Informática em Saúde
      </strong>{" "}
      começarão no dia{" "}
      <strong className="font-semibold text-slate-900">
        14/10/2026
      </strong>
      . Fiquem atentos à plataforma de aulas para acessar as diretrizes iniciais e o cronograma do módulo.
    </> 
         } />
      </div>

      {/* Coluna 2: Acesso Rápido */}
      <aside className="h-auto w-full">
        <QuickAcess />
      </aside>

    </div>
  </main>
  );
}