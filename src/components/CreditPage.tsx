import React, { useState } from 'react'
import { CreditCard, TrendingUp, Shield, AlertTriangle, CheckCircle, ExternalLink, Calculator } from 'lucide-react'

const CreditPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basics')

  const creditScoreRanges = [
    { range: '300-579', category: 'Poor', color: '#ef4444', description: 'Very limited credit options, high interest rates' },
    { range: '580-669', category: 'Fair', color: '#f59e0b', description: 'Some credit options, higher interest rates' },
    { range: '670-739', category: 'Good', color: '#10b981', description: 'Good credit options, reasonable rates' },
    { range: '740-799', category: 'Very Good', color: '#059669', description: 'Better rates and terms' },
    { range: '800-850', category: 'Excellent', color: '#065f46', description: 'Best rates and terms available' }
  ]

  const creditFactors = [
    { factor: 'Payment History', percentage: '35%', description: 'Whether you pay bills on time', impact: 'Highest' },
    { factor: 'Credit Utilization', percentage: '30%', description: 'How much credit you use vs. available', impact: 'High' },
    { factor: 'Length of Credit History', percentage: '15%', description: 'How long you\'ve had credit accounts', impact: 'Medium' },
    { factor: 'Credit Mix', percentage: '10%', description: 'Variety of credit types you have', impact: 'Low' },
    { factor: 'New Credit', percentage: '10%', description: 'Recent credit inquiries and new accounts', impact: 'Low' }
  ]

  const securedCards = [
    {
      name: 'Discover it® Secured',
      deposit: '$200 minimum',
      apr: '22.99%',
      annual_fee: '$0',
      benefits: ['Cash back rewards', 'Credit monitoring', 'Upgrade path to unsecured'],
      website: 'discover.com'
    },
    {
      name: 'Capital One Platinum Secured',
      deposit: '$49, $99, or $200',
      apr: '26.99%',
      annual_fee: '$0',
      benefits: ['Lower deposit options', 'Credit line increases', 'Upgrade path'],
      website: 'capitalone.com'
    },
    {
      name: 'Citi® Secured Mastercard®',
      deposit: '$200 minimum',
      apr: '22.99%',
      annual_fee: '$0',
      benefits: ['Low deposit', 'Access to FICO score', 'Upgrade potential'],
      website: 'citi.com'
    }
  ]

  const creditBuildingSteps = [
    {
      step: 'Check Your Credit Report',
      description: 'Get free reports from all three bureaus to see where you stand',
      action: 'Visit annualcreditreport.com for free reports',
      timeframe: 'Start here - Week 1'
    },
    {
      step: 'Apply for a Secured Credit Card',
      description: 'Use your own money as collateral to get your first credit card',
      action: 'Choose a card that reports to all three credit bureaus',
      timeframe: 'Week 2-3'
    },
    {
      step: 'Make Small Purchases',
      description: 'Use the card for small, regular purchases you can easily pay off',
      action: 'Spend only 10-20% of your credit limit',
      timeframe: 'Ongoing'
    },
    {
      step: 'Pay in Full, On Time',
      description: 'Always pay the full balance before the due date',
      action: 'Set up automatic payments or calendar reminders',
      timeframe: 'Every month'
    },
    {
      step: 'Monitor Your Progress',
      description: 'Check your credit score monthly to track improvement',
      action: 'Use free credit monitoring services',
      timeframe: 'Monthly'
    },
    {
      step: 'Upgrade or Add Accounts',
      description: 'After 6-12 months, consider upgrading to unsecured card',
      action: 'Apply for upgrade or additional credit account',
      timeframe: '6-12 months'
    }
  ]

  const creditMistakes = [
    {
      mistake: 'Maxing Out Credit Cards',
      why_bad: 'High credit utilization hurts your score',
      better_approach: 'Keep balances below 30% of limit, ideally under 10%'
    },
    {
      mistake: 'Making Only Minimum Payments',
      why_bad: 'Keeps balances high and costs more in interest',
      better_approach: 'Pay full balance every month if possible'
    },
    {
      mistake: 'Closing Old Credit Cards',
      why_bad: 'Reduces available credit and shortens credit history',
      better_approach: 'Keep old cards open, use occasionally'
    },
    {
      mistake: 'Applying for Too Much Credit',
      why_bad: 'Multiple hard inquiries can lower your score',
      better_approach: 'Space out credit applications by 3-6 months'
    },
    {
      mistake: 'Not Checking Credit Reports',
      why_bad: 'Errors can hurt your score unnecessarily',
      better_approach: 'Check all three reports annually, dispute errors'
    }
  ]

  const freeResources = [
    {
      name: 'Annual Credit Report',
      purpose: 'Free credit reports from all three bureaus',
      website: 'annualcreditreport.com',
      cost: 'Free (once per year from each bureau)'
    },
    {
      name: 'Credit Karma',
      purpose: 'Free credit scores and monitoring',
      website: 'creditkarma.com',
      cost: 'Free with ads'
    },
    {
      name: 'Credit Sesame',
      purpose: 'Free credit score and tools',
      website: 'creditsesame.com',
      cost: 'Free with recommendations'
    },
    {
      name: 'Experian',
      purpose: 'Free FICO score and credit monitoring',
      website: 'experian.com',
      cost: 'Free basic plan available'
    }
  ]

  return (
    <div className="credit-page">
      <div className="card">
        <h2>
          <CreditCard size={24} />
          Building Your Credit
        </h2>
        <p>
          Credit is like a financial reputation - it shows lenders how likely you are to pay back money you borrow. 
          Good credit opens doors to better jobs, housing, and financial opportunities. Even if you're starting from 
          zero or rebuilding after problems, you can establish strong credit with patience and good habits.
        </p>
      </div>

      <div className="nav" style={{ background: '#f8fafc', borderRadius: '8px', padding: '1rem', marginBottom: '2rem' }}>
        <div className="nav-list" style={{ justifyContent: 'flex-start', gap: '0.5rem' }}>
          {[
            { id: 'basics', label: 'Credit Basics' },
            { id: 'building', label: 'Building Credit' },
            { id: 'cards', label: 'Secured Cards' },
            { id: 'mistakes', label: 'Avoid Mistakes' },
            { id: 'monitoring', label: 'Monitoring & Tools' }
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
              <TrendingUp size={20} />
              Understanding Credit Scores
            </h3>
            <p>
              Your credit score is a number between 300-850 that represents how good you are at borrowing and repaying money. 
              Higher scores mean better opportunities and lower costs.
            </p>
            
            <div style={{ margin: '2rem 0' }}>
              <h4>Credit Score Ranges:</h4>
              {creditScoreRanges.map((range, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  margin: '1rem 0', 
                  padding: '1rem',
                  background: '#f8fafc',
                  borderRadius: '8px',
                  borderLeft: `4px solid ${range.color}`
                }}>
                  <div style={{ minWidth: '100px', fontWeight: 'bold' }}>
                    {range.range}
                  </div>
                  <div style={{ minWidth: '120px', color: range.color, fontWeight: 'bold' }}>
                    {range.category}
                  </div>
                  <div style={{ color: '#64748b' }}>
                    {range.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>What Affects Your Credit Score</h3>
            <p>Understanding these factors helps you make decisions that improve your score:</p>
            <div className="grid grid-2">
              {creditFactors.map((factor, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{factor.factor}</h4>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#667eea',
                    marginBottom: '0.5rem'
                  }}>
                    {factor.percentage}
                  </div>
                  <p>{factor.description}</p>
                  <div style={{ 
                    display: 'inline-block', 
                    padding: '0.25rem 0.75rem', 
                    background: factor.impact === 'Highest' ? '#fee2e2' : 
                               factor.impact === 'High' ? '#fef3c7' : 
                               factor.impact === 'Medium' ? '#ecfdf5' : '#f1f5f9',
                    color: factor.impact === 'Highest' ? '#991b1b' : 
                           factor.impact === 'High' ? '#92400e' : 
                           factor.impact === 'Medium' ? '#065f46' : '#475569',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold'
                  }}>
                    {factor.impact} Impact
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'building' && (
        <div>
          <div className="card">
            <h3>
              <Shield size={20} />
              Your Credit Building Journey
            </h3>
            <p>
              Building credit takes time, but following these steps will put you on the right path. 
              Most people see improvements in 3-6 months with consistent good habits.
            </p>
            
            <div className="progress-steps">
              {creditBuildingSteps.map((step, index) => (
                <div key={index} className="step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h4>{step.step}</h4>
                    <p>{step.description}</p>
                    <p><strong>Action:</strong> {step.action}</p>
                    <p><strong>Timeframe:</strong> {step.timeframe}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>
              <Calculator size={20} />
              Credit Utilization Guide
            </h3>
            <p>
              Credit utilization is how much of your available credit you're using. It's one of the most important 
              factors in your credit score and something you can control immediately.
            </p>
            
            <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '8px', margin: '1rem 0' }}>
              <h4>The 30% Rule (Better: 10% Rule)</h4>
              <p>Keep your credit card balances below 30% of your limit. For better scores, aim for under 10%.</p>
              
              <div style={{ marginTop: '1rem' }}>
                <strong>Examples:</strong>
                <ul style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
                  <li>$500 credit limit → Keep balance under $150 (30%) or $50 (10%)</li>
                  <li>$1,000 credit limit → Keep balance under $300 (30%) or $100 (10%)</li>
                  <li>$2,000 credit limit → Keep balance under $600 (30%) or $200 (10%)</li>
                </ul>
              </div>
            </div>

            <div style={{ background: '#ecfdf5', padding: '1.5rem', borderRadius: '8px', border: '1px solid #10b981' }}>
              <h4 style={{ color: '#065f46', marginBottom: '0.5rem' }}>
                <CheckCircle size={20} color="#10b981" style={{ marginRight: '0.5rem' }} />
                Pro Tip: Pay Before the Statement
              </h4>
              <p style={{ color: '#065f46', marginBottom: '0' }}>
                Pay down your balance before your statement closes each month. This way, 
                a low balance gets reported to credit bureaus, even if you pay in full every month.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'cards' && (
        <div>
          <div className="card">
            <h3>Best Secured Credit Cards for Building Credit</h3>
            <p>
              Secured credit cards require a security deposit that becomes your credit limit. 
              They're designed for people with no credit or poor credit history. Choose cards that:
            </p>
            <ul className="list" style={{ marginBottom: '2rem' }}>
              <li className="list-item"><CheckCircle size={16} color="#10b981" /> Report to all three credit bureaus</li>
              <li className="list-item"><CheckCircle size={16} color="#10b981" /> Have no annual fee (or low fee)</li>
              <li className="list-item"><CheckCircle size={16} color="#10b981" /> Offer upgrade path to unsecured</li>
              <li className="list-item"><CheckCircle size={16} color="#10b981" /> Return your deposit when you upgrade</li>
            </ul>

            <div className="grid grid-3">
              {securedCards.map((card, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{card.name}</h4>
                  <div style={{ marginBottom: '1rem' }}>
                    <p><strong>Security Deposit:</strong> {card.deposit}</p>
                    <p><strong>APR:</strong> {card.apr}</p>
                    <p><strong>Annual Fee:</strong> {card.annual_fee}</p>
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <strong>Benefits:</strong>
                    <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                      {card.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href={`https://${card.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <ExternalLink size={16} />
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>How to Use a Secured Credit Card</h3>
            <div className="progress-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Make Your Deposit</h4>
                  <p>Your deposit becomes your credit limit. Start with $200-500 if possible.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Make Small Purchases</h4>
                  <p>Use it for regular expenses like gas or groceries. Stay under 30% of your limit.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Pay in Full, On Time</h4>
                  <p>Pay the entire balance before the due date every month. Set up autopay if possible.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Monitor Your Score</h4>
                  <p>Check your credit score monthly to see improvements. Most cards offer free score access.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4>Upgrade When Ready</h4>
                  <p>After 6-12 months of good history, ask about upgrading to an unsecured card.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'mistakes' && (
        <div>
          <div className="card">
            <h3>
              <AlertTriangle size={20} />
              Common Credit Mistakes to Avoid
            </h3>
            <p>
              These mistakes can hurt your credit score or slow your progress. Learn what not to do:
            </p>
            
            <div className="grid grid-2">
              {creditMistakes.map((mistake, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0', borderLeft: '4px solid #ef4444' }}>
                  <h4 style={{ color: '#dc2626' }}>❌ {mistake.mistake}</h4>
                  <p><strong>Why it's bad:</strong> {mistake.why_bad}</p>
                  <div style={{ background: '#ecfdf5', padding: '1rem', borderRadius: '6px', marginTop: '1rem' }}>
                    <p style={{ color: '#065f46', marginBottom: '0' }}>
                      <strong>✅ Better approach:</strong> {mistake.better_approach}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Timeline for Credit Improvement</h3>
            <p>Here's what to expect as you build your credit:</p>
            
            <div className="progress-steps">
              <div className="step">
                <div className="step-number" style={{ background: '#10b981' }}>1M</div>
                <div className="step-content">
                  <h4>Month 1</h4>
                  <p>Get your first credit card and make your first purchase. Score may not change yet.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number" style={{ background: '#059669' }}>3M</div>
                <div className="step-content">
                  <h4>Month 3</h4>
                  <p>First score improvements appear. You may see 20-50 point increases if starting from no credit.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number" style={{ background: '#047857' }}>6M</div>
                <div className="step-content">
                  <h4>Month 6</h4>
                  <p>Significant improvement. May qualify for unsecured cards or credit limit increases.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number" style={{ background: '#065f46' }}>12M</div>
                <div className="step-content">
                  <h4>Month 12</h4>
                  <p>Established credit history. Access to better cards, loans, and higher limits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'monitoring' && (
        <div>
          <div className="card">
            <h3>Free Credit Monitoring Resources</h3>
            <p>
              These free services help you track your progress and catch problems early:
            </p>
            
            <div className="grid grid-2">
              {freeResources.map((resource, index) => (
                <div key={index} className="card" style={{ margin: '0.5rem 0' }}>
                  <h4>{resource.name}</h4>
                  <p>{resource.purpose}</p>
                  <p><strong>Cost:</strong> {resource.cost}</p>
                  <a 
                    href={`https://${resource.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <ExternalLink size={16} />
                    Visit {resource.website}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Monthly Credit Building Checklist</h3>
            <p>Follow this checklist every month to stay on track:</p>
            
            <div className="grid grid-2">
              <div>
                <h4>Week 1 of Each Month:</h4>
                <ul className="list">
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Check credit score</li>
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Review credit card statements</li>
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Check for errors or fraud</li>
                </ul>
              </div>
              <div>
                <h4>Week 2-3:</h4>
                <ul className="list">
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Pay all bills on time</li>
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Keep credit utilization low</li>
                  <li className="list-item"><CheckCircle size={16} color="#10b981" /> Make credit card payments</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '2rem', background: '#f0f9ff', padding: '1.5rem', borderRadius: '8px' }}>
              <h4>Annual Tasks:</h4>
              <ul className="list">
                <li className="list-item"><CheckCircle size={16} color="#10b981" /> Get free credit reports from all three bureaus</li>
                <li className="list-item"><CheckCircle size={16} color="#10b981" /> Dispute any errors you find</li>
                <li className="list-item"><CheckCircle size={16} color="#10b981" /> Consider upgrading secured cards</li>
                <li className="list-item"><CheckCircle size={16} color="#10b981" /> Review and optimize your credit strategy</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3>Understanding Credit Reports</h3>
            <p>Your credit report contains detailed information about your credit history. Here's what to look for:</p>
            
            <div className="grid grid-3">
              <div className="card" style={{ margin: '0.5rem 0' }}>
                <h4>Personal Information</h4>
                <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                  <li>Name and address</li>
                  <li>Social Security number</li>
                  <li>Date of birth</li>
                  <li>Employment info</li>
                </ul>
              </div>
              <div className="card" style={{ margin: '0.5rem 0' }}>
                <h4>Credit Accounts</h4>
                <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                  <li>Account history</li>
                  <li>Payment history</li>
                  <li>Credit limits</li>
                  <li>Current balances</li>
                </ul>
              </div>
              <div className="card" style={{ margin: '0.5rem 0' }}>
                <h4>Public Records</h4>
                <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                  <li>Bankruptcies</li>
                  <li>Liens</li>
                  <li>Judgments</li>
                  <li>Foreclosures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreditPage