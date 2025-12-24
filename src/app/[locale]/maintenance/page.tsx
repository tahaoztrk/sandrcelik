"use client";

import { motion } from "framer-motion";
import { Hammer, Mail, Phone, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function MaintenancePage() {
    const t = useTranslations('Maintenance');

    return (
        <div className="min-h-screen bg-[#162660] flex flex-col items-center justify-center relative overflow-hidden px-6">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F59E0B]/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#F59E0B]/5 blur-[120px] rounded-full animate-pulse delay-1000" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <main className="relative z-10 max-w-2xl w-full text-center">
                {/* Logo Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center justify-center gap-2 mb-12"
                >
                    <span className="font-black text-white text-4xl md:text-5xl tracking-tighter relative">
                        SANDR
                        <span className="absolute -top-1 -right-2 w-3 h-3 bg-[#F59E0B] rounded-full"></span>
                    </span>
                    <div className="h-10 w-[3px] bg-white/10 rotate-[15deg] mx-2"></div>
                    <div className="flex flex-col items-start text-left">
                        <span className="text-[20px] font-bold text-white/80 leading-none tracking-widest uppercase">STEEL</span>
                        <span className="text-[20px] font-bold text-[#F59E0B] leading-none tracking-widest uppercase">STRUCTURE</span>
                    </div>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-16 shadow-2xl"
                >
                    <div className="w-20 h-20 bg-[#F59E0B] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#F59E0B]/20 font-black">
                        <Hammer className="text-[#162660] w-10 h-10" />
                    </div>

                    <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        {t('title')}
                    </h1>

                    <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed mb-10">
                        {t('description')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-[#F59E0B]">
                                <Mail size={20} />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-white/40 font-bold uppercase tracking-wider">{t('email')}</p>
                                <p className="text-white font-bold">info@sandrcelik.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-[#F59E0B]">
                                <Phone size={20} />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-white/40 font-bold uppercase tracking-wider">{t('phone')}</p>
                                <p className="text-white font-bold">+90 (212) 671 20 20</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-12 flex items-center justify-center gap-2 text-white/40 font-bold text-sm tracking-widest uppercase"
                >
                    <Clock size={16} />
                    <span>{t('thanks')}</span>
                </motion.div>
            </main>
        </div>
    );
}
