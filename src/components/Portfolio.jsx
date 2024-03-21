import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import PortfolioModal from "./PortfolioModal";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Portfolio = ({ userData }) => {
  const allProjects = userData.projects;
  const [modalOpen, setModdalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const style = {
    position: "absolute",
    width: "100vw",
    top: "50%",
    height: "100vh",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "none",
    border: "none",
    outline: "none",
    boxShadow: 24,
    overflow: "hidden",
    overflowY: "scroll",
  };

  return (
    <>
      <section
        className="space"
        id="portfolio-sec"
        style={{ position: "relative" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4">
              <div className="title-area">
                <span className="sub-title">PORTFOLIO</span>
                <h2 className="sec-title">I proud of the Same works</h2>
              </div>
            </div>
            <div className="col-auto align-self-end">
              <div className="sec-btn">
                <a
                  href="https://www.behance.net/"
                  className="th-btn style-border2 link-anim"
                >
                  <span className="text-anime">
                    <span className="text">SEE ALL PROJECTS</span>
                  </span>
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio-list-wrap">
            {allProjects.slice(0, 4)?.map((el, index) => {
              return (
                <div
                  className="portfolio-list"
                  key={index}
                  onClick={(e) => {
                    setModdalOpen(true);
                    setModalData(el);
                  }}
                >
                  <div className="portfolio-card">
                    <div
                      className="portfolio-img img-shine"
                      data-bs-toggle="modal"
                      data-bs-target="#portfolioModal"
                    >
                      <img src={el.image.url} alt="project image" />
                    </div>
                    <div className="portfolio-content">
                      <a
                        href="#portfolioModal"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolioModal"
                        className="icon-btn text-center"
                      >
                        <FaArrowRight />
                      </a>
                      <div className="portfolio-details">
                        <p className="portfolio-subtitle">{el.title}</p>
                        <h3 className="portfolio-title">
                          <a
                            href="#portfolioModal"
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModal"
                          >
                            {el.description || "Description"}
                          </a>
                          <p
                            className="portfolio-subtitle"
                            style={{
                              display: "flex",
                              marginTop: "10px",
                            }}
                          >
                            techStack:
                            <ul
                              style={{
                                display: "flex",
                                listStyle: "none",
                                gap: "5px",
                              }}
                            >
                              {el.techStack.map((tech, index) => (
                                <li key={index}>{tech}</li>
                              ))}
                            </ul>
                          </p>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Modal
        open={modalOpen}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modalBox">
          <PortfolioModal setModdalOpen={setModdalOpen} modalData={modalData} />
        </Box>
      </Modal>
    </>
  );
};

export default Portfolio;
