import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function PortfolioModal({ setModdalOpen, modalData }) {
  return (
    <>
      {/* <h1>hello</h1> */}
      <div className="" id="portfolioModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="container">
              <button
                type="button"
                className="icon-btn btn-close"
                onClick={() => {
                  setModdalOpen(false);
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <div className="page-single bg-title">
                <div className="page-img mb-30">
                  <img
                    className="w-100"
                    src={modalData.image.url}
                    alt="portfolio Image"
                  />
                </div>
                <div className="page-content">
                  <h2 className="h3 page-title text-white">
                    {modalData.title}
                  </h2>
                  <div className="row gy-30">
                    <div className="col-xl-7">
                      <p className="mb-20 text-light">
                        The timeline varies depending on the complexity of the
                        project. Simple projects may take a few weeks, while
                        more complex ones could extend to several months.
                        Timelines are influenced by factors like scope, feedback
                        iterations, and client responsiveness.
                      </p>
                      <p className="mb-xl-4 mb-0 text-light">
                        Project timelines vary based on complexity and scope.
                        Small projects may take a few weeks, while larger ones
                        could span several months. Timelines are established
                        during project kickoff. We use a range of
                        industry-standard tools such as Sketch.
                      </p>
                    </div>
                    <div className="col-xl-5">
                      <ul className="portfolio-info-list text-light">
                        <li>
                          <strong>Service Category:</strong> Rubix Carabil Tower
                        </li>
                        <li>
                          <strong>Clients:</strong> David Malan
                        </li>
                        <li>
                          <strong>Project Date:</strong> 13 June, 2020
                        </li>
                        <li>
                          <strong>Avenue End Date:</strong> 22 July, 2023
                        </li>
                        <li>
                          <strong>Locations:</strong> NewYork - 2546 Firs, USA
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="row gy-30 gx-40 align-items-center">
                    <div className="col-xl-6">
                      <div className="page-img mb-0">
                        <img
                          className="w-100"
                          src={modalData.image.url}
                          alt="portfolio Image"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <h4 className="box-title text-white">
                        Services Benefits:
                      </h4>
                      <p className="text-light">
                        We can do both. We can adhere to existing brand
                        guidelines, ensuring consistency, or help develop new
                        ones if a client is looking for a fresh identity. Our
                        goal is to align the UI/UX design with the brand's
                        overall strategy product meets the needs.
                      </p>
                      <div className="checklist style7">
                        <ul>
                          <li className="text-light">
                            <FontAwesomeIcon icon={faCheckCircle} /> We use the
                            latest diagnostic equipment
                          </li>
                          <li className="text-light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Automotive
                            service our clients receive
                          </li>
                          <li className="text-light">
                            <FontAwesomeIcon icon={faCheckCircle} /> We are a
                            member of Professional Service
                          </li>
                          <li className="text-light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Digital how
                            will activities impact traditional
                          </li>
                          <li className="text-light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Architect
                            and technical engineer
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioModal;
