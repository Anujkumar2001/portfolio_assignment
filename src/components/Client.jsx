import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../style/swiper.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
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
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{ color: "white", paddingBottom: "60px" }}
        >
          {userData.testimonials.map((el, index) => {
            return (
              <SwiperSlide
                key={index}
                className="col-lg-3 col-md-4 col-sm-6"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a href="#" className="">
                  <img
                    src={el.image.url}
                    alt="Image"
                    style={{ width: "350px" }}
                  />
                  <h6 className="client-card-title">{el.name}</h6>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Client;
