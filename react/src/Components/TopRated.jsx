import React, { useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function TopRated() {
  const data = [1,2,3,1,1,1];

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
    <div className='text-2xl font-extrabold text-center  mt-5'>Top Rated Movies <div style={{height:'2px',backgroundColor:'red',width:'100px',margin:'auto'}}></div></div>
      <div className='relative flex items-center mx-10'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
        <div className="trcard w-1/3 md:w-1/6 relative m-3 inline-block overflow-hidden" style={{maxHeight:'300px'}}>
          <img className='trImage' src="https://cdn.marvel.com/content/1x/spider-man_lob_crd_01.jpg" alt="" />
          <div className={`overlay absolute bottom-0 text-center w-full `} style={{backgroundColor:'#000000cc'}}>
            <div>Spider Man</div>
            <div>2003</div>
          </div>
        </div>
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </>
    
  )
}

export default TopRated