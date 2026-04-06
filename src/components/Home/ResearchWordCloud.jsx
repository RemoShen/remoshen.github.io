import { useEffect, useRef, useState } from "react";
import cloud from "d3-cloud";

/** { text, value 40–100, accent?: boolean } — larger value → larger font */
const RESEARCH_WORDS = [
  { text: "Visual Analytics", value: 100, accent: true },
  { text: "LLMs", value: 98, accent: true },
  { text: "Bio-Imaging", value: 96, accent: true },
  { text: "High-dim Data", value: 88, accent: true },
  { text: "Data Visualization", value: 76 },
  { text: "Interactive Systems", value: 72 },
  { text: "AI Agents", value: 68 },
  { text: "Image Analysis", value: 64 },
  { text: "Generative AI", value: 60 },
  { text: "Chart Animation", value: 56 },
  { text: "HCI", value: 53 },
  { text: "Interpretability", value: 50 },
  { text: "Visual Encodings", value: 47 },
];

function fontSizeFor(value, width, height) {
  const capByWidth = Math.min(38, Math.max(15, width * 0.05));
  const capByHeight = Math.max(12, height / 3.25);
  const cap = Math.min(capByWidth, capByHeight);
  const lo = Math.max(10, cap * 0.36);
  const t = (value - 45) / 58;
  return Math.round(lo + t * (cap - lo));
}

export default function ResearchWordCloud() {
  const wrapRef = useRef(null);
  const [{ width, height }, setSize] = useState({ width: 0, height: 0 });
  const [placed, setPlaced] = useState([]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const ro = new ResizeObserver((entries) => {
      const { width: rw, height: rh } = entries[0].contentRect;
      const w = Math.floor(rw);
      const hObs = Math.floor(rh);
      if (w < 1) return;
      const h =
        hObs >= 64 ? hObs : Math.max(100, Math.round(w * 0.26));
      setSize({ width: w, height: h });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (width < 48 || height < 48) return;

    let alive = true;
    const words = RESEARCH_WORDS.map((d) => ({ ...d }));

    const layout = cloud()
      .size([width, height])
      .words(words)
      .padding(2)
      .spiral("rectangular")
      .rotate(() => 0)
      .font("'Source Sans 3', system-ui, -apple-system, sans-serif")
      .fontSize((d) => fontSizeFor(d.value, width, height))
      .on("end", (w) => {
        if (alive) setPlaced(w || []);
      });

    layout.start();
    return () => {
      alive = false;
    };
  }, [width, height]);

  return (
    <div ref={wrapRef} className="home-research-cloud">
      {width > 0 && height > 0 && (
        <svg
          className="home-research-cloud__svg"
          width={width}
          height={height}
          role="img"
          aria-label={RESEARCH_WORDS.map((w) => w.text).join(", ")}
        >
          <title>Research themes</title>
          <g transform={`translate(${width / 2},${height / 2})`}>
            {placed.map((w) => (
              <text
                key={w.text}
                className={
                  "home-research-cloud__word" +
                  (w.accent ? " home-research-cloud__word--accent" : "")
                }
                textAnchor="middle"
                dominantBaseline="central"
                transform={`translate(${w.x},${w.y}) rotate(${w.rotate})`}
                style={{ fontSize: w.size }}
              >
                {w.text}
              </text>
            ))}
          </g>
        </svg>
      )}
    </div>
  );
}
