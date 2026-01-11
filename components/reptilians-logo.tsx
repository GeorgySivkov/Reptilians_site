export function ReptiliansLogo({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className={className}>
      <rect width="32" height="32" rx="8" className="fill-accent" />
      <path
        d="M10 8h6c3.314 0 6 2.239 6 5s-2.686 5-6 5h-2v6h-4V8zm4 7h2c1.105 0 2-.672 2-1.5S17.105 12 16 12h-2v3z"
        className="fill-background"
      />
    </svg>
  )
}
