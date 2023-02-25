import React, { useEffect } from "react";
import { Tooltip } from "antd";

const ToggleDayNight = ({ onToggleDayNight, sunPath }) => {
  useEffect(() => {
    if (document && document.getElementById("humburger-menu")) {
      const menu = document.getElementById("humburger-menu");

      menu.addEventListener("click", () => {
        menu.classList.toggle("humburger-menu--active");
      });
    }
  }, []);

  return (
    <div className="toggle">
      <Tooltip title="Click me :)" placement="top">
        <svg
          onClick={onToggleDayNight}
          id="darkMode"
          width="70"
          height="70"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className="sun" d={sunPath} fill="#FFCB14" />
        </svg>
      </Tooltip>
    </div>
  );
};

export default ToggleDayNight;
