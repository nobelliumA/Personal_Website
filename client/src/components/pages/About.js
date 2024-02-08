import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="flex-col">
        <h1 className="  ml-8 text-white text-6xl mb-6 shadow-current ">About</h1>
        <div className="flex-col content-center border-green-600  shadow-green-600 shadow-md pl-6 pr-6 pt-2 pb-2  font-mono border-4 rounded-md max-w-2xl ml-8  ">
          <TypeAnimation
            className="text-white "
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I'm a current undergrad at MIT,\n exploring topics in AI and CS, \n as well as music, writing, and speaking.",
            ]}
            wrapper="span"
            speed={50}
            style={{
              whiteSpace: "pre-line",
              height: "195px",
              display: "block",
              fontSize: "2em",
              display: "inline-block",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default About;
