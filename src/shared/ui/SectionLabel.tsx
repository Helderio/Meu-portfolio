interface SectionLabelProps {
  number: string;
  children: React.ReactNode;
}

/** `NN — Nome` em mono/uppercase, usado como rótulo de abertura de cada secção. */
export function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.15em] text-brass-bright">
      {number} — {children}
    </p>
  );
}
