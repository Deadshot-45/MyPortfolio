import { Education, Skills } from "./Skills";
import { useState, useEffect } from "react";

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <>
      <div className="my-10 max-xsm:my-0 flex flex-col items-center justify-center gap-10 w-full">
        <div className="flex flex-col gap-2 w-full xsm:min-w-[90%]">
          <h1 className="text-2xl xsm:text-[22px] font-bold text-orange-600 max-xsm:text-[20px]">
            Educations
          </h1>
          <hr className=" w-full" />
        </div>
        <div className="flex flex-wrap justify-between max-lg:gap-6 items-center">
          {Education.map((degree) => (
            <div
              key={degree.id}
              className="bg-[#121214] md:w-[80%] lg:w-[32%] lg:min-h-80 rounded-3xl p-6 hover:scale-105 transition-all delay-75 duration-150 mx-auto"
            >
              <div
                className={`flex flex-col gap-6 xsm:gap-4 p-4 project ${
                  animate ? "animate" : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl max-xsm:text-[14px] xsm:text-[16px] max-xsm:leading-6 font-bold w-[80%]">
                    {degree.name}
                  </h2>
                  <p className="text-center max-xsm:text-[10px] max-xsm:leading-5">
                    {degree.year}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 xsm:leading-5 max-xsm:leading-3 text-sm xsm:text-[10px] max-xsm:text-[10px] md:text-[14px]">
                  <h1 className="font-semi-bold">{degree.institution}</h1>
                  <h1 className="italic semi-font-bold">{degree.University}</h1>
                </div>
                <p className="text-gray-400 xsm:text-[10px] max-xsm:text-[10px] max-xsm:leading-5 xsm:leading-5 md:text-[14px]">
                  {degree.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 max-xsm:text-[10px] flex flex-col items-center justify-center gap-10 w-full">
        <div className="flex flex-col gap-2 w-full xsm:min-w-[90%]">
          <h1 className="text-2xl font-bold text-orange-600 xsm:text-[22px] max-xsm:text-[20px]">
            Skills
          </h1>
          <hr className=" w-full" />
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-between">
          {Skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#121214] lg:min-h-80 lg:w-[32%] lg:p-10 md:w-[80%] mb-10 hover:scale-105 transition-all delay-75 duration-150 flex flex-Wrap justify-between rounded-3xl p-6"
            >
              <div className={`flex flex-col w-full gap-6 project ${animate ? 'animate' : ''}`}>
                <div className="flex justify-between">
                  <h2 className="text-2xl xsm:text-xl font-bold max-xsm:text-[20px]">
                    {skill.name}
                  </h2>
                </div>

                <ul className="text-gray-400 list-disc lg:gap-6 flex-col flex px-8 max-xsm:text-[10px] max-xsm:leading-5 xsm:text-[12px] md:text-[14px] xsm:leading-5">
                  <li>{skill.points[0]}</li>
                  <li>{skill.points[1]}</li>
                  <li>{skill.points[2]}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
