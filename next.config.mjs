"use client";
import { useRef, useState, useEffect, useCallback } from "react";

// Interactive overlay over the photo to adjust wheel circles.
// wheels in IMAGE coords; we render scaled to the displayed size.
export default function WheelEditor({ imgEl, wheels, setWheels, displayW, displayH }) {
  const [active, setActive] = useState(null); // index being dragged
  const [mode, setMode] = useState(null); // 'move' | 'resize'
  const wrapRef = useRef(null);

  const scaleX = displayW / (imgEl?.naturalWidth || 1);
  const scaleY = displayH / (imgEl?.naturalHeight || 1);

  const toDisplay = (w) => ({ cx: w.cx * scaleX, cy: w.cy * scaleY, r: w.r * ((scaleX + scaleY) / 2) });
  const toImage = (px, py) => ({ x: px / scaleX, y: py / scaleY });

  const onPointerDown = (i, m) => (e) => {
    e.stopPropagation();
    setActive(i); setMode(m);
  };

  const onMove = useCallback((e) => {
    if (active === null || !wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const px = clientX - rect.left;
    const py = clientY - rect.top;
    setWheels((prev) => {
      const next = [...prev];
      const w = { ...next[active] };
      const img = toImage(px, py);
      if (mode === "move") {
        w.cx = img.x; w.cy = img.y;
      } else if (mode === "resize") {
        const d = toDisplay(w);
        const dist = Math.hypot(px - d.cx, py - d.cy);
        w.r = dist / ((scaleX + scaleY) / 2);
        w.r = Math.max(10, w.r);
      }
      next[active] = w;
      return next;
    });
  }, [active, mode, scaleX, scaleY, setWheels]);

  const onUp = useCallback(() => { setActive(null); setMode(null); }, []);

  useEffect(() => {
    if (active === null) return;
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [active, onMove, onUp]);

  const removeWheel = (i) => (e) => {
    e.stopPropagation();
    setWheels((prev) => prev.filter((_, k) => k !== i));
  };

  const addWheel = (e) => {
    const rect = wrapRef.current.getBoundingClientRect();
    const px = e.clientX - rect.left, py = e.clientY - rect.top;
    const img = toImage(px, py);
    setWheels((prev) => [...prev, { cx: img.x, cy: img.y, r: 70 }]);
  };

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 cursor-crosshair"
      onDoubleClick={addWheel}
      title="Double-clic pour ajouter une roue"
    >
      {wheels.map((w, i) => {
        const d = toDisplay(w);
        return (
          <div key={i}>
            {/* circle */}
            <div
              className="absolute rounded-full border-2 border-op pointer-events-none"
              style={{ left: d.cx - d.r, top: d.cy - d.r, width: d.r * 2, height: d.r * 2, boxShadow: "0 0 0 1px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(0,0,0,0.4)" }}
            />
            {/* center handle (move) */}
            <div
              onMouseDown={onPointerDown(i, "move")}
              onTouchStart={onPointerDown(i, "move")}
              className="absolute w-5 h-5 -ml-2.5 -mt-2.5 rounded-full bg-op border-2 border-ink-900 cursor-move"
              style={{ left: d.cx, top: d.cy }}
            />
            {/* resize handle (right edge) */}
            <div
              onMouseDown={onPointerDown(i, "resize")}
              onTouchStart={onPointerDown(i, "resize")}
              className="absolute w-4 h-4 -ml-2 -mt-2 rounded-full bg-white border-2 border-op cursor-ew-resize"
              style={{ left: d.cx + d.r, top: d.cy }}
            />
            {/* remove */}
            <button
              onClick={removeWheel(i)}
              className="absolute w-5 h-5 -ml-2.5 -mt-2.5 rounded-full bg-red-600 text-white text-xs leading-none flex items-center justify-center"
              style={{ left: d.cx, top: d.cy - d.r }}
              title="Supprimer cette roue"
            >×</button>
            {/* label */}
            <div
              className="absolute font-display text-[10px] tracking-widest uppercase text-op bg-ink-900/80 px-2 py-0.5 pointer-events-none"
              style={{ left: d.cx - d.r, top: d.cy + d.r + 6 }}
            >
              {i === 0 ? "Avant" : i === 1 ? "Arrière" : `Roue ${i + 1}`}
            </div>
          </div>
        );
      })}
    </div>
  );
}
