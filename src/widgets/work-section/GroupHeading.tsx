interface GroupHeadingProps {
  children: React.ReactNode;
}

/** Sub-cabeçalho de grupo — mono/uppercase/latão claro + linha --hair a preencher a largura. */
export function GroupHeading({ children }: GroupHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.15em] text-brass-bright">
        {children}
      </span>
      <span className="h-px flex-1 bg-hair" aria-hidden="true" />
    </div>
  );
}
