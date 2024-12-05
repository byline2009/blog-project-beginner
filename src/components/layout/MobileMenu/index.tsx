import React, { FC } from "react";
import Link from "next/link";
import MenuItem from "@components/elements/MenuItem";
import { menuCategory } from "@config/constants";
import PhoneComponent from "@components/elements/PhoneComponent";

type MenuProps = {
  toggleMenu: () => void;
  isOpen: boolean;
};

const MobileMenu: FC<MenuProps> = ({ toggleMenu, isOpen }) => {
  // const [isOpenMenu, setIsOpenMenu] = useState()

  return (
    <div className="menu-mobile">
      <div className="head-menu">
        <div className="group-logo">
          <Link href="/" passHref>
            <img
              src="/imgs/logo-primary.svg"
              alt="logo"
              width="80"
              height="24"
            />
          </Link>
          <span className="title-category">Blog</span>
        </div>
        <button
          className={`btn-toggleMenu ${isOpen && "isOpen"}`}
          onClick={() => toggleMenu()}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="hotline-menu-mobile">
        <a href="tel:0886048899" className={`btn-houze btn-solid`}>
          <PhoneComponent color="#fff" />
          <span>0886 048 899</span>
        </a>
      </div>
      <div className="houzevn-mb">
        <b>Houze.vn</b>
        <a href="https://houze.vn/" target="_blank" rel="noreferrer">
          Truy cập houze.vn
        </a>
      </div>
      <div className="navigation-menu no-line">
        {/* <MenuItem itemMenuLink={{ label: 'Trang chủ', link: '/' }} /> */}
        {menuCategory.map((item: any, index) => (
          <MenuItem key={index} itemMenuLink={item} />
        ))}
      </div>
      {/* <div className="menu-houzevn">
        <h3>Houze.vn</h3>
        <div className="navigation-menu blog-houzevn">
          {menuData.map((item: any, index) => (
            <MenuItem key={index} itemMenuLink={item} />
          ))}
        </div>
      </div> */}
      <div className="info-menu-mobile">
        <p>
          <i className="icon-call-connecting"></i> Hotline 0886 048 899
        </p>
        <ul className="social-menu">
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
  );
};

export default MobileMenu;
