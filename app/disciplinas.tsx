'use client';

import React, { useState } from 'react';
import { BookOpen, X, Clock, MapPin } from 'lucide-react';

interface Disciplina {
  nome: string;
  cargaHoraria: string;
}

interface EncontroPresencial {
  sigla: string;
  data: string;
  descricao: string;
}

const DISCIPLINAS_DATA: Disciplina[] = [
  { nome: '1. Introdução à modalidade EaD e aos recursos tecnológicos de apoio', cargaHoraria: '20 h' },
  { nome: '2. Fundamentos da informática em saúde e da saúde digital', cargaHoraria: '40 h' },
  { nome: '3. Nivelamento em ciências da saúde e ciências da computação', cargaHoraria: '40 h' },
  { nome: '4. Sistemas de informação em saúde', cargaHoraria: '40 h' },
  { nome: '5. Trabalho de conclusão de curso (TCC) – módulo 1', cargaHoraria: '30 h' },
  { nome: '6. Informática clínica', cargaHoraria: '40 h' },
  { nome: '7. Repositórios digitais e ciência de dados em saúde', cargaHoraria: '40 h' },
  { nome: '8. Interoperabilidade e padrões em informática em saúde', cargaHoraria: '40 h' },
  { nome: '9. Imagens médicas e sinais biológicos', cargaHoraria: '40 h' },
  { nome: '10. Trabalho de conclusão de curso (TCC) – módulo 2', cargaHoraria: '30 h' },
  { nome: '11. Telemedicina e telessaúde', cargaHoraria: '40 h' },
  { nome: '12. Saúde digital e gestão em saúde', cargaHoraria: '40 h' },
  { nome: '13. Tecnologias educacionais em saúde', cargaHoraria: '40 h' },
  { nome: '14. Trabalho de conclusão de curso (TCC) – módulo 3', cargaHoraria: '40 h' },
];

const ENCONTROS_DATA: EncontroPresencial[] = [
  { sigla: 'EP1', data: '20/02/2027', descricao: 'encontro com alunos – atividades.' },
  { sigla: 'EP2', data: '25/09/2027', descricao: 'encontro com alunos – atividades.' },
  { sigla: 'EP3', data: '19/02/2028', descricao: 'encontro com alunos – prova final e TCC.' },
  { sigla: 'EP4', data: '25/03/2028', descricao: 'encontro com alunos – recuperação da prova final e do TCC.' },
];

export function DisciplinasModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão de acionamento */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
      >
        <BookOpen className="h-4 w-4" />
        Disciplinas e Encontros Presenciais
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-disciplinas-title"
        >
          <div
            className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabeçalho */}
            <div className="flex items-start justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">
              <div>
                <h2 id="modal-disciplinas-title" className="text-xl font-bold text-slate-900">
                  Disciplinas e carga horária
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Matriz curricular e cronograma de avaliações presenciais do curso.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700"
                aria-label="Fechar disciplinas e encontros"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Corpo rolável */}
            <div className="space-y-8 overflow-y-auto p-6">
              {/* Tabela de Disciplinas */}
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-700">
                      <th className="px-4 py-3">Disciplina</th>
                      <th className="px-4 py-3 whitespace-nowrap text-right">Carga horária</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {DISCIPLINAS_DATA.map((disciplina, index) => (
                      <tr key={index} className="bg-white transition-colors hover:bg-slate-50 text-slate-800">
                        <td className="px-4 py-3">{disciplina.nome}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-right">
                          <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                            <Clock className="h-3 w-3 text-slate-500" />
                            {disciplina.cargaHoraria}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-slate-300 bg-slate-100 font-bold text-slate-900">
                      <td className="px-4 py-3">Total</td>
                      <td className="px-4 py-3 whitespace-nowrap text-right">520 h</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Seção Encontros Presenciais */}
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-emerald-700" />
                  <h3 className="text-base font-bold text-slate-900">
                    Encontros com alunos e avaliações presenciais (EP)
                  </h3>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {ENCONTROS_DATA.map((encontro) => (
                    <li key={encontro.sigla} className="flex flex-wrap items-baseline gap-1.5">
                      <span className="inline-flex items-center rounded bg-emerald-100 px-2 py-0.5 font-mono text-xs font-bold text-emerald-900">
                        {encontro.sigla} – {encontro.data}
                      </span>
                      <span className="text-slate-800">: {encontro.descricao}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Rodapé */}
            <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-3 text-xs text-slate-500">
              <span>Carga horária total: 520 horas</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}