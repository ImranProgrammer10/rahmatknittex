import React from "react";
import  "../Banner/Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../slider/banner1.jpg";
import banner2 from "../slider/banner2.jpg";
import banner3 from "../slider/banner3.jpg";
import banner4 from "../slider/banner4.jpg";
import banner5 from "../slider/banner5.jpg";
import banner6 from "../slider/banner6.jpg";
import banner7 from "../slider/banner7.jpg";
import banner8 from "../slider/banner8.jpg";
import banner9 from "../slider/banner9.jpg";
import banner10 from "../slider/banner10.jpg";

const Banner = () => {
  const bannerImg = [
    { id: 1, image: banner1 },
    { id: 2, image: banner2 },
    { id: 3, image: banner3 },
    { id: 4, image: banner4 },
    { id: 5, image: banner5 },
    { id: 6, image: banner6 },
    { id: 7, image: banner7 },
    { id: 8, image: banner8 },
    { id: 9, image: banner9 },
    { id: 10, image: banner10 },
  ];
  return (
    <div style={{ position: "relative", top: "52px", marginBottom: "130px" }}>
      <Carousel>
        {bannerImg.map((singleImg) => {
          const { id, image } = singleImg;
          return (
            <Carousel.Item key={id} style={{ border: "none" }} interval={5000}>
              <img
                variant="top"
                className="img-fluid"
                // max-height="550px"
                src={image}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
