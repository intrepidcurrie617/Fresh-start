import React from 'react'
import { Link } from 'react-router-dom'
import { DollarSign, CreditCard, Smartphone, Building, Heart, Users, CheckCircle } from 'lucide-react'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Banking & Finance',
      description: 'Learn how to open bank accounts, understand different account types, and manage your money effectively.',
      link: '/banking',
      color: '#667eea'
    },
    {
      icon: CreditCard,
      title: 'Build Credit',
      description: 'Understand credit scores, learn how to build credit from scratch, and find the right credit products.',
      link: '/credit',
      color: '#10b981'
    },
    {
      icon: Smartphone,
      title: 'Technology Help',
      description: 'Get comfortable with smartphones, computers, apps, and online services that are essential today.',
      link: '/technology',
      color: '#f59e0b'
    },
    {
      icon: Building,
      title: 'Housing & Apartments',
      description: 'Find housing options, understand the application process, and know your rights as a tenant.',
      link: '/housing',
      color: '#ef4444'
    },
    {
      icon: Heart,
      title: 'Mental Health & Wellness',
      description: 'Access mental health resources, learn stress management, and discover wellness practices.',
      link: '/mental-health',
      color: '#8b5cf6'
    }
  ]

  const successTips = [
    'Take things one step at a time - you don\'t have to do everything at once',
    'Don\'t be afraid to ask questions - everyone is learning something new',
    'Keep important documents organized and easily accessible',
    'Build a support network of people who believe in your success',
    'Practice self-care and prioritize your mental health',
    'Celebrate small victories along the way'
  ]

  return (
    <div className="home-page">
      <div className="card">
        <h2>Welcome to Fresh Start</h2>
        <p>
          Re-entering society after incarceration can feel overwhelming, especially if technology and systems 
          have changed during your time away. You're not alone in this journey, and this guide is here to 
          help you navigate the essential aspects of building a successful life.
        </p>
        <p>
          Whether you've been away for a few years or more than a decade, this comprehensive resource will 
          walk you through everything from opening your first bank account to understanding modern technology, 
          finding housing, and maintaining your mental health.
        </p>
      </div>

      <div className="mental-health">
        <h3>🧠 Your Mental Health Comes First</h3>
        <p>
          Before diving into practical matters, remember that your mental health is the foundation of your success. 
          Re-entry can be stressful, and it's completely normal to feel overwhelmed. Take care of yourself first.
        </p>
        <div className="wellness-practices">
          <div className="practice-card">
            <h4>🧘 Daily Meditation</h4>
            <p>Even 5-10 minutes daily can reduce stress and improve focus</p>
            <Link to="/mental-health" className="btn btn-outline">Learn More</Link>
          </div>
          <div className="practice-card">
            <h4>🏃 Physical Activity</h4>
            <p>Regular exercise boosts mood and energy levels</p>
            <Link to="/mental-health" className="btn btn-outline">Get Started</Link>
          </div>
          <div className="practice-card">
            <h4>🤝 Support Groups</h4>
            <p>Connect with others who understand your journey</p>
            <Link to="/mental-health" className="btn btn-outline">Find Groups</Link>
          </div>
        </div>
      </div>

      <h2>🚀 Essential Life Areas</h2>
      <div className="grid grid-2">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div key={index} className="card">
              <h3>
                <Icon size={24} style={{ color: feature.color }} />
                {feature.title}
              </h3>
              <p>{feature.description}</p>
              <Link to={feature.link} className="btn">
                Get Started →
              </Link>
            </div>
          )
        })}
      </div>

      <div className="card">
        <h2>
          <Users size={24} />
          Tips for Success
        </h2>
        <p>
          Based on the experiences of many successful re-entry stories, here are some key principles 
          to keep in mind as you navigate this journey:
        </p>
        <div className="progress-steps">
          {successTips.map((tip, index) => (
            <div key={index} className="step">
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <p>{tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2>
          <CheckCircle size={24} />
          Your Journey Starts Now
        </h2>
        <p>
          Every successful person started exactly where you are now. The fact that you're here, 
          reading this guide, shows that you're already taking positive steps toward building 
          a better future.
        </p>
        <p>
          Remember: there's no shame in starting over, asking for help, or taking time to learn. 
          The world may have changed, but your ability to adapt and succeed is stronger than ever.
        </p>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/banking" className="btn" style={{ marginRight: '1rem' }}>
            Start with Banking →
          </Link>
          <Link to="/mental-health" className="btn btn-secondary">
            Mental Health First →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage