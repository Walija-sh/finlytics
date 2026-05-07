export const roadmapData = [
  {
    id: 1,
    title: "Assessment & Quick Wins",
    weeks: "(Weeks 1-2)",
    icon: "/assets/1.png",
    sections: [
      {
        title: "Activities",
        content: "We conduct stakeholder interviews across business, risk, and technology to map critical decision pathways and pain points. This is followed by a rapid assessment of your current data landscape and architecture."
      },
      {
        title: "Deliverable",
        content: "A high-impact dashboard (e.g., automating a critical Excel report) is delivered to prove value immediately. A prioritised 90-day execution roadmap is presented, outlining the path to the target state."
      }
    ]
  },
  {
    id: 2,
    title: "Finlytics Hub\nFoundation Building",
    weeks: "(Weeks 3-6)",
    icon: "/assets/2.png",
    sections: [
      {
        title: "Assessment & Quick Wins",
        content: "We implement the core data warehouse schema (e.g., star schema), build robust data pipelines for 2-3 critical sources, and deploy an automated data quality rules engine."
      },
      {
        title: "Activities",
        content: "A single source of truth for the initial scope is established. The core semantic layer is live, providing a governed foundation for business intelligence."
      }
    ]
  },
  {
    id: 3,
    title: "Finlytics Hub\nScale & Adoption",
    weeks: "(Weeks 7-12)",
    icon: "/assets/3.png",
    sections: [
      {
        title: "Assessment & Quick Wins",
        content: "We accelerate the onboarding of more data sources, enable self-service analytics for pilot user groups with comprehensive training, and execute a change management programme to drive adoption."
      },
      {
        title: "Activities",
        content: "The platform is scaled, key users are trained and empowered, and the solution is demonstrably adopted by the business to make decisions."
      }
    ]
  }
];

export const practicalGuideData = {
  bgColor: 'bg-primary',
  header: {
    title: 'Practical Guide to Data Privacy Compliance',
    description: 'Data privacy regulations (like GDPR, PDPL, NDMO) are a baseline requirement for managing data. Our practical compliance framework is built on four key pillars that we embed into your data architecture:'
  }, primary:false,
  cards: [
    {
      id: 1,
      icon: '/assets/insights/lawfulBasics.svg',
      title: 'Lawful Basis',
      description: 'Establishing and documenting a lawful basis for all data processing activities.'
    },
    {
      id: 2,
      icon: '/assets/insights/dataSubjectRights.svg',
      title: 'Data Subject Rights',
      description: 'Building automated, auditable workflows to handle data access, deletion, and portability requests within regulatory timelines.'
    },
    {
      id: 3,
      icon: '/assets/insights/privacyByDesign.svg',
      title: 'Privacy by Design',
      description: 'Embedding principles like data minimisation and purpose limitation directly into your data models and pipelines.'
    },
    {
      id: 4,
      icon: '/assets/insights/robustSecurity.svg',
      title: 'Robust Security',
      description: 'Implementing technical measures such as encryption, dynamic data masking, and attribute-based access controls.'
    }
  ]
};

