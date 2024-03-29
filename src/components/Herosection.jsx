import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IoCloseSharp } from "react-icons/io5";

const HeroSection = ({ userData }) => {
  const [modalOpen, setModdalOpen] = useState(false);
  const [count, setCount] = useState(0);

  const { name, avatar, description, exp_year, title, subTitle } =
    userData?.about;
  const style = {
    position: "absolute",
    width: "80vw",
    top: "50%",
    height: "100vh",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "none",
    border: "none",
    outline: "none",
    boxShadow: 24,
    overflow: "hidden",
  };

  const count1 = (val) => {
    let interval = setInterval(() => {
      val = val + 200;
      setCount(val);
      if (val == 2000) {
        clearInterval(interval);
      }
    }, 100);
  };

  useEffect(() => {
    count1(0);
  }, []);
  return (
    <div
      className="th-hero-wrapper hero-1"
      id="hero"
      style={{ paddingTop: "40px 0" }}
    >
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
              {/* bar chart ------ */}
              {/* ----------------------- */}
              {/* <div className="hero-chart-wrap jump">
                <h4 className="hero-chart-title">Bar Chart</h4>
                <img
                  src="https://datavizproject.com/wp-content/uploads/types/Bar-Chart-Vertical.png"
                  alt="img"
                  width="180px"
                  height="154px"
                />
              </div> */}
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
                <Modal
                  open={modalOpen}
                  // onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  style={{ marginTop: "100px" }}
                >
                  <Box sx={style} className="modalBox">
                    <div style={{ paddingTop: "50px", height: "80%" }}>
                      <span
                        style={{
                          fontSize: "30px",
                          color: "white",
                          position: "absolute",
                          right: "-0px",
                          top: "-0px",
                          backgroundColor: "orange",
                          padding: "5px",
                          borderRadius: "50%",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setModdalOpen(false);
                        }}
                      >
                        <IoCloseSharp />
                      </span>
                      <iframe
                        width="560"
                        height="100%"
                        src={`https://www.youtube.com/embed/${userData.youtube[0].embedId}`}
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </Box>
                </Modal>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <div
                    className="play-btn"
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      backgroundColor: "orange",
                      borderRadius: "50%",
                      color: "white",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setModdalOpen(true);
                    }}
                  >
                    <FaPlay />
                  </div>
                  <div
                    className="btn-content"
                    style={{
                      paddingTop: "8px",
                    }}
                  >
                    <p className="btn-title">Watch Our Video</p>
                  </div>
                </div>
              </div>{" "}
              <div
                className="thumb"
                style={{
                  maxHeight: "580px",
                  maxWidth: "502px",
                  margin: "auto",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                  src={avatar.url}
                  alt="shape"
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
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
