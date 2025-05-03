import React from "react";
import "./Project.css";
export default function Project({ info }) {
  return (
    <div
      className="project-item"
      onClick={() => {
        window.location.href = info.link;
      }}
    >
      <div
        className="proImg"
        style={{ backgroundImage: `url(${info.imageUrl})` }}
      ></div>
      <div className="proInfo">
        <div className="proCategory">[Project]</div>
        <div className="proTitle">{info.title}</div>
        <div className="proAuthor">
          {info.authors.map((author, index) => (
            <React.Fragment key={index}>
              {index > 0 && ", "}
              {author === "Yuancheng Shen" ? (
                <span className="highlight-author">{author}</span>
              ) : (
                <span>{author}</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="proConf">{info.Company}</div>
      </div>
    </div>
  );
}
