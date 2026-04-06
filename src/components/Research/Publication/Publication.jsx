import React from "react";
import "./Publication.css";
import { getResourceLinks } from "../../../utils/resourceLinks";

export default function Publication({ info }) {
  const resources = getResourceLinks(info);

  return (
    <article className="publication-item">
      <div
        className="pubImg"
        style={{ backgroundImage: `url(${info.imageUrl})` }}
        aria-hidden="true"
      />
      <div className="pubInfo">
        <div className="pubTitle">{info.title}</div>
        <div className="pubAuthor">
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
        {info.conference || info.award ? (
          <div className="pubConf">
            {info.conference}
            {info.award ? (
              <>
                {info.conference ? " " : null}
                <strong className="pubConf__award">({info.award})</strong>
              </>
            ) : null}
          </div>
        ) : null}
        {resources.length > 0 ? (
          <div className="pubLinks">
            {resources.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                className="pubLink"
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
