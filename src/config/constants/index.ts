// interface ILink {
//   label: string
//   link: string
// }

const infoLink = [
  {
    label: 'Báo cáo - Thị trường',
    link: '/thi-truong',
  },
  {
    label: 'Đánh giá dự án',
    link: '/phan-tich',
  },
  {
    label: 'Khoá học cho môi giới',
    link: '#',
    isFunc: true,
  },
] as unknown[]

const companyLink = [
  {
    label: 'Về chúng tôi',
    link: 'https://houze.vn/about-us',
    newTab: true,
  },
  {
    label: 'Tuyển dụng',
    link: 'https://houze.group/careers/',
    newTab: true,
  },
  {
    label: 'Đội ngũ',
    link: 'https://houze.vn/agent',
    newTab: true,
  },
  {
    label: 'Sàn giao dịch',
    link: '#',
    isFunc: true,
  },
  {
    label: 'Liên hệ',
    link: 'https://houze.vn/contact-us',
    newTab: true,
  },
] as unknown[]

const serviceLink = [
  {
    label: 'Bán & Cho thuê nhà',
    link: '#',
    isFunc: true,
  },
  {
    label: 'Mua nhà',
    link: 'https://houze.vn/mua-nha-voi-houze',
    newTab: true,
  },
  {
    label: 'Thuê nhà ',
    link: '#',
    isFunc: true,
  },
  {
    label: 'Gói hỗ trợ vay mua ',
    link: '#',
    isFunc: true,
  },
  {
    label: 'Gặp chuyên viên tư vấn',
    link: 'https://houze.vn/chuyen-vien-tu-van',
    newTab: true,
  },
] as unknown[]

const dataWellRead = [
  {
    id: 'wr-1',
    title: 'Russian Hackers Broke Into Federal Agencies, US Officials',
    imgSrc: 'well-read-1.jpg',
  },
  {
    id: 'wr-2',
    title:
      'First to Get Vaccine: A Black Nurse Who Hopes to Persua Who Hopes to Pe...',
    imgSrc: 'well-read-2.jpg',
  },
  {
    id: 'wr-3',
    title: 'The People Who Actually Had a Pretty Great Year',
    imgSrc: 'well-read-3.jpg',
  },
  {
    id: 'wr-4',
    title: 'An Ode To The Before Times',
    imgSrc: 'well-read-4.jpg',
  },
  {
    id: 'wr-5',
    title: 'Should Companies Require Employee to Take the Vaccine?',
    imgSrc: 'well-read-5.jpg',
  },
]

const menuCategory = [
  {
    label: 'Trang chủ',
    link: '/',
  },
  {
    label: 'Phân tích',
    link: '/phan-tich',
  },
  {
    label: 'Thị trường',
    link: '/thi-truong',
  },
  {
    label: 'Kiến thức',
    link: '/kien-thuc',
  },
  {
    label: 'Đầu tư',
    link: '/dau-tu',
  },
]

const topNews = [
  {
    title:
      'Khánh thành cầu Thủ Thiêm 2 - Cầu dây văng thứ hai tại TP.HCM, nối Quận 1 và TP...',
    publishDay: '12 giờ',
    imgSrc: 'top-news-1.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title: 'Sở hữu "Landmark 81" ngay tại thành phố Thủ Đức? Tại sao kh...',
    publishDay: '20 Tháng 3, 2022',
    imgSrc: 'top-news-2.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title: 'Nhà đầu tư tay ngang khó thoát hàng khi sốt đất hạ nhiệt',
    publishDay: '24 Tháng 3, 2022',
    imgSrc: 'top-news-3.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title: 'Đã xuất hiện bong bóng cục bộ trên thị trường bất động sản',
    publishDay: '10 Tháng 5, 2022',
    imgSrc: 'top-news-4.jpg',
    linkBlog: '/blog-detail',
  },
]

