import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <a
        href="#home"
        className="header-left group transition-all duration-300 ease-in-out"
      >
        <span class="bg-left-bottom bg-gradient-to-r from-blue-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-slate-400">
          <p className="full-name">elaine jiang.</p>
          <p className="short-name">ej.</p>
        </span>
      </a>
      <nav className="header-right">
        <a
          href="#projects"
          className="xs:px-2 px-1 group transition-all duration-300 ease-in-out"
        >
          <span class="bg-left-bottom bg-gradient-to-r from-blue-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-slate-400">
            projects
          </span>
        </a>
        <a
          href="#skills"
          className="xs:px-2  px-1 group transition-all duration-300 ease-in-out"
        >
          <span class="bg-left-bottom bg-gradient-to-r from-blue-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-slate-400">
            skills
          </span>
        </a>
        <a
          href="#resume"
          className="xs:px-2 px-1 group transition-all duration-300 ease-in-out"
        >
          <span class="bg-left-bottom bg-gradient-to-r from-blue-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-slate-400">
            resume
          </span>
        </a>
        <a
          href="#contact"
          className="xs:px-2 px-1 group transition-all duration-300 ease-in-out"
        >
          <span class="bg-left-bottom bg-gradient-to-r from-blue-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-slate-400">
            contact
          </span>
        </a>
        <a
          class="group text-pink-500 transition-all duration-300 ease-in-out"
          href="#"
        ></a>
      </nav>
    </header>
  );
};

export default Header;
