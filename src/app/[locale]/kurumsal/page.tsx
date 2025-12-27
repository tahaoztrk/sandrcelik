"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Shield, Award, Zap, Handshake } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function KurumsalPage() {
    const t = useTranslations('CorporatePage');
    const tHeader = useTranslations('Header');

    const values = [
        {
            icon: Award,
            title: t('values.quality'),
            description: t('values.qualityDesc')
        },
        {
            icon: Shield,
            title: t('values.safety'),
            description: t('values.safetyDesc')
        },
        {
            icon: Zap,
            title: t('values.innovation'),
            description: t('values.innovationDesc')
        },
        {
            icon: Handshake,
            title: t('values.trust'),
            description: t('values.trustDesc')
        }
    ];

    return (
        <main className="min-h-screen bg-white">

            {/* HERO SECTION - MINIMALIST ELITE */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-[#F9FAFB] overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        {/* Decorative Line */}
                        <div className="w-[1px] h-20 bg-[#162660]/20 mb-8"></div>

                        <span className="text-[#F59E0B] font-bold tracking-[0.3em] text-xs uppercase mb-6 drop-shadow-sm">
                            SANDR CORPORATE
                        </span>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#162660] mb-8 tracking-tight leading-[0.9] opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards">
                            {t('hero.title')}
                        </h1>

                        <p className="text-lg md:text-xl text-[#162660]/60 font-light max-w-xl leading-relaxed opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-forwards">
                            {t('hero.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Subtle Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-b from-[#162660]/5 to-transparent blur-3xl opacity-60" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-t from-[#F59E0B]/5 to-transparent blur-3xl opacity-60" />
                </div>
            </section>

            {/* WHO WE ARE SECTION */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: "url('/factory-hangar.png')" }}
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#F59E0B]/10 rounded-full blur-3xl" />
                            <div className="absolute top-10 -left-10 w-32 h-32 bg-[#162660]/5 rounded-full blur-2xl" />
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[#F59E0B] font-bold tracking-widest text-sm uppercase mb-4">
                                {t('about.title')}
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-[#162660] mb-8 leading-tight">
                                {t('about.heading')}
                            </h3>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>{t('about.description1')}</p>
                                <p>{t('about.description2')}</p>
                                <p>{t('about.description3')}</p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            {/* VISION & MISSION SECTION */}
            <section className="py-24 px-6 md:px-12 bg-[#162660] text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

                <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Vision */}
                    <div className="group">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="px-4 py-1 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase bg-white/5">
                                Discover
                            </div>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-[#F59E0B] transition-colors">
                            {t('visionMission.visionTitle')}
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed border-l-2 border-[#F59E0B] pl-6">
                            {t('visionMission.visionDesc')}
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="group">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="px-4 py-1 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase bg-white/5">
                                Commit
                            </div>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-[#F59E0B] transition-colors">
                            {t('visionMission.missionTitle')}
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed border-l-2 border-[#F59E0B] pl-6">
                            {t('visionMission.missionDesc')}
                        </p>
                    </div>
                </div>
            </section>

            {/* VALUES SECTION */}
            <section className="py-24 px-6 md:px-12 bg-[#F3F4F6]">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-[#162660] text-3xl md:text-4xl font-bold mb-6">
                            {t('values.title')}
                        </h2>
                        <div className="w-24 h-1 bg-[#F59E0B] mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow group border border-transparent hover:border-[#F59E0B]/20">
                                    <div className="w-14 h-14 bg-[#162660]/5 rounded-2xl flex items-center justify-center mb-6 text-[#162660] group-hover:bg-[#162660] group-hover:text-white transition-colors">
                                        <Icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#162660] mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 px-6 md:px-12 bg-white relative">
                <div className="container mx-auto">
                    <div className="bg-[#162660] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden isolate">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F59E0B] rounded-full blur-[120px] opacity-20 -z-10 translate-x-1/3 -translate-y-1/3" />

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                            {t('cta.title')}
                        </h2>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                            {t('cta.description')}
                        </p>
                        <Link
                            href="/iletisim"
                            className="inline-flex items-center gap-3 bg-white text-[#162660] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#F59E0B] hover:text-white transition-all transform hover:scale-105"
                        >
                            {tHeader('contact')} <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
