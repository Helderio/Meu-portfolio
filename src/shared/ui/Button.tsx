import { cn } from "@/shared/lib/utils";

interface ButtonProps extends React.ComponentPropsWithoutRef<"a"> {
  variant?: "solid" | "ghost";
}

/** Botão-link — `solid` (latão sólido) ou `ghost` (borda `--hair`). */
export function Button({ variant = "solid", className, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded px-6 py-3 font-body text-sm font-semibold transition-colors",
        variant === "solid" && "bg-brass text-obsidian hover:bg-brass-bright",
        variant === "ghost" &&
          "border border-hair text-bone hover:border-brass hover:text-brass-bright",
        className,
      )}
      {...props}
    />
  );
}
