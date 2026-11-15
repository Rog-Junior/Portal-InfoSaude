import { CronogramaModal } from "./cronograma"
import { DisciplinasModal } from "./disciplinas"

export default function QuickAcess(){

    return(
        <div className="w-full">
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h3 className="mb-4 text-base font-bold tracking-tight text-slate-900">
      Acesso Rápido
    </h3>

        <div className="mt-2 mb-4 h-0.5 w-full bg-blue-600 rounded-full" />

    <div className="flex flex-col gap-3">
      {/* Botão Moodle */}
      <a
        href="https://moodlelato.unifesp.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-16 w-full items-center justify-center rounded-lg bg-[rgb(26,49,77)] text-1xl font-semibold text-white transition-all duration-500 hover:brightness-75"
      >
        Acessar Ambiente de Aulas
      </a>

      {/* Botão WhatsApp */}
      <a
        href="https://chat.whatsapp.com/HmTjQcQctgl73iOcNLoOPN"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-16 w-full items-center justify-center rounded-lg bg-[rgb(38,161,14)] text-1xl font-semibold text-white transition-all duration-500 hover:brightness-75"
      >
        Grupo do WhatsApp dos Alunos
      </a>
      <CronogramaModal />
      <DisciplinasModal />
    </div>
  </div>
</div>
    )
}