export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  github?: string
  demo?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "neural-canvas",
    title: "Neural Canvas",
    description: "AI-powered image generation and editing platform with real-time collaboration features.",
    longDescription:
      "Neural Canvas is an advanced AI-powered platform that enables teams to generate, edit, and collaborate on visual content in real-time. Built with cutting-edge machine learning models, it offers intuitive controls for creating stunning visuals without requiring design expertise. The platform supports multiple export formats, version history, and seamless team workflows.",
    image: "/ai-image-generation-dashboard-dark-theme.jpg",
    tags: ["React", "Python", "TensorFlow", "WebSocket"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: "quantum-sync",
    title: "Quantum Sync",
    description: "Distributed file synchronization system with end-to-end encryption and conflict resolution.",
    longDescription:
      "Quantum Sync is a next-generation file synchronization solution designed for teams that prioritize security and reliability. Using advanced cryptographic protocols, it ensures that your data remains private while enabling seamless collaboration across devices and team members. The intelligent conflict resolution system handles simultaneous edits gracefully.",
    image: "/file-sync-cloud-storage-dashboard-modern.jpg",
    tags: ["Rust", "Go", "gRPC", "SQLite"],
    github: "https://github.com",
    featured: true,
  },
  {
    id: "pulse-monitor",
    title: "Pulse Monitor",
    description: "Real-time infrastructure monitoring with intelligent alerting and anomaly detection.",
    longDescription:
      "Pulse Monitor provides comprehensive visibility into your infrastructure health. With machine learning-powered anomaly detection, it identifies potential issues before they impact your users. The customizable dashboard and intelligent alerting system help teams respond quickly to incidents while reducing alert fatigue.",
    image: "/infrastructure-monitoring-analytics-dashboard.jpg",
    tags: ["TypeScript", "Prometheus", "Grafana", "Kubernetes"],
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: "code-compass",
    title: "Code Compass",
    description: "Intelligent code navigation and documentation generator for large codebases.",
    longDescription:
      "Code Compass makes navigating large codebases effortless. Using static analysis and machine learning, it generates interactive documentation, dependency graphs, and intelligent search capabilities. Perfect for onboarding new team members or exploring unfamiliar code.",
    image: "/code-documentation-ide-plugin-developer-tool.jpg",
    tags: ["TypeScript", "AST", "GraphQL", "React"],
    github: "https://github.com",
    featured: false,
  },
  {
    id: "data-forge",
    title: "Data Forge",
    description: "Visual data pipeline builder with support for real-time streaming and batch processing.",
    longDescription:
      "Data Forge simplifies complex data transformations with an intuitive visual interface. Build sophisticated ETL pipelines by connecting nodes, with support for both real-time streaming and batch processing. Integrates seamlessly with popular data sources and destinations.",
    image: "/data-pipeline-visual-builder-workflow.jpg",
    tags: ["Python", "Apache Kafka", "Apache Spark", "React"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    id: "secure-vault",
    title: "Secure Vault",
    description: "Zero-knowledge password manager with biometric authentication and team sharing.",
    longDescription:
      "Secure Vault is a modern password manager built with security as the top priority. Using zero-knowledge architecture, your secrets remain encrypted and private. Features include biometric authentication, secure team sharing, and breach monitoring to keep your credentials safe.",
    image: "/password-manager-security-vault-dark-ui.jpg",
    tags: ["Swift", "Kotlin", "Node.js", "PostgreSQL"],
    demo: "https://demo.com",
    featured: false,
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
