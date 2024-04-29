import React from "react";
import { NavLinks } from "../header/NavLinks";
import { Social } from "../header/Social";

function FooterSection() {
  return (
    <footer className="flex flex-col text-xl gap-3 bg-neutral-900 min-h-[200px] text-slate-100 justify-center full pb-10">
      <Social />
      <NavLinks />
    </footer>
  );
}

export default FooterSection;
