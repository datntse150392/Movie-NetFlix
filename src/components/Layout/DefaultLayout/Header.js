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
      <ul className="nav">
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li style={{ fontWeight: "bold" }}>
          <Link to="/film/newFilm">Mới & Phổ biến</Link>
        </li>
      </ul>
      <div className="action">
        <Link to="/login">
          <button className="login-btn">Đăng nhập</button>
        </Link>
      </div>
    </div>
  );
}
