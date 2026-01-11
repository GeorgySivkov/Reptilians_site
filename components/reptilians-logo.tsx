export function ReptiliansLogo({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className={className}>
      <rect width="32" height="32" rx="8" className="fill-accent" />
      <path
        d="M10 8h7c2.761 0 5 1.79 5 4s-2.239 4-5 4h-1.5l5.5 8h-4.5l-5-8h-0.5v8h-4V8h3zm3 5.5h3c0.828 0 1.5-0.56 1.5-1.25S16.828 11 16 11h-3v2.5z"
        className="fill-background"
      />
    </svg>
  )
}
