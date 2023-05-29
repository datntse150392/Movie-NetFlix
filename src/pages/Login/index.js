import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../images";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login">
        <div className="logo">
          <Link to={"/"}>
            <img src={images.logo} />
          </Link>
        </div>
      </div>
      <div className="login-content">
        <div className="login-content-top">
          <h1>Đăng nhập</h1>
          <form className="login-form">
            <input
              type="text"
              placeholder="Email hoặc số điện thoại"
              className="login-input-email"
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              className="login-input-password"
            />
            <buttom className="login-content-btn">Đăng nhập</buttom>
            <div className="login-content-form-help">
              <div className="input-login-rememberme">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Ghi nhớ tôi</label>
              </div>
              <a href="#">Bạn cần trợ giúp?</a>
            </div>
          </form>
        </div>
        <div className="login-content-bottom">
          <div className="login-signup-now">
            Bạn mới tham gia Netflix?
            <a href="#">Đăng kí ngay</a>
          </div>
        </div>
      </div>
    </div>
  );
}
