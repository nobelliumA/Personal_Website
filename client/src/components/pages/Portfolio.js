import React from "react";
import { CarouselWithContent } from "./Carousel";
const Portfolio = () => {
  return (
    <div className="w-[80%] m-auto animate-fade">
      <div className="flex-col">
        {/*<img src={profile} alt="image" className="rounded-full w-60 ml-8" />*/}
        <h1 className="   text-white text-6xl mt-20 mb-6 shadow-current ">Portfolio</h1>
        <CarouselWithContent />
        <h2 className="   text-white text-4xl mt-8 mb-6 font-mono shadow-current ">At a glance</h2>
        <div className=" bg-gray-600 p-6 rounded-md">
          <h2 className="text-white font-mono">AI & DATA</h2>
          <div className=" text-white content-center border-green-600  shadow-green-600 shadow-md pr-6 pt-2 pb-2  pl-6 font-mono border-4 rounded-md max-w-2xl text-2xl">
            <div>
              <span className="text-indigo-400">Regeneron STS Scholar</span> (Top 300 in the nation
              in the most prestigious and oldest research competition for high schoolers)
              <br />
              <br />
              <span className="text-indigo-400">First Authored Publication</span> with the MIT App
              Inventor lab
              <br />
              <br />
              <span className="text-indigo-400">Research Science Institute Scholar</span> (93 of the
              world's most accomplished high school students selected for a 6-week research program
              at MIT)
              <br />
              <br />
              <span className="text-indigo-400">
                1st Place Winner Citadel Women's Datathon
              </span>{" "}
              (1st place team out of 80+ people utilizing time series data analysis/modeling to
              predict regional unemployment with oil price flunctuations)
            </div>
          </div>
        </div>
        <div className=" bg-gray-600 mt-6 pt-1 p-6 rounded-md">
          <h2 className="mt-6 text-white font-mono">RESEARCH</h2>
          <div className=" text-white content-center border-green-600  shadow-green-600 shadow-md pr-6 pt-2 pb-2  pl-6 font-mono border-4 rounded-md max-w-2xl text-2xl">
            <div>
              <span className="text-indigo-400">Regeneron STS Scholar</span> (Top 300 in the nation
              in the most prestigious and oldest research competition for high schoolers)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
