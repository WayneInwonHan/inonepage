import React from "react";

import Image from "next/image";
import { Button } from "../components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FaLinkedin, FaGithub, FaRocket } from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";

const journeyData = [
  {
    title: "journey",
    data: [
      {
        company: "V1 Tech",
        role: "Full Stack Web Developer",
        years: "2022 - Present",
        description: [
          "• Developed a new e-commerce website, transitioning from a legacy WooCommerce/AWS platform with over 18,000 products",
          "• Enhanced search filter, upselling element, and user-friendly product page design led to 9% more sales than the previous year",
          "• Increased the website visitors to 19% more daily from 2.3k using SEO, backlinks, and conversion rate optimization in Q3, Q4 2023",
        ],
      },
      {
        company: "Texas Madang",
        role: "Full Stack Developer & Co-Founder",
        years: "2021 - 2022",
        description: [
          "• Developed in Ruby on Rails, a community website to provide convenience for over 10k+ Korean population in Austin, TX.",
          "• Conceptualized layout structure, created dynamic web pages with Rails, and designed UI resources across 30+ pages",
          "• Launched the service with classified advertisements from 25+ local businesses and made 2.75k impressions in the first month",
        ],
      },
      {
        company: "ThumBrand",
        role: "Web Developer",
        years: "2020 - 2021",
        description: [
          "• Developed an internal tool using Flask/Flutter to control multiple workloads, provide progress to customers, and check the report",
          "• Built functional websites for various industries using WordPress, CSS, and JavaScript, resulting in a better user experience",
          "• Created an e-commerce website on the WooCommerce platform integrated with customized packing and shipping options",
        ],
      },
      {
        company: "Breakers BBQ",
        role: "IT Support & Store Manager",
        years: "2017 - 2020",
        description: [
          "• Developed an in-house program with PyQt5 and MySQL to oversee the total expenses of every branch, which reined in overspending by 13%",
          "• Updated business information on Google, Yelp, and social media platforms and assisted with technical troubles in other branches",
          "• Collected customer data from all other location stores and set up auto email for retargeting campaigns using MailChimp",
          "• Achieved rank #3 restaurant in Frisco on TripAdvisor and implemented promotion events resulting in an 18% sales increase",
        ],
      },
      {
        company: "CKS Solution",
        role: "QA Engineer",
        years: "2016 - 2017",
        description: [
          "• Visited the Samsung SDI customer sites (Bloomberg, GE, Duke Energy, GME) to resolve ESS Battery technical issues and upgrade the firmware",
          "• Organized ESS Battery/LCD/PDP parts inventory and updated in a company database system to increase work efficiency",
          "• Maintained shipping orders and verified incoming items",
        ],
      },
      {
        company: "Samsung Thales",
        role: "PRODUCT ENGINEER INTERN",
        years: "2013 - 2014",
        description: [
          "• Participated in Tac-Elint System analysis kit assembly, performed PCB quality control, and upgraded firmware",
          "• Assisted in conducting calibration related inspection (Narrowband signals, temperature control, and timing/offset control)",
          "• Diagnosed issues with the oscilloscope and filed the test report",
        ],
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        imgPath: "/about/html.svg",
      },
      {
        imgPath: "/about/css.svg",
      },
      {
        imgPath: "/about/tailwind.svg",
      },
      {
        imgPath: "/about/js.svg",
      },
      {
        imgPath: "/about/react.svg",
      },
      {
        imgPath: "/about/nextjs.svg",
      },
      {
        imgPath: "/about/ruby.svg",
      },
      {
        imgPath: "/about/rails.svg",
      },
      {
        imgPath: "/about/nodejs.svg",
      },
      {
        imgPath: "/about/mysql.svg",
      },
      {
        imgPath: "/about/postgresql.svg",
      },
      {
        imgPath: "/about/aws.svg",
      },
      {
        imgPath: "/about/shopify.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        name: "LazyVim",
        color: "#2F7DE9",
        purpose: "IDE",
      },
      {
        name: "GitHub",
        color: "#020408",
        purpose: "Version Control",
      },
      {
        name: "AdobeXD",
        color: "#470137",
        purpose: "UI Design",
      },
      {
        name: "Blender",
        color: "#E1790B",
        purpose: "3D Modeling",
      },
      {
        name: "Obsidian",
        color: "#A88BFA",
        purpose: "Note & Brainstorm",
      },
      {
        name: "Be Focused",
        color: "#E23527",
        purpose: "Time Management",
      },
    ],
  },
  {
    title: "interests",
    data: [
      {
        field: "e-commerce",
      },
      {
        field: "Saas Solution (Media / Healthcare)",
      },
      {
        field: "3D / AR / MR Immersive Experiences",
      },
      {
        field: "NFT Based Browser Game",
      },
      {
        field: "Unity Project",
      },
    ],
  },
];

