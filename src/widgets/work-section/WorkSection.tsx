import { SectionLabel } from "@/shared/ui";
import { ProjectCard } from "@/entities/project";
import { projects } from "@/shared/content";
import { GroupHeading } from "./GroupHeading";

const clientProjects = projects.filter((project) => project.category === "client");
const wasProjects = projects.filter((project) => project.category === "was");

/** Label 01 — dois grupos (cliente primeiro), grelha de 2 colunas / 1 abaixo de 720px. */
export function WorkSection() {
  return (
    <section id="trabalho" className="mx-auto max-w-6xl px-6 py-20">
      <SectionLabel number="01">Trabalho</SectionLabel>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-bone min-[720px]:text-4xl">
        Cada produto começa num problema que já custou alguma coisa a alguém.
      </h2>

      <div className="mt-14 space-y-6">
        <GroupHeading>Trabalho de cliente</GroupHeading>
        <div className="grid grid-cols-1 gap-6 min-[721px]:grid-cols-2">
          {clientProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-14 space-y-6">
        <GroupHeading>Produtos WA.S</GroupHeading>
        <div className="grid grid-cols-1 gap-6 min-[721px]:grid-cols-2">
          {wasProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
