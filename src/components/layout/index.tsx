"use client";
import React, { FC, ReactNode, useState } from "react";
// import styles from "../styles/Layout.module.css";
// import Script from "next/script";
import dynamic from "next/dynamic";
import Drawer from "react-modern-drawer";
// import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="main-layout">
        <Header toggleMenu={toggleDrawer} isOpen={isOpen} />
        <div className="content-page">{children}</div>
        <Footer />
      </div>

      {/* <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="houze-drawer"
        size={300}
        zIndex={9999}
      >
        <MobileMenu toggleMenu={toggleDrawer} isOpen={isOpen} />
      </Drawer> */}
    </>
  );
};

export default Layout;
