import type { Metadata, Viewport } from 'next';
import { Onest } from 'next/font/google';
import './styles/globals.css';

const onest = Onest({
    subsets: ['latin'],
    weight: ['400', '500', '600']
});

export const metadata: Metadata = {
    title: 'Портфолио • @AndcoolSystems',
    icons: {
        icon: '/static/andcool.jpg',
        shortcut: '/static/andcool.jpg',
        apple: '/static/andcool.jpg'
    },
    openGraph: {
        title: 'Портфолио • @AndcoolSystems',
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
    initialScale: 0.8
};

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
            <body className={onest.className}>{children}</body>
        </html>
    );
}
