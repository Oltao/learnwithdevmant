import { Logo } from "../header/Logo";
import { NavLinks } from "../header/NavLinks";
import { Social } from "../header/Social";

function Navbar() {
  return (
    <header className="bg-neutral-900 text-white sticky top-0 z-10 flex justify-between px-10 py-4 items-center overflow-hidden">
      <Logo title="Devmant" />
      <nav className="lg:bg-white lg:text-neutral-900 lg:py-5 lg:px-10 border-solid rounded-full font-bold">
        <NavLinks />
      </nav>
      <div className="hidden lg:block">
        <Social />
      </div>
    </header>
  );
}

export default Navbar;
