import Logo from '../../assets/logo.png';
import { useTranslation } from 'react-i18next';
import Hero from "../Hero/Hero";
import TopPlates from "../Body/TopPlates";
import Customers from "../Customers/Customers";
import Footer from "../footer/Footer";
function Nav(){
        const { t, i18n } = useTranslation();
      const changeLanguage = (lng: 'en' | 'fr' | 'ar') => {
        i18n.changeLanguage(lng);
        document.body.dir  = lng === 'ar'? 'rtl' : 'ltr';
      };
      
    const navbar: string[] = ['Menu', 'Events', 'Gallery', 'About', 'Contact'];
    const lang: {code: string, label: string}[] = [
        {code: 'en', label: 'EN'},
        {code: 'fr', label: 'FR'},
        {code: 'ar', label: 'AR'}
    ]
    return(
        <>
        <header className="bg-transparent mt-12 mb-4">
            <section
            className="
                flex flex-col sm:flex-row 
                items-center justify-evenly 
                gap-4 sm:gap-10 
                px-4 sm:px-10
            "
            id="bgNav"
            >
            {/* Logo */}
            <div className="flex justify-center items-center gap-2 hover:cursor-pointer">
                <img src={Logo} alt="logo" className="w-12 sm:w-16 h-auto" />
                <span className="font-semibold text-xl sm:text-2xl">restaurant</span>
            </div>

            {/* Navigation links */}
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
                {navbar.map((n, i) => (
                <li
                    key={i}
                    className="list-none hover:text-[#D96F32] text-gray-600 hover:cursor-pointer font-medium text-sm sm:text-base"
                >
                    {t(n)}
                </li>
                ))}
            </ul>

            {/* Actions: Button + Language */}
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-0">
                <button className="bg-[#D96F32] px-5 py-3 rounded-tl-xl rounded-br-xl text-white font-semibold hover:cursor-pointer text-sm sm:text-base">
                {t('BookTable')}
                </button>
                <select
                onChange={(e) => changeLanguage(e.target.value as 'en' | 'fr' | 'ar')}
                value={i18n.language}
                className="border border-black text-sm sm:text-base hover:cursor-pointer px-1 py-0.5 rounded"
                >
                {lang.map((l) => (
                    <option key={l.code} value={l.code}>
                    {l.label}
                    </option>
                ))}
                </select>
            </div>
            </section>
        </header>

        <Hero lng={i18n.language} />
        <TopPlates lng={i18n.language} />
        <Customers lng={i18n.language}/>
        <Footer lng={i18n.language}/>
        </>
    )
}
export default Nav;