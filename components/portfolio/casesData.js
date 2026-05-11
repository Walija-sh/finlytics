   const sectionsData = [
    {
    id:1,
    bgColor: 'bg-primary',
    header: {
      title: 'Modern Data Platforms & Governance',
      description: 'We build the trusted data foundations that enable our clients to move faster, make smarter decisions, and unlock new opportunities.',
      buttonText: 'Explore our Data Platform Solutions',
      buttonLink: '/our-solutions/modern-data-platforms-governance'
    },
    caseStudies: [
      {
        id: 1,
        icon: '/assets/technicalPortfolio/warehouse.svg',
        iconAlt: 'Data Warehouse',
        title: 'Enterprise Data Warehouse',
        subtitle: 'A Complete Digital Transformation',
        slides: [
          {
            type: 'challenge',
            title: 'The Challenge',
            description: 'A major financial institution was operating with over 10 disconnected systems and 100+ manual Excel reports, resulting in week-old data and conflicting metrics across departments.',
            image: '/assets/technicalPortfolio/dataWarehouse.jpg'
          },
          {
            type: 'solution',
            title: 'Our Solution',
            description: 'We designed and implemented a comprehensive enterprise data warehouse from the ground up, transforming their entire data ecosystem.',
            solutionItems: [
              { label: 'Architecture', text: 'A robust star schema with Slowly Changing Dimensions (SCDs) to support both historical analysis and real-time reporting.' },
              { label: 'ETL/ELT', text: '50+ Alteryx workflows to automate data extraction, transformation, and loading with complete error handling.' },
              { label: 'Analytics', text: 'A Power BI semantic layer with 150+ calculated measures to ensure metric consistency.' },
              { label: 'Governance', text: 'Implemented row-level security, data classification, and complete audit trails for regulatory compliance.' }
            ]
          },
          {
            type: 'impact',
            title: 'Impact',
            impacts: [
              { metric: '80%', description: 'reduction in reporting time (from 5 days to same-day).' },
              { metric: '100%', description: 'audit-ready compliance for data governance requirements.' },
              { metric: 'A single source of truth', description: 'that eliminated conflicting metrics.' }
            ]
          }
        ]
      },
      {
        id: 2,
        icon: '/assets/technicalPortfolio/analytics.svg',
        iconAlt: 'Event-Sourced Analytics',
        title: 'Event-Sourced Analytics',
        subtitle: 'Real-Time Data at Scale',
        slides: [
          {
            type: 'challenge',
            title: 'The Challenge',
            description: 'A digital lending platform needed to move from overnight batch processing to real-time analytics while maintaining complete audit trails for regulatory compliance.',
            image: '/assets/technicalPortfolio/eventSourced.jpg'
          },
          {
            type: 'solution',
            title: 'Our Solution',
            description: 'We architected an event-sourced system using a modern data stack, enabling instant insights with perfect historical reconstruction.',
            solutionItems: [
              { label: 'Architecture', text: 'Implemented an immutable event log in ClickHouse capable of handling over 100,000 events per hour.' },
              { label: 'Transformation', text: ' Built 150+ dbt models with incremental processing to handle late-arriving events.' },
              { label: 'Analytics', text: 'Developed self-service analytics in Metabase with sub-second query performance.' },
              { label: 'Auditability', text: ' Enabled point-in-time reconstruction of any historical state for regulatory reviews.' }
            ]
          },
          {
            type: 'impact',
            title: 'Impact',
            impacts: [
              { metric: '60%', description: 'average decision-making time.' },
              { metric: '100%', description: 'event capture with zero data loss.' },
              { metric: 'Real-time visibility', description: 'Moved from a 24-hour lag to real-time visibility into operations.' }
            ]
          }
        ]
      },
      {
        id: 3,
        icon: '/assets/technicalPortfolio/data.svg',
        iconAlt: 'Data Governance',
        title: 'Data Governance & Privacy Excellence',
        slides: [
          {
            type: 'challenge',
            title: 'The Challenge',
            description: 'A national credit bureau needed to implement a comprehensive data governance and privacy framework to comply with new regulations (analogous to GDPR/PDPL) while processing sensitive financial data for millions of customers.',
            image: '/assets/technicalPortfolio/dataGovernance.jpg'
          },
          {
            type: 'solution',
            title: 'Our Solution',
            description: 'We designed and implemented a complete data privacy and governance framework that became the regional benchmark for compliance.',
            solutionItems: [
              { label: 'Privacy by Design', text: ' Built data minimisation, purpose limitation, and consent management into every system.' },
              { label: 'Access Control', text: ' Deployed attribute-based access control (ABAC) with dynamic masking based on user context and data sensitivity.' },
              { label: 'Data Subject Rights', text: ' Engineered cascading deletion and access request mechanisms across distributed systems.' },
             
            ]
          },
          {
            type: 'impact',
            title: 'Impact',
            impacts: [
              { metric: '100%', description: 'regulatory compliance achieved in the first audit' },
              { metric: '48h', description: 'response time for data subject requests (where regulations require 30 days).' },
              { metric: '95%', description: 'reduction in manual compliance tasks.' }
            ]
          }
        ]
      }
    ]
  },
  {
  id: 2,
  bgColor: 'bg-blue-2',
  header: {
    title: 'Credit Risk & Financial Analytics',
    description: 'We build the specialised models and decisioning systems that empower financial institutions to manage risk more effectively and unlock new avenues for growth.',
    buttonText: 'Explore our Credit Risk solutions',
    buttonLink: '/our-solutions/credit-risk-analytics'
  },
  caseStudies: [
    {
      id: 1,
      icon: '/assets/technicalPortfolio/Ml.svg',
      iconAlt: 'Machine Learning',
      title: 'Machine Learning Bureau Score',
      subtitle: 'From Concept to Production',
      slides: [
        {
          type: 'challenge',
          title: 'The Challenge',
          description: 'A national credit bureau needed to move beyond basic data provision to offer a predictive scoring model but lacked the in-house expertise to develop and deploy ML at scale.',
          image: '/assets/technicalPortfolio/ml.jpg'
        },
        {
          type: 'solution',
          title: 'Our Solution',
          description: 'We built a complete ML pipeline from data preparation to production deployment, creating a bureau score that became the new industry standard.',
          solutionItems: [
            { label: 'Data Integration', text: 'Combined traditional credit data with alternative sources including telecom, utilities, and trade payment behaviour.' },
            { label: 'Feature Engineering', text: 'Developed over 200 predictive features, including payment velocity, stability indices, and utilisation patterns.' },
            { label: 'Model Development', text: 'Tested multiple algorithms (XGBoost, LightGBM, Logistic Regression) with rigorous validation and selected the optimal challenger.' },
            { label: 'Monitoring', text: 'Implemented a full monitoring framework, including drift detection (PSI), performance tracking, and automated retraining triggers.' }
          ]
        },
        {
          type: 'impact',
          title: 'Impact',
          impacts: [
            { metric: '0.85 Gini coefficient', description: 'Achieved over the industry benchmark of 0.70-0.75.' },
            { metric: '100%', description: 'adoption across more than 50 financial institutions.' },
            { metric: 'Sub-second scoring', description: 'Enabled sub-second scoring for real-time decisioning.' }
          ]
        }
      ]
    },
    {
      id: 2,
      icon: '/assets/technicalPortfolio/analytics.svg',
      iconAlt: 'Financial Risk',
      title: 'Financial Risk Models',
      subtitle: 'Institutional-Grade Excel Solutions',
      slides: [
        {
          type: 'challenge',
          title: 'The Challenge',
          description: 'Corporate lending teams required sophisticated yet accessible risk assessment tools that could handle complex financial analysis while remaining auditable and transparent for credit committees.',
          image: '/assets/technicalPortfolio/riskModels.jpg'
        },
        {
          type: 'solution',
          title: 'Our Solution',
          description: 'We developed comprehensive Excel-based models that balanced analytical sophistication with usability, becoming the standard for decisions on credits from $1M to $500M.',
          solutionItems: [
            { label: 'Dynamic Analysis', text: 'Built models that automatically adjust to different accounting standards and company structures.' },
            { label: 'Scenario Modelling', text: 'Integrated Monte Carlo simulations for stress testing with over 10,000 iterations.' },
            { label: 'Automated Reporting', text: 'Enabled one-click creation of credit memorandums with all supporting analysis.' }
          ]
        },
        {
          type: 'impact',
          title: 'Impact',
          impacts: [
            { metric: '60%', description: 'reduction in analysis time per credit application.' },
            { metric: 'Standardised assessments', description: 'across all analysts, improving consistency.' },
            { metric: 'Zero spreadsheet errors', description: 'achieved through robust validation rules.' }
          ]
        }
      ]
    }
  ]
},
{
  id: 3,
  bgColor: 'bg-primary',
  header: {
    title: 'Data Science & Machine Learning',
    description: 'We deploy cutting-edge AI/ML, from blockchain analytics to GenAI, to solve our clients\' most complex problems and create new competitive advantages.',
    buttonText: 'Explore our AI/ML solutions',
    buttonLink: '/our-solutions/data-science-ml'
  },
  caseStudies: [
    {
      id: 1,
      icon: '/assets/technicalPortfolio/blockchain.svg',
      iconAlt: 'Blockchain Credit',
      title: 'Blockchain Credit Scoring',
      subtitle: 'Bridging DeFi and TradFi',
      slides: [
        {
          type: 'challenge',
          title: 'The Challenge',
          description: 'DeFi protocols needed a way to assess creditworthiness, but traditional scoring models were unable to evaluate on-chain behaviour and wallet history.',
          image: '/assets/technicalPortfolio/blockchain.jpg'
        },
        {
          type: 'solution',
          title: 'Our Solution',
          description: 'We pioneered one of the first production blockchain credit scoring systems, combining on-chain transaction analysis with optional off-chain data sources.',
          solutionItems: [
            { label: 'Multi-Chain Data', text: 'Integrated data from Ethereum, BSC, and Polygon, including major DeFi protocols like Aave and Compound.' },
            { label: 'Blockchain-Native Features', text: 'Developed novel features for wallet age, protocol experience, liquidation history, and portfolio composition.' },
            { label: 'Privacy Preservation', text: 'Implemented zero-knowledge proof concepts for sensitive data.' }
          ]
        },
        {
          type: 'impact',
          title: 'Impact',
          impacts: [
            { metric: '50,000', description: 'scored wallets within the first year.' },
            { metric: 'First-to-market', description: 'with a production blockchain credit scoring API.' },
            { metric: 'New market', description: 'for under-collateralised lending in DeFi.' }
          ]
        }
      ]
    },
    {
      id: 2,
      icon: '/assets/technicalPortfolio/aiAgent.svg',
      iconAlt: 'AI Trading',
      title: 'AI Trading Agents',
      subtitle: 'Autonomous Market Intelligence',
      slides: [
        {
          type: 'challenge',
          title: 'The Challenge',
          description: 'A crypto hedge fund needed to compete with MEV bots and high-frequency traders while managing risk across highly volatile markets.',
          image: '/assets/technicalPortfolio/aiTrading.jpg'
        },
        {
          type: 'solution',
          title: 'Our Solution',
          description: 'We built a multi-agent AI system that analyses market data, generates signals, and executes trades with sophisticated, automated risk management.',
          solutionItems: [
            { label: 'Architecture', text: 'Orchestrated specialised agents for data collection, signal generation, risk assessment, and execution.' },
            { label: 'MEV Protection', text: 'Implemented Flashbots integration and commit-reveal schemes to prevent front-running.' },
            { label: 'Risk Management', text: 'Built-in algorithms for position sizing, stop-loss, and portfolio rebalancing.' }
          ]
        },
        {
          type: 'impact',
          title: 'Impact',
          impacts: [
            { metric: '2.8', description: 'Achieved Sharpe ratio in live trading.' },
            { metric: '12%', description: 'maximum drawdown maintained during significant market stress.' },
            { metric: '$5M AUM', description: 'Grew within the first 6 months.' }
          ]
        }
      ]
    }
  ]
}
 
  ]

  export default sectionsData