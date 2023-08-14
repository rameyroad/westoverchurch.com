import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header.component";

import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Westover Church",
    description: "Westover Church is a non-denominational Church in Greensboro, North Carolina that strives to develop Maturing Followers of Jesus Christ.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Head>
                <link rel="apple-touch-icon-precomposed" href="https://www.westoverchurch.com/views/site/images/ipad_icon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
            </Head>
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
