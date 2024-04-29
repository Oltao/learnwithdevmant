import dataimg from "../assets/images/dataimg.png";

function HeroSection() {
  return (
    <section className="flex w-full flex-wrap bg-backgroundimg bg-cover bg-center bg-no-repeat justify-between items-center gap-5 text-white p-9 lg:flex-nowrap pt-[100px] pb-[100px]">
      <div className="flex flex-col items-start gap-5">
        <h1 className="font-poppins text-6xl antialiased font-bold uppercase" data-aos="fade-up"
     data-aos-duration="1500">
          <span className="text-[#87a9d1]">Tech</span> is the{" "}
          <span className="text-[#87a9d1]">Future</span> and the future is{" "}
          <span className="text-[#87a9d1]">Now!</span>!
        </h1>
        <p className="font-roboto text-lg text-justify tracking-wide" data-aos="fade-up"
     data-aos-duration="2000">
          {" "}
          Dive into our comprehensive tech courses designed to help you uncover
          potential, solve real-world problem, and make informed decisions.
          Whether you're a computer novice or an expert, our platform provides
          intuitive features and robust functionality to support your tech
          journey. The stage is set. Are you ready to step into the exciting
          world of tech?
        </p>
        <button className="bg-[#87a9d1] p-4 font-poppins font-bold text-neutral-900 hover:bg-neutral-900 hover:text-white rounded-xl transition ease duration-1000" data-aos="fade-up"
     data-aos-duration="2000">
          Learn More
        </button>
      </div>
      <img
        src={dataimg}
        style={{ maxWidth: "100%" }}
        className="lg:w-3/6" data-aos="fade-up"
        data-aos-duration="3000"
      />
    </section>
  );
}

export default HeroSection;
