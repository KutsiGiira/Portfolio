import { useState, useEffect } from 'react'
import CarCard from '../components/CarCard'

function CarsPage() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/cars') // make sure this matches your Spring Boot endpoint
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(err => console.error('Error fetching cars:', err));
  }, []);
  
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    transmission: '',
    fuelType: ''
  });
  
  // Extraire les catégories uniques
  const categories = [...new Set(cars.map(car => car.category))];
  const transmissions = [...new Set(cars.map(car => car.transmission))];
  const fuelTypes = [...new Set(cars.map(car => car.fuelType))];
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const resetFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      transmission: '',
      fuelType: ''
    });
  };
  
  // Filtrer les voitures
  const filteredCars = cars.filter(car => {
    // Filtre par catégorie
    if (filters.category && car.category !== filters.category) {
      return false;
    }
    
    // Filtre par gamme de prix
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (car.price < min || (max && car.price > max)) {
        return false;
      }
    }
    
    // Filtre par transmission
    if (filters.transmission && car.transmission !== filters.transmission) {
      return false;
    }
    
    // Filtre par type de carburant
    if (filters.fuelType && car.fuelType !== filters.fuelType) {
      return false;
    }
    
    return true;
  });
  
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Nos Voitures Disponibles</h1>
        
        {/* Filtres */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Catégorie */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie
              </label>
              <select
                id="category"
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Toutes les catégories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            {/* Prix */}
            <div>
              <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-1">
                Prix par jour
              </label>
              <select
                id="priceRange"
                name="priceRange"
                value={filters.priceRange}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Tous les prix</option>
                <option value="0-50">Moins de 50€</option>
                <option value="50-80">50€ - 80€</option>
                <option value="80-1000">Plus de 80€</option>
              </select>
            </div>
            
            {/* Transmission */}
            <div>
              <label htmlFor="transmission" className="block text-sm font-medium text-gray-700 mb-1">
                Transmission
              </label>
              <select
                id="transmission"
                name="transmission"
                value={filters.transmission}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Toutes les transmissions</option>
                {transmissions.map(transmission => (
                  <option key={transmission} value={transmission}>{transmission}</option>
                ))}
              </select>
            </div>
            
            {/* Type de carburant */}
            <div>
              <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700 mb-1">
                Carburant
              </label>
              <select
                id="fuelType"
                name="fuelType"
                value={filters.fuelType}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Tous les carburants</option>
                {fuelTypes.map(fuelType => (
                  <option key={fuelType} value={fuelType}>{fuelType}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <button 
              onClick={resetFilters}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Réinitialiser les filtres
            </button>
          </div>
        </div>
        
        {/* HNA KAYNIN TOMOBILAT */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Aucune voiture ne correspond à vos critères.</p>
            <button 
              onClick={resetFilters}
              className="mt-4 btn"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CarsPage