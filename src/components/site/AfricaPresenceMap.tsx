import { useMemo, useRef, useState } from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";
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
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  const [vx, vy, vw, vh] = useMemo(
    () => AFRICA_VIEWBOX.split(/\s+/).map(Number) as [number, number, number, number],
    [],
  );

  const w = vw / zoom;
  const h = vh / zoom;
  const maxX = vw - w;
  const maxY = vh - h;
  const clamp = (v: number, max: number) => Math.min(Math.max(v, 0), Math.max(max, 0));
  const viewBox = `${vx + clamp(offset.x, maxX)} ${vy + clamp(offset.y, maxY)} ${w} ${h}`;

  const info = active ? COUNTRIES.find((c) => c.pays === PRESENCE[active].pays) : null;
  const marker = active ? PRESENCE[active] : null;

  function onPointerDown(e: React.PointerEvent<SVGSVGElement>) {
    if (zoom === 1) return;
    drag.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: React.PointerEvent<SVGSVGElement>) {
    const d = drag.current;
    if (!d) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const scale = w / rect.width;
    setOffset({
      x: clamp(d.ox - (e.clientX - d.x) * scale, maxX),
      y: clamp(d.oy - (e.clientY - d.y) * scale, maxY),
    });
  }
  function endDrag() {
    drag.current = null;
  }

  function zoomBy(factor: number) {
    setZoom((z) => {
      const next = Math.min(6, Math.max(1, z * factor));
      const nw = vw / next;
      const nh = vh / next;
      setOffset((o) => ({
        x: clamp(o.x + (vw / z - nw) / 2, vw - nw),
        y: clamp(o.y + (vh / z - nh) / 2, vh - nh),
      }));
      return next;
    });
  }

  function reset() {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }

  const tipW = 168;
  const tipH = 62;
  const scaleT = 1 / zoom;

  return (
    <div className="w-full">
      <div className="relative">
        <svg
          viewBox={viewBox}
          role="img"
          aria-label="Carte d'Afrique des pays où le Groupe SIAT-Engineering est implanté"
          className={`mx-auto h-auto w-full max-w-2xl touch-none select-none ${
            zoom > 1 ? "cursor-grab active:cursor-grabbing" : ""
          }`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          {AFRICA_COUNTRIES.map((c) => {
            const present = Boolean(PRESENCE[c.id]);
            return (
              <path
                key={c.id}
                d={c.d}
                strokeWidth={0.8 / zoom}
                onMouseEnter={present ? () => setActive(c.id) : undefined}
                onMouseLeave={present ? () => setActive(null) : undefined}
                onFocus={present ? () => setActive(c.id) : undefined}
                onBlur={present ? () => setActive(null) : undefined}
                onClick={present ? () => setActive(c.id) : undefined}
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
              <g key={id} className="pointer-events-none" transform={`translate(${p.x} ${p.y})`}>
                <g transform={`scale(${scaleT})`}>
                  <circle r={5} className="fill-background" />
                  <circle r={2.4} className="fill-[var(--title-red)]" />
                  <text
                    x={9}
                    y={4}
                    className="fill-background font-display"
                    style={{ fontSize: 12, fontWeight: 700, paintOrder: "stroke" }}
                  >
                    {country?.ville ?? p.pays}
                  </text>
                </g>
              </g>
            );
          })}

          {marker && info && (
            <g className="pointer-events-none" transform={`translate(${marker.x} ${marker.y})`}>
              <g transform={`scale(${scaleT})`}>
                <rect
                  x={-tipW / 2}
                  y={-tipH - 12}
                  width={tipW}
                  height={tipH}
                  rx={3}
                  className="fill-navy-deep"
                  opacity={0.96}
                />
                <text
                  x={0}
                  y={-tipH + 4}
                  textAnchor="middle"
                  className="fill-background font-display"
                  style={{ fontSize: 11, fontWeight: 700 }}
                >
                  {info.pays}
                </text>
                <text
                  x={0}
                  y={-tipH + 20}
                  textAnchor="middle"
                  className="fill-background"
                  style={{ fontSize: 9, opacity: 0.85 }}
                >
                  {info.statut} — {info.ville}
                </text>
                <text
                  x={0}
                  y={-tipH + 34}
                  textAnchor="middle"
                  className="fill-background"
                  style={{ fontSize: 9, opacity: 0.85 }}
                >
                  {info.directeur ?? ""}
                </text>
                <text
                  x={0}
                  y={-tipH + 47}
                  textAnchor="middle"
                  className="fill-background"
                  style={{ fontSize: 8, opacity: 0.75 }}
                >
                  {info.telephones[0]}
                </text>
              </g>
            </g>
          )}
        </svg>

        <div className="absolute right-2 top-2 flex flex-col gap-1">
          <button
            type="button"
            aria-label="Zoomer"
            onClick={() => zoomBy(1.5)}
            className="rounded-sm border border-border bg-card p-1.5 text-primary shadow-sm hover:bg-surface"
          >
            <Plus className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Dézoomer"
            onClick={() => zoomBy(1 / 1.5)}
            className="rounded-sm border border-border bg-card p-1.5 text-primary shadow-sm hover:bg-surface"
          >
            <Minus className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Réinitialiser la carte"
            onClick={reset}
            className="rounded-sm border border-border bg-card p-1.5 text-primary shadow-sm hover:bg-surface"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

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
            Survolez un pays en bleu pour afficher les informations de l'implantation. Zoomez puis
            faites glisser la carte pour l'explorer.
          </p>
        )}
      </div>
    </div>
  );
}
