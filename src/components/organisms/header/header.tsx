import * as React from "react";
import Image from "next/image";

export function Header() {
  return (
    <div className="header" id="header">
      <div className="header__container">
        <h1 className="header__heading container">Michal Front</h1>
        <h2 className="header__sub-heading container">Front End Developer</h2>
        <div className="header__image">
          <Image
            src="/mfront.png"
            alt="Michal Front"
            fill={true}
            className="header__image-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
