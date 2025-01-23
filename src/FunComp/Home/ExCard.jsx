import PropTypes from 'prop-types';

const ExCard = ({detail}) => {
  return (
    <div className="flex items-center gap-4 max-xsm:p-2 p-6">
      <div>
        <div className="text-[#eb5d3a] w-[50px] h-[50px] flex items-center justify-center bg-white rounded-xl">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="remixicon "
          >
            <path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path>
          </svg>
        </div>
      </div>
      <div>
        <h1 className="text-[#7d7d80] xsm:text-[12px] max-xsm:text-[10px]">{detail.year}</h1>
        <p className='max-xsm:text-[12px] leading-5'>{detail.name}</p>
        <p className="text-[#5f5f65] text-sm max-xsm:text-[10px]">{detail.description}</p>
      </div>
    </div>
  );
};

export default ExCard;

ExCard.propTypes = {
  detail: PropTypes.shape({
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