export const eventSourcingData = {
  bgColor: 'bg-blue-2',
  header: {
    title: 'Architecting for Real-Time Decisions with Event Sourcing',
    description: 'The principle of capturing every business event allows for both real-time insights and perfect auditability. For use cases like fraud detection or instant credit approvals, we implement event sourcing.'
  }, primary:false,
  optionalSubtext: 'Key architectural components we implement:',
  cards: [
    {
      id: 1,
      icon: '/assets/insights/immutableEventLogs.svg',
      title: 'Immutable Event Logs',
      description: 'We design immutable events for core business domains (e.g., `TransactionOccurred`, `CreditApplicationSubmitted`), creating a permanent, auditable record of every action.'
    },
    {
      id: 2,
      icon: '/assets/insights/scalableStreamProcessing.svg',
      title: 'Scalable Stream Processing',
      description: 'We use tools like Kafka or Kinesis with appropriate stream processing patterns (e.g., Flink, Spark Streaming) to handle thousands of events per second, feeding real-time feature stores and decision engines.'
    },
    {
      id: 3,
      icon: '/assets/insights/timeTravelQueries.svg',
      title: 'Time-Travel Queries',
      description: 'We enable simplified auditing and debugging by building the capability to reconstruct the state of any entity (e.g., a customer\'s risk profile) at any point in time—a critical requirement for regulatory inquiries.'
    }
  ]
};
export const featureStoreData = {
  bgColor: 'bg-primary',
  header: {
    title: 'Our Feature Store Implementation Checklist',
    description: 'The principle behind a feature store is to decouple feature generation from model training, ensuring consistency between training and serving. Our implementation checklist ensures it gets used.'
  }, primary:false,
  optionalSubtext: null, 
  cards: [
    {
      id: 1,
      icon: '/assets/insights/preImplementation.svg',
      title: 'Pre-Implementation',
      description: 'We ensure use cases are prioritised, features are defined in a shared registry, and the team is trained on core concepts before any technology is chosen.'
    },
    {
      id: 2,
      icon: '/assets/insights/technicalSetup.svg',
      title: 'Technical Setup',
      description: 'We configure the online store (e.g., Redis) for low-latency serving and the offline store (e.g., Parquet/Delta Lake) for model training, along with monitoring and CI/CD pipelines for feature backfills and updates.'
    },
    {
      id: 3,
      icon: '/assets/insights/productionReadiness.svg',
      title: 'Production Readiness',
      description: 'The system must pass performance benchmarks (e.g., P99 latency <50ms) and automated failover procedure tests before going live.'
    }
  ]
};
export const creditDecisioningData = {
  bgColor: 'bg-blue-2',
  header: {
    title: 'The Future of Credit Decisioning is Dynamic',
    description: 'Credit scoring is evolving from static, periodic models to dynamic, real-time contextual decisions.'
  },
  optionalSubtext: 'Key trends we help clients implement include:',
  optionalIconWidth:'w-[6.827122921615202%]',
  primary:true,
  cards: [
    {
      id: 1,
      icon: '/assets/insights/continuousLearningModels.svg',
      title: 'Continuous Learning Models',
      description: 'Building the MLOps pipelines required to safely and automatically retrain models on new data, allowing them to adapt to changing market conditions.'
    },
    {
      id: 2,
      icon: '/assets/insights/alternativeDataIntegration.svg',
      title: 'Alternative Data Integration',
      description: 'Moving beyond traditional bureau data to incorporate signals from behavioural biometrics, network graph features, and real-time transaction patterns.'
    },
    {
      id: 3,
      icon: '/assets/insights/explainableAI.svg',
      title: 'Explainable AI (XAI)',
      description: 'Implementing techniques like SHAP (SHapley Additive exPlanations) to ensure that even complex models can be explained to customers and regulators, a growing legal requirement.'
    }
  ]
};

export const bestPracticesData =  [
    {
      id: 1,
      icon: '/assets/insights/testEverything.svg',
      title: 'Test Everything',
      description: 'We combine generic tests (e.g., `not_null`, `unique`) with singular, custom tests that encode critical business logic (e.g., `assert_total_revenue_is_positive`), ensuring data is not just present, but correct.'
    },
    {
      id: 2,
      icon: '/assets/insights/documentEverything.svg',
      title: 'Document Everything',
      description: 'We enforce 100% documentation coverage for all models and columns, which feeds a living, searchable data catalogue for the entire organisation.'
    },
    {
      id: 3,
      icon: '/assets/insights/favourModularity.svg',
      title: 'Favour Modularity',
      description: 'We break down complex business logic into smaller, reusable intermediate models. This improves readability, speeds up development, and makes testing more granular and effective.'
    }
  ]

  export const modelsData = [
  {
    id: 1,
    prefix: "├── ",
    name: "staging/",
    description: "# 1:1 with source, for light cleaning, renaming, and type casting. Provides a durable, idempotent base."
  },
  {
    id: 2,
    prefix: "├── ",
    name: "intermediate/",
    description: "# Complex business logic is modularised here. Not exposed to end users."
  },
  {
    id: 3,
    prefix: "└── ",
    name: "marts/",
    description: "# Final, aggregated models for consumption by BI tools. These are the \"products\" of the data team."
  }
]

