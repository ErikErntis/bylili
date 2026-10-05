"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { PortfolioProject } from "../lib/portfolio";

type Props = { projects: PortfolioProject[]; allProjects?: boolean };

function ProjectImage({ project }: { project: PortfolioProject }) {
  return <div className="portfolio-image">
    <Image src={project.image} alt={project.imageAlt} fill sizes={project.imagePanel !== undefined ? "(max-width: 800px) 1680px, 1320px" : "(max-width: 800px) 560px, 640px"} className={project.imagePanel !== undefined ? "portfolio-strip" : undefined} style={project.imagePanel !== undefined ? { left: `${-project.imagePanel * 100}%` } : { objectFit: project.imageFit ?? "cover" }}/>
    {project.imagePanel !== undefined && project.id !== "dloka-cafe" && <div className="project-design-overlay" aria-hidden="true"><span>{project.name}</span><strong>{project.headline}</strong><i>Explore more →</i></div>}
  </div>;
}

export default function PortfolioSection({ projects, allProjects = false }: Props) {
  const [selected, setSelected] = useState<PortfolioProject | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  if (projects.length === 0) return null;

  return <section id="work" className="portfolio-section shell" aria-labelledby="portfolio-title">
    <div className="portfolio-heading">
      <div><p className="eyebrow">Selected work</p>{allProjects ? <h1 id="portfolio-title">A closer look at the work.</h1> : <h2 id="portfolio-title">Recent projects.</h2>}</div>
      {!allProjects && <Link className="portfolio-all" href="/work">View all projects <span aria-hidden="true">→</span></Link>}
    </div>
    <div className="portfolio-grid">
      {projects.map((project) => <article className="portfolio-card" key={project.id}>
        <button type="button" className="portfolio-card-button" aria-haspopup="dialog" aria-label={`View ${project.name}${project.isConcept ? " design concept" : " project"}`} onClick={() => { setSelected(project); dialog.current?.showModal(); }}>
          <ProjectImage project={project}/>
          <div className="portfolio-caption"><div><h3>{project.name}</h3><p>{project.category}</p></div><span className="portfolio-arrow" aria-hidden="true">→</span></div>
          {project.isConcept && <span className="concept-label">Design concept</span>}
        </button>
      </article>)}
    </div>
    <dialog ref={dialog} className="preview-dialog portfolio-dialog" aria-labelledby="project-dialog-title" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="dialog-inner">
        <form method="dialog"><button className="dialog-close" aria-label="Close project">×</button></form>
        {selected && <>
          <p className="eyebrow">{selected.industry}{selected.isConcept ? " · Design concept" : ""}</p>
          <h2 id="project-dialog-title">{selected.name}</h2>
          <ProjectImage project={selected}/>
          <dl className="project-story">{selected.role && <><dt>My role</dt><dd>{selected.role}</dd></>}{selected.collaboration && <><dt>Collaboration</dt><dd>{selected.collaboration}</dd></>}<dt>Brief</dt><dd>{selected.problem}</dd><dt>Approach</dt><dd>{selected.approach}</dd><dt>Solution</dt><dd>{selected.solution}</dd></dl>
          <a className="button button-primary" href="#project" data-project-trigger onClick={() => dialog.current?.close()}>Let’s talk about your project <span aria-hidden="true">→</span></a>
        </>}
      </div>
    </dialog>
  </section>;
}
