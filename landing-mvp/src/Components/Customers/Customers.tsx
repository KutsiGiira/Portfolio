/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { t } from 'i18next';

function Customers(_props: {lng: string}){
const Cus: { id: number; comment: string; name: string }[] = [
  {
    id: 1,
    comment: t('JhonCommnt'),
    name: "John Doe",
  },
  {
    id: 2,
    comment:  t('FatimaCommnt'),
    name: "Fatima Zahra",
  },
  {
    id: 3,
    comment:  t('AliCommnt'),
    name: "Ali Ahmed",
  },
  {
    id: 4,
    comment: t('SaraCommnt'),
    name: "Sara Mounir",
  },
];
return (
  <section className="flex flex-col gap-8 mb-10 px-4">
    <h1 className="text-center font-bold text-3xl">{t('Happy')}</h1>

    <p className="leading-relaxed text-center font-semibold text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste quae adipisci ab molestias architecto officia,
      earum aut ducimus magni nulla voluptatem necessitatibus hic deleniti. Nam cum tenetur est possimus.
    </p>

    <div className="flex flex-col justify-center w-full">
      <Slide transitionDuration={400} indicators={true}>
        {Cus.map((c, index) => (
          <div
            key={index}
            className="bg-white text-center w-full sm:w-[80%] lg:w-[60%] mx-auto p-6 sm:p-10 mt-2 border border-gray-200 rounded shadow-sm"
          >
            <p className="text-sm sm:text-base mb-4 italic">"{c.comment}"</p>
            <p className="font-semibold text-base">{c.name}</p>
          </div>
        ))}
      </Slide>
    </div>
  </section>
);

}
export default Customers;