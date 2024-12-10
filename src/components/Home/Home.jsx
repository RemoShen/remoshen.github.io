import React from "react";
import "./Home.css";
import photo from "./photo.JPG";
export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeHeader">
        <h1>Personal profile</h1>
        <div className="leftSperator"></div>
      </div>
      <div className="homeContent">
        <div className="homeContentLeft">
          <img src={photo} alt="" />
          <div className="leftSperator"></div>
          <section className="hrf">
            <a
              href="https://github.com/jshmsyc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                height="20"
                viewBox="0 0 16 16"
                version="1.1"
                width="20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 .75a7.25 7.25 0 0 0-2.295 14.12c.36.07.495-.155.495-.345v-1.21c-2.015.45-2.44-.97-2.44-.97-.33-.84-.805-1.07-.805-1.07-.66-.45.06-.44.06-.44.735.05 1.12.76 1.12.76.655 1.12 1.72.8 2.135.62.07-.45.255-.76.465-.935-1.625-.185-3.34-.805-3.34-3.575 0-.785.28-1.42.76-1.92-.075-.185-.33-.91.075-1.9 0 0 .6-.19 1.95.735a6.64 6.64 0 0 1 1.78-.245c.6 0 1.205.085 1.78.25 1.35-.93 1.95-.74 1.95-.74.405.99.15 1.715.075 1.9.48.5.76 1.135.76 1.92 0 2.775-1.72 3.39-3.34 3.575.255.22.495.66.495 1.335v1.97c0 .195.135.42.495.345A7.25 7.25 0 0 0 8 .75"
                ></path>
              </svg>
              <span>github</span>
            </a>
            {/* <a
              href="https://twitter.com/jshmsyc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 300 300"
                fillRule="evenodd"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
              </svg>
              <span>X(twitter)</span>
            </a> */}
            <a href="mailto:remoteshen@gmail.com" rel="noopener noreferrer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 512 512"
                fillRule="evenodd"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
              <span>remoteshen@gmail.com</span>
            </a>
            <a href="./CV/CV.html" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="20"
                height="20"
              >
                <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"></path>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"></path>
              </svg>
              <span>CV</span>
            </a>
          </section>
        </div>
        <div className="homeContentRight">
          <p>Welcome!</p>
          <p>I am Remo Shen, my Chinese name is Yuancheng Shen.</p>
          <p>
            I'm currently a Ph.D. student major in Comouter Science at Tandon
            School of Engineering, New York University. I'm working at the{" "}
            <a href="https://ideas-lab.net/" target="_blank" rel="noreferrer">
              VIDA Lab
            </a>
            , advised by Prof.
            <a
              href="https://kruegert.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              Robert Krueger
            </a>
            .
          </p>
          <p>
            I received my master's degree at Shandong University where I worked
            at the{" "}
            <a href="https://ideas-lab.net/" target="_blank" rel="noreferrer">
              IDEAS Lab
            </a>
            , advised by Prof.
            <a
              href="http://www.yunhaiwang.net/"
              target="_blank"
              rel="noreferrer"
            >
              Yunhai Wang
            </a>
            .
          </p>
          <p>
            My research focuses on data visualization and visual analytics. I am
            now working on biomedical data visualization and visual analytics.
            Before that I worked on designing chart animations' grammar and
            interactive systems that empower users to gain deeper insights into
            data.
          </p>
        </div>
      </div>
    </div>
  );
}
