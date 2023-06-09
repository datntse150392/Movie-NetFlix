import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
import { Films } from "../../assets/Datas/data";

// Madal MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { images } from "../../assets/images";

const style = {
  overflowY: "hidden",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "95%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderradius: "20px",
  boxShadow: 24,
  p: 4,
  backgroundColor: "#0000009d",
};
// Madal MUI
export default function News() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const filmId = useParams();
  const Film_detail = Films.find((obj) => {
    return obj.id == filmId.id;
  });
  const convertURL = (url) => {
    return url?.replace("watch?v=", "embed/");
  };
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
      {/* MADAL */}
      {Film_detail && (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ overflowY: "hidden" }}
          >
            <Box
              sx={style}
              style={{
                padding: "0px",
                borderRadius: "15px",
                // borderTopRightRadius: "10px",
                // borderTopLeftRadius: "10px",
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <div className="container-movie-film">
                  <embed src={convertURL(Film_detail.trailerURL)} />
                </div>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="container-movie-content">
                  <div className="container-movie-content-right">
                    <h2 className="container-movie-content-right-title">
                      {Film_detail.title}
                    </h2>
                    <p className="container-movie-content-right-description">
                      {Film_detail.description}
                    </p>
                  </div>
                  <div className="container-movie-content-lef">
                    <div className="container-movie-content-lef-director">
                      <span>Đạo diễn: </span>
                      <p> {Film_detail.director}</p>
                    </div>
                    <div className="container-movie-content-lef-actor">
                      <span>Diễn viên:</span>
                      <p> {Film_detail.actor}</p>
                    </div>
                    <div className="container-movie-content-lef-type">
                      <span>Thể loại: </span>
                      <p> {Film_detail.type}</p>
                    </div>
                    <div className="container-movie-content-lef-duration">
                      <span>Thời lượng: </span>
                      <p> {Film_detail.duration}</p>
                    </div>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal>
        </div>
      )}
      {/* MADAL */}
      {/* <div className="header">
        <div className="logo">
          <Link to={"/"}>
            <img src={images.logo} />
          </Link>
        </div>
        <ul className="nav">
          <li>
            <Link to="/film/homePage">Trang chủ</Link>
          </li>
          <li style={{ fontWeight: "bold" }}>
            <Link to="/film/newFilm">Mới & Phổ biến</Link>
          </li>
        </ul>
      </div> */}
      {/* SHOW BILLBOARD  */}
      {/* <div className="billboard-motion">
        <div className="motion-background">
          <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRUqohxfdAia6iBSE63rhWPsjtyFTbzcTeu3Up_bDcmwfDdb70KATfGbesYXlYwH-nflHKUyA2yukEJw5f5yWGs8lF79SKUT4R7w.webp?r=4d1" />
        </div>
        <div className="info-container">
          <div className="billboard-title">
            <img
              alt=""
              class="title-logo "
              src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTn9tDtVNN5DxSnjtJpoa4APD2F6X5rii3s8-tWSy54SzKebBNWiaVlWtc9U9dsZpDoClc5Ox5NFP-ikHsa7kpotW5qs993scAfygfcZH8MTH5lIbn-nNK2MIYCMI5QshzzBy31_sPJivvL5xVFrzx1as6pXHR_BBHH3cpAiV1-LhdVc7J9a4w.webp?r=41e"
              title="Xác ướp"
            />
          </div>
          <div className="info-wrapper">
            <p>
              Một cô gái kỳ lạ biến thành mèo để thu hút sự chú ý của người cô
              thầm thích. Nhưng ranh giới giữa người và động vật bắt đầu bị xóa
              nhòa trước khi cô kịp nhận ra điều đó.
            </p>
          </div>
          <div className="action">
            <Link to="/film/newFilm/11">
              <button onClick={handleOpen} className="login-btn">
                Xem trailer
              </button>
            </Link>
          </div>
        </div>
      </div> */}
      {/* SHOW BILLBOARD */}
      <div className="slider-content">
        {/* Mới trên Netflix */}
        <h2 style={{ color: "white" }} className="container-news-title">
          Mới trên Netflix
        </h2>
        <Slider {...settings} style={{ overflowY: "hidden" }}>
          {Films.map((film, index) => (
            <div className="news" key={index}>
              <div className="news-top">
                <Link to={`/film/newFilm/${film.id}`}>
                  <img src={film.img} alt={film.title} onClick={handleOpen} />
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        {/* Mới trên Netflix */}

        {/* Top 10 chương trình truyền hình tại Việt Nam hôm nay*/}
        <h2 style={{ color: "white" }} className="container-news-title">
          Top 10 chương trình truyền hình tại Việt Nam hôm nay
        </h2>
        <Slider {...settings} style={{ overflowY: "hidden" }}>
          {listFilm_trending.map((film, index) => (
            <div className="news" key={index}>
              <div className="news-top">
                <Link to={`/film/newFilm/${film.id}`}>
                  <img src={film.img} alt={film.title} onClick={handleOpen} />
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        {/* Top 10 chương trình truyền hình tại Việt Nam hôm nay */}

        {/* Đáng chờ đợi*/}
        <h2 style={{ color: "white" }} className="container-news-title">
          Đáng chờ đợi
        </h2>
        <Slider {...settings} style={{ overflowY: "hidden" }}>
          {listFilm_Ainime.map((film, index) => (
            <div className="news" key={index}>
              <div className="news-top">
                <Link to={`/film/newFilm/${film.id}`}>
                  <img src={film.img} alt={film.title} onClick={handleOpen} />
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
