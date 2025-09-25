import React from "react";
import "./Research.css";
import Project from "./Project/Project";
import Publication from "./Publication/Publication";
export default function Research() {
  const research = [
    {
      imageUrl: '/BioSet/teaser.png',
      title: "BioSET - Biomarker-based Spatial co-Expression analysis in Tumor environments",
      authors: [
        "Chahat Kalsi",
        "Yuancheng Shen",
        "Sophia Gaupp",
        "Luca Reichmann",
        "Meri Rogava",
        "Michael Krone",
        "Saeed Boorboor",
        "Robert Krueger"
      ],
      conference: "IEEE VIS 2025",
      link: "",
    },
    {
      imageUrl: '/CAST/teaser.png',
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
      imageUrl: '/SwinVision/teaser.png',
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
