import PropTypes from "prop-types";
import "../style/Test.css";
const Test1 = ({ location, title }) => {
  return (
    <>
      <div className="secondary-hero">
        <div className="img-holder">
          <div className="title">
            <p>{location}</p>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
Test1.propTypes = {
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Test1;
