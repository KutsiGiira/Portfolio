import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80')" 
        }}
      ></div>
      
      <div className="container-custom py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trouvez la voiture idéale pour votre prochain voyage
          </h1>
          <p className="text-xl mb-8">
            Large sélection de véhicules à des prix compétitifs. Réservation simple et rapide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/cars" className="btn bg-primary hover:bg-secondary text-center">
              Voir nos voitures
            </Link>
            <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-center">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero