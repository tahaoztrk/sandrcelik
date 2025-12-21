"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs, updateDoc, doc, Timestamp, where, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Trash2, Calendar, Mail, Phone, MessageSquare, Search } from "lucide-react";

interface ContactMessage {
    id: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    createdAt: Timestamp;
}

export default function AdminDashboard() {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const q = query(collection(db, "contacts"), where("deletedAt", "==", null), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as ContactMessage[];
            setMessages(data);
        } catch (error) {
            console.error("Error fetching messages:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (confirm("Bu mesajı silmek istediğinize emin misiniz?")) {
            try {
                await updateDoc(doc(db, "contacts", id), {
                    deletedAt: serverTimestamp()
                });
                setMessages(messages.filter((msg) => msg.id !== id));
            } catch (error) {
                console.error("Error deleting message:", error);
                alert("Silme işlemi başarısız.");
            }
        }
    };

    const formatDate = (timestamp: Timestamp) => {
        if (!timestamp) return "-";
        return new Date(timestamp.seconds * 1000).toLocaleString('tr-TR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const filteredMessages = messages.filter(msg =>
        msg.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.subject?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return null; // Loading handled by layout

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-[#162660]">Gelen Kutusu</h2>
                    <p className="text-gray-500 font-medium">Web sitesinden gelen iletişim formları.</p>
                </div>

                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Mesajlarda ara..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#162660]/20 min-w-[300px] shadow-sm"
                    />
                </div>
            </div>

            {/* Messages Grid */}
            <div className="grid grid-cols-1 gap-6">
                {filteredMessages.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                            <MessageSquare size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-[#162660]">Mesaj Bulunamadı</h3>
                        <p className="text-gray-400">Henüz hiç mesaj almadınız veya arama kriterlerine uygun sonuç yok.</p>
                    </div>
                ) : (
                    filteredMessages.map((msg) => (
                        <div key={msg.id} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#162660]/5 rounded-full flex items-center justify-center text-[#162660] font-bold text-lg">
                                        {msg.name?.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-[#162660]">{msg.name}</h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                                            <span className="flex items-center gap-1"><Mail size={14} /> {msg.email}</span>
                                            {msg.phone && <span className="flex items-center gap-1"><Phone size={14} /> {msg.phone}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                                    <span className="flex items-center gap-2 text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full uppercase tracking-wide">
                                        <Calendar size={12} />
                                        {formatDate(msg.createdAt)}
                                    </span>
                                    <button
                                        onClick={() => handleDelete(msg.id)}
                                        className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                                        title="Mesajı Sil"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {msg.subject && (
                                    <div className="inline-block px-3 py-1 bg-[#162660] text-white text-xs font-bold rounded-lg uppercase tracking-wider mb-2">
                                        {msg.subject === "project" ? "PROJE" : msg.subject === "other" ? "DİĞER" : "GENEL"}
                                    </div>
                                )}
                                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                                    {msg.message}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
