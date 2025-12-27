"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight, Building2, Trophy } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CorporateTeaser() {
    const t = useTranslations('CorporateTeaser');

    return (
        <section className="py-24 md:py-32 bg-[#F9FAFB] overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#162660]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Area */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/hero-luxury.png"
                                alt="Sandr Corporate"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#162660]/40 to-transparent" />
                        </div>

                        {/* Floating Badge */}


                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -left-10 w-full h-full border-2 border-[#162660]/5 rounded-[3rem] -z-10" />
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                            <span className="text-[#162660]/60 font-bold tracking-[0.2em] text-xs uppercase">
                                {t('subtitle')}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#162660] mb-8 leading-[1.1]">
                            {t('title')}
                        </h2>

                        <p className="text-lg text-[#162660]/70 leading-relaxed mb-10 max-w-xl">
                            {t('description')}
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-8 mb-10">

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#162660]/5 flex items-center justify-center text-[#162660]">
                                    <Building2 size={24} />
                                </div>
                                <div>
                                    <span className="block text-2xl font-bold text-[#162660]">100%</span>
                                    <span className="text-sm text-[#162660]/50 font-medium">Global Standard</span>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/kurumsal"
                            className="group inline-flex items-center gap-3 bg-[#162660] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-[#F59E0B] hover:shadow-lg hover:shadow-[#F59E0B]/20"
                        >
                            {t('button')}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
