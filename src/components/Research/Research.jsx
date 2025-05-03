import React from "react";
import "./Research.css";
import Project from "./Project/Project";
import Publication from "./Publication/Publication";
import cast from "./cast.png";
import anomaly from "./anomaly.png";
import swin from "./swin.png"
import selector from "./selector.png";
import chart from "./chart.png";
import gen from "./gen.png";  
export default function Research() {
  const research = [
    {
      imageUrl: cast,
      title: "Authoring Data-Driven Chart Animations through Direct Manipulation",
      authors: [
        "Yuancheng Shen",
        "Yunhai Wang",
        "Yue Zhao",
        "Tong Ge",
        "Haoyan Shi",
        "Bongshin Lee"
      ],
      conference: "IEEE Transactions on Visualization and Computer Graphics 2024",
      link: "./CAST/CAST.html",
    },
    {
      imageUrl: swin,
      title: "Swinvision: Detecting Small Objects in Low-Light Environments",
      authors: [
        "Tao Dai",
        "Qi Wang",
        "Yuancheng Shen",
        "Shang Gao"
      ],
      conference: "IEEE Access 2025",
      link: "https://ieeexplore.ieee.org/document/10910170",
    },
    {
      imageUrl: anomaly,
      title:
        "Anomaly Detection Algorithm for Network Device Configuration based on Configuration Statement Tree",
      authors: [
        "Yuancheng Shen",
        "Rui Ban",
        "Xin Chen",
        "Runduo Hua",
        "Yunhai Wang",
      ],
      conference: "Computer Science 2023",
      link: "./Anomaly/Anomaly.html",
    }
  ];
  const projects = [
    // {
    //   imageUrl: cast,
    //   title: "CAST2: Authoring Data-Driven Chart Animations",
    //   authors: ["Yuancheng Shen", "Bongshin Lee", "Yunhai Wang"],
    //   Company: "China Unicom & Shandong University",
    //   link: "./CAST.html",
    // },
  ];
  return (
    <div className="researchContainer">
      <div className="researchHeader">
        <h1>Publications & Projects</h1>
        <div className="leftSperator"></div>
      </div>
      <div className="researchContent">
        {research.map((paper, index) => (
          <Publication key={"paper" + index} info={paper} />
        ))}
        {projects.map((project, index) => (
          <Project key={"project" + index} info={project} />
        ))}
      </div>
    </div>
  );
}
