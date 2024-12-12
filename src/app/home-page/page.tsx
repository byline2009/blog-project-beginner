import React from "react";
import Slider from "react-slick";
import moment from "moment";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = await fetch(
  "https://houze-portal-api.houze.io/portal/blogs?is_hero=true&ordering=hero"
);
const posts = await data.json();

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
  return <>Home page</>;
};

export default page;