const mostRead = [
  {
    title: 'Đất nền có sổ đỏ liền kề TP.HCM thu hút nhiều nhà đầu tư',
    publishDay: '21 Tháng 1, 2021',
    imgSrc: 'most-read-1.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title: 'Nguồn cung nhà ở TP.HCM sẽ đình trệ khi "siết" tín dụng BĐS ca...',
    publishDay: '9 Tháng 10, 2020',
    imgSrc: 'most-read-2.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title: 'Quy hoạch không gian ngầm của Hà Nội phủ 20 quận, huyện',
    publishDay: '16 Tháng 2, 2021',
    imgSrc: 'most-read-3.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title:
      'Cầu Thủ Thiêm 2 thông xe, Paris Thủ Thiêm trở thành điểm sáng đầu...',
    publishDay: '2 Tháng 4, 2021',
    imgSrc: 'most-read-4.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title: 'Đồng Tháp duyệt nhiệm vụ quy hoạch KĐT Mỹ Hòa và Đốc ...',
    publishDay: '11 Tháng 4, 2020',
    imgSrc: 'most-read-5.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title: 'Chuyên gia dự báo xu hướng của thị trường bất động sản 2022',
    publishDay: '1 Tháng 7, 2020',
    imgSrc: 'most-read-6.jpg',
    linkBlog: '/blog-detail',
  },
]

const newBlog = [
  {
    title: 'Thị trường bất động sản phía Nam “mất nhiệt”',
    publishDay: '3 Tháng 4, 2020',
    imgSrc: 'new-blog-1.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title:
      'Xuất hiện nguồn cung căn hộ dưới 2 tỷ đồng ngay đường Phạm Văn Đồng',
    publishDay: '7 Tháng 1, 2021',
    imgSrc: 'new-blog-2.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title:
      'Nguồn cung nhà ở TP.HCM sẽ đình trệ khi "siết" tín dụng BĐS cao cấp',
    publishDay: '23 Tháng 10, 2020',
    imgSrc: 'new-blog-3.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title:
      'Nhà phố hai mặt tiền tại The Manor Central Park - tinh hoa thương mại',
    publishDay: '22 Tháng 9, 2021',
    imgSrc: 'new-blog-4.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title: 'Tập đoàn Kavi công bố dự án Tân Uyên Central Point',
    publishDay: '17 Tháng 9, 2020',
    imgSrc: 'new-blog-5.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title: 'Bong bóng giá đất xuất hiện cục bộ, người mua nên làm gì?',
    publishDay: '20 Tháng 7, 2020',
    imgSrc: 'new-blog-6.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title: 'Giá thuê mặt bằng bán lẻ TP.HCM phục hồi',
    publishDay: '14 Tháng 6, 2020',
    imgSrc: 'new-blog-7.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title:
      'DKRA Vietnam làm Tổng đại lý tiếp thị & phân phối khối căn hộ du lịch biển Ngô Mây, Quy Nhơn',
    publishDay: '9 Tháng 7, 2020',
    imgSrc: 'new-blog-8.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title: 'Mega Royal City: Tái định nghĩa đô thị xanh giữa lòng Đồng Xoài',
    publishDay: '17 Tháng 10, 2021',
    imgSrc: 'new-blog-9.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title: 'Tranh thủ mua nhà trước nỗi lo tăng giá bán',
    publishDay: '3 Tháng 7, 2021',
    imgSrc: 'new-blog-10.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title: 'Nhà đầu tư tay ngang khó thoát hàng khi sốt đất hạ nhiệt',
    publishDay: '18 Tháng 7, 2020',
    imgSrc: 'new-blog-11.jpg',
    linkBlog: '/blog-detail',
  },
  {
    title:
      'Houze Group nhận giải thưởng đổi mới sáng tạo 2020 trong lĩnh vực bất động sản.',
    publishDay: '26 Tháng 3, 2021',
    imgSrc: 'new-blog-12.jpg',
    linkBlog: '/blog-detail',
  },
]

