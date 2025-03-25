import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import CarManagement from './components/CarManagement';
import BookingManagement from './components/BookingManagement';
import CustomerDatabase from './components/CustomerDatabase';
import Reports from './components/Reports';
import AddNewCar from './components/AddNewCar';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 overflow-auto bg-blue-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cars" element={<CarManagement />} />
            <Route path="/bookings" element={<BookingManagement />} />
            <Route path="/customers" element={<CustomerDatabase />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/form" element={<AddNewCar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;