'use client'

import {useTranslations} from "use-intl";

function HomePage() {
    const t = useTranslations('Home');
    return <h1>{t('title')}</h1>;
}

export default HomePage;
