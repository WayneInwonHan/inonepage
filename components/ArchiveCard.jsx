import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const ArchiveCard = ({ devScreen }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <Link href={devScreen.url}>
          <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
            <div className="absolute w-full h-full flex flex-col justify-center items-center">
              <h2 className="text-white text-stroke font-bold text-[1.5rem]">
                {devScreen.title}
              </h2>
              <h3 className="text-white text-stroke font-bold text-[1rem]">
                {devScreen.subtitle}
              </h3>
            </div>
            <Image
              src={devScreen.image}
              alt={devScreen.title}
              layout="fill"
              className="absolute bottom-0 w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="uppercase absolute top-4 left-5 mb-2">
              <Badge className="uppercase text-sm font-medium">
                {devScreen.category}
              </Badge>
            </div>
          </div>
        </Link>
      </CardHeader>
    </Card>
  );
};

export default ArchiveCard;
