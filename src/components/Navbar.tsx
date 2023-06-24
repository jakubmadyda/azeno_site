import Image from "next/image";
import {useTranslations} from "use-intl";

function Navbar() {
    const t = useTranslations('Menu')

    return (
        <nav
            className="sticky top-0 z-50 flex justify-center-items gap-10 group bg-gray-800 bg-opacity-70 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <a href="#home"><Image alt="Azeno Company logo" src="/logo.png" width="50" height="63"/></a>
            <a href="#home">{t('home')}</a>
            <a href="#about">{t('about')}</a>
            <a href="#employees">{t('employees')}</a>
            <a href="#portfolio">{t('portfolio')}</a>
            <a href="#form">{t('contact')}</a>
        </nav>
    );
}

export default Navbar;