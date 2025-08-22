/* eslint-disable @typescript-eslint/no-unused-vars */
import Logo from '../../assets/logo.png';
import fb from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import x from '../../assets/twitter.png';
import bgFooter from '../../assets/bgFooter.jpg';

import { t } from 'i18next';
function Footer(_props: {lng: string}) {
  const socials: string[] = ['Menu', 'Events', 'Gallery', 'About', 'Contact'];
  const dishes: string[] = ['Tacos', 'Pizza', 'Sandwich', 'Panini'];

  return (
    <footer>
      {/* Newsletter Section */}
      <div
        className="w-[90%] sm:w-[80%] lg:w-[60%] h-auto h-[280px] rounded-xl bg-cover bg-center relative mx-auto mb-10"
        style={{ backgroundImage: `url(${bgFooter})`}}
      >
        <div className="backdrop-blur-sm rounded-xl h-[100%] w-full flex flex-col items-center justify-center gap-4 p-6">
          <p className="text-white text-2xl font-semibold text-center">
            {t('promo')}
          </p>
          <input
            type="text"
            placeholder={t('email')}
            className="px-4 py-2 rounded-md w-full sm:w-[60%] md:w-[40%] outline-none bg-white"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md">
            {t('sub')}
          </button>
        </div>
      </div>

      {/* Info Section */}
      <section className="flex flex-col md:flex-row justify-center gap-y-10 md:gap-x-20 px-6 sm:px-10 pb-10">
        {/* Restaurant Info */}
        <section className="flex flex-col gap-3 max-w-sm">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" width={64} />
            <span className="text-xl font-bold">Restaurant</span>
          </div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem ea deleniti, totam minima.
          </p>
          <h1 className="font-bold mt-2">{t('openingHours')}</h1>
          <div className="flex flex-col gap-2 text-sm">
            <div>
          <p>{t('mondayFriday')}</p>
          <p>{t('hours')}</p>
            </div>
            <div>
          <p>{t('saturday')}</p>
          <p>{t('hours')}</p>
            </div>
            <div>
          <p>{t('sunday')}</p>
          <p>{t('closed')}</p>
            </div>
          </div>
        </section>

        {/* Navigation / Dishes / Social */}
        <section className="flex flex-col sm:flex-row gap-10 mt-5 text-sm">
          {/* Navigation */}
          <div>
            <ul className="space-y-2">
              <li className="font-bold">{t('navigation')}</li>
              {socials.map((s, index) => (
                <li key={index}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Dishes */}
          <div>
            <ul className="space-y-2">
              <li className="font-bold">{t('dishes')}</li>
              {dishes.map((s, index) => (
                <li key={index}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-3">
            <span className="font-bold">{t('followUs')}</span>
            <ul className="flex gap-3">
              <li>
                <img src={fb} alt="facebook" className="w-8 h-8" />
              </li>
              <li>
                <img src={insta} alt="instagram" className="w-8 h-8" />
              </li>
              <li>
                <img src={x} alt="twitter" className="w-8 h-8" />
              </li>
            </ul>
          </div>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
