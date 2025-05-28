import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AutoLoc</h3>
            <p className="text-gray-300">
              Votre partenaire de confiance pour la location de voitures de qualité à des prix compétitifs.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Accueil</Link></li>
              <li><Link to="/cars" className="text-gray-300 hover:text-white">Nos Voitures</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">À Propos</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p>123 Rue de la Location</p>
              <p>75000 Paris, France</p>
              <p className="mt-2">Email: contact@autoloc.fr</p>
              <p>Téléphone: +33 1 23 45 67 89</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {currentYear} AutoLoc. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer