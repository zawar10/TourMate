import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

import Homepage from './components/Homepage';
import Destinations from './components/Destinations';
import TripDetail from './components/TripDetail';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

import Login from './components/Login';
import Signup from './components/Signup';

import UserPanel from './components/UserPanel';


const AppContent = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();

  const isAuthRoute = location.pathname === '/login' || location.pathname === '/signup';

  const isRoot = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {!isAuthRoute && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}

      <main className="grow">
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Homepage /> : <Navigate to="/login" replace />}
          />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<TripDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" replace /> : <Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/signup"
            element={isLoggedIn ? <Navigate to="/" replace /> : <Signup />}
          />

          <Route
            path="/userpanel"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <UserPanel />
              </PrivateRoute>
            }
          />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>
      </main>

      {!isAuthRoute && !isRoot && <Footer />}

    </div>
  );
}


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
};

export default App;