import dataimg from "../assets/images/dataimg.svg";
import BgVid from "../assets/video/backgroundvid.mp4";

function HeroSection() {
  return (
    <section className="flex w-full flex-wrap justify-between items-center text-white p-9 lg:flex-nowrap pt-5px] pb-[10px] relative" id="home">
      <video
        autoPlay
        loop
        muted
        src={BgVid}
        type="video/mp4"
        className="absolute w-full h-full object-cover inset-0"
      ></video>
      <div className="bg-neutral-900 bg-cover bg-center bg-no-repeat w-full h-full bg-opacity-65 absolute z-0 inset-0"></div>
      <div className="flex flex-col items-start gap-5">
        <h1
          className="font-poppins text-6xl antialiased font-bold uppercase"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <span className="text-[#178673]">Tech</span> is the{" "}
          <span className="text-[#178673]">Future</span> and the future is{" "}
          <span className="text-[#178673]">Now!</span>!
        </h1>
        <p
          className="font-poppins text-x text-justify"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {" "}
          Dive into our comprehensive tech courses designed to help you uncover
          potential, solve real-world problem, and make informed decisions.
          Whether you're a computer novice or an expert, our platform provides
          intuitive features and robust functionality to support your tech
          journey. The stage is set. Are you ready to step into the exciting
          world of tech?
        </p>
        <button
          className="bg-[#178673] p-4 font-poppins font-bold text-neutral-900 hover:bg-neutral-900 hover:text-white rounded-xl transition ease duration-1000"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Learn More
        </button>
      </div>
      <img
        src={dataimg}
        style={{ maxWidth: "100%" }}
        className="lg:w-3/6 mt-20"
        data-aos="fade-up"
        data-aos-duration="3000"
      />
    </section>
  );
}

export default HeroSection;
