import React, { useState } from "react";
import { Films } from "../../Datas/data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
export default function Content() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <Slider>
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
