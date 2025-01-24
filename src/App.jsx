import NavBar from "./FunComp/NavBar";
import Projects from "./FunComp/Projects/Projects";
import Contact from "./FunComp/Contact/Contact";
import About from "./FunComp/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./FunComp/Home/Footer";

const App = () => {
  return (
    <div className="flex items-center max-xsm:gap-4 flex-col min-h-96 text-white w-[85%] xsm:w-[95%] lg:w-[85%]">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
};

export default App;
