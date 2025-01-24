import { FaTruckFast } from "react-icons/fa6";
import TypingText from "./TypingText";

const TopContain = () => {
  
  return (
    <div className="flex xsm:gap-3 max-xsm:mt-0 max-xsm:gap-3 md:gap-0 md:justify-between items-center justify-center flex-wrap flex-row mt-10">
      <div className="w-[350px] border max-xsm:h-[300px] max-xsm:py-4 h-[450px] max-xsm:w-full xsm:w-[90%] xsm:h-[350px] md:w-[30%] md:p-4 md:h-[300px] lg:min-w-[27%] lg:h-[350px]  bg-[#121214] border-none rounded-xl flex items-center shadow-[0_0_2px_#ababab] lg:px-6 lg:py-10">
        <img
          src="https://avatars.githubusercontent.com/u/168402822?v=4"
          alt="my-img"
          className="rounded-full h-full lg:h-full m-auto"
        />
      </div>
      <div className="max-xsm:w-full max-xsm:gap-3 flex flex-wrap overflow-hidden justify-between flex-col w-[65%] lg:min-h-[350px] lg:max-w-[70%] xsm:w-[90%] xsm:h-auto xsm:gap-3 lg:justify-between md:w-[68%] p-8 bg-[#121214] shadow-[0_0_2px_#ababab] border-none rounded-xl">
        <TypingText text={"I'm Mayank Sahu, a front-end developer."}/>
        <div className="max-xsm:w-full max-xsm:text-[9px] max-xsm:leading-4 flex flex-col gap-2 lg:leading-5 xsm:text-[8px] xsm:leading-4 md:text-[10px] lg:text-[12px] tracking-widest text-gray-500">
          <p>
            "Passionate and detail-oriented Front-End Developer with a solid
            foundation in Economics and Mathematics (B.A. from Zakir Husain
            Delhi College) and advanced technical skills (M.C.A. from Oriental
            University, Indore). Proficient in HTML, CSS, JavaScript, and React
            JS, I excel at translating complex requirements into intuitive,
            user-friendly designs. My academic background enhances my analytical
            thinking, enabling me to approach development challenges with a
            unique perspective.
          </p>
          <p>
            Eager to contribute to dynamic and collaborative work environments,
            I am committed to creating seamless user experiences and bringing
            innovative web projects to life. My strong technical expertise,
            combined with a keen eye for detail, drives me to develop
            high-quality, responsive web applications that exceed user
            expectations and foster engaging interactions."
          </p>
        </div>

        <a
          href="mailto:mayanksahu8179@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send an email to mayanksahu8179@gmail.com"
        >
          <button
            type="button"
            className="lg:px-4 lg:py-2 max-xsm:text-[10px] max-xsm:px-2 flex flex-wrap justify-center items-center gap-2 bg-orange-500 hover:bg-transparent hover:border hover:py-[7px] hover:px-[15px] xsm:text-[8px] xsm:px-2 xsm:py-0 md:text-[11px] lg:text-sm rounded-xl"
          >
            Get in touch <FaTruckFast />
          </button>
        </a>
      </div>
    </div>
  );
};

export default TopContain;