const AboutTabs = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <div className="relative flex-1 p-5">
      <Tabs
        defaultValue="aboutme"
        className="flex flex-col justify-center items-center"
      >
        <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
          <TabsTrigger className="w-[162px] xl:w-auto" value="aboutme">
            A Little About Me
          </TabsTrigger>
          <TabsTrigger className="w-[162px] xl:w-auto" value="journey">
            My Journey
          </TabsTrigger>
          <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
            Skills
          </TabsTrigger>
        </TabsList>
        <div className="text-lg mt-12 xl:mt-4 w-full">
          <TabsContent value="aboutme">
            <div className="text-center xl:text-left">
              <h3 className="h3 mb-4">Title</h3>
              <p className="subtitle max-w-xl mx-auto xl:mx-0">content </p>
            </div>
            <div className="flex flex-row mt-4 gap-x-2">
              <Button className="gap-x-2 jelly-btn bg-black hover:bg-gray-700">
                <FaGithub size={16} />
                GitHub
              </Button>
              <Button className="gap-x-2 jelly-btn bg-blue-700 hover:bg-blue-500">
                <FaLinkedin size={16} />
                LinkedIn
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="journey">
            <div>
              <div className="grid md:grid-cols">
                <div className="flex flex-col gap-y-6">
                  <div className="flex gap-x-4 items-center text-[22px] text-primary">
                    <FaRocket />
                    <h4 className="capitalize font-medium">
                      {getData(journeyData, "journey").title}
                    </h4>
                  </div>
                  <div className="flex flex-col gap-y-6">
                    {getData(journeyData, "journey").data.map((item, index) => {
                      const { company, role, years, description } = item;
                      return (
                        <div className="flex gap-x-6 group" key={index}>
                          <div className="h-[150px] w-[1px] bg-border relative ml-2">
                            <div className="w-[10px] h-[10px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[150px] transition-all duration-500"></div>
                          </div>
                          <div className="flex w-full flex-col">
                            <div className="font-semibold text-xl leading-none mb-1">
                              {company}
                            </div>
                            <div className="flex flex-row w-full justify-between mb-1">
                              <div className="text-[16px] text-black">
                                {role}
                              </div>
                              <div className="text-sm text-gray-600">
                                {years}
                              </div>
                            </div>
                            {Array.isArray(description) ? (
                              description.map((desc, descIndex) => (
                                <div
                                  key={descIndex}
                                  className="text-[14px] leading-5"
                                >
                                  {desc}
                                </div>
                              ))
                            ) : (
                              <div className="text-[14px]">{description}</div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="skills">
            <div className="text-center xl:text-left">
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-2 xl:text-left">
                  Here are a few technologies I'v been working with recently
                </h4>
                <div className="border-b border-border mb-4"></div>
                <div className="flex gap-1 justify-center xl:justify-start">
                  {getData(skillData, "skills").data.map((item, index) => {
                    const { imgPath } = item;
                    return (
                      <div key={index}>
                        <Image
                          src={imgPath}
                          width={32}
                          height={32}
                          alt=""
                          priority
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-2">
                  Tools I use every day
                </h4>
                <div className="border-b border-border mb-4"></div>
                <div className="grid grid-cols-2">
                  {getData(skillData, "tools").data.map((item, index) => {
                    const { name, color, purpose } = item;
                    return (
                      <div
                        className="text-center xl:text-left mx-auto xl:mx-0"
                        key={index}
                      >
                        <div
                          className="text-[16px] font-bold"
                          style={{ color: color }}
                        >
                          {name}
                          <span className="ml-1 text-[13px] font-normal text-black">
                            ({purpose})
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-2">Interest Areas</h4>
                <div className="border-b border-border mb-4"></div>
                <div>
                  {getData(skillData, "interests").data.map(
                    (item, index, arr) => {
                      const { field } = item;
                      const separator = index < arr.length - 1 ? " • " : ""; // Add separator for all but the last item
                      return (
                        <span key={index} className="text-[16px] leading-0">
                          {field}
                          {separator}
                        </span>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default AboutTabs;
