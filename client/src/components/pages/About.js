import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import profile from "../../../dist/profile.png";
const About = () => {
  return (
    <div className="h-screen flex items-center ">
      <div className="flex-col animate-fade">
        {/*<img src={profile} alt="image" className="rounded-full w-60 ml-8" />*/}
        <h1 className="  ml-8 text-white text-6xl mt-20 mb-6 shadow-current ">About</h1>
        <div className=" text-white flex-col content-center border-green-600  shadow-green-600 shadow-md pl-6 pr-6 pt-2 pb-2  font-mono border-4 rounded-md max-w-2xl ml-8 text-2xl">
          <p>
            I'm a current undergrad at MIT that is fascinated with the{" "}
            <span className="text-indigo-400">process of creation</span>.
            <br />
            <br />
            Whether it be through <span className="text-indigo-400">developing AI models</span> that
            seek to help doctors better diagnose and treat illness or help educators teach the power
            of coding, <span className="text-indigo-400">developing websites</span> centralizing and
            gamifying productivity, or <span className="text-indigo-400">crafting tales</span> of
            heritage, charm quarks, and international relations, my aim is use my skills to{" "}
            <span className="text-indigo-400">make something meaningful.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
