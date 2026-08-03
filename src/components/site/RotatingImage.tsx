import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Croisement fondu automatique entre plusieurs visuels d'une même catégorie métier.
 * Chaque instance possède son propre rythme (interval + delay) pour éviter toute
 * répétition visuelle synchronisée sur la page.
 */
export function RotatingImage({
  images,
  alt,
  className,
  interval = 4000,
  delay = 0,
}: {
  images: string[];
  alt: string;
  className?: string;
  interval?: number;
  delay?: number;
}) {
  const slides = images.filter(Boolean);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    let id: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    }, delay);
    return () => {
      clearTimeout(start);
      if (id) clearInterval(id);
    };
  }, [slides.length, interval, delay]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {slides.map((src, i) => (
        <img
          key={`${src}-${i}`}
          src={src}
          alt={i === index ? alt : ""}
          aria-hidden={i === index ? undefined : true}
          loading="lazy"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out",
            i === index ? "scale-100 opacity-100" : "scale-105 opacity-0",
          )}
        />
      ))}
    </div>
  );
}
