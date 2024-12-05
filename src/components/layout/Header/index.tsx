/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import React, { FC, useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import { menuCategory } from "../../../config/constants";
import { usePathname } from "next/navigation";

type HeaderProps = {
  toggleMenu: () => void;
  isOpen: boolean;
};

const Header: FC<HeaderProps> = ({ toggleMenu, isOpen }) => {
  const pathname = usePathname();
  // const { categoryID } = router.query
  // console.log('header', router)

  const [isOpenMenu, setIsOpenMenu] = useState(isOpen);
  // const [isExpandMenu, setIsExpandMenu] = useState(false)
  const [isSticky, setisSticky] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    setIsOpenMenu(isOpen);
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  });

  const handleMenu = () => {
    setIsOpenMenu((prev) => !prev);
    toggleMenu();
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      Router.push(`/tim-kiem?q=${searchVal}`);
      setIsSearch(false);
      setSearchVal("");
    }
  };

  /* Method that will fix header after a specific scrollable */
  const handleSticky = () => {
    // const header = document.querySelector('.header') as any
    // scrollTop >= 250
    //   ? header.classList.add('is-sticky')
    //   : header.classList.remove('is-sticky')
    const scrollTop = window.scrollY;
    scrollTop > 1 ? setisSticky(true) : setisSticky(false);
  };

  return (
    <div className={`header ${isSticky && "is-sticky"}`}>
      <div className="header-top">
        <div className="logo-group">
          <button
            className={`btn-toggleMenu hide-desktop ${isOpenMenu && "isOpen"}`}
            onClick={() => handleMenu()}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {/* <button
            className={`btn-toggleMenu hide-mobile ${isExpandMenu && 'isOpen'}`}
            onClick={() => setIsExpandMenu(!isExpandMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button> */}
          <div className="block-center">
            <div className="logo">
              <Link href="/" passHref>
                <img src={`/imgs/logo-primary.svg`} alt="logo" />
              </Link>
            </div>
            <div className="main-title">Blog</div>
          </div>
        </div>
        <div className="hotline">
          <a
            href="https://houze.vn/"
            target="_blank"
            rel="noreferrer"
            className="back-houzevn"
          >
            Truy cập houze.vn
          </a>
          <a href="tel:0886048899" className={`btn-houze btn-solid`}>
            <i className="icon-call-connecting" />
            <span>0886 048 899</span>
          </a>
        </div>
      </div>
      {/* <div className={`header-middle ${isExpandMenu && 'expand'}`}>
        <div className="navigation blog-houzevn">
          {menuData.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${item.link === pathname && 'active'}`}
            >
              <Link href={item.link}>
                <a>
                  {item.label}{' '}
                  {item.children && <i className="icon-chevron-down" />}
                </a>
              </Link>
              {item.children && (
                <div className="drop-menu">
                  {item.children.map((subItem, subIdx) => (
                    <Link key={`${index}sub-${subIdx}`} href={subItem.link}>
                      <a className="sub-drop-menu">
                        <b>{subItem.label}</b>
                        <br />
                        <span>{subItem.description}</span>
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div> */}
      <div className="header-bottom">
        <div className="navigation">
          {/* <div className={`nav-item ${pathname === '/' && 'active'}`}>
            <Link href={'/'}>
              <a>Trang chủ</a>
            </Link>
          </div> */}
          {menuCategory.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${item.link === pathname && "active"}`}
            >
              <Link href={item.link}>
                <>{item.label} </>
              </Link>
            </div>
          ))}
        </div>
        <div className={`search-blog ${isSearch && "openSearch"}`}>
          {!isSearch ? (
            <i className="icon-search" onClick={() => setIsSearch(!isSearch)} />
          ) : (
            // <i
            //   className="icon-search"
            //   onClick={() =>
            //     alert('Tính năng đang được xây dựng, mong bạn thông cảm')
            //   }
            // />
            <div className="search-group">
              <input
                type="text"
                placeholder="Nhập từ khoá tìm kiếm..."
                onChange={(e) => setSearchVal(e.target.value)}
                onKeyDown={(e) => handleSearch(e)}
              />
              <i
                className="icon-close"
                onClick={() => setIsSearch(!isSearch)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
