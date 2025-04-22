import { Link } from 'react-router-dom'
// wa9ila chi 7aja hna mam9adach
// 7it f main page rah kaybano walakin f single page kaybano l9dam
function CarCard({ car }) {
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <img 
        src={car.image} 
        alt={car.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold">{car.name}</h3>
          <span className="bg-accent text-secondary px-2 py-1 rounded-full text-sm font-semibold">
            {car.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{car.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-primary font-bold">{car.price}€ <span className="text-gray-500 font-normal text-sm">/jour</span></p>
          <Link to={`/cars/${car.id}`} className="btn">
            Voir détails
          </Link>
        </div>
      </div>
    </div>
  )
} 

export default CarCard