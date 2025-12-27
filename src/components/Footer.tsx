"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Instagram, Linkedin, Twitter, Facebook, MapPin, Phone, Mail, Code2 } from "lucide-react";

export default function Footer() {
    const t = useTranslations('Footer');
    const contactT = useTranslations('ContactPage.info');
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#162660] text-white pt-16 pb-8 relative overflow-hidden mt-0">
            {/* Soft Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/5 pb-12 mb-8">

                    {/* Brand Info */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-block group">
                            <span className="text-3xl font-black tracking-tighter group-hover:text-[#F59E0B] transition-colors">SANDR.</span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                            Endüstriyel mükemmeliyet ve mühendislik vizyonu ile geleceğin güvenli yapılarını inşa ediyoruz.
                        </p>
                        <div className="flex gap-3">
                            {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#F59E0B] transition-all transform hover:-translate-y-1">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div className="lg:col-span-3 lg:col-start-6">
                        <h4 className="text-white font-bold mb-6 flex items-center gap-3">
                            <span className="w-1 h-5 bg-[#F59E0B] rounded-full"></span>
                            Kurumsal
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/kurumsal" className="text-white/60 hover:text-white text-sm transition-colors block py-1">{t('links.corporate')}</Link></li>
                            <li><Link href="/uzmanlik-alanlarimiz" className="text-white/60 hover:text-white text-sm transition-colors block py-1">{t('links.expertise')}</Link></li>
                            <li><Link href="/projelerimiz" className="text-white/60 hover:text-white text-sm transition-colors block py-1">{t('links.projects')}</Link></li>
                            <li><Link href="/iletisim" className="text-white/60 hover:text-white text-sm transition-colors block py-1">{t('links.contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-4">
                        <h4 className="text-white font-bold mb-6 flex items-center gap-3">
                            <span className="w-1 h-5 bg-[#F59E0B] rounded-full"></span>
                            İletişim
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="text-[#F59E0B] mt-1 flex-shrink-0" />
                                <p className="text-white/70 text-sm leading-relaxed">{contactT('address.value')}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-[#F59E0B] flex-shrink-0" />
                                <p className="text-white/70 text-sm">{contactT('phone.value')}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-[#F59E0B] flex-shrink-0" />
                                <p className="text-white/70 text-sm">{contactT('email.value')}</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar - Simple & Static Development Credit */}
                <div className="flex flex-col items-center gap-6 pt-4 text-center">
                    <p className="text-sm text-white/80 uppercase tracking-widest font-bold">
                        &copy; {currentYear} Sandr Çelik Yapı &bull; {t('rights')}
                    </p>

                    <a
                        href="https://tayasoftware.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2.5 text-white/40 hover:text-white transition-all duration-300"
                    >
                        <Code2 size={14} className="text-[#F59E0B]/80 group-hover:text-[#F59E0B] transition-colors" />
                        <span className="font-mono text-xs tracking-wider">
                            Developed by <span className="font-bold text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">tayasoftware.dev</span>
                        </span>
                    </a>
                </div>

            </div>
        </footer>
    );
}
