import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
      )}
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="animate-fade-up mt-4 max-w-3xl text-4xl font-bold text-primary-foreground lg:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="animate-fade-up mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`mt-3 text-3xl font-bold lg:text-4xl ${light ? "text-primary-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
