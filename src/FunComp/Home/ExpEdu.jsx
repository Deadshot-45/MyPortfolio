import ExCard from "./ExCard";
import PropTypes from "prop-types";

const ExpEdu = ({ head, data }) => {
  return (
    <div className="w-full px-12 h-full">
      <h1 className="text-2xl xsm:text-2xl font-bold">{head}</h1>
      <div className="flex flex-col justify-between max-h-[550px]">
      {data.map((detail) => (
        <>
          <ExCard key={detail.id} detail={detail} />
          <hr />
        </>
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
