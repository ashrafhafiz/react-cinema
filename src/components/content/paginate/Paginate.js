import React from "react";
import PropTypes from "prop-types";

import "./Paginate.scss";

const Paginate = (props) => {
  const { currentPage, totalPages, paginate } = props;
  return (
    <>
      <span className="pageCount">
        {currentPage} - {totalPages}
      </span>
      <button
        className={
          currentPage === 1 ? "paginate-button disable" : "paginate-button"
        }
        onClick={() => paginate("prev")}
      >
        Prev
      </button>
      <button
        className={
          currentPage === totalPages
            ? "paginate-button disable"
            : "paginate-button"
        }
        onClick={() => paginate("next")}
      >
        Next
      </button>
    </>
  );
};

Paginate.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Paginate;
