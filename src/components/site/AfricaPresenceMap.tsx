import { useState } from "react";
import { AFRICA_COUNTRIES, AFRICA_VIEWBOX } from "@/lib/africa-map";
import { COUNTRIES } from "@/lib/site-data";

const PRESENCE: Record<string, { pays: string; x: number; y: number }> = {
  CMR: { pays: "Cameroun", x: 282.9, y: 294.8 },
  CAF: { pays: "République Centrafricaine", x: 328, y: 345.5 },
  TCD: { pays: "Tchad", x: 297.3, y: 265.9 },
  NER: { pays: "Niger", x: 184.3, y: 251.5 },
  MLI: { pays: "Mali", x: 96.1, y: 260.4 },
  NGA: { pays: "Nigeria", x: 231.3, y: 297.2 },
  MRT: { pays: "Mauritanie", x: 26.5, y: 204.7 },
};

export function AfricaPresenceMap() {
  const [active, setActive] = useState<string | null>(null);

  const info = active ? COUNTRIES.find((c) => c.pays === PRESENCE[active].pays) : null;

  return (
    <div className="w-full">
      <svg
        viewBox={AFRICA_VIEWBOX}
        role="img"
        aria-label="Carte d'Afrique des pays où le Groupe SIAT-Engineering est implanté"
        className="mx-auto h-auto w-full max-w-2xl"
      >
        {AFRICA_COUNTRIES.map((c) => {
          const present = Boolean(PRESENCE[c.id]);
          return (
            <path
              key={c.id}
              d={c.d}
              strokeWidth={0.8}
              onMouseEnter={present ? () => setActive(c.id) : undefined}
              onMouseLeave={present ? () => setActive(null) : undefined}
              onFocus={present ? () => setActive(c.id) : undefined}
              onBlur={present ? () => setActive(null) : undefined}
              tabIndex={present ? 0 : undefined}
              className={
                present
                  ? `cursor-pointer stroke-background transition-colors ${
                      active === c.id ? "fill-navy-deep" : "fill-primary"
                    }`
                  : "fill-[var(--title-red)] stroke-background"
              }
            >
              <title>{PRESENCE[c.id]?.pays ?? c.name}</title>
            </path>
          );
        })}
        {Object.entries(PRESENCE).map(([id, p]) => {
          const country = COUNTRIES.find((c) => c.pays === p.pays);
          return (
            <g key={id} className="pointer-events-none">
              <circle cx={p.x} cy={p.y} r={5} className="fill-background" />
              <circle cx={p.x} cy={p.y} r={2.4} className="fill-[var(--title-red)]" />
              <text
                x={p.x + 9}
                y={p.y + 4}
                className="fill-background font-display"
                style={{ fontSize: 12, fontWeight: 700, paintOrder: "stroke" }}
              >
                {country?.ville ?? p.pays}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-4 min-h-28 rounded-sm border border-border bg-surface p-4">
        {info ? (
          <div>
            <p className="font-display text-base font-bold text-primary">
              {info.pays} — {info.ville}
            </p>
            <p className="eyebrow mt-1">{info.statut}</p>
            {info.directeur && (
              <p className="mt-2 text-sm text-foreground">{info.directeur}</p>
            )}
            {info.emailDirection && (
              <a
                href={`mailto:${info.emailDirection}`}
                className="block break-all text-sm text-muted-foreground hover:text-accent"
              >
                {info.emailDirection}
              </a>
            )}
            <p className="text-sm text-muted-foreground">{info.telephones.join(" / ")}</p>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Survolez un pays en bleu pour afficher les informations de l'implantation.
          </p>
        )}
      </div>
    </div>
  );
}
