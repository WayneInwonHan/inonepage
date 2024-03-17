"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: ["react js", "next js"],
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Ignite Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Envision Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Serenity Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "fullstack",
    name: "Nova Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Zenith Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const getAllCategories = () => {
  const allCategories = projectData.reduce((acc, item) => {
    const categories = Array.isArray(item.category)
      ? item.category
      : [item.category];
    return acc.concat(categories);
  }, []);
  return ["all projects", ...new Set(allCategories)];
};

const Projects = () => {
  const [categories, setCategories] = useState(getAllCategories());
  const [category, setCategory] = useState("all projects");

  useEffect(() => {
    setCategories(getAllCategories());
  }, [projectData]);

  const filteredProjects = projectData.filter((project) => {
    if (category === "all projects") return true;
    if (Array.isArray(project.category)) {
      return project.category.includes(category);
    }
    return project.category === category;
  });

  return (
    <div className="w-full h-full gap-6 flex flex-row">
      <div className="w-full h-full flex flex-col">
        <div className="page-window">
          <div className="page-window-bar">
            <div></div>
            <div className="page-window-bar-buttons">
              <div className="page-window-bar-button"></div>
              <div className="page-window-bar-button"></div>
            </div>
          </div>
          <div className="page-window-content p-5 overflow-scroll">
            <div className="container mx-auto">
              <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                My Projects
              </h2>
              {/* tabs */}
              <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
                  {categories.map((category, index) => (
                    <TabsTrigger
                      onClick={() => setCategory(category)}
                      value={category}
                      key={index}
                      className="capitalize w-[162px] md:w-auto"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {/* tabs content */}
                <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {filteredProjects.map((project, index) => (
                    <TabsContent value={category} key={index}>
                      <ProjectCard project={project} />
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
