import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import cars from '../data/cars'

function CarDetailsPage() {
  const { id } = useParams();
  const car = cars.find(car => car.id === parseInt(id));
  
  const [activeTab, setActiveTab] = useState('description');
  
  if (!car) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Voiture non trouvée</h2>
        <p className="mb-8">La voiture que vous recherchez n'existe pas.</p>
        <Link to="/cars" className="btn">
          Retour à la liste des voitures
        </Link>
      </div>
    );
  }
  
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="mb-8">
          <Link to="/cars" className="text-primary hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Retour aux voitures
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            
            <div className="md:w-1/2 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
                  <div className="flex items-center mb-4">
                    <span className="bg-accent text-secondary px-3 py-1 rounded-full text-sm font-semibold mr-2">
                      {car.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${car.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {car.available ? 'Disponible' : 'Indisponible'}
                    </span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {car.price}€ <span className="text-gray-500 font-normal text-sm">/jour</span>
                </div>
              </div>
              
              <div className="border-t border-b border-gray-200 py-4 my-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">Transmission</p>
                    <p className="font-semibold">{car.transmission}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Carburant</p>
                    <p className="font-semibold">{car.fuelType}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex border-b">
                  <button 
                    className={`py-2 px-4 font-medium ${activeTab === 'description' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('description')}
                  >
                    Description
                  </button>
                  <button 
                    className={`py-2 px-4 font-medium ${activeTab === 'features' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('features')}
                  >
                    Caractéristiques
                  </button>
                </div>
                
                <div className="py-4">
                  {activeTab === 'description' ? (
                    <p className="text-gray-700">{car.description}</p>
                  ) : (
                    <ul className="grid grid-cols-2 gap-2">
                      {car.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              
              <Link 
                to={`/booking/${car.id}`} 
                className={`btn w-full text-center ${!car.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={e => !car.available && e.preventDefault()}
              >
                {car.available ? 'Réserver maintenant' : 'Indisponible'}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Voitures similaires */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Voitures similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cars
              .filter(c => c.id !== car.id && c.category === car.category)
              .slice(0, 3)
              .map(similarCar => (
                <div key={similarCar.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={similarCar.image} 
                    alt={similarCar.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{similarCar.name}</h3>
                    <p className="text-primary font-bold mb-3">{similarCar.price}€ <span className="text-gray-500 font-normal text-sm">/jour</span></p>
                    <Link to={`/cars/${similarCar.id}`} className="btn w-full text-center">
                      Voir détails
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetailsPage