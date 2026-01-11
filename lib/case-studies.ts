export type CaseStudyStatus = "Idea" | "Prototype" | "MVP" | "Live" | "Paused"
export type Industry = "Startup" | "Enterprise" | "Government" | "iGaming"
export type EngagementModel = "Fixed" | "T&M" | "Dedicated"

export const statusConfig: Record<CaseStudyStatus, { label: string; color: string }> = {
  Idea: { label: "Idea", color: "bg-purple-500/10 text-purple-400 border-purple-500/30" },
  Prototype: { label: "Prototype", color: "bg-amber-500/10 text-amber-400 border-amber-500/30" },
  MVP: { label: "MVP", color: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
  Live: { label: "Live", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" },
  Paused: { label: "Paused", color: "bg-slate-500/10 text-slate-400 border-slate-500/30" },
}

export const industryConfig: Record<Industry, { label: string; color: string }> = {
  Startup: { label: "Startup", color: "text-cyan-400" },
  Enterprise: { label: "Enterprise", color: "text-violet-400" },
  Government: { label: "Government", color: "text-amber-400" },
  iGaming: { label: "iGaming", color: "text-pink-400" },
}

export interface CaseStudy {
  name: string
  slug: string
  status: CaseStudyStatus
  industry: Industry
  model: EngagementModel
  useCase: string
  audience: string
  summary: string
  outcome: string
  tags: string[]
  stack: string[]
  icon: string
  screenshots: string[]
  highlights: string[]
  client?: string
  problem?: string
  solution?: string
  whatsNext?: string
}

export const caseStudies: CaseStudy[] = [
  {
    name: "Fintech Onboarding Portal",
    slug: "fintech-onboarding-portal",
    status: "Live",
    industry: "Enterprise",
    model: "T&M",
    useCase: "KYC onboarding + document verification + risk checks",
    audience: "Operations team and compliance officers",
    summary: "A secure onboarding portal to reduce manual work and speed up approvals.",
    outcome: "Reduced onboarding time from days to hours; fewer manual reviews with better audit trails.",
    tags: ["fintech", "kyc", "security", "workflow"],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "OpenAPI"],
    icon: "ShieldCheck",
    screenshots: [
      "/screens/fintech-1.png",
      "/screens/fintech-2.png",
      "/screens/fintech-3.png",
      "/screens/fintech-4.png",
    ],
    highlights: ["Role-based access control", "Audit logs", "Queue-based processing", "Admin dashboard"],
    client: "European Fintech (NDA)",
    problem:
      "Manual KYC processing was taking 3-5 business days per customer, with compliance officers spending 70% of their time on repetitive document verification tasks. The existing system had no audit trail, making regulatory compliance challenging.",
    solution:
      "We built a streamlined onboarding portal with automated document verification, risk scoring, and queue-based processing. Role-based access control ensures compliance, while comprehensive audit logs satisfy regulatory requirements.",
    whatsNext:
      "Expanding to support additional document types, integrating with more third-party verification providers, and adding ML-powered fraud detection.",
  },
  {
    name: "iGaming Payments Orchestrator",
    slug: "igaming-payments-orchestrator",
    status: "Live",
    industry: "iGaming",
    model: "Dedicated",
    useCase: "Payment routing, retries, provider failover, reconciliation",
    audience: "Payment operations and finance teams",
    summary: "A high-availability layer that optimizes payment success rates across multiple PSPs.",
    outcome: "Higher payment approval rate and faster incident recovery via automated failover.",
    tags: ["payments", "high-load", "observability", "reconciliation"],
    stack: ["Go", "Kafka", "PostgreSQL", "Prometheus", "Grafana", "Kubernetes"],
    icon: "CreditCard",
    screenshots: ["/screens/payments-1.png", "/screens/payments-2.png", "/screens/payments-3.png"],
    highlights: ["Provider failover", "Idempotency", "Realtime monitoring", "Automated reconciliation"],
    client: "iGaming Platform (NDA)",
    problem:
      "Payment failures were costing significant revenue, with no automated failover when PSPs went down. Manual reconciliation took days, and the team had no real-time visibility into payment health.",
    solution:
      "Built a high-availability payment orchestration layer with intelligent routing, automatic failover between providers, and idempotent retry logic. Real-time dashboards provide instant visibility into payment flows.",
    whatsNext:
      "Adding more PSP integrations, implementing ML-based routing optimization, and expanding to new markets with local payment methods.",
  },
  {
    name: "Government Service Request System",
    slug: "government-service-request-system",
    status: "MVP",
    industry: "Government",
    model: "Fixed",
    useCase: "Citizen requests intake + routing + SLA tracking",
    audience: "Municipal support teams and department leads",
    summary: "A portal for submitting and tracking service requests with SLA visibility.",
    outcome: "Clear SLA tracking and fewer lost requests with transparent routing and ownership.",
    tags: ["govtech", "workflow", "sla", "accessibility"],
    stack: ["React", "Node.js", "PostgreSQL", "Keycloak", "Docker"],
    icon: "Landmark",
    screenshots: ["/screens/gov-1.png", "/screens/gov-2.png", "/screens/gov-3.png"],
    highlights: ["SLA dashboards", "Accessibility-friendly UI", "Department routing rules", "Public status tracking"],
    client: "Municipal Government",
    problem:
      "Citizen requests were getting lost between departments, with no visibility into SLA compliance. The existing system was not accessible and failed to meet WCAG guidelines.",
    solution:
      "Delivered an accessible portal with clear routing rules, automatic SLA tracking, and public status pages. Department leads now have dashboards showing workload and compliance metrics.",
    whatsNext: "Mobile app for field workers, integration with existing municipal systems, and expanded analytics.",
  },
  {
    name: "Startup MVP: Marketplace Core",
    slug: "startup-mvp-marketplace-core",
    status: "Live",
    industry: "Startup",
    model: "Fixed",
    useCase: "Launch-ready marketplace with listings, payments, and admin tools",
    audience: "Founders and early operations team",
    summary: "From idea to launch: product discovery, MVP build, and first production release.",
    outcome: "Launched MVP fast with a maintainable codebase ready for iteration and growth.",
    tags: ["mvp", "marketplace", "product-discovery", "launch"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Vercel"],
    icon: "Rocket",
    screenshots: ["/screens/mvp-1.png", "/screens/mvp-2.png", "/screens/mvp-3.png", "/screens/mvp-4.png"],
    highlights: ["Discovery sprint", "Admin panel", "Payments integration", "Analytics events"],
    client: "Early-stage Startup",
    problem:
      "Founders had a validated idea but needed to move fast to capture market opportunity. Previous development attempts resulted in unmaintainable code that couldn't scale.",
    solution:
      "Ran a focused discovery sprint to define MVP scope, then built a clean marketplace with listings, Stripe payments, and an admin panel. Deployed on Vercel for instant scaling.",
    whatsNext: "User feedback integration, seller verification system, and expansion to mobile apps.",
  },
  {
    name: "AdTech Analytics Dashboard",
    slug: "adtech-analytics-dashboard",
    status: "Live",
    industry: "Enterprise",
    model: "Dedicated",
    useCase: "Unified reporting across sources with alerting and anomaly detection",
    audience: "Marketing and performance teams",
    summary: "A fast dashboard for daily decision-making with reliable metrics and drill-downs.",
    outcome: "Less time spent assembling reports; faster response to anomalies and spikes.",
    tags: ["analytics", "dashboards", "etl", "monitoring"],
    stack: ["React", "Python", "ClickHouse", "Airflow", "Docker"],
    icon: "LineChart",
    screenshots: ["/screens/adtech-1.png", "/screens/adtech-2.png", "/screens/adtech-3.png"],
    highlights: ["Cohort views", "Anomaly alerts", "Fast queries", "Role-based access"],
    client: "AdTech Company",
    problem:
      "Marketing teams spent hours each day manually assembling reports from multiple data sources. Anomalies in campaign performance went unnoticed until significant budget was wasted.",
    solution:
      "Built a unified analytics dashboard pulling data from all ad platforms. ClickHouse enables sub-second queries on billions of rows, while automated anomaly detection alerts teams to issues in real-time.",
    whatsNext: "Attribution modeling, predictive analytics, and automated budget optimization recommendations.",
  },
  {
    name: "Healthcare Mobile Companion",
    slug: "healthcare-mobile-companion",
    status: "Prototype",
    industry: "Enterprise",
    model: "T&M",
    useCase: "Patient reminders, symptom tracking, secure messaging",
    audience: "Patients and clinic coordinators",
    summary: "A prototype focused on UX clarity, accessibility, and secure flows.",
    outcome: "Validated core flows and UX with stakeholders before committing to full build.",
    tags: ["mobile", "healthcare", "ux", "privacy"],
    stack: ["React Native", "TypeScript", "Firebase", "Figma"],
    icon: "HeartPulse",
    screenshots: ["/screens/health-1.png", "/screens/health-2.png", "/screens/health-3.png"],
    highlights: ["Accessibility-first", "Secure messaging concept", "Reminder system", "Rapid prototyping"],
    client: "Healthcare Provider",
    problem:
      "Patients were missing appointments and medication reminders, leading to worse health outcomes. Existing communication methods (phone calls, paper) were expensive and unreliable.",
    solution:
      "Designed and prototyped a mobile companion app with smart reminders, symptom tracking, and secure messaging. Accessibility-first approach ensures usability for elderly patients.",
    whatsNext:
      "Full development pending stakeholder approval, integration with EHR systems, and HIPAA compliance certification.",
  },
  {
    name: "B2B CRM Integrations Hub",
    slug: "b2b-crm-integrations-hub",
    status: "MVP",
    industry: "Enterprise",
    model: "T&M",
    useCase: "Connectors for CRM/ERP + data sync + mapping UI",
    audience: "RevOps and implementation teams",
    summary: "An integrations hub that reduces custom work and speeds up onboarding.",
    outcome: "Standardized integrations and reduced time-to-connect for new customers.",
    tags: ["integrations", "b2b", "sync", "platform"],
    stack: ["Node.js", "TypeScript", "PostgreSQL", "BullMQ", "AWS"],
    icon: "Plug",
    screenshots: [
      "/screens/integrations-1.png",
      "/screens/integrations-2.png",
      "/screens/integrations-3.png",
      "/screens/integrations-4.png",
    ],
    highlights: ["Field mapping UI", "Webhook processing", "Retry queues", "Connector SDK"],
    client: "B2B SaaS Company",
    problem:
      "Every new customer required custom integration work, taking weeks and tying up engineering resources. Data sync issues caused support tickets and customer churn.",
    solution:
      "Built a self-service integrations hub with visual field mapping, reliable webhook processing, and a connector SDK for adding new integrations quickly.",
    whatsNext: "Marketplace for third-party connectors, advanced transformation rules, and real-time sync monitoring.",
  },
  {
    name: "High-load Event Tracking Pipeline",
    slug: "high-load-event-tracking-pipeline",
    status: "Live",
    industry: "Enterprise",
    model: "Dedicated",
    useCase: "Collect, enrich, and route events in real time",
    audience: "Data engineering and product analytics teams",
    summary: "A scalable pipeline with strong observability and safe backpressure handling.",
    outcome: "Stable ingestion during spikes with better visibility into data quality.",
    tags: ["high-load", "streaming", "data", "observability"],
    stack: ["Kafka", "Go", "ClickHouse", "Kubernetes", "Grafana"],
    icon: "Activity",
    screenshots: ["/screens/pipeline-1.png", "/screens/pipeline-2.png", "/screens/pipeline-3.png"],
    highlights: ["Backpressure strategy", "Schema versioning", "Realtime dashboards", "Data quality checks"],
    client: "High-traffic Platform",
    problem:
      "Event ingestion was dropping data during traffic spikes, and schema changes broke downstream consumers. No visibility into data quality meant analytics were unreliable.",
    solution:
      "Designed a Kafka-based pipeline with intelligent backpressure handling, schema versioning, and real-time quality checks. Grafana dashboards provide full observability.",
    whatsNext: "Multi-region deployment, advanced enrichment rules, and integration with ML feature stores.",
  },
  {
    name: "Internal Tooling Suite",
    slug: "internal-tooling-suite",
    status: "Live",
    industry: "Enterprise",
    model: "Fixed",
    useCase: "Ops tooling: approvals, permissions, audit logs, and bulk actions",
    audience: "Internal operations teams",
    summary: "A set of internal tools that saves time and reduces manual errors.",
    outcome: "Faster operations with fewer mistakes via structured workflows and guardrails.",
    tags: ["internal-tools", "rbac", "audit", "productivity"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    icon: "Wrench",
    screenshots: ["/screens/tools-1.png", "/screens/tools-2.png", "/screens/tools-3.png"],
    highlights: ["Bulk actions", "Approval workflows", "Audit trails", "Fine-grained permissions"],
    client: "Enterprise Client",
    problem:
      "Operations teams were using spreadsheets and manual processes for critical tasks, leading to errors and compliance risks. No audit trail made it impossible to track who did what.",
    solution:
      "Built a suite of internal tools with structured workflows, approval chains, and comprehensive audit logging. Fine-grained permissions ensure the right people have the right access.",
    whatsNext: "Workflow automation, Slack integration, and expanded reporting capabilities.",
  },
  {
    name: "Startup Studio: Idea-to-MVP Sprint",
    slug: "startup-studio-idea-to-mvp-sprint",
    status: "MVP",
    industry: "Startup",
    model: "Fixed",
    useCase: "Discovery workshop + clickable prototype + MVP scope and plan",
    audience: "Founders and product owners",
    summary: "A structured sprint that turns fuzzy ideas into a shippable MVP plan and initial build.",
    outcome: "Clear MVP scope, validated UX flows, and an engineering plan ready for execution.",
    tags: ["startup-studio", "discovery", "prototype", "mvp"],
    stack: ["Figma", "Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    icon: "Lightbulb",
    screenshots: ["/screens/sprint-1.png", "/screens/sprint-2.png", "/screens/sprint-3.png", "/screens/sprint-4.png"],
    highlights: ["Discovery workshop", "UX prototype", "MVP backlog", "Delivery plan"],
    client: "Multiple Founders",
    problem:
      "Founders often start building without validating their ideas, wasting months on features users don't want. Technical scoping is often inaccurate, leading to budget overruns.",
    solution:
      "Our structured sprint combines discovery workshops, rapid prototyping, and technical planning. Founders leave with validated UX flows and a realistic engineering plan.",
    whatsNext: "Ongoing engagements with successful sprint graduates, expanded workshop formats.",
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
  return ["Startup", "Enterprise", "Government", "iGaming"]
}
