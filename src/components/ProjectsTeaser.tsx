"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight, Factory, Home, Building2, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ProjectsTeaser() {
    const t = useTranslations('ProjectsTeaser');

    const categories = [
        {
            id: 1,
            icon: Factory,
            title: t('project1'),
            desc: t('project1Desc'),
            color: "border-[#162660]/10",
            hoverBg: "bg-[#162660]",
            iconColor: "text-[#162660]"
        },
        {
            id: 2,
            icon: Home,
            title: t('project2'),
            desc: t('project2Desc'),
            color: "border-[#F59E0B]/20",
            hoverBg: "bg-[#F59E0B]",
            iconColor: "text-[#F59E0B]"
        },
        {
            id: 3,
            icon: Building2,
            title: t('project3'),
            desc: t('project3Desc'),
            color: "border-[#162660]/10",
            hoverBg: "bg-[#2A3441]",
            iconColor: "text-[#162660]"
        }
    ];

    return (
        <section className="py-24 bg-[#F9FAFB] relative overflow-hidden">
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#162660 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-12 h-[2px] bg-[#F59E0B]"></span>
                        <span className="text-[#162660] uppercase tracking-[0.3em] text-xs font-black">
                            {t('subtitle')}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#162660] leading-tight mb-6">
                        {t('title')}
                    </h2>
                    <p className="text-[#162660]/60 text-lg">
                        {t('description')}
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <Link
                                key={cat.id}
                                href="/projelerimiz"
                                className={`group relative bg-white border ${cat.color} p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between h-[380px] overflow-hidden`}
                            >
                                {/* Base Background Layer - Fixes flicker and dead zones */}
                                <div className={`absolute inset-0 ${cat.hoverBg} transition-all duration-500 opacity-0 group-hover:opacity-100 -z-0 pointer-events-none translate-y-full group-hover:translate-y-0`} />

                                {/* Content Layer - Forced to Top */}
                                <div className="relative z-20 pointer-events-none">
                                    <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors duration-500`}>
                                        <Icon size={32} className={`${cat.iconColor} group-hover:text-white transition-colors duration-500`} />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-[#162660] mb-4 group-hover:text-white transition-colors duration-500">
                                        {cat.title}
                                    </h3>
                                    <p className="text-[#162660]/60 group-hover:text-white/80 transition-colors duration-500 text-sm leading-relaxed">
                                        {cat.desc}
                                    </p>
                                </div>

                                <div className="relative z-20 pointer-events-none flex items-center gap-2 text-[#F59E0B] font-bold text-xs uppercase tracking-widest group-hover:text-white transition-colors duration-500 pt-8">
                                    {t('discoverSoon')}
                                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Bottom Action */}
                <div className="mt-16 text-center">
                    <Link
                        href="/projelerimiz"
                        className="inline-flex items-center gap-4 text-[#162660] font-bold hover:text-[#F59E0B] transition-colors group"
                    >
                        <span className="text-sm uppercase tracking-widest">{t('viewAll')}</span>
                        <div className="w-10 h-10 rounded-full border border-[#162660]/10 flex items-center justify-center group-hover:border-[#F59E0B] transition-all">
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>

            </div>
        </section>
    );
}
