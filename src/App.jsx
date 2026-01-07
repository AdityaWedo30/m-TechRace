import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './page/DashboardPage';
import MotoNavbar from './componen/Navbar'; // Import Navbar baru
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container bg-black min-vh-100">
        <MotoNavbar /> {/* Navbar muncul di atas */}
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;