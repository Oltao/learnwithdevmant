import { Logo } from "../header/Logo";
import { NavLinks } from "../header/NavLinks";
import { Social } from "../header/Social";

function Navbar() {
  return (
    <header className="bg-neutral-900 text-white sticky top-0 z-10 flex justify-between py-4 items-center overflow-hidden w-full">
      <div className="bg-[#178673] bg-opacity-60 absolute -z-15 top-0 h-full w-full"></div>
      <Logo title="Devmant" />
      <nav className="lg:bg-white lg:text-neutral-900 lg:py-5 lg:px-10 border-solid rounded-full font-bold z-10 pr-5">
        <NavLinks />
      </nav>
      <div className="hidden lg:block pr-5">
        <Social />
      </div>
    </header>
  );
}

export default Navbar;
