import { useState } from "react";

const FAQAccordion = ({ question, answer }) => {
  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <div
      className={`bg-white shadow shadow-neutral-500 p-5 my-5 mx-20 font-roboto lg:mx-[300px]`} data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h3
        className={`font-bold text-xl text-[#87a9d1] cursor-pointer flex justify-between`}
        onClick={() => setShowAccordion(!showAccordion)}
      >
        {question}
        <span className="text-2xl font-poppins">
          {showAccordion ? "-" : "+"}
        </span>
      </h3>
      {showAccordion && <p className="font-poppins text-x">{answer}</p>}
    </div>
  );
};

export default FAQAccordion;