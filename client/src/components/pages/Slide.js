import { Link } from "react-router-dom";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import React from "react";
const Slide = ({ title, description, link, image }) => {
  return (
    <div className="relative h-full w-full">
      <img src={image} alt="image 1" className="object-cover w-screen" />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 font-mono text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography variant="lead" color="white" className="mb-12  font-monoopacity-80">
            {description}
          </Typography>
          <div className="flex justify-center gap-2">
            <Link to={link}>
              <Button size="lg" color="white" className="font-mono">
                Explore
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slide;
