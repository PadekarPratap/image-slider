import React, { useEffect, useState } from "react";
import { slides } from "./slides";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isLastSlide = currentIndex === 0;
    const index = isLastSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    // another way of writing the code of next/previous slide
    setCurrentIndex((prevIndex) => {
      const isLastSlide = prevIndex === slides.length - 1;
      return isLastSlide ? 0 : prevIndex + 1;
    });
  };

  // automatic slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);


  return (
    <div className="group max-w-[1400px] h-[700px] mx-auto mt-[2rem] md:mt-[5rem] px-4 relative">
      <AnimatePresence mode="wait">
        {/* backgroundImage */}
        <motion.div
          key={slides[currentIndex].moto}
          transition={{
            duration: 0.1
          }}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          className="w-full h-full bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></motion.div>
      </AnimatePresence>

      {/* title and tag */}
      <div className="absolute bottom-[2rem] text-white left-8 right-8 md:left-[10%] md:right-[10%]  lg:left-[20%] lg:right-[20%] text-center bg-black/50 p-4 rounded">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider">
          {slides[currentIndex].moto}
        </h2>
        <p className="md:text-2xl">{slides[currentIndex].para}</p>
      </div>

      {/* left arrow  */}
      <div className="group-hover:block hidden absolute top-1/2 translate-y-[-50%] left-5">
        <MdKeyboardArrowLeft
          size={30}
          className="text-white bg-black/50 rounded-full p-1 cursor-pointer"
          onClick={prevSlide}
          />
      </div>

      {/* right arrow */}
      <div className="group-hover:block hidden absolute top-1/2 translate-y-[-50%] right-5">
        <MdKeyboardArrowRight
          size={30}
          className="text-white bg-black/50 rounded-full p-1 cursor-pointer"
          onClick={nextSlide}
        />
      </div>

      {/* navigation dots  */}
      <div className="flex justify-center gap-5 mt-2">
        {slides.map((slide, slideIndex) => {
          return (
            <div className="cursor-pointer" key={slide.moto}>
              <BsFillCircleFill
                size={11}
                onClick={() => setCurrentIndex(slideIndex)}
                className={slideIndex === currentIndex ? "bg-blue-600 p-[0.35rem] rounded-full" : null}
              />
            </div>
          );
        })}
      </div>
    </div>

    // this project has been created in association with Code Commerce 

  );
}
