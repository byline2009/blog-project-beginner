"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import moment from "moment";
import Link from "next/link";
import useSWR from "swr";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

const formatTime = (time: any) => {
  const d = moment(time).format("D");
  const m = moment(time).format("M");
  const y = moment(time).format("YYYY");
  return `${d} Tháng ${m}, ${y}`;
};

const SampleNextArrow = (props: any) => {
  const { className, onClick, customClass } = props;
  return (
    <div className={`${customClass} ${className}`} onClick={onClick}>
      <i className="icon-chevron-right" />
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, onClick, customClass } = props;
  return (
    <div className={`${customClass} ${className}`} onClick={onClick}>
      <i className="icon-chevron-left" />
    </div>
  );
};
const settingTopnews = {
  dots: true,
  dotsClass: "slick-dots slick-top-news",
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const setting = {
  className: "channel-slide",
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <SampleNextArrow customClass="channel-next" />,
  prevArrow: <SamplePrevArrow customClass="channel-prev" />,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        centerMode: true,
      },
    },
  ],
};





const page = () => {

  const resHero = useSWR(
    "https://houze-portal-api.houze.io/portal/blogs?is_hero=true&ordering=hero",
    fetcher
  );
  const resWellRead = useSWR(
    "https://houze-portal-api.houze.io/portal/blogs?is_most_read=true",
    fetcher
  );
  if (!resWellRead.isLoading) {

    console.log("resWellRead", resWellRead)

  }



  const [widthWindow, setWidthWindow] = useState(0);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
    if (typeof window !== "undefined") {
      setWidthWindow(window.innerWidth);
    }
  }, []);

  return (
    <>
      {resHero.isLoading ? <>
        <div className="top-news">
          {[1, 2, 3, 4].map(item => (
            <a className="top-news-item" key={item}>
              <div className="api-loading"></div>
            </a>
          ))}
          <div className="document-receive">
            <div className="thumb">
              <img
                src="/imgs/home-page/document-receive2.png"
                alt="document-receive2.png"
              />
            </div>
            <h3>85 dự án tại TP.HCM có giá bán căn hộ dưới 1.5 tỷ/căn</h3>
            {/* <button onClick={() => setOpenModal(!openModal)}>
              <i className="icon-arrow-download" />
              Nhận tài liệu
            </button> */}
            <button
              onClick={() =>
                alert('Tính năng đang được xây dựng, mong bạn thông cảm')
              }
            >
              <i className="icon-arrow-download" />
              Nhận tài liệu
            </button>
          </div>
        </div>
      </> : <>
        <div className="top-news">
          {widthWindow < 960 ? (
            <Slider {...settingTopnews}>
              {resHero.data.results.map((item: any, index: number) => (
                <div key={index}>
                  <Link href={`/blog/${item.slug}`} legacyBehavior>
                    <a className="top-news-item">
                      <img src={item.feature_image} alt="top-new" />
                      <div className="top-news-content">
                        <span>{formatTime(item.publish_time)}</span>
                        <h2>{item.title}</h2>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </Slider>
          ) : (
            <>
              {resHero.data && resHero.data.results.map((item: any, index: number) => (
                <Link href={`/blog/${item.slug}`} key={index} legacyBehavior>
                  <a className="top-news-item">
                    <img src={item.feature_image} alt="top-new" />
                    <div className="top-news-content">
                      <span>{formatTime(item.publish_time)}</span>
                      <h2>{item.title}</h2>
                    </div>
                  </a>
                </Link>
              ))
              }

            </>

          )}
          <div className="document-receive">
            <div className="thumb">
              <img
                src="/imgs/home-page/document-receive2.png"
                alt="document-receive2.png"
              />
            </div>
            <h3>85 dự án tại TP.HCM có giá bán căn hộ dưới 1.5 tỷ/căn</h3>
            {/* <button onClick={() => setOpenModal(!openModal)}>
              <i className="icon-arrow-download" />
              Nhận tài liệu
            </button> */}
            <button
              onClick={() =>
                alert('Tính năng đang được xây dựng, mong bạn thông cảm')
              }
            >
              <i className="icon-arrow-download" />
              Nhận tài liệu
            </button>
          </div>
        </div>
        {/* top-news */}
        <div className="container">
          <div className="most-read">
            <h2 className="heading-home">Đọc nhiều nhất</h2>
            {resWellRead.isLoading ? (
              <div className="row">
                {[1, 2, 3, 4, 5, 6].map(item => (
                  <div key={item} className="col-lg-4 col-md-6 col-xs-12">
                    <a className="most-read-item">
                      <div className="api-loading"></div>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="row">
                {resWellRead.data.results.map((item: any, index: number) => (
                  <div key={index} className="col-lg-4 col-md-6 col-xs-12">
                    <Link href={`/blog/${item.slug}`} legacyBehavior>
                      <a className="most-read-item">
                        <div className="thumb">
                          <img src={item.feature_image} alt="" />
                        </div>
                        <div className="most-read-content">
                          <h3>{item.title}</h3>
                          <span>{formatTime(item.publish_time)}</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* new-blog */}
        </div>
      </>}
    </>
  );

};

export default page;
