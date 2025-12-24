"use client";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";

export default function Header() {
    const t = useTranslations('Header');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    if (pathname.includes('/maintenance')) return null;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const changeLanguage = (nextLocale: string) => {
        router.replace(pathname, { locale: nextLocale });
    };

    const navLinks = [
        { name: t('home'), href: "/" },
        { name: t('corporate'), href: "/kurumsal" },
        { name: t('expertise'), href: "/uzmanlik-alanlarimiz" },
        { name: t('projects'), href: "/projelerimiz" },
        { name: t('contact'), href: "/iletisim" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex justify-center ${scrolled ? "py-4" : "py-0"
                    }`}
            >
                <div
                    className={`relative flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${scrolled
                        ? "w-[90%] md:w-[85%] bg-[#F3F4F6]/90 backdrop-blur-xl rounded-full shadow-[0_8px_32px_rgba(22,38,96,0.08)] border border-white/20 pl-6 pr-4 py-3"
                        : "w-full bg-[#D6D6D6]/90 backdrop-blur-md border-b border-[#162660]/10 px-6 md:px-12 py-5"
                        }`}
                >
                    {/* Logo - Architectural Lockup */}
                    <Link href="/" className="flex items-center gap-2 group select-none">
                        <span className="font-black text-[#162660] text-2xl md:text-3xl tracking-tighter relative">
                            SANDR
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#F59E0B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        </span>
                        <div className="h-6 w-[2px] bg-[#162660]/10 rotate-[15deg] mx-1 group-hover:rotate-[30deg] transition-transform"></div>
                        <div className="flex flex-col justify-center">
                            <span className="text-[16px] font-bold text-[#162660]/80 leading-none tracking-widest uppercase">{t('steel')}</span>
                            <span className="text-[16px] font-bold text-[#F59E0B] leading-none tracking-widest uppercase">{t('structure')}</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center bg-[#162660]/[0.03] rounded-full px-2 py-1.5 border border-[#162660]/5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 text-sm font-semibold text-[#162660]/70 hover:text-[#162660] hover:bg-white rounded-full transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Action Area */}
                    <div className="flex items-center gap-4">
                        {/* Language Switcher */}
                        <div className="flex items-center gap-1 md:gap-2 mr-1">
                            <button
                                onClick={() => changeLanguage('tr')}
                                className={`text-xs font-bold transition-colors ${locale === 'tr' ? 'text-[#162660]' : 'text-[#162660]/40 hover:text-[#162660]/70'}`}
                            >
                                TR
                            </button>
                            <span className="text-[#162660]/20 text-xs">|</span>
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`text-xs font-bold transition-colors ${locale === 'en' ? 'text-[#162660]' : 'text-[#162660]/40 hover:text-[#162660]/70'}`}
                            >
                                EN
                            </button>
                        </div>

                        <Link
                            href="/iletisim"
                            className={`hidden md:flex items-center gap-2 bg-[#162660] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#24388a] transition-all hover:scale-105 active:scale-95 ${scrolled ? "shadow-none" : "shadow-xl shadow-[#162660]/20"
                                }`}
                        >
                            <span>{t('getQuote')}</span>
                            <ArrowRight size={14} />
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-[#162660] bg-white rounded-full shadow-sm"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Modern Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-[#f0f0f0] z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? "opacity-100 pointer-events-auto clip-circle-full" : "opacity-0 pointer-events-none clip-circle-0"
                    }`}
                style={{
                    clipPath: isMenuOpen ? "circle(150% at 100% 0%)" : "circle(0% at 100% 0%)"
                }}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-3xl font-black text-[#162660] tracking-tight hover:text-[#24388a] transition-colors"
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
