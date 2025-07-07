import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Home, DollarSign, CreditCard, Smartphone, Building, Heart, Phone } from 'lucide-react'
import HomePage from './components/HomePage'
import BankingPage from './components/BankingPage'
import CreditPage from './components/CreditPage'
import TechnologyPage from './components/TechnologyPage'
import HousingPage from './components/HousingPage'
import MentalHealthPage from './components/MentalHealthPage'

function App() {
  const location = useLocation()

  const navigation = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/banking', label: 'Banking & Finance', icon: DollarSign },
    { path: '/credit', label: 'Build Credit', icon: CreditCard },
    { path: '/technology', label: 'Technology Help', icon: Smartphone },
    { path: '/housing', label: 'Housing & Apartments', icon: Building },
    { path: '/mental-health', label: 'Mental Health & Wellness', icon: Heart },
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>Fresh Start</h1>
          <p>Your comprehensive guide to successfully re-entering society</p>
        </div>
      </header>

      <nav className="nav">
        <div className="container">
          <ul className="nav-list">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/banking" element={<BankingPage />} />
            <Route path="/credit" element={<CreditPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/housing" element={<HousingPage />} />
            <Route path="/mental-health" element={<MentalHealthPage />} />
          </Routes>
        </div>
      </main>

      <div className="emergency">
        <div className="container">
          <h3>🚨 Emergency Contacts</h3>
          <p>If you need immediate assistance, don't hesitate to reach out:</p>
          <div className="emergency-contacts">
            <div className="emergency-contact">
              <h4>Crisis Hotline</h4>
              <p><Phone size={16} /> 988</p>
            </div>
            <div className="emergency-contact">
              <h4>211 (Social Services)</h4>
              <p><Phone size={16} /> 211</p>
            </div>
            <div className="emergency-contact">
              <h4>Emergency Services</h4>
              <p><Phone size={16} /> 911</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Fresh Start - Re-entry Assistance. Supporting your journey to success.</p>
        </div>
      </footer>
    </div>
  )
}

export default App