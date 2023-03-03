import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Lyncteck Limited",
    description:
      "Lyncteck is a media company that teaches people (Gen-Z and Milennials) how to start, run and scale an online business, it has a built-in CRM which uses SMTP integrated to WordPress",
    image: "/project-lyncteck.jpg",
    github: "https://lyncteck.com",
    link: "https://lyncteck.com/",
  },
  {
    name: "Airbnb Clone",
    description: "work in progress.....",
    image: "/platoio.png",
    github: "/",
    link: "/",
  },
  {
    name: "Netflix Clone",
    description:
      "I could not afford a Netflix account so I built my own using Netx.js, Firebase and Styled-Components",
    image: "/netflix.jpg",
    github: "https://github.com/bhekumuzitshuma/netflix-clone",
    link: "https://github.com/bhekumuzitshuma/netflix-clone",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-light text-4xl tracking-[15px] uppercase mb-8">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank" rel="no-follow">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
