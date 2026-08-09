import { Tag } from "@/shared/ui";
import type { Project } from "../model/Project";

interface ProjectCardProps {
  project: Project;
}

/** Card de projeto — barra de acento de 3px à esquerda, altura total. */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="relative overflow-hidden rounded bg-surface p-6 pl-8">
      <span
        className="absolute inset-y-0 left-0 w-[3px]"
        style={{ backgroundColor: project.accent }}
        aria-hidden="true"
      />
      <p className="font-mono text-xs uppercase tracking-wide text-stone">{project.kicker}</p>
      <h3 className="mt-3 font-display text-2xl font-bold text-bone">{project.name}</h3>
      <p className="mt-3 text-bone">{project.problem}</p>
      <p className="mt-2 text-sm text-stone">{project.detail}</p>
      {project.metric && (
        <p className="mt-4 font-mono text-sm text-brass-bright">{project.metric}</p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  );
}
