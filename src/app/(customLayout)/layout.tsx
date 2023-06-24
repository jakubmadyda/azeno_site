import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {notFound} from "next/navigation";
import {NextIntlClientProvider} from "next-intl";

export function generateStaticParams() {
    return [{locale: 'en'}, {locale: 'pl'}];
}

async function Layout({children, params: {locale}}: { children: React.ReactNode }) {
    let messages;
    console.log(locale)
    try {
        // messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        // notFound();
    }

    return (
        <section>
                <Navbar/>
                {children}
                <Footer/>
        </section>
    )

}

export default Layout;