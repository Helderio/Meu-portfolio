interface TagProps {
  children: React.ReactNode;
}

/** Pílula de stack — mono 10px, borda `--hair`. */
export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded border border-hair px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-stone">
      {children}
    </span>
  );
}
