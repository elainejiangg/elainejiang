import React from "react";
import "./Projects.css";
import DBT_img from "/Users/ejian/personal_projects/elainejiangg-website/src/assets/DBT_mountsinai.png";
import { FaRegImage } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 id="projects" className="font-bold">
        projects
      </h2>
      <div className="projects-list">
        <div className="project-item">
          <div className="img-container">
            <a href="https://github.com/elainejiangg/DBT_Breast_Cancer_Deep_Learning">
              <img className="w" src={DBT_img}></img>
            </a>
          </div>

          <div className="project-item-text ">
            <h3>Breast Cancer Lesion Object Detector</h3>
            <ul className="pb-2">
              <li>Python</li>
              <li>Pytorch</li>
              <li>Detectron2</li>
            </ul>
            <p>
              Trained Faster R-CNN for tomosynthesis (3D Mammograms). Work done
              under mentorship of the Dr. Li Shen Lab at Neuroscience Department
              @ Mount Sinai
            </p>
          </div>
        </div>
        <div className="project-item">
          <div className="img-container border"></div>

          <div className="project-item-text ">
            <h3>Project 2</h3>
            <ul className="pb-2">
              <li>Tech</li>
              <li>Tech</li>
              <li>Tech</li>
            </ul>
            <p>Description</p>
          </div>
        </div>
        <div className="project-item">
          <div className="img-container border"></div>

          <div className="project-item-text ">
            <h3>Project 3</h3>
            <ul className="pb-2">
              <li>Tech</li>
              <li>Tech</li>
              <li>Tech</li>
            </ul>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
