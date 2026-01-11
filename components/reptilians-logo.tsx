export function ReptiliansLogo({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className={className}>
      <rect width="32" height="32" rx="8" className="fill-accent" />
      <text
        x="16"
        y="23"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="bold"
        className="fill-background"
        textAnchor="middle"
      >
        R
      </text>
    </svg>
  )
}
