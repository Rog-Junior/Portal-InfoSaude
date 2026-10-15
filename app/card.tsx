import { ReactNode } from "react";

interface CardProps{
    typeAviso: String
    title: String;
    tag?: String;
    data: String;
    content: ReactNode // Espera conteúdo JSX (textos com <strong>, ícones, outros elementos)
}

export default function Card({typeAviso, title , tag, data, content} :CardProps){
    return (
        <article className="w-full overflow-hidden rounded-r-2xl rounded-l-md border border-y-slate-200 border-r-slate-200 border-l-4 border-l-blue-600 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
            <span className="uppercase inline-flex items-center rounded-full bg-[rgb(157,169,207)] px-3 py-1 text-xs font-semibold text-slate-900">
                {typeAviso}
            </span>

            <h2 className="mt-3 text-xl font-bold tracking-tight text-slate-900">
                {title}
            </h2>

            <div className="mt-1 text-xs font-medium text-slate-500">
                {data}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {content}
            </p>
        </article>
    );
}
