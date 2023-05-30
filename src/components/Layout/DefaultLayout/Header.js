import React from "react";
import { images } from "../../../images";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src={images.logo} />
        </Link>
      </div>
      {/* <ul className="nav">
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/film/newFilm">Phim mới nhất</Link>
        </li>
        <li>
          <Link to="/contact">Liên hệ</Link>
        </li>
      </ul> */}
      <div className="action">
        <Link to="#">
          <button className="login-btn-contact">Liên hệ</button>
        </Link>
        <Link to="/login">
          <button className="login-btn">Đăng nhập</button>
        </Link>
      </div>
    </div>
  );
}
