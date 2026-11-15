'use client';

import React, { useState } from 'react';
import { Calendar, X, Clock, Info } from 'lucide-react';

interface ItemProgramacao {
  data: string;
  atividade: string;
  cargaHoraria: string;
  observacoes: string;
  destaque?: 'recesso' | 'encontro' | 'avaliacao';
}

const PROGRAMACAO_DATA: ItemProgramacao[] = [
  { data: '11/11/2026', atividade: 'Início do curso e palestra magna', cargaHoraria: '—', observacoes: 'Abertura da especialização' },
  { data: '18/11/2026', atividade: '1. Introdução à modalidade EaD e aos recursos tecnológicos de apoio', cargaHoraria: '20 h', observacoes: '' },
  { data: '02/12/2026', atividade: '2. Fundamentos da informática em saúde e da saúde digital', cargaHoraria: '40 h', observacoes: '' },
  { data: '16/12/2026 a 12/01/2027', atividade: 'Recesso', cargaHoraria: '—', observacoes: 'Sem atividades acadêmicas previstas no calendário', destaque: 'recesso' },
  { data: '27/01/2027', atividade: '3. Nivelamento em ciências da saúde e ciências da computação', cargaHoraria: '40 h', observacoes: '' },
  { data: '20/02/2027', atividade: 'Encontro com alunos – atividades', cargaHoraria: '—', observacoes: 'EP1', destaque: 'encontro' },
  { data: '24/02/2027', atividade: '4. Sistemas de informação em saúde', cargaHoraria: '40 h', observacoes: '' },
  { data: '24/03/2027', atividade: '5. Trabalho de conclusão de curso (TCC) – módulo 1', cargaHoraria: '30 h', observacoes: '' },
  { data: '07/04/2027', atividade: 'Provas de recuperação do semestre', cargaHoraria: '—', observacoes: '', destaque: 'avaliacao' },
  { data: '14/04/2027', atividade: '6. Informática clínica', cargaHoraria: '40 h', observacoes: '' },
  { data: '12/05/2027', atividade: '7. Repositórios digitais e ciência de dados em saúde', cargaHoraria: '40 h', observacoes: '' },
  { data: '09/06/2027', atividade: '8. Interoperabilidade e padrões em informática em saúde', cargaHoraria: '40 h', observacoes: '' },
  { data: '07/07/2027 a 27/07/2027', atividade: 'Recesso', cargaHoraria: '—', observacoes: 'Sem atividades acadêmicas previstas no calendário', destaque: 'recesso' },
  { data: '28/07/2027', atividade: '9. Imagens médicas e sinais biológicos', cargaHoraria: '40 h', observacoes: '' },
  { data: '25/08/2027', atividade: '10. Trabalho de conclusão de curso (TCC) – módulo 2', cargaHoraria: '30 h', observacoes: '' },
  { data: '15/09/2027', atividade: 'Provas de recuperação do semestre', cargaHoraria: '—', observacoes: '', destaque: 'avaliacao' },
  { data: '25/09/2027', atividade: 'Encontro com alunos – atividades', cargaHoraria: '—', observacoes: 'EP2', destaque: 'encontro' },
  { data: '29/09/2027', atividade: '11. Telemedicina e telessaúde', cargaHoraria: '40 h', observacoes: '' },
  { data: '27/10/2027', atividade: '12. Saúde digital e gestão em saúde', cargaHoraria: '40 h', observacoes: '' },
  { data: '24/11/2027', atividade: '13. Tecnologias educacionais em saúde', cargaHoraria: '40 h', observacoes: '' },
  { data: '22/12/2027 a 18/01/2028', atividade: 'Recesso', cargaHoraria: '—', observacoes: 'Sem atividades acadêmicas previstas no calendário', destaque: 'recesso' },
  { data: '19/01/2028', atividade: '14. Trabalho de conclusão de curso (TCC) – módulo 3', cargaHoraria: '40 h', observacoes: '' },
  { data: '19/02/2028', atividade: 'Encontro com alunos – prova final e TCC', cargaHoraria: '—', observacoes: 'EP3', destaque: 'encontro' },
  { data: '23/02/2028 a 15/03/2028', atividade: 'Período de recuperação', cargaHoraria: '—', observacoes: 'Datas semanais indicadas no calendário: 23/02, 01/03, 08/03 e 15/03', destaque: 'avaliacao' },
  { data: '25/03/2028', atividade: 'Encontro com alunos – recuperação da prova final e do TCC', cargaHoraria: '—', observacoes: 'EP4', destaque: 'encontro' },
  { data: '31/03/2028', atividade: 'Encerramento do curso e divulgação das notas finais', cargaHoraria: '—', observacoes: '' },
];

export function CronogramaModal() {
  const [isOpen, setIsOpen] = useState(false);

  const getRowStyle = (destaque?: ItemProgramacao['destaque']) => {
    switch (destaque) {
      case 'recesso':
        return 'bg-amber-50/70 text-amber-950';
      case 'encontro':
        return 'bg-emerald-50/70 text-emerald-950 font-medium';
      case 'avaliacao':
        return 'bg-rose-50/60 text-rose-950';
      default:
        return 'bg-white hover:bg-slate-50 text-slate-800';
    }
  };

  return (
    <>
      {/* Botão de acionamento */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        <Calendar className="h-4 w-4 flex justify-center" />
        Cronograma do Curso
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-programacao-title"
        >
          <div
            className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabeçalho */}
            <div className="flex items-start justify-between border-b border-slate-200 px-6 py-4 bg-slate-50">
              <div>
                <h2 id="modal-programacao-title" className="text-xl font-bold text-slate-900">
                  Programação
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  As datas das disciplinas correspondem à semana de início indicada no calendário acadêmico.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700"
                aria-label="Fechar programação"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Corpo com tabela rolável */}
            <div className="overflow-y-auto p-6">
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-700">
                      <th className="px-4 py-3 whitespace-nowrap">Data ou período</th>
                      <th className="px-4 py-3">Atividade</th>
                      <th className="px-4 py-3 whitespace-nowrap">Carga horária</th>
                      <th className="px-4 py-3">Observações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {PROGRAMACAO_DATA.map((item, index) => (
                      <tr key={index} className={`transition-colors ${getRowStyle(item.destaque)}`}>
                        <td className="px-4 py-3 font-mono text-xs whitespace-nowrap font-medium">
                          {item.data}
                        </td>
                        <td className="px-4 py-3">{item.atividade}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                          {item.cargaHoraria !== '—' ? (
                            <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                              <Clock className="h-3 w-3 text-slate-500" />
                              {item.cargaHoraria}
                            </span>
                          ) : (
                            '—'
                          )}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {item.observacoes && (
                            <span className="inline-flex items-center gap-1.5">
                              {item.observacoes.startsWith('EP') ? (
                                <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                                  {item.observacoes}
                                </span>
                              ) : (
                                <>
                                  <Info className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                                  <span>{item.observacoes}</span>
                                </>
                              )}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Rodapé */}
            <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-3 text-xs text-slate-500">
              <span>Total: 14 módulos • 4 Encontros Presenciais (EP1–EP4)</span>
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