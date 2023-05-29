import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <p className="footer-top-title">
          Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách
          thành viên của bạn.
        </p>
      </div>
      <div className="footer-bottom">
        <input placeholder="Địa chỉ Email" className="footer-bottom-input" />
        <button className="footer-bottom-btn">Bắt đầu</button>
      </div>
    </div>
  );
}
