export const Logo = ({ title }) => {
  return (
    <a href="/#home">
      <h1
        className="text-[30px] font-extrabold font-poppins z-10 pl-5"
      >
        {title}
      </h1>
    </a>
  );
};
