import { useEffect, useMemo, useState } from "react";
import "./Talks.css";

const MONTH_ABBR = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function talksUrl() {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}talks/talks.json`;
}

function siteUrl(href) {
  const url = href.trim();
  if (!url.startsWith("/")) return url;
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${url.slice(1)}`;
}

function dateKey(talk) {
  if (talk.date) {
    const match = String(talk.date).match(/^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/);
    if (match) {
      return `${match[1]}-${match[2] || "00"}-${match[3] || "00"}`;
    }
  }
  if (talk.year != null) return `${talk.year}-00-00`;
  return "0000-00-00";
}

function formatDateHeading(talk) {
  if (!talk.date) {
    return talk.year != null ? String(talk.year) : null;
  }
  const match = String(talk.date).match(/^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/);
  if (!match) return talk.date;
  const year = match[1];
  const month = match[2] ? MONTH_ABBR[Number(match[2]) - 1] : null;
  return month ? `${month} ${year}` : year;
}

function trimStr(value) {
  if (value == null) return "";
  return String(value).trim();
}

/** Inline markdown: **bold**, [label](url) */
function parseBody(text) {
  const parts = [];
  let i = 0;

  while (i < text.length) {
    if (text[i] === "[") {
      const linkMatch = text.slice(i).match(/^\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        parts.push({
          kind: "link",
          t: linkMatch[1],
          href: siteUrl(linkMatch[2]),
        });
        i += linkMatch[0].length;
        continue;
      }
    }

    if (text.slice(i, i + 2) === "**") {
      const end = text.indexOf("**", i + 2);
      if (end !== -1) {
        parts.push({ kind: "bold", t: text.slice(i + 2, end) });
        i = end + 2;
        continue;
      }
    }

    let next = text.length;
    const linkAt = text.indexOf("[", i);
    const boldAt = text.indexOf("**", i);
    if (linkAt >= 0) next = Math.min(next, linkAt);
    if (boldAt >= 0) next = Math.min(next, boldAt);

    if (next > i) {
      parts.push({ kind: "text", t: text.slice(i, next) });
      i = next;
    } else {
      parts.push({ kind: "text", t: text[i] });
      i += 1;
    }
  }

  return parts.filter((p) => p.t.length > 0);
}

function NarrativeBody({ parts }) {
  return (
    <p className="talk-item__body">
      {parts.map((seg, i) => {
        if (seg.kind === "link") {
          return (
            <a
              key={i}
              href={seg.href}
              className="talk-item__inline-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {seg.t}
            </a>
          );
        }
        if (seg.kind === "bold") {
          return (
            <strong key={i} className="talk-item__strong">
              {seg.t}
            </strong>
          );
        }
        return <span key={i}>{seg.t}</span>;
      })}
    </p>
  );
}

export default function Talks() {
  const [talks, setTalks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(talksUrl())
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load talks (${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const list = Array.isArray(data?.talks) ? data.talks : [];
        setTalks(list);
        setLoading(false);
      })
      .catch((e) => {
        if (cancelled) return;
        setLoadError(e.message || "Failed to load");
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const sorted = useMemo(
    () => [...talks].sort((a, b) => dateKey(b).localeCompare(dateKey(a))),
    [talks]
  );

  return (
    <div className="talksContainer">
      <div className="talksContent">
        {loadError && (
          <p className="talks-load-error" role="alert">
            {loadError}
          </p>
        )}
        {loading && !loadError && <p className="talks-loading">Loading…</p>}
        {!loading && !loadError && talks.length === 0 && (
          <p className="talks-empty">No events or news to show yet.</p>
        )}
        {!loading && !loadError && sorted.length > 0 && (
          <ol className="talks-list">
            {sorted.map((talk, index) => {
              const when = formatDateHeading(talk);
              const body = trimStr(talk.body);
              const parts = body ? parseBody(body) : [];

              return (
                <li
                  key={talk.id || `${when}-${index}`}
                  className="talk-item"
                >
                  {when ? <p className="talk-item__date">{when}</p> : null}
                  {parts.length > 0 ? <NarrativeBody parts={parts} /> : null}
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </div>
  );
}
