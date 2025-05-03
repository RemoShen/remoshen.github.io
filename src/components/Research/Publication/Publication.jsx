import React from "react";
import "./Publication.css";
export default function Publication({ info }) {
  return (
    <div
      className="publication-item"
      onClick={() => {
        if (info.link !== "") {
          window.location.href = info.link;
        }
      }}
    >
      <div
        className="pubImg"
        style={{ backgroundImage: `url(${info.imageUrl})`}}
      ></div>
      <div className="pubInfo">
        <div className="pubCategory">[Academic Paper]</div>
        <div className="pubTitle">{info.title}</div>
        <div className="pubAuthor">
          {info.authors.map((author, index) => (
            <React.Fragment key={index}>
              {index > 0 && ", "}
              {(author === "Yuancheng Shen" || author === "Yuancheng Shen*") ? (
                <span className="highlight-author">{author}</span>
              ) : (
                <span>{author}</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="pubConf">{info.conference}</div>
      </div>
    </div>
  );
}
