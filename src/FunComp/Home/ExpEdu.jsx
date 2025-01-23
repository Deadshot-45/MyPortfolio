import ExCard from "./ExCard";
import React from "react";
import PropTypes from "prop-types";

const ExpEdu = ({ head, data, animate }) => {
  return (
    <div className={`w-full max-xsm:px-5 px-12 h-full exp-edu ${animate ? 'animate' : ''}`}>
      <h1 className="text-2xl xsm:text-2xl font-bold">{head}</h1>
      <div className="flex flex-col justify-between max-xsm:py-4 max-xsm:gap-1 max-h-[550px]">
      {data.map((detail) => (
        <React.Fragment key={detail.id}>
          <ExCard  detail={detail} />
          <hr />
        </React.Fragment>
      ))}
      </div>
    </div>
  );
};

export default ExpEdu;

ExpEdu.propTypes = {
  head: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      year: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
