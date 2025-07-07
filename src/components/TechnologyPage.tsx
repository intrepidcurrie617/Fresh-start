import React, { useState } from 'react'
import { Smartphone, Monitor, Wifi, Download, Mail, Search, ShoppingCart, CreditCard, ExternalLink } from 'lucide-react'

const TechnologyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basics')

  const smartphoneBasics = [
    {
      task: 'Making Phone Calls',
      steps: ['Find the Phone app (green icon with phone)', 'Tap the number pad', 'Enter phone number', 'Tap green call button'],
      tips: 'Save important numbers in your contacts'
    },
    {
      task: 'Sending Text Messages',
      steps: ['Find Messages app', 'Tap the compose button (+)', 'Enter contact or phone number', 'Type your message', 'Tap send'],
      tips: 'Keep messages short and clear'
    },
    {
      task: 'Connecting to WiFi',
      steps: ['Go to Settings', 'Tap WiFi or Wireless', 'Find your network name', 'Enter password', 'Tap Connect'],
      tips: 'Ask for WiFi password - most businesses offer free WiFi'
    },
    {
      task: 'Using Apps',
      steps: ['Tap the app icon to open', 'Swipe up to close apps', 'Double-tap home button to see open apps'],
      tips: 'Start with basic apps like Phone, Messages, and Settings'
    }
  ]

  const essentialApps = [
    {
      name: 'Banking Apps',
      purpose: 'Check balances, transfer money, deposit checks',
      examples: ['Chase Mobile', 'Bank of America', 'Wells Fargo Mobile'],
      safety: 'Only download from official app stores. Never share login info.'
    },
    {
      name: 'Transportation',
      purpose: 'Find rides, public transit, directions',
      examples: ['Uber', 'Lyft', 'Google Maps', 'Transit apps'],
      safety: 'Verify driver info before getting in vehicle'
    },
    {
      name: 'Job Search',
      purpose: 'Find employment opportunities',
      examples: ['Indeed', 'LinkedIn', 'ZipRecruiter', 'Snagajob'],
      safety: 'Never pay for job applications. Legitimate jobs don\'t charge fees.'
    },
    {
      name: 'Government Services',
      purpose: 'Access benefits, DMV, social services',
      examples: ['DMV app', 'SNAP benefits', 'Social Security', 'Healthcare.gov'],
      safety: 'Use official .gov websites only'
    }
  ]

  const internetBasics = [
    {
      concept: 'Web Browsers',
      description: 'Programs to access websites',
      examples: 'Chrome, Firefox, Safari, Edge',
      howTo: 'Type website address in address bar at top'
    },
    {
      concept: 'Search Engines',
      description: 'Find information on the internet',
      examples: 'Google, Bing, Yahoo',
      howTo: 'Type what you\'re looking for and press Enter'
    },
    {
      concept: 'Email',
      description: 'Send and receive electronic messages',
      examples: 'Gmail, Yahoo Mail, Outlook',
      howTo: 'Click Compose, enter email address, write message, click Send'
    },
    {
      concept: 'Social Media',
      description: 'Connect with people and share information',
      examples: 'Facebook, Instagram, Twitter',
      howTo: 'Create account, add friends, share posts carefully'
    }
  ]

  const onlineServices = [
    {
      service: 'Online Banking',
      benefits: ['Check balances 24/7', 'Pay bills', 'Transfer money', 'Mobile check deposit'],
      gettingStarted: 'Visit your bank to set up online access',
      safety: 'Never use public computers for banking'
    },
    {
      service: 'Online Shopping',
      benefits: ['Shop from home', 'Compare prices', 'Read reviews', 'Home delivery'],
      gettingStarted: 'Start with trusted sites like Amazon, Walmart',
      safety: 'Only shop on secure sites (look for lock icon in address bar)'
    },
    {
      service: 'Telemedicine',
      benefits: ['Doctor visits from home', 'Prescription refills', 'Mental health counseling'],
      gettingStarted: 'Ask your doctor about virtual appointments',
      safety: 'Use only doctor-provided links for appointments'
    },
    {
      service: 'Online Learning',
      benefits: ['Free courses', 'Job training', 'High school/college credit', 'Professional development'],
      gettingStarted: 'Try Khan Academy, Coursera, or local library resources',
      safety: 'Be cautious of programs requiring upfront payment'
    }
  ]

  const safetyTips = [
    {
      threat: 'Phishing Scams',
      description: 'Fake emails or texts trying to steal your information',
      warning_signs: ['Urgent language', 'Requests for passwords', 'Suspicious links', 'Grammar mistakes'],
      protection: 'Never click suspicious links. Call the company directly to verify.'
    },
    {
      threat: 'Identity Theft',
      description: 'Someone using your personal information illegally',
      warning_signs: ['Unknown charges', 'Credit report errors', 'Missing mail', 'Unexpected bills'],
      protection: 'Keep personal info private. Monitor credit reports regularly.'
    },
    {
      threat: 'Romance Scams',
      description: 'Fake relationships to steal money',
      warning_signs: ['Quick declarations of love', 'Requests for money', 'Won\'t meet in person', 'Perfect photos'],
      protection: 'Never send money to someone you haven\'t met in person.'
    },
    {
      threat: 'Tech Support Scams',
      description: 'Fake calls claiming your computer has problems',
      warning_signs: ['Unsolicited calls', 'Claims of virus infection', 'Requests for remote access'],
      protection: 'Hang up. Real tech companies don\'t call unsolicited.'
    }
  ]

  return (
    <div className="technology-page">
      <div className="card">
        <h2>
          <Smartphone size={24} />
          Technology Help & Digital Literacy
        </h2>
        <p>
          Technology has changed rapidly, but you don't need to learn everything at once. 
          This guide covers the essential digital skills you need for modern life, from using 
          a smartphone to staying safe online. Start with the basics and build your confidence gradually.
        </p>
      </div>

      <div className="nav" style={{ background: '#f8fafc', borderRadius: '8px', padding: '1rem', marginBottom: '2rem' }}>
        <div className="nav-list" style={{ justifyContent: 'flex-start', gap: '0.5rem' }}>
          {[
            { id: 'basics', label: 'Smartphone Basics' },
            { id: 'internet', label: 'Internet & Email' },
            { id: 'apps', label: 'Essential Apps' },
            { id: 'services', label: 'Online Services' },
            { id: 'safety', label: 'Online Safety' }
          ].map(tab => (
            <button
              key={tab.id}
              className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              style={{ border: 'none', background: 'transparent' }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'basics' && (
        <div>
          <div className="card">
            <h3>
              <Smartphone size={20} />
              Smartphone Essentials
            </h3>
            <p>
              Smartphones are like small computers that fit in your pocket. They can make calls, 
              send messages, access the internet, and run applications (apps) for almost any task. 
              Here are the basic skills you need:
            </p>
            
            <div className="grid grid-2">
              {smartphoneBasics.map((item, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{item.task}</h4>
                  <div className="progress-steps">
                    {item.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="step">
                        <div className="step-number">{stepIndex + 1}</div>
                        <div className="step-content">
                          <p>{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: '#f0f9ff', padding: '1rem', borderRadius: '6px', marginTop: '1rem' }}>
                    <strong>💡 Tip:</strong> {item.tips}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Getting Your First Smartphone</h3>
            <div className="grid grid-2">
              <div>
                <h4>Options for Getting a Phone:</h4>
                <ul className="list">
                  <li className="list-item">• <strong>Prepaid Plans:</strong> Pay in advance, no credit check needed</li>
                  <li className="list-item">• <strong>Free Government Phones:</strong> Lifeline program for low-income individuals</li>
                  <li className="list-item">• <strong>Family Plans:</strong> Ask family members to add you to their plan</li>
                  <li className="list-item">• <strong>Used Phones:</strong> Buy from reputable stores or carriers</li>
                </ul>
              </div>
              <div>
                <h4>Budget-Friendly Carriers:</h4>
                <ul className="list">
                  <li className="list-item">• <strong>Mint Mobile:</strong> Low-cost plans starting at $15/month</li>
                  <li className="list-item">• <strong>Visible:</strong> $30/month unlimited plan</li>
                  <li className="list-item">• <strong>Cricket:</strong> Affordable plans with good coverage</li>
                  <li className="list-item">• <strong>Metro by T-Mobile:</strong> No contract required</li>
                </ul>
              </div>
            </div>
            
            <div style={{ background: '#ecfdf5', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem', border: '1px solid #10b981' }}>
              <h4 style={{ color: '#065f46', marginBottom: '0.5rem' }}>
                📞 Lifeline Program (Free Phone Service)
              </h4>
              <p style={{ color: '#065f46', marginBottom: '1rem' }}>
                If you qualify for government assistance programs like SNAP, Medicaid, or housing assistance, 
                you may be eligible for a free smartphone with monthly service through the Lifeline program.
              </p>
              <a 
                href="https://www.lifelinesupport.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <ExternalLink size={16} />
                Check Lifeline Eligibility
              </a>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'internet' && (
        <div>
          <div className="card">
            <h3>
              <Monitor size={20} />
              Internet & Computer Basics
            </h3>
            <p>
              The internet connects computers worldwide, allowing you to access information, 
              communicate, and complete many daily tasks online. Here are the fundamentals:
            </p>
            
            <div className="grid grid-2">
              {internetBasics.map((concept, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{concept.concept}</h4>
                  <p>{concept.description}</p>
                  <p><strong>Examples:</strong> {concept.examples}</p>
                  <div style={{ background: '#f0f9ff', padding: '1rem', borderRadius: '6px', marginTop: '1rem' }}>
                    <strong>How to use:</strong> {concept.howTo}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>
              <Mail size={20} />
              Setting Up Your First Email Account
            </h3>
            <p>Email is essential for job applications, government services, and staying connected. Here's how to get started:</p>
            
            <div className="progress-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Choose an Email Provider</h4>
                  <p>Gmail, Yahoo, or Outlook are popular free options. Gmail is recommended for beginners.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Create Your Account</h4>
                  <p>Go to gmail.com, click "Create account", and follow the steps. Choose a professional username.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Secure Your Account</h4>
                  <p>Add a recovery phone number and enable two-factor authentication for security.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Learn the Basics</h4>
                  <p>Practice sending emails to yourself, organizing with folders, and attaching files.</p>
                </div>
              </div>
            </div>

            <div style={{ background: '#fef3c7', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem', border: '1px solid #f59e0b' }}>
              <h4 style={{ color: '#92400e', marginBottom: '0.5rem' }}>
                ⚠️ Email Username Tips
              </h4>
              <p style={{ color: '#92400e', marginBottom: '0' }}>
                Choose a professional username for job applications: firstname.lastname@gmail.com or 
                firstnamelastname2024@gmail.com. Avoid nicknames or numbers that might seem unprofessional.
              </p>
            </div>
          </div>

          <div className="card">
            <h3>
              <Wifi size={20} />
              Getting Internet Access
            </h3>
            <div className="grid grid-2">
              <div>
                <h4>Free Internet Options:</h4>
                <ul className="list">
                  <li className="list-item">• <strong>Public Libraries:</strong> Free WiFi and computer access</li>
                  <li className="list-item">• <strong>Coffee Shops:</strong> Most offer free WiFi to customers</li>
                  <li className="list-item">• <strong>Fast Food Restaurants:</strong> McDonald's, Starbucks, etc.</li>
                  <li className="list-item">• <strong>Government Buildings:</strong> Many offer public WiFi</li>
                </ul>
              </div>
              <div>
                <h4>Low-Cost Home Internet:</h4>
                <ul className="list">
                  <li className="list-item">• <strong>Internet Essentials:</strong> Comcast low-income program</li>
                  <li className="list-item">• <strong>Access from AT&T:</strong> Affordable internet for qualifying households</li>
                  <li className="list-item">• <strong>Spectrum Internet Assist:</strong> Low-cost broadband</li>
                  <li className="list-item">• <strong>Emergency Broadband Benefit:</strong> Government assistance program</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'apps' && (
        <div>
          <div className="card">
            <h3>Essential Apps for Daily Life</h3>
            <p>
              Apps (applications) are programs that run on your smartphone or computer. 
              These essential apps will help you manage daily tasks and access important services:
            </p>
            
            <div className="grid grid-2">
              {essentialApps.map((app, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{app.name}</h4>
                  <p><strong>Purpose:</strong> {app.purpose}</p>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>Popular Apps:</strong>
                    <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                      {app.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ background: '#fee2e2', padding: '1rem', borderRadius: '6px', border: '1px solid #fca5a5' }}>
                    <strong style={{ color: '#dc2626' }}>🛡️ Safety:</strong>
                    <p style={{ color: '#dc2626', marginBottom: '0', marginTop: '0.5rem' }}>{app.safety}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>
              <Download size={20} />
              How to Download Apps Safely
            </h3>
            <div className="progress-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Use Official App Stores</h4>
                  <p>iPhone: App Store | Android: Google Play Store. Never download apps from unknown websites.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Read Reviews and Ratings</h4>
                  <p>Check user reviews and ratings before downloading. Avoid apps with mostly negative reviews.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Check Permissions</h4>
                  <p>Review what access the app requests. Be suspicious if an app asks for unnecessary permissions.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Start with Well-Known Apps</h4>
                  <p>Begin with apps from established companies (banks, government agencies, major retailers).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'services' && (
        <div>
          <div className="card">
            <h3>Important Online Services</h3>
            <p>
              Many essential services are now available online, making them more convenient and often faster. 
              Here are key services you should know about:
            </p>
            
            <div className="grid grid-2">
              {onlineServices.map((service, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{service.service}</h4>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>Benefits:</strong>
                    <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                      {service.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <p><strong>Getting Started:</strong> {service.gettingStarted}</p>
                  <div style={{ background: '#fef3c7', padding: '1rem', borderRadius: '6px', marginTop: '1rem', border: '1px solid #f59e0b' }}>
                    <strong style={{ color: '#92400e' }}>⚠️ Safety Tip:</strong>
                    <p style={{ color: '#92400e', marginBottom: '0', marginTop: '0.5rem' }}>{service.safety}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>
              <Search size={20} />
              Job Searching Online
            </h3>
            <p>Most jobs are now posted online. Here's how to search effectively:</p>
            
            <div className="progress-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Create Professional Profiles</h4>
                  <p>Set up accounts on Indeed, LinkedIn, and other job sites. Use a professional email address.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Build Your Online Resume</h4>
                  <p>Complete your profile with work history, skills, and education. Be honest about employment gaps.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Set Up Job Alerts</h4>
                  <p>Create alerts for jobs in your area and field. This saves time and keeps you updated on new openings.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Apply Strategically</h4>
                  <p>Customize applications for each job. Follow up professionally after applying.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'safety' && (
        <div>
          <div className="card">
            <h3>
              <CreditCard size={20} />
              Online Safety & Scam Prevention
            </h3>
            <p>
              The internet has many benefits, but there are also people trying to take advantage of others. 
              Learning to recognize and avoid scams is crucial for your financial and personal safety.
            </p>
            
            <div className="grid grid-2">
              {safetyTips.map((tip, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0', borderLeft: '4px solid #ef4444' }}>
                  <h4 style={{ color: '#dc2626' }}>⚠️ {tip.threat}</h4>
                  <p>{tip.description}</p>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>Warning Signs:</strong>
                    <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                      {tip.warning_signs.map((sign, i) => (
                        <li key={i}>{sign}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ background: '#ecfdf5', padding: '1rem', borderRadius: '6px' }}>
                    <strong style={{ color: '#065f46' }}>🛡️ Protection:</strong>
                    <p style={{ color: '#065f46', marginBottom: '0', marginTop: '0.5rem' }}>{tip.protection}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>General Online Safety Rules</h3>
            <div className="grid grid-2">
              <div>
                <h4>Password Security:</h4>
                <ul className="list">
                  <li className="list-item">• Use different passwords for each account</li>
                  <li className="list-item">• Make passwords at least 8 characters long</li>
                  <li className="list-item">• Include numbers, letters, and symbols</li>
                  <li className="list-item">• Never share passwords with anyone</li>
                  <li className="list-item">• Write them down safely if needed</li>
                </ul>
              </div>
              <div>
                <h4>Personal Information:</h4>
                <ul className="list">
                  <li className="list-item">• Never give Social Security number online unless necessary</li>
                  <li className="list-item">• Be careful sharing personal details on social media</li>
                  <li className="list-item">• Don't click links in suspicious emails</li>
                  <li className="list-item">• Verify requests by calling the company directly</li>
                  <li className="list-item">• Trust your instincts if something feels wrong</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>What to Do If You're Scammed</h3>
            <div className="progress-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Stop All Contact</h4>
                  <p>Immediately stop communicating with the scammer. Block their numbers and emails.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Secure Your Accounts</h4>
                  <p>Change passwords for all affected accounts. Contact your bank if money was involved.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Report the Scam</h4>
                  <p>Report to FTC at reportfraud.ftc.gov and local police if money was lost.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Monitor Your Credit</h4>
                  <p>Check credit reports for suspicious activity. Consider placing a fraud alert.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TechnologyPage