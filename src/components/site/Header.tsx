import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-siat.jpg.asset.json";
import { DOMAINS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/savoir-faire", label: "Nos savoir-faire" },
  { to: "/contact", label: "Contact" },
  { to: "/carriere", label: "Carrière" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [expertOpen, setExpertOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label="Groupe SIAT-Engineering">
          <img
            src={logo.url}
            alt="Logo Groupe SIAT-Engineering"
            width={260}
            height={162}
            className="animate-fade-in h-14 w-auto transition-transform duration-500 ease-out group-hover:scale-105 sm:h-16 lg:h-[4.5rem]"
          />
        </Link>


        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.to === "/savoir-faire" ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setExpertOpen(true)}
                onMouseLeave={() => setExpertOpen(false)}
              >
                <Link
                  to={item.to}
                  className="flex items-center gap-1 rounded px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-accent [&.active]:text-accent"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {expertOpen && (
                  <div className="absolute left-1/2 top-full w-[42rem] -translate-x-1/2 pt-2">
                    <div className="grid grid-cols-2 gap-1 rounded-md border border-border bg-popover p-3 shadow-[var(--shadow-lift)]">
                      {DOMAINS.map((d) => (
                        <Link
                          key={d.slug}
                          to="/savoir-faire/$slug"
                          params={{ slug: d.slug }}
                          className="rounded px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-accent"
                        >
                          <span className="mr-2 font-display text-xs text-muted-foreground">
                            {String(d.numero).padStart(2, "0")}
                          </span>
                          {d.titre}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="rounded px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-accent [&.active]:text-accent"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Nous consulter
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="rounded p-2 text-foreground lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className={cn("border-t border-border lg:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto max-w-7xl px-5 py-4">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm font-medium text-foreground/85 last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 grid gap-1 rounded bg-secondary p-3">
            {DOMAINS.map((d) => (
              <Link
                key={d.slug}
                to="/savoir-faire/$slug"
                params={{ slug: d.slug }}
                onClick={() => setOpen(false)}
                className="py-1.5 text-sm text-foreground/75"
              >
                {d.titre}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
