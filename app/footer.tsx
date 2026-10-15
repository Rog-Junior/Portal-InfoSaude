import "./globals.css";

export default function Footer(){
    return(

        <footer className="w-full bg-[var(--bg2)] px-6 py-8 text-center text-sm text-slate-200">
            <p className="font-semibold text-[var(--color2)">
                &copy; 2026 Info.Saúde — Informática em Saúde
            </p>

            <p className="my-2 mx-auto max-w-3xl text-xs opacity-80 leading-relaxed text-slate-200">
                Este é um portal independente gerido por alunos e não possui qualquer vínculo oficial, institucional ou comercial com a universidade. As informações divulgadas são de caráter meramente informativo e colaborativo.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-200">
                <span>Desenvolvimento: Rogério Júnior</span>
                <span>|</span>
                <a
                href="mailto:rogerio.dev@outlook.com.br"
                className="text-blue-600 transition-colors hover:underline hover:text-blue-800"
                >
                E-mail
                </a>
                <span>|</span>
                <a href="https://www.linkedin.com/in/rog-junior/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 transition-colors hover:underline hover:text-blue-800"
                >
                LinkedIn
                </a>
            </div>
            </footer>                                                                      
        
    )

}