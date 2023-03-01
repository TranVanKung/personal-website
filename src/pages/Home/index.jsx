import React, { useState, useEffect } from "react";
import anime from "animejs";
import { TimelineMax, Expo, Power3, TweenMax } from "gsap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaStar,
  FaBehance,
} from "react-icons/fa";
import {
  GiNinjaHead,
  GiNinjaHeroicStance,
  GiConqueror,
  GiBodyBalance,
  GiWeightLiftingUp,
} from "react-icons/gi";
import { BackTop } from "antd";
import Parallax from "parallax-js";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import image3 from "@/assets/image-3.jpg";
import image4 from "@/assets/image-4.jpg";
import myLogo from "@/assets/my-logo.png";
import star2 from "@/assets/star-2.png";
import star3 from "@/assets/star-3.png";
import star4 from "@/assets/star-4.png";
import star5 from "@/assets/star-5.png";
import star6 from "@/assets/star-6.png";
import myAvatarUrl from "@/assets/avatar.jpeg";
import planeSVG from "@/assets/fly.svg";
import HeaderHumburger from "./HeaderHumburger";
import ToggleDayNight from "./ToggleDayNight";

const moonPath =
  "M50.5 92.5C50.5 147.728 100.5 200.723 100.5 200.723C45.2715 200.723 0.5 155.951 0.5 100.723C0.5 45.4945 45.2715 0.722985 100.5 0.722985C100.5 0.722985 50.5 37.2715 50.5 92.5Z";
const sunPath =
  "M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100Z";
