"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Content stays visible without JavaScript. Only animate when it enters view.
const groups = [
  ".ec-explainer, .ec-approach",
  ".wd-hero-copy, .wd-preview",
  ".wd-section-heading, .wd-inclusion",
  ".wd-fit-inner > div, .wd-steps li",
  ".hero-copy > .eyebrow, .hero-copy > h1, .hero-description, .hero-actions, .benefits",
  ".services-heading, .service-card",
  ".portfolio-heading, .portfolio-card",
  ".process-inner > .eyebrow, .process-inner > h2, .process-step",
  ".testimonials-heading, .testimonial-card",
  ".contact-inner > div",
  ".footer-top > div, .footer-nav",
];

export default function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window) || !Element.prototype.animate) return;
    let observer: IntersectionObserver | undefined;
    const animations = new Set<Animation>();

    function stop() {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    }

    function start() {
      stop();
      if (preference.matches) return;
      const order = new Map<Element, number>();
      groups.forEach((selector) => {
        document.querySelectorAll(selector).forEach((element, index) => order.set(element, index));
      });
      observer = new IntersectionObserver((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        visible.forEach(({ target }, index) => {
          observer?.unobserve(target);
          // Focused controls must never disappear during keyboard navigation.
          if (target.contains(document.activeElement)) return;
          const animation = target.animate([
            { opacity: 0, transform: "translateY(18px)" },
            { opacity: 1, transform: "translateY(0)" },
          ], {
            duration: 650,
            delay: Math.min(order.get(target) ?? index, 3) * 65,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "backwards",
          });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0.08 });
      order.forEach((_, element) => observer?.observe(element));
    }

    // Reveal immediately if the visitor tabs into an animated element.
    function onFocus(event: FocusEvent) {
      animations.forEach((animation) => {
        const target = (animation.effect as KeyframeEffect | null)?.target;
        if (event.target instanceof Node && target?.contains(event.target)) {
          animation.cancel();
          animations.delete(animation);
        }
      });
    }

    start();
    preference.addEventListener("change", start);
    document.addEventListener("focusin", onFocus);
    return () => {
      stop();
      preference.removeEventListener("change", start);
      document.removeEventListener("focusin", onFocus);
    };
  }, [pathname]);

  return null;
}
