import React, { useState } from "react";

import SlideShow from "../slide-show/SlideShow";
import Paginate from "../paginate/Paginate";
import Grid from "../grid/Grid";
import "./MainContent.scss";

const MainContent = () => {
  const images = [
    {
      url:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 7.3,
    },
    {
      url:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 5.8,
    },
    {
      url:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 8.2,
    },
    {
      url:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 3.75,
    },
    {
      url:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 6.25,
    },
    {
      url:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 7,
    },
    {
      url:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 8.5,
    },
    {
      url:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 5.5,
    },
    {
      url:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4,
    },
    {
      url:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.5,
    },
    {
      url:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 7,
    },
    {
      url:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 8,
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
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
