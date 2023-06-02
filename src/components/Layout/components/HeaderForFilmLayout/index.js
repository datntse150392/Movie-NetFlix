import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderForFilmLayout.module.css";
import { images } from "../../../../assets/images";
export default function HeaderForFilmLayout() {
  return (
    <div className={styles["header"]}>
      <div className={styles["header-logo"]}>
        <Link to={"/"}>
          <img src={images.logo} />
        </Link>
      </div>
      <ul className={styles["nav"]}>
        <li>
          <Link to="/film/homePage">Trang chủ</Link>
        </li>
        <li style={{ fontWeight: "bold" }}>
          <Link to="/film/newFilm">Mới & Phổ biến</Link>
        </li>
        <li style={{ fontWeight: "" }}>
          <Link to="/film/newFilm">Danh sách Phim của bạn</Link>
        </li>
      </ul>
    </div>
  );
}
