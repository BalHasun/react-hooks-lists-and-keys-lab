import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((item, index) => {
        return (
          <a key={index} href={`#${item}`}>
            {item}
          </a>
        );
      })}
    </nav>
  );
}

export default NavBar;
