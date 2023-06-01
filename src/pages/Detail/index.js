import React, { useState } from "react";
import { Films } from "../../Datas/data.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { images } from "../../images/index.js";
// Icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// Test
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  padding: "20px",
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 850,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  backgroundColor: "#0000009d",
};

export default function Detail() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const filmId = useParams();
  const film = Films.find((obj) => {
    return obj.id == filmId.id;
  });
  const convertURL = (url) => {
    return url?.replace("watch?v=", "embed/");
  };

  return (
    <div className="container-movie">
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <div className="container-movie-film">
                <embed src={convertURL(film.trailerURL)} />
              </div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className="container-movie-content">
                <div className="container-movie-content-right">
                  <h2 className="container-movie-content-right-title">
                    {film.title}
                  </h2>
                  <p className="container-movie-content-right-description">
                    {film.description}
                  </p>
                </div>
                <div className="container-movie-content-lef">
                  <div className="container-movie-content-lef-director">
                    <span>Đạo diễn: </span>
                    <p> {film.director}</p>
                  </div>
                  <div className="container-movie-content-lef-actor">
                    <span>Diễn viên:</span>
                    <p> {film.actor}</p>
                  </div>
                  <div className="container-movie-content-lef-type">
                    <span>Thể loại: </span>
                    <p> {film.type}</p>
                  </div>
                  <div className="container-movie-content-lef-duration">
                    <span>Thời lượng: </span>
                    <p> {film.duration}</p>
                  </div>
                </div>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
      <div className="header" style={{ width: "100%" }}>
        <div className="logo">
          <Link to={"/"}>
            <img src={images.logo} />
          </Link>
        </div>
        <ul className="nav">
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li style={{ fontWeight: "bold" }}>
            <Link to="/film/newFilm">Mới & Phổ biến</Link>
          </li>
        </ul>
        <div className="action">
          <AccountCircleIcon fontSize="large" sx={{ color: "white" }} />
        </div>
      </div>
      <div className="container-movie-film">
        <embed src={convertURL(film.trailerURL)} />
      </div>
      <div className="container-movie-content">
        <div className="container-movie-content-right">
          <h2 className="container-movie-content-right-title">{film.title}</h2>
          <p className="container-movie-content-right-description">
            {film.description}
          </p>
        </div>
        <div className="container-movie-content-lef">
          <div className="container-movie-content-lef-director">
            <span>Đạo diễn: </span>
            <p> {film.director}</p>
          </div>
          <div className="container-movie-content-lef-actor">
            <span>Diễn viên:</span>
            <p> {film.actor}</p>
          </div>
          <div className="container-movie-content-lef-type">
            <span>Thể loại: </span>
            <p> {film.type}</p>
          </div>
          <div className="container-movie-content-lef-duration">
            <span>Thời lượng: </span>
            <p> {film.duration}</p>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <div className="detail">
    //     <div className="detail-top">
    //       <embed></embed>
    //       {/* <img src={film.img} alt={film.title} /> */}
    //     </div>
    //     <div className="detail-bottom">
    //       <h3 className="detail-bottom-title">{film.title}</h3>
    //       <p className="detail-bottom-description">{film.des}</p>
    //       <p className="detail-bottom-nation">Quốc gia: {film.nation}</p>
    //       <p className="detail-bottom-year">Ngày phát hành: {film.year}</p>
    //       <p className="detail-bottom-director">
    //         Đạo diễn: <strong>{film.director}</strong>
    //       </p>
    //       <p className="detail-bottom-budget">Ngân sách: {film.budget}</p>
    //       <p className="detail-bottom-hits">Công chiếu: {film.hits}</p>
    //       <p className="detail-bottom-revenue">Doanh thu: {film.revenue}</p>
    //       <div className="detail-bottom-watch">
    //         <Link to={`/film/trailer/${film.id}`}>
    //           <button className="detail-bottom-btn">Xem Trailer</button>
    //         </Link>
    //         <Link to={`/film/movieFilm/${film.id}`}>
    //           <button className="detail-bottom-btn">Xem Phim</button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </>
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
