"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { testimonialsContent, type Testimonial } from "../lib/testimonials";

type Props = { items: Testimonial[]; preview?: boolean };

export default function TestimonialsSection({ items, preview = false }: Props) {
  const track = useRef<HTMLUListElement>(null);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => {
      setCanPrevious(element.scrollLeft > 2);
      setCanNext(element.scrollLeft + element.clientWidth < element.scrollWidth - 2);
    };
    update();
    element.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    for (const child of element.children) observer.observe(child);
    return () => { element.removeEventListener("scroll", update); observer.disconnect(); };
  }, [items]);

  function move(direction: -1 | 1) {
    const element = track.current;
    const card = element?.firstElementChild;
    if (!element || !card) return;
    const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 0;
    element.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  if (items.length === 0) return null;

  return <section className="testimonials-section shell" aria-labelledby="testimonials-title">
    <div className="testimonials-heading">
      <div><p className="eyebrow">{testimonialsContent.eyebrow}</p><h2 id="testimonials-title">{testimonialsContent.title}</h2></div>
      <div className="testimonials-controls" aria-label="Testimonial navigation">
        <button type="button" aria-label="Previous testimonial" aria-controls="testimonials-track" disabled={!canPrevious} onClick={() => move(-1)}><span aria-hidden="true">←</span></button>
        <button type="button" aria-label="Next testimonial" aria-controls="testimonials-track" disabled={!canNext} onClick={() => move(1)}><span aria-hidden="true">→</span></button>
      </div>
    </div>
    {preview && <p className="testimonials-preview">{testimonialsContent.previewNotice}</p>}
    <ul ref={track} id="testimonials-track" className="testimonials-track" tabIndex={0} aria-label="Client feedback" onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }}>
      {items.map((item) => <li className="testimonial-card" key={item.id}>
        {preview ? <p className="testimonial-quote">{item.quote}</p> : <blockquote className="testimonial-quote"><p>“{item.quote}”</p></blockquote>}
        <div className="testimonial-person">
          {item.avatar ? <Image className="testimonial-avatar" src={item.avatar} alt="" width={42} height={42}/> : <span className="testimonial-initials" aria-hidden="true">{preview ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="8" r="3.5"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/></svg> : item.name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("")}</span>}
          <div><p className="testimonial-name">{item.name}</p><p className="testimonial-role">{[item.role, item.company].filter(Boolean).join(", ")}</p></div>
        </div>
        {preview ? <span className="testimonial-placeholder">Preview card</span> : item.rating !== undefined && <div className="testimonial-rating" role="img" aria-label={`${item.rating} out of 5 stars`}><span aria-hidden="true">{Array.from({ length: 5 }, (_, index) => <span className={index < item.rating! ? "is-filled" : ""} key={index}>★</span>)}</span></div>}
      </li>)}
    </ul>
  </section>;
}
