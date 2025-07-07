import React, { useState } from 'react'
import { DollarSign, Building2, CreditCard, Shield, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react'

const BankingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basics')

  const bankTypes = [
    {
      name: 'Credit Unions',
      pros: ['Lower fees', 'Better customer service', 'Community focused', 'Often more forgiving'],
      cons: ['Fewer locations', 'Limited ATMs'],
      best_for: 'People starting fresh, those who value personal service'
    },
    {
      name: 'Community Banks',
      pros: ['Personal relationships', 'Local decision making', 'Flexible policies'],
      cons: ['Limited technology', 'Fewer branches'],
      best_for: 'People who prefer face-to-face banking'
    },
    {
      name: 'Large National Banks',
      pros: ['Many locations', 'Advanced technology', 'Comprehensive services'],
      cons: ['Higher fees', 'Less personal service'],
      best_for: 'People who travel or need extensive services'
    },
    {
      name: 'Online Banks',
      pros: ['No fees', 'High interest rates', '24/7 access'],
      cons: ['No physical locations', 'Cash deposits difficult'],
      best_for: 'Tech-comfortable people, savers'
    }
  ]

  const accountTypes = [
    {
      type: 'Checking Account',
      purpose: 'Daily spending and bill payments',
      features: ['Debit card', 'Check writing', 'Online banking', 'Direct deposit'],
      fees: '$0-15/month (often waived with direct deposit)',
      priority: 1
    },
    {
      type: 'Savings Account',
      purpose: 'Emergency fund and short-term goals',
      features: ['Interest earnings', 'Separate from spending money', 'Online transfers'],
      fees: '$0-5/month (often waived with minimum balance)',
      priority: 2
    },
    {
      type: 'Secured Credit Card',
      purpose: 'Building credit history',
      features: ['Reports to credit bureaus', 'Refundable deposit', 'Credit building'],
      fees: '$0-50 annual fee + deposit',
      priority: 3
    }
  ]

  const requiredDocuments = [
    'Government-issued photo ID (driver\'s license, state ID, or passport)',
    'Social Security card or Individual Taxpayer Identification Number (ITIN)',
    'Proof of address (utility bill, lease agreement, or mail from government agency)',
    'Initial deposit (usually $25-100)',
    'Employment information (if applicable)'
  ]

  const bankingSteps = [
    {
      title: 'Choose Your Bank Type',
      description: 'Credit unions are often the most welcoming for people with no banking history',
      action: 'Research local credit unions and community banks'
    },
    {
      title: 'Gather Required Documents',
      description: 'You\'ll need ID, Social Security info, and proof of address',
      action: 'Collect all documents before visiting the bank'
    },
    {
      title: 'Visit the Bank in Person',
      description: 'Explain your situation honestly - many banks have second-chance programs',
      action: 'Ask about second-chance banking programs'
    },
    {
      title: 'Start with a Basic Checking Account',
      description: 'Begin with one account and add services as you get comfortable',
      action: 'Open checking account with direct deposit if possible'
    },
    {
      title: 'Set Up Online Banking',
      description: 'Learn to check balances and pay bills online',
      action: 'Ask for help setting up online access during your visit'
    },
    {
      title: 'Add a Savings Account',
      description: 'Start building an emergency fund, even if it\'s just $10/month',
      action: 'Set up automatic transfer to savings'
    }
  ]

  const moneyManagementTips = [
    {
      title: 'Track Your Spending',
      description: 'Write down every expense for a month to understand where your money goes',
      tools: ['Notebook and pen', 'Banking app', 'Simple budgeting apps']
    },
    {
      title: 'Create a Simple Budget',
      description: 'Start with: Income - Fixed Expenses = Money for Everything Else',
      example: 'If you make $1,200/month and rent/bills are $800, you have $400 for food, transport, and savings'
    },
    {
      title: 'Pay Bills on Time',
      description: 'Late payments can hurt your credit and cost you money in fees',
      strategy: 'Set up automatic payments or calendar reminders'
    },
    {
      title: 'Start Small with Savings',
      description: 'Even $5-10 per week adds up to $260-520 per year',
      goal: 'Aim for $500 emergency fund first, then build to $1,000'
    }
  ]

  const secondChancePrograms = [
    {
      name: 'Chime',
      type: 'Online Bank',
      features: ['No ChexSystems check', 'No monthly fees', 'Early direct deposit'],
      website: 'chime.com'
    },
    {
      name: 'LendingClub',
      type: 'Online Bank',
      features: ['No minimum balance', 'No monthly fees', 'High interest rates'],
      website: 'lendingclub.com'
    },
    {
      name: 'GoBank',
      type: 'Online Bank',
      features: ['Available at Walmart', 'Low fees', 'No ChexSystems'],
      website: 'gobank.com'
    },
    {
      name: 'Local Credit Unions',
      type: 'Credit Union',
      features: ['Community focused', 'Second chance programs', 'Financial counseling'],
      website: 'Visit mycreditunion.gov to find local options'
    }
  ]

  return (
    <div className="banking-page">
      <div className="card">
        <h2>
          <DollarSign size={24} />
          Banking & Financial Basics
        </h2>
        <p>
          Having a bank account is essential for modern life. It allows you to receive paychecks, 
          pay bills safely, build a financial history, and start building toward your goals. 
          Even if you've had banking problems in the past, there are options available to help you get started.
        </p>
      </div>

      <div className="nav" style={{ background: '#f8fafc', borderRadius: '8px', padding: '1rem', marginBottom: '2rem' }}>
        <div className="nav-list" style={{ justifyContent: 'flex-start', gap: '0.5rem' }}>
          {[
            { id: 'basics', label: 'Banking Basics' },
            { id: 'choosing', label: 'Choosing a Bank' },
            { id: 'opening', label: 'Opening Account' },
            { id: 'managing', label: 'Managing Money' },
            { id: 'programs', label: 'Second Chance' }
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
            <h3>Why Banking Matters</h3>
            <div className="grid grid-2">
              <div>
                <h4>Benefits of Having a Bank Account:</h4>
                <ul className="list">
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Safe place to keep money</li>
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Direct deposit for paychecks</li>
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Pay bills online or by check</li>
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Build financial history</li>
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Access to loans and credit</li>
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> No check-cashing fees</li>
                </ul>
              </div>
              <div>
                <h4>Types of Accounts You Need:</h4>
                <div className="progress-steps">
                  {accountTypes.map((account, index) => (
                    <div key={index} className="step">
                      <div className="step-number">{account.priority}</div>
                      <div className="step-content">
                        <h4>{account.type}</h4>
                        <p>{account.purpose}</p>
                        <p><strong>Monthly fee:</strong> {account.fees}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'choosing' && (
        <div>
          <div className="card">
            <h3>
              <Building2 size={20} />
              Choosing the Right Bank
            </h3>
            <p>Different types of banks serve different needs. Here's what you should know:</p>
            <div className="grid grid-2">
              {bankTypes.map((bank, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{bank.name}</h4>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>Pros:</strong>
                    <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                      {bank.pros.map((pro, i) => (
                        <li key={i}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>Cons:</strong>
                    <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                      {bank.cons.map((con, i) => (
                        <li key={i}>{con}</li>
                      ))}
                    </ul>
                  </div>
                  <p><strong>Best for:</strong> {bank.best_for}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Questions to Ask Banks</h3>
            <div className="grid grid-2">
              <div>
                <h4>About Fees:</h4>
                <ul className="list">
                  <li className="list-item">• What's the monthly maintenance fee?</li>
                  <li className="list-item">• How can I avoid the monthly fee?</li>
                  <li className="list-item">• What's the overdraft fee?</li>
                  <li className="list-item">• Are there ATM fees?</li>
                  <li className="list-item">• Is there a minimum balance requirement?</li>
                </ul>
              </div>
              <div>
                <h4>About Services:</h4>
                <ul className="list">
                  <li className="list-item">• Do you offer second-chance banking?</li>
                  <li className="list-item">• Can I set up direct deposit?</li>
                  <li className="list-item">• Is online banking free?</li>
                  <li className="list-item">• Where are your ATMs located?</li>
                  <li className="list-item">• Do you offer financial counseling?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'opening' && (
        <div>
          <div className="card">
            <h3>
              <Shield size={20} />
              How to Open a Bank Account
            </h3>
            <div className="progress-steps">
              {bankingSteps.map((step, index) => (
                <div key={index} className="step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                    <p><strong>Action:</strong> {step.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Required Documents</h3>
            <p>Bring these documents when opening your account:</p>
            <ul className="list">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="list-item">
                  <CheckCircle size={16} color="#10b981" />
                  {doc}
                </li>
              ))}
            </ul>
            
            <div style={{ marginTop: '2rem', padding: '1rem', background: '#fef3c7', borderRadius: '8px', border: '1px solid #f59e0b' }}>
              <h4 style={{ color: '#92400e', marginBottom: '0.5rem' }}>
                <AlertCircle size={20} color="#f59e0b" style={{ marginRight: '0.5rem' }} />
                Be Honest About Your Situation
              </h4>
              <p style={{ color: '#92400e', marginBottom: '0' }}>
                If you've had banking problems before, be upfront about it. Many banks have 
                second-chance programs designed specifically to help people restart their financial lives.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'managing' && (
        <div>
          <div className="card">
            <h3>Money Management Basics</h3>
            <p>Once you have a bank account, these skills will help you manage your money effectively:</p>
            <div className="grid grid-2">
              {moneyManagementTips.map((tip, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{tip.title}</h4>
                  <p>{tip.description}</p>
                  {tip.tools && (
                    <div>
                      <strong>Tools you can use:</strong>
                      <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                        {tip.tools.map((tool, i) => (
                          <li key={i}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tip.example && (
                    <div style={{ background: '#f0f9ff', padding: '1rem', borderRadius: '6px', marginTop: '1rem' }}>
                      <strong>Example:</strong> {tip.example}
                    </div>
                  )}
                  {tip.strategy && (
                    <p><strong>Strategy:</strong> {tip.strategy}</p>
                  )}
                  {tip.goal && (
                    <p><strong>Goal:</strong> {tip.goal}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Building Your Emergency Fund</h3>
            <p>An emergency fund protects you from financial disasters. Start small and build gradually:</p>
            <div className="progress-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Goal: $100</h4>
                  <p>Save $5-10 per week. This covers small emergencies like a prescription or car repair.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Goal: $500</h4>
                  <p>Continue saving $10-20 per week. This covers larger emergencies like medical bills.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Goal: $1,000</h4>
                  <p>This covers most emergencies and gives you real financial security.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Goal: 3-6 months expenses</h4>
                  <p>The ultimate goal - enough to cover all expenses for several months.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'programs' && (
        <div>
          <div className="card">
            <h3>Second Chance Banking Programs</h3>
            <p>
              If you've had banking problems in the past (like unpaid fees or bounced checks), 
              you might be in ChexSystems - a database that banks use to check your banking history. 
              Don't worry! There are still options available:
            </p>
            
            <div className="grid grid-2">
              {secondChancePrograms.map((program, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{program.name}</h4>
                  <p><strong>Type:</strong> {program.type}</p>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>Features:</strong>
                    <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                      {program.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href={`https://${program.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <ExternalLink size={16} />
                    Visit {program.website}
                  </a>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', padding: '1rem', background: '#ecfdf5', borderRadius: '8px', border: '1px solid #10b981' }}>
              <h4 style={{ color: '#065f46', marginBottom: '0.5rem' }}>
                <CheckCircle size={20} color="#10b981" style={{ marginRight: '0.5rem' }} />
                Your ChexSystems Report
              </h4>
              <p style={{ color: '#065f46', marginBottom: '1rem' }}>
                You can get a free copy of your ChexSystems report once per year at chexsystems.com. 
                If there are errors, you can dispute them. Some negative items fall off after 5 years.
              </p>
              <a 
                href="https://www.chexsystems.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <ExternalLink size={16} />
                Check Your ChexSystems Report
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BankingPage