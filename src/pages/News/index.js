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
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
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
  const listFilm_trending = Films.filter((film, index) => {
    return film.state === "trending";
  });

  // Lọc ra những bộ phim kinh dị
  const listFilm_Honor = Films.filter((film, index) => {
    return film.type === "honor";
  });

  // Lọc ra những bộ phim mới và Trending
  const listFilm_Ainime = Films.filter((film, index) => {
    return film.type === "Phim Anime";
  });

  return (
    <div className="container-news">
      {/* SHOW BILLBOARD  */}
      <div className="billboard-motion">
        <div className="motion-background">
          <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW5vt_D3ij1XLuLS6gcEDbmt0tuUBnh5wHmf_PNt-ZD7aUBqvLVrDxA2Kx_FxgLhoX_bdWF95uKaJchwgnHai3Slbe0M0ODNJGzD.webp?r=960" />
        </div>
        <div className="info-container">
          <div className="billboard-title">
            <img
              alt="Xác ướp"
              class="title-logo "
              src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVI4H0FihnbE_gEiJEOrnQv4U81G8GDEn1yC6P0Wcqtx0XX4KWpCbZo2WUKdYVjlJkHttag9hWH_ANwkOG5W7zbGk0CM-SZ4GdJ_jhx-E4Op.webp?r=8d0"
              title="Xác ướp"
            />
          </div>
          <div className="info-wrapper">
            <p>
              Một người lính truy tìm kho báu đánh thức một công chúa Ai Cập cổ
              đại. Nàng đã chờ đợi hàng thế kỷ để trả thù một thế giới đối xử tệ
              với mình.
            </p>
          </div>
          <div className="action">
            <Link to="/film/detail/7">
              <button className="login-btn">Xem trailer</button>
            </Link>
          </div>
        </div>
      </div>
      {/* SHOW BILLBOARD */}
      <div className="slider-content">
        {/* Tổng hợp tất cả bộ phim hiện có */}
        <h2 style={{ color: "white" }} className="container-news-title">
          Phổ biến trên Netflix
        </h2>
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

        {/* Tổng hợp tất cả bộ phim thịnh hành*/}
        <h2 style={{ color: "white" }} className="container-news-title">
          Hiện đang thịnh hành
        </h2>
        <Slider {...settings} style={{ overflowY: "hidden" }}>
          {listFilm_trending.map((film, index) => (
            <div className="news" key={index}>
              <div className="news-top">
                <Link to={`/film/detail/${film.id}`}>
                  <img src={film.img} alt={film.title} />
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        {/* Tổng hợp tất cả bộ phim thịnh hành */}

        {/* Tổng hợp tất cả bộ phim Anime*/}
        <h2 style={{ color: "white" }} className="container-news-title">
          Phim Anime
        </h2>
        <Slider {...settings} style={{ overflowY: "hidden" }}>
          {listFilm_Ainime.map((film, index) => (
            <div className="news" key={index}>
              <div className="news-top">
                <Link to={`/film/detail/${film.id}`}>
                  <img src={film.img} alt={film.title} />
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        {/* Tổng hợp tất cả bộ phim Anime */}
      </div>
    </div>
  );
}
