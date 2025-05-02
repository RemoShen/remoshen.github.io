import React from "react";
import "./Home.css";
import photo from "./photo.JPG";
export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeContent">
        <div className="homeContentLeft">
          <img src={photo} alt="avatar" />
          <div className="leftSperator"></div>
          <section className="hrf">
            <a
              href="https://github.com/jshmsyc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                height="32"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 .75a7.25 7.25 0 0 0-2.295 14.12c.36.07.495-.155.495-.345v-1.21c-2.015.45-2.44-.97-2.44-.97-.33-.84-.805-1.07-.805-1.07-.66-.45.06-.44.06-.44.735.05 1.12.76 1.12.76.655 1.12 1.72.8 2.135.62.07-.45.255-.76.465-.935-1.625-.185-3.34-.805-3.34-3.575 0-.785.28-1.42.76-1.92-.075-.185-.33-.91.075-1.9 0 0 .6-.19 1.95.735a6.64 6.64 0 0 1 1.78-.245c.6 0 1.205.085 1.78.25 1.35-.93 1.95-.74 1.95-.74.405.99.15 1.715.075 1.9.48.5.76 1.135.76 1.92 0 2.775-1.72 3.39-3.34 3.575.255.22.495.66.495 1.335v1.97c0 .195.135.42.495.345A7.25 7.25 0 0 0 8 .75"
                ></path>
              </svg>
            </a>

            {/* <a href="mailto:ys6345@nyu.edu" rel="noopener noreferrer">
              <svg
                width="32"
                height="32"
                viewBox="0 0 512 512"
                fillRule="evenodd"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
            </a> */}
              <a
              href="https://scholar.google.com/citations?user=jPS1Fz0AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                <path fill="#fff" d="M256 411.12L0 202.667 256 0z"/>
                <path fill="#e5e7eb" d="M256 411.12l256-208.453L256 0z"/>
                <circle fill="#f3f4f6" cx="256" cy="362.667" r="149.333"/>
                <path fill="#e5e7eb" d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"/>
              </svg>
            </a>
            <a href="./CV/CV.html" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="32"
                height="32"
              >
                <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"></path>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"></path>
              </svg>
            </a>

            <a
              href="https://x.com/remoshen1998"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="32" height="32" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M1199.61 0H889.965L600.001 410.293L310.035 0H0L462.293 630.879L0 1227H310.035L600.001 816.707L889.965 1227H1199.61L737.707 596.121L1199.61 0ZM347.293 111.293L600.001 470.293L852.707 111.293H1052.71L600.001 763.707L147.293 111.293H347.293ZM147.293 1115.71L600.001 463.293L1052.71 1115.71H852.707L600.001 756.707L347.293 1115.71H147.293Z" fill="currentColor" />
                </g>
              </svg>
            </a>
          </section>
          <div className="contact-info">
            <div className="contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{marginRight: '6px', verticalAlign: 'middle'}}>
                <path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.11 11.31 7.41 11.56.36.3.82.44 1.29.44.47 0 .93-.15 1.29-.44C13.89 22.31 21 16.25 21 11c0-4.97-4.03-9-9-9zm0 17.88C10.14 18.09 5 13.86 5 11c0-3.86 3.14-7 7-7s7 3.14 7 7c0 2.86-5.14 7.09-7 8.88z" fill="#fff"/>
                <circle cx="12" cy="11" r="3" fill="#6ec1f6"/>
              </svg>
              370 Jay St, Brooklyn, NY, USA 11201
            </div>
            <div className="contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{marginRight: '6px', verticalAlign: 'middle'}}>
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" fill="#fff"/>
              </svg>
              +1-(201)-204-2218
            </div>
            <div className="contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{marginRight: '6px', verticalAlign: 'middle'}}>
                <path d="M4 4h16v16H4V4zm8 8l8-5.333V6l-8 5.333L4 6v.667L12 12z" fill="#fff"/>
              </svg>
              <a href="mailto:remo.shen@nyu.edu" className="email-link">remo.shen@nyu.edu</a>
            </div>
          </div>
        </div>
        <div className="homeContentRight">
          <div className="big-name-title">Yuancheng (Remo) Shen</div>
          <p>
            Hello, I'm Remo. I'm currently a Ph.D. student major in Comouter Science at Tandon
            School of Engineering, New York University. I'm working at the{" "}
            <a href="https://ideas-lab.net/" target="_blank" rel="noreferrer">
              Visualization and Data Analytics Research Center (VIDA)
            </a>
            , under the supervision of Prof. <space></space>
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
            My research focuses on data visualization and visual analytics, with a particular emphasis on biomedical image analysis. Specifically, I hope to develop novel visual analytics techniques and interactive systems that facilitate the exploration, interpretation, and quantitative analysis of complex biomedical images and high-dimensional imaging datasets. 
            My work aims to empower researchers and clinicians to gain deeper insights into biomedical phenomena through advanced tools.
          </p>
          <p>
            I received my master's degree at Shandong University where I worked
            at the{" "}
            <a href="https://ideas-lab.net/" target="_blank" rel="noreferrer">
              IDEAS Lab
            </a>
            , advised by Prof.<space></space>
            <a
              href="http://www.yunhaiwang.net/"
              target="_blank"
              rel="noreferrer"
            >
              Yunhai Wang
            </a>
            . During my master's studies, I focused on the design and implementation of chart animation grammars and related interactive visual analytics systems.
            My work aimed to enhance users' ability to explore and interpret data by designing expressive and intuitive animations for visual representations.

          </p>
        </div>
      </div>
    </div>
  );
}
