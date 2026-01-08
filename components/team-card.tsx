import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter, Linkedin } from "lucide-react"
import type { TeamMember } from "@/lib/team"

interface TeamCardProps {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="overflow-hidden border-border/50 bg-card">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold tracking-tight">{member.name}</h3>
        <p className="mb-3 text-sm text-accent">{member.role}</p>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
        <div className="flex gap-3">
          {member.social.github && (
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
