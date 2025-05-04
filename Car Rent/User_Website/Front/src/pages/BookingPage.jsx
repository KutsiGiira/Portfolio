import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import cars from '../data/cars'

// rah khsrat lik had lpage wa9ila aykhsk t9ad ha lfetch dyal data 9ad wa7d endpoint li tjib car li reserviti
function BookingPage() {
  const { id } = useParams();
  let carReserved = "";
  const navigate = useNavigate();
  const car = cars.find(car => car.id === parseInt(id));
  const [formData, setFormData] = useState({
    start_date: '',
    end_date: '',
    fname: '',
    lname: '',
    email: '',
    phone: '',
    adresse: '',
    ville: '',
    code_postal: '',
    car_name: '',
    payement: '',
    permis_number: ''
    // agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!car) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Voiture non trouvée</h2>
        <p className="mb-8">La voiture que vous recherchez n'existe pas.</p>
        <Link to="/cars" className="btn">Retour à la liste des voitures</Link>
      </div>
    );
  }

  if (!car.available) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Voiture indisponible</h2>
        <p className="mb-8">Cette voiture n'est pas disponible à la location actuellement.</p>
        <Link to="/cars" className="btn">Voir d'autres voitures</Link>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.start_date) {
      newErrors.start_date = "La date de début est requise";
    }

    if (!formData.end_date) {
      newErrors.end_date = "La date de fin est requise";
    } else if (formData.start_date && new Date(formData.end_date) <= new Date(formData.start_date)) {
      newErrors.end_date = "La date de fin doit être après la date de début";
    }

    if (!formData.fname.trim()) {
      newErrors.fname = "Le prénom est requis";
    }

    if (!formData.lname.trim()) {
      newErrors.lname = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis";
    } else if (!/^\+?[0-9\s-]+$/.test(formData.phone)) {
      newErrors.phone = "Numéro de téléphone invalide";
    }

    if (!formData.permis_number.trim()) {
      newErrors.permis_number = "Le numéro de permis est requis";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "Vous devez accepter les conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const [single, setCar] = useState([]);
    useEffect(() => {
    (fetch('http://localhost:8080/cars/' + id)
    .then(res => res.json())
    .then(data => {setCar(data), console.log(data)}))
      .catch(err => console.error(err));}, []);

      const calculateTotal = () => {
        if (formData.start_date && formData.end_date) {
          const start_date = new Date(formData.start_date);
          const end_date = new Date(formData.end_date);
          if (end_date > start_date) {
            const days = Math.ceil((end_date - start_date) / (1000 * 60 * 60 * 24));
            console.log(days * single.price);
            return days * single.price;
          }
        }
        return 0;
      };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!single || !single.price){
      console.log("tsna");
      return;
    }
    if (validateForm())
       {
        const totalCounter = calculateTotal();
        const updatedFormData = {
          ...formData,
          car_name: single.name,
          payement: Number(totalCounter)
        };
      fetch('http://localhost:8080/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFormData),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setSubmitted(true);
          setFormData({
            start_date: '',
            end_date: '',
            fname: '',
            lname: '',
            email: '',
            phone: '',
            adresse: '',
            ville: '',
            code_postal: '',
            car_name: '',
            payement: '',
            permis_number: '',
            agreeTerms: false
          });
          navigate('/');
        })
        .catch(error => {
          console.error("Error submitting form:", error);
          alert("Une erreur s'est produite lors de la réservation.");
        });
    }
  };

 
  
  const total = calculateTotal();
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="mb-8">
          <Link to={`/cars/${single.id}`} className="text-primary hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Retour aux détails
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Réserver {single.name}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire de réservation */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Informations de réservation</h2>
              
              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="start_date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date de début *
                  </label>
                  <input
                    type="date"
                    id="start_date"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full border ${errors.start_date ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                  />
                  {errors.start_date && <p className="text-red-500 text-sm mt-1">{errors.start_date}</p>}
                </div>
                
                <div>
                  <label htmlFor="end_date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date de fin *
                  </label>
                  <input
                    type="date"
                    id="end_date"
                    name="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                    min={formData.start_date || new Date().toISOString().split('T')[0]}
                    className={`w-full border ${errors.end_date ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                  />
                  {errors.end_date && <p className="text-red-500 text-sm mt-1">{errors.end_date}</p>}
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mb-6">Informations personnelles</h2>
              
              {/* Nom et prénom */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="fname" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    className={`w-full border ${errors.fname ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                  />
                  {errors.fname && <p className="text-red-500 text-sm mt-1">{errors.fname}</p>}
                </div>
                
                <div>
                  <label htmlFor="lname" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    className={`w-full border ${errors.lname ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                  />
                  {errors.lname && <p className="text-red-500 text-sm mt-1">{errors.lname}</p>}
                </div>
              </div>
              
              {/* Email et téléphone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
              
              {/* Adresse */}
              <div className="mb-4">
                <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse
                </label>
                <input
                  type="text"
                  id="adresse"
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              
              {/* Ville et code postal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-1">
                    Ville
                  </label>
                  <input
                    type="text"
                    id="ville"
                    name="ville"
                    value={formData.ville}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                
                <div>
                  <label htmlFor="code_postal" className="block text-sm font-medium text-gray-700 mb-1">
                    Code postal
                  </label>
                  <input
                    type="text"
                    id="code_postal"
                    name="code_postal"
                    value={formData.code_postal}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>
              
              {/* Permis de conduire */}
              <div className="mb-6">
                <label htmlFor="permis_number" className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro de permis de conduire *
                </label>
                <input
                  type="text"
                  id="permis_number"
                  name="permis_number"
                  value={formData.permis_number}
                  onChange={handleChange}
                  className={`w-full border ${errors.permis_number ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
                />
                {errors.permis_number && <p className="text-red-500 text-sm mt-1">{errors.permis_number}</p>}
              </div>
              
              {/* Conditions */}
              <div className="mb-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    // checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-700">
                    J'accepte les <a href="#" className="text-primary hover:underline">conditions générales</a> et la <a href="#" className="text-primary hover:underline">politique de confidentialité</a> *
                  </label>
                </div>
                {errors.agreeTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>}
                <input type="text" value={total} />
              </div>
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
                  src={single.image} 
                  alt={single.name} 
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="font-bold">{single.name}</h3>
                  <p className="text-gray-600">{single.category}</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Prix par jour:</span>
                  <span>{single.price}€</span>
                </div>
                
                {formData.start_date && formData.end_date && new Date(formData.end_date) > new Date(formData.start_date) && (
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Nombre de jours:</span>
                    <span>{Math.ceil((new Date(formData.end_date) - new Date(formData.start_date)) / (1000 * 60 * 60 * 24))}</span>
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