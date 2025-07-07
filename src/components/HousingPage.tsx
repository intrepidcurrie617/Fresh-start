import React, { useState } from 'react'
import { Building, Home, FileText, Shield, AlertCircle, CheckCircle, ExternalLink, MapPin } from 'lucide-react'

const HousingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basics')

  const housingOptions = [
    {
      type: 'Transitional Housing',
      duration: '6 months - 2 years',
      description: 'Temporary housing with supportive services',
      eligibility: 'Recently released individuals, income requirements',
      pros: ['Support services', 'Time to stabilize', 'Job training often included'],
      cons: ['Temporary', 'Rules and restrictions', 'Limited availability']
    },
    {
      type: 'Sober Living Homes',
      duration: '3 months - 1 year+',
      description: 'Drug/alcohol-free living environment',
      eligibility: 'Commitment to sobriety, house rules compliance',
      pros: ['Supportive community', 'Accountability', 'Gradual independence'],
      cons: ['Strict rules', 'Drug testing', 'Shared living space']
    },
    {
      type: 'Public Housing',
      duration: 'Long-term',
      description: 'Government-subsidized affordable housing',
      eligibility: 'Income limits, background check, waiting list',
      pros: ['Affordable rent', 'Long-term stability', 'No time limits'],
      cons: ['Long waiting lists', 'Limited locations', 'Income restrictions']
    },
    {
      type: 'Section 8 Housing',
      duration: 'Long-term',
      description: 'Housing voucher for private rentals',
      eligibility: 'Income requirements, criminal background review',
      pros: ['Choose your location', 'Private housing', 'Rent assistance'],
      cons: ['Landlord acceptance required', 'Limited vouchers', 'Waiting lists']
    }
  ]

  const applicationSteps = [
    {
      step: 'Gather Required Documents',
      description: 'Collect all necessary paperwork before starting applications',
      documents: ['ID', 'Social Security card', 'Income proof', 'Criminal history', 'References'],
      tips: 'Make copies of everything. Keep originals safe.'
    },
    {
      step: 'Research Housing Options',
      description: 'Find housing programs and apartments in your area',
      documents: ['Online searches', 'Social services referrals', 'Housing authority websites'],
      tips: 'Apply to multiple options to increase your chances.'
    },
    {
      step: 'Complete Applications',
      description: 'Fill out applications honestly and completely',
      documents: ['Housing applications', 'Background check forms', 'Income statements'],
      tips: 'Be honest about your criminal history. Explain your situation positively.'
    },
    {
      step: 'Follow Up',
      description: 'Stay in contact with housing providers',
      documents: ['Call weekly', 'Update contact info', 'Provide additional documents if needed'],
      tips: 'Keep a list of where you applied and follow up regularly.'
    }
  ]

  const tenantRights = [
    {
      right: 'Habitable Living Conditions',
      description: 'Landlord must maintain safe, livable conditions',
      examples: ['Working plumbing and electricity', 'Heat in winter', 'No dangerous conditions', 'Pest control']
    },
    {
      right: 'Privacy',
      description: 'Landlord must give notice before entering',
      examples: ['24-48 hour notice for inspections', 'Emergency entry only without notice', 'Right to quiet enjoyment']
    },
    {
      right: 'Fair Housing',
      description: 'Protection from discrimination',
      examples: ['Cannot discriminate based on race, religion, disability', 'Reasonable accommodations for disabilities', 'Equal treatment in rental process']
    },
    {
      right: 'Security Deposit Protection',
      description: 'Rules about security deposits',
      examples: ['Deposit limits (usually 1-2 months rent)', 'Written list of damages', 'Return within specified time']
    }
  ]

  return (
    <div className="housing-page">
      <div className="card">
        <h2>
          <Building size={24} />
          Housing & Apartment Guide
        </h2>
        <p>
          Finding stable housing is crucial for successful re-entry. While it can be challenging with a criminal record, 
          there are options available. This guide covers different housing types, application processes, your rights as a tenant, 
          and resources to help you find and maintain housing.
        </p>
      </div>

      <div className="nav" style={{ background: '#f8fafc', borderRadius: '8px', padding: '1rem', marginBottom: '2rem' }}>
        <div className="nav-list" style={{ justifyContent: 'flex-start', gap: '0.5rem' }}>
          {[
            { id: 'basics', label: 'Housing Options' },
            { id: 'applying', label: 'Application Process' },
            { id: 'rights', label: 'Tenant Rights' },
            { id: 'resources', label: 'Resources & Support' }
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
            <h3>Types of Housing Available</h3>
            <div className="grid grid-2">
              {housingOptions.map((option, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{option.type}</h4>
                  <p><strong>Duration:</strong> {option.duration}</p>
                  <p>{option.description}</p>
                  <p><strong>Eligibility:</strong> {option.eligibility}</p>
                  
                  <div style={{ marginTop: '1rem' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <strong style={{ color: '#10b981' }}>Pros:</strong>
                      <ul style={{ marginLeft: '1rem', marginTop: '0.25rem' }}>
                        {option.pros.map((pro, i) => (
                          <li key={i}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <strong style={{ color: '#ef4444' }}>Cons:</strong>
                      <ul style={{ marginLeft: '1rem', marginTop: '0.25rem' }}>
                        {option.cons.map((con, i) => (
                          <li key={i}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Emergency Housing Resources</h3>
            <div style={{ background: '#fee2e2', padding: '1.5rem', borderRadius: '8px', border: '1px solid #fca5a5', marginBottom: '2rem' }}>
              <h4 style={{ color: '#dc2626', marginBottom: '0.5rem' }}>
                <AlertCircle size={20} color="#dc2626" style={{ marginRight: '0.5rem' }} />
                If You Need Immediate Shelter
              </h4>
              <p style={{ color: '#dc2626', marginBottom: '1rem' }}>
                If you're homeless or at risk of being homeless tonight, these resources can help immediately:
              </p>
              <ul style={{ color: '#dc2626' }}>
                <li>Call 211 for local shelter information</li>
                <li>Contact local homeless services</li>
                <li>Visit emergency shelters (usually no advance reservation needed)</li>
                <li>Reach out to local churches or community organizations</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'applying' && (
        <div>
          <div className="card">
            <h3>
              <FileText size={20} />
              Step-by-Step Application Process
            </h3>
            <div className="progress-steps">
              {applicationSteps.map((step, index) => (
                <div key={index} className="step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h4>{step.step}</h4>
                    <p>{step.description}</p>
                    <div style={{ marginTop: '1rem' }}>
                      <strong>What you need:</strong>
                      <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                        {step.documents.map((doc, i) => (
                          <li key={i}>{doc}</li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ background: '#f0f9ff', padding: '1rem', borderRadius: '6px', marginTop: '1rem' }}>
                      <strong>💡 Tip:</strong> {step.tips}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Required Documents Checklist</h3>
            <div className="grid grid-2">
              <div>
                <h4>Personal Documents:</h4>
                <ul className="list">
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Government-issued photo ID</li>
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Social Security card</li>
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Birth certificate</li>
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Release documentation</li>
                </ul>
              </div>
              <div>
                <h4>Financial Documents:</h4>
                <ul className="list">
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Proof of income (pay stubs, benefits letter)</li>
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Bank statements</li>
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Tax returns (if available)</li>
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Benefits documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'rights' && (
        <div>
          <div className="card">
            <h3>
              <Shield size={20} />
              Your Rights as a Tenant
            </h3>
            <div className="grid grid-2">
              {tenantRights.map((right, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{right.right}</h4>
                  <p>{right.description}</p>
                  <div style={{ marginTop: '1rem' }}>
                    <strong>This includes:</strong>
                    <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                      {right.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Dealing with Housing Discrimination</h3>
            <p>
              While landlords can consider criminal history, they cannot discriminate based on protected characteristics. 
              Here's what you should know:
            </p>
            
            <div className="grid grid-2">
              <div>
                <h4>What Landlords CAN Do:</h4>
                <ul className="list">
                  <li className="list-item">• Conduct criminal background checks</li>
                  <li className="list-item">• Consider type and timing of offenses</li>
                  <li className="list-item">• Require higher security deposits</li>
                  <li className="list-item">• Set income requirements</li>
                </ul>
              </div>
              <div>
                <h4>What Landlords CANNOT Do:</h4>
                <ul className="list">
                  <li className="list-item">• Discriminate based on race, religion, disability</li>
                  <li className="list-item">• Blanket ban on all criminal history</li>
                  <li className="list-item">• Refuse reasonable accommodations for disabilities</li>
                  <li className="list-item">• Retaliate for asserting your rights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'resources' && (
        <div>
          <div className="card">
            <h3>
              <MapPin size={20} />
              Housing Resources and Support
            </h3>
            <div className="grid grid-2">
              <div className="card" style={{ margin: '0.5rem 0' }}>
                <h4>National Resources</h4>
                <ul className="list">
                  <li className="list-item">
                    <strong>211:</strong> Call for local housing assistance
                  </li>
                  <li className="list-item">
                    <strong>HUD:</strong> Public housing and Section 8 info
                  </li>
                  <li className="list-item">
                    <strong>USICH:</strong> Homeless prevention resources
                  </li>
                  <li className="list-item">
                    <strong>Salvation Army:</strong> Emergency shelter and services
                  </li>
                </ul>
                <a 
                  href="https://www.hud.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ marginTop: '1rem' }}
                >
                  <ExternalLink size={16} />
                  Visit HUD.gov
                </a>
              </div>
              
              <div className="card" style={{ margin: '0.5rem 0' }}>
                <h4>Re-entry Specific Programs</h4>
                <ul className="list">
                  <li className="list-item">
                    <strong>Second Chance Housing:</strong> Programs for formerly incarcerated
                  </li>
                  <li className="list-item">
                    <strong>FUSE:</strong> Supportive housing for high-need individuals
                  </li>
                  <li className="list-item">
                    <strong>Local Re-entry Nonprofits:</strong> Community-specific programs
                  </li>
                  <li className="list-item">
                    <strong>Faith-based Organizations:</strong> Churches and religious groups
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Tips for Housing Success</h3>
            <div className="progress-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Be Proactive</h4>
                  <p>Start looking for housing before you need it. Apply to multiple places and follow up regularly.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Be Honest</h4>
                  <p>Disclose your criminal history honestly. Focus on positive changes and your commitment to success.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Get References</h4>
                  <p>Gather character references from employers, counselors, or community members who can vouch for you.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Consider Co-signers</h4>
                  <p>A family member or friend with good credit can co-sign to increase your chances of approval.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4>Know Your Budget</h4>
                  <p>Housing should cost no more than 30% of your income. Factor in utilities, transportation, and other costs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HousingPage