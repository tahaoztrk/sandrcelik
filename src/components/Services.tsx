"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Services() {
    const t = useTranslations('Services');

    const services = [
        {
            title: t('items.villa.title'),
            description: t('items.villa.description'),
            image: "/steel-villa.png",
            link: "/uzmanlik-alanlarimiz#villa"
        },
        {
            title: t('items.hangar.title'),
            description: t('items.hangar.description'),
            image: "/factory-hangar.png",
            link: "/uzmanlik-alanlarimiz#fabrika"
        },
        {
            title: t('items.warehouse.title'),
            description: t('items.warehouse.description'),
            image: "/hero-royal.png",
            link: "/uzmanlik-alanlarimiz#depo"
        },
        {
            title: t('items.roof.title'),
            description: t('items.roof.description'),
            image: "/steel-roof.png",
            link: "/uzmanlik-alanlarimiz#cati"
        }
    ];

    return (
        <section className="py-24 bg-white" id="services">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="mb-20 max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-12 h-[1px] bg-[#162660]"></span>
                        <span className="text-[#162660] uppercase tracking-widest text-xs font-bold">{t('sectionTitle')}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#162660] leading-tight">
                        {t('headingLine1')} <br />
                        <span className="italic text-[#24388a]">{t('headingLine2')}</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-[#162660] z-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                                />
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#162660] via-[#162660]/20 to-transparent opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
                                    <div className="flex items-center justify-between mb-4 border-b border-white/20 pb-4">
                                        <span className="text-white/50 text-sm font-mono">0{index + 1}</span>
                                        <ArrowRight className="text-white/0 -translate-x-4 group-hover:text-white group-hover:translate-x-0 transition-all duration-300" size={20} />
                                    </div>
                                    <h3 className="text-2xl font-serif text-white mb-2">{service.title}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
