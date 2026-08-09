import { cn } from "@/shared/lib/utils";
import { SONA_PATH, SONA_GRID_DOTS } from "./sona-path";

interface SonaMarkProps {
  size?: number;
  /** Grid dots at each vertex. Forced off below 24px — they read as noise at small sizes. */
  showDots?: boolean;
  /** Plays the canonical draw-in animation once. Respects prefers-reduced-motion. */
  animate?: boolean;
  className?: string;
}

export function SonaMark({
  size = 32,
  showDots = true,
  animate = false,
  className,
}: SonaMarkProps) {
  const renderDots = showDots && size >= 24;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      role="img"
      aria-label="WA.S"
      className={cn(animate && "sona-draw", className)}
    >
      <path
        d={SONA_PATH}
        pathLength={1}
        stroke="var(--brass)"
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {renderDots &&
        SONA_GRID_DOTS.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={3} fill="var(--bone)" />
        ))}
    </svg>
  );
}
