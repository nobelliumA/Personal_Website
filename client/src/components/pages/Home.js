import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";
import { useState } from "react";
const Home = () => {
  const [textColor, setTextColor] = useState("white");
  const [link, setLink] = useState("/");
  return (
    <div className="h-screen flex items-center">
      <div className="flex-col">
        <h1 className="ml-8 text-white text-6xl mb-6 shadow-current ">Jasmine Shone</h1>
        <div className="flex-col content-center border-green-600  shadow-green-600 shadow-md pl-6 pr-6 pt-2 pb-2  font-mono border-4 rounded-md max-w-2xl ml-8  ">
          <Link to={link} style={{ color: textColor }}>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "AI Researcher",
                () => {
                  setTextColor("mediumpurple");
                  setLink("/portfolio/AI");
                },
                1500, // wait 1s before replacing "Mice" with "Hamsters"

                "Full-Stack Web Dev",
                () => {
                  setTextColor("aqua");
                  setLink("/portfolio/web");
                },
                1500,

                "Game Dev",
                () => {
                  setTextColor("deeppink");
                  setLink("/portfolio/game");
                },
                1500,

                "Creative & Essay Writer",
                () => {
                  setTextColor("darkorange");
                  setLink("/portfolio/writing");
                },
                1500,

                "Public Speaker",
                () => {
                  setTextColor("lightsalmon");
                  setLink("/portfolio/speaking");
                },
                1500,

                "Singer & Producer",
                () => {
                  setTextColor("dodgerblue");
                  setLink("/portfolio/singing");
                },
                1500,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </Link>
        </div>
        <div className="flex ml-8 mt-8 align-middle items-center text-indigo-700">
          <a
            className=" hover:text-indigo-700 no-underline text-green-700 hover:-translate-y-1 duration-300 hover:scale-110"
            href="https://www.linkedin.com/in/jasmine-shone-a90853149/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
          <a
            className="hover:text-indigo-700 pl-8 no-underline text-green-700 hover:-translate-y-1 duration-300 hover:scale-110"
            href="https://github.com/nobelliumA"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
          <a
            className="hover:text-indigo-700 pl-8 no-underline text-green-700 hover:-translate-y-1 duration-300 hover:scale-110"
            href="mailto:jasshone@mit.edu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-mailbox"
              viewBox="0 0 16 16"
            >
              <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3m0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m2.646 1A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3z" />
              <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
