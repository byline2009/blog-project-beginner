import React, { FC } from "react";
import Image from "next/image";
import CollapseCategory from "../../elements/CollapseCategory";
import Link from "next/link";
import { companyLink, infoLink, serviceLink } from "../../../config/constants";

const Footer: FC = () => {
  const str =
    "Houze đang cải thiện tính năng này để giúp bạn có một trải nghiệm sử dụng tốt hơn. Mong bạn thông cảm";
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="info-footer">
                <div className="logo-footer">
                  <Image
                    src="/imgs/logo.svg"
                    alt="logo"
                    width="134"
                    height="40"
                  />
                </div>
                <h3>Công ty Cổ phần Houze Group</h3>
                <div className="short-desc">
                  Giấy chứng nhận Đăng ký Kinh doanh số 0316177275 do Sở Kế
                  hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 05/03/2020
                </div>
                <p>
                  <i className="icon-location"></i>
                  46 - 48 Tạ Hiện, phường Thạnh Mỹ Lợi, Thành phố Thủ Đức, Thành
                  phố Hồ Chí Minh
                </p>
                <p>
                  <i className="icon-call"></i>
                  0886 048 899
                </p>
                <p>
                  <i className="icon-mail"></i>
                  support@houze.vn
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <CollapseCategory
                    subject={"Công ty"}
                    listLink={companyLink}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CollapseCategory subject={"Thông tin"} listLink={infoLink} />
                </div>
                <div className="col-md-4 mb-3">
                  <CollapseCategory
                    subject={"Dịch vụ"}
                    listLink={serviceLink}
                  />
                </div>
              </div>
              <div className="social">
                <span>Kết nối với chúng tôi</span>
                <ul className="social-icon">
                  <li>
                    <a
                      href="https://www.facebook.com/houze.group/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://vm.tiktok.com/ZSdMYoJ7r/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="icon-tiktok"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/houze-group/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="icon-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/c/HouzeGroup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="icon-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="copyright">
          Copyright 2022 © Houze Group - All Rights Reserved
        </div>
        <div className="term-policy">
          <Link
            legacyBehavior
            href={`${"https://houze.vn"}/dieu-khoan-su-dung`}
          >
            <a>Điều khoản sử dụng</a>
          </Link>
          <Link
            legacyBehavior
            href={`${"https://houze.vn"}/chinh-sach-bao-mat`}
          >
            <a>Chính sách bảo mật</a>
          </Link>
          <a
            onClick={() => {
              alert(str);
            }}
          >
            Quy chế hoạt động
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
