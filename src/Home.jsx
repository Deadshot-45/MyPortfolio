
import TopContain from "./FunComp/Home/TopContain";
import ExpEdu from "./FunComp/Home/ExpEdu";
import { Education, projects } from "./FunComp/Home/Details";
import AboutMe from "./FunComp/AboutMe";


const Home = () => {
  return (
    <>
      <div className="px-6 xsm:p-2 w-full">
        <TopContain />
      </div>
      <div className="px-6 w-full flex xsm:flex-col lg:flex-row xsm:gap-6 justify-between items-center lg:my-20">
        <div className="lg:w-[47%] lg:max-h-[600px] xsm:w-full py-10 rounded-3xl justify-between bg-[#121214] hover:shadow-[0_0_2px_#ababab]">
          <ExpEdu head={"Education"} data={Education} />
        </div>
        <div className="lg:w-[47%] lg:max-h-[600px] py-10 xsm:w-full rounded-3xl flex flex-col justify-between bg-[#121214] hover:shadow-[0_0_2px_#ababab]">
          <ExpEdu head={"Projects"} data={projects} />
        </div>
      </div>
      <AboutMe/>
    </>
  );
};

export default Home;
