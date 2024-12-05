"use client"; // This is a client component 👈🏽

import React, { FC, useState, useEffect } from "react";
import { Collapse } from "react-bootstrap";
import Link from "next/link";

// interface ILink {
//   label: string
//   link: string
// }

type CategoryProps = {
  subject: string;
  listLink: any[];
};

const CollapseCategory: FC<CategoryProps> = ({ subject, listLink }) => {
  const str =
    "Houze đang cải thiện tính năng này để giúp bạn có một trải nghiệm sử dụng tốt hơn. Mong bạn thông cảm";
  const [open, setOpen] = useState(true);
  const [widthWindow, setWidthWindow] = useState(0);

  useEffect(() => {
    // make sure your function is being called in client side only
    if (typeof window !== "undefined") {
      setWidthWindow(window.innerWidth);
      if (window.innerWidth < 480) {
        setOpen(false);
      }
    }
  }, []);

  return (
    <div className="category-footer">
      <div className="lable-category">
        <h4>{subject}</h4>
        {widthWindow < 480 && (
          <button
            className={`btn-down ${open && "active"}`}
            onClick={() => setOpen(!open)}
          >
            <i className="icon-chevron-down" />
          </button>
        )}
      </div>
      <Collapse in={open}>
        <ul className="list-category-footer">
          {listLink.map((item, index) => (
            <li key={index}>
              <Link legacyBehavior href={item.link}>
                <a target={item.newTab ? "_blank" : "_self"}>{item.label}</a>
              </Link>
              {item.isFunc && (
                <div
                  className="alert-func"
                  onClick={() => {
                    alert(str);
                  }}
                ></div>
              )}
            </li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
};

export default CollapseCategory;