export const powerBiData =  [
    {
      id: 1,
      title: 'Use measures, not calculated columns',
      description: 'Measures calculate at query time on aggregated data; calculated columns bloat model size by storing values for every row, slowing down performance.'
    },
    {
      id: 2,
      title: 'Embrace the star schema',
      description: 'It is the most performant structure for BI tools, avoiding the complex, multi-hop joins of normalised schemas.'
    },
    {
      id: 3,
      title: 'Use incremental refresh',
      description: 'Configure incremental refresh for large fact tables to minimise refresh times and resource consumption.'
    },
    {
      id: 4,
      title: 'Enforce query folding',
      description: 'Where possible, push transformations back to the source database during Power Query steps.'
    },
    {
      id: 5,
      title: 'Create aggregation tables',
      description: 'Dramatically speed up high-level dashboards by pre-calculating summary-level data.'
    },
    {
      id: 6,
      title: 'Implement RLS via roles',
      description: 'Use the built-in Row-Level Security engine, which is more secure and performant than applying complex DAX filters in each measure.'
    },
    {
      id: 7,
      title: 'Limit visuals per page',
      description: 'Each visual fires at least one query. We aim for fewer than 8 visuals to ensure a responsive user experience.'
    },
    {
      id: 8,
      title: 'Default to Import mode',
      description: 'Use DirectQuery sparingly and only when absolutely necessary for near real-time data needs, as it is significantly less performant.'
    },
    {
      id: 9,
      title: 'Use variables in complex DAX',
      description: 'Store intermediate calculations in variables to improve readability, debugging, and query performance.'
    },
    {
      id: 10,
      title: 'Profile performance with DAX Studio',
      description: 'We don\'t guess where bottlenecks are; we use external tools to analyse query plans and identify the root cause of slow performance.'
    }
  ]

  export const  modelToProductionData= [
    {
      id: 1,
      icon: '/assets/1.png',
      title: 'Data & Feature Foundation',
      subtitle: '(Weeks 1-2)',
      description: 'A systematic process to develop hundreds of predictive features from traditional and alternative data sources, creating the rich signal needed for modern modelling.'
    },
    {
      id: 2,
      icon: '/assets/2.png',
      title: 'Rigorous Model Development & Validation',
      subtitle: '(Weeks 3-4)',
      description: 'We train multiple algorithms (from logistic regression for baseline explainability to XGBoost for performance) and conduct rigorous statistical, business, and regulatory validation.'
    },
    {
      id: 3,
      icon: '/assets/3.png',
      title: 'Compliant Deployment & A/B Testing',
      subtitle: '(Weeks 5-6)',
      description: 'We deploy models as containerised APIs within a robust champion/challenger framework that allows for live A/B testing to prove performance uplift before a full rollout.'
    },
    {
      id: 4,
      icon: '/assets/4.png',
      title: 'Continuous Monitoring & Governance',
      subtitle: '(Weeks 7-8)',
      description: 'We implement a critical monitoring setup for data drift, concept drift, and silent model failures to ensure performance never degrades unnoticed and results are auditable.'
    }
  ]

  export const creditBureauData = [
    {
      id: 1,
      title: 'It\'s a data-sharing problem, not a tech problem',
      description: 'The foundation of a successful bureau is a fair and valuable data reciprocity model that incentivises all participants to contribute high-quality data.'
    },
    {
      id: 2,
      title: 'Data quality is non-negotiable',
      description: 'We implement an automated DQ framework with over 200 validation rules from day one to achieve and maintain a 95%+ data quality index. Trust in the data is paramount.'
    },
    {
      id: 3,
      title: 'Iterate from compliance to prediction',
      description: 'The journey starts with delivering essential regulatory and compliance reporting. Once the data foundation is trusted, we progress to simpler predictive models, and finally to high-performance ML scores (Gini >0.85).'
    }
  ]