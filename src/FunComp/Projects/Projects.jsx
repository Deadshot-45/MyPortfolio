import { ProjectDetails } from "./ProjectsDetails";

const Projects = () => {
  return (
    <>
    <div className="my-10 flex flex-col items-center justify-center gap-10 w-full">
      <div className="flex flex-col gap-2 items-center justify-center w-1/5 ">
        <h1 className="text-2xl xsm:text-[22px] font-bold text-orange-600">Projects</h1>
        <hr className=" w-full" />
      </div>

      {ProjectDetails.map(project =>(
        <div key={project.id} className="bg-[#121214] w-[90%] rounded-3xl p-6">
        <div className="flex flex-col gap-2 p-4">
          <h2 className="text-2xl xsm:text-[20px] font-bold">{project.name}</h2>
          <p className="text-gray-400 xsm:text-[12px] xsm:leading-5">
            {project.description}
          </p>
          <a
            href={project.src} target="_blank" rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-500 xsm:text-[12px]"
          >
            View Project
          </a>
        </div>
      </div>
      ))}
    </div>
    </>
  );
};

export default Projects;
