import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import "./globals.css";
import {Footer} from "@/components/Footer";

const manrope = Manrope({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Travis Friesen",
    description: "Travis Friesen's personal portfolio website",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${manrope.className} h-full`}>
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
