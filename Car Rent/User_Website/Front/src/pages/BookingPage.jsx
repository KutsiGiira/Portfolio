import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import cars from '../data/cars'

function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find(car => car.id === parseInt(id));
  
  const [formData, setFormData] = useState({
    // startDate: '',
    // endDate: '',
    firstName: '',
    lastName: ''
    // email: '',
    // phone: '',
    // address: '',
    // city: '',
    // zipCode: '',
    // driverLicense: '',
    // agreeTerms: false
  });
  
  const [errors, setErrors] = useState({});
  
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
  
  if (!car.available) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Voiture indisponible</h2>
        <p className="mb-8">Cette voiture n'est pas disponible à la location actuellement.</p>
        <Link to="/cars" className="btn">
          Voir d'autres voitures
        </Link>
      </div>
    );
  }
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Effacer l'erreur lorsque l'utilisateur modifie le champ
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Validation des dates
    if (!formData.startDate) {
      newErrors.startDate = "La date de début est requise";
    }
    
    if (!formData.endDate) {
      newErrors.endDate = "La date de fin est requise";
    } else if (formData.startDate && new Date(formData.endDate) <= new Date(formData.startDate)) {
      newErrors.endDate = "La date de fin doit être après la date de début";
    }
    
    // Validation des informations personnelles
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis";
    }
    
    if (!formData.driverLicense.trim()) {
      newErrors.driverLicense = "Le numéro de permis est requis";
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "Vous devez accepter les conditions";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const carInfo = {

      
    }

    if (validateForm()) {
      // Calculer le nombre de jours
      const startDate = new Date(formData.startDate);
      const endDate = new Date(formData.endDate);
      const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      
      // Simuler une réservation réussie
      alert(`Réservation confirmée pour ${car.name} du ${formData.startDate} au ${formData.endDate}. Montant total: ${days * car.price}€`);
      navigate('/');
    }
  };
  
  // Calculer le prix total si les dates sont valides
  const calculateTotal = () => {
    if (formData.startDate && formData.endDate) {
      const startDate = new Date(formData.startDate);
      const endDate = new Date(formData.endDate);
      
      if (endDate > startDate) {
        const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        return days * car.price;
      }
    }
    return 0;
  };
  
  const total = calculateTotal();
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="mb-8">
          <Link to={`/cars/${car.id}`} className="text-primary hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Retour aux détails
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Réserver {car.name}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire de réservation */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Informations de réservation</h2>
              
              {/* Dates */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Date de début *
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full border ${errors.startDate ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                  />
                  {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
                </div>
                
                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Date de fin *
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    min={formData.startDate || new Date().toISOString().split('T')[0]}
                    className={`w-full border ${errors.endDate ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                  />
                  {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
                </div>
              </div> */}
              
              <h2 className="text-xl font-semibold mb-6">Informations personnelles</h2>
              
              {/* Nom et prénom */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>
              
              {/* Email et téléphone */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div> */}
              
              {/* Adresse */}
              {/* <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div> */}
              
              {/* Ville et code postal */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    Ville
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Code postal
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div> */}
              
              {/* Permis de conduire */}
              {/* <div className="mb-6">
                <label htmlFor="driverLicense" className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro de permis de conduire *
                </label>
                <input
                  type="text"
                  id="driverLicense"
                  name="driverLicense"
                  value={formData.driverLicense}
                  onChange={handleChange}
                  className={`w-full border ${errors.driverLicense ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                />
                {errors.driverLicense && <p className="text-red-500 text-sm mt-1">{errors.driverLicense}</p>}
              </div> */}
              
              {/* Conditions */}
              {/* <div className="mb-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-700">
                    J'accepte les <a href="#" className="text-primary hover:underline">conditions générales</a> et la <a href="#" className="text-primary hover:underline">politique de confidentialité</a> *
                  </label>
                </div>
                {errors.agreeTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>}
              </div> */}
              
              <button type="submit" className="btn w-full">
                Confirmer la réservation
              </button>
            </form>
          </div>
          
          {/* Résumé de la réservation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-6">Résumé de la réservation</h2>
              
              <div className="flex items-center mb-6">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="font-bold">{car.name}</h3>
                  <p className="text-gray-600">{car.category}</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Prix par jour:</span>
                  <span>{car.price}€</span>
                </div>
                
                {formData.startDate && formData.endDate && new Date(formData.endDate) > new Date(formData.startDate) && (
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Nombre de jours:</span>
                    <span>{Math.ceil((new Date(formData.endDate) - new Date(formData.startDate)) / (1000 * 60 * 60 * 24))}</span>
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>{total}€</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <h3 className="font-semibold mb-2">Inclus dans la location:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Assurance tous risques
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Assistance 24/7
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Kilométrage illimité
                  </li>
                </ul>
              </div>
              
              <p className="text-sm text-gray-500">
                * Les champs marqués d'un astérisque sont obligatoires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPage