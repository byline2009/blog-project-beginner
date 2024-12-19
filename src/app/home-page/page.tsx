"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import moment from "moment";
import Link from "next/link";
import useSWR from "swr";
import useSWRImmutable from 'swr/immutable'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface IBlogCategory {
  id: string,
  name: string
}
interface IBlog {
  author_text: string,
  categories: IBlogCategory[],
  created: string,
  feature_image?: string,
  id: number,
  modified?: string,
  publish_time: string,
  slug: string,
  title: string
}

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





const Page = () => {

  const resHero = useSWR(
    "https://houze-portal-api.houze.io/portal/blogs?is_hero=true&ordering=hero",
    fetcher
  );
  const resWellRead = useSWR(
    "https://houze-portal-api.houze.io/portal/blogs?is_most_read=true",
    fetcher
  );
  const resNewestBlog = useSWRImmutable('https://houze-portal-api.houze.io/portal/blogs?is_hero=false&is_most_read=false&limit=1000&offset=0&ordering=-publish_time&section_id=1', fetcher)






  const [widthWindow, setWidthWindow] = useState(0);
  const [showChild, setShowChild] = useState(false);
  const [defautCategory, setDefautCategory] = useState('all')
  const [filterData, setFilterData] = useState<any[]>([])
  const [filterAllData, setFilterAllData] = useState<any[]>([])

  const [numberToShow, setnumberToShow] = useState(12)
  const [blogData, setBlogData] = useState<any[]>([])
  const [showLoadmore, setshowLoadmore] = useState<boolean>(true)
  const firstUpdate = useRef(true)

  useEffect(() => {
    setShowChild(true);
    if (typeof window !== "undefined") {
      setWidthWindow(window.innerWidth);
    }

    if (resNewestBlog && !resNewestBlog.isLoading) {
      const data = resNewestBlog.data.results.sort((a: any, b: any) =>
        b.publish_time.localeCompare(a.publish_time)
      )
      handleShowMore(data)
    }
  }, [resNewestBlog.isLoading]);
  useEffect(() => {
    if (resNewestBlog && !resNewestBlog.isLoading && defautCategory == 'all') {
      handleFilter(resNewestBlog.data.results)
    }
    if (numberToShow > 12 && filterAllData) {
      handleFilter(filterAllData)
    }


    // }
    // if (numberToShow > 12) {
    //   fetch(`https://houze-portal-api.houze.io/portal/blogs?is_hero=false&is_most_read=false&limit=${numberToShow}&offset=0&ordering=-publish_time&section_id=1`).then(async (res) => {

    //     const dataLocal = await res.json()

    //     handleShowMore(dataLocal.results)

    //   })
    // }


  }, [numberToShow])

  useEffect(() => {
    console.log("check", numberToShow, filterAllData)
    if (filterAllData) {
      handleShowMore(filterAllData)
    }

  }, [filterAllData])

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    if (resNewestBlog && !resNewestBlog.isLoading) {
      handleFilter(resNewestBlog.data.results)
    }

  }, [defautCategory])

  const handleShowMore = (arr: any[]) => {
    const display = arr.filter((it: any, idx: any) => idx < numberToShow);

    // if (arr.length < numberToShow) {
    //   setshowLoadmore(false)
    // }
    setFilterData(display)
  }

  const handleFilter = (arr: any) => {
    let filterCategory = null
    if (defautCategory !== 'all') {
      filterCategory = arr.reduce((resData: any, item: any) => {
        const subarr = item.categories.reduce((a: any, b: any) => {
          if (b.name === defautCategory) resData.push(item)
          return a
        }, {})
        return resData
      }, [])
    } else {
      filterCategory = arr
    }
    setFilterAllData(filterCategory)
    console.log("filterCategory", filterCategory)
    setnumberToShow(12)
    // setFilterData(filterCategory)
  }



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




        </div>

      </>}
      <div className="container">
        <div className="new-blog">
          <h2 className="heading-home">Bài viết mới nhất</h2>
          <div className="new-blog-category">
            <div
              className={`category-item ${defautCategory === 'all' && 'active'
                }`}
              onClick={() => setDefautCategory('all')}
            >
              Tất cả
            </div>
            <div
              className={`category-item ${defautCategory === 'Phân tích' && 'active'
                }`}
              onClick={() => setDefautCategory('Phân tích')}
            >
              Phân tích
            </div>
            <div
              className={`category-item ${defautCategory === 'Thị trường' && 'active'
                }`}
              onClick={() => setDefautCategory('Thị trường')}
            >
              Thị trường
            </div>
            <div
              className={`category-item ${defautCategory === 'Kiến thức' && 'active'
                }`}
              onClick={() => setDefautCategory('Kiến thức')}
            >
              Kiến thức
            </div>
            <div
              className={`category-item ${defautCategory === 'Đầu tư' && 'active'
                }`}
              onClick={() => setDefautCategory('Đầu tư')}
            >
              Đầu tư
            </div>
          </div>
          {resNewestBlog.isLoading ? (
            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
                <div key={item} className="col-lg-3 col-md-6 col-xs-12">
                  <a className="new-blog-item">
                    <div className="api-loading"></div>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="row">
              {filterData.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-xs-12">
                  <Link href={`/blog/${item.slug}`} legacyBehavior>
                    <a className="new-blog-item">
                      <div className="thumb">
                        <img src={item.feature_image} alt="" />
                      </div>
                      <div className="new-blog-content">
                        <h3>{item.title}</h3>
                        <span>{formatTime(item.publish_time)}</span>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          )}
          {showLoadmore && (
            <div className="text-center">
              <button
                className="btn-houze btn-solid"
                onClick={() => {
                  setnumberToShow(numberToShow + 12)
                }}
              >
                Xem thêm bài viết
              </button>
            </div>
          )}
        </div>

      </div>


    </>
  );

};

export default Page;
