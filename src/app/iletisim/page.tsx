import { Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#F0F0F0] pt-32 pb-20 flex flex-col items-center justify-center text-center px-6">
            <div className="w-24 h-24 bg-[#162660]/10 rounded-full flex items-center justify-center mb-8">
                <Phone size={48} className="text-[#162660]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#162660] mb-4">İLETİŞİM</h1>
            <p className="text-[#162660]/60 max-w-md text-lg">
                Sayfa yapım aşamasındadır. İletişim bilgileri ve form yakında aktif olacaktır.
            </p>
        </main>
    );
}
