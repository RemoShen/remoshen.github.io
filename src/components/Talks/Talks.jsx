import { useEffect, useMemo, useState } from "react";
import "./Talks.css";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const LINK_KEYS = ["slides", "video", "poster", "paper", "website"];

function talksUrl() {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}talks/talks.json`;
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

function formatDate(talk) {
  if (!talk.date) {
    return talk.year != null ? String(talk.year) : null;
  }
  const match = String(talk.date).match(/^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/);
  if (!match) return talk.date;
  const year = match[1];
  const month = match[2] ? MONTHS[Number(match[2]) - 1] : null;
  return month ? `${month} ${year}` : year;
}

function talkLinks(talk) {
  return LINK_KEYS.flatMap((key) => {
    const url = talk[key] == null ? "" : String(talk[key]).trim();
    return url ? [{ label: key, url }] : [];
  });
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
          <p className="talks-empty">No talks or presentations to show yet.</p>
        )}
        {!loading && !loadError && sorted.length > 0 && (
          <ol className="talks-list">
            {sorted.map((talk, index) => {
              const links = talkLinks(talk);
              const when = formatDate(talk);
              const venue = [when, talk.event, talk.location]
                .map((part) => (part == null ? "" : String(part).trim()))
                .filter(Boolean)
                .join(", ");
              const award = talk.award ? String(talk.award).trim() : "";

              return (
                <li key={talk.id || talk.title + index} className="talk-item">
                  {venue ? (
                    <p className="talk-item__venue">
                      {venue}
                      {award ? ` (${award})` : null}
                    </p>
                  ) : null}
                  <p className="talk-item__talk">
                    {talk.type ? `${talk.type}: ` : null}
                    {talk.title}
                  </p>
                  {links.length > 0 ? (
                    <p className="talk-item__links">
                      {links.map(({ label, url }) => (
                        <a
                          key={label}
                          href={url}
                          className="talk-item__link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          [{label}]
                        </a>
                      ))}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </div>
  );
}
