import type { Metadata, Viewport } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './styles/globals.css';

const Roboto = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'AndcoolSystems',
    icons: {
        icon: '/static/andcool.jpg',
        shortcut: '/static/andcool.jpg',
        apple: '/static/andcool.jpg'
    },
    openGraph: {
        title: 'AndcoolSystems',
        description: 'Человек, программист, электронщик',
        url: 'https://andcool.ru',
        siteName: 'andcool.ru',
        images: 'https://andcool.ru/static/andcool.jpg'
    },
    twitter: {
        card: 'summary'
    },
    other: {
        'theme-color': '#0b5000'
    }
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 0.9
};

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={Roboto.className}>{children}</body>
        </html>
    );
}
