import React, { useRef, Fragment } from "react";
import PropTypes from "prop-types";

import "./Rating.scss";

const Rating = (props) => {
  const { rating, totalRating } = props;
  //   const [totalRatingStars, setTotalRatingStars] = useState([]);
  const ratingRef = useRef();

  //   useEffect(() => {
  //     setTotalRatingStars([...Array(totalRating).keys()].map((ele) => ele + 1));
  //     const ratingPercentage = Math.floor((rating / totalRating) * 100);
  //     ratingRef.current.style.width = `${ratingPercentage}%`;
  //   }, [rating, totalRating]);

  const totalRatingStars = [...Array(totalRating).keys()].map((ele) => ele + 1);
  const ratingPercentage = Math.floor((rating / totalRating) * 100);
  //   ratingRef.current.style.width = `${ratingPercentage}%`;

  return (
    <div className="star-rating">
      <div className="back-stars">
        {totalRatingStars.map((ele) => (
          <Fragment key={ele}>
            <i className="fa fa-star" aria-hidden="true"></i>
          </Fragment>
        ))}

        <div
          className="front-stars"
          style={{ width: `${ratingPercentage}%` }}
          ref={ratingRef}
        >
          {totalRatingStars.map((ele) => (
            <Fragment key={ele}>
              <i className="fa fa-star" aria-hidden="true"></i>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalRating: PropTypes.number.isRequired,
};

export default Rating;
