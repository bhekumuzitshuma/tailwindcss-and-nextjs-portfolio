"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, the name is <Bhekumuzi />",
      "I am a <Full Stack Developer />",
      "Also a guy who loves <web3.0 />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto"
        src="/profile.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] text-center">
          Software Developer
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#008080" />
        </h1>
        <div className="pt-5 space-x-1">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          {/* <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton mt-1">Projects</button>
          </Link>
             */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
