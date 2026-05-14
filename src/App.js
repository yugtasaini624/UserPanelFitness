// App.js
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Demo from './pages/Demo';

// User Panel
import UserLayout from './pages/UserLayout';
import UserDashboard from './pages/UserDashboard';
import HealthMetrics from './pages/HealthMetrics';
import RiskAnalysis from './pages/RiskAnalysis';
import FitnessPlan from './pages/FitnessPLanDashboard';
import DietPlan from "./pages/DietPlanDashboard";
import Settings from './pages/SettingsPage';
import Chatbot from './components/Chatbot';
import Profile from './pages/Profile';
import UpdatesPage from './pages/footerPages/UpdatePage';
import PrivacyPolicy from './pages/footerPages/PrivacyPolicy';
import TermsOfService from './pages/footerPages/TermsOfServices';
import FAQS from "./pages/footerPages/FAQS";

import NotFound from './pages/NotFound';

import { useEffect } from "react";

import useReveal from './components/UseGlobalReveal';

function App() {
  useReveal()
  const location = useLocation();
  const token = localStorage.getItem("token");

  const isUserPanel = location.pathname.startsWith("/user");

  useEffect(() => {
    const reveals = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {!isUserPanel && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/howitworks' element={<HowItWorks />} />
        <Route path='/features' element={<Features />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/demo' element={<Demo />} />
        <Route path='/updates' element={<UpdatesPage />} />
        <Route path='privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-services' element={<TermsOfService />} />
        <Route path='/faqs' element={<FAQS />} />

        {/* Protected User Panel */}
        <Route
          path="/user"
          element={token ? <UserLayout /> : <Navigate to="/login" />}
        >
          <Route index element={<UserDashboard />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="health" element={<HealthMetrics />} />
          <Route path="risk" element={<RiskAnalysis />} />
          <Route path="fitness" element={<FitnessPlan />} />
          <Route path="diet" element={<DietPlan />} />
          <Route path="settings" element={<Settings />} />
          <Route path='profile' element={<Profile />} />
        </Route>

        <Route path='*' element={<NotFound />} />

      </Routes>

      <Chatbot />

      <Footer />

      {/* {!isUserPanel && <Footer />} */}
    </>
  );
}

export default App;