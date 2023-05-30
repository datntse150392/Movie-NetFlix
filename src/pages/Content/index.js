import React, { useState } from "react";
import { Films } from "../../Datas/data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
export default function Content() {
  const [Film, setFilm] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <>
      <Slider {...settings}>
        {Films.map((film, index) => (
          <div className="card" key={index}>
            <div className="card-top">
              <img src={film.img} alt={film.title} />
            </div>
            <div className="card-bottom">
              <h3 className="card-bottom-title">{film.title}</h3>
              <button className="card-bottom-btn">
                <Link to={`/film/detail/${film.id}`}>Chi tiết</Link>
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Start Hiện Thông Tin Chi Tiết */}
      {/* <button className="card-bottom-btn" onClick={() => setFilm(film)}>
                <a href="#popup1" id="openPopup">
                  <p style={{ color: "white", fontSize: 14 }}>Chi tiết</p>
                </a>
              </button> */}
      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={Film.img} />
          <h2>{Film.title}</h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">{Film.des}</div>
        </div>
      </div>
      {/* End Hiện Thông Tin Chi Tiết */}
    </>
  );
}
