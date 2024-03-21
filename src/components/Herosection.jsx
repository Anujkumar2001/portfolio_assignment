import React, { useState, useEffect } from "react";
import hero_thumb_group1 from "../img/hero/hero_thumb_group1-1.png";
import hero_thumb_group2 from "../img/hero/hero_thumb_group1-2.png";
import hero_thumb_group3 from "../img/hero/hero_thumb_group1-3.png";
import hero1 from "../img/hero/hero_1_1.jpg";
import hero_chart1 from "../img/hero/hero_chart1-1.png";

const HeroSection = ({ userData }) => {
  const [count, setCount] = useState(0);

  const { name, avatar, description, exp_year, title, subTitle } =
    userData?.about;

  const count1 = (val) => {
    let interval = setInterval(() => {
      val++;
      setCount(val);
      if (val == 2000) {
        clearInterval(interval);
      }
    }, 0);
  };

  useEffect(() => {
    count1(0);
  }, []);
  if (!userData) {
    return;
  }
  return (
    <div className="th-hero-wrapper hero-1" id="hero">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="hero-style1 text-center">
              <h4 className="hero-subtitle">Hi I'm {name}</h4>
              <h1 className="hero-title text-white">
                A <span className="text-theme">{title}</span>
              </h1>
              <div className="btn-wrap justify-content-center">
                <a
                  href="#contactModal"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                  className="link-btn style2 link-anim"
                >
                  <span className="text-anime">
                    <span className="text">Need this? Please talk</span>
                  </span>
                  <div className="icon">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-12 text-center">
            <div className="hero-img-1">
              <div className="hero-chart-wrap jump">
                <h4 className="hero-chart-title">Bar Chart</h4>
                <img src={hero_chart1} alt="img" />
              </div>
              <div className="hero-video-wrap jump-reverse">
                <div className="hero-thumb-wrap">
                  <div className="hero-thumb-group">
                    <img src={userData.testimonials[0].image.url} alt="img" />
                    <img src={userData.testimonials[1].image.url} alt="img" />
                    <img src={userData.testimonials[2].image.url} alt="img" />
                    <div className="hero-thumb-counter-wrap">
                      <span className="counter-number">{count}</span>+ <br />
                      Trusted Clients
                    </div>
                  </div>
                </div>
                <p>{subTitle}</p>
                <a
                  href={`https://www.youtube.com/watch?v=${userData.youtube[0].embedId}`}
                  className="video-text-btn popup-video"
                >
                  <div className="play-btn">
                    <i className="fas fa-play"></i>
                  </div>
                  <div className="btn-content">
                    <p className="btn-title">Watch Our Video</p>
                  </div>
                </a>
              </div>
              <div className="thumb">
                <img
                  style={{
                    maxWidth: "442px",
                    maxHeight: "528px",
                  }}
                  src={avatar.url}
                  alt="shape"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-social-link">
        <div className="th-social">
          <a href="https://www.facebook.com/">
            <i className="fab fa-facebook-f">
              <img src={userData.social_handles[3].image.url} alt="" />
            </i>
          </a>
          <a href="https://www.twitter.com/">
            <i className="fab fa-twitter">
              <img src={userData.social_handles[2].image.url} alt="" />
            </i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram">
              <img src={userData.social_handles[0].image.url} alt="img" />
            </i>
          </a>
          <a href="https://www.linkedin.com/">
            <i className="fab fa-linkedin-in">
              <img src={userData.social_handles[2].image.url} alt="" />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
