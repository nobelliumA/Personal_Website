import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="flex-col">
        <div className="flex content-center border-green-600  pl-6 pr-6 pt-2 pb-2 shadow-green font-mono border-4 rounded-md max-w-2xl ml-8">
          <TypeAnimation
            className="text-white "
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Jasmine Shone: AI Researcher",
              1500, // wait 1s before replacing "Mice" with "Hamsters"
              "Jasmine Shone: Full-stack Web Developer",
              1500,
              "Jasmine Shone: Game Dev",
              1500,
              "Jasmine Shone: Creative Writer",
              1500,
              "Jasmine Shone: Public Speaker",
              1500,
              "Jasmine Shone: Singer",
              1500,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <div className="flex ml-8 mt-8">
          <Link className="pr-8">Github</Link>
          <Link className="pr-8">LinkedIn</Link>
          <Link>Email</Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
