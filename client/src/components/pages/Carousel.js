import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Slide from "./Slide.js";
import AI from "../../../dist/AI.png";
import Collector from "../../../dist/Collector.png";
import Roomcraft from "../../../dist/Roomcraft.png";
import Substack from "../../../dist/Substack.png";
export function CarouselWithContent() {
  return (
    <Carousel className="rounded-lg h-fit font-mono">
      <Slide
        title={"AI Research"}
        description={"Exploring New Ways to Create and Predict"}
        image={AI}
        link={"/portfolio/AI"}
      />
      <Slide
        title={"Web Dev"}
        description={"Creating Interactive User Experiences"}
        image={Roomcraft}
        link={"/portfolio/web"}
      />
      <Slide
        title={"Game Dev"}
        description={"Telling Interactive Stories"}
        image={Collector}
        link={"/portfolio/game"}
      />
      <Slide
        title={"Creative and Essay Writing"}
        description={"Crafting Worlds of Thoughts and Characters"}
        image={Substack}
        link={"/portfolio/game"}
      />
      {/*
      <Slide
        title={"Public Speaking"}
        description={"Untangling the Intrincacies of International Relations"}
        image={
          "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        }
        link={"/portfolio/speaking"}
      />
      <Slide
        title={"Music"}
        description={"Finding Soundscapes of Emotion"}
        image={
          "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        }
        link={"/portfolio/speaking"}
      />*/}
    </Carousel>
  );
}
