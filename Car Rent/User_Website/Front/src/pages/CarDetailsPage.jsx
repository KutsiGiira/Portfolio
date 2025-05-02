import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function CarDetailsPage() {
  const { id } = useParams();
  
  const [activeTab, setActiveTab] = useState('description');
  const [car, setSingle] = useState(null);
  const [cars, setCars] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:8080/cars/${id}`)
      .then(res => res.json())
      .then(data => {setSingle(data); console.log(data)})
      .catch(err => console.log(err));
    
    fetch('http://localhost:8080/cars')
      .then(res => res.json())
      .then(data => {setCars(data); console.log(data)})
      .catch(err => console.log(err));
  }, [id]);
  
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
        {/* Back to Cars Link */}
        <div className="mb-8">
          <Link to="/cars" className="text-primary hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Retour aux voitures
          </Link>
        </div>

        {/* Car Details */}
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
                      {car.categories}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${car.status  === "Available"? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {car.status}
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
                    <p className="font-semibold">{car.transmition}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Carburant</p>
                    <p className="font-semibold">{car.carburant}</p>
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
                    className={`py-2 px-4 font-medium ${activeTab === 'caracteristique' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('caracteristique')}
                  >
                    Caractéristiques
                  </button>
                </div>
                
                <div className="py-4">
                  {activeTab === 'description' ? (
                    <p className="text-gray-700">{car.description}</p>
                  ) : (
                    <p className="text-gray-700">{car.caracteristique}</p>
                  )}
                </div>
              </div>

              <Link 
                to={`/booking/${car.id}`} 
                className={`btn w-full text-center ${car.status === "Rented" ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={e => { if (car.status === "Rented")  e.preventDefault()}}
              >
                {car.status === "Available" ? 'Réserver maintenant' : 'Indisponible'}
              </Link>
            </div>
          </div>
        </div>

        {/* Voitures similaires */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Voitures similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cars
              .filter(c => c.id !== car.id && c.categories === car.categories)
              .slice(0, 10)
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

export default CarDetailsPage;
