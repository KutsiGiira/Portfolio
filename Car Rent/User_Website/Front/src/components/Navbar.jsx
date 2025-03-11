import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            AutoLoc
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
            </svg>
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-primary">Accueil</Link>
            <Link to="/cars" className="hover:text-primary">Nos Voitures</Link>
            <Link to="/about" className="hover:text-primary">À Propos</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3">
            <Link to="/" className="block hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link to="/cars" className="block hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Nos Voitures</Link>
            <Link to="/about" className="block hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>À Propos</Link>
            <Link to="/contact" className="block hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar