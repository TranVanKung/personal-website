import React, { useState, useEffect } from "react";
import planeSVG from "@/assets/fly.svg";
import { useNavigate } from "react-router-dom";

const ErrorPage = (props) => {
  const history = useNavigate();
  const [isButtonDisable, seButtonDisable] = useState(false);

  useEffect(() => {
    const submitButton = document.querySelector("#notfoundButton");

    submitButton.addEventListener("click", () => {
      submitButton.classList.toggle("clicked");
      seButtonDisable(true);

      setTimeout(() => {
        seButtonDisable(false);
        submitButton.classList.toggle("clicked");
        backToHomePage();
      }, 4000);
    });
  }, []);

  const backToHomePage = () => {
    history.push("/");
  };

  return (
    <div className="not-found-page">
      <div className="background" />

      <div className="main-content">
        <div className="error-text">
          Sorry, the page you visited does not exist.
        </div>

        <div className="button-wrapper">
          <button
            type="button"
            className="header-button"
            disabled={isButtonDisable}
            id="notfoundButton"
          >
            <div className="text">Go back</div>

            <div className="icon-wrapper">
              <img src={planeSVG} alt="fly" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