const searchData = [
  {
    title: 'Thị trường bất động sản phía Nam “mất nhiệt”',
    publishDay: '3 Tháng 4, 2020',
    imgSrc: 'new-blog-1.jpg',
    linkBlog: '/blog-detail',
    subject: 'Đầu tư',
  },
  {
    title:
      'Xuất hiện nguồn cung căn hộ dưới 2 tỷ đồng ngay đường Phạm Văn Đồng',
    publishDay: '7 Tháng 1, 2021',
    imgSrc: 'new-blog-2.jpg',
    linkBlog: '/blog-detail',
    subject: 'Đầu tư',
  },
  {
    title:
      'Nguồn cung nhà ở TP.HCM sẽ đình trệ khi "siết" tín dụng BĐS cao cấp',
    publishDay: '23 Tháng 10, 2020',
    imgSrc: 'new-blog-3.jpg',
    linkBlog: '/blog-detail',
    subject: 'Phân tích',
  },
  {
    title:
      'Nhà phố hai mặt tiền tại The Manor Central Park - tinh hoa thương mại',
    publishDay: '22 Tháng 9, 2021',
    imgSrc: 'new-blog-4.jpg',
    linkBlog: '/blog-detail',
    subject: 'Kiến thức',
  },
  {
    title: 'Tập đoàn Kavi công bố dự án Tân Uyên Central Point',
    publishDay: '17 Tháng 9, 2020',
    imgSrc: 'new-blog-5.jpg',
    linkBlog: '/blog-detail',
    subject: 'Thị trường',
  },
  {
    title: 'Bong bóng giá đất xuất hiện cục bộ, người mua nên làm gì?',
    publishDay: '20 Tháng 7, 2020',
    imgSrc: 'new-blog-6.jpg',
    linkBlog: '/blog-detail',
    subject: 'Góc nhìn',
  },
  {
    title: 'Giá thuê mặt bằng bán lẻ TP.HCM phục hồi',
    publishDay: '14 Tháng 6, 2020',
    imgSrc: 'new-blog-7.jpg',
    linkBlog: '/blog-detail',
    subject: 'Góc nhìn',
  },
  {
    title:
      'DKRA Vietnam làm Tổng đại lý tiếp thị & phân phối khối căn hộ du lịch biển Ngô Mây, Quy Nhơn',
    publishDay: '9 Tháng 7, 2020',
    imgSrc: 'new-blog-8.jpg',
    linkBlog: '/blog-detail',
    subject: 'Thị trường',
  },
  {
    title: 'Mega Royal City: Tái định nghĩa đô thị xanh giữa lòng Đồng Xoài',
    publishDay: '17 Tháng 10, 2021',
    imgSrc: 'new-blog-9.jpg',
    linkBlog: '/blog-detail',
    subject: 'Kiến thức',
  },
  {
    title: 'Tranh thủ mua nhà trước nỗi lo tăng giá bán',
    publishDay: '3 Tháng 7, 2021',
    imgSrc: 'new-blog-10.jpg',
    linkBlog: '/blog-detail',
    subject: 'Đầu tư',
  },
  {
    title: 'Nhà đầu tư tay ngang khó thoát hàng khi sốt đất hạ nhiệt',
    publishDay: '18 Tháng 7, 2020',
    imgSrc: 'new-blog-11.jpg',
    linkBlog: '/blog-detail',
    subject: 'Đầu tư',
  },
  {
    title:
      'Houze Group nhận giải thưởng đổi mới sáng tạo 2020 trong lĩnh vực bất động sản.',
    publishDay: '26 Tháng 3, 2021',
    imgSrc: 'new-blog-12.jpg',
    linkBlog: '/blog-detail',
    subject: 'Thị trường',
  },
]

const menuData = [
  {
    label: 'Mua',
    link: 'https://integration-houze-vn.houze.io/mua',
  },
  {
    label: 'Bán',
    link: 'https://integration-houze-vn.houze.io/ban',
  },
  {
    label: 'Cho thuê',
    link: 'https://integration-houze-vn.houze.io/cho-thue',
  },
  {
    label: 'Dịch vụ',
    link: 'https://integration-houze-vn.houze.io/dich-vu',
    children: [
      {
        label: 'Tìm chuyên viên tư vấn',
        link: 'https://integration-houze-vn.houze.io/',
        description: 'Để giúp bạn tìm hiểu sản phẩm dễ dàng hơn.',
      },
      {
        label: 'Gói vay mua nhà',
        link: 'https://integration-houze-vn.houze.io/',
        description: 'Giúp bạn có thêm sự lựa chọn về kinh phí.',
      },
      {
        label: 'Mua nhà với Houze',
        link: 'https://integration-houze-vn.houze.io/',
        description: 'Giúp quá trình tìm mua nhà của bạn trở nên đơn giản hơn.',
      },
    ],
  },
  {
    label: 'Tin tức',
    link: 'https://integration-houze-vn.houze.io/tin-tuc',
    children: [
      {
        label: 'Tin tức 1',
        link: 'https://integration-houze-vn.houze.io/',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      },
      {
        label: 'Tin tức 2',
        link: 'https://integration-houze-vn.houze.io/',
        description: 'Ducimus quibusdam repellendus quos sequi nemo',
      },
    ],
  },
  {
    label: 'Về chúng tôi',
    link: 'https://integration-houze-vn.houze.io/about-us',
  },
]

export {
  infoLink,
  companyLink,
  serviceLink,
  menuData,
  dataWellRead,
  mostRead,
  newBlog,
  topNews,
  menuCategory,
  searchData,
}
