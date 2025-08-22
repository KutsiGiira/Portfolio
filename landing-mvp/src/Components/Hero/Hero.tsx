/* eslint-disable @typescript-eslint/no-unused-vars */
import fb from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import x from '../../assets/twitter.png';
import bgHero from '../../assets/bgHero.jpg'
import { t } from 'i18next';
function Hero(_props: {lng: string; }){
return (
  <main className="flex flex-col lg:flex-row w-full overflow-x-hidden mx-auto text-center h-[650px] bg-cover bg-center" style={{ backgroundImage: `url(${bgHero})` }}>
    <section className="flex flex-col gap-6 px-6 sm:px-10 lg:px-16 py-20 w-full h-fit my-auto">
      <div>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl break-words text-center text-white">
          {t('HeroSTitle')}
        </p>
        <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light mt-4 text-center text-white">
          {t('HeroTitle')}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 flex-wrap mt-4">
        <button className="bg-[#D96F32] px-4 py-2 rounded-tl-xl rounded-br-xl text-white font-semibold hover:cursor-pointer">
          {t('BookTable')}
        </button>
        <button className="bg-[#0C0950] px-4 py-2 rounded-tl-xl rounded-br-xl text-white font-semibold hover:cursor-pointer">
          {t('MenuButton')}
        </button>
        <hr className='bg-red-800'></hr>
      </div>

      {/* Social Icons */}
      <div className="mt-4">
        <ul className="flex gap-3">
        <img src={fb} alt="facebook" className="w-8 h-8 invert" />
          <li><img src={insta} alt="instagram" className="w-8 h-8 invert" /></li>
          <li><img src={x} alt="twitter" className="w-8 h-8 invert" /></li>
        </ul>
      </div>
    </section>
  </main>
)
}
export default Hero