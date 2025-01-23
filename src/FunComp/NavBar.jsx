import { Link } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="w-full top-0 flex justify-between items-center py-8">
      <div>
        <h1 className="text-2xl xsm:text-sm md:text-xl lg:text-2xl cursor-pointer font-bold">Mayank Sahu</h1>
      </div>
      <ul className="flex lg:gap-10 text-[17px] xsm:text-[10px] xsm:gap-3 md:text-sm lg:text-[16px] text-slate-200 font-semibold">
        <li>
          <Link to="/" className="hover:text-orange-500 transition-all delay-100 ease-in-out focus:text-orange-500">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-orange-500 transition-all delay-100 ease-in-out focus:text-orange-500">About me</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-orange-500 transition-all delay-100 ease-in-out focus:text-orange-500">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-orange-500 transition-all delay-100 ease-in-out focus:text-orange-500">Contact</Link>
        </li>
      </ul>
      <a href="mailto:mayanksahu8179@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send an email to mayanksahu8179@gmail.com">
      <button className="lg:gap-2 xsm:p-2 xsm:text-[10px] md:text-[10px] md:p-3 lg:text-[14px] lg:px-3 lg:py-1 rounded-lg shadow-[0_0_1px_#aaa] border-none text-[10px]  border hover:text-orange-500 flex gap-2  items-center justify-center font-semibold">
        Hire me <FaHandshake/>
      </button>
      </a>
    </nav>
  );
};

export default NavBar;

// 