import React, {ReactNode} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {notFound} from "next/navigation";
import {createTranslator, NextIntlClientProvider} from 'next-intl';

type Props = {
    children: ReactNode;
    params: { locale: string };
};

async function getMessages(locale: string) {
    try {
        return (await import(`../../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
}

export async function generateStaticParams() {
    return ['en', 'pl'].map((locale) => ({locale}));
}

async function LocaleLayout({children, params: {locale}}: Props) {
    const messages = await getMessages(locale);

    return (
        <html className="h-full" lang={locale}>
        <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar/>
            {children}
            <Footer/>
        </NextIntlClientProvider>
        </body>
        </html>
    )
}

export default LocaleLayout;