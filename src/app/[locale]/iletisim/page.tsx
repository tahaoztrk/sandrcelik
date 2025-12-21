"use client";

import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone, Send, Clock, CheckCircle } from "lucide-react";
import { useState, FormEvent } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ContactPage() {
    const t = useTranslations('ContactPage');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            createdAt: serverTimestamp(),
            deletedAt: null,
        };

        try {
            await addDoc(collection(db, "contacts"), data);
            setIsSubmitting(false);
            setIsSubmitted(true);
        } catch (error: any) {
            console.error("Error adding document: ", error);
            setIsSubmitting(false);
            alert(`Bir hata oluştu: ${error.message || "Bilinmeyen hata"}`);
        }
    };

    return (
        <main className="min-h-screen bg-[#F0F0F0]">

            {/* Header Section */}
            <section className="bg-[#162660] pt-40 pb-20 px-6 rounded-b-[3rem] relative overflow-hidden">
                {/* Abstract Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        {t('title')}
                    </h1>
                    <p className="text-white/70 max-w-xl mx-auto text-lg font-light leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-16 pb-24 relative z-20">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Side: Contact Info & Map */}
                    <div className="w-full lg:w-[40%] space-y-8">

                        {/* Info Cards */}
                        <div className="grid gap-4">
                            {/* Address */}
                            <div className="bg-white p-6 rounded-3xl shadow-lg border border-[#162660]/5 flex items-start gap-4 hover:transform hover:scale-[1.02] transition-all duration-300">
                                <div className="p-3 bg-[#162660]/5 rounded-2xl text-[#162660]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#162660] mb-1">{t('info.address.title')}</h3>
                                    <p className="text-[#162660]/60 text-sm font-medium">{t('info.address.value')}</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="bg-white p-6 rounded-3xl shadow-lg border border-[#162660]/5 flex items-start gap-4 hover:transform hover:scale-[1.02] transition-all duration-300">
                                <div className="p-3 bg-[#162660]/5 rounded-2xl text-[#162660]">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#162660] mb-1">{t('info.phone.title')}</h3>
                                    <p className="text-[#162660]/60 text-sm font-medium">{t('info.phone.value')}</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-white p-6 rounded-3xl shadow-lg border border-[#162660]/5 flex items-start gap-4 hover:transform hover:scale-[1.02] transition-all duration-300">
                                <div className="p-3 bg-[#162660]/5 rounded-2xl text-[#162660]">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#162660] mb-1">{t('info.email.title')}</h3>
                                    <p className="text-[#162660]/60 text-sm font-medium">{t('info.email.value')}</p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="bg-white p-6 rounded-3xl shadow-lg border border-[#162660]/5 flex items-start gap-4 hover:transform hover:scale-[1.02] transition-all duration-300">
                                <div className="p-3 bg-[#162660]/5 rounded-2xl text-[#162660]">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#162660] mb-1">{t('info.workingHours.title')}</h3>
                                    <p className="text-[#162660]/60 text-sm font-medium">{t('info.workingHours.value')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="w-full h-[300px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.8885060695!2d29.88151975!3d40.7656686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f66644bfb9d%3A0x82690ee7586b7eb9!2sKocaeli!5e0!3m2!1str!2str!4v1710927000000!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>

                    </div>

                    {/* Right Side: Modern Form */}
                    <div className="w-full lg:w-[60%]">
                        <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 relative overflow-hidden min-h-[600px] flex flex-col justify-center">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

                            {isSubmitted ? (
                                <div className="text-center animate-enter">
                                    <div className="w-24 h-24 bg-[#4ade80]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle size={48} className="text-[#4ade80]" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-[#162660] mb-4">
                                        {t('form.success')}
                                    </h3>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-[#162660]/60 hover:text-[#162660] font-bold text-sm uppercase tracking-widest mt-4"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10 animate-enter">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name */}
                                        <div className="group">
                                            <label className="block text-xs font-bold text-[#162660]/60 uppercase tracking-wider mb-2 group-focus-within:text-[#162660] transition-colors">{t('form.name')}</label>
                                            <input
                                                name="name"
                                                required
                                                type="text"
                                                className="w-full bg-[#F3F4F6] border-none rounded-xl px-6 py-4 text-[#162660] font-medium placeholder-[#162660]/30 focus:ring-2 focus:ring-[#162660]/20 focus:bg-white transition-all duration-300"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="group">
                                            <label className="block text-xs font-bold text-[#162660]/60 uppercase tracking-wider mb-2 group-focus-within:text-[#162660] transition-colors">{t('form.phone')}</label>
                                            <input
                                                name="phone"
                                                type="tel"
                                                className="w-full bg-[#F3F4F6] border-none rounded-xl px-6 py-4 text-[#162660] font-medium placeholder-[#162660]/30 focus:ring-2 focus:ring-[#162660]/20 focus:bg-white transition-all duration-300"
                                                placeholder="+90 555 000 0000"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Email */}
                                        <div className="group">
                                            <label className="block text-xs font-bold text-[#162660]/60 uppercase tracking-wider mb-2 group-focus-within:text-[#162660] transition-colors">{t('form.email')}</label>
                                            <input
                                                name="email"
                                                required
                                                type="email"
                                                className="w-full bg-[#F3F4F6] border-none rounded-xl px-6 py-4 text-[#162660] font-medium placeholder-[#162660]/30 focus:ring-2 focus:ring-[#162660]/20 focus:bg-white transition-all duration-300"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        {/* Subject */}
                                        <div className="group">
                                            <label className="block text-xs font-bold text-[#162660]/60 uppercase tracking-wider mb-2 group-focus-within:text-[#162660] transition-colors">{t('form.subject')}</label>
                                            <div className="relative">
                                                <select name="subject" defaultValue="" className="w-full bg-[#F3F4F6] border-none rounded-xl px-6 py-4 text-[#162660] font-medium appearance-none focus:ring-2 focus:ring-[#162660]/20 focus:bg-white transition-all duration-300 cursor-pointer">
                                                    <option value="" disabled>{t('form.selectSubject')}</option>
                                                    <option value="project">{t('form.subjects.project')}</option>
                                                    <option value="general">{t('form.subjects.general')}</option>
                                                    <option value="other">{t('form.subjects.other')}</option>
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#162660]/50">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="group">
                                        <label className="block text-xs font-bold text-[#162660]/60 uppercase tracking-wider mb-2 group-focus-within:text-[#162660] transition-colors">{t('form.message')}</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={5}
                                            className="w-full bg-[#F3F4F6] border-none rounded-xl px-6 py-4 text-[#162660] font-medium placeholder-[#162660]/30 focus:ring-2 focus:ring-[#162660]/20 focus:bg-white transition-all duration-300 resize-none"
                                            placeholder="..."
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        disabled={isSubmitting}
                                        className="group w-full bg-[#162660] text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-[#24388a] transition-all duration-300 hover:shadow-xl hover:shadow-[#162660]/20 hover:-translate-y-1 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        <span className="uppercase tracking-widest text-sm">
                                            {isSubmitting ? t('form.submitting') : t('form.submit')}
                                        </span>
                                        {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                    </button>

                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
