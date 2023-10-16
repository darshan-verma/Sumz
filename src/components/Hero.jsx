import React from "react";

import { logo } from "../assets 4";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/darshan-verma", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">Future , "AI"</span>
      </h1>
      <h2 className="desc">
      "Experience the Future of Content Digestion: Dive into the World of AI-Powered Article Summarization. Simplify Complex Texts, Save Time, and Enhance Your Productivity with Our Cutting-Edge Summarizer Technology."
      </h2>
    </header>
  );
};

export default Hero;
