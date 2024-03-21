import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { FaGithub, FaLink, FaYoutube } from "react-icons/fa";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 w-full h-full object-cover shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          />
          {/* btn links */}
          <div className="flex gap-x-4">
            {project.link && (
              <Link
                href={project.link}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <FaLink className="text-white text-[1.5rem]" />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
              >
                <FaGithub className="text-white text-[2rem]" />
              </Link>
            )}
            {project.youtube && (
              <Link
                href={project.youtube}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
              >
                <FaYoutube className="text-white text-[2rem]" />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <div className="uppercase absolute top-4 left-5 mb-2">
          {Array.isArray(project.category) ? (
            project.category.map((category, categoryIndex) => (
              <Badge
                key={categoryIndex}
                className="uppercase text-sm font-medium mr-1"
              >
                {category}
              </Badge>
            ))
          ) : (
            <Badge className="uppercase text-sm font-medium">
              {project.category}
            </Badge>
          )}
        </div>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
