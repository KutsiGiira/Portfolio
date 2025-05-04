import { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';

function CarsPage() {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    transmition: '',
    carburant: ''
  });

  useEffect(() => {
    fetch('http://localhost:8080/cars')
      .then(res => res.json())
      .then(data => {
        setCars(data);
        console.log(data);
      })
      .catch(err => console.error('Error fetching cars:', err));
  }, []);

  const categories = [...new Set(cars.map(car => car.categories))];
  const transmitions = [...new Set(cars.map(car => car.transmition))];
  const carburants = [...new Set(cars.map(car => car.carburant))];

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
      transmition: '',
      carburant: ''
    });
  };

  // Filter cars based on the selected filters
  const filteredCars = cars.filter(car => {
    if (filters.category && car.categories !== filters.category) return false;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (car.price < min || (max && car.price > max)) return false;
    }
    if (filters.transmition && car.transmition !== filters.transmition) return false;
    if (filters.carburant && car.carburant !== filters.carburant) return false;
    return true;
  });

  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Available Cars</h1>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-1">
                Price per day
              </label>
              <select
                id="priceRange"
                name="priceRange"
                value={filters.priceRange}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">All Prices</option>
                <option value="0-50">Less than 50€</option>
                <option value="50-80">50€ - 80€</option>
                <option value="80-1000">More than 80€</option>
              </select>
            </div>

            {/* Transmition */}
            <div>
              <label htmlFor="transmition" className="block text-sm font-medium text-gray-700 mb-1">
                Transmition
              </label>
              <select
                id="transmition"
                name="transmition"
                value={filters.transmition}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">All Transmitions</option>
                {transmitions.map(transmition => (
                  <option key={transmition} value={transmition}>{transmition}</option>
                ))}
              </select>
            </div>

            {/* Carburant */}
            <div>
              <label htmlFor="carburant" className="block text-sm font-medium text-gray-700 mb-1">
                Carburant
              </label>
              <select
                id="carburant"
                name="carburant"
                value={filters.carburant}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">All Carburants</option>
                {carburants.map(carburant => (
                  <option key={carburant} value={carburant}>{carburant}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Display filtered cars */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No cars match your criteria.</p>
            <button
              onClick={resetFilters}
              className="mt-4 btn"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CarsPage;
