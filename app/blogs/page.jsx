"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

import devScreenData from "@/lib/devScreenData";
import ArchiveCard from "@/components/ArchiveCard";

const getAllCategories = () => {
  const allCategories = devScreenData.reduce((acc, item) => {
    const categories = Array.isArray(item.category)
      ? item.category
      : [item.category];
    return acc.concat(categories);
  }, []);
  return ["all archives", ...new Set(allCategories)];
};

const Archives = () => {
  const [categories, setCategories] = useState(getAllCategories());
  const [category, setCategory] = useState("all archives");

  useEffect(() => {
    setCategories(getAllCategories());
  }, [devScreenData]);

  const filteredArchives = devScreenData.filter((devScreen) => {
    if (category === "all archives") return true;
    if (Array.isArray(devScreen.category)) {
      return devScreen.category.includes(category);
    }
    return devScreen.category === category;
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
              <h2 className="mb-6 xl:mb-8 text-center mx-auto font-bold text-[2rem]">
                All Archives
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
                  {filteredArchives.map((devScreen, index) => (
                    <TabsContent value={category} key={index}>
                      <ArchiveCard devScreen={devScreen} />
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

export default Archives;
