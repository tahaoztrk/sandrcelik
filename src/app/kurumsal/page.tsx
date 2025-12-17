import { Building2 } from "lucide-react";

export default function KurumsalPage() {
    return (
        <main className="min-h-screen bg-[#F0F0F0] pt-32 pb-20 flex flex-col items-center justify-center text-center px-6">
            <div className="w-24 h-24 bg-[#162660]/10 rounded-full flex items-center justify-center mb-8">
                <Building2 size={48} className="text-[#162660]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#162660] mb-4">KURUMSAL</h1>
            <p className="text-[#162660]/60 max-w-md text-lg">
                Sayfa yapım aşamasındadır. Yakında şirket tarihçesi ve vizyonumuz burada yer alacaktır.
            </p>
        </main>
    );
}
