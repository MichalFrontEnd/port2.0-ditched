import * as React from "react";

export function Header() {
  return (
    <section className="header container" id="header">
      <div className="header__container">
        <h1 className="header__header">Michal Front</h1>
        <h2 className="header__sub-header">Front End Developer</h2>
        <div className="header__image">
          <img
            src="/mfront.png"
            alt="Michal Front"
            className="header__image-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
