import React, { useState, Fragment } from "react";
import NavigationMenu from "./NavigationMenu";

const HeaderHumbuger = () => {
  const [isOpened, setMenuOpen] = useState(false);

  const onMenuClick = () => {
    if (document && document.getElementById("humburger-icon")) {
      const menu = document.getElementById("humburger-icon");

      menu.classList.toggle("humburger-icon--active");
      setMenuOpen(!isOpened);
    }
  };

  return (
    <Fragment>
      <div className="humburger-icon" id="humburger-icon" onClick={onMenuClick}>
        <span />
      </div>

      <NavigationMenu isOpened={isOpened} />
    </Fragment>
  );
};

export default HeaderHumbuger;
