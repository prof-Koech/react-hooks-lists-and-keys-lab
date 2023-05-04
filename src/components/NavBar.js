import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const reflink =links.map((link)=> (
    <a key={link} href={"#" + link}>{link}</a>)

  );

  return <nav>{reflink}</nav>;
}

export default NavBar;
