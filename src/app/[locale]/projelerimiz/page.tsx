"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Construction, ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
    const t = useTranslations('ProjectsPage');

    return (
        <main className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center px-6 relative overflow-hidden">

            {/* Background Abstract Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#162660]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            {/* Pattern Grid */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(#162660 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

            <div className="relative z-10 max-w-2xl text-center">

                {/* Icon Circle */}
                <div className="w-24 h-24 bg-white rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-xl shadow-[#162660]/5 border border-[#162660]/5 rotate-3 hover:rotate-6 transition-transform duration-500">
                    <Construction size={40} className="text-[#162660]" />
                </div>

                {/* Badge */}
                <div className="inline-block px-4 py-1.5 bg-[#F59E0B]/10 rounded-full mb-6">
                    <span className="text-[#F59E0B] text-xs font-bold tracking-[0.2em] uppercase">
                        {t('badge')}
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-serif text-[#162660] mb-6 leading-tight">
                    {t('heading')}
                </h1>

                <p className="text-lg text-[#162660]/60 leading-relaxed mb-10 font-light">
                    {t('subheading')}
                </p>

                {/* Progress Bar (Animation Only) */}
                <div className="w-full h-1.5 bg-[#162660]/5 rounded-full mb-12 overflow-hidden">
                    <div className="h-full bg-[#162660] w-2/3 rounded-full animate-pulse" />
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-3 bg-[#162660] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-[#F59E0B] hover:shadow-lg hover:shadow-[#F59E0B]/20 hover:-translate-y-1 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    {t('backHome')}
                </Link>

            </div>
        </main>
    );
}
