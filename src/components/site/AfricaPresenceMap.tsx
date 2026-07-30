import { AFRICA_COUNTRIES, AFRICA_VIEWBOX } from "@/lib/africa-map";

const PRESENCE: Record<string, { label: string; ville: string; x: number; y: number }> = {
  CMR: { label: "Cameroun", ville: "Garoua", x: 282.9, y: 294.8 },
  CAF: { label: "Rép. Centrafricaine", ville: "Bangui", x: 328, y: 345.5 },
  TCD: { label: "Tchad", ville: "N'Djaména", x: 297.3, y: 265.9 },
  NER: { label: "Niger", ville: "Niamey", x: 184.3, y: 251.5 },
  MLI: { label: "Mali", ville: "Bamako", x: 96.1, y: 260.4 },
  NGA: { label: "Nigeria", ville: "Abuja", x: 231.3, y: 297.2 },
};

export function AfricaPresenceMap() {
  return (
    <svg
      viewBox={AFRICA_VIEWBOX}
      role="img"
      aria-label="Carte d'Afrique des pays où le Groupe SIAT-Engineering est implanté"
      className="h-auto w-full max-w-2xl"
    >
      {AFRICA_COUNTRIES.map((c) => {
        const active = Boolean(PRESENCE[c.id]);
        return (
          <path
            key={c.id}
            d={c.d}
            className={
              active
                ? "fill-[var(--title-red)] stroke-background"
                : "fill-surface stroke-border transition-colors hover:fill-muted"
            }
            strokeWidth={0.8}
          >
            <title>{PRESENCE[c.id]?.label ?? c.name}</title>
          </path>
        );
      })}
      {Object.entries(PRESENCE).map(([id, p]) => (
        <g key={id}>
          <circle cx={p.x} cy={p.y} r={5} className="fill-primary" />
          <circle cx={p.x} cy={p.y} r={2} className="fill-background" />
          <text
            x={p.x + 9}
            y={p.y + 4}
            className="fill-primary font-display"
            style={{ fontSize: 12, fontWeight: 600 }}
          >
            {p.ville}
          </text>
        </g>
      ))}
    </svg>
  );
}
