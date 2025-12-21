"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";
import { LayoutDashboard, LogOut } from "lucide-react";
import Link from "next/link";

export default function AuthGuard({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user && pathname !== "/admin/login") {
                router.push("/admin/login");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router, pathname]);

    const handleLogout = async () => {
        await signOut(auth);
        router.push("/admin/login");
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-[#162660]/10 border-t-[#162660] rounded-full animate-spin"></div>
            </div>
        );
    }

    // Login page layout (no sidebar)
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    // Dashboard layout (with sidebar)
    return (
        <div className="min-h-screen bg-[#F3F4F6] flex">
            {/* Sidebar */}
            <aside className="w-64 bg-[#162660] text-white fixed h-full hidden md:flex flex-col z-20 shadow-2xl">
                <div className="p-8">
                    <h1 className="text-2xl font-black tracking-tighter">SANDR<span className="text-[#4ade80]">.ADMIN</span></h1>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    <Link href="/admin" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${pathname === '/admin' ? 'bg-white/10 text-white shadow-inner' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
                        <LayoutDashboard size={20} />
                        Dashboard
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-300 hover:bg-red-500/10 w-full transition-colors font-medium"
                    >
                        <LogOut size={20} />
                        Çıkış Yap
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-8">
                {children}
            </main>
        </div>
    );
}
