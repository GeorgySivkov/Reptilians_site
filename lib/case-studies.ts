export type CaseStudyStatus = "Idea" | "Prototype" | "MVP" | "Live" | "Paused"
export type Industry =
  | "Enterprise"
  | "FinTech"
  | "Healthcare"
  | "Oil & Gas"
  | "Life Sciences"
  | "AdTech"
  | "Web3"
  | "Automotive"
  | "Logistics"
  | "Energy"
  | "Startup"
export type EngagementModel = "Fixed" | "T&M" | "Dedicated"

export const statusConfig: Record<CaseStudyStatus, { label: string; color: string }> = {
  Idea: { label: "Idea", color: "bg-purple-500/10 text-purple-400 border-purple-500/30" },
  Prototype: { label: "Prototype", color: "bg-amber-500/10 text-amber-400 border-amber-500/30" },
  MVP: { label: "MVP", color: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
  Live: { label: "Live", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" },
  Paused: { label: "Paused", color: "bg-slate-500/10 text-slate-400 border-slate-500/30" },
}

export const industryConfig: Record<Industry, { label: string; color: string }> = {
  Enterprise: { label: "Enterprise", color: "text-violet-400" },
  FinTech: { label: "FinTech", color: "text-emerald-400" },
  Healthcare: { label: "Healthcare", color: "text-rose-400" },
  "Oil & Gas": { label: "Oil & Gas", color: "text-amber-400" },
  "Life Sciences": { label: "Life Sciences", color: "text-cyan-400" },
  AdTech: { label: "AdTech", color: "text-pink-400" },
  Web3: { label: "Web3", color: "text-indigo-400" },
  Automotive: { label: "Automotive", color: "text-orange-400" },
  Logistics: { label: "Logistics", color: "text-blue-400" },
  Startup: { label: "Startup", color: "text-rose-300" },
  Energy: { label: "Energy", color: "text-yellow-400" },
}

export interface CaseStudy {
  name: string
  slug: string
  status: CaseStudyStatus
  industry: Industry
  model: EngagementModel
  tagline: string
  useCase: string
  audience: string
  summary: string
  tags: string[]
  stack: string[]
  icon: string
  screenshots: string[]
  sections: {
    client: string
    problem: string
    solution: string
    whatWeDid: string[]
    outcome: string
    whatsNext: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    name: "Enterprise HR Management Platform",
    slug: "enterprise-hr-management",
    status: "Live",
    industry: "Enterprise",
    model: "Dedicated",
    tagline: "Centralized HR solution for medium and large organizations",
    useCase: "Employee lifecycle management, performance reviews, internal operations",
    audience: "HR departments, people operations teams, enterprise administrators",
    summary:
      "Comprehensive Human Resources Management System designed to support employee lifecycle management, performance processes, and internal operations. The platform serves as a centralized HR solution for medium and large organizations, enabling streamlined people management and operational efficiency.",
    tags: ["hr", "enterprise", "workflow", "performance", "onboarding"],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Elasticsearch", "AWS", "Docker"],
    icon: "Users",
    screenshots: [
      "/screens/enterprise-hr-management-1.svg",
      "/screens/enterprise-hr-management-2.svg",
      "/screens/enterprise-hr-management-3.svg",
      "/screens/enterprise-hr-management-4.svg",
    ],
    sections: {
      client: "Enterprise Organization (NDA)",
      problem:
        "The organization managed employee data across multiple disconnected systems, leading to data inconsistencies, compliance risks, and inefficient HR processes. Performance reviews were paper-based, onboarding took weeks, and HR teams spent excessive time on manual data entry instead of strategic initiatives.",
      solution:
        "We built a unified HR platform that centralizes all employee data, automates onboarding workflows, and digitizes performance management. The system includes self-service portals for employees, approval workflows for managers, and comprehensive reporting for leadership.",
      whatWeDid: [
        "Employee database with full lifecycle tracking",
        "Automated onboarding and offboarding workflows",
        "360-degree performance review system",
        "Time-off management and approval chains",
        "Organizational chart visualization",
        "Compliance reporting and audit trails",
        "Role-based access control",
        "Integration with payroll systems",
      ],
      outcome:
        "Reduced onboarding time by 60%, eliminated data inconsistencies across departments, and enabled HR team to focus on strategic initiatives rather than administrative tasks. Employee self-service reduced HR ticket volume by 40%.",
      whatsNext:
        "AI-powered talent analytics, predictive attrition modeling, and integration with learning management systems.",
    },
  },
  {
    name: "Identity & Access Management Platform",
    slug: "identity-access-management",
    status: "Live",
    industry: "Enterprise",
    model: "Dedicated",
    tagline: "Scalable authentication for mission-critical enterprise systems",
    useCase: "User identity management, access control, compliance-ready authentication",
    audience: "Security teams, IT administrators, enterprise architects",
    summary:
      "Scalable authentication and authorization platform built to support large enterprise environments. The solution provides secure user identity management, access control, and compliance-ready authentication services for high-traffic, mission-critical systems.",
    tags: ["security", "auth", "enterprise", "sso", "compliance"],
    stack: ["Go", "PostgreSQL", "Redis", "Kafka", "Kubernetes", "Vault", "OIDC", "SAML"],
    icon: "Shield",
    screenshots: [
      "/screens/identity-access-management-1.svg",
      "/screens/identity-access-management-2.svg",
      "/screens/identity-access-management-3.svg",
      "/screens/identity-access-management-4.svg",
    ],
    sections: {
      client: "Large Enterprise (NDA)",
      problem:
        "The enterprise had fragmented identity systems across dozens of applications, creating security vulnerabilities and poor user experience. Password fatigue led to weak credentials, and the lack of centralized access control made compliance audits time-consuming and error-prone.",
      solution:
        "We designed and implemented a centralized IAM platform supporting SSO, MFA, and fine-grained access control. The system handles millions of authentications daily while maintaining sub-100ms response times and full audit logging for compliance.",
      whatWeDid: [
        "Single Sign-On (SSO) with OIDC and SAML support",
        "Multi-factor authentication with multiple providers",
        "Role-based and attribute-based access control",
        "Self-service password and profile management",
        "Real-time security event monitoring",
        "Compliance reporting (SOC2, GDPR)",
        "API gateway integration",
        "Directory sync with Active Directory and LDAP",
      ],
      outcome:
        "Consolidated identity management for 50+ applications, reduced authentication-related support tickets by 70%, and achieved full compliance audit pass on first attempt. User satisfaction scores improved significantly with simplified login experience.",
      whatsNext:
        "Passwordless authentication rollout, behavioral analytics for anomaly detection, and expansion to B2B customer identity management.",
    },
  },
  {
    name: "Scientific Desktop Application for Geology",
    slug: "geology-desktop-application",
    status: "Live",
    industry: "Oil & Gas",
    model: "T&M",
    tagline: "Advanced subsurface data visualization for exploration",
    useCase: "Scientific analysis, data visualization, subsurface interpretation",
    audience: "Geologists, exploration teams, research scientists",
    summary:
      "Specialized desktop software for geologists in the oil & gas sector, supporting scientific analysis and data visualization. The application enables advanced subsurface data interpretation and supports technical workflows in exploration and research environments.",
    tags: ["desktop", "scientific", "visualization", "geology", "oil-gas"],
    stack: ["C++", "Qt", "OpenGL", "Python", "SQLite", "VTK", "GDAL", "HDF5"],
    icon: "Mountain",
    screenshots: [
      "/screens/geology-app-1.png",
      "/screens/geology-app-2.png",
      "/screens/geology-app-3.png",
      "/screens/geology-app-4.png",
    ],
    sections: {
      client: "Oil & Gas Exploration Company",
      problem:
        "Geologists relied on legacy software with limited visualization capabilities and poor performance on large datasets. The existing tools couldn't handle modern 3D seismic data volumes, and workflows required manual data conversion between incompatible formats.",
      solution:
        "We built a high-performance desktop application with GPU-accelerated 3D visualization, support for industry-standard data formats, and integrated Python scripting for custom analysis workflows.",
      whatWeDid: [
        "GPU-accelerated 3D seismic visualization",
        "Well log analysis and correlation tools",
        "Cross-section and map generation",
        "Support for SEG-Y, LAS, and DLIS formats",
        "Python scripting environment for custom workflows",
        "Multi-well comparison dashboards",
        "Export to industry-standard formats",
        "Offline-first architecture for field use",
      ],
      outcome:
        "Reduced interpretation time by 40% compared to legacy tools, enabled analysis of datasets 10x larger than before, and provided geologists with modern visualization capabilities that improved exploration decision-making.",
      whatsNext:
        "Machine learning integration for automated horizon picking, cloud sync for team collaboration, and VR visualization mode for immersive data exploration.",
    },
  },
  {
    name: "Life Sciences Research Platform",
    slug: "life-sciences-platform",
    status: "Live",
    industry: "Life Sciences",
    model: "T&M",
    tagline: "Digital platform for laboratory operations and research workflows",
    useCase: "Biological asset management, laboratory automation, research workflows",
    audience: "Research scientists, lab managers, biotech operations teams",
    summary:
      "Digital platforms supporting life science research operations. These systems enable biological asset management, laboratory process automation, and streamlined research workflows for scientific organizations.",
    tags: ["biotech", "laboratory", "research", "lims", "automation"],
    stack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "TimescaleDB", "RabbitMQ", "AWS"],
    icon: "Microscope",
    screenshots: [
      "/screens/life-sciences-platform-1.png",
      "/screens/life-sciences-platform-2.png",
      "/screens/life-sciences-platform-3.png",
      "/screens/life-sciences-platform-4.png",
    ],
    sections: {
      client: "Biotech Research Organization",
      problem:
        "Research teams tracked experiments in spreadsheets and paper notebooks, making it difficult to reproduce results or trace sample lineage. Equipment scheduling conflicts wasted researcher time, and compliance with research protocols was difficult to verify.",
      solution:
        "We developed an integrated laboratory information management system (LIMS) with sample tracking, experiment management, equipment scheduling, and protocol compliance verification.",
      whatWeDid: [
        "Sample and inventory management with barcode integration",
        "Electronic lab notebook with protocol templates",
        "Equipment scheduling and maintenance tracking",
        "Experiment workflow automation",
        "Chain of custody and audit trails",
        "Integration with laboratory instruments",
        "Compliance reporting for GLP/GMP",
        "Data visualization and export tools",
      ],
      outcome:
        "Achieved full traceability for all samples, reduced equipment scheduling conflicts by 80%, and enabled researchers to spend more time on science rather than administrative tasks. Audit preparation time reduced from weeks to hours.",
      whatsNext:
        "AI-assisted experiment design, integration with external biobanks, and expansion to support clinical trial sample management.",
    },
  },
  {
    name: "Digital Advertising Management Platform",
    slug: "advertising-management-platform",
    status: "Live",
    industry: "AdTech",
    model: "Dedicated",
    tagline: "Campaign optimization and performance analytics for Google Ads",
    useCase: "Campaign management, performance analytics, automation tools",
    audience: "Marketing teams, performance marketers, agency managers",
    summary:
      "Custom-built platform for managing and optimizing Google Ads campaigns. The solution provides campaign oversight, performance analytics, and automation tools to improve marketing efficiency and return on advertising spend.",
    tags: ["advertising", "analytics", "automation", "google-ads", "marketing"],
    stack: ["Next.js", "TypeScript", "Python", "ClickHouse", "Redis", "Google Ads API", "BigQuery", "GCP"],
    icon: "Megaphone",
    screenshots: [
      "/screens/advertising-management-platform-1.png",
      "/screens/advertising-management-platform-2.png",
      "/screens/advertising-management-platform-3.png",
      "/screens/advertising-management-platform-4.png",
    ],
    sections: {
      client: "Digital Marketing Agency",
      problem:
        "Managing hundreds of Google Ads accounts manually was time-consuming and error-prone. Performance anomalies went undetected for days, budget pacing was inconsistent, and generating client reports required hours of manual data compilation.",
      solution:
        "We built a unified platform that aggregates data from all managed accounts, provides real-time alerting for performance anomalies, automates routine optimizations, and generates client-ready reports automatically.",
      whatWeDid: [
        "Multi-account dashboard with real-time metrics",
        "Automated bidding rule engine",
        "Performance anomaly detection and alerting",
        "Budget pacing and forecast tools",
        "A/B test management and analysis",
        "Automated report generation",
        "Competitor monitoring integration",
        "Bulk campaign management tools",
      ],
      outcome:
        "Reduced manual campaign management time by 60%, detected and resolved performance issues 3x faster, and improved overall ROAS by 25% through automated optimizations. Client reporting time reduced from hours to minutes.",
      whatsNext:
        "Expansion to Meta and TikTok ads, AI-powered creative recommendations, and predictive budget allocation models.",
    },
  },
  {
    name: "Telehealth & Mental Health Platform",
    slug: "telehealth-mental-health",
    status: "Live",
    industry: "Healthcare",
    model: "T&M",
    tagline: "Secure online consultations connecting psychologists with clients",
    useCase: "Appointment scheduling, video sessions, practice management",
    audience: "Psychologists, therapists, mental health clinics, patients",
    summary:
      "End-to-end digital platform connecting psychologists with clients through secure online consultations. The system supports appointment scheduling, video sessions, and practice management, enabling remote mental health services.",
    tags: ["telehealth", "mental-health", "video", "scheduling", "hipaa"],
    stack: ["React", "Node.js", "WebRTC", "PostgreSQL", "Redis", "Twilio", "Stripe", "AWS"],
    icon: "Heart",
    screenshots: [
      "/screens/telehealth-mental-health-1.png",
      "/screens/telehealth-mental-health-2.png",
      "/screens/telehealth-mental-health-3.png",
      "/screens/telehealth-mental-health-4.png",
    ],
    sections: {
      client: "Mental Health Services Provider",
      problem:
        "Traditional in-person therapy created access barriers for many patients. Therapists lacked tools for remote consultations, scheduling was handled via phone calls, and patient records were stored in disconnected systems without proper security controls.",
      solution:
        "We developed a HIPAA-compliant telehealth platform with integrated video consultations, online scheduling, secure messaging, and practice management tools designed specifically for mental health providers.",
      whatWeDid: [
        "End-to-end encrypted video consultations",
        "Online appointment booking with therapist availability",
        "Secure patient messaging portal",
        "Digital intake forms and consent management",
        "Session notes and treatment planning tools",
        "Integrated payment processing",
        "Automated appointment reminders",
        "HIPAA-compliant data storage and audit logs",
      ],
      outcome:
        "Enabled therapists to serve 40% more patients by eliminating travel time, improved patient attendance rates by 30% through automated reminders, and achieved full HIPAA compliance certification.",
      whatsNext:
        "Group therapy sessions, AI-powered session summaries, and integration with electronic health records systems.",
    },
  },
  {
    name: "HR Platform with Gamification",
    slug: "hr-gamification-platform",
    status: "Live",
    industry: "Enterprise",
    model: "Dedicated",
    tagline: "Transform employee engagement through gamified rewards",
    useCase: "Employee motivation, recognition programs, engagement analytics",
    audience: "HR leaders, employee experience teams, company culture managers",
    summary:
      "A strategic HR technology platform that transforms employee motivation. It leverages gamification, a points-based reward economy, and integrated analytics to directly increase retention, boost productivity, and reduce recruitment costs by fostering a measurable culture of engagement.",
    tags: ["gamification", "hr", "engagement", "rewards", "analytics"],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Stripe", "Vercel", "Mixpanel"],
    icon: "Trophy",
    screenshots: [
      "/screens/hr-gamification-platform-1.png",
      "/screens/hr-gamification-platform-2.png",
      "/screens/hr-gamification-platform-3.png",
      "/screens/hr-gamification-platform-4.png",
    ],
    sections: {
      client: "Enterprise HR Tech Company",
      problem:
        "Employee engagement was declining, leading to increased turnover and recruitment costs. Traditional recognition programs felt impersonal and failed to motivate the workforce. HR lacked data to understand engagement drivers and measure program effectiveness.",
      solution:
        "We built a gamification platform with a points-based economy, achievement badges, team challenges, and a rewards marketplace. Integrated analytics provide insights into engagement patterns and program ROI.",
      whatWeDid: [
        "Points-based recognition and rewards system",
        "Achievement badges and leaderboards",
        "Team challenges and competitions",
        "Rewards marketplace with gift cards and perks",
        "Manager recognition tools and budgets",
        "Engagement analytics dashboard",
        "Integration with Slack and Microsoft Teams",
        "Mobile app for on-the-go recognition",
      ],
      outcome:
        "Increased employee engagement scores by 35%, reduced voluntary turnover by 20%, and achieved 85% monthly active usage across the organization. ROI demonstrated through measurable retention improvements.",
      whatsNext:
        "AI-powered recognition suggestions, peer feedback integration, and expansion of rewards marketplace partners.",
    },
  },
  {
    name: "Green Web3 Infrastructure Platform",
    slug: "green-web3-platform",
    status: "Live",
    industry: "Web3",
    model: "Dedicated",
    tagline: "Sustainable NFT infrastructure for mainstream adoption",
    useCase: "NFT minting, digital asset management, brand tokenization",
    audience: "Brands, creators, gaming studios, digital artists",
    summary:
      "A pioneer in green and utility-driven Web3 infrastructure. This NFT-optimized blockchain enables brands and creators to launch sustainable digital assets with advanced features, unlocking next-generation use cases in gaming, digital art, and tokenized commerce for mainstream audiences.",
    tags: ["web3", "nft", "blockchain", "sustainability", "gaming"],
    stack: ["Rust", "Solidity", "TypeScript", "Next.js", "PostgreSQL", "IPFS", "The Graph", "AWS"],
    icon: "Leaf",
    screenshots: [
      "/screens/green-web3-platform-1.png",
      "/screens/green-web3-platform-2.png",
      "/screens/green-web3-platform-3.png",
      "/screens/green-web3-platform-4.png",
    ],
    sections: {
      client: "Web3 Infrastructure Company",
      problem:
        "Existing blockchain platforms had high environmental impact and complex user experiences that limited mainstream adoption. Brands wanted to explore NFTs but were concerned about sustainability and the technical complexity of Web3 integration.",
      solution:
        "We developed energy-efficient blockchain infrastructure with a focus on user experience, enabling brands to launch NFT programs without requiring users to understand crypto wallets or gas fees.",
      whatWeDid: [
        "Energy-efficient proof-of-stake consensus",
        "No-code NFT collection launcher",
        "Custodial wallet system for mainstream users",
        "Fiat on-ramp and credit card payments",
        "White-label marketplace solution",
        "Gaming SDK for Unity and Unreal",
        "Carbon offset integration and reporting",
        "Enterprise API for brand integrations",
      ],
      outcome:
        "Enabled launch of 100+ brand NFT programs with 99.9% lower carbon footprint than Ethereum mainnet. Achieved mainstream user adoption with credit card purchase support and simplified wallet experience.",
      whatsNext:
        "Cross-chain bridging, dynamic NFT features for gaming, and expansion of brand partnership program.",
    },
  },
  {
    name: "Enterprise Asset Management Platform",
    slug: "enterprise-asset-management",
    status: "Live",
    industry: "Enterprise",
    model: "Dedicated",
    tagline: "ISO 55000 compliant lifecycle management for critical assets",
    useCase: "Asset lifecycle tracking, maintenance optimization, compliance management",
    audience: "Asset managers, maintenance teams, operations directors, compliance officers",
    summary:
      "An industry-leading EAM (Enterprise Asset Management) solution that optimizes the total lifecycle of critical physical assets. It drives operational excellence by maximizing equipment reliability, ensuring compliance with global standards like ISO 55000, and significantly reducing maintenance and capital costs.",
    tags: ["eam", "iso-55000", "maintenance", "compliance", "asset-management"],
    stack: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Elasticsearch", "Kafka", "Azure"],
    icon: "Settings",
    screenshots: [
      "/screens/enterprise-asset-management-1.png",
      "/screens/enterprise-asset-management-2.png",
      "/screens/enterprise-asset-management-3.png",
      "/screens/enterprise-asset-management-4.png",
    ],
    sections: {
      client: "Industrial Enterprise (NDA)",
      problem:
        "The organization managed thousands of critical assets with spreadsheets and legacy systems, leading to unplanned downtime, compliance gaps, and excessive maintenance costs. Asset data was scattered across departments with no single source of truth.",
      solution:
        "We implemented a comprehensive EAM platform with asset registry, predictive maintenance, work order management, and full ISO 55000 compliance support, providing complete visibility into asset health and lifecycle costs.",
      whatWeDid: [
        "Centralized asset registry with hierarchy management",
        "Preventive and predictive maintenance scheduling",
        "Work order management with mobile support",
        "Spare parts inventory and procurement",
        "ISO 55000 compliance reporting",
        "Asset condition monitoring and IoT integration",
        "Total cost of ownership analytics",
        "Integration with ERP and financial systems",
      ],
      outcome:
        "Reduced unplanned downtime by 45%, decreased maintenance costs by 25%, and achieved ISO 55000 certification. Complete asset visibility enabled data-driven capital investment decisions.",
      whatsNext:
        "AI-powered failure prediction, digital twin integration, and expansion to additional facility locations.",
    },
  },
  {
    name: "Automotive Digital Marketplace",
    slug: "automotive-marketplace",
    status: "Live",
    industry: "Automotive",
    model: "T&M",
    tagline: "Nationwide platform for vehicle and parts transactions",
    useCase: "Vehicle listings, secure transactions, parts marketplace",
    audience: "Car buyers and sellers, dealers, parts suppliers, automotive enthusiasts",
    summary:
      "A high-traffic, nationwide online marketplace that connects buyers and sellers across the entire vehicle ecosystem. The platform facilitates secure transactions for cars, motorcycles, specialty vehicles, and parts, creating a comprehensive digital hub for the automotive market.",
    tags: ["marketplace", "automotive", "e-commerce", "listings", "payments"],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Elasticsearch", "Redis", "Stripe", "AWS"],
    icon: "Car",
    screenshots: [
      "/screens/automotive-marketplace-1.png",
      "/screens/automotive-marketplace-2.png",
      "/screens/automotive-marketplace-3.png",
      "/screens/automotive-marketplace-4.png",
    ],
    sections: {
      client: "Automotive Marketplace Platform",
      problem:
        "The automotive market was fragmented across classified sites, dealer networks, and social media groups. Buyers struggled to find vehicles, verify seller legitimacy, and complete secure transactions. Sellers lacked tools to reach qualified buyers efficiently.",
      solution:
        "We built a comprehensive marketplace platform with advanced search, seller verification, secure payment escrow, and integrated financing options, creating a trusted environment for automotive transactions.",
      whatWeDid: [
        "Advanced vehicle search with 50+ filter options",
        "Seller verification and reputation system",
        "Secure payment escrow for transactions",
        "Vehicle history report integration",
        "Dealer inventory management tools",
        "Parts marketplace with fitment data",
        "Integrated financing pre-approval",
        "Mobile app for iOS and Android",
      ],
      outcome:
        "Processed over $500M in annual transaction volume, achieved 95% seller verification rate, and reduced fraud incidents to near zero through escrow and verification systems.",
      whatsNext:
        "AI-powered price recommendations, virtual vehicle tours, and expansion to commercial vehicle segment.",
    },
  },
  {
    name: "Logistics CRM Portal",
    slug: "logistics-crm-portal",
    status: "Live",
    industry: "Logistics",
    model: "Fixed",
    tagline: "Client portal for full truckload shipping management",
    useCase: "Freight quoting, shipment tracking, customer self-service",
    audience: "Shipping customers, logistics coordinators, freight brokers",
    summary:
      "A client-facing portal for a premier logistics provider specializing in reliable Full Truckload (FTL) shipping. The platform streamlines the customer journey, from instant freight quoting to shipment management, ensuring transparent and efficient transportation solutions.",
    tags: ["logistics", "crm", "shipping", "portal", "tracking"],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Google Maps API", "Twilio", "AWS"],
    icon: "Truck",
    screenshots: [
      "/screens/logistics-crm-portal-1.png",
      "/screens/logistics-crm-portal-2.png",
      "/screens/logistics-crm-portal-3.png",
      "/screens/logistics-crm-portal-4.png",
    ],
    sections: {
      client: "FTL Logistics Provider",
      problem:
        "Customers had to call or email for quotes, track shipments through multiple systems, and lacked visibility into delivery status. The manual process was slow, error-prone, and created a poor customer experience compared to modern logistics platforms.",
      solution:
        "We developed a self-service customer portal with instant quoting, real-time shipment tracking, document management, and integrated communication tools, dramatically improving customer experience and operational efficiency.",
      whatWeDid: [
        "Instant freight quote calculator",
        "Real-time shipment tracking with map view",
        "Document upload and management",
        "Booking and scheduling system",
        "Invoice and payment history",
        "SMS and email notifications",
        "Customer analytics dashboard",
        "Integration with TMS backend",
      ],
      outcome:
        "Reduced quote-to-book time from hours to minutes, decreased customer service calls by 50%, and improved customer satisfaction scores by 40%. Self-service adoption reached 75% within first year.",
      whatsNext:
        "Predictive ETAs using machine learning, automated carrier matching, and expansion to LTL services.",
    },
  },
  {
    name: "Supply Chain Mobile App",
    slug: "supply-chain-mobile-app",
    status: "Live",
    industry: "Energy",
    model: "Fixed",
    tagline: "Digital delivery confirmation for energy supply chain",
    useCase: "Delivery receipt digitization, supply chain traceability, mobile workflows",
    audience: "Suppliers, delivery drivers, supply chain managers, procurement teams",
    summary:
      "A specialized mobile application that digitizes and accelerates the supply chain for a major energy corporation. It enables suppliers to instantly submit and confirm Delivery Receipt Notes (DRN) upon product delivery, enhancing accuracy, speed, and traceability in critical logistics operations.",
    tags: ["mobile", "supply-chain", "energy", "logistics", "digitization"],
    stack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "AWS S3", "Firebase", "SAP Integration"],
    icon: "Package",
    screenshots: [
      "/screens/supply-chain-mobile-app-1.png",
      "/screens/supply-chain-mobile-app-2.png",
    ],
    sections: {
      client: "Major Energy Corporation",
      problem:
        "Paper-based delivery receipts caused delays in payment processing, disputes over delivery confirmation, and lack of real-time visibility into supply chain status. Manual data entry into ERP systems was time-consuming and error-prone.",
      solution:
        "We built a mobile app that enables suppliers to capture delivery confirmation digitally with photos, signatures, and GPS location, automatically syncing with the enterprise ERP system for immediate processing.",
      whatWeDid: [
        "Digital delivery receipt capture with photos",
        "Electronic signature collection",
        "GPS location verification",
        "Offline-first architecture for remote locations",
        "Barcode and QR code scanning",
        "Real-time sync with SAP",
        "Delivery discrepancy reporting",
        "Push notifications for delivery assignments",
      ],
      outcome:
        "Reduced delivery confirmation time from days to minutes, eliminated paper-based disputes, and accelerated supplier payment cycles by 60%. Full traceability achieved for all deliveries across the supply network.",
      whatsNext:
        "IoT sensor integration for condition monitoring, predictive delivery scheduling, and expansion to additional supply chain workflows.",
    },
  },
  {
    name: "Crypto Exchange Mobile App",
    slug: "crypto-exchange-mobile",
    status: "Live",
    industry: "FinTech",
    model: "T&M",
    tagline: "User-friendly crypto trading from your smartphone",
    useCase: "Crypto-to-crypto exchange, portfolio management, secure trading",
    audience: "Retail crypto investors, active traders, crypto newcomers",
    summary:
      "A user-friendly mobile application that simplifies access to the cryptocurrency economy. It provides a secure and intuitive platform for instant crypto-to-crypto exchanges, empowering users to trade and manage digital assets seamlessly from their smartphones.",
    tags: ["fintech", "crypto", "mobile", "trading", "exchange"],
    stack: ["React Native", "TypeScript", "Go", "PostgreSQL", "Redis", "Kubernetes", "AWS", "Hardware Security Modules"],
    icon: "Coins",
    screenshots: [
      "/screens/crypto-exchange-mobile-1.png",
      "/screens/crypto-exchange-mobile-2.png",
      "/screens/crypto-exchange-mobile-3.png",
      "/screens/crypto-exchange-mobile-4.png",
    ],
    sections: {
      client: "FinTech Startup",
      problem:
        "Existing crypto exchanges had complex interfaces that intimidated newcomers, slow execution times, and security concerns that limited mainstream adoption. Users needed a simple, secure way to exchange cryptocurrencies without deep technical knowledge.",
      solution:
        "We developed a mobile-first crypto exchange with a simplified trading interface, instant execution, and bank-grade security, making cryptocurrency accessible to mainstream users while meeting the needs of active traders.",
      whatWeDid: [
        "Simplified swap interface for beginners",
        "Advanced trading view for active traders",
        "Real-time price charts and market data",
        "Portfolio tracking and performance analytics",
        "Biometric authentication and 2FA",
        "Cold storage integration for security",
        "Push notifications for price alerts",
        "KYC/AML compliance integration",
      ],
      outcome:
        "Achieved 100K+ downloads in first year, processed $50M+ in trading volume, and maintained zero security incidents. User retention exceeded industry benchmarks due to simplified UX.",
      whatsNext:
        "Fiat on-ramp integration, staking features, and expansion to additional cryptocurrency pairs and DeFi protocols.",
    },
  },
  {
    name: "Humagotchi",
    slug: "humagotchi",
    status: "Live",
    industry: "Startup",
    model: "Fixed",
    tagline: "A gamified wellbeing companion with privacy-first team insights.",
    useCase: "Gamified daily mood check-ins with insights for individuals and teams.",
    audience: "Individuals improving habits; HR/People teams tracking engagement signals.",
    summary:
      "Humagotchi is a gamified mood and wellbeing companion that helps people build self-awareness through quick daily check-ins, streaks, and gentle nudges. For teams, it offers privacy-first, consent-based analytics that surface anonymized engagement trends by department—without collecting sensitive personal data.",
    tags: ["wellbeing", "gamification", "analytics", "mobile", "b2b"],
    stack: ["React Native", "Node.js", "NestJS", "PostgreSQL", "PostHog", "Docker", "AWS", "Email OTP"],
    icon: "Smile",
    screenshots: [
      "/screens/humagotchi-1.svg",
      "/screens/humagotchi-2.svg",
      "/screens/humagotchi-3.svg",
      "/screens/humagotchi-4.svg",
    ],
    sections: {
      client: "Studio product (Reptilians)",
      problem:
        "People struggle to maintain self-awareness and healthy daily routines. Teams lack lightweight, privacy-respecting signals about morale and engagement trends without invasive data collection.",
      solution:
        "A friendly, gamified mood tracker with daily check-ins, streaks, and gentle nudges that builds engagement through play. Optional team-level analytics dashboard for HR with explicit user consent and fully anonymized, non-sensitive data aggregation.",
      whatWeDid: [
        "Product discovery and user experience flows",
        "Mobile UI design and onboarding flows",
        "Gamification mechanics (streaks, reward system, achievement badges)",
        "Analytics event tracking and dashboards",
        "B2B department selection and explicit consent flows",
        "Privacy-by-design data model with anonymized aggregation",
        "User habit insights and progression tracking",
        "Push notification nudges and engagement loops",
      ],
      outcome:
        "Users report improved daily self-awareness and engagement through gamification mechanics. Personal mood trends become visible over time, enabling better habit formation. HR teams gain anonymized morale signals by department while respecting individual privacy—no sensitive personal data is exposed.",
      whatsNext:
        "Integration with calendar systems for habit tracking, peer challenge features for team engagement, and predictive wellness insights using aggregated anonymized data.",
    },
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  caseStudies.forEach((cs) => cs.tags.forEach((tag) => tags.add(tag)))
  return Array.from(tags).sort()
}

export function getAllStack(): string[] {
  const stack = new Set<string>()
  caseStudies.forEach((cs) => cs.stack.forEach((s) => stack.add(s)))
  return Array.from(stack).sort()
}

export function getAllStatuses(): CaseStudyStatus[] {
  return ["Idea", "Prototype", "MVP", "Live", "Paused"]
}

export function getAllIndustries(): Industry[] {
  return ["Enterprise", "FinTech", "Healthcare", "Oil & Gas", "Life Sciences", "AdTech", "Web3", "Automotive", "Logistics", "Energy", "Startup"]
}
