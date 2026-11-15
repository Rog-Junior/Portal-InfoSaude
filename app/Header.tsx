'use client'; // Necessário no Next.js (App Router)

import { useState } from 'react';
import { Layers3, Menu, X } from 'lucide-react';
import { TelaAtual } from './Canvas';

interface CanvasProps{
  navegarPara: (novaTela: TelaAtual) => void;
  }


export default function Header({navegarPara}: CanvasProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full border-b border-slate-800 bg-slate-900 px-6 py-4 text-slate-100 shadow-md">
      <div className="flex items-center justify-between">
        {/* Esquerda: Logo e Título */}
        <div className="flex items-center gap-3">
          <div className="cursor-pointer rounded-xl border border-sky-500/20 bg-sky-500/10 p-2 text-emerald-400 transition duration-700 ease-in hover:bg-sky-500/40">
            <Layers3 className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">Info.Saúde</h1>
            <p className="text-xs text-slate-400">Portal Colaborativo de Alunos</p>
          </div>
        </div>

        {/* Botão Hambúrguer (Apenas no Mobile) */}
        <button
          onClick={toggleMenu}
          type="button"
          aria-label="Abrir menu de navegação"
          className="z-50 rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none md:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex flex-row gap-2">
            <li>
              <a href="#" onClick={(e) => {e.preventDefault(); navegarPara("MainScreen")}} className="block rounded-full p-2 px-4 transition duration-200 hover:bg-slate-100/10">
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => {e.preventDefault(); navegarPara("Forum"); alert("Apesar de criado a aba forum, o mesmo ainda está em desenvolvimento e não está devidamente funcionando.")}} className="block rounded-full p-2 px-4 transition duration-200 hover:bg-slate-100/10">
                Fórum
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => {e.preventDefault(); alert("Página Ainda não criada")}} className="block rounded-full p-2 px-4 transition duration-200 hover:bg-slate-100/10">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu Lateral / Drawer Mobile (Surgindo da direita para a esquerda) */}
      <nav
        className={`fixed top-0 right-0 z-40 h-full w-64 bg-slate-900/95 border-l border-slate-800 p-6 shadow-2xl backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mt-12 flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Navegação</p>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="#"
                onClick={() => {setIsMenuOpen(false);}}
                className="block rounded-lg p-2 px-4 text-slate-200 transition-colors hover:bg-slate-800"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {setIsMenuOpen(false); alert("Página em processo de desenvolvimento.")}}
                className="block rounded-lg p-2 px-4 text-slate-200 transition-colors hover:bg-slate-800"
              >
                Fórum
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() =>{setIsMenuOpen(false); alert("Página em processo de desenvolvimento.")}}
                className="block rounded-lg p-2 px-4 text-slate-200 transition-colors hover:bg-slate-800"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Fundo Escuro Overlay (Para fechar o menu ao clicar fora) */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
        />
      )}
    </header>
  );
}