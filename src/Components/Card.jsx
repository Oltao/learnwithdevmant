import React from "react";

function Card({ image, title, duration }) {
  return (
    <div
      className="bg-neutral-900 flex flex-col text-white font-poppins text-2xl rounded-t-full relative md:w-1/3 lg:w-1/4 shadow-md shadow-black"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <img
        src={image}
        className="rounded-t-3xl h-[300px] w-[500px]"
        loading="lazy"
      />
      <a href="#">
        <button className="absolute top-3 right-3 bg-neutral-900 p-3 text-sm font-poppins tracking-[3px] hover:bg-[#178673] rounded-md font-bold uppercase">
          Apply Now
        </button>
      </a>
      <div className="p-5">
        <a href="#">
          <h3 className="font-bold text-[#178673]">{title}</h3>
        </a>
        <p className="font-roboto tracking-widest text-base">
          Duration: {duration}
        </p>
      </div>
    </div>
  );
}

export default Card;