const biographyTimeline = new TimelineMax();
const skillSetTimeline = new TimelineMax();
const myInfoTimeline = new TimelineMax();

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const Home = () => {
  const [isNight, setToggle] = useState(false);
  const [isButtonDisable, seButtonDisable] = useState(false);

  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);

    const submitButton = document.querySelector(".header-button");

    submitButton.addEventListener("click", () => {
      submitButton.classList.toggle("clicked");
      seButtonDisable(true);

      setTimeout(() => {
        seButtonDisable(false);
        submitButton.classList.toggle("clicked");
        window.open(
          "https://drive.google.com/drive/folders/1p-oYqY7XDFr4Zv4QQa20xRGEyED-FQtD?usp=sharing",
          "_blank"
        );
      }, 4000);
    });

    runSlideContainer();
    runBiographyTimeline();
    runSkillSetTimeline();
    runMyInfoTimeline();

    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: "#triggerInfo",
      triggerHook: 0.5,
      reverse: false,
    })
      .setTween(myInfoTimeline)
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#triggerBiography",
      triggerHook: 0.5,
      reverse: false,
    })
      .setTween(biographyTimeline)
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#triggerSkillSet",
      triggerHook: 1,
      reverse: false,
    })
      .setTween(skillSetTimeline)
      .addTo(controller);
  }, []);

  const runMyInfoTimeline = () => {
    const myImage = document.querySelector(
      ".section-cv .my-info .image-wrapper"
    );

    const fullName = document.querySelector(".section-cv .my-info .fullname");
    const quote = document.querySelector(".section-cv .my-info .quote");

    myInfoTimeline
      .from(myImage, {
        opacity: 0,
        x: -80,
        duration: 1,
        ease: Power3.easeOut,
        stagger: { amount: 0.5 },
      })
      .from([fullName, quote], {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: Power3.easeOut,
        stagger: { amount: 0.5 },
      });
  };

  const runBiographyTimeline = () => {
    const biographyLabel = document.querySelector(
      ".my-biography .cv-description"
    );
    const biographyContent1 = document.querySelector(
      ".my-biography .content .biography-p1"
    );
    const biographyContent2 = document.querySelector(
      ".my-biography .content .biography-p2"
    );

    biographyTimeline
      .from(biographyLabel, {
        opacity: 0,
        x: -80,
        duration: 1,
        ease: Power3.easeOut,
      })
      .from([biographyContent1, biographyContent2], {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: Power3.easeOut,
        stagger: { amount: 1 },
      });
  };

  const runSkillSetTimeline = () => {
    const skillSetLabel = document.querySelector(
      ".my-skillset .cv-description"
    );
    const skillSet1 = document.querySelector(".my-skillset .content .skill-1");
    const skillSet2 = document.querySelector(".my-skillset .content .skill-2");
    const skillSet3 = document.querySelector(".my-skillset .content .skill-3");
    const skillSet4 = document.querySelector(".my-skillset .content .skill-4");
    const skillSet5 = document.querySelector(".my-skillset .content .skill-5");

    biographyTimeline
      .from(skillSetLabel, {
        opacity: 0,
        x: -80,
        duration: 1,
        ease: Power3.easeOut,
      })
      .from([skillSet1, skillSet2], {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: Power3.easeOut,
        stagger: { amount: 1 },
      })
      .from([skillSet3, skillSet4, skillSet5], {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: Power3.easeOut,
        stagger: { amount: 1 },
      });
  };

  const runSlideContainer = () => {
    const headerTimeline = new TimelineMax();
    const slideContainer = document.querySelector(".slide-container");
    const logo = document.querySelector(".logo");
    const status = document.querySelector(".status");
    const heading1 = document.querySelector(".heading-1");
    const heading2 = document.querySelector(".heading-2");
    const callButton = document.querySelector(".button-wrapper");
    const toggle = document.querySelector(".toggle");
    const humburgerIcon = document.querySelector(".humburger-icon");
    const socialGithub = document.querySelector(".social--github");
    const socialFacebook = document.querySelector(".social--facebook");
    const socialGoogle = document.querySelector(".social--google");
    const socialBehance = document.querySelector(".social--behance");
    const sectionIntroOverlay = document.querySelector(".section-overlay");

    const star1Element = document.querySelector(".star-1");
    const star2Element = document.querySelector(".star-2");
    const star3Element = document.querySelector(".star-3");
    const star4Element = document.querySelector(".star-4");
    const star5Element = document.querySelector(".star-5");
    const star6Element = document.querySelector(".star-6");
    const star7Element = document.querySelector(".star-7");

    headerTimeline
      .to(slideContainer, 4, {
        animation: "go-left 4s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards",
      })
      .to(sectionIntroOverlay, 1, {
        delay: -4,
        backgroundColor: "rgba(0, 0, 0, 1)",
      })
      .to(sectionIntroOverlay, 2, {
        delay: -2,
        backgroundColor: "rgba(0, 0, 0, 1)",
      })
      .from(sectionIntroOverlay, 0.5, {
        delay: -0.5,
        backgroundColor: "rgba(0, 0, 0, 1)",
      })
      .from([logo, status, humburgerIcon], 1, {
        x: -50,
        ease: Expo.easeInOut,
        opacity: 0,
        stagger: {
          amount: 0.2,
        },
      })
      .from(heading1, 1.2, {
        y: 80,
        opacity: 0,
        ease: Expo.easeInOut,
      })
      .from([heading2, callButton], 1, {
        y: -50,
        opacity: 0,
        delay: -0.2,
        ease: Power3.easeInOut,
        stagger: {
          amount: 0.2,
        },
      })
      .from(toggle, 1.5, {
        y: -40,
        opacity: 0,
        delay: -0.5,
        ease: Power3.easeInOut,
      })
      .from([socialBehance, socialGithub, socialFacebook, socialGoogle], 1, {
        delay: -1,
        x: 50,
        opacity: 0,
        ease: Expo.easeInOut,
        stagger: {
          amount: 0.2,
        },
      })
      .from(
        [
          star1Element,
          star2Element,
          star3Element,
          star4Element,
          star5Element,
          star6Element,
          star7Element,
        ],
        1.5,
        {
          opacity: 0,
          y: -800,
          ease: Expo.easeInOut,
          stagger: {
            amount: 0.2,
          },
        }
      );
  };

  const runToggleContainer = () => {
    const headerTimeline = new TimelineMax();
    const logo = document.querySelector(".logo");
    const status = document.querySelector(".status");
    const heading1 = document.querySelector(".heading-1");
    const heading2 = document.querySelector(".heading-2");
    const callButton = document.querySelector(".button-wrapper");
    const toggle = document.querySelector(".toggle");
    const humburgerIcon = document.querySelector(".humburger-icon");
    const socialGithub = document.querySelector(".social--github");
    const socialFacebook = document.querySelector(".social--facebook");
    const socialBehance = document.querySelector(".social--behance");
    const socialGoogle = document.querySelector(".social--google");

    const star1Element = document.querySelector(".star-1");
    const star2Element = document.querySelector(".star-2");
    const star3Element = document.querySelector(".star-3");
    const star4Element = document.querySelector(".star-4");
    const star5Element = document.querySelector(".star-5");
    const star6Element = document.querySelector(".star-6");
    const star7Element = document.querySelector(".star-7");

    headerTimeline
      .from([logo, status, humburgerIcon], 1, {
        x: -50,
        ease: Expo.easeInOut,
        opacity: 0,
        stagger: {
          amount: 0.2,
        },
      })
      .from(heading1, 1.2, {
        y: 80,
        opacity: 0,
        ease: Expo.easeInOut,
      })
      .from([heading2, callButton], 1, {
        y: -50,
        opacity: 0,
        delay: -0.2,
        ease: Power3.easeInOut,
        stagger: {
          amount: 0.2,
        },
      })
      .from(toggle, 1.5, {
        y: -40,
        opacity: 0,
        delay: -0.5,
        ease: Power3.easeInOut,
      })
      .from([socialBehance, socialGithub, socialFacebook, socialGoogle], 1, {
        delay: -1,
        x: 50,
        opacity: 0,
        ease: Expo.easeInOut,
        stagger: {
          amount: 0.2,
        },
      })
      .from(
        [
          star1Element,
          star2Element,
          star3Element,
          star4Element,
          star5Element,
          star6Element,
          star7Element,
        ],
        1.5,
        {
          opacity: 0,
          y: -800,
          ease: Expo.easeInOut,
          stagger: {
            amount: 0.2,
          },
        }
      );
  };

  const onToggleDayNight = () => {
    const timeline = anime.timeline({
      duration: 750,
      easing: "easeOutExpo",
    });

    // add different animation to the timeline
    timeline
      .add({
        targets: ".sun",
        d: [
          {
            value: isNight ? sunPath : moonPath,
          },
        ],
      })
      .add(
        {
          targets: "#darkMode",
          rotate: isNight ? 0 : 320,
        },
        "-=350"
      );

    if (!isNight) {
      setTimeout(() => {
        runToggleContainer();
        setToggle(true);
      }, 1550);
    } else {
      setTimeout(() => {
        runToggleContainer();
        setToggle(false);
      }, 1550);
    }
  };

  return (
    <div className="home-page">
      <section className="section-intro">
        <div className="section-overlay" />

        <div className="header">
          <img src={myLogo} alt="myLogo" className="logo" />

          <div className="status">
            <div className="indicator" />
            <div className="text">
              <span>I am available for work!</span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.open(
                    "https://drive.google.com/drive/folders/1p-oYqY7XDFr4Zv4QQa20xRGEyED-FQtD?usp=sharing",
                    "_blank"
                  );
                }}
              >
                Contact me
              </span>
            </div>
          </div>

          <div className="navigation">
            <HeaderHumburger />
          </div>
        </div>

        <img src={isNight ? image4 : image3} alt="img" />

        <div className="heading-wrapper">
          <div className="heading-1">
            {!isNight ? "Học ngày chưa đủ" : "Tranh thủ học đêm"}
          </div>

          <div className="heading-2">
            {!isNight
              ? "Yesterday, I was clever, so I change the world ..."
              : "Today I am wise, so I am changing myself"}
          </div>

          <div className="button-wrapper">
            <button
              type="button"
              className="header-button"
              disabled={isButtonDisable}
            >
              <div className="text">Contact me</div>

              <div className="icon-wrapper">
                <img src={planeSVG} alt="fly" />
              </div>
            </button>
          </div>
        </div>

        <ToggleDayNight onToggleDayNight={onToggleDayNight} sunPath={sunPath} />

        <div className="social">
          <a href="https://www.behance.net/trancong2" target="blank">
            <FaBehance className="social--behance" />
          </a>

          <a href="https://github.com/TranVanKung" target="blank">
            <FaGithub className="social--github" />
          </a>

          <a href="https://www.facebook.com/tranvancong97" target="blank">
            <FaFacebook className="social--facebook" />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=trancongtr1071997@gmail.com"
            target="blank"
          >
            <FaGoogle className="social--google" />
          </a>
        </div>

        <div className="paralax-layer">
          <div id="scene">
            <div className="layer" data-depth="-0.6">
              <img src={star2} alt="star1" className="star star-1" />
            </div>

            <div className="layer" data-depth="1">
              <img src={star2} alt="star2" className="star star-2" />
            </div>

            <div className="layer" data-depth="-1.2">
              <img src={star3} alt="star3" className="star star-3" />
            </div>

            <div className="layer" data-depth="0.4">
              <img src={star4} alt="star4" className="star star-4" />
            </div>

            <div className="layer" data-depth="0.5">
              <img src={star5} alt="star5" className="star star-5" />
            </div>

            <div className="layer" data-depth="-0.7">
              <img src={star6} alt="star6" className="star star-6" />
            </div>

            <div className="layer" data-depth="0.6">
              <img src={star4} alt="star6" className="star star-7" />
            </div>
          </div>
        </div>

        <div className="slide-container" />
      </section>

      <section className="section-cv">
        <div className="bg-text-1">Blockchain</div>
        <div className="bg-text-2">Soft Engineer</div>

        <div className="my-info">
          <div className="image-wrapper" id="triggerInfo">
            <img src={myAvatarUrl} alt="my avatar" />
          </div>

          <div className="detail-info">
            <div className="fullname">
              <div className="birth-name">
                <span>Birth name</span>
                <span>Trần Văn Công</span>
              </div>

              <div className="nationality">
                <span>Nationality</span>
                <span>Vietnamese</span>
              </div>
            </div>

            <div className="quote">
              I conceive that: "Life is like riding a bicycle. To keep your
              balance, you must keep moving".
            </div>
          </div>
        </div>

        <div className="my-biography cv-container">
          <div className="cv-description" id="triggerBiography">
            <span>01</span>
            <span>Biography</span>
          </div>

          <div className="content">
            <p className="biography-p1">
              I am a <strong>literature student</strong>, later I majored in
              <strong> Software Engineering</strong> at Hanoi University of
              Science Technology (HUST), I always think that every product I
              make should be cultivated and cherished like my brainchild.
            </p>

            <p className="biography-p2">
              According to
              <strong> Nam Cao</strong>, a famous writer in Vietnam, wrote:
              "Literature does not need skilled craftsmen, following a few
              models given. Literature only tolerates those who know how to
              <strong> dig deep</strong> and know how to
              <strong> explore</strong>, <strong>unleash</strong> unmatched
              resources, and create what doesn't yet have." (
              <i>
                Văn chương không cần đến những người thợ khéo tay, làm theo một
                vài kiểu mẫu đưa cho. Văn chương chỉ dung nạp những người biết
                đào sâu, biết tìm tòi, khơi những nguồn chưa ai khơi, và sáng
                tạo những cái gì chưa có
              </i>
              ). Since then I have always reminded myself that
              <strong>
                {" "}
                a true engineer must be a person who know how to dig, explore,
                create and contribute those creations to the community and
                society
              </strong>
              .
            </p>
          </div>
        </div>

        <div className="my-skillset cv-container">
          <div className="cv-description">
            <span>02</span>
            <span>Skillset</span>
          </div>

          <div className="content">
            <div className="skill skill-1">
              <div className="skill-icon">
                <GiBodyBalance />
              </div>

              <div className="skill-detail">
                <div className="skill-name skill-name--margin">Blockchain</div>
                <div className="skill-content">
                  I am currently work as Full-stack developer at{" "}
                  <strong>
                    <i>
                      <a
                        href="https://krystal.app/"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "orangered",
                          textDecoration: "underline",
                        }}
                      >
                        Krystal
                      </a>
                    </i>
                  </strong>{" "}
                  - Kyber Network group. I have experience with{" "}
                  <strong>
                    <i>Smart Contract</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Solidity</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Truffle</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Ganache</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Web3.js</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Ethers</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Hardhat</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>OpenZeppelin</i>
                  </strong>{" "}
                  to build Dapp on EVM blockchain . I am also the Founder of{" "}
                  <strong>
                    <i>
                      <a
                        href="https://cryptocall.pro/"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "orangered",
                          textDecoration: "underline",
                        }}
                      >
                        CryptoCall
                      </a>
                    </i>
                  </strong>{" "}
                  - a tracking and calling alerts app based on the price of
                  cryptocurrencies and provides on-chain data monitoring and
                  analysis functions
                </div>
              </div>
            </div>

            <div className="skill skill-2">
              <div className="skill-icon">
                <GiWeightLiftingUp />
              </div>

              <div className="skill-detail">
                <div className="skill-name">Programming</div>

                <div className="star-group">
                  <div className="star star-yellow">
                    <FaStar />
                  </div>
                  <div className="star star-yellow">
                    <FaStar />
                  </div>
                  <div className="star star-yellow">
                    <FaStar />
                  </div>
                  <div className="star star-yellow">
                    <FaStar />
                  </div>
                  <div className="star">
                    <FaStar />
                  </div>
                </div>

                <div className="skill-content">
                  With proficiency in{" "}
                  <strong>
                    <i>JavaScript</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>TypeScript</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Golang</i>
                  </strong>
                  , combining knowledge of design pattern, data structures and
                  algorithms will be important skills for me to implement and
                  make my ideas more uplifting.
                </div>
              </div>
            </div>

            <div className="skill skill-3">
              <div className="skill-icon">
                <GiNinjaHead />
              </div>

              <div className="skill-detail">
                <div className="skill-name">Front-end</div>

                <div className="star-group">
                  <div className="star star-yellow">
                    <FaStar />
                  </div>
                  <div className="star star-yellow">
                    <FaStar />
                  </div>
                  <div className="star star-yellow">
                    <FaStar />
                  </div>
                  <div className="star star-yellow">
                    <FaStar />
                  </div>
                  <div className="star">
                    <FaStar />
                  </div>
                </div>

                <div className="skill-content" id="triggerSkillSet">
                  I am expert in{" "}
                  <strong>
                    <i>ReactJS</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>NextJS</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Electron</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Redux</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i> Apollo client (for GraphQL)</i>
                  </strong>
                  , etc and love the animation on the website. I always try to
                  put myself in the user's shoes to understand the interaction
                  between people and machines (human-computer interaction) as
                  mentioned in a book named <i>"Don't make me think".</i>
                </div>
              </div>
            </div>

            <div className="skill skill-4">
              <div className="skill-icon">
                <GiNinjaHeroicStance />
              </div>

              <div className="skill-detail">
                <div className="skill-name">
                  Back-end and Software architecture
                </div>

                <div className="star-group">
                  <div className="star star-yellow">
                    <FaStar />
                  </div>
                  <div className="star star-yellow">
                    <FaStar />
                  </div>
                  <div className="star star-yellow">
                    <FaStar />
                  </div>
                  <div className="star star-yellow">
                    <FaStar />
                  </div>
                  <div className="star">
                    <FaStar />
                  </div>
                </div>

                <div className="skill-content">
                  I always wanted to learn more and more about system design so
                  that my application could be easily expanded,
                  high-availability. I have {new Date().getFullYear() - 2018}{" "}
                  years of experience with{" "}
                  <strong>
                    <i>NodeJS</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>MongoDB</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Apollo Server (for GraphQL)</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Docker</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>AWS</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>CI/CD (Jenkins, TravisCI)</i>
                  </strong>{" "}
                  and {new Date().getFullYear() - 2020} years of experience
                  working with large-scale, high-availability systems using
                  distributed parallel computing with technologies such as{" "}
                  <strong>
                    <i>Kafka</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Redis</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Hadoop</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Apache Spark</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Apache Nifi</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Apache Hive</i>
                  </strong>
                </div>
              </div>
            </div>

            <div className="skill skill-5">
              <div className="skill-icon">
                <GiConqueror />
              </div>

              <div className="skill-detail">
                <div className="skill-name">
                  Machine learning, Deep learning
                </div>

                <div className="star-group">
                  <div className="star star-yellow">
                    <FaStar />
                  </div>
                  <div className="star star-yellow">
                    <FaStar />
                  </div>
                  <div className="star star-yellow">
                    <FaStar />
                  </div>
                  <div className="star">
                    <FaStar />
                  </div>
                  <div className="star">
                    <FaStar />
                  </div>
                </div>

                <div className="skill-content" id="triggerSkillSet2">
                  With luck was exposed to Artificial Intelligence (AI) at the
                  university. I realize that the pace of progress AI is
                  incredibly fast, it always gives me curiosity and the desire
                  to explore, this is also the direction I will focus in the
                  future. I have experience with{" "}
                  <strong>
                    <i>Numpy</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Pandas</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Scikit-learn</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Keras</i>
                  </strong>
                  ,{" "}
                  <strong>
                    <i>Pytorch</i>
                  </strong>{" "}
                  and common algorithms in Machine learning and Deep learning
                  neural network
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="back-to-top">
        <BackTop />
      </div>
    </div>
  );
};

export default Home;
