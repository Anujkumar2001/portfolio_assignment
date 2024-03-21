import React from "react";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import footerSpinImg from "../img/bg/footer_bg_1.jpg";
const Footer = ({ userData }) => {
  let a = "Instagram";
  return (
    <footer className="footer-wrapper footer-layout1">
      <div className="footer-top">
        <div className="container">
          <h2 className="footer-top-title">Let’s Talk</h2>
          <p className="footer-top-text">
            {`${userData.email} /${userData.about.phoneNumber}/ ${userData.about.address}`}
          </p>
          <div className="footer-btn-wrap">
            <div className="bg-shape">
              <div className="icon">
                <i className="fa-regular fa-arrow-down-long"></i>
              </div>
              <img className="spin" src={footerSpinImg} alt="img" />
            </div>
            <a
              className="th-btn link-anim"
              href="#contactModal"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              <span className="text-anime">
                <span className="text">GET IN TOUCH</span>
              </span>
            </a>
          </div>

          {/* socal media handle --------------------- */}
          <div className="footer-social-wrap">
            {userData.social_handles.map((el, index) => {
              return (
                <a key={index} className="social-link link-anim" href={el.url}>
                  <span
                    className="icon-btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={el.image.url} alt="" />
                  </span>
                  <span className="text-anime">
                    <span className="text">{el.platform}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-2 align-items-center">
            <div className="col-lg-6">
              <p className="copyright-text">
                <i className="fal fa-copyright"></i> 2024 All Rights Reserved By
                <a href="index.html">Haona</a>
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="about.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="about.html">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="about.html">Support policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
