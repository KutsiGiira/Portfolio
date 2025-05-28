import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import {
  HomeIcon,
  UserGroupIcon,
  CalendarIcon,
  ChartBarIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';

function Sidebar() {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', icon: HomeIcon, path: '/' },
    { name: 'Voitures', icon: TruckIcon, path: '/cars' },
    { name: 'Réservation', icon: CalendarIcon, path: '/bookings' },
    { name: 'Clients', icon: UserGroupIcon, path: '/customers' },
    { name: 'Statistiques', icon: ChartBarIcon, path: '/reports' },
  ];

  return (
    <div className="w-64 bg-blue-900 text-white shadow-lg">
      <div className="p-4">
        <img 
          src={logo} 
          alt="logo" 
          className="w-full h-auto mb-4"
        />
      </div>
      <nav className="mt-4">
        {navigation.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-4 py-3 hover:bg-blue-800 ${
                isActive ? 'bg-blue-800' : ''
              }`}
            >
              <item.icon className="w-6 h-6 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;