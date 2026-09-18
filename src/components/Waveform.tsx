import { useMemo, useRef, useState, useCallback } from "react";

// Deterministic PRNG so the waveform is identical on every load.
const mulberry32 = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// Amplitude envelope shaped like connected speech: syllable bursts
// separated by short pauses.
const buildEnvelope = (count: number) => {
  const rand = mulberry32(46);
  const bars: number[] = [];
  let i = 0;
  while (i < count) {
    const syllable = 5 + Math.floor(rand() * 9);
    const peak = 0.45 + rand() * 0.55;
    for (let j = 0; j < syllable && i < count; j++, i++) {
      const shape = Math.sin((Math.PI * (j + 0.5)) / syllable);
      bars.push(Math.max(0.06, peak * shape * (0.7 + rand() * 0.3)));
    }
    const pause = rand() < 0.3 ? 2 + Math.floor(rand() * 3) : 1;
    for (let j = 0; j < pause && i < count; j++, i++) bars.push(0.04 + rand() * 0.04);
  }
  return bars;
};

const BAR_COUNT = 140;
const HEIGHT = 64;
const STEP = 4;

const Waveform = () => {
  const bars = useMemo(() => buildEnvelope(BAR_COUNT), []);
  const [pointer, setPointer] = useState<number | null>(null);
  const frame = useRef<number>();

  const handleMove = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * BAR_COUNT;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setPointer(x));
  }, []);

  const handleLeave = useCallback(() => {
    if (frame.current) cancelAnimationFrame(frame.current);
    setPointer(null);
  }, []);

  return (
    <svg
      viewBox={`0 0 ${BAR_COUNT * STEP} ${HEIGHT}`}
      preserveAspectRatio="none"
      className="block h-14 w-full md:h-20 touch-pan-y"
      aria-hidden="true"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {bars.map((amp, i) => {
        const distance = pointer === null ? Infinity : Math.abs(i - pointer);
        const boost = pointer === null ? 0 : Math.exp(-(distance * distance) / 40);
        const scale = 1 + boost * (1 / Math.max(amp, 0.15) - 1) * 0.85;
        const h = amp * (HEIGHT - 4);
        return (
          <rect
            key={i}
            className="wave-bar"
            x={i * STEP}
            y={(HEIGHT - h) / 2}
            width={2}
            height={h}
            style={{
              animationDelay: `${i * 6}ms`,
              animationFillMode: "backwards",
              transform: `scaleY(${scale})`,
              fill: boost > 0.35 ? "hsl(var(--ember))" : "hsl(var(--signal))",
              opacity: 0.35 + amp * 0.65,
            }}
          />
        );
      })}
    </svg>
  );
};

export default Waveform;
