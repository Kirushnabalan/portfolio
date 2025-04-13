// File: components/animated-section.tsx
// This component will wrap sections with scroll animations
"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  animation?: "fade-up" | "fade-right" | "fade-left" | "zoom-in" | "bounce";
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  id,
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(`animate-${animation}`);
              entry.target.classList.add("visible");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animation, delay]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section ${className} animate-section`}
    >
      {children}
    </section>
  );
}