"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const expertiseAreas = [
    {
        id: "01",
        title: "Endüstriyel Yapılar",
        subtitle: "FABRİKA & HANGAR",
        description: "Sanayi dünyasının ihtiyaç duyduğu devasa hacimler. Kolonsuz geniş açıklıklar, yüksek tavanlar ve ağır yük kapasiteli zeminler. Üretiminizin kesintisiz devam etmesi için en güçlü çelik iskeleti kuruyoruz.",
        features: ["Ağır Çelik Konstrüksiyon", "Vinç Yolu Entegrasyonu", "Yangına Dayanıklı Kaplama"],
        image: "/factory-hangar.png",
        color: "bg-[#162660]",
        textColor: "text-white",
        tickColor: "text-white"
    },
    {
        id: "02",
        title: "Lüks Yaşam Alanları",
        subtitle: "ÇELİK VİLLA & KONUT",
        description: "Betonun soğukluğundan uzak, doğayla barışık ve depreme karşı yenilmez. Modern mimarinin en ince detaylarını hafif çelik teknolojisiyle işliyor, size sadece anahtarı çevirmeyi bırakıyoruz.",
        features: ["A++ Enerji Verimliliği", "Hızlı Kurulum (90 Gün)", "Modern & Minimalist Tasarım"],
        image: "/steel-villa.png",
        color: "bg-[#F3F4F6]",
        textColor: "text-[#162660]",
        tickColor: "text-[#162660]"
    },
    {
        id: "03",
        title: "Konstrüksiyon Sistemleri",
        subtitle: "ÇELİK ÇATI & DETAY",
        description: "Bir yapının imzası çatısıdır. Sızdırmazlık garantili kenet sistemler, estetik uzay kafesler ve geniş sundurmalar. Mevcut binanızı koruyor ve değer katıyoruz.",
        features: ["Titanyum Çinko Kaplama", "Eksiz Oluk Sistemleri", "Ömür Boyu Sızdırmazlık"],
        image: "/steel-roof.png",
        color: "bg-[#2A3441]",
        textColor: "text-white",
        tickColor: "text-white"
    },
    {
        id: "04",
        title: "Mühendislik & Proje",
        subtitle: "ANALİZ & MODELLEME",
        description: "Sahaya inmeden önce her şeyi sanal ortamda inşa ediyoruz. SAP2000 ve Tekla Structures ile milimetrik statik analizler yapıyor, sürprizlere yer bırakmıyoruz.",
        features: ["3D BIM Modelleme", "Eurocode Standartları", "Ruhsat ve Uygulama Projeleri"],
        image: "/hero-bg.png",
        color: "bg-[#EAEAEA]",
        textColor: "text-[#162660]",
        tickColor: "text-[#162660]"
    }
];

export default function ExpertisePage() {
    return (
        <main className="min-h-screen bg-white">

            {/* 1. HERO SECTION - MODERN ARCHITECTURAL */}
            <section className="pt-40 pb-16 px-6 bg-white">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl text-[#162660] tracking-tight mb-6 relative inline-block">
                        <span className="font-sans font-black tracking-tighter">UZMANLIK</span>{" "}
                        <span className="font-sans font-light tracking-widest text-[#162660]/80">ALANLARIMIZ</span>
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent mt-4 opacity-50"></div>
                    </h1>
                    <p className="max-w-xl mx-auto text-[#162660]/70 text-sm md:text-base font-medium leading-relaxed mt-6">
                        Yenilikçi mühendislik çözümleriyle yapılarınıza güç ve estetik katıyoruz.
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
                                        Detaylı Bilgi <ArrowRight size={16} />
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
