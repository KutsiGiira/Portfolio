/* eslint-disable @typescript-eslint/no-unused-vars */
import sandwich from '../../assets/sandwich.png';
import pizza from '../../assets/pizza.png';
import tacos from '../../assets/tacos.png';
import shawarma from '../../assets/shawarma.png';
import dish from '../../assets/dish.png';
import { t } from 'i18next';
function TopPlates(_props:{lng: string}) {
  const plates: { id: number, img: string, name: string, desc: string, price: string }[] = [
    { id: 1, img: tacos, name: "Tacos", desc: t('tacosDesc'), price: "36dh" },
    { id: 2, img: pizza, name: "Pizza", desc: t('pizzaDesc'), price: "45dh" },
    { id: 3, img: shawarma, name: "Shawarma", desc: t('shawarmaDesc'), price: "35dh" },
    { id: 4, img: sandwich, name: "Sandwich", desc: t('sandwichDesc'), price: "22dh" },
  ];

return (
  <>
    {/* Special Dishes Section */}
    <section className="flex flex-col items-center gap-5 px-4 py-8">
      <span className="px-4 py-2 text-lg font-bold">{t('Special')}</span>
      <p className="p-2 max-w-xl text-center text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae dolorum consectetur amet,
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1300px]">
        {plates.map((p) => (
          <div
            key={p.id}
            className="flex flex-col w-full max-w-[340px] h-[420px] mx-auto items-center bg-white shadow-md rounded overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-[200px]">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-full font-bold text-sm">
                {p.price}
              </span>
            </div>

            <div className="bg-gray-100 flex-1 w-full text-center p-3">
              <p className="font-bold text-xl">{p.name}</p>
              <p className="text-sm text-gray-700 mt-1">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Welcome Section */}
    <section className="flex flex-col lg:flex-row items-center w-full max-w-[1300px] px-4 mx-auto gap-8 py-10">
      <div className="w-full lg:w-1/2">
        <img src={dish} alt="dish" className="w-full h-auto object-cover rounded-xl" />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5 text-center lg:text-left">
        <h2 className="font-semibold text-2xl">{t('Welcome')}</h2>
        <p className="leading-relaxed text-sm sm:text-base text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste quae adipisci ab molestias architecto officia,
          earum aut ducimus magni nulla voluptatem necessitatibus hic deleniti. Nam cum tenetur est possimus.
        </p>

        <div className="flex gap-3 flex-wrap justify-center lg:justify-start mt-4">
          <button className="bg-[#D96F32] px-5 py-2 rounded-tl-xl rounded-br-xl text-white font-semibold hover:scale-105 transition">
            {t('BookTable')}
          </button>
          <button className="bg-[#0C0950] px-5 py-2 rounded-tl-xl rounded-br-xl text-white font-semibold hover:scale-105 transition">
            {t('MenuButton')}
          </button>
        </div>
      </div>
    </section>
  </>
);
}

export default TopPlates