import React, { useEffect, useState } from "react";
import { useCountUp } from "react-use-count-up";

const AboutUs = ({ userData }) => {
  const [showCart1, setShowCart1] = useState(true);
  const [showCart2, setShowCart2] = useState(false);
  const [showCart3, setShowCart3] = useState(false);
  const [showCart4, setShowCart4] = useState(false);
  const [isClick1, setIsClick1] = useState("active");
  const [isClick2, setIsClick2] = useState("");
  const [isClick3, setIsClick3] = useState("");
  const [isClick4, setIsClick4] = useState("");
  const [count, setCount] = useState(0);

  const count1 = (val) => {
    let interval = setInterval(() => {
      val++;
      setCount(val);
      if (val == userData.about.exp_year) {
        clearInterval(interval);
      }
    }, 200);
  };

  useEffect(() => {
    count1(0);
  }, []);
  return (
    <div className="overflow-hidden space" id="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 mb-50 mb-xl-0">
            <div className="img-box1">
              <div
                className="img1"
                style={{
                  height: "613px",
                  maxWidth: "386px",
                }}
              >
                <img
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={userData.about.avatar.url}
                />
              </div>
              <div className="year-counter jump">
                <div className="year-counter_number">
                  <span className="counter-number">{count}</span>
                </div>
                <p className="year-counter_text">Year Of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-25">
              <span className="sub-title">About Us</span>
              <h2 className="sec-title">
                Navigating the Web, One Ranking at a Time
              </h2>
            </div>
            <div className="about-tab-1">
              <div className="filter-menu-active">
                <button
                  onClick={() => {
                    setShowCart1(true);
                    setShowCart2(false);
                    setShowCart3(false);
                    setShowCart4(false);
                    setIsClick1("active");
                    setIsClick2("");
                    setIsClick3("");
                    setIsClick4("");
                  }}
                  className={`${isClick1} th-btn link-anim`}
                  type="button"
                >
                  <span className="text-anime">
                    <span className="text">My Self</span>
                  </span>
                </button>
                <button
                  className={`${isClick2} th-btn link-anim`}
                  onClick={() => {
                    setShowCart1(false);
                    setShowCart2(true);
                    setShowCart3(false);
                    setShowCart4(false);
                    setIsClick2("active");
                    setIsClick1("");
                    setIsClick3("");
                    setIsClick4("");
                  }}
                  type="button"
                >
                  <span className="text-anime">
                    <span className="text">Education</span>
                  </span>
                </button>
                <button
                  onClick={() => {
                    setShowCart1(false);
                    setShowCart2(false);
                    setShowCart3(true);
                    setShowCart4(false);
                    setIsClick1("");
                    setIsClick2("");
                    setIsClick3("active");
                    setIsClick4("");
                  }}
                  className={`${isClick3} th-btn link-anim`}
                  type="button"
                >
                  <span className="text-anime">
                    <span className="text">Skills</span>
                  </span>
                </button>
                <button
                  onClick={() => {
                    setShowCart4(true);
                    setShowCart1(false);
                    setShowCart2(false);
                    setShowCart3(false);
                    setIsClick1("");
                    setIsClick2("");
                    setIsClick3("");
                    setIsClick4("active");
                  }}
                  className={`${isClick4} th-btn link-anim`}
                  type="button"
                >
                  <span className="text-anime">
                    <span className="text">Experience</span>
                  </span>
                </button>
              </div>
              <div className="filter-active-cat1">
                {showCart1 && (
                  <div className="filter-item cat1">
                    <div className="about-tab-wrap ">
                      {userData.timeline.map((el, index) => (
                        <div
                          className="about-tab-card"
                          key={index}
                          style={{ minWidth: "200px" }}
                        >
                          <span className="about-tab-card-subtitle">
                            {el.startDate.split("-")[0] +
                              "-" +
                              el.endDate.split("-")[0]}
                          </span>
                          <h4 className="about-tab-card-title">
                            {el.jobTitle}
                          </h4>
                          <p className="about-tab-card-text">
                            {el.company_name}
                          </p>{" "}
                          {/* Assuming 'company' is the property in 'el' that holds the company name */}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {showCart2 ? (
                  <div className="filter-item cat2">
                    <div className="about-tab-wrap">
                      <div className="about-tab-card">
                        <span className="about-tab-card-subtitle">
                          (2001-2010)
                        </span>
                        <h4 className="about-tab-card-title">
                          Education Prose
                        </h4>
                        <p className="about-tab-card-text">
                          Stellar Learning Academy
                        </p>
                      </div>
                      <div className="about-tab-card">
                        <span className="about-tab-card-subtitle">
                          (2010-2015)
                        </span>
                        <h4 className="about-tab-card-title">SEO Specialist</h4>
                        <p className="about-tab-card-text">Upwork Inc.</p>
                      </div>
                      <div className="about-tab-card">
                        <span className="about-tab-card-subtitle">
                          (2012-2015)
                        </span>
                        <h4 className="about-tab-card-title">
                          IT Consultation
                        </h4>
                        <p className="about-tab-card-text">Envato Inc.</p>
                      </div>
                      <div className="about-tab-card">
                        <span className="about-tab-card-subtitle">
                          2024 At Present
                        </span>
                        <h4 className="about-tab-card-title">
                          Content Strategist
                        </h4>
                        <p className="about-tab-card-text">Freelancer.com</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {showCart3 ? (
                  <div className="filter-item cat3">
                    <div className="about-tab-wrap">
                      {userData.skills.map((el, index) => (
                        <div
                          className="about-tab-card"
                          key={index}
                          style={{
                            minWidth: "200px",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <span className="about-tab-card-subtitle">
                            {el.name}
                          </span>
                          <h4
                            className="about-tab-card-title"
                            style={{
                              width: "50px",
                              height: "50px",
                              overflow: "hidden",
                            }}
                          >
                            <img src={el.image.url} alt="" />
                          </h4>
                          <p className="about-tab-card-text">
                            {el.company_name}
                          </p>{" "}
                          {/* Assuming 'company' is the property in 'el' that holds the company name */}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {showCart4 ? (
                  <div className="filter-item cat4">
                    <div className="about-tab-wrap">
                      {userData.timeline.map((el, index) => (
                        <div
                          className="about-tab-card"
                          key={index}
                          style={{ minWidth: "200px" }}
                        >
                          <span className="about-tab-card-subtitle">
                            {el.startDate.split("-")[0] +
                              "-" +
                              el.endDate.split("-")[0]}
                          </span>
                          <h4 className="about-tab-card-title">
                            {el.jobTitle}
                          </h4>
                          <p className="about-tab-card-text">
                            {el.company_name}
                          </p>{" "}
                          {/* Assuming 'company' is the property in 'el' that holds the company name */}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
