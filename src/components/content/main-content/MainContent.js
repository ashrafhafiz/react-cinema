import React, { useState } from "react";
import Paginate from "../paginate/Paginate";

import SlideShow from "../slide-show/SlideShow";
import "./MainContent.scss";

const MainContent = () => {
  const images = [
    {
      url:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      url:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      url:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      url:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageType) => {
    if (pageType === "prev" && currentPage > 1) {
      setCurrentPage((prevState) => prevState - 1);
    } else {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  return (
    <div className="main-content">
      <SlideShow images={images} auto={true} arrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate
            currentPage={currentPage}
            totalPages={10}
            paginate={paginate}
          />
        </div>
      </div>
      {/* display grid component */}
    </div>
  );
};

export default MainContent;
