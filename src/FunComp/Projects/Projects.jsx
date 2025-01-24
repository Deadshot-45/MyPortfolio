import { useState, useEffect } from "react";
import { ProjectDetails } from "./ProjectsDetails";

const Projects = () => {
  const [animate, setAnimate] = useState(false);
  
    useEffect(() => {
      setAnimate(true);
    }, []);
  return (
    <>
      <div className="mb-10  flex flex-col items-center justify-center gap-10 w-full">
        <div className="flex flex-col gap-2 items-center justify-center w-1/5 ">
          <h1 className="text-2xl max-xsm:text-[20px] xsm:text-[22px] font-bold text-orange-600">
            Projects
          </h1>
          <hr className=" w-full" />
        </div>

        <div className="flex flex-col max-xsm:gap-4 space-y-8">
          {ProjectDetails.map((project) => (
            <div
              key={project.id}
              className={`bg-[#121214] project ${animate ? 'animate' : ''} w-[90%] rounded-3xl m-auto p-6`}
            >
              <div className="flex flex-col gap-2 max-xsm:p-2 p-4">
                <h2 className="text-2xl xsm:text-[20px] font-bold max-xsm:text-[18px]">
                  {project.name}
                </h2>
                <p className="text-gray-400 xsm:text-[12px] xsm:leading-5 max-xsm:text-[10px] max-xsm:leading-4">
                  {project.description}
                </p>
                <a
                  href={project.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-500 xsm:text-[12px] max-xsm:text-[10px]"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
