import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Films } from "../../Datas/data";
import { Link } from "react-router-dom";
export default function News() {
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

  // Lọc ra những bộ phim mới và Trending
  const listFilm_New = Films.filter((film, index) => {
    return film.statusFilm === "new";
  });

  // Lọc ra những bộ phim kinh dị
  const listFilm_Honor = Films.filter((film, index) => {
    return film.type === "honor";
  });

  return (
    <div className="container-news">
      {/* Tổng hợp các bộ phim Trending && Mới */}
      <h2 style={{ color: "white" }}>Top Trending</h2>
      <Slider {...settings} style={{ overflowY: "hidden" }}>
        {listFilm_New.map((film, index) => (
          <div className="news" key={index}>
            <div className="news-top">
              <Link to={`/film/detail/${film.id}`}>
                <img src={film.img} alt={film.title} />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      {/* Tổng hợp các bộ phim Trending && Mới */}

      {/* Tổng hợp tất cả bộ phim hiện có */}
      <h2 style={{ color: "white" }}>Khám phá thêm</h2>
      <Slider {...settings} style={{ overflowY: "hidden" }}>
        {Films.map((film, index) => (
          <div className="news" key={index}>
            <div className="news-top">
              <Link to={`/film/detail/${film.id}`}>
                <img src={film.img} alt={film.title} />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      {/* Tổng hợp tất cả bộ phim hiện có */}

      {/* Tổng hợp tất cả bộ phim Kinh dị*/}
      <h2 style={{ color: "white" }}>Phim kinh dị</h2>
      <Slider {...settings} style={{ overflowY: "hidden" }}>
        {listFilm_Honor.map((film, index) => (
          <div className="news" key={index}>
            <div className="news-top">
              <Link to={`/film/detail/${film.id}`}>
                <img src={film.img} alt={film.title} />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      {/* Tổng hợp tất cả bộ phim hiện có */}
    </div>
  );
}
