import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'; // Add useState and useEffect
import Hero from '../components/Hero'
import CarCard from '../components/CarCard'
import Features from '../components/Features';

function HomePage() {
  const [single, setCars] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/cars')
      .then(res => res.json()) 
      .then(data => setCars(data))
      .catch(err => console.error('Error fetching cars:', err));
  }, []);

  const featuredCars = single.slice(0, 3);
  
  return (
    <div>
      {/* hadi ma3ndha tachi 3ala9a b tomobilat */}
      <Hero />
      <Features /> 
      
      {/* Section voitures populaires */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Nos voitures populaires</h2>
            <Link to="/cars" className="text-primary hover:underline font-semibold">
              Voir toutes les voitures →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map(single => (
              <CarCard key={single.id} single={single} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Section témoignages */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Service impeccable ! La voiture était propre et en parfait état. Je recommande vivement cette agence."
              </p>
              <div className="font-semibold">Sophie Dupont</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Réservation facile et rapide. Personnel très accueillant. Je n'hésiterai pas à revenir pour ma prochaine location."
              </p>
              <div className="font-semibold">Thomas Martin</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Bon rapport qualité-prix. La voiture correspondait parfaitement à mes besoins. Seul bémol, un peu d'attente lors de la prise en charge."
              </p>
              <div className="font-semibold">Julie Leroy</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à réserver votre voiture ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez notre sélection de véhicules et trouvez celui qui correspond à vos besoins.
          </p>
          <Link to="/cars" className="btn bg-white text-primary hover:bg-gray-100">
            Réserver maintenant
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage