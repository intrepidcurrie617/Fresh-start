import React, { useState } from 'react'
import { Heart, Brain, Users, Activity, Phone, ExternalLink, CheckCircle, Star } from 'lucide-react'

const MentalHealthPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('importance')

  const wellnessPractices = [
    {
      practice: 'Meditation',
      benefits: ['Reduces stress and anxiety', 'Improves focus', 'Better emotional regulation', 'Improved sleep'],
      howToStart: 'Start with 5 minutes daily using apps like Headspace or Calm',
      cost: 'Free options available',
      icon: '🧘'
    },
    {
      practice: 'Yoga',
      benefits: ['Physical fitness', 'Stress relief', 'Mind-body connection', 'Community building'],
      howToStart: 'Try free YouTube videos or community center classes',
      cost: 'Free to $20/class',
      icon: '🤸'
    },
    {
      practice: 'Exercise',
      benefits: ['Natural mood booster', 'Better physical health', 'Improved self-esteem', 'Social opportunities'],
      howToStart: 'Start with 20-30 minute walks daily',
      cost: 'Walking is free, gym $10-50/month',
      icon: '🏃'
    },
    {
      practice: 'Journaling',
      benefits: ['Process emotions', 'Track progress', 'Identify patterns', 'Stress relief'],
      howToStart: 'Write for 10 minutes each morning or evening',
      cost: 'Just need pen and paper',
      icon: '📝'
    }
  ]

  const mentalHealthResources = [
    {
      service: 'Crisis Hotlines',
      description: '24/7 support for mental health emergencies',
      numbers: ['988 - Suicide & Crisis Lifeline', '1-800-662-4357 - SAMHSA Helpline'],
      cost: 'Free',
      availability: '24/7'
    },
    {
      service: 'Community Mental Health Centers',
      description: 'Local clinics providing affordable mental health services',
      numbers: ['Call 211 for local referrals'],
      cost: 'Sliding scale based on income',
      availability: 'Business hours'
    },
    {
      service: 'Telehealth Services',
      description: 'Online therapy and counseling',
      numbers: ['BetterHelp', 'Talkspace', 'MDLIVE'],
      cost: '$60-100/week',
      availability: 'Flexible scheduling'
    },
    {
      service: 'Support Groups',
      description: 'Peer support for various challenges',
      numbers: ['NAMI', 'AA/NA', 'Re-entry support groups'],
      cost: 'Usually free',
      availability: 'Various times'
    }
  ]

  const copingStrategies = [
    {
      situation: 'Feeling Overwhelmed',
      strategies: [
        'Take 5 deep breaths (in for 4, hold for 4, out for 6)',
        'Write down 3 things you can control right now',
        'Break big problems into smaller steps',
        'Call a trusted friend or counselor'
      ]
    },
    {
      situation: 'Anxiety About the Future',
      strategies: [
        'Focus on what you can do today',
        'Practice grounding: name 5 things you see, 4 you hear, 3 you touch',
        'Remember past challenges you\'ve overcome',
        'Create a simple plan for tomorrow'
      ]
    },
    {
      situation: 'Dealing with Stigma',
      strategies: [
        'Remember that other people\'s opinions don\'t define you',
        'Connect with others who understand your experience',
        'Focus on your progress and growth',
        'Practice self-compassion'
      ]
    },
    {
      situation: 'Feeling Isolated',
      strategies: [
        'Attend community events or support groups',
        'Volunteer for causes you care about',
        'Join classes or activities (library, community center)',
        'Reach out to old friends or family members'
      ]
    }
  ]

  const buildingSupport = [
    {
      type: 'Professional Support',
      examples: ['Therapist or counselor', 'Psychiatrist (if medication needed)', 'Case manager', 'Probation officer'],
      benefits: 'Expert guidance and treatment',
      howToFind: 'Ask for referrals from 211, community health centers, or your doctor'
    },
    {
      type: 'Peer Support',
      examples: ['Support groups', 'Re-entry programs', 'Sober living communities', 'Online forums'],
      benefits: 'Understanding from shared experience',
      howToFind: 'Search online for local groups or ask at community centers'
    },
    {
      type: 'Family & Friends',
      examples: ['Understanding family members', 'Trusted friends', 'Mentors', 'Religious community'],
      benefits: 'Personal connection and ongoing support',
      howToFind: 'Rebuild relationships gradually, be honest about your needs'
    },
    {
      type: 'Community Resources',
      examples: ['Library programs', 'Recreation centers', 'Faith communities', 'Volunteer organizations'],
      benefits: 'Sense of belonging and purpose',
      howToFind: 'Visit local community centers, check websites, ask librarians'
    }
  ]

  return (
    <div className="mental-health-page">
      <div className="card">
        <h2>
          <Heart size={24} />
          Mental Health & Wellness
        </h2>
        <p>
          Your mental health is the foundation of your success in all other areas of life. Re-entering society 
          can be stressful and overwhelming, but taking care of your mental health will give you the strength 
          and clarity to handle challenges and build the life you want.
        </p>
      </div>

      <div className="mental-health">
        <h3>🌟 Why Mental Health Matters for Your Success</h3>
        <div className="wellness-practices">
          <div className="practice-card">
            <h4>Better Decision Making</h4>
            <p>Good mental health helps you think clearly and make choices that support your goals</p>
          </div>
          <div className="practice-card">
            <h4>Stronger Relationships</h4>
            <p>When you feel good mentally, you can build and maintain healthier relationships</p>
          </div>
          <div className="practice-card">
            <h4>Increased Resilience</h4>
            <p>Mental wellness helps you bounce back from setbacks and keep moving forward</p>
          </div>
        </div>
      </div>

      <div className="nav" style={{ background: '#f8fafc', borderRadius: '8px', padding: '1rem', marginBottom: '2rem' }}>
        <div className="nav-list" style={{ justifyContent: 'flex-start', gap: '0.5rem' }}>
          {[
            { id: 'importance', label: 'Why It Matters' },
            { id: 'practices', label: 'Wellness Practices' },
            { id: 'coping', label: 'Coping Strategies' },
            { id: 'support', label: 'Building Support' },
            { id: 'resources', label: 'Getting Help' }
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

      {activeTab === 'importance' && (
        <div>
          <div className="card">
            <h3>
              <Brain size={20} />
              Mental Health Challenges in Re-entry
            </h3>
            <p>
              Re-entering society after incarceration comes with unique mental health challenges. 
              Understanding these challenges is the first step to addressing them effectively.
            </p>
            
            <div className="grid grid-2">
              <div className="card" style={{ margin: '0.5rem 0' }}>
                <h4>Common Challenges:</h4>
                <ul className="list">
                  <li className="list-item">• Anxiety about the future</li>
                  <li className="list-item">• Depression or mood changes</li>
                  <li className="list-item">• Feeling overwhelmed by choices</li>
                  <li className="list-item">• Difficulty sleeping</li>
                  <li className="list-item">• Social anxiety</li>
                  <li className="list-item">• Trauma from past experiences</li>
                  <li className="list-item">• Shame or guilt</li>
                  <li className="list-item">• Fear of judgment</li>
                </ul>
              </div>
              <div className="card" style={{ margin: '0.5rem 0' }}>
                <h4>These Are Normal Reactions:</h4>
                <p>
                  Feeling stressed, anxious, or overwhelmed during re-entry is completely normal. 
                  You're adjusting to a completely different environment with new responsibilities 
                  and challenges.
                </p>
                <div style={{ background: '#ecfdf5', padding: '1rem', borderRadius: '6px', marginTop: '1rem' }}>
                  <strong style={{ color: '#065f46' }}>Remember:</strong>
                  <p style={{ color: '#065f46', marginBottom: '0', marginTop: '0.5rem' }}>
                    Asking for help is a sign of strength, not weakness. Taking care of your 
                    mental health is one of the most important things you can do for your success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Signs You Should Seek Professional Help</h3>
            <p>While some stress is normal, these signs indicate you should talk to a mental health professional:</p>
            
            <div className="grid grid-3">
              <div className="card" style={{ margin: '0.5rem 0', borderLeft: '4px solid #ef4444' }}>
                <h4>Serious Warning Signs:</h4>
                <ul style={{ color: '#dc2626' }}>
                  <li>Thoughts of suicide or self-harm</li>
                  <li>Thoughts of harming others</li>
                  <li>Severe panic attacks</li>
                  <li>Unable to function daily</li>
                </ul>
                <p style={{ color: '#dc2626', fontWeight: 'bold' }}>Call 988 immediately if you have these symptoms</p>
              </div>
              <div className="card" style={{ margin: '0.5rem 0', borderLeft: '4px solid #f59e0b' }}>
                <h4>Seek Help Soon:</h4>
                <ul>
                  <li>Persistent sadness or hopelessness</li>
                  <li>Severe anxiety or worry</li>
                  <li>Trouble sleeping for weeks</li>
                  <li>Loss of appetite</li>
                  <li>Substance use to cope</li>
                </ul>
              </div>
              <div className="card" style={{ margin: '0.5rem 0', borderLeft: '4px solid #10b981' }}>
                <h4>Good Time to Get Support:</h4>
                <ul>
                  <li>Feeling stressed but managing</li>
                  <li>Want to learn coping skills</li>
                  <li>Need someone to talk to</li>
                  <li>Want to prevent problems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'practices' && (
        <div>
          <div className="card">
            <h3>
              <Activity size={20} />
              Daily Wellness Practices
            </h3>
            <p>
              These practices can significantly improve your mental health and are mostly free or low-cost. 
              Start with one that appeals to you and build from there.
            </p>
            
            <div className="grid grid-2">
              {wellnessPractices.map((practice, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{practice.icon} {practice.practice}</h4>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>Benefits:</strong>
                    <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                      {practice.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <p><strong>How to start:</strong> {practice.howToStart}</p>
                  <p><strong>Cost:</strong> {practice.cost}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Simple Daily Mental Health Routine</h3>
            <p>Try to incorporate these simple practices into your daily routine:</p>
            
            <div className="progress-steps">
              <div className="step">
                <div className="step-number" style={{ background: '#f59e0b' }}>AM</div>
                <div className="step-content">
                  <h4>Morning (5-10 minutes)</h4>
                  <ul>
                    <li>Take 5 deep breaths before getting out of bed</li>
                    <li>Set one positive intention for the day</li>
                    <li>Write down 3 things you're grateful for</li>
                  </ul>
                </div>
              </div>
              <div className="step">
                <div className="step-number" style={{ background: '#10b981' }}>PM</div>
                <div className="step-content">
                  <h4>Evening (5-10 minutes)</h4>
                  <ul>
                    <li>Reflect on one positive thing that happened</li>
                    <li>Do some light stretching or breathing exercises</li>
                    <li>Prepare for tomorrow to reduce morning stress</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>
              <Star size={20} />
              Free Mental Health Apps
            </h3>
            <div className="grid grid-3">
              <div className="card" style={{ margin: '0.5rem 0' }}>
                <h4>Meditation</h4>
                <ul>
                  <li><strong>Insight Timer:</strong> Free meditations</li>
                  <li><strong>Headspace:</strong> Free basic plan</li>
                  <li><strong>Calm:</strong> Free daily sessions</li>
                </ul>
              </div>
              <div className="card" style={{ margin: '0.5rem 0' }}>
                <h4>Mood Tracking</h4>
                <ul>
                  <li><strong>Daylio:</strong> Simple mood tracking</li>
                  <li><strong>Sanvello:</strong> Mood and anxiety tracking</li>
                  <li><strong>MindShift:</strong> Anxiety management</li>
                </ul>
              </div>
              <div className="card" style={{ margin: '0.5rem 0' }}>
                <h4>Crisis Support</h4>
                <ul>
                  <li><strong>My3:</strong> Quick access to support contacts</li>
                  <li><strong>PTSD Coach:</strong> Trauma support tools</li>
                  <li><strong>Rethink Care:</strong> Mental health resources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'coping' && (
        <div>
          <div className="card">
            <h3>Healthy Coping Strategies</h3>
            <p>
              When you're feeling stressed, overwhelmed, or upset, these strategies can help you cope 
              in healthy ways instead of turning to harmful behaviors.
            </p>
            
            <div className="grid grid-2">
              {copingStrategies.map((strategy, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{strategy.situation}</h4>
                  <div style={{ marginTop: '1rem' }}>
                    <strong>Try these strategies:</strong>
                    <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                      {strategy.strategies.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>The STOP Technique</h3>
            <p>When you feel overwhelmed or about to make a poor decision, use this technique:</p>
            
            <div className="progress-steps">
              <div className="step">
                <div className="step-number" style={{ background: '#ef4444' }}>S</div>
                <div className="step-content">
                  <h4>STOP</h4>
                  <p>Pause whatever you're doing. Don't act immediately on intense emotions.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number" style={{ background: '#f59e0b' }}>T</div>
                <div className="step-content">
                  <h4>TAKE A BREATH</h4>
                  <p>Take 3-5 deep breaths. This activates your body's relaxation response.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number" style={{ background: '#10b981' }}>O</div>
                <div className="step-content">
                  <h4>OBSERVE</h4>
                  <p>Notice what you're thinking and feeling. What's really going on here?</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number" style={{ background: '#667eea' }}>P</div>
                <div className="step-content">
                  <h4>PROCEED</h4>
                  <p>Choose your response mindfully. What action aligns with your goals?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'support' && (
        <div>
          <div className="card">
            <h3>
              <Users size={20} />
              Building Your Support Network
            </h3>
            <p>
              Having people you can turn to for support is crucial for your mental health and overall success. 
              Different types of support serve different purposes.
            </p>
            
            <div className="grid grid-2">
              {buildingSupport.map((support, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{support.type}</h4>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>Examples:</strong>
                    <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                      {support.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  <p><strong>Benefits:</strong> {support.benefits}</p>
                  <div style={{ background: '#f0f9ff', padding: '1rem', borderRadius: '6px', marginTop: '1rem' }}>
                    <strong>How to find:</strong> {support.howToFind}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Rebuilding Relationships</h3>
            <p>Reconnecting with family and friends can be challenging but rewarding. Here's how to approach it:</p>
            
            <div className="progress-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Start Small</h4>
                  <p>Reach out with a simple text or call. Don't expect immediate forgiveness or trust.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Be Honest</h4>
                  <p>Acknowledge past hurt and take responsibility without making excuses.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Show Change Through Actions</h4>
                  <p>Consistent positive behavior over time will rebuild trust better than words alone.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Be Patient</h4>
                  <p>Healing relationships takes time. Some people may not be ready, and that's okay.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'resources' && (
        <div>
          <div className="card">
            <h3>
              <Phone size={20} />
              Mental Health Resources
            </h3>
            <div className="grid grid-2">
              {mentalHealthResources.map((resource, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{resource.service}</h4>
                  <p>{resource.description}</p>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>Contact Information:</strong>
                    <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                      {resource.numbers.map((number, i) => (
                        <li key={i}>{number}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <p><strong>Cost:</strong> {resource.cost}</p>
                  <p><strong>Availability:</strong> {resource.availability}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="emergency">
            <h3>🚨 Crisis Resources - Available 24/7</h3>
            <p>If you're having thoughts of suicide or self-harm, or feel like you might hurt someone else, get help immediately:</p>
            <div className="emergency-contacts">
              <div className="emergency-contact">
                <h4>988 Suicide & Crisis Lifeline</h4>
                <p><Phone size={16} /> Call or text 988</p>
                <p>Free, confidential support 24/7</p>
              </div>
              <div className="emergency-contact">
                <h4>Crisis Text Line</h4>
                <p>📱 Text HOME to 741741</p>
                <p>Free crisis support via text</p>
              </div>
              <div className="emergency-contact">
                <h4>Emergency Services</h4>
                <p><Phone size={16} /> Call 911</p>
                <p>For immediate danger</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>How to Access Affordable Mental Health Care</h3>
            <div className="progress-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Check Your Insurance</h4>
                  <p>If you have Medicaid or other insurance, mental health services are usually covered.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Community Health Centers</h4>
                  <p>Federally qualified health centers offer mental health services on a sliding fee scale.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>University Training Clinics</h4>
                  <p>Psychology and social work programs often offer low-cost therapy with supervised students.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Online Therapy Platforms</h4>
                  <p>Services like BetterHelp offer financial assistance for those who qualify.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MentalHealthPage