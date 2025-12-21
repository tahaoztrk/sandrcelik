"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative min-h-screen w-full bg-[#D6D6D6] flex items-center overflow-hidden pt-20 md:pt-0">

            {/* 1. BACKGROUND IMAGE BLENDING (The "Right Side" Effect) */}
            <div className="absolute inset-y-0 right-0 w-full md:w-[70%] h-full z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center md:bg-right-top grayscale-[20%] contrast-[1.1]"
                    style={{ backgroundImage: "url('/steel-roof.png')" }}
                />
                {/* Gradient Mask to fade image into solid color towards left */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D6D6D6] via-[#D6D6D6]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#D6D6D6] via-transparent to-transparent md:hidden" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex items-center">

                <div className="w-full md:w-3/4 lg:w-1/2 pt-12 md:pt-0">

                    {/* Top Label Line */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-[2px] bg-[#162660]"></div>
                        <span className="text-[#162660] font-bold text-xs uppercase tracking-[0.25em]">
                            {t('industrialExcellence')}
                        </span>
                    </div>

                    {/* Refined Headline - More Corporate Size */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#162660] leading-[1.1] tracking-tight mb-8">
                        {t('titleLine1')} <br />
                        {t('titleLine2')}
                    </h1>

                    {/* Description Paragraph */}
                    <p className="text-[#333333] text-base md:text-lg font-medium leading-relaxed max-w-lg mb-10 border-l-2 border-[#162660]/20 pl-6">
                        {t('description1')}
                        <span className="block mt-4 opacity-70">
                            {t('description2')}
                        </span>
                    </p>

                    {/* Modernized Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        <Link
                            href="/projelerimiz"
                            className="group flex items-center justify-center md:justify-start gap-3 px-8 py-4 bg-[#162660] text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-[#24388a] transition-all hover:shadow-xl hover:shadow-[#162660]/20 hover:-translate-y-0.5 w-full md:w-auto text-center"
                        >
                            {t('viewProjects')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/iletisim"
                            className="flex items-center justify-center md:justify-start gap-3 px-8 py-4 bg-transparent border border-[#162660]/30 text-[#162660] text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-white hover:border-transparent hover:shadow-lg transition-all w-full md:w-auto text-center"
                        >
                            {t('contactUs')}
                        </Link>
                    </div>        </div>

                {/* RIGHT SIDE DECORATIVE VERTICAL TEXT - Fixed Layout & Mobile Support */}
                <div className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-16 md:gap-24 z-20 pointer-events-none mix-blend-multiply select-none">
                    <span className="text-[#162660]/30 text-[9px] md:text-[10px] uppercase font-bold tracking-[0.3em] md:tracking-[0.4em] [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                        {t('globalStandards')}
                    </span>
                    <span className="text-[#162660]/30 text-[9px] md:text-[10px] uppercase font-bold tracking-[0.3em] md:tracking-[0.4em] [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                        {t('advancedEngineering')}
                    </span>
                    <span className="text-[#162660]/30 text-[9px] md:text-[10px] uppercase font-bold tracking-[0.3em] md:tracking-[0.4em] [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                        {t('steelConstruction')}
                    </span>
                </div>
            </div>
        </section>
    );
}
