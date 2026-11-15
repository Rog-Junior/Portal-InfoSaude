"use client";

import React, { useState } from "react";
import { MessageSquarePlus, BookOpen, Send, User } from "lucide-react";

// Tipagem para os comentários
interface Comentario {
  id: number;
  autor: string;
  texto: string;
  data: string;
}

// Tipagem para a prop de navegação do seu app
interface ForumProps {
  navegarPara?: (tela: any) => void;
}

export function Forum({ navegarPara }: ForumProps) {
  // Estado para controlar a aba selecionada no menu esquerdo
  const [abaSelecionada, setAbaSelecionada] = useState<string>("Aula 1");

  // Estados do formulário de novo comentário
  const [novoNome, setNovoNome] = useState("");
  const [novoTexto, setNovoTexto] = useState("");

  // Estado que armazena os comentários por aula
  const [comentariosPorAba, setComentariosPorAba] = useState<Record<string, Comentario[]>>({
    "Aula 1": [
      { id: 1, autor: "Maria Silva", texto: "Excelente introdução ao conteúdo!", data: "10:30" },
      { id: 2, autor: "João Santos", texto: "Fiquei com dúvida na parte final do vídeo.", data: "11:15" },
    ],
  });

  // Lista de itens do menu à esquerda
  const aulas = Array.from({ length: 10 }, (_, i) => `Aula ${i + 1}`);

  // Função para adicionar um novo comentário na aba ativa
  const handleSubmitComentario = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoNome.trim() || !novoTexto.trim()) return;

    const novoComentarioObj: Comentario = {
      id: Date.now(),
      autor: novoNome,
      texto: novoTexto,
      data: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setComentariosPorAba((prev) => ({
      ...prev,
      [abaSelecionada]: [...(prev[abaSelecionada] || []), novoComentarioObj],
    }));

    // Limpa os campos do formulário
    setNovoNome("");
    setNovoTexto("");
  };

  const comentariosAtuais = comentariosPorAba[abaSelecionada] || [];

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 bg-slate-50 min-h-[calc(100vh-80px)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* LADO ESQUERDO: Lista de Aulas e Nova Discussão */}
        <aside className="md:col-span-1 bg-white p-4 rounded-xl shadow-sm border border-slate-200 h-fit">
          <button
            onClick={() => setAbaSelecionada("Iniciar Nova Discussão")}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all mb-4 ${
              abaSelecionada === "Iniciar Nova Discussão"
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
            }`}
          >
            <MessageSquarePlus className="w-5 h-5" />
            <span>Nova Discussão</span>
          </button>

          <div className="border-t border-slate-100 pt-3">
            <p className="text-xs font-semibold uppercase text-slate-400 mb-2 px-2">
              Conteúdo do Curso
            </p>
            <nav className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto">
              {aulas.map((aula) => (
                <button
                  key={aula}
                  onClick={() => setAbaSelecionada(aula)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                    abaSelecionada === aula
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>{aula}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* LADO DIREITO: Conteúdo da Aula e Comentários */}
        <main className="md:col-span-3 flex flex-col gap-6">
          
          {/* 1. Área Superior: Texto/Conteúdo da Aula */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">{abaSelecionada}</h2>
            <p className="text-xs text-slate-400 mb-4">
              Fórum de dúvidas e discussões referente a {abaSelecionada.toLowerCase()}
            </p>
            
            <div className="prose prose-slate max-w-none text-slate-600 border-t border-slate-100 pt-4 leading-relaxed">
              {abaSelecionada === "Iniciar Nova Discussão" ? (
                <p>
                  Espaço reservado para abrir novos tópicos gerais do fórum. Preencha os campos abaixo para iniciar uma conversa com a turma.
                </p>
              ) : (
                <p>
                  Bem-vindo à discussão da <strong>{abaSelecionada}</strong>. Utilize o espaço abaixo para fazer perguntas sobre o conteúdo ministrado, compartilhar materiais de apoio ou debater os temas abordados com outros alunos e professores.
                </p>
              )}
            </div>
          </section>

          {/* 2. Área Intermediária: Lista de Comentários Existentes */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Comentários ({comentariosAtuais.length})
            </h3>

            {comentariosAtuais.length === 0 ? (
              <p className="text-sm text-slate-400 italic py-4">
                Nenhum comentário ainda nesta aula. Seja o primeiro a comentar!
              </p>
            ) : (
              <div className="flex flex-col gap-4">
                {comentariosAtuais.map((c) => (
                  <div key={c.id} className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-slate-200 rounded-full text-slate-600">
                          <User className="w-4 h-4" />
                        </div>
                        <span className="font-semibold text-slate-800 text-sm">{c.autor}</span>
                      </div>
                      <span className="text-xs text-slate-400">{c.data}</span>
                    </div>
                    <p className="text-sm text-slate-600 pl-8">{c.texto}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 3. Área Inferior: Formulário para Inserir Novo Comentário */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Deixe seu comentário</h3>
            
            <form onSubmit={handleSubmitComentario} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  placeholder="Ex: Ana Clara"
                  value={novoNome}
                  onChange={(e) => setNovoNome(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-800 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Seu Comentário
                </label>
                <textarea
                  rows={3}
                  placeholder="Escreva sua dúvida ou contribuição..."
                  value={novoTexto}
                  onChange={(e) => setNovoTexto(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-800 text-sm resize-none"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Comentário</span>
                </button>
              </div>
            </form>
          </section>

        </main>
      </div>
    </div>
  );
}