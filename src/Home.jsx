
import TopContain from "./FunComp/Home/TopContain";
import ExpEdu from "./FunComp/Home/ExpEdu";
import { Education, projects } from "./FunComp/Home/Details";
import AboutMe from "./FunComp/AboutMe";
import { useState, useEffect } from "react";


const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <>
      <div className="px-6 max-xsm:px-2 xsm:p-2 w-full">
        <TopContain />
      </div>
      <div className="px-6 max-xsm:px-2 w-full  max-xsm:gap-4 flex max-xsm:flex-col  xsm:flex-col lg:flex-row xsm:gap-6 justify-between items-center lg:my-20">
        <div className="lg:w-[47%] max-xsm:py-5 lg:max-h-[600px] xsm:w-full max-xsm:p-2 py-10 rounded-3xl justify-between bg-[#121214] hover:shadow-[0_0_2px_#ababab]">
          <ExpEdu head={"Education"} animate={animate} data={Education} />
        </div>
        <div className="lg:w-[47%] max-xsm:px-2 max-xsm:w-full lg:max-h-[600px] py-10 xsm:w-full rounded-3xl flex flex-col justify-between bg-[#121214] hover:shadow-[0_0_2px_#ababab]">
          <ExpEdu head={"Projects"} animate={animate} data={projects} />
        </div>
      </div>
      <AboutMe/>
    </>
  );
};

export default Home;
