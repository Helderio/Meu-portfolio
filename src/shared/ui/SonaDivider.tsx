import { cn } from "@/shared/lib/utils";

interface SonaDividerProps {
  className?: string;
}

/** Divisor horizontal — linha `--hair` interrompida ao centro por um zigzag em latão. */
export function SonaDivider({ className }: SonaDividerProps) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={cn("flex items-center gap-4", className)}
    >
      <span className="h-px flex-1 bg-hair" />
      <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
        <path
          d="M0 6 L10 0 L20 12 L30 0 L40 6"
          stroke="var(--brass)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="h-px flex-1 bg-hair" />
    </div>
  );
}
