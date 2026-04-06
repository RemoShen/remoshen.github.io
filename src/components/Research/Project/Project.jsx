import React from "react";
import "./Project.css";
import { getResourceLinks } from "../../../utils/resourceLinks";

export default function Project({ info }) {
  const resources = getResourceLinks(info);

  return (
    <article className="project-item">
      <div
        className="proImg"
        style={{ backgroundImage: `url(${info.imageUrl})` }}
        aria-hidden="true"
      />
      <div className="proInfo">
        <div className="proCategory">Project</div>
        <div className="proTitle">{info.title}</div>
        <div className="proAuthor">
          {info.authors.map((author, index) => (
            <React.Fragment key={index}>
              {index > 0 && ", "}
              {/^Yuancheng Shen/.test(author) ? (
                <span className="highlight-author">{author}</span>
              ) : (
                <span>{author}</span>
              )}
            </React.Fragment>
          ))}
        </div>
        {info.Company ? (
          <div className="proConf">{info.Company}</div>
        ) : null}
        {resources.length > 0 ? (
          <div className="proLinks">
            {resources.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                className="proLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                [{label}]
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
