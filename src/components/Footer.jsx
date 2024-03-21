import React from "react";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import footerSpinImg from "../img/bg/footer_bg_1.jpg";
const Footer = ({ userData }) => {
  let a = "Instagram";
  return (
    <footer class="footer-wrapper footer-layout1">
      <div class="footer-top">
        <div class="container">
          <h2 class="footer-top-title">Let’s Talk</h2>
          <p class="footer-top-text">
            {`${userData.email} /${userData.about.phoneNumber}/ ${userData.about.address}`}
          </p>
          <div class="footer-btn-wrap">
            <div class="bg-shape">
              <div class="icon">
                <i class="fa-regular fa-arrow-down-long"></i>
              </div>
              <img class="spin" src={footerSpinImg} alt="img" />
            </div>
            <a
              class="th-btn link-anim"
              href="#contactModal"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              <span class="text-anime">
                <span class="text">GET IN TOUCH</span>
              </span>
            </a>
          </div>

          {/* socal media handle --------------------- */}
          <div class="footer-social-wrap">
            {userData.social_handles.map((el, index) => {
              return (
                <a key={index} class="social-link link-anim" href={el.url}>
                  <span
                    class="icon-btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={el.image.url} alt="" />
                  </span>
                  <span class="text-anime">
                    <span class="text">{el.platform}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div class="copyright-wrap">
        <div class="container">
          <div class="row gy-2 align-items-center">
            <div class="col-lg-6">
              <p class="copyright-text">
                <i class="fal fa-copyright"></i> 2024 All Rights Reserved By
                <a href="index.html">Haona</a>
              </p>
            </div>
            <div class="col-lg-6 text-center text-lg-end">
              <div class="footer-links">
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
