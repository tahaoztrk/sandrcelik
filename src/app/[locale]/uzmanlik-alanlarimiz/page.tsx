"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ExpertisePage() {
    const t = useTranslations('ExpertisePage');

    const expertiseAreas = [
        {
            id: "01",
            title: t('items.industrial.title'),
            subtitle: t('items.industrial.subtitle'),
            description: t('items.industrial.description'),
            features: [t('items.industrial.features.0'), t('items.industrial.features.1'), t('items.industrial.features.2')],
            image: "/factory-hangar.png",
            color: "bg-[#162660]",
            textColor: "text-white",
            tickColor: "text-white"
        },
        {
            id: "02",
            title: t('items.luxury.title'),
            subtitle: t('items.luxury.subtitle'),
            description: t('items.luxury.description'),
            features: [t('items.luxury.features.0'), t('items.luxury.features.1'), t('items.luxury.features.2')],
            image: "/steel-villa.png",
            color: "bg-[#F3F4F6]",
            textColor: "text-[#162660]",
            tickColor: "text-[#162660]"
        },
        {
            id: "03",
            title: t('items.construction.title'),
            subtitle: t('items.construction.subtitle'),
            description: t('items.construction.description'),
            features: [t('items.construction.features.0'), t('items.construction.features.1'), t('items.construction.features.2')],
            image: "/steel-roof.png",
            color: "bg-[#2A3441]",
            textColor: "text-white",
            tickColor: "text-white"
        },
        {
            id: "04",
            title: t('items.engineering.title'),
            subtitle: t('items.engineering.subtitle'),
            description: t('items.engineering.description'),
            features: [t('items.engineering.features.0'), t('items.engineering.features.1'), t('items.engineering.features.2')],
            image: "/hero-bg.png",
            color: "bg-[#EAEAEA]",
            textColor: "text-[#162660]",
            tickColor: "text-[#162660]"
        }
    ];

    return (
        <main className="min-h-screen bg-white">

            {/* 1. HERO SECTION - MODERN ARCHITECTURAL */}
            <section className="pt-40 pb-16 px-6 bg-white">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl text-[#162660] tracking-tight mb-6 relative inline-block">
                        <span className="font-sans font-black tracking-tighter">{t('titlePrefix')}</span>{" "}
                        <span className="font-sans font-light tracking-widest text-[#162660]/80">{t('titleSuffix')}</span>
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent mt-4 opacity-50"></div>
                    </h1>
                    <p className="max-w-xl mx-auto text-[#162660]/70 text-sm md:text-base font-medium leading-relaxed mt-6">
                        {t('description')}
                    </p>
                </div>
            </section>

            {/* 2. CARD SECTION */}
            <section className="px-4 md:px-12 pb-32">
                <div className="container mx-auto space-y-16">
                    {expertiseAreas.map((area) => (
                        /* Added 'isolation-isolate' and 'transform' to fix overflow clipping issues on some browsers */
                        <div
                            key={area.id}
                            className={`w-full rounded-[3rem] overflow-hidden shadow-2xl border border-black/5 isolate transform ${area.color} ${area.textColor}`}
                        >
                            <div className="flex flex-col lg:flex-row h-full">

                                {/* Text Content */}
                                <div className="w-full lg:w-[45%] p-10 md:p-16 flex flex-col justify-center">
                                    {/* Large ID Number */}
                                    <span className="text-8xl font-serif opacity-30 mb-6 block leading-none">{area.id}</span>

                                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-[1.1]">
                                        {area.title}
                                    </h2>

                                    <p className="text-lg leading-relaxed mb-10 opacity-80 font-light">
                                        {area.description}
                                    </p>

                                    <ul className="space-y-4 mb-12">
                                        {area.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider opacity-90">
                                                <CheckCircle2 size={18} className={`${area.tickColor} opacity-70`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/iletisim"
                                        className={`self-start inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 border ${area.textColor === 'text-white'
                                            ? 'border-white/30 bg-white/10 hover:bg-white hover:text-[#162660]'
                                            : 'border-[#162660]/30 bg-[#162660]/5 hover:bg-[#162660] hover:text-white'
                                            }`}
                                    >
                                        {t('moreInfo')} <ArrowRight size={16} />
                                    </Link>
                                </div>

                                {/* Image Content */}
                                <div className="w-full lg:w-[55%] min-h-[400px] lg:min-h-[600px] relative">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url('${area.image}')` }}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40`} />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}
