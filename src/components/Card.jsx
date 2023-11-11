import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card({ reviews }) {
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-5rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-[20]"
          src={reviews.image}
          alt="testimonials pics"
        />
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10]"></div>
      </div>
      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize ">{reviews.name}</p>
        <p className="text-violet-300 uppercase text-sm">{reviews.job}</p>
      </div>
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>
      <div className="text-center mt-4 text-slate-500">
        <p>{reviews.text}</p>
      </div>
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
}

export default Card;