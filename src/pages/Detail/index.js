import React, { useState } from "react";
import { Films } from "../../Datas/data.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
export default function Detail() {
  const filmId = useParams();
  const film = Films.find((obj) => {
    return obj.id == filmId.id;
  });
  return (
    <>
      <div className="detail">
        <div className="detail-top">
          <img src={film.img} alt={film.title} />
        </div>
        <div className="detail-bottom">
          <h3 className="detail-bottom-title">{film.title}</h3>
          <p className="detail-bottom-description">{film.des}</p>
          <p className="detail-bottom-nation">Quốc gia: {film.nation}</p>
          <p className="detail-bottom-year">Ngày phát hành: {film.year}</p>
          <p className="detail-bottom-director">
            Đạo diễn: <strong>{film.director}</strong>
          </p>
          <p className="detail-bottom-budget">Ngân sách: {film.budget}</p>
          <p className="detail-bottom-hits">Công chiếu: {film.hits}</p>
          <p className="detail-bottom-revenue">Doanh thu: {film.revenue}</p>
          <div className="detail-bottom-watch">
            <Link to={`/trailer/${film.id}`}>
              <button className="detail-bottom-btn">Xem Trailer</button>
            </Link>
            <Link to={`/movieFilm/${film.id}`}>
              <button className="detail-bottom-btn">Xem Phim Ngay</button>
            </Link>
          </div>
        </div>
      </div>
    </>
    // <>
    //   {/* Start Hiện Thông Tin Chi Tiết */}
    //   <div id="popup1" className="overlay">
    //     <div className="popup">
    //       <img src={Film.img} />
    //       <h2>{Film.title}</h2>
    //       <a className="close" href="#">
    //         &times;
    //       </a>
    //       <div className="content">{Film.des}</div>
    //     </div>
    //   </div>
    //   {/* End Hiện Thông Tin Chi Tiết */}
    // </>
  );
}
