export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social: {
    github?: string
    twitter?: string
    linkedin?: string
  }
}

export const team: TeamMember[] = [
  {
    id: "alex-chen",
    name: "Alex Chen",
    role: "Lead Engineer",
    bio: "Full-stack developer with a passion for distributed systems and developer tooling.",
    image: "/professional-male-developer-portrait-minimalist.jpg",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "sarah-kim",
    name: "Sarah Kim",
    role: "Senior Developer",
    bio: "Frontend specialist focused on building accessible and performant web applications.",
    image: "/professional-female-developer-portrait-minimalist.jpg",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    role: "Backend Engineer",
    bio: "Systems architect with expertise in cloud infrastructure and database optimization.",
    image: "/professional-male-engineer-portrait-minimalist.jpg",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "emma-wilson",
    name: "Emma Wilson",
    role: "DevOps Lead",
    bio: "Infrastructure expert passionate about CI/CD pipelines and platform reliability.",
    image: "/professional-female-engineer-portrait-minimalist.jpg",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
]
