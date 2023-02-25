import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { EnvironmentOutlined } from "@ant-design/icons";
import hanoiImage from "@/assets/hanoi-2.jpg";
import namDinhImage from "@/assets/image-2.jpg";
import myAvatarUrl from "@/assets/my-avatar.jpg";
import samurai1Url from "@/assets/samurai-1.png";

const cities = [
  {
    name: "Nam Dinh",
    image: namDinhImage,
  },
  {
    name: "Ha Noi",
    image: hanoiImage,
  },
];

const NavigationMenu = ({ isOpened }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let avatar = useRef(null);
  let samurai = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (isOpened === false) {
        // close menu
        gsap.to([revealMenu.current, revealMenuBackground.current], {
          duration: 0.8,
          height: "0%",
          ease: Power3.easeInOut,
          stagger: {
            amount: 0.07,
          },
        });

        gsap.from([revealMenuBackground.current], {
          skewY: 2,
          duration: 0.8,
          ease: Power3.easeInOut,
        });

        gsap.to(menu.current, {
          duration: 1,
          css: { display: "none" },
        });
      } else if (isOpened === true) {
        // open menu
        gsap.to(menu.current, {
          duration: 1,
          css: { display: "block" },
        });

        gsap.to([revealMenuBackground.current, revealMenu.current], {
          duration: 0,
          opacity: 1,
          height: "100%",
        });

        staggerReveal(revealMenuBackground.current, revealMenu.current);
        fadeInUp(avatar.current);
        gsap.from(samurai.current, {
          y: 100,
          duration: 1.2,
          delay: 0.2,
          opacity: 0,
          ease: Power3.easeInOut,
        });
        staggerText(line1.current, line2.current);
      }
    }, 50);
  }, [isOpened]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: "0%",
      transformOrigin: "right top",
      skewY: 2,
      ease: Power3.easeInOut,
      stagger: {
        amount: 0.1,
      },
    });
  };

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 100,
      duration: 1.2,
      delay: 0.2,
      opacity: 0,
      ease: Power3.easeInOut,
    });
  };

  const staggerText = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      y: 100,
      delay: 0.2,
      ease: Power3.easeInOut,
      stagger: {
        amount: 0.3,
      },
    });
  };

  const handleCity = (city) => {
    setTimeout(() => {
      gsap.to(avatar.current, {
        duration: 0,
        visibility: "hidden",
      });

      gsap.to(samurai.current, {
        duration: 0,
        visibility: "hidden",
      });

      gsap.to(line1.current, {
        duration: 0,
        visibility: "hidden",
      });

      gsap.to(line2.current, {
        duration: 0,
        visibility: "hidden",
      });

      gsap.to(cityBackground.current, {
        duration: 0,
        background: `url(${city}) center center`,
      });

      gsap.to(cityBackground.current, {
        duration: 0.4,
        opacity: 1,
        ease: Power3.easeInOut,
      });

      gsap.from(cityBackground.current, {
        duration: 0.4,
        skewY: 1.5,
        transformOrigin: "right bottom",
      });
    }, 50);
  };

  const handleCityReturn = () => {
    setTimeout(() => {
      gsap.to(cityBackground.current, {
        duration: 0.4,
        opacity: 0,
      });

      gsap.to(avatar.current, {
        visibility: "visible",
        duration: 0,
      });

      gsap.to(line1.current, {
        visibility: "visible",
        duration: 0,
      });

      gsap.to(line2.current, {
        visibility: "visible",
        duration: 0,
      });

      gsap.to(samurai.current, {
        duration: 0,
        visibility: "visible",
      });
    }, 50);
  };

  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: Power3.easeInOut,
    });
  };

  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: Power3.easeInOut,
    });
  };

  return (
    <div className="navigation-menu" ref={menu}>
      <div
        className="menu-secondary-background-color"
        ref={revealMenuBackground}
      />

      <div className="menu-layer" ref={revealMenu}>
        <div className="menu-city-background" ref={cityBackground} />

        <div className="my-avatar" ref={avatar}>
          <img src={myAvatarUrl} alt="myAvatarUrl" />
        </div>

        <div className="menu-links">
          <nav>
            <ul>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1p-oYqY7XDFr4Zv4QQa20xRGEyED-FQtD?usp=sharing"
                  target="blank"
                  ref={line1}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverExit}
                >
                  Get my CV
                </a>
              </li>

              <li>
                <a
                  href="https://drive.google.com/drive/folders/1eCZtv45UacoBksBTD4fKQk_g3Htt5DdH?usp=sharing"
                  target="blank"
                  ref={line2}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverExit}
                >
                  Certificates
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="samurai-wrapper" ref={samurai}>
          <img src={samurai1Url} alt="samurai1Url" />
        </div>

        <div className="locations">
          <EnvironmentOutlined className="location-icon" />

          <span className="location-text"> I live in:</span>

          {cities.map((el) => (
            <span
              key={el.name}
              onMouseEnter={() => handleCity(el.image)}
              onMouseLeave={handleCityReturn}
              className="location-name"
            >
              {el.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
