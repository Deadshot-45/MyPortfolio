import AboutMe from "../AboutMe";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const Contact = () => {
  return (
    <>
      <div className="m-6 w-full flex-col items-center justify-center py-16 rounded-3xl bg-[#121214]">
        <div className="w-[80%] flex flex-col gap-2 mx-auto items-center justify-center">
          <h1 className="text-orange-500 text-2xl xsm:text-xl font-bold">Get in Touch</h1>
          <p className="xsm:text-sm md:text-xl">Phone: +91 930-190-9040</p>
          <p className="xsm:text-sm md:text-xl">Email: mayanksahu8179@gmail.com</p>
        </div>
        <div className="w-[80%] flex gap-6 mx-auto items-center justify-center my-8 text-xl">
          <a href="https://www.linkedin.com/in/mayank-sahu-ou" target="_blank" className="hover:scale-150 transition-all delay-50 duration-150 ease-in-out">
            <TbBrandLinkedinFilled />
          </a>
          <a href="https://github.com/Deadshot-45" target="_blank" className="hover:scale-150 transition-all delay-50 duration-150 ease-in-out">
          <FaGithub />
          </a>
          <a href="mailto:mayanksahu8179@gmail.com" target="_blank" className="hover:scale-150 transition-all delay-50 duration-150 ease-in-out" >
          <IoIosMail />
          </a>
        </div>
      </div>
      <AboutMe />
    </>
  );
};

export default Contact;
