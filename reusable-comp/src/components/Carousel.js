import { useState } from "react";
import { data } from "../utils/constants";

const Carousel = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handlePrevClick = () => {
    if (activeImageIndex === 0) setActiveImageIndex(data.length - 1);
    else setActiveImageIndex(activeImageIndex - 1);
  };
  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  };
  return (
    <div className="flex justify-center items-center m-7">
      <button className="font-bold p-4 m-10" onClick={handlePrevClick}>
        Prev
      </button>
      {data.map((url, i) => (
        <img
          src={url}
          className={
            "w-[700px] h-[500px] object-contain " +
            (activeImageIndex === i ? "block" : "hidden")
          }
          alt="carousel-img"
          key={url}
        />
      ))}

      <button className="font-bold p-4 m-10" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
