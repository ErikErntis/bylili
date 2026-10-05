"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { PortfolioProject } from "../lib/portfolio";
import { useI18n } from "../lib/i18n";

type Props = { projects: PortfolioProject[]; allProjects?: boolean };

function ProjectImage({ project, t }: { project: PortfolioProject; t: (text: string) => string }) {
  return <div className="portfolio-image">
    <Image src={project.image} alt={t(project.imageAlt)} fill sizes={project.imagePanel !== undefined ? "(max-width: 800px) 1680px, 1320px" : "(max-width: 800px) 560px, 640px"} className={project.imagePanel !== undefined ? "portfolio-strip" : undefined} style={project.imagePanel !== undefined ? { left: `${-project.imagePanel * 100}%` } : { objectFit: project.imageFit ?? "cover" }}/>
    {project.imagePanel !== undefined && project.id !== "dloka-cafe" && <div className="project-design-overlay" aria-hidden="true"><span>{t(project.name)}</span><strong>{t(project.headline)}</strong><i>{t("Explore more →")}</i></div>}
  </div>;
}

export default function PortfolioSection({ projects, allProjects = false }: Props) {
  const { t } = useI18n();
  const [selected, setSelected] = useState<PortfolioProject | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  if (projects.length === 0) return null;

  return <section id="work" className="portfolio-section shell" aria-labelledby="portfolio-title">
    <div className="portfolio-heading">
      <div><p className="eyebrow">{t("Selected work")}</p>{allProjects ? <h1 id="portfolio-title">{t("A closer look at the work.")}</h1> : <h2 id="portfolio-title">{t("Recent projects.")}</h2>}</div>
      {!allProjects && <Link className="portfolio-all" href="/work">{t("View all projects")} <span aria-hidden="true">→</span></Link>}
    </div>
    <div className="portfolio-grid">
      {projects.map((project) => <article className="portfolio-card" key={project.id}>
        <button type="button" className="portfolio-card-button" aria-haspopup="dialog" aria-label={`${t("View")} ${t(project.name)}${project.isConcept ? ` ${t("design concept")}` : ` ${t("project")}`} `} onClick={() => { setSelected(project); dialog.current?.showModal(); }}>
          <ProjectImage project={project} t={t}/>
          <div className="portfolio-caption"><div><h3>{t(project.name)}</h3><p>{t(project.category)}</p></div><span className="portfolio-arrow" aria-hidden="true">→</span></div>
          {project.isConcept && <span className="concept-label">{t("Design concept")}</span>}
        </button>
      </article>)}
    </div>
    <dialog ref={dialog} className="preview-dialog portfolio-dialog" aria-labelledby="project-dialog-title" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="dialog-inner">
        <form method="dialog"><button className="dialog-close" aria-label={t("Close project")}>×</button></form>
        {selected && <>
          <p className="eyebrow">{t(selected.industry)}{selected.isConcept ? ` · ${t("Design concept")}` : ""}</p>
          <h2 id="project-dialog-title">{t(selected.name)}</h2>
          <ProjectImage project={selected} t={t}/>
          <dl className="project-story">{selected.role && <><dt>{t("My role")}</dt><dd>{t(selected.role)}</dd></>}{selected.collaboration && <><dt>{t("Collaboration")}</dt><dd>{t(selected.collaboration)}</dd></>}<dt>{t("Brief")}</dt><dd>{t(selected.problem)}</dd><dt>{t("Approach")}</dt><dd>{t(selected.approach)}</dd><dt>{t("Solution")}</dt><dd>{t(selected.solution)}</dd></dl>
          <a className="button button-primary" href="#project" data-project-trigger onClick={() => dialog.current?.close()}>{t("Let’s talk about your project")} <span aria-hidden="true">→</span></a>
        </>}
      </div>
    </dialog>
  </section>;
}
