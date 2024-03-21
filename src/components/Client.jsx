import React from "react";
import brand1 from "../img/brand/brand_1_1.svg";
import brand2 from "../img/brand/brand_1_2.svg";
import brand3 from "../img/brand/brand_1_3.svg";
import brand4 from "../img/brand/brand_1_4.svg";
import brand5 from "../img/brand/brand_1_5.svg";
import brand6 from "../img/brand/brand_1_6.svg";
const Client = ({ userData }) => {
  return (
    <div className="client-area-1 bg-title space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title">Happy Clients</span>
              <h2 className="sec-title text-white">I Worked With Brand</h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          {userData.testimonials.map((el, index) => {
            return (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <a href="#" className="client-card">
                  <img src={el.image.url} alt="Image" />
                  <h6 className="client-card-title">{el.name}</h6>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Client;
