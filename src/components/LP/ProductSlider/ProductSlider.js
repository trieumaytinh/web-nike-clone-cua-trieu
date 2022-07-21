import { useContext, useRef, useState, useEffect } from "react";
import { UiContext } from "../../../store/UIContext";
import OneProductInSlider from "../OneProductInSlider/OneProductInSlider";
import { data } from "../../../data";
import "./ProductSlider.css";
import "./ProductSliderResponsive.css";
function ProductSlider() {
  const sliderLP = useRef();
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  if (scrollEnd) {
    console.log(1234);
  }
  const slide = (shift) => {
    sliderLP.current.scrollLeft += shift;
    // sliderLP.current.scrollTo({
    //   left: shift,
    //   top: 0,
    //   behavior: "smooth",
    // });
    setScrollX(scrollX + shift);

    if (
      Math.floor(sliderLP.current.scrollWidth - sliderLP.current.scrollLeft) <=
      sliderLP.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };
  useEffect(() => {
    //Check width of the scollings
    if (
      sliderLP.current &&
      sliderLP?.current?.scrollWidth === sliderLP?.current?.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
    return () => {};
  }, [sliderLP?.current?.scrollWidth, sliderLP?.current?.offsetWidth]);
  const scrollCheck = () => {
    setScrollX(sliderLP.current.scrollLeft);
    if (
      Math.floor(sliderLP.current.scrollWidth - sliderLP.current.scrollLeft) <=
      sliderLP.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  return (
    <>
      <div className="PS">
        <div className="PS-TopContainer">
          <p>Shop New Releases</p>
          <div className="PS-ButtonContainer">
            <svg
              onClick={() => {
                if (scrollX > 0) {
                  slide(-300);
                }
              }}
              className={
                scrollX !== 0 ? "PS-LeftIcon iconactive" : "PS-LeftIcon"
              }
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M15.525 18.966L8.558 12l6.967-6.967"
              ></path>
            </svg>
            <svg
              onClick={() => {
                slide(300);
              }}
              className={scrollEnd ? "PS-RightIcon" : "PS-RightIcon iconactive"}
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M8.474 18.966L15.44 12 8.474 5.033"
              ></path>
            </svg>
          </div>
        </div>
        <div onScroll={scrollCheck} ref={sliderLP} className="PS-BottomContainer" id="a">
          {data.slice(0, 10).map((item) => {
            const id = Object.values(item)[5];
            return (
              <OneProductInSlider key={id} {...item} productIndexInData={id} />
            );
          })}
          {/* <OneProductInSlider />
          <OneProductInSlider />
          <OneProductInSlider />
          <OneProductInSlider />
          <OneProductInSlider />
          <OneProductInSlider />
          <OneProductInSlider />
          <OneProductInSlider />
          <OneProductInSlider />
          <OneProductInSlider /> */}
        </div>
      </div>
    </>
  );
}

export default ProductSlider;
