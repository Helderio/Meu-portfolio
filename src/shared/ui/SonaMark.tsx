import { cn } from "@/shared/lib/utils";

const SONA_PATH =
  "M 40 40 L 160 40 L 160 100 L 100 100 L 100 160 L 40 160 L 40 100 L 100 100 L 100 40 M 40 100 L 40 40 M 160 100 L 160 160 L 100 160";

const GRID_DOTS = [
  [40, 40],
  [100, 40],
  [160, 40],
  [40, 100],
  [100, 100],
  [160, 100],
  [40, 160],
  [100, 160],
  [160, 160],
] as const;

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
        GRID_DOTS.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={3} fill="var(--bone)" />
        ))}
    </svg>
  );
}
