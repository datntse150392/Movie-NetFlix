import React, { useState } from "react";
import { Films } from "../../Datas/data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { images } from "../../images/index.js";
export default function Content() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="container-content">
        <h1 className="container-content-title">
          Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác
        </h1>
        <h3 className="container-content-subTitle">
          Xem ở mọi nơi. Hủy bất kỳ lúc nào.
        </h3>
        <div className="container-content-action">
          <Link to="/film/newFilm">
            <button className="container-content-btn">
              Xem ngay những bộ phim mới nhất
            </button>
          </Link>
        </div>
      </div>
    </Slider>
  );
}
