import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

const routesConfig = [
  {
    exact: true,
    isPrivateRoute: false,
    path: "/",
    component: <Home />,
  },
  {
    isPrivateRoute: true,
    path: "*",
    component: <NotFound />,
  },
];
class AppRoute extends Component {
  state = { scrolled: 0 };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollProgress);

    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        `top:  ${e.pageY - 10}px; left: ${e.pageX - 10}px`
      );
    });

    document.addEventListener("click", () => {
      cursor.classList.add("cursor-expand");

      setTimeout(() => {
        cursor.classList.remove("cursor-expand");
      }, 500);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollProgress);
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeight) * 100}%`;
    this.setState({
      scrolled,
    });
  };

  render() {
    const { scrolled } = this.state;

    return (
      <Fragment>
        <div className="progress-bar" style={{ width: scrolled }} />
        <div className="cursor" />

        <Router>
          <Routes>
            {routesConfig.map(
              ({ component: ComponentInRoute, ...singleRoute }, index) => {
                return (
                  <Route
                    {...singleRoute}
                    element={ComponentInRoute}
                    key={index}
                  />
                );
              }
            )}
          </Routes>
        </Router>
      </Fragment>
    );
  }
}

export default AppRoute;
