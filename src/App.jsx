import React, { useEffect, useState } from 'react'
import {slides} from './slides'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import {BsFillCircleFill} from 'react-icons/bs'

export default function App() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () =>{
    const isLastSlide = currentIndex === 0
    const index = isLastSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(index)
  }

  const nextSlide = () =>{
    const isLastSlide = currentIndex === slides.length - 1
    const index = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(index)
  }

   
  return (
    <div className='group max-w-[1400px] h-[700px] mx-auto mt-[5rem] px-4 relative'>
      <div className='w-full h-full bg-cover bg-center rounded-xl duration-500' style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
      </div>

      <div className='absolute bottom-[2rem] text-white left-1/2 translate-x-[-50%] text-center bg-black/50 p-4 rounded'>
        <h2 className='text-2xl md:text-5xl font-bold tracking-wider '>{slides[currentIndex].moto}</h2>
        <p className='md:text-2xl'>{slides[currentIndex].para}</p>
      </div>

      {/* left arrow  */}
      <div className='group-hover:block hidden absolute top-1/2 translate-y-[-50%] left-5'>
        <MdKeyboardArrowLeft size={30} className='text-white bg-black/50 rounded-full p-1 cursor-pointer' onClick={prevSlide} />
      </div>

      {/* right arrow */}
      <div className='group-hover:block hidden absolute top-1/2 translate-y-[-50%] right-5'>
        <MdKeyboardArrowRight size={30} className='text-white bg-black/50 rounded-full p-1 cursor-pointer' onClick={nextSlide} />
      </div>

      {/* navigation dots  */}
      <div className='flex justify-center gap-5 mt-2'>
        {
          slides.map((slide, slideIndex) => {
            return (
              <div className='cursor-pointer'><BsFillCircleFill size={11} onClick={() => setCurrentIndex(slideIndex)} /></div>
            )
          })
        }
      </div>

    </div>

    // this project has been created in association with Code Commerce
  )
}

