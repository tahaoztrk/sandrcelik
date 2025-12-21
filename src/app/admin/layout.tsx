
import { Inter } from 'next/font/google';
import "@/app/globals.css";
import AuthGuard from "./AuthGuard";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Sandr Admin Panel',
    description: 'Admin command center',
};

export default function AdminRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthGuard>
                    {children}
                </AuthGuard>
            </body>
        </html>
    );
}
