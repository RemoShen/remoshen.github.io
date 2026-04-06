import React, { useEffect, useState } from "react";
import "./Research.css";
import Project from "./Project/Project";
import Publication from "./Publication/Publication";
import { fetchPublications } from "../../utils/fetchPublications";

export default function Research() {
  const projects = [];
  const [publications, setPublications] = useState([]);
  const [loadError, setLoadError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchPublications()
      .then((list) => {
        if (!cancelled) {
          setPublications(list);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setLoadError(e.message || "Failed to load");
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="researchContainer">
      <div className="researchContent">
        {loadError && (
          <p className="research-load-error" role="alert">
            {loadError}
          </p>
        )}
        {loading && !loadError && (
          <p className="research-loading">Loading…</p>
        )}
        {!loading &&
          !loadError &&
          publications.length === 0 &&
          projects.length === 0 && (
            <p className="research-empty">No publications or projects to show yet.</p>
          )}
        {publications.map((paper, index) => (
          <Publication key={paper.slug ?? paper.title + index} info={paper} />
        ))}
        {projects.map((project, index) => (
          <Project key={"project" + index} info={project} />
        ))}
      </div>
    </div>
  );
}
