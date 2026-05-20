export function NetworkNodesIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="60" cy="30" r="6" fill="currentColor" opacity="0.3" />
      <circle cx="30" cy="70" r="5" fill="currentColor" opacity="0.2" />
      <circle cx="90" cy="70" r="5" fill="currentColor" opacity="0.2" />
      <circle cx="60" cy="90" r="4" fill="currentColor" opacity="0.15" />
      <circle cx="20" cy="40" r="3" fill="currentColor" opacity="0.1" />
      <circle cx="100" cy="40" r="3" fill="currentColor" opacity="0.1" />
      <line x1="60" y1="30" x2="30" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <line x1="60" y1="30" x2="90" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <line x1="30" y1="70" x2="90" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      <line x1="30" y1="70" x2="60" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      <line x1="90" y1="70" x2="60" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      <line x1="20" y1="40" x2="60" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
      <line x1="100" y1="40" x2="60" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
    </svg>
  )
}

export function BrainPatternIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M60 20C45 20 35 30 35 45C35 55 40 60 45 65C50 70 50 75 50 80H70C70 75 70 70 75 65C80 60 85 55 85 45C85 30 75 20 60 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.15"
        fill="none"
      />
      <path d="M50 80V90H70V80" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      <path d="M52 85H68" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      <circle cx="50" cy="40" r="2" fill="currentColor" opacity="0.2" />
      <circle cx="70" cy="40" r="2" fill="currentColor" opacity="0.2" />
      <circle cx="60" cy="55" r="2" fill="currentColor" opacity="0.15" />
      <circle cx="45" cy="52" r="1.5" fill="currentColor" opacity="0.12" />
      <circle cx="75" cy="52" r="1.5" fill="currentColor" opacity="0.12" />
      <line x1="50" y1="40" x2="60" y2="55" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />
      <line x1="70" y1="40" x2="60" y2="55" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />
      <line x1="45" y1="52" x2="50" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
      <line x1="75" y1="52" x2="70" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
    </svg>
  )
}
