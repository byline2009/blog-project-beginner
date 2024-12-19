
"use client"
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import moment from 'moment'
import Link from 'next/link'
export default function Page() {
    const params = useParams();
    const { slug } = params;
    const [isLoading, setIsloading] = useState(true);
    const [isLoadingRelateBlog, setIsLoadingRelateBlog] = useState(true);

    const [isSticky, setIsSticky] = useState<boolean>(false)
    const [initTop, setInitTop] = useState<number>(0)
    const [heightContent, setHeightContent] = useState<number>(0)
    const [blogRelateList, setBlogRelateList] = useState<any>();

    const [blog, setBlog] = useState<any>();
    useEffect(() => {
        const getDatas = async () => {
            const res = await fetch(`https://houze-portal-api.houze.io/portal/blogs/${slug}`)
            const data = await res.json();
            if (data) {
                setIsloading(prev => !prev);
                setBlog(data)
            }

            const resBlogRelateList = await fetch('https://houze-portal-api.houze.io/portal/blogs?is_most_read=true&limit=5&ordering=-publish_time');
            const dataBlogRelateList = await resBlogRelateList.json();
            if (dataBlogRelateList) {
                setIsLoadingRelateBlog(false)
                setBlogRelateList(dataBlogRelateList);
            }

        }
        getDatas();

    }, []);
    useEffect(() => {
        console.log("blogRelateList", blogRelateList)

    }, [blogRelateList])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollTop: any = window.scrollY
            scrollTop >= initTop ? setIsSticky(true) : setIsSticky(false)
            if (scrollTop > heightContent - initTop + 150) setIsSticky(false)
        })
        return () => {
            window.removeEventListener('scroll', () => { })
        }
    })

    return (
        <div className="blog-detail-page">
            <div className="container">
                {isLoading ? (
                    <div className="blog-loading">
                        <div className="load1">
                            <div className="api-loading"></div>
                        </div>
                        <div className="load2">
                            <div className="api-loading"></div>
                        </div>
                        <div className="load3">
                            <div className="api-loading"></div>
                        </div>
                        <div className="flex-load">
                            <div className="load4">
                                <div className="api-loading"></div>
                            </div>
                            <div className="load5">
                                <div className="api-loading"></div>
                            </div>
                        </div>
                    </div>
                ) : (

                    <div
                        id="blog-detail"
                        className="blog-detail"
                        style={{ opacity: isLoading ? 0 : 1 }}
                    >
                        <div className="subject">
                            {blog.categories.map((item: any) => (
                                <span key={item.id}>{item.name}</span>
                            ))}
                        </div>
                        <h1 className="title-blog">{blog.title}</h1>
                        <p className="short-desc">{blog.sapo}</p>
                        <div className="row">
                            <div className="col-lg-9 col-md-12 pr-24">
                                <div className="blog-detail-content">
                                    <div className="blog-big-thumb">
                                        <img
                                            src={blog.feature_image}
                                            alt={blog.feature_image_alt_text}
                                        />
                                    </div>
                                    <div className="author-and-content">
                                        <div className="author">
                                            <div className="author-avatar">
                                                <img src="/imgs/avatar-houze.jpg" alt="avatar" />
                                            </div>
                                            <h4 className="author-name">{blog.author_text}</h4>
                                            <div className="day-post">
                                                {moment(blog.publish_time).format('DD/MM/YYYY')}
                                            </div>

                                        </div>
                                        <div className="blog-content">
                                            <div
                                                className="content"
                                                dangerouslySetInnerHTML={{ __html: blog.content }}
                                            ></div>
                                            <ul className="hashtag">
                                                {blog.tags.map((item: any, index: any) => (
                                                    <li key={index}>
                                                        <img src="/imgs/blog-detail/tag-icon.svg" alt="tag" />{' '}
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            {/* <div className="newsletter-blog">
                      <h3>Đăng ký nhận tin phân tích thị trường từ Houze</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        At diam odio diam adipiscing augue leo fringilla
                        imperdiet.
                      </p>
                      <div className="form-newsletter">
                        <input
                          type="text"
                          placeholder="Để lại email tại đây."
                        />
                        <button>Đăng ký</button>
                      </div>
                    </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {!isLoadingRelateBlog && (
                                <div className="col-lg-3 col-md-12 pl-24">
                                    <div className="well-read">
                                        <h3>Đọc nhiều</h3>
                                        {blogRelateList.results.map((item: any) => (
                                            <Link key={item.id} href={`/blog/${item.slug}`} legacyBehavior>
                                                <a className="well-read-item">
                                                    <div className="sm-thumb">
                                                        <img
                                                            src={item.feature_image}
                                                            alt={item.feature_image_alt_text}
                                                        />
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                )}
            </div>

        </div>

    )
}

// export async function generateStaticParams() {
//     const blogs = await fetch('https://houze-portal-api.houze.io/portal/blogs?is_hero=false&is_most_read=false&limit=100&offset=0&ordering=-publish_time&section_id=1', {
//         cache: 'force-cache',
//     }).then((res) => res.json())

//     return blogs.results.map((blog: any) => ({
//         slug: String(blog.slug),
//     }))
// }