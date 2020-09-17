import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./SlideShow.scss";

const SlideShow = ({ images, auto, arrows }) => {
  // let currentSlideIndex = 0;

  const [currentSlide, setCurrentSlide] = useState({
    slideShow: images[0],
    slideIndex: 0,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  // const [sliderInerval, setSliderInerval] = useState(0);

  const autoSliding = () => {
    let nextSlideIndex =
      currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
    setCurrentSlide((prevState) => ({
      ...prevState,
      slideShow: images[nextSlideIndex],
      slideIndex: nextSlideIndex,
    }));
    setCurrentIndex(nextSlideIndex);
  };

  useEffect(() => {
    if (auto) {
      const sliding = setInterval(() => {
        autoSliding();
      }, 2000);

      // setSliderInerval(sliding);

      return () => {
        clearInterval(sliding);
        // clearInterval(sliderInerval);
      };
    }
    // eslint-disable-next-line
  }, [autoSliding]);

  const handleClickedArrow = (clickedArrow) => {
    let index = currentIndex;
    console.log(clickedArrow);

    if (clickedArrow === "prev") {
      if (index <= 0) index = images.length - 1;
      else index -= 1;
    }

    if (clickedArrow === "next") {
      if (index === images.length - 1) index = 0;
      else index += 1;
    }
    console.log("index:", index);
    setCurrentIndex(index);

    console.log("Current Index:", currentIndex);
    setCurrentSlide((prevState) => ({
      ...prevState,
      slideShow: images[index],
      slideIndex: index,
    }));
  };

  const RenderArrows = () => {
    return (
      <div className="slider-arrows">
        <div
          className="slider-arrow slider-arrow--left"
          onClick={() => handleClickedArrow("prev")}
        />
        <div
          className="slider-arrow slider-arrow--right"
          onClick={() => handleClickedArrow("next")}
        />
      </div>
    );
  };

  const Indicators = (props) => {
    const { currentSlide } = props;
    const indicators = images.map((slide, i) => {
      const btnclasses =
        i === currentSlide
          ? "slider-navButton slider-navButton--active"
          : "slider-navButton";
      return <button className={btnclasses} key={i} />;
    });
    return <div className="slider-nav">{indicators}</div>;
  };

  return (
    <div className="slider">
      <div className="slider-slides">
        {images && images.length && currentSlide.slideShow && (
          <div
            className="slider-image"
            style={{
              backgroundImage: `url(${currentSlide.slideShow.url})`,
            }}
          ></div>
        )}
      </div>
      <Indicators currentSlide={currentSlide.slideIndex} />
      {arrows ? <RenderArrows /> : null}
    </div>
  );
};

SlideShow.propTypes = {
  images: PropTypes.array.isRequired,
  auto: PropTypes.bool.isRequired,
  arrows: PropTypes.bool.isRequired,
  // currentSlide: PropTypes.number.isRequired,
};

export default SlideShow;
