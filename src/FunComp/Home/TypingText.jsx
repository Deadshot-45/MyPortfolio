import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const TypingText = ({ text, speed = 50 }) => {
  const [characters, setCharacters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          text[currentIndex],
        ]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [currentIndex, speed, text]);

  return (
    <div className="relative overflow-hidden">
      {characters.map((character, index) => (
        <span
          key={index}
          className="opacity-0 animate-reveal max-xsm:text-lg text-5xl text-white font-bold xsm:text-sm md:text-xl lg:text-[32px]"
          style={{ animationDelay: `${index * speed}ms` }}
        >
          {character}
        </span>
      ))}
    </div>
  );
};

export default TypingText;

TypingText.prototype = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};
