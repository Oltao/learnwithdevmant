import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaSquareFacebook,
} from "react-icons/fa6";

export const Social = () => {
  return (
    <div
      className="flex items-center justify-center"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <span className="border-solid border-2 p-2 rounded-full hover:bg-slate-500 transition ease duration-1000 mr-2">
        <FaSquareFacebook />
      </span>
      <span className="border-solid border-2 p-2 rounded-full hover:bg-slate-500 transition ease duration-1000 mr-2">
        <FaSquareXTwitter />
      </span>
      <span className="border-solid border-2 p-2 rounded-full hover:bg-slate-500 transition ease duration-1000 mr-2">
        <FaSquareInstagram />
      </span>
      <span className="border-solid border-2 p-2 rounded-full hover:bg-slate-500 transition ease duration-1000 mr-2">
        <FaSquareWhatsapp />
      </span>
    </div>
  );
};
