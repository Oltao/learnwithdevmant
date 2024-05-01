import React from "react";

function Heading({ firsttitle, secondtitle }) {
  return (
    <h2 className="text-neutral-900 font-extrabold text-4xl m-[50px] text-center" data-aos="fade-up" data-aos-duration="1000">
      {firsttitle} <span className="text-[#178673]">{secondtitle}</span>
    </h2>
  );
}

export default Heading;
