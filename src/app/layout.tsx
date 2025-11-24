import type {Metadata} from "next";
import {Inter, Manrope} from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const arrayFont = localFont({
    src: [
        {path: './fonts/Array/Array-Regular.woff2', weight: '400', style: "normal"},
        {path: './fonts/Array/Array-Bold.woff2', weight: '700', style: "normal"},
        {path: './fonts/Array/Array-Semibold.woff2', weight: '600', style: "normal"},
        {path: './fonts/Array/Array-Wide.woff2', weight: '400', style: "normal"},
        {path: './fonts/Array/Array-BoldWide.woff2', weight: '700', style: "normal"},
        {path: './fonts/Array/Array-SemiboldWide.woff2', weight: '600', style: "normal"},
    ],
    variable: '--font-array',
    display: 'swap',
});

const inter = Inter({subsets: ["latin"]});

const manrope = Manrope({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Travis Friesen",
    description: "Travis Friesen's personal portfolio website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
