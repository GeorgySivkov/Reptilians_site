import type React from "react"
import { Sparkles, RefreshCw, Activity, Compass, Workflow, Shield, Folder } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  RefreshCw,
  Activity,
  Compass,
  Workflow,
  Shield,
}

interface ProjectIconProps {
  icon: string
  className?: string
}

export function ProjectIcon({ icon, className }: ProjectIconProps) {
  const IconComponent = iconMap[icon] || Folder
  return <IconComponent className={className} />
}
