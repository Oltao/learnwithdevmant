export const NavLinks = () => {
  return (
    <ul
      className="flex justify-center gap-3 font-roboto"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="-1"
    >
      <a href="/">
        <li className="hover:border-b-2 hover:border-[#87a9d1]">Home</li>
      </a>
      <a href="/#course">
        <li className="hover:border-b-2 hover:border-[#87a9d1]">Course</li>
      </a>
      <a href="/#faq">
        <li className="hover:border-b-2 hover:border-[#87a9d1]">FAQs</li>
      </a>
    </ul>
  );
};
