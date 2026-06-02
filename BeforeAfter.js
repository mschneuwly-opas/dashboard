"use client";
import { useState, useMemo } from "react";
import { PRODUCTS, FINISHES } from "@/data/catalogue";

export default function RimCatalogue({ selectedSku, onSelect }) {
  const [dia, setDia] = useState("all");
  const [fin, setFin] = useState("all");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) =>
      (dia === "all" || p.diameter === +dia) &&
      (fin === "all" || p.finish === fin)
    );
  }, [dia, fin]);

  const finishKeys = Object.keys(FINISHES);

  return (
    <div className="flex flex-col h-full">
      {/* filters */}
      <div className="px-4 pt-4 pb-3 border-b border-ink-300 space-y-3">
        <div>
          <div className="font-display text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-2">Diamètre</div>
          <div className="flex gap-1.5 flex-wrap">
            {["all", "16", "17", "18"].map((d) => (
              <button
                key={d}
                onClick={() => setDia(d)}
                className={`font-display text-xs font-semibold tracking-wider uppercase px-3 py-1.5 border clip-chevron-sm transition ${
                  dia === d ? "bg-op border-op text-white" : "border-ink-300 text-neutral-500 hover:border-neutral-500"
                }`}
              >
                {d === "all" ? "Tous" : d + '"'}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="font-display text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-2">Finition</div>
          <div className="flex gap-1.5 flex-wrap">
            <button
              onClick={() => setFin("all")}
              className={`font-display text-xs font-semibold tracking-wider uppercase px-3 py-1.5 border clip-chevron-sm transition ${
                fin === "all" ? "bg-op border-op text-white" : "border-ink-300 text-neutral-500 hover:border-neutral-500"
              }`}
            >Toutes</button>
            {finishKeys.map((f) => (
              <button
                key={f}
                onClick={() => setFin(f)}
                title={FINISHES[f].label}
                className={`flex items-center gap-1.5 font-display text-xs font-semibold tracking-wider uppercase px-2.5 py-1.5 border clip-chevron-sm transition ${
                  fin === f ? "bg-op border-op text-white" : "border-ink-300 text-neutral-400 hover:border-neutral-500"
                }`}
              >
                <span className="w-3 h-3 rounded-full border border-white/20" style={{ background: FINISHES[f].swatch }} />
                {FINISHES[f].label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* grid */}
      <div className="flex-1 overflow-y-auto p-3 grid grid-cols-2 gap-2.5 content-start">
        {filtered.map((p) => (
          <button
            key={p.sku}
            onClick={() => onSelect(p)}
            className={`group relative bg-ink-700 border text-left transition ${
              selectedSku === p.sku ? "border-op" : "border-ink-300 hover:border-neutral-500"
            }`}
          >
            {selectedSku === p.sku && (
              <span className="absolute top-1.5 right-1.5 z-10 w-5 h-5 rounded-full bg-op text-white text-xs flex items-center justify-center">✓</span>
            )}
            <div className="aspect-square bg-ink-800 flex items-center justify-center p-2">
              <img src={p.images[0]} alt={p.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition" loading="lazy" />
            </div>
            <div className="p-2.5 border-t border-ink-300">
              <div className="font-display font-bold text-sm uppercase leading-none">{p.name}</div>
              <div className="text-[10px] text-neutral-500 mt-1">{p.sku}</div>
              <div className="flex items-center gap-1.5 mt-1.5">
                <span className="w-2.5 h-2.5 rounded-full border border-white/20" style={{ background: FINISHES[p.finish]?.swatch }} />
                <span className="text-[10px] text-neutral-400">{FINISHES[p.finish]?.label} · {p.diameter}"</span>
              </div>
            </div>
          </button>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-2 text-center text-neutral-500 text-sm py-10">Aucune jante pour ces filtres.</div>
        )}
      </div>
    </div>
  );
}
