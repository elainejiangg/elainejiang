import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h2 id="resume">resume</h2>
      <a
        href="https://drive.google.com/uc?export=download&id=1ar1MihVLGIzloGW7GrS1FllhR4Bmal-p"
        download="ElaineJiang_Resume.pdf"
        className="group transition-all duration-300 ease-in-out"
      >
        <button className="py-2 mt-1 mb-1 rounded text-black">
          <span class="bg-left-bottom bg-gradient-to-r from-blue-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-slate-400">
            Download Resume
          </span>
        </button>
      </a>
      <iframe
        src="https://drive.google.com/file/d/1ar1MihVLGIzloGW7GrS1FllhR4Bmal-p/preview"
        width="100%"
        height="700px"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

<a
  href="#home"
  className="header-left group transition-all duration-300 ease-in-out"
>
  <span class="bg-left-bottom bg-gradient-to-r from-blue-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-slate-400">
    <p className="full-name">elaine jiang.</p>
    <p className="short-name">ej.</p>
  </span>
</a>;
export default Resume;
